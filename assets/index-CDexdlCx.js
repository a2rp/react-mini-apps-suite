import{d as r,l as ee,m as te,r as a,j as t}from"./index-BySW6BSp.js";const f="1px solid hsl(0 0% 100% / 0.14)",y="1px solid hsl(0 0% 100% / 0.10)",k="0 0 0 3px hsl(0 0% 100% / 0.15)",oe=te`
  from { box-shadow: 0 0 0 0 hsl(200 80% 60% / 0.0); }
  to   { box-shadow: 0 0 0 4px hsl(200 80% 60% / 0.35); }
`,n={Page:r.div`
        min-height: 100dvh;
    `,Container:r.div`
        max-width: 1120px;
        margin: 0 auto;
        padding: 32px 18px 72px;
    `,Header:r.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,Title:r.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:r.p`
        margin: 0;
        color: inherit;
        opacity: 0.8;
        font-size: 14px;
    `,BulletList:r.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.85;
        line-height: 1.6;
    `,BulletItem:r.li`
        margin: 2px 0;
    `,Card:r.div`
        border-radius: 16px;
        padding: 16px;
        border: ${f};
        background: transparent;
    `,RowWrap:r.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,FormRow:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,Label:r.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 220px;
    `,LabelText:r.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:r.input`
        background: transparent;
        color: inherit;
        border: ${f};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        caret-color: currentColor;
        min-width: 0;
        width: 100%;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${k};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Toolbar:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
    `,ToolButton:r.button`
        border: ${f};
        background: transparent;
        color: inherit;
        padding: 8px 10px;
        border-radius: 10px;
        cursor: pointer;
        white-space: nowrap;
        font-size: 13px;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${k};
        }
        ${({$active:u})=>u&&ee`
                outline: 2px solid hsl(200 80% 60% / 0.55);
            `}
    `,Split:r.span`
        display: inline-block;
        width: 1px;
        height: 24px;
        background: hsl(0 0% 100% / 0.14);
        margin: 0 4px;
    `,EditorCard:r.div`
        border-radius: 16px;
        border: ${f};
        background: transparent;
        display: grid;
        grid-template-rows: auto 1fr;
        overflow: hidden;
    `,EditorToolbar:r.div`
        padding: 10px;
        border-bottom: ${y};
        display: grid;
        gap: 8px;
    `,EditorArea:r.div`
        padding: 16px;
        min-height: 50vh;
        line-height: 1.55;
        outline: none;
        /* readable content defaults */
        color: hsl(0 0% 0% / 0.92);
        background: hsl(0 0% 100% / 0.96);
        border-top: ${y};
        /* placeholder */
        &:empty:before {
            content: attr(data-placeholder);
            color: hsl(0 0% 0% / 0.45);
        }
        /* content styles */
        h1 {
            font-size: 28px;
            margin: 0 0 12px;
        }
        h2 {
            font-size: 22px;
            margin: 0 0 10px;
        }
        p {
            margin: 0 0 10px;
        }
        blockquote {
            border-left: 4px solid hsl(200 80% 60% / 0.7);
            padding-left: 10px;
            margin: 8px 0;
            color: hsl(0 0% 0% / 0.7);
            background: hsl(0 0% 0% / 0.03);
        }
        pre {
            background: hsl(0 0% 0% / 0.06);
            padding: 10px;
            border-radius: 8px;
            overflow: auto;
        }
        code {
            background: hsl(0 0% 0% / 0.06);
            padding: 2px 6px;
            border-radius: 6px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }
        ul,
        ol {
            padding-left: 20px;
            margin: 6px 0;
        }
        a {
            color: #2563eb;
            text-decoration: underline;
        }
    `,MetaRow:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.85;
    `,ButtonRow:r.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-top: 8px;
    `,PrimaryButton:r.button`
        border: ${f};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        max-width: max-content;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${k};
        }
    `,DangerButton:r.button`
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
    `,ModalOverlay:r.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:r.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${f};
        background: transparent;
    `,ModalTitle:r.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:r.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:r.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `,Toast:r.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${f};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
        animation: ${oe} 420ms ease-out 0s 1 alternate;
    `,ColorRow:r.div`
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
    `,Swatch:r.button`
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: ${y};
        background: ${({$c:u})=>u};
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
    `,ColorInput:r.input.attrs({type:"color"})`
        width: 34px;
        height: 30px;
        padding: 0;
        border: ${y};
        border-radius: 8px;
        background: transparent;
        cursor: pointer;
    `},A="textEditor.basic.v1",ne=()=>{try{return JSON.parse(localStorage.getItem(A))??null}catch{return null}},re=u=>{try{localStorage.setItem(A,JSON.stringify(u))}catch{}},ie=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],le=u=>{if(!u)return"";const l=new Date(u);if(isNaN(l))return"";const h=`${ie[l.getMonth()]} ${String(l.getDate()).padStart(2,"0")}, ${l.getFullYear()}`,g=l.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return`${h}, ${g}`},I={title:"Untitled",html:"",updatedAt:Date.now(),plainPaste:!0};function se(){const u=ne(),[l,h]=a.useState(u||I),[g,T]=a.useState(""),[d,b]=a.useState(null),p=a.useRef(null),D=a.useRef({}),j=a.useRef(null);a.useEffect(()=>{re(l)},[l]);const S=a.useMemo(()=>{const e=document.createElement("div");e.innerHTML=l.html||"";const o=(e.textContent||"").trim(),i=o?o.split(/\s+/).length:0,v=o.length;return{words:i,chars:v}},[l.html]),C=e=>{T(e),setTimeout(()=>T(""),1200)};a.useEffect(()=>{const e=p.current;if(!e)return;const o=l.html||"";e.innerHTML!==o&&(e.innerHTML=o)},[l.html]);const[,O]=a.useState(0);a.useEffect(()=>{const e=()=>{const o={};try{o.bold=document.queryCommandState("bold"),o.italic=document.queryCommandState("italic"),o.underline=document.queryCommandState("underline"),o.strike=document.queryCommandState("strikeThrough"),o.ul=document.queryCommandState("insertUnorderedList"),o.ol=document.queryCommandState("insertOrderedList"),o.left=document.queryCommandState("justifyLeft"),o.center=document.queryCommandState("justifyCenter"),o.right=document.queryCommandState("justifyRight");const i=(document.queryCommandValue("formatBlock")||"").toLowerCase();o.h1=i.includes("h1"),o.h2=i.includes("h2"),o.p=i.includes("p"),o.blockquote=i.includes("blockquote"),o.pre=i.includes("pre")}catch{}D.current=o,O(i=>i+1)};return document.addEventListener("selectionchange",e),()=>document.removeEventListener("selectionchange",e)},[]);const M=a.useRef(null);a.useEffect(()=>{const e=()=>{var i;const o=(i=window.getSelection)==null?void 0:i.call(window);o&&o.rangeCount>0&&(M.current=o.getRangeAt(0))};return document.addEventListener("selectionchange",e),()=>document.removeEventListener("selectionchange",e)},[]);const w=()=>{var i;const e=M.current;if(!e)return;const o=(i=window.getSelection)==null?void 0:i.call(window);if(o)try{o.removeAllRanges(),o.addRange(e)}catch{}},x=()=>{var o;const e=((o=p.current)==null?void 0:o.innerHTML)||"";j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{h(i=>({...i,html:e,updatedAt:Date.now()}))},250)},B=a.useRef(!1),q=()=>B.current=!0,z=()=>{B.current=!1,x()},s=(e,o=null)=>{var i;(i=p.current)==null||i.focus();try{document.execCommand(e,!1,o)}catch{}x()},m=e=>{var o;(o=p.current)==null||o.focus();try{document.execCommand("formatBlock",!1,e)}catch{}x()},L=()=>{var o;(o=p.current)==null||o.focus();let e=window.prompt("Enter URL (https://…)");if(e){/^https?:\/\//i.test(e)||(e="https://"+e);try{document.execCommand("createLink",!1,e)}catch{}x()}},F=()=>s("unlink"),N=()=>{var e;(e=p.current)==null||e.focus();try{document.execCommand("removeFormat"),document.execCommand("unlink")}catch{}x()},R=()=>{try{document.execCommand("styleWithCSS",!1,!0)}catch{}},$=e=>{var o;(o=p.current)==null||o.focus(),w(),R();try{document.execCommand("foreColor",!1,e)}catch{}x()},E=e=>{var i;(i=p.current)==null||i.focus(),w(),R();let o=!1;try{o=document.execCommand("hiliteColor",!1,e)}catch{}if(!o)try{document.execCommand("backColor",!1,e)}catch{}x()},J=()=>{const e=new Blob([`<!doctype html><meta charset="utf-8"><title>${l.title}</title><body>${l.html}</body>`],{type:"text/html"}),o=document.createElement("a");o.href=URL.createObjectURL(e),o.download=`${l.title.replace(/\s+/g,"-").toLowerCase()}.html`,o.click(),URL.revokeObjectURL(o.href),C("Exported .html")},K=()=>{const e=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(e),o.download=`${l.title.replace(/\s+/g,"-").toLowerCase()}.json`,o.click(),URL.revokeObjectURL(o.href),C("Exported .json")},P=a.useRef(null),W=()=>{var e;return(e=P.current)==null?void 0:e.click()},Y=e=>{var v;const o=(v=e.target.files)==null?void 0:v[0];if(!o)return;const i=new FileReader;i.onload=()=>{const X=String(i.result||"");h(Z=>({...Z,html:X,updatedAt:Date.now()})),C("Imported HTML")},i.readAsText(o),e.target.value=""},_=()=>{const e=window.open("","_blank");e&&(e.document.write(`<!doctype html><meta charset="utf-8"><title>${l.title}</title><body>${l.html}</body>`),e.document.close(),e.focus(),e.print())},G=e=>b({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"danger",hideCancel:!1,...e}),Q=()=>{G({title:"Clear editor?",message:"This will remove all content.",confirmText:"Clear",onConfirm:()=>{h({...I,updatedAt:Date.now()}),b(null),setTimeout(()=>{var e;return(e=p.current)==null?void 0:e.focus()},0),C("Editor cleared")}})},V=e=>{(e.metaKey||e.ctrlKey)&&(e.key.toLowerCase()==="b"&&(e.preventDefault(),s("bold")),e.key.toLowerCase()==="i"&&(e.preventDefault(),s("italic")),e.key.toLowerCase()==="u"&&(e.preventDefault(),s("underline")),e.key.toLowerCase()==="k"&&(e.preventDefault(),L()))},U=a.useRef(null),H=a.useRef(null),c=D.current;return t.jsx(n.Page,{children:t.jsxs(n.Container,{children:[t.jsx(n.Header,{children:t.jsxs("div",{children:[t.jsx(n.Title,{children:"Text Editor (Basic)"}),t.jsx("div",{style:{height:8}}),t.jsxs(n.Sub,{children:["Minimal, fast notes editor with basic formatting. Uses ",t.jsx("b",{children:"contentEditable"}),", saves to LocalStorage, and supports export/import. Paste-as-plain-text is on by default to keep your notes clean."]}),t.jsx("div",{style:{height:6}}),t.jsxs(n.BulletList,{"aria-label":"Tips",children:[t.jsxs(n.BulletItem,{children:[t.jsx("b",{children:"Shortcuts:"})," Ctrl/⌘+B, Ctrl/⌘+I, Ctrl/⌘+U, Ctrl/⌘+K (link)"]}),t.jsx(n.BulletItem,{children:"Use H1/H2/Quote/Code block for structure."}),t.jsx(n.BulletItem,{children:"Toggle “Plain paste” if you want to keep source formatting while pasting."})]})]})}),t.jsx(n.Card,{children:t.jsxs(n.FormRow,{children:[t.jsxs(n.Label,{title:"Document title",children:[t.jsx(n.LabelText,{children:"Title"}),t.jsx(n.Input,{placeholder:"Untitled",value:l.title,onChange:e=>h(o=>({...o,title:e.target.value}))})]}),t.jsxs(n.RowWrap,{children:[t.jsx(n.PrimaryButton,{type:"button",onClick:J,children:"Export .html"}),t.jsx(n.PrimaryButton,{type:"button",onClick:K,children:"Export .json"}),t.jsx(n.PrimaryButton,{type:"button",onClick:W,children:"Import .html"}),t.jsx("input",{ref:P,type:"file",accept:".html,text/html",onChange:Y,hidden:!0}),t.jsx(n.PrimaryButton,{type:"button",onClick:_,children:"Print"}),t.jsx(n.DangerButton,{type:"button",onClick:Q,children:"Clear"})]})]})}),t.jsxs(n.EditorCard,{children:[t.jsx(n.EditorToolbar,{children:t.jsxs(n.Toolbar,{children:[t.jsx(n.ToolButton,{$active:c.bold,onMouseDown:e=>e.preventDefault(),onClick:()=>s("bold"),title:"Bold (Ctrl/⌘+B)",children:"B"}),t.jsx(n.ToolButton,{$active:c.italic,onMouseDown:e=>e.preventDefault(),onClick:()=>s("italic"),title:"Italic (Ctrl/⌘+I)",children:t.jsx("i",{children:"I"})}),t.jsx(n.ToolButton,{$active:c.underline,onMouseDown:e=>e.preventDefault(),onClick:()=>s("underline"),title:"Underline (Ctrl/⌘+U)",children:t.jsx("u",{children:"U"})}),t.jsx(n.ToolButton,{$active:c.strike,onMouseDown:e=>e.preventDefault(),onClick:()=>s("strikeThrough"),title:"Strikethrough",children:"S"}),t.jsx(n.Split,{}),t.jsx(n.ToolButton,{$active:c.h1,onMouseDown:e=>e.preventDefault(),onClick:()=>m("h1"),title:"Heading 1",children:"H1"}),t.jsx(n.ToolButton,{$active:c.h2,onMouseDown:e=>e.preventDefault(),onClick:()=>m("h2"),title:"Heading 2",children:"H2"}),t.jsx(n.ToolButton,{$active:c.p,onMouseDown:e=>e.preventDefault(),onClick:()=>m("p"),title:"Paragraph",children:"P"}),t.jsx(n.ToolButton,{$active:c.blockquote,onMouseDown:e=>e.preventDefault(),onClick:()=>m("blockquote"),title:"Quote",children:"“ ”"}),t.jsx(n.ToolButton,{$active:c.pre,onMouseDown:e=>e.preventDefault(),onClick:()=>m("pre"),title:"Code block",children:"</>"}),t.jsx(n.Split,{}),t.jsx(n.ToolButton,{$active:c.ul,onMouseDown:e=>e.preventDefault(),onClick:()=>s("insertUnorderedList"),title:"Bulleted list",children:"• List"}),t.jsx(n.ToolButton,{$active:c.ol,onMouseDown:e=>e.preventDefault(),onClick:()=>s("insertOrderedList"),title:"Numbered list",children:"1. List"}),t.jsx(n.Split,{}),t.jsx(n.ToolButton,{onMouseDown:e=>e.preventDefault(),onClick:()=>{var e;w(),(e=U.current)==null||e.click()},title:"Text color",children:"A"}),t.jsx(n.ColorInput,{ref:U,onInput:e=>$(e.target.value),onClick:e=>e.stopPropagation()}),t.jsx(n.ColorRow,{children:["#111827","#ef4444","#f59e0b","#10b981","#3b82f6","#8b5cf6","#6b7280","#ffffff"].map(e=>t.jsx(n.Swatch,{$c:e,title:`Text ${e}`,onMouseDown:o=>o.preventDefault(),onClick:()=>$(e)},e))}),t.jsx(n.ToolButton,{onMouseDown:e=>e.preventDefault(),onClick:()=>{var e;w(),(e=H.current)==null||e.click()},title:"Highlight color",children:"H"}),t.jsx(n.ColorInput,{ref:H,onInput:e=>E(e.target.value),onClick:e=>e.stopPropagation()}),t.jsx(n.ColorRow,{children:["#fff3b0","#fde68a","#fca5a5","#bfdbfe","#bbf7d0","#f5f5f5"].map(e=>t.jsx(n.Swatch,{$c:e,title:`Highlight ${e}`,onMouseDown:o=>o.preventDefault(),onClick:()=>E(e)},e))}),t.jsx(n.Split,{}),t.jsx(n.ToolButton,{$active:c.left,onMouseDown:e=>e.preventDefault(),onClick:()=>s("justifyLeft"),title:"Align left",children:"⟸"}),t.jsx(n.ToolButton,{$active:c.center,onMouseDown:e=>e.preventDefault(),onClick:()=>s("justifyCenter"),title:"Align center",children:"≡"}),t.jsx(n.ToolButton,{$active:c.right,onMouseDown:e=>e.preventDefault(),onClick:()=>s("justifyRight"),title:"Align right",children:"⟹"}),t.jsx(n.Split,{}),t.jsx(n.ToolButton,{onMouseDown:e=>e.preventDefault(),onClick:L,title:"Insert link (Ctrl/⌘+K)",children:"Link"}),t.jsx(n.ToolButton,{onMouseDown:e=>e.preventDefault(),onClick:F,title:"Remove link",children:"Unlink"}),t.jsx(n.Split,{}),t.jsx(n.ToolButton,{onMouseDown:e=>e.preventDefault(),onClick:()=>s("undo"),title:"Undo",children:"Undo"}),t.jsx(n.ToolButton,{onMouseDown:e=>e.preventDefault(),onClick:()=>s("redo"),title:"Redo",children:"Redo"}),t.jsx(n.ToolButton,{onMouseDown:e=>e.preventDefault(),onClick:N,title:"Clear formatting",children:"Clear"}),t.jsx(n.ToolButton,{$active:l.plainPaste,onMouseDown:e=>e.preventDefault(),onClick:()=>h(e=>({...e,plainPaste:!e.plainPaste})),title:"Paste as plain text (toggle)",children:"Plain paste"})]})}),t.jsx(n.EditorArea,{ref:p,contentEditable:!0,suppressContentEditableWarning:!0,"data-placeholder":"Start typing here…",onInput:x,onKeyDown:V,onPaste:e=>{if(!l.plainPaste)return;e.preventDefault();const o=e.clipboardData.getData("text/plain");document.execCommand("insertText",!1,o)},onCompositionStart:q,onCompositionEnd:z})]}),t.jsxs(n.MetaRow,{children:[t.jsxs("span",{children:[t.jsx("b",{children:"Last saved:"})," ",le(l.updatedAt)]}),t.jsxs("span",{children:[t.jsx("b",{children:"Words:"})," ",S.words,"  •  ",t.jsx("b",{children:"Chars:"})," ",S.chars]})]}),g&&t.jsx(n.Toast,{role:"status","aria-live":"polite",children:g}),d&&t.jsx(n.ModalOverlay,{onClick:()=>b(null),children:t.jsxs(n.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:e=>e.stopPropagation(),children:[t.jsx(n.ModalTitle,{id:"confirm-title",children:d.title}),d.message?t.jsx(n.ModalMessage,{children:d.message}):null,t.jsxs(n.ModalActions,{children:[!d.hideCancel&&t.jsx("button",{type:"button",onClick:()=>b(null),children:d.cancelText||"Cancel"}),d.tone==="danger"?t.jsx(n.DangerButton,{type:"button",onClick:d.onConfirm,autoFocus:!0,children:d.confirmText||"Confirm"}):t.jsx(n.PrimaryButton,{type:"button",onClick:d.onConfirm,autoFocus:!0,children:d.confirmText||"Confirm"})]})]})})]})})}export{se as default};
