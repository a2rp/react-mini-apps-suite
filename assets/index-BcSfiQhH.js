import{d as n,l as T,r as s,j as t}from"./index-CNowL1fO.js";const u="1px solid hsl(0 0% 100% / 0.14)",I="1px solid hsl(0 0% 100% / 0.10)",y="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:n.div`
        min-height: 100dvh;
    `,Container:n.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 56px;
    `,Header:n.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
    `,Title:n.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:n.p`
        margin: 0;
        color: inherit;
        opacity: 0.75;
        font-size: 14px;
    `,BadgeRow:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Badge:n.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${I};
        color: inherit;
    `,Card:n.div`
        border-radius: 16px;
        padding: 16px;
        border: ${u};
        background: transparent;
    `,FormRow:n.div`
        display: grid;
        grid-template-columns: 1fr 220px 160px auto;
        gap: 10px;
        @media (width < 860px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (width < 520px) {
            grid-template-columns: 1fr;
        }
    `,Input:n.input`
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
            box-shadow: ${y};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:n.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:n.button`
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
            box-shadow: ${y};
        }
    `,Button:n.button`
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
            box-shadow: ${y};
        }
    `,DangerButton:n.button`
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
    `,Toolbar:n.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin: 16px 0;
        flex-wrap: wrap;
    `,RowWrap:n.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,Select:n.select`
        background: transparent;
        color: inherit;
        border: ${u};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        &:focus-visible {
            box-shadow: ${y};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,List:n.div`
        display: grid;
        gap: 10px;
    `,Empty:n.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${u};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:n.div`
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: start;
        background: transparent;
        border-radius: 16px;
        padding: 12px;
        border: ${u};
        ${({$done:a})=>a&&T`
                opacity: 0.6;
            `}
        ${({$overdue:a})=>a&&T`
                border-color: hsl(0 70% 60% / 0.7);
            `}
    `,ItemLeft:n.div`
        display: flex;
        gap: 12px;
        flex: 1;
    `,ItemRight:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Checkbox:n.input`
        width: 20px;
        height: 20px;
        margin-top: 4px;
    `,ItemTitle:n.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
        ${({$done:a})=>a&&T`
                text-decoration: line-through;
            `}
    `,ItemMeta:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.8;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,Tag:n.span`
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        border: ${I};
        color: inherit;
    `,DueHint:n.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${I};
        color: inherit;
    `,IconButton:n.button`
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
            box-shadow: ${y};
        }
    `,FooterNote:n.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:n.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:n.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${u};
        background: transparent;
    `,ModalTitle:n.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:n.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:n.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `},B="todo-list.v1",W=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,U=()=>{const a=new Date,l=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),x=String(a.getDate()).padStart(2,"0");return`${l}-${c}-${x}`},J=a=>a?new Date(`${a}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"No due date",K=a=>{if(!a)return null;const l=new Date(`${a}T00:00:00`),c=new Date(`${U()}T00:00:00`);return Math.round((l-c)/(1e3*60*60*24))},G=()=>{try{return JSON.parse(localStorage.getItem(B))??[]}catch{return[]}};function _(){const[a,l]=s.useState(G),[c,x]=s.useState(""),[v,h]=s.useState(""),[j,f]=s.useState(""),[g,p]=s.useState(""),[C,M]=s.useState("All"),[w,A]=s.useState("created"),[E,k]=s.useState(null),[d,m]=s.useState(null),$=e=>{m({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",...e})},D=()=>{const e=d==null?void 0:d.onConfirm;m(null),typeof e=="function"&&e()};s.useEffect(()=>{if(!d)return;const e=o=>{o.key==="Escape"&&m(null),o.key==="Enter"&&D()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[d]),s.useEffect(()=>{localStorage.setItem(B,JSON.stringify(a))},[a]);const R=s.useMemo(()=>{const e=new Set(a.map(o=>o.category).filter(Boolean));return["All",...Array.from(e).sort((o,i)=>o.localeCompare(i))]},[a]),S=s.useMemo(()=>{let e=a;if(C!=="All"&&(e=e.filter(o=>(o.category||"").toLowerCase()===C.toLowerCase())),g.trim()){const o=g.trim().toLowerCase();e=e.filter(i=>i.title.toLowerCase().includes(o)||(i.category||"").toLowerCase().includes(o))}return w==="dueAsc"?e=[...e].sort((o,i)=>(o.due||"9999-12-31").localeCompare(i.due||"9999-12-31")):w==="dueDesc"?e=[...e].sort((o,i)=>(i.due||"0000-01-01").localeCompare(o.due||"0000-01-01")):e=[...e].sort((o,i)=>i.createdAt-o.createdAt),e},[a,C,g,w]),L=e=>{e.preventDefault();const o=c.trim(),i=v.trim();if(!o)return;const b={id:W(),title:o,category:i||"",due:j||"",done:!1,createdAt:Date.now(),updatedAt:Date.now()};l(q=>[b,...q]),x(""),h(""),f("")},z=e=>{l(o=>o.map(i=>i.id===e?{...i,done:!i.done,updatedAt:Date.now()}:i))},N=e=>{l(o=>o.filter(i=>i.id!==e))},F=e=>k(e),P=(e,o)=>{l(i=>i.map(b=>b.id===e?{...b,...o,updatedAt:Date.now()}:b)),k(null)},H=()=>k(null),O=()=>l(e=>e.filter(o=>!o.done)),Y=()=>{const e=new Set(S.map(o=>o.id));l(o=>o.map(i=>e.has(i.id)?{...i,done:!0,updatedAt:Date.now()}:i))};return t.jsx(r.Page,{children:t.jsxs(r.Container,{children:[t.jsxs(r.Header,{children:[t.jsxs("div",{children:[t.jsx(r.Title,{children:"To-Do List"}),t.jsx(r.Sub,{children:"Basic CRUD • Categories • Due Dates • LocalStorage"})]}),t.jsxs(r.BadgeRow,{children:[t.jsxs(r.Badge,{children:[a.filter(e=>!e.done).length," open"]}),t.jsxs(r.Badge,{tone:"muted",children:[a.filter(e=>e.done).length," done"]})]})]}),t.jsxs(r.Card,{as:"form",onSubmit:L,children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{placeholder:"Task title *",value:c,onChange:e=>x(e.target.value),"aria-label":"Task title",required:!0}),t.jsx(r.Input,{placeholder:"Category (optional)",value:v,onChange:e=>h(e.target.value),"aria-label":"Category",list:"category-suggestions"}),t.jsx("datalist",{id:"category-suggestions",children:Array.from(new Set(a.map(e=>e.category).filter(Boolean))).map(e=>t.jsx("option",{value:e},e))}),t.jsx(r.Input,{type:"date",value:j,onChange:e=>f(e.target.value),"aria-label":"Due date",min:"1900-01-01"}),t.jsx(r.PrimaryButton,{type:"submit",disabled:!c.trim(),children:"Add"})]}),!c.trim()&&t.jsx(r.Helper,{children:"Tip: Title is required."})]}),t.jsxs(r.Toolbar,{children:[t.jsxs(r.RowWrap,{children:[t.jsx(r.Select,{value:C,onChange:e=>M(e.target.value),"aria-label":"Filter by category",children:R.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsxs(r.Select,{value:w,onChange:e=>A(e.target.value),"aria-label":"Sort",children:[t.jsx("option",{value:"created",children:"Newest"}),t.jsx("option",{value:"dueAsc",children:"Due date ↑"}),t.jsx("option",{value:"dueDesc",children:"Due date ↓"})]}),t.jsx(r.Input,{placeholder:"Search title/category…",value:g,onChange:e=>p(e.target.value),"aria-label":"Search"})]}),t.jsxs(r.RowWrap,{children:[t.jsx(r.Button,{type:"button",onClick:()=>$({title:"Complete visible?",message:`Mark ${S.filter(e=>!e.done).length} task(s) as done?`,confirmText:"Complete",onConfirm:Y}),children:"Complete visible"}),t.jsx(r.DangerButton,{type:"button",onClick:()=>$({title:"Clear completed?",message:`Remove ${a.filter(e=>e.done).length} completed task(s)?`,confirmText:"Clear",tone:"danger",onConfirm:O}),children:"Clear completed"})]})]}),t.jsxs(r.List,{children:[S.length===0&&t.jsx(r.Empty,{children:"Nothing here yet. Add your first task!"}),S.map(e=>{const o=K(e.due),i=o!==null&&o<0&&!e.done;return E===e.id?t.jsx(Q,{item:e,onCancel:H,onSave:P},e.id):t.jsxs(r.Item,{$done:e.done,$overdue:i,children:[t.jsxs(r.ItemLeft,{children:[t.jsx(r.Checkbox,{type:"checkbox",checked:e.done,onChange:()=>z(e.id),"aria-label":`Mark ${e.title} ${e.done?"not done":"done"}`}),t.jsxs("div",{children:[t.jsx(r.ItemTitle,{$done:e.done,children:e.title}),t.jsxs(r.ItemMeta,{children:[e.category?t.jsxs(r.Tag,{children:["#",e.category]}):t.jsx(r.Tag,{tone:"muted",children:"No category"}),t.jsx("span",{children:"•"}),t.jsx("span",{title:e.due?e.due:"No due date",children:e.due?`Due ${J(e.due)}`:"No due"}),e.due&&!e.done&&t.jsx(r.DueHint,{$overdue:i,children:o===0?"Today":o<0?`${Math.abs(o)}d overdue`:`${o}d left`})]})]})]}),t.jsxs(r.ItemRight,{children:[t.jsx(r.IconButton,{onClick:()=>F(e.id),"aria-label":"Edit",children:"✏️"}),t.jsx(r.IconButton,{onClick:()=>$({title:"Delete task?",message:`Delete “${e.title}” permanently?`,confirmText:"Delete",tone:"danger",onConfirm:()=>N(e.id)}),"aria-label":"Delete",children:"🗑️"})]})]},e.id)})]}),t.jsx(r.FooterNote,{children:"Data stays in your browser (localStorage). Refresh-safe."}),d&&t.jsx(r.ModalOverlay,{onClick:()=>m(null),children:t.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:e=>e.stopPropagation(),children:[t.jsx(r.ModalTitle,{id:"confirm-title",children:d.title}),d.message?t.jsx(r.ModalMessage,{children:d.message}):null,t.jsxs(r.ModalActions,{children:[t.jsx(r.Button,{type:"button",onClick:()=>m(null),children:d.cancelText||"Cancel"}),d.tone==="danger"?t.jsx(r.DangerButton,{type:"button",onClick:D,autoFocus:!0,children:d.confirmText||"Confirm"}):t.jsx(r.PrimaryButton,{type:"button",onClick:D,autoFocus:!0,children:d.confirmText||"Confirm"})]})]})})]})})}function Q({item:a,onCancel:l,onSave:c}){const[x,v]=s.useState(a.title),[h,j]=s.useState(a.category||""),[f,g]=s.useState(a.due||"");return t.jsxs(r.Item,{as:"form",onSubmit:p=>{p.preventDefault(),x.trim()&&c(a.id,{title:x.trim(),category:h.trim(),due:f})},children:[t.jsxs(r.ItemLeft,{style:{alignItems:"center"},children:[t.jsx(r.Input,{value:x,onChange:p=>v(p.target.value),"aria-label":"Edit title",placeholder:"Title *",required:!0}),t.jsx(r.Input,{value:h,onChange:p=>j(p.target.value),"aria-label":"Edit category",placeholder:"Category",style:{maxWidth:180}}),t.jsx(r.Input,{type:"date",value:f,onChange:p=>g(p.target.value),"aria-label":"Edit due date",style:{maxWidth:160}})]}),t.jsxs(r.ItemRight,{children:[t.jsx(r.PrimaryButton,{type:"submit",children:"Save"}),t.jsx(r.Button,{type:"button",onClick:l,children:"Cancel"})]})]})}export{_ as default};
