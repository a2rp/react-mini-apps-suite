import{d as a,l as W,r as l,j as t}from"./index-nahrugLd.js";const u="1px solid hsl(0 0% 100% / 0.14)",D="1px solid hsl(0 0% 100% / 0.10)",C="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:a.div`
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
        border: ${D};
        color: inherit;
    `,Card:a.div`
        border-radius: 16px;
        padding: 16px;
        border: ${u};
        background: transparent;
    `,FormRow:a.div`
        display: grid;
        grid-template-columns: 1fr 240px 160px auto;
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
            box-shadow: ${C};
            border-color: hsl(0 0% 100% / 0.35);
        }
        &[type="number"],
        &[type="date"] {
            color-scheme: dark;
        }
        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type="number"] {
            -moz-appearance: textfield;
        }
        &[type="date"] {
            padding-right: 40px;
        }
        &[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1) brightness(1.2);
            opacity: 0.9;
            cursor: pointer;
        }
    `,TextArea:a.textarea`
        background: transparent;
        color: inherit;
        border: ${u};
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
            box-shadow: ${C};
            border-color: hsl(0 0% 100% / 0.35);
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
            box-shadow: ${C};
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
            box-shadow: ${C};
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
            box-shadow: ${C};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        } /* ensure native list is readable */
    `,List:a.div`
        display: grid;
        gap: 10px;
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
    `,ItemLeft:a.div`
        display: flex;
        gap: 12px;
        flex: 1;
    `,ItemRight:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,ItemTitle:a.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
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
        border: ${D};
        color: inherit;
        ${({tone:i})=>i==="muted"&&W`
                opacity: 0.7;
            `}
    `,DueHint:a.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${D};
        color: inherit;
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
            box-shadow: ${C};
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
    `},L="reading-list.v1",E=["To Read","Reading","Read"],U=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,S=()=>{const i=new Date,x=i.getFullYear(),h=String(i.getMonth()+1).padStart(2,"0"),g=String(i.getDate()).padStart(2,"0");return`${x}-${h}-${g}`},z=i=>i?new Date(`${i}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"",J=()=>{try{return JSON.parse(localStorage.getItem(L))??[]}catch{return[]}};function G(){const[i,x]=l.useState(J),[h,g]=l.useState(""),[T,R]=l.useState(""),[y,m]=l.useState("To Read"),[b,A]=l.useState(""),[w,I]=l.useState("All"),[f,k]=l.useState("created"),[$,j]=l.useState(null),[d,p]=l.useState(null),B=e=>p({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",hideCancel:!1,...e}),o=()=>{const e=d==null?void 0:d.onConfirm;p(null),typeof e=="function"&&e()};l.useEffect(()=>{if(!d)return;const e=n=>{n.key==="Escape"&&p(null),n.key==="Enter"&&o()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[d]),l.useEffect(()=>localStorage.setItem(L,JSON.stringify(i)),[i]);const v=l.useMemo(()=>({toRead:i.filter(e=>e.status==="To Read").length,reading:i.filter(e=>e.status==="Reading").length,read:i.filter(e=>e.status==="Read").length}),[i]),P=l.useMemo(()=>{let e=i;if(w!=="All"&&(e=e.filter(n=>n.status===w)),b.trim()){const n=b.toLowerCase();e=e.filter(s=>s.title.toLowerCase().includes(n)||(s.author||"").toLowerCase().includes(n))}if(f==="title")e=[...e].sort((n,s)=>n.title.localeCompare(s.title));else if(f==="author")e=[...e].sort((n,s)=>(n.author||"").localeCompare(s.author||""));else if(f==="status"){const n={"To Read":0,Reading:1,Read:2};e=[...e].sort((s,c)=>n[s.status]-n[c.status]||s.title.localeCompare(c.title))}else e=[...e].sort((n,s)=>s.createdAt-n.createdAt);return e},[i,w,b,f]),N=e=>{e.preventDefault();const n=h.trim();if(!n)return;const s={id:U(),title:n,author:T.trim(),status:y,totalPages:"",currentPage:"",notes:"",startedAt:y==="Reading"?S():"",finishedAt:y==="Read"?S():"",createdAt:Date.now(),updatedAt:Date.now()};x(c=>[s,...c]),g(""),R(""),m("To Read"),p({title:"Saved",message:`Added “${n}”.`,confirmText:"OK",hideCancel:!0})},O=e=>j(e),H=()=>j(null),Y=(e,n)=>{x(s=>s.map(c=>c.id===e?{...c,...n,updatedAt:Date.now()}:c)),j(null),p({title:"Saved",message:"Book updated.",confirmText:"OK",hideCancel:!0})},q=e=>{B({title:"Delete book?",message:"This will remove the book from your list.",confirmText:"Delete",tone:"danger",onConfirm:()=>x(n=>n.filter(s=>s.id!==e))})},K=()=>{B({title:"Clear all ‘Read’ books?",message:"This will remove all books marked as Read.",confirmText:"Clear",tone:"danger",onConfirm:()=>x(e=>e.filter(n=>n.status!=="Read"))})},F=(e,n)=>{x(s=>s.map(c=>{if(c.id!==e)return c;const M={status:n,updatedAt:Date.now()};return n==="Reading"&&!c.startedAt&&(M.startedAt=S()),n==="Read"&&(M.finishedAt=S()),{...c,...M}}))};return t.jsx(r.Page,{children:t.jsxs(r.Container,{children:[t.jsxs(r.Header,{children:[t.jsxs("div",{children:[t.jsx(r.Title,{children:"Book Reading List"}),t.jsx(r.Sub,{children:"Track books to read, reading, and read • LocalStorage"})]}),t.jsxs(r.BadgeRow,{children:[t.jsxs(r.Tag,{children:["To Read: ",v.toRead]}),t.jsxs(r.Tag,{children:["Reading: ",v.reading]}),t.jsxs(r.Tag,{children:["Read: ",v.read]})]})]}),t.jsxs(r.Card,{as:"form",onSubmit:N,children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{placeholder:"Book title *",value:h,onChange:e=>g(e.target.value),required:!0}),t.jsx(r.Input,{placeholder:"Author",value:T,onChange:e=>R(e.target.value),list:"author-suggestions"}),t.jsx("datalist",{id:"author-suggestions",children:Array.from(new Set(i.map(e=>e.author).filter(Boolean))).map(e=>t.jsx("option",{value:e},e))}),t.jsx(r.Select,{value:y,onChange:e=>m(e.target.value),children:E.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(r.PrimaryButton,{type:"submit",disabled:!h.trim(),children:"Add"})]}),!h.trim()&&t.jsx(r.Helper,{children:"Tip: Title is required."})]}),t.jsxs(r.Toolbar,{children:[t.jsxs(r.RowWrap,{children:[t.jsx(r.Select,{value:w,onChange:e=>I(e.target.value),"aria-label":"Filter",children:["All",...E].map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsxs(r.Select,{value:f,onChange:e=>k(e.target.value),"aria-label":"Sort",children:[t.jsx("option",{value:"created",children:"Newest"}),t.jsx("option",{value:"title",children:"Title A–Z"}),t.jsx("option",{value:"author",children:"Author A–Z"}),t.jsx("option",{value:"status",children:"By status"})]}),t.jsx(r.Input,{placeholder:"Search title/author…",value:b,onChange:e=>A(e.target.value),"aria-label":"Search"})]}),t.jsx(r.RowWrap,{children:t.jsx(r.DangerButton,{type:"button",onClick:K,children:"Clear ‘Read’"})})]}),t.jsxs(r.List,{children:[P.length===0&&t.jsx(r.Empty,{children:"No books yet. Add your first!"}),P.map(e=>{const n=Number(e.totalPages)>0,s=n?Math.max(0,Math.min(100,Math.round((Number(e.currentPage)||0)/Number(e.totalPages)*100))):null;return $===e.id?t.jsx(Q,{book:e,onCancel:H,onSave:Y},e.id):t.jsxs(r.Item,{children:[t.jsx(r.ItemLeft,{children:t.jsxs("div",{children:[t.jsx(r.ItemTitle,{children:e.title}),t.jsxs(r.ItemMeta,{children:[e.author?t.jsxs(r.Tag,{children:["by ",e.author]}):t.jsx(r.Tag,{tone:"muted",children:"Unknown author"}),t.jsx("span",{children:"•"}),t.jsxs(r.Tag,{children:["#",e.status]}),n&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"•"}),t.jsxs(r.DueHint,{children:[e.currentPage,"/",e.totalPages," (",s,"%)"]})]}),e.startedAt&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Started ",z(e.startedAt)]})]}),e.finishedAt&&t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Finished ",z(e.finishedAt)]})]})]})]})}),t.jsxs(r.ItemRight,{children:[e.status!=="Reading"&&t.jsx(r.IconButton,{onClick:()=>F(e.id,"Reading"),title:"Mark as Reading",children:"📖"}),e.status!=="Read"&&t.jsx(r.IconButton,{onClick:()=>F(e.id,"Read"),title:"Mark as Read",children:"✅"}),t.jsx(r.IconButton,{onClick:()=>O(e.id),title:"Edit",children:"✏️"}),t.jsx(r.IconButton,{onClick:()=>q(e.id),title:"Delete",children:"🗑️"})]})]},e.id)})]}),t.jsx(r.FooterNote,{children:"Data stays in your browser (localStorage). Refresh-safe."}),d&&t.jsx(r.ModalOverlay,{onClick:()=>p(null),children:t.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:e=>e.stopPropagation(),children:[t.jsx(r.ModalTitle,{id:"confirm-title",children:d.title}),d.message?t.jsx(r.ModalMessage,{children:d.message}):null,t.jsxs(r.ModalActions,{children:[!d.hideCancel&&t.jsx(r.Button,{type:"button",onClick:()=>p(null),children:d.cancelText||"Cancel"}),d.tone==="danger"?t.jsx(r.DangerButton,{type:"button",onClick:o,autoFocus:!0,children:d.confirmText||"Confirm"}):t.jsx(r.PrimaryButton,{type:"button",onClick:o,autoFocus:!0,children:d.confirmText||"Confirm"})]})]})})]})})}function Q({book:i,onCancel:x,onSave:h}){const[g,T]=l.useState(i.title),[R,y]=l.useState(i.author||""),[m,b]=l.useState(i.status),[A,w]=l.useState(i.totalPages||""),[I,f]=l.useState(i.currentPage||""),[k,$]=l.useState(i.startedAt||""),[j,d]=l.useState(i.finishedAt||""),[p,B]=l.useState(i.notes||"");return t.jsxs(r.Item,{as:"form",onSubmit:o=>{if(o.preventDefault(),!g.trim())return;const v={title:g.trim(),author:R.trim(),status:m,totalPages:A,currentPage:I,startedAt:k,finishedAt:j,notes:p};m==="Reading"&&!k&&(v.startedAt=S()),m==="Read"&&!j&&(v.finishedAt=S()),h(i.id,v)},children:[t.jsxs(r.ItemLeft,{style:{flexDirection:"column",gap:10},children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{value:g,onChange:o=>T(o.target.value),placeholder:"Title *",required:!0}),t.jsx(r.Input,{value:R,onChange:o=>y(o.target.value),placeholder:"Author"}),t.jsx(r.Select,{value:m,onChange:o=>b(o.target.value),children:E.map(o=>t.jsx("option",{value:o,children:o},o))})]}),t.jsxs(r.RowWrap,{children:[t.jsx(r.Input,{type:"number",inputMode:"numeric",min:"0",step:"1",value:A,onChange:o=>w(o.target.value),placeholder:"Total pages",style:{width:140}}),t.jsx(r.Input,{type:"number",inputMode:"numeric",min:"0",step:"1",value:I,onChange:o=>f(o.target.value),placeholder:"Current page",style:{width:140}}),t.jsx(r.Input,{type:"date",value:k,onChange:o=>$(o.target.value),"aria-label":"Started date"}),t.jsx(r.Input,{type:"date",value:j,onChange:o=>d(o.target.value),"aria-label":"Finished date"})]}),t.jsx(r.TextArea,{placeholder:"Notes (optional)…",value:p,onChange:o=>B(o.target.value)})]}),t.jsxs(r.ItemRight,{children:[t.jsx(r.PrimaryButton,{type:"submit",children:"Save"}),t.jsx(r.Button,{type:"button",onClick:x,children:"Cancel"})]})]})}export{G as default};
