import React, { useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";
import QRCode from "qrcode";
import jsQR from "jsqr";

/* -------------------------
   Storage & helpers
------------------------- */
const STORAGE_KEY = "qrGenerator.imageScan.v1";

/* Safe LocalStorage */
const safeGet = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? null; }
    catch { return null; }
};
const safeSet = (obj) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch { }
};

/* Date helper */
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDateTime = (ts) => {
    const dt = new Date(ts);
    const date = `${MONTHS_SHORT[dt.getMonth()]} ${String(dt.getDate()).padStart(2, "0")}, ${dt.getFullYear()}`;
    const time = dt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    return `${date}, ${time}`;
};
const looksLikeUrl = (s = "") => {
    try { new URL(s); return true; } catch { }
    return /^([a-z0-9-]+\.)+[a-z]{2,}([/?#].*)?$/i.test(s);
};

/* Defaults */
const DEFAULTS = {
    text: "https://a2rp.github.io/react-mini-apps-suite",
    ecLevel: "M",
    size: 256,
    margin: 4,
    dark: "#111827",
    light: "#ffffff",
    type: "canvas",
    updatedAt: Date.now(),

    // image scan state
    scanResult: "",
    scanError: "",
    fileName: "",
};

export default function QrGenerator() {
    const persisted = safeGet();
    const [opts, setOpts] = useState(persisted || DEFAULTS);
    const [toast, setToast] = useState("");
    const [dragOver, setDragOver] = useState(false);

    // Generator refs
    const canvasRef = useRef(null);
    const svgRef = useRef(null);

    // Scanner refs
    const scanCanvasRef = useRef(null); // shows uploaded image + bbox

    /* Persist */
    useEffect(() => { safeSet(opts); }, [opts]);

    /* ------------ Generator render ------------ */
    useEffect(() => {
        const text = opts.text || "";
        const common = {
            errorCorrectionLevel: opts.ecLevel,
            margin: Number(opts.margin) || 0,
            color: { dark: opts.dark, light: opts.light },
            width: Number(opts.size) || 256,
            scale: 1,
        };

        if (opts.type === "canvas") {
            const canvas = canvasRef.current; if (!canvas) return;
            QRCode.toCanvas(canvas, text, common, () => { });
        } else {
            const svgEl = svgRef.current; if (!svgEl) return;
            QRCode.toString(text, { ...common, type: "svg" }, (err, svg) => {
                if (err) return;
                svgEl.innerHTML = svg;
            });
        }
    }, [opts]);

    const pulse = (m) => { setToast(m); setTimeout(() => setToast(""), 1200); };

    const onDownloadPNG = () => {
        if (opts.type !== "canvas") return pulse("Switch type to Canvas for PNG");
        const canvas = canvasRef.current;
        canvas.toBlob((blob) => {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `qr-${new Date().toISOString().slice(0, 10)}.png`;
            a.click();
            URL.revokeObjectURL(a.href);
        }, "image/png");
    };

    const onDownloadSVG = () => {
        if (opts.type === "svg") {
            const svg = svgRef.current?.innerHTML || "";
            if (svg) return downloadSvg(svg);
        }
        // regenerate as SVG
        QRCode.toString(opts.text || "", {
            errorCorrectionLevel: opts.ecLevel,
            margin: Number(opts.margin) || 0,
            color: { dark: opts.dark, light: opts.light },
            type: "svg", width: Number(opts.size) || 256,
        }, (_e, svg) => svg && downloadSvg(svg));
    };
    const downloadSvg = (svg) => {
        const blob = new Blob([svg], { type: "image/svg+xml" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `qr-${new Date().toISOString().slice(0, 10)}.svg`;
        a.click();
        URL.revokeObjectURL(a.href);
    };
    const copyPngToClipboard = () => {
        if (!navigator.clipboard || !window.ClipboardItem) return pulse("Clipboard not supported");
        if (opts.type !== "canvas") return pulse("Switch to Canvas to copy PNG");
        const canvas = canvasRef.current;
        canvas.toBlob(async (blob) => {
            try { await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]); pulse("Copied PNG"); }
            catch { }
        }, "image/png");
    };

    const resetDefaults = () => setOpts({ ...DEFAULTS, updatedAt: Date.now() });

    /* ------------ Image scanning ------------ */
    const onPickImage = (file) => {
        if (!file) return;
        setOpts(p => ({ ...p, fileName: file.name || "image", scanResult: "", scanError: "" }));
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => drawAndDecode(img);
            img.src = String(reader.result || "");
        };
        reader.readAsDataURL(file);
    };

    const drawAndDecode = (img) => {
        const c = scanCanvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");

        // Fit within a 1000px box
        const max = 1000;
        let { width: w, height: h } = img;
        const r = Math.min(1, max / Math.max(w, h));
        w = Math.round(w * r); h = Math.round(h * r);

        // Try four rotations for robustness
        const rotations = [0, 90, 180, 270];
        let found = null, loc = null, cw = w, ch = h;

        for (const deg of rotations) {
            if (deg % 180 === 0) { cw = w; ch = h; }
            else { cw = h; ch = w; }
            c.width = cw; c.height = ch;

            ctx.save();
            // rotate around canvas center
            ctx.translate(cw / 2, ch / 2);
            ctx.rotate((deg * Math.PI) / 180);
            ctx.drawImage(img, -w / 2, -h / 2, w, h);
            ctx.restore();

            const imgData = ctx.getImageData(0, 0, cw, ch);
            const qr = jsQR(imgData.data, imgData.width, imgData.height, { inversionAttempts: "attemptBoth" });
            if (qr) { found = qr.data; loc = qr.location; break; }
        }

        // Draw bounding box (last drawn frame already on canvas)
        if (found && loc) {
            ctx.lineWidth = 4; ctx.strokeStyle = "rgba(56, 189, 248, 0.9)";
            ctx.beginPath();
            ctx.moveTo(loc.topLeftCorner.x, loc.topLeftCorner.y);
            ctx.lineTo(loc.topRightCorner.x, loc.topRightCorner.y);
            ctx.lineTo(loc.bottomRightCorner.x, loc.bottomRightCorner.y);
            ctx.lineTo(loc.bottomLeftCorner.x, loc.bottomLeftCorner.y);
            ctx.closePath(); ctx.stroke();
            setOpts(p => ({ ...p, scanResult: found, scanError: "", updatedAt: Date.now() }));
        } else {
            setOpts(p => ({ ...p, scanResult: "", scanError: "No QR code detected in the image", updatedAt: Date.now() }));
        }
    };

    /* Drag & drop helpers */
    const onDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const f = e.dataTransfer.files?.[0];
        if (f) onPickImage(f);
    };
    const onDragOver = (e) => { e.preventDefault(); setDragOver(true); };
    const onDragLeave = () => setDragOver(false);

    /* Derived count */
    const charCount = useMemo(() => (opts.text || "").length, [opts.text]);

    return (
        <Styled.Page>
            <Styled.Container>
                <Styled.Header>
                    <div>
                        <Styled.Title>QR Code Generator + Image Scanner</Styled.Title>
                        <div style={{ height: 8 }} />
                        <Styled.Sub>
                            Generate QR codes from text/URLs and decode from an <b>uploaded image</b>. Everything runs locally.
                        </Styled.Sub>
                        <div style={{ height: 6 }} />
                        <Styled.BulletList aria-label="Notes">
                            <Styled.BulletItem>For scanning: upload a photo/screenshot containing a QR code (JPG/PNG).</Styled.BulletItem>
                            <Styled.BulletItem>We auto-try 0/90/180/270° rotations and contrast inversion for reliability.</Styled.BulletItem>
                        </Styled.BulletList>
                    </div>
                    <div><span style={{ fontSize: 12, opacity: 0.8 }}>
                        <b>Last updated:</b> {fmtDateTime(opts.updatedAt)}
                    </span></div>
                </Styled.Header>

                {/* === Generator Controls === */}
                <Styled.Card>
                    <Styled.FormRow>
                        <Styled.Label>
                            <Styled.LabelText>Text / URL</Styled.LabelText>
                            <Styled.Textarea
                                placeholder="Paste text or URL…"
                                value={opts.text}
                                onChange={(e) => setOpts(p => ({ ...p, text: e.target.value, updatedAt: Date.now() }))}
                            />
                            <span style={{ fontSize: 12, opacity: 0.7 }}>{charCount} chars</span>
                        </Styled.Label>

                        <Styled.Label>
                            <Styled.LabelText>Type</Styled.LabelText>
                            <Styled.Select
                                value={opts.type}
                                onChange={(e) => setOpts(p => ({ ...p, type: e.target.value, updatedAt: Date.now() }))}
                            >
                                <option value="canvas">Canvas (PNG)</option>
                                <option value="svg">SVG</option>
                            </Styled.Select>
                        </Styled.Label>

                        <Styled.Label>
                            <Styled.LabelText>Error correction</Styled.LabelText>
                            <Styled.Select
                                value={opts.ecLevel}
                                onChange={(e) => setOpts(p => ({ ...p, ecLevel: e.target.value, updatedAt: Date.now() }))}
                            >
                                {["L", "M", "Q", "H"].map(l => <option key={l} value={l}>{l}</option>)}
                            </Styled.Select>
                        </Styled.Label>

                        <Styled.Label>
                            <Styled.LabelText>Size (px)</Styled.LabelText>
                            <Styled.Input type="number" min={128} max={1024} step={32}
                                value={opts.size}
                                onChange={(e) => setOpts(p => ({ ...p, size: Number(e.target.value) || 256, updatedAt: Date.now() }))}
                            />
                        </Styled.Label>

                        <Styled.Label>
                            <Styled.LabelText>Margin (modules)</Styled.LabelText>
                            <Styled.Input type="number" min={0} max={16}
                                value={opts.margin}
                                onChange={(e) => setOpts(p => ({ ...p, margin: Number(e.target.value) || 0, updatedAt: Date.now() }))}
                            />
                        </Styled.Label>

                        <Styled.Label>
                            <Styled.LabelText>Foreground</Styled.LabelText>
                            <Styled.RowWrap>
                                <Styled.ColorInput
                                    value={opts.dark}
                                    onChange={(e) => setOpts(p => ({ ...p, dark: e.target.value, updatedAt: Date.now() }))}
                                    title="Foreground color"
                                />
                                <Styled.Button onClick={() => setOpts(p => ({ ...p, dark: "#111827", updatedAt: Date.now() }))}>Reset</Styled.Button>
                            </Styled.RowWrap>
                        </Styled.Label>

                        <Styled.Label>
                            <Styled.LabelText>Background</Styled.LabelText>
                            <Styled.RowWrap>
                                <Styled.ColorInput
                                    value={opts.light}
                                    onChange={(e) => setOpts(p => ({ ...p, light: e.target.value, updatedAt: Date.now() }))}
                                    title="Background color"
                                />
                                <Styled.Button onClick={() => setOpts(p => ({ ...p, light: "#ffffff", updatedAt: Date.now() }))}>Reset</Styled.Button>
                            </Styled.RowWrap>
                        </Styled.Label>
                    </Styled.FormRow>

                    <Styled.ButtonRow>
                        <Styled.PrimaryButton onClick={() => setOpts(p => ({ ...p, updatedAt: Date.now() }))}>Generate</Styled.PrimaryButton>
                        <Styled.Button onClick={onDownloadPNG}>Download PNG</Styled.Button>
                        <Styled.Button onClick={onDownloadSVG}>Download SVG</Styled.Button>
                        <Styled.Button onClick={copyPngToClipboard}>Copy PNG</Styled.Button>
                        <Styled.DangerButton onClick={resetDefaults}>Reset</Styled.DangerButton>
                    </Styled.ButtonRow>
                </Styled.Card>

                {/* === Generated Output === */}
                <Styled.CanvasCard>
                    <Styled.CanvasWrap aria-label="QR code output">
                        {opts.type === "canvas" ? (
                            <canvas ref={canvasRef} width={opts.size} height={opts.size} />
                        ) : (
                            <div ref={svgRef} style={{ width: opts.size, height: opts.size }} />
                        )}
                    </Styled.CanvasWrap>
                    <div style={{ fontSize: 12, opacity: 0.8 }}>Tip: keep strong contrast for reliable scanning.</div>
                </Styled.CanvasCard>

                {/* === Image Scanner === */}
                <Styled.ScannerCard>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, letterSpacing: "-0.01em" }}>Scan from Image</h3>

                    <Styled.RowWrap>
                        <Styled.PrimaryButton onClick={() => document.getElementById("qr-file").click()}>
                            Choose image
                        </Styled.PrimaryButton>
                        <input
                            id="qr-file"
                            type="file"
                            accept="image/*"
                            onChange={(e) => onPickImage(e.target.files?.[0])}
                            hidden
                        />
                        <span style={{ fontSize: 12, opacity: 0.8 }}>
                            {opts.fileName ? `Selected: ${opts.fileName}` : "Upload a photo/screenshot with a QR code"}
                        </span>
                    </Styled.RowWrap>

                    <Styled.DropZone
                        $active={dragOver}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                    >
                        Drop image here to scan
                    </Styled.DropZone>

                    <Styled.ScanCanvasWrap>
                        <canvas ref={scanCanvasRef} width={512} height={512} />
                    </Styled.ScanCanvasWrap>

                    <div>
                        <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 6 }}>Result</div>
                        <Styled.ResultBox>
                            {opts.scanResult || opts.scanError || "(No result yet)"}
                        </Styled.ResultBox>
                        <Styled.ButtonRow>
                            <Styled.Button
                                onClick={() => {
                                    if (!opts.scanResult) return;
                                    navigator.clipboard?.writeText(opts.scanResult);
                                    pulse("Copied");
                                }}
                            >
                                Copy
                            </Styled.Button>
                            <Styled.Button
                                onClick={() => {
                                    if (!opts.scanResult) return;
                                    const href = looksLikeUrl(opts.scanResult)
                                        ? (opts.scanResult.startsWith("http") ? opts.scanResult : "https://" + opts.scanResult)
                                        : "";
                                    if (href) window.open(href, "_blank", "noopener,noreferrer");
                                }}
                            >
                                Open (if URL)
                            </Styled.Button>
                            <Styled.PrimaryButton
                                onClick={() => {
                                    if (!opts.scanResult) return;
                                    setOpts(p => ({ ...p, text: opts.scanResult, updatedAt: Date.now() }));
                                    pulse("Set as generator input");
                                }}
                            >
                                Use in generator
                            </Styled.PrimaryButton>
                        </Styled.ButtonRow>
                    </div>
                </Styled.ScannerCard>

                <Styled.FooterNote>
                    Works offline. No data leaves your browser. Uses <code>qrcode</code> for generation and <code>jsqr</code> for decoding.
                </Styled.FooterNote>

                {toast && <Styled.Toast role="status" aria-live="polite">{toast}</Styled.Toast>}
            </Styled.Container>
        </Styled.Page>
    );
}
