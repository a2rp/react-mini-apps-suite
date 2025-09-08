import{d as i,l as Z,r as s,j as t}from"./index-BySW6BSp.js";const x="1px solid hsl(0 0% 100% / 0.14)",q="1px solid hsl(0 0% 100% / 0.10)",f="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:i.div`
        min-height: 100dvh;
    `,Container:i.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 56px;
    `,Header:i.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,Title:i.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:i.p`
        margin: 0;
        color: inherit;
        opacity: 0.75;
        font-size: 14px;
    `,BadgeRow:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:i.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${q};
        color: inherit;
        ${({tone:o})=>o==="muted"&&Z`
                opacity: 0.7;
            `}
    `,Card:i.div`
        border-radius: 16px;
        padding: 16px;
        border: ${x};
        background: transparent;
    `,FormRow:i.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        > * {
            min-width: 0;
        }
    `,FilterBar:i.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin: 16px 0 10px;
        > * {
            min-width: 0;
        }
    `,RowWrap:i.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,ButtonRow:i.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Input:i.input`
        background: transparent;
        color: inherit;
        border: ${x};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        caret-color: currentColor;
        min-width: 0;
        width: 100%;
        flex: 1 1 220px;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${f};
            border-color: hsl(0 0% 100% / 0.35);
        }
        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type="number"] {
            -moz-appearance: textfield;
        }
    `,Select:i.select`
        background: transparent;
        color: inherit;
        border: ${x};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        flex: 1 1 220px;
        &:focus-visible {
            box-shadow: ${f};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:i.textarea`
        background: transparent;
        color: inherit;
        border: ${x};
        border-radius: 12px;
        padding: 10px 12px;
        font-size: 14px;
        min-height: 110px;
        resize: vertical;
        outline: none;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${f};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:i.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:i.button`
        border: ${x};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        font-weight: 600;
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
            box-shadow: ${f};
        }
    `,Button:i.button`
        border: ${x};
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
            box-shadow: ${f};
        }
    `,DangerButton:i.button`
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
    `,IconButton:i.button`
        background: transparent;
        border: ${x};
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
        color: inherit;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${f};
        }
    `,List:i.div`
        display: grid;
        gap: 10px;
    `,Empty:i.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${x};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:i.div`
        display: grid;
        grid-template-columns: ${({$edit:o})=>o?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${x};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ItemLeft:i.div`
        display: flex;
        gap: 12px;
        flex: 1;
    `,ItemRight:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:i.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
        display: flex;
        align-items: center;
        gap: 8px;
        input[type="checkbox"] {
            width: 18px;
            height: 18px;
        }
    `,ItemMeta:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,QtyGroup:i.div`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: ${x};
        border-radius: 10px;
        padding: 4px 8px;
        button {
            border: ${q};
            border-radius: 8px;
            padding: 4px 8px;
            cursor: pointer;
            color: inherit;
            background: transparent;
        }
        span {
            min-width: 18px;
            text-align: center;
        }
    `,Fieldset:i.fieldset`
        border: ${x};
        border-radius: 12px;
        padding: 12px;
        margin: 2px 0 0;
        background: transparent;
    `,Legend:i.legend`
        padding: 0 6px;
        opacity: 0.9;
        font-weight: 600;
    `,FooterNote:i.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:i.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:i.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${x};
        background: transparent;
    `,ModalTitle:i.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:i.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:i.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `,Divider:i.div`
        margin: 50px 30px;
        height: 1px;
        background-color: #333;
    `},R="packingList.v2",D=()=>{var o;return((o=crypto==null?void 0:crypto.randomUUID)==null?void 0:o.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`},_=()=>{var o;try{const p=localStorage.getItem(R)||localStorage.getItem("packingList.v1");if(!p)return{items:[]};const d=JSON.parse(p);return Array.isArray(d)?{items:d}:Array.isArray(d.items)?{items:d.items}:(o=d.current)!=null&&o.items&&Array.isArray(d.current.items)?{items:d.current.items}:{items:[]}}catch{return{items:[]}}},X=o=>localStorage.setItem(R,JSON.stringify(o));function re(){const[o,p]=s.useState(()=>_()),[d,g]=s.useState(""),[w,y]=s.useState(""),[C,b]=s.useState("1"),[S,j]=s.useState(!1),[m,u]=s.useState(""),[I,F]=s.useState("all"),[M,P]=s.useState("All"),[k,Q]=s.useState("status"),[U,B]=s.useState(null),[c,v]=s.useState(null),E=e=>v({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",hideCancel:!1,...e}),T=()=>{const e=c==null?void 0:c.onConfirm;v(null),typeof e=="function"&&e()};s.useEffect(()=>{if(!c)return;const e=n=>{n.key==="Escape"&&v(null),n.key==="Enter"&&T()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[c]),s.useEffect(()=>{X(o)},[o]);const N=s.useMemo(()=>{const e=new Set;return o.items.forEach(n=>e.add(n.category||"Uncategorized")),["All",...Array.from(e).sort((n,a)=>n.localeCompare(a))]},[o.items]),$=s.useMemo(()=>{const e=o.items.length,n=o.items.filter(a=>a.packed).length;return{total:e,packed:n,remaining:e-n}},[o.items]),A=s.useMemo(()=>{let e=o.items;if(I==="unpacked"&&(e=e.filter(n=>!n.packed)),I==="essentials"&&(e=e.filter(n=>n.essential)),M!=="All"&&(e=e.filter(n=>(n.category||"Uncategorized")===M)),m.trim()){const n=m.toLowerCase();e=e.filter(a=>(a.label||"").toLowerCase().includes(n)||(a.category||"").toLowerCase().includes(n))}return k==="label"?e=[...e].sort((n,a)=>n.label.localeCompare(a.label)):k==="category"?e=[...e].sort((n,a)=>(n.category||"").localeCompare(a.category||"")):k==="qty"?e=[...e].sort((n,a)=>(a.qty||0)-(n.qty||0)):e=[...e].sort((n,a)=>{const l=n.packed===a.packed?0:n.packed?1:-1,h=n.essential===a.essential?0:n.essential?-1:1;return l||h||n.label.localeCompare(a.label)}),e},[o.items,I,M,m,k]),G=e=>{var l;(l=e.preventDefault)==null||l.call(e);const n=d.trim();if(!n)return;const a={id:D(),label:n,category:w.trim()||"Uncategorized",qty:Math.max(1,Number(C)||1),essential:!!S,packed:!1};p(h=>({...h,items:[a,...h.items]})),g(""),y(""),b("1"),j(!1)},O=e=>{p(n=>({...n,items:n.items.map(a=>a.id===e?{...a,packed:!a.packed}:a)}))},L=(e,n)=>{p(a=>({...a,items:a.items.map(l=>l.id===e?{...l,qty:Math.max(1,(Number(l.qty)||1)+n)}:l)}))},Y=e=>{E({title:"Remove item?",message:"This will delete the item from your list.",tone:"danger",confirmText:"Delete",onConfirm:()=>p(n=>({...n,items:n.items.filter(a=>a.id!==e)}))})},H=e=>{p(n=>{const a=n.items.find(h=>h.id===e);if(!a)return n;const l={...a,id:D(),label:`${a.label} (copy)`,packed:!1};return{...n,items:[l,...n.items]}})},V=e=>B(e),J=()=>B(null),K=(e,n)=>{p(a=>({...a,items:a.items.map(l=>l.id===e?{...l,...n}:l)})),B(null)},z=e=>{p(n=>({...n,items:n.items.map(a=>({...a,packed:e}))}))},W=()=>{E({title:"Clear current list?",message:"This removes all items from your packing list.",tone:"danger",confirmText:"Clear",onConfirm:()=>p(e=>({...e,items:[]}))})};return t.jsx(r.Page,{children:t.jsxs(r.Container,{children:[t.jsxs(r.Header,{children:[t.jsxs("div",{children:[t.jsx(r.Title,{children:"Packing List Generator"}),t.jsx(r.Sub,{children:"Build and manage your packing list. LocalStorage only."})]}),t.jsxs(r.BadgeRow,{children:[t.jsxs(r.Tag,{children:["Total: ",$.total]}),t.jsxs(r.Tag,{children:["Packed: ",$.packed]}),t.jsxs(r.Tag,{tone:"muted",children:["Left: ",$.remaining]})]})]}),t.jsxs(r.Card,{as:"form",onSubmit:G,children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{placeholder:"Item name * (e.g., Sunscreen)",value:d,onChange:e=>g(e.target.value),required:!0,style:{flex:"2 1 320px"}}),t.jsx(r.Input,{placeholder:"Category (e.g., Toiletries)",value:w,onChange:e=>y(e.target.value),list:"cat-suggestions",style:{flex:"1 1 220px"}}),t.jsx("datalist",{id:"cat-suggestions",children:Array.from(new Set(o.items.map(e=>e.category).filter(Boolean))).map(e=>t.jsx("option",{value:e},e))}),t.jsx(r.Input,{type:"number",inputMode:"numeric",placeholder:"Qty",value:C,onChange:e=>b(e.target.value),style:{flex:"0 1 100px"}}),t.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t.jsx("input",{type:"checkbox",checked:S,onChange:e=>j(e.target.checked)}),"Essential"]}),t.jsx(r.PrimaryButton,{type:"submit",disabled:!d.trim(),children:"Add"})]}),!d.trim()&&t.jsx(r.Helper,{children:"Tip: Item name is required."})]}),t.jsx(r.Divider,{}),t.jsxs(r.FilterBar,{children:[t.jsxs(r.Select,{value:I,onChange:e=>F(e.target.value),"aria-label":"View",title:"View",children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"unpacked",children:"Unpacked"}),t.jsx("option",{value:"essentials",children:"Essentials"})]}),t.jsx(r.Select,{value:M,onChange:e=>P(e.target.value),"aria-label":"Category",title:"Category",children:N.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsxs(r.Select,{value:k,onChange:e=>Q(e.target.value),"aria-label":"Sort",title:"Sort",children:[t.jsx("option",{value:"status",children:"Status (unpacked → packed)"}),t.jsx("option",{value:"label",children:"Label A-Z"}),t.jsx("option",{value:"category",children:"Category A-Z"}),t.jsx("option",{value:"qty",children:"Qty (high → low)"})]}),t.jsx(r.Input,{placeholder:"Search label/category…",value:m,onChange:e=>u(e.target.value),"aria-label":"Search",style:{flex:"2 1 320px"}})]}),t.jsxs(r.RowWrap,{style:{justifyContent:"flex-end",margin:"6px 0 8px"},children:[t.jsx(r.DangerButton,{type:"button",onClick:W,children:"Clear List"}),t.jsx(r.Button,{type:"button",onClick:()=>z(!0),title:"Mark all as packed",children:"Mark All ✓"}),t.jsx(r.Button,{type:"button",onClick:()=>z(!1),title:"Mark all as unpacked",children:"Unpack All"})]}),t.jsxs(r.List,{children:[A.length===0&&t.jsx(r.Empty,{children:"No items yet. Add your first item."}),A.map(e=>U===e.id?t.jsx(ee,{item:e,onCancel:J,onSave:K},e.id):t.jsxs(r.Item,{children:[t.jsx(r.ItemLeft,{children:t.jsxs("div",{children:[t.jsxs(r.ItemTitle,{children:[t.jsx("input",{type:"checkbox",checked:e.packed,onChange:()=>O(e.id),title:e.packed?"Unpack":"Mark packed"}),t.jsx("span",{style:{textDecoration:e.packed?"line-through":"none",opacity:e.packed?.75:1},children:e.label})]}),t.jsxs(r.ItemMeta,{children:[t.jsxs(r.Tag,{children:["#",e.category||"Uncategorized"]}),t.jsx("span",{children:"•"}),t.jsxs(r.QtyGroup,{children:[t.jsx("button",{type:"button",onClick:()=>L(e.id,-1),title:"Decrease",children:"-"}),t.jsx("span",{children:e.qty||1}),t.jsx("button",{type:"button",onClick:()=>L(e.id,1),title:"Increase",children:"+"})]}),e.essential&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"•"}),t.jsx(r.Tag,{children:"Essential"})]})]})]})}),t.jsxs(r.ItemRight,{children:[t.jsx(r.IconButton,{onClick:()=>H(e.id),title:"Duplicate",children:"📄"}),t.jsx(r.IconButton,{onClick:()=>V(e.id),title:"Edit",children:"✏️"}),t.jsx(r.IconButton,{onClick:()=>Y(e.id),title:"Delete",children:"🗑️"})]})]},e.id))]}),t.jsxs(r.FooterNote,{children:["Data stays in your browser (",t.jsx("b",{children:"LocalStorage"}),"). Quick, simple, refresh-safe."]}),c&&t.jsx(r.ModalOverlay,{onClick:()=>v(null),children:t.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:e=>e.stopPropagation(),children:[t.jsx(r.ModalTitle,{id:"confirm-title",children:c.title}),c.message?t.jsx(r.ModalMessage,{children:c.message}):null,t.jsxs(r.ModalActions,{children:[!c.hideCancel&&t.jsx(r.Button,{type:"button",onClick:()=>v(null),children:c.cancelText||"Cancel"}),c.tone==="danger"?t.jsx(r.DangerButton,{type:"button",onClick:T,autoFocus:!0,children:c.confirmText||"Confirm"}):t.jsx(r.PrimaryButton,{type:"button",onClick:T,autoFocus:!0,children:c.confirmText||"Confirm"})]})]})})]})})}function ee({item:o,onCancel:p,onSave:d}){const[g,w]=s.useState(o.label),[y,C]=s.useState(o.category||""),[b,S]=s.useState(String(o.qty||1)),[j,m]=s.useState(!!o.essential);return t.jsx(r.Item,{as:"form",$edit:!0,onSubmit:u=>{u.preventDefault(),g.trim()&&d(o.id,{label:g.trim(),category:y.trim()||"Uncategorized",qty:Math.max(1,Number(b)||1),essential:j})},children:t.jsxs(r.ItemLeft,{style:{flexDirection:"column",gap:12},children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{value:g,onChange:u=>w(u.target.value),placeholder:"Item *",required:!0,style:{flex:"2 1 320px"}}),t.jsx(r.Input,{value:y,onChange:u=>C(u.target.value),placeholder:"Category",style:{flex:"1 1 220px"}}),t.jsx(r.Input,{type:"number",inputMode:"numeric",value:b,onChange:u=>S(u.target.value),placeholder:"Qty",style:{flex:"0 1 120px"}}),t.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t.jsx("input",{type:"checkbox",checked:j,onChange:u=>m(u.target.checked)}),"Essential"]})]}),t.jsxs(r.ButtonRow,{children:[t.jsx(r.PrimaryButton,{type:"submit",children:"Save"}),t.jsx(r.Button,{type:"button",onClick:p,children:"Cancel"})]})]})})}export{re as default};
