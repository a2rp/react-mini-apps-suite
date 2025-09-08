import{d as a,l as $,r as s,j as t}from"./index-Ch0RXzdY.js";const u="1px solid hsl(0 0% 100% / 0.14)",T="1px solid hsl(0 0% 100% / 0.10)",j="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:a.div`
        min-height: 100dvh;
    `,Container:a.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 56px;
    `,Header:a.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
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
        opacity: 0.75;
        font-size: 14px;
    `,BadgeRow:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Badge:a.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${T};
        color: inherit;
    `,Card:a.div`
        border-radius: 16px;
        padding: 16px;
        border: ${u};
        background: transparent;
    `,FormRow:a.div`
        display: grid;
        grid-template-columns: 1fr 220px 120px auto;
        gap: 10px;
        @media (width < 860px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (width < 520px) {
            grid-template-columns: 1fr;
        }
    `,Input:a.input`
        background: transparent;
        color: inherit;
        border: ${u};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        caret-color: currentColor;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${j};
            border-color: hsl(0 0% 100% / 0.35);
        }

        /* number input on dark UI */
        &[type="number"] {
            color-scheme: dark;
            width: 100%;
        }
        /* optional: hide native spinners if you want plain look */
        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type="number"] {
            -moz-appearance: textfield;
        }
    `,Helper:a.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:a.button`
        border: ${u};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.05s ease;
        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${j};
        }
    `,Button:a.button`
        border: ${u};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${j};
        }
    `,DangerButton:a.button`
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
    `,Toolbar:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin: 16px 0;
        flex-wrap: wrap;
    `,RowWrap:a.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,Select:a.select`
        background: transparent;
        color: inherit;
        border: ${u};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        &:focus-visible {
            box-shadow: ${j};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,List:a.div`
        display: grid;
        gap: 6px 0;
    `,GroupHeader:a.h3`
        margin: 18px 0 8px;
        font-size: 14px;
        font-weight: 700;
        opacity: 0.8;
    `,Empty:a.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${u};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:a.div`
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: start;
        background: transparent;
        border-radius: 16px;
        padding: 12px;
        border: ${u};
        ${({$done:i})=>i&&$`
                opacity: 0.6;
            `}
    `,ItemLeft:a.div`
        display: flex;
        gap: 12px;
        flex: 1;
    `,ItemRight:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Checkbox:a.input`
        width: 20px;
        height: 20px;
        margin-top: 4px;
    `,ItemTitle:a.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
        ${({$done:i})=>i&&$`
                text-decoration: line-through;
            `}
    `,ItemMeta:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.8;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,Tag:a.span`
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        border: ${T};
        color: inherit;
        ${({tone:i})=>i==="muted"&&$`
                opacity: 0.7;
            `}
    `,IconButton:a.button`
        background: transparent;
        border: ${u};
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
        color: inherit;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${j};
        }
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
        border: ${u};
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
    `},R="grocery-list.v1",W=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,Y=()=>{try{return JSON.parse(localStorage.getItem(R))??[]}catch{return[]}};function K(){const[i,c]=s.useState(Y),[g,x]=s.useState(""),[C,b]=s.useState(""),[w,f]=s.useState(1),[h,p]=s.useState(""),[k,q]=s.useState("All"),[z,I]=s.useState(null),[l,y]=s.useState(null),S=e=>y({title:"Are you sure?",confirmText:"Confirm",cancelText:"Cancel",tone:"default",...e}),M=()=>{const e=l==null?void 0:l.onConfirm;y(null),e&&e()};s.useEffect(()=>{if(!l)return;const e=o=>{o.key==="Escape"&&y(null),o.key==="Enter"&&M()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[l]),s.useEffect(()=>{localStorage.setItem(R,JSON.stringify(i))},[i]);const L=s.useMemo(()=>["All",...Array.from(new Set(i.map(e=>e.category).filter(Boolean))).sort((e,o)=>e.localeCompare(o))],[i]),v=s.useMemo(()=>{let e=i;if(k!=="All"&&(e=e.filter(o=>(o.category||"").toLowerCase()===k.toLowerCase())),h.trim()){const o=h.toLowerCase();e=e.filter(n=>n.name.toLowerCase().includes(o)||(n.category||"").toLowerCase().includes(o))}return[...e].sort((o,n)=>{const d=o.category||"~",m=n.category||"~";return d!==m?d.localeCompare(m):o.bought!==n.bought?o.bought-n.bought:o.name.localeCompare(n.name)})},[i,k,h]),A=s.useMemo(()=>{const e=new Map;for(const o of v){const n=o.category||"Uncategorized";e.has(n)||e.set(n,[]),e.get(n).push(o)}return Array.from(e.entries())},[v]),B=s.useMemo(()=>({total:i.length,open:i.filter(e=>!e.bought).length,bought:i.filter(e=>e.bought).length}),[i]),D=e=>{e.preventDefault();const o=g.trim(),n=C.trim(),d=Number(w)||1;o&&(c(m=>[{id:W(),name:o,category:n,qty:Math.max(1,d),bought:!1,createdAt:Date.now()},...m]),x(""),b(""),f(1))},N=e=>c(o=>o.map(n=>n.id===e?{...n,bought:!n.bought}:n)),F=e=>c(o=>o.filter(n=>n.id!==e)),Q=e=>I(e),P=(e,o)=>{c(n=>n.map(d=>d.id===e?{...d,...o}:d)),I(null)},H=()=>I(null),E=(e,o)=>c(n=>n.map(d=>{if(d.id!==e)return d;const m=Math.max(1,(Number(d.qty)||1)+o);return{...d,qty:m}})),G=()=>c(e=>e.filter(o=>!o.bought)),O=()=>{const e=new Set(v.map(o=>o.id));c(o=>o.map(n=>e.has(n.id)?{...n,bought:!0}:n))};return t.jsx(r.Page,{children:t.jsxs(r.Container,{children:[t.jsxs(r.Header,{children:[t.jsxs("div",{children:[t.jsx(r.Title,{children:"Grocery List"}),t.jsx(r.Sub,{children:"Categories • Quantities • LocalStorage"})]}),t.jsxs(r.BadgeRow,{children:[t.jsxs(r.Badge,{children:[B.open," to buy"]}),t.jsxs(r.Badge,{tone:"muted",children:[B.bought," bought"]})]})]}),t.jsxs(r.Card,{as:"form",onSubmit:D,children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{placeholder:"Item name *",value:g,onChange:e=>x(e.target.value),"aria-label":"Item name",required:!0}),t.jsx(r.Input,{placeholder:"Category (optional)",value:C,onChange:e=>b(e.target.value),"aria-label":"Category",list:"cat-suggest"}),t.jsx("datalist",{id:"cat-suggest",children:Array.from(new Set(i.map(e=>e.category).filter(Boolean))).map(e=>t.jsx("option",{value:e},e))}),t.jsx(r.Input,{type:"number",inputMode:"numeric",min:"1",step:"1",value:w,onChange:e=>f(e.target.value),"aria-label":"Quantity",placeholder:"Qty"}),t.jsx(r.PrimaryButton,{type:"submit",disabled:!g.trim(),children:"Add"})]}),!g.trim()&&t.jsx(r.Helper,{children:"Tip: Item name is required."})]}),t.jsxs(r.Toolbar,{children:[t.jsxs(r.RowWrap,{children:[t.jsx(r.Select,{value:k,onChange:e=>q(e.target.value),"aria-label":"Filter by category",children:L.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(r.Input,{placeholder:"Search item/category…",value:h,onChange:e=>p(e.target.value),"aria-label":"Search"})]}),t.jsxs(r.RowWrap,{children:[t.jsx(r.Button,{type:"button",onClick:()=>S({title:"Mark visible as bought?",message:`Mark ${v.filter(e=>!e.bought).length} item(s) as bought?`,confirmText:"Mark bought",onConfirm:O}),children:"Mark visible bought"}),t.jsx(r.DangerButton,{type:"button",onClick:()=>S({title:"Clear bought items?",message:`Remove ${i.filter(e=>e.bought).length} bought item(s)?`,confirmText:"Clear bought",tone:"danger",onConfirm:G}),children:"Clear bought"})]})]}),t.jsxs(r.List,{children:[v.length===0&&t.jsx(r.Empty,{children:"No items. Add your first grocery!"}),A.map(([e,o])=>t.jsxs("div",{children:[t.jsxs(r.GroupHeader,{children:["#",e]}),o.map(n=>z===n.id?t.jsx(U,{item:n,onCancel:H,onSave:P},n.id):t.jsxs(r.Item,{$done:n.bought,children:[t.jsxs(r.ItemLeft,{children:[t.jsx(r.Checkbox,{type:"checkbox",checked:n.bought,onChange:()=>N(n.id),"aria-label":`Mark ${n.name} ${n.bought?"not bought":"bought"}`}),t.jsxs("div",{children:[t.jsx(r.ItemTitle,{$done:n.bought,children:n.name}),t.jsxs(r.ItemMeta,{children:[t.jsx(r.Tag,{tone:n.category?void 0:"muted",children:n.category?`#${n.category}`:"Uncategorized"}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Qty: ",n.qty]})]})]})]}),t.jsxs(r.ItemRight,{children:[t.jsx(r.IconButton,{onClick:()=>E(n.id,1),"aria-label":"Increase",children:"＋"}),t.jsx(r.IconButton,{onClick:()=>E(n.id,-1),"aria-label":"Decrease",children:"－"}),t.jsx(r.IconButton,{onClick:()=>Q(n.id),"aria-label":"Edit",children:"✏️"}),t.jsx(r.IconButton,{onClick:()=>S({title:"Delete item?",message:`Delete “${n.name}”?`,confirmText:"Delete",tone:"danger",onConfirm:()=>F(n.id)}),"aria-label":"Delete",children:"🗑️"})]})]},n.id))]},e))]}),t.jsx(r.FooterNote,{children:"Data stays in your browser (localStorage). Refresh-safe."}),l&&t.jsx(r.ModalOverlay,{onClick:()=>y(null),children:t.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:e=>e.stopPropagation(),children:[t.jsx(r.ModalTitle,{id:"confirm-title",children:l.title}),l.message?t.jsx(r.ModalMessage,{children:l.message}):null,t.jsxs(r.ModalActions,{children:[t.jsx(r.Button,{type:"button",onClick:()=>y(null),children:l.cancelText||"Cancel"}),l.tone==="danger"?t.jsx(r.DangerButton,{type:"button",onClick:M,autoFocus:!0,children:l.confirmText||"Confirm"}):t.jsx(r.PrimaryButton,{type:"button",onClick:M,autoFocus:!0,children:l.confirmText||"Confirm"})]})]})})]})})}function U({item:i,onCancel:c,onSave:g}){const[x,C]=s.useState(i.name),[b,w]=s.useState(i.category||""),[f,h]=s.useState(i.qty);return t.jsxs(r.Item,{as:"form",onSubmit:p=>{p.preventDefault(),x.trim()&&g(i.id,{name:x.trim(),category:b.trim(),qty:Math.max(1,Number(f)||1)})},children:[t.jsxs(r.ItemLeft,{style:{alignItems:"center"},children:[t.jsx(r.Input,{value:x,onChange:p=>C(p.target.value),placeholder:"Item name *","aria-label":"Edit name",required:!0}),t.jsx(r.Input,{value:b,onChange:p=>w(p.target.value),placeholder:"Category","aria-label":"Edit category",style:{maxWidth:180}}),t.jsx(r.Input,{type:"number",min:"1",step:"1",value:f,onChange:p=>h(p.target.value),"aria-label":"Edit quantity",style:{maxWidth:120}})]}),t.jsxs(r.ItemRight,{children:[t.jsx(r.PrimaryButton,{type:"submit",children:"Save"}),t.jsx(r.Button,{type:"button",onClick:c,children:"Cancel"})]})]})}export{K as default};
