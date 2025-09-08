import{d as a,l as he,m as xe,r as l,j as e}from"./index-Clink-kh.js";const p="1px solid hsl(0 0% 100% / 0.14)",ge="1px solid hsl(0 0% 100% / 0.10)",I="0 0 0 3px hsl(0 0% 100% / 0.15)",fe=xe`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,r={Page:a.div`
        min-height: 100dvh;
    `,Container:a.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 72px;
    `,Header:a.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,Title:a.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:a.p`
        margin: 0;
        color: inherit;
        opacity: 0.8;
        font-size: 14px;
    `,BulletList:a.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.85;
        line-height: 1.6;
    `,BulletItem:a.li`
        margin: 2px 0;
    `,BadgeRow:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:a.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${ge};
        color: inherit;
        ${({tone:o})=>o==="muted"&&he`
                opacity: 0.7;
            `}
    `,Card:a.div`
        border-radius: 16px;
        padding: 16px;
        border: ${p};
        background: transparent;
        position: relative;
    `,FormRow:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:a.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,ButtonRow:a.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Label:a.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 200px;
    `,LabelText:a.span`
        opacity: 0.85;
        font-weight: 600;
    `,ColorRow:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `,ColorInput:a.input`
        width: 46px;
        height: 34px;
        padding: 0;
        border: ${p};
        border-radius: 8px;
        background: transparent;
        cursor: pointer;
        &:focus-visible {
            box-shadow: ${I};
        }
    `,Swatch:a.span`
        width: 28px;
        height: 28px;
        border-radius: 8px;
        border: ${p};
        background: ${({$c:o})=>o||"transparent"};
    `,Range:a.input`
        -webkit-appearance: none;
        width: 100%;
        height: 30px;
        border-radius: 999px;
        border: ${p};
        background: transparent;
        color: #aaa;
        text-align: center;
        outline: none;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #fff;
            border: ${p};
            cursor: pointer;
        }
        &::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #fff;
            border: ${p};
            cursor: pointer;
        }
    `,PrimaryButton:a.button`
        border: ${p};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.05s ease;
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
            box-shadow: ${I};
        }
    `,Button:a.button`
        border: ${p};
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
            box-shadow: ${I};
        }
    `,DangerButton:a.button`
        border: 1px solid hsl(0 70% 60% / 0.7);
        background: transparent;
        color: hsl(0 70% 70% / 0.9);
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        white-space: nowrap;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: 0 0 0 3px hsl(0 70% 60% / 0.25);
        }
    `,Toggle:a.button`
        border: ${p};
        background: ${({$active:o})=>o?"hsl(200 70% 55% / 0.18)":"transparent"};
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        white-space: nowrap;
        &:focus-visible {
            box-shadow: ${I};
        }
    `,CanvasCard:a.div`
        margin-top: 12px;
        border-radius: 16px;
        border: ${p};
        background: transparent;
        padding: 12px;
    `,CanvasWrap:a.div`
        width: 100%;
        height: min(70vh, 640px);
        border-radius: 12px;
        border: ${p};
        overflow: hidden;
        position: relative;
        background: linear-gradient(
            45deg,
            hsl(0 0% 100% / 0.03) 25%,
            transparent 25%,
            transparent 50%,
            hsl(0 0% 100% / 0.03) 50%,
            hsl(0 0% 100% / 0.03) 75%,
            transparent 75%,
            transparent
        );
        background-size: 22px 22px; /* subtle checker */
    `,Canvas:a.canvas`
        display: block;
        width: 100%;
        height: 100%;
        cursor: crosshair;
        user-select: none;
        touch-action: none; /* smoother touch drawing */
    `,FooterNote:a.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:a.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:a.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${p};
        background: transparent;
    `,ModalTitle:a.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:a.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:a.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `,Toast:a.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${p};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
        animation: ${fe} 160ms ease-out;
    `},V="drawingApp.v1",be=()=>{var o;return((o=crypto==null?void 0:crypto.randomUUID)==null?void 0:o.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`},me=()=>{try{return JSON.parse(localStorage.getItem(V))??{}}catch{return{}}},we=o=>{try{localStorage.setItem(V,JSON.stringify(o))}catch{}},H=(o,x,u,c)=>[o*u,x*c];function ve(o,x,u,c){const{mode:T,color:b,size:N,pts:h}=x;if(!h||h.length===0)return;const D=o.globalCompositeOperation;o.globalCompositeOperation=T==="erase"?"destination-out":"source-over",o.strokeStyle=b||"#fff",o.lineWidth=Math.max(.5,Number(N)||2),o.lineCap="round",o.lineJoin="round",o.beginPath();const[g,w]=H(h[0][0],h[0][1],u,c);o.moveTo(g,w);for(let y=1;y<h.length;y++){const[C,B]=H(h[y][0],h[y][1],u,c);o.lineTo(C,B)}o.stroke(),o.globalCompositeOperation=D}function Q(o,x,u,c,T){o.save(),o.globalCompositeOperation="source-over",o.fillStyle="transparent",o.clearRect(0,0,u,c),o.restore();for(const b of x)ve(o,b,u,c)}function Ce(){const o=me(),[x,u]=l.useState(o.tool??"brush"),[c,T]=l.useState(o.color??"#00d1ff"),[b,N]=l.useState(o.size??6),[h,D]=l.useState(o.exportWhiteBg??!0),[g,w]=l.useState(o.strokes??[]),[y,C]=l.useState([]),[B,J]=l.useState(""),O=l.useRef(null),[f,$]=l.useState(null),z=l.useRef(null),v=l.useRef(null),U=l.useRef(null),W=l.useRef(1),R=l.useRef({active:!1,strokeId:null}),M=g.length>0,P=y.length>0;l.useEffect(()=>{we({tool:x,color:c,size:b,strokes:g,exportWhiteBg:h})},[x,c,b,g,h]);const Y=()=>{const t=z.current,n=v.current;if(!t||!n)return;const s=t.getBoundingClientRect(),i=Math.max(1,Math.min(3,window.devicePixelRatio||1));W.current=i,n.width=Math.max(1,Math.floor(s.width*i)),n.height=Math.max(1,Math.floor((s.height||480)*i)),n.style.width=`${Math.floor(s.width)}px`,n.style.height=`${Math.floor(s.height||480)}px`;const d=n.getContext("2d");U.current=d,d.setTransform(i,0,0,i,0,0),Q(d,g,n.width/i,n.height/i)};l.useEffect(()=>{Y();const t=new ResizeObserver(Y);z.current&&t.observe(z.current);const n=()=>Y();return window.addEventListener("resize",n),()=>{t.disconnect(),window.removeEventListener("resize",n)}},[]),l.useEffect(()=>{const t=v.current,n=U.current;if(!t||!n)return;const s=W.current;Q(n,g,t.width/s,t.height/s)},[g]);const Z=(t,n)=>{const s=v.current,i=U.current;if(!s||!i)return;const d=W.current,L=s.width/d,E=s.height/d;w(k=>{const j=k.findIndex(K=>K.id===R.current.strokeId);if(j===-1)return k;const S=k.slice(),m={...S[j]},ie=t/L,le=n/E,F=m.pts.length?m.pts[m.pts.length-1]:null;if(m.pts=[...m.pts,[ie,le]],S[j]=m,F){const[K,ce]=H(F[0],F[1],L,E),[de,pe]=[t,n],ue=i.globalCompositeOperation;i.globalCompositeOperation=m.mode==="erase"?"destination-out":"source-over",i.strokeStyle=m.color,i.lineWidth=Math.max(.5,Number(m.size)||2),i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(K,ce),i.lineTo(de,pe),i.stroke(),i.globalCompositeOperation=ue}return S})},X=t=>{const s=v.current.getBoundingClientRect(),i=t.clientX-s.left,d=t.clientY-s.top;return[i,d]},ee=t=>{var k,j;t.preventDefault(),(j=(k=v.current).setPointerCapture)==null||j.call(k,t.pointerId);const[n,s]=X(t),i=be();R.current={active:!0,strokeId:i};const L=t.pointerType==="pen"&&t.pressure||1,E=Math.max(1,Number(b)||1)*L;w(S=>[...S,{id:i,mode:x==="erase"?"erase":"brush",color:c,size:E,pts:[]}]),C([]),Z(n,s)},te=t=>{if(!R.current.active)return;const[n,s]=X(t);Z(n,s)},A=()=>{R.current.active=!1,R.current.strokeId=null},re=()=>A(),ne=()=>A(),oe=()=>A(),_=()=>{M&&w(t=>{const n=t.slice(0,-1);return C(s=>[t[t.length-1],...s]),n})},G=()=>{P&&C(t=>{const[n,...s]=t;return n?(w(i=>[...i,n]),s):t})},se=()=>{g.length&&$({title:"Clear canvas?",message:"This will remove all strokes. You can’t undo after clearing.",confirmText:"Clear",tone:"danger",onConfirm:()=>{w([]),C([]),$(null),q("Canvas cleared")}})},ae=()=>{const t=v.current;if(t){if(h){const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.fillStyle="#fff",s.fillRect(0,0,n.width,n.height),s.drawImage(t,0,0);const i=n.toDataURL("image/png"),d=document.createElement("a");d.href=i,d.download=`drawing-${Date.now()}.png`,d.click()}else{const n=t.toDataURL("image/png"),s=document.createElement("a");s.href=n,s.download=`drawing-${Date.now()}.png`,s.click()}q("PNG saved")}},q=t=>{J(t),O.current&&clearTimeout(O.current),O.current=setTimeout(()=>J(""),1200)};return l.useEffect(()=>{const t=n=>{const s=n.ctrlKey||n.metaKey;s&&n.key.toLowerCase()==="z"?(n.preventDefault(),n.shiftKey?G():_()):s&&n.key.toLowerCase()==="y"?(n.preventDefault(),G()):n.key.toLowerCase()==="b"?u("brush"):n.key.toLowerCase()==="e"&&u("erase")};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[M,P]),e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsxs(r.Header,{children:[e.jsxs("div",{children:[e.jsx(r.Title,{children:"Drawing App (Canvas)"}),e.jsx("div",{style:{height:8}}),e.jsx(r.Sub,{children:"A simple, offline-first paint-like app powered by the HTML canvas. It supports brush and eraser, undo/redo, clear, and exporting your art as PNG. Your strokes and tool settings persist locally."}),e.jsx("div",{style:{height:6}}),e.jsxs(r.BulletList,{"aria-label":"How to use",children:[e.jsx(r.BulletItem,{children:"Pick a color and size, then draw with your mouse or finger."}),e.jsx(r.BulletItem,{children:"Toggle Brush/Eraser, use Undo/Redo, or Clear the canvas (asks confirmation)."}),e.jsx(r.BulletItem,{children:"Click Save PNG to download (with optional white background)."}),e.jsx(r.BulletItem,{children:"Shortcuts: Ctrl/Cmd+Z (Undo), Ctrl/Cmd+Shift+Z or +Y (Redo), B (Brush), E (Eraser)."})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(r.BadgeRow,{children:[e.jsxs(r.Tag,{children:["Strokes: ",g.length]}),e.jsxs(r.Tag,{children:["Undo: ",M?"Yes":"No"]}),e.jsxs(r.Tag,{children:["Redo: ",P?"Yes":"No"]})]})]}),e.jsx(r.Card,{children:e.jsxs(r.FormRow,{children:[e.jsxs(r.Label,{title:"Choose drawing tool",children:[e.jsx(r.LabelText,{children:"Tool"}),e.jsxs(r.RowWrap,{children:[e.jsx(r.Toggle,{$active:x==="brush",onClick:()=>u("brush"),title:"Brush (B)",children:"Brush"}),e.jsx(r.Toggle,{$active:x==="erase",onClick:()=>u("erase"),title:"Eraser (E)",children:"Eraser"})]})]}),e.jsxs(r.Label,{title:"Brush color",children:[e.jsx(r.LabelText,{children:"Color"}),e.jsxs(r.ColorRow,{children:[e.jsx(r.ColorInput,{type:"color",value:c,onChange:t=>T(t.target.value),"aria-label":"Color"}),e.jsx(r.Swatch,{$c:c})]})]}),e.jsxs(r.Label,{title:"Brush size",children:[e.jsxs(r.LabelText,{children:["Size (",b,"px)"]}),e.jsx(r.Range,{min:1,max:40,step:1,value:b,onChange:t=>N(Number(t.target.value)||1),"aria-label":"Brush size"})]}),e.jsxs(r.Label,{title:"Export background",children:[e.jsx(r.LabelText,{children:"Export"}),e.jsxs("label",{style:{fontSize:12,opacity:.9},children:[e.jsx("input",{type:"checkbox",checked:h,onChange:t=>D(t.target.checked),style:{verticalAlign:"middle",marginRight:6}}),"White background on PNG"]})]}),e.jsxs(r.RowWrap,{children:[e.jsx(r.Button,{type:"button",onClick:_,disabled:!M,title:"Undo (Ctrl/Cmd+Z)",children:"Undo"}),e.jsx(r.Button,{type:"button",onClick:G,disabled:!P,title:"Redo (Ctrl/Cmd+Shift+Z)",children:"Redo"}),e.jsx(r.DangerButton,{type:"button",onClick:se,disabled:!g.length,title:"Clear canvas",children:"Clear"}),e.jsx(r.PrimaryButton,{type:"button",onClick:ae,title:"Save image as PNG",children:"Save PNG"})]})]})}),e.jsx(r.CanvasCard,{children:e.jsx(r.CanvasWrap,{ref:z,children:e.jsx(r.Canvas,{ref:v,onContextMenu:t=>t.preventDefault(),onPointerDown:ee,onPointerMove:te,onPointerUp:re,onPointerLeave:oe,onPointerCancel:ne})})}),e.jsx(r.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),B&&e.jsx(r.Toast,{role:"status","aria-live":"polite",children:B}),f&&e.jsx(r.ModalOverlay,{onClick:()=>$(null),children:e.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(r.ModalTitle,{id:"confirm-title",children:f.title}),f.message?e.jsx(r.ModalMessage,{children:f.message}):null,e.jsxs(r.ModalActions,{children:[!f.hideCancel&&e.jsx(r.Button,{type:"button",onClick:()=>$(null),children:f.cancelText||"Cancel"}),f.tone==="danger"?e.jsx(r.DangerButton,{type:"button",onClick:f.onConfirm,autoFocus:!0,children:f.confirmText||"Confirm"}):e.jsx(r.PrimaryButton,{type:"button",onClick:f.onConfirm,autoFocus:!0,children:f.confirmText||"Confirm"})]})]})})]})})}export{Ce as default};
