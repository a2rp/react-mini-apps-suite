import styled, { css, keyframes } from "styled-components";

/* ---- Tokens ---- */
const border = "1px solid hsl(0 0% 100% / 0.14)";
const borderMuted = "1px solid hsl(0 0% 100% / 0.10)";
const focusRing = "0 0 0 3px hsl(0 0% 100% / 0.15)";

const flash = keyframes`
  from { box-shadow: 0 0 0 0 hsl(200 80% 60% / 0.0); }
  to   { box-shadow: 0 0 0 4px hsl(200 80% 60% / 0.35); }
`;

export const Styled = {
    /* Page */
    Page: styled.div`
        min-height: 100dvh;
    `,
    Container: styled.div`
        max-width: 1120px;
        margin: 0 auto;
        padding: 32px 18px 72px;
    `,

    /* Header */
    Header: styled.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,
    Title: styled.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,
    Sub: styled.p`
        margin: 0;
        color: inherit;
        opacity: 0.8;
        font-size: 14px;
    `,
    BulletList: styled.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.85;
        line-height: 1.6;
    `,
    BulletItem: styled.li`
        margin: 2px 0;
    `,

    /* Controls */
    Card: styled.div`
        border-radius: 16px;
        padding: 16px;
        border: ${border};
        background: transparent;
    `,
    FormRow: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,
    Label: styled.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 220px;
    `,
    LabelText: styled.span`
        opacity: 0.85;
        font-weight: 600;
    `,
    Input: styled.input`
        background: transparent;
        color: inherit;
        border: ${border};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${focusRing};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,
    Textarea: styled.textarea`
        background: transparent;
        color: inherit;
        border: ${border};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-height: 100px;
        resize: vertical;
        width: 100%;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${focusRing};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,
    Select: styled.select`
        background: transparent;
        color: inherit;
        border: ${border};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        width: 100%;
        &:focus-visible {
            box-shadow: ${focusRing};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,
    ColorInput: styled.input.attrs({ type: "color" })`
        width: 44px;
        height: 36px;
        padding: 0;
        border: ${borderMuted};
        border-radius: 10px;
        background: transparent;
        cursor: pointer;
    `,
    RowWrap: styled.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,
    ButtonRow: styled.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,
    PrimaryButton: styled.button`
        border: ${border};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        max-width: max-content;
        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${focusRing};
        }
    `,
    Button: styled.button`
        border: ${border};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        white-space: nowrap;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${focusRing};
        }
    `,
    DangerButton: styled.button`
        border: 1px solid hsl(0 70% 60% / 0.7);
        background: transparent;
        color: hsl(0 70% 70% / 0.9);
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: 0 0 0 3px hsl(0 70% 60% / 0.25);
        }
    `,

    /* Output (generator) */
    CanvasCard: styled.div`
        border-radius: 16px;
        border: ${border};
        background: transparent;
        padding: 16px;
        display: grid;
        gap: 10px;
        align-items: center;
        justify-items: center;
    `,
    CanvasWrap: styled.div`
        display: inline-grid;
        padding: 10px;
        border-radius: 12px;
        background: hsl(0 0% 100% / 0.06);
        border: ${border};
        canvas,
        img,
        svg {
            display: block;
        }
    `,

    /* Image Scanner */
    ScannerCard: styled.div`
        border-radius: 16px;
        border: ${border};
        background: transparent;
        padding: 16px;
        display: grid;
        gap: 12px;
    `,
    DropZone: styled.div`
        border: 2px dashed hsl(0 0% 100% / 0.26);
        border-radius: 12px;
        background: hsl(0 0% 100% / 0.06);
        padding: 18px;
        text-align: center;
        min-height: 140px;
        display: grid;
        place-content: center;
        ${({ $active }) =>
            $active &&
            css`
                border-color: hsl(200 80% 60% / 0.7);
                background: hsl(0 0% 100% / 0.08);
            `}
    `,
    ScanCanvasWrap: styled.div`
        display: inline-grid;
        padding: 10px;
        border-radius: 12px;
        background: hsl(0 0% 100% / 0.06);
        border: ${border};
        canvas {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    ResultBox: styled.pre`
        margin: 0;
        padding: 10px 12px;
        border-radius: 10px;
        border: ${border};
        background: transparent;
        max-width: 100%;
        overflow: auto;
        white-space: pre-wrap;
        word-break: break-word;
        font-size: 13px;
    `,

    FooterNote: styled.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,
    Toast: styled.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${border};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
        animation: ${flash} 420ms ease-out 0s 1 alternate;
    `,
};
