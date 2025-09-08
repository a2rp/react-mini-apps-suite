import{d as s,l as H,m as Ce,r as h,j as e,R as Te}from"./index-Ch0RXzdY.js";const y="1px solid hsl(0 0% 100% / 0.14)",X="1px solid hsl(0 0% 100% / 0.10)",B="0 0 0 3px hsl(0 0% 100% / 0.15)",ke=Ce`
  from { box-shadow: 0 0 0 0 hsl(200 80% 60% / 0.0); }
  to   { box-shadow: 0 0 0 4px hsl(200 80% 60% / 0.35); }
`,n={Page:s.div`
        min-height: 100dvh;
    `,Container:s.div`
        max-width: 1280px;
        margin: 0 auto;
        padding: 32px 18px 72px;
    `,Header:s.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,Title:s.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:s.p`
        margin: 0;
        color: inherit;
        opacity: 0.8;
        font-size: 14px;
    `,BulletList:s.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.85;
        line-height: 1.6;
    `,BulletItem:s.li`
        margin: 2px 0;
    `,BadgeRow:s.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:s.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${X};
        color: inherit;
        ${({tone:d})=>d==="muted"&&H`
                opacity: 0.7;
            `}
    `,Card:s.div`
        border-radius: 16px;
        padding: 16px;
        border: ${y};
        background: transparent;
    `,FormRow:s.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:s.div`
        /* border: 1px solid #f00; */
        height: 90px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,ButtonRow:s.div`
        /* border: 1px solid #f00; */
        width: 100%;
        height: 75px;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Label:s.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 220px;
    `,LabelText:s.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:s.input`
        background: transparent;
        color: inherit;
        border: ${y};
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
            box-shadow: ${B};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Textarea:s.textarea`
        background: transparent;
        color: inherit;
        border: ${y};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-height: 80px;
        resize: vertical;
        width: 100%;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${B};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Select:s.select`
        background: transparent;
        color: inherit;
        border: ${y};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${B};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,DateInput:s.input.attrs({type:"date"})`
        background: transparent;
        color: inherit;
        border: ${y};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${B};
            border-color: hsl(0 0% 100% / 0.35);
        }
        &::-webkit-calendar-picker-indicator {
            filter: invert(1) opacity(0.85);
        }
    `,PrimaryButton:s.button`
        border: ${y};
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
            box-shadow: ${B};
        }
    `,Button:s.button`
        border: ${y};
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
            box-shadow: ${B};
        }
    `,DangerButton:s.button`
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
    `,BoardGrid:s.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        align-items: start;
        margin-top: 12px;
        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
    `,Column:s.div`
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 10px;
        border: ${y};
        border-radius: 14px;
        padding: 10px;
        background: transparent;
        min-height: 380px;
        position: relative;
    `,ColumnHeader:s.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    `,ColumnTitle:s.h3`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,ColumnMeta:s.div`
        display: flex;
        gap: 6px;
        align-items: center;
        opacity: 0.85;
        font-size: 12px;
        flex-wrap: wrap;
    `,TaskList:s.div`
        display: grid;
        gap: 10px;
        align-content: start;
        min-height: 280px;
    `,TaskCard:s.div`
        border: 1px solid hsl(0 0% 100% / 0.18);
        border-radius: 12px;
        padding: 10px;
        background: linear-gradient(180deg, hsl(0 0% 100% / 0.06), transparent);
        display: grid;
        gap: 8px;
        user-select: none;
        ${({$dragging:d})=>d&&H`
                opacity: 0.6;
                outline: 2px dashed hsl(200 80% 60% / 0.6);
            `}
        ${({$flash:d})=>d&&H`
                animation: ${ke} 420ms ease-out 0s 1 alternate;
            `}
    `,TaskTitle:s.div`
        font-weight: 700;
        line-height: 1.3;
    `,TaskDesc:s.div`
        opacity: 0.9;
        font-size: 13px;
    `,TaskMeta:s.div`
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
        font-size: 12px;
        opacity: 0.9;
    `,Chip:s.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        border: ${X};
        padding: 4px 8px;
        border-radius: 999px;
        white-space: nowrap;
    `,LabelDot:s.span`
        width: 10px;
        height: 10px;
        border-radius: 999px;
        display: inline-block;
        background: ${({$c:d})=>d||"hsl(200 80% 60%)"};
        border: 1px solid hsl(0 0% 100% / 0.65);
    `,DropIndicator:s.div`
        height: 8px;
        border-radius: 6px;
        background: hsl(200 80% 60% / 0.5);
        outline: 2px solid hsl(200 80% 60% / 0.4);
    `,FooterNote:s.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:s.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:s.div`
        width: min(92vw, 560px);
        border-radius: 16px;
        padding: 16px;
        border: ${y};
        background: transparent;
    `,ModalTitle:s.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:s.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:s.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `,Toast:s.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${y};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
    `},te="kanbanBoard.v1",De=()=>{try{return JSON.parse(localStorage.getItem(te))??null}catch{return null}},Se=d=>{try{localStorage.setItem(te,JSON.stringify(d))}catch{}},Le=()=>{var d;return((d=crypto==null?void 0:crypto.randomUUID)==null?void 0:d.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`},I=["Low","Medium","High"],V=["#60a5fa","#a78bfa","#34d399","#fbbf24","#f87171","#f472b6","#f59e0b"],Y={columns:["todo","doing","done"],columnMeta:{todo:{id:"todo",title:"To Do"},doing:{id:"doing",title:"Doing"},done:{id:"done",title:"Done"}},lists:{todo:[],doing:[],done:[]},tasks:{}};function Z(d){const l=JSON.parse(JSON.stringify(Y));return!d||typeof d!="object"?l:{columns:Array.isArray(d.columns)&&d.columns.length?d.columns:l.columns,columnMeta:{...l.columnMeta,...d.columnMeta||{}},lists:{...l.lists,...d.lists||{}},tasks:{...d.tasks||{}}}}const G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Be=d=>{if(!d)return"";if(typeof d=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(d)){const[g,v,R]=d.split("-").map(Number),C=new Date(Date.UTC(g,v-1,R));return`${G[C.getUTCMonth()]} ${String(C.getUTCDate()).padStart(2,"0")}, ${C.getUTCFullYear()}`}const l=new Date(d);return isNaN(l)?"":`${G[l.getMonth()]} ${String(l.getDate()).padStart(2,"0")}, ${l.getFullYear()}`},Me=d=>{if(!d)return"";const l=new Date(d);if(isNaN(l))return"";const g=`${G[l.getMonth()]} ${String(l.getDate()).padStart(2,"0")}, ${l.getFullYear()}`,v=l.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});return`${g}, ${v}`},ee=d=>{if(!d)return!1;const l=new Date;l.setHours(0,0,0,0);const g=new Date(d);return g.setHours(0,0,0,0),g<l};function Oe(){const d=De(),[l,g]=h.useState(Z(d)||Y),[v,R]=h.useState(""),[C,ne]=h.useState("All"),[A,re]=h.useState("manual"),[b,S]=h.useState(null),[K,W]=h.useState(""),N=h.useRef(null),j=t=>{W(t),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>W(""),1200)};h.useEffect(()=>{Se(l)},[l]);const[p,T]=h.useState({title:"",desc:"",priority:"Medium",due:"",labels:"",column:"todo"}),_=()=>T({title:"",desc:"",priority:"Medium",due:"",labels:"",column:"todo"}),F=h.useMemo(()=>{const t={};for(const o of l.columns)t[o]=l.lists[o].length;return t},[l]),ie=()=>{const t=p.title.trim();if(!t)return;const o=Le(),r=Date.now(),i=p.labels.split(",").map(c=>c.trim()).filter(Boolean).slice(0,6),a={id:o,title:t,desc:p.desc.trim(),priority:I.includes(p.priority)?p.priority:"Medium",due:p.due||"",labels:i,createdAt:r,updatedAt:r,flash:!1};g(c=>{const f=structuredClone(c);return f.tasks[o]=a,f.lists[p.column]=[...f.lists[p.column],o],f}),j("Task added"),_()},oe=(t,o)=>{g(r=>{const i=structuredClone(r);return i.tasks[t]?(i.tasks[t]={...i.tasks[t],...o,updatedAt:Date.now()},i):r})},se=t=>{const o=E(t);o&&g(r=>{const i=structuredClone(r);return delete i.tasks[t],i.lists[o]=i.lists[o].filter(a=>a!==t),i})},E=t=>{for(const o of l.columns)if(l.lists[o].includes(t))return o;return null},M=(t,o,r,i=null)=>{g(a=>{const c=structuredClone(a),f=c.lists[o]||[],D=c.lists[r]||[];let $=f.indexOf(t);return $===-1?a:(f.splice($,1),(i==null||i>D.length)&&(i=D.length),i<0&&(i=0),o===r&&$<i&&(i-=1),D.splice(i,0,t),c.lists[o]=f,c.lists[r]=D,c.tasks[t]&&(c.tasks[t].updatedAt=Date.now()),c)})},le=t=>{g(o=>{const r=structuredClone(o);for(const i of r.lists[t])delete r.tasks[i];return r.lists[t]=[],r})},ae=()=>g(structuredClone(Y)),[m,q]=h.useState({id:null,from:null}),[k,z]=h.useState({col:null,targetId:null,pos:null}),de=(t,o)=>{const r=E(o);if(r){q({id:o,from:r}),t.dataTransfer.effectAllowed="move";try{t.dataTransfer.setData("text/plain",o)}catch{}}},P=()=>{q({id:null,from:null}),z({col:null,targetId:null,pos:null})},ce=(t,o)=>{t.preventDefault(),z(r=>r.col===o&&r.targetId?r:{col:o,targetId:null,pos:null})},ue=(t,o)=>{t.preventDefault(),!(!m.id||!m.from)&&(M(m.id,m.from,o,null),P())},pe=(t,o,r)=>{if(t.preventDefault(),!m.id||m.id===r)return;const i=t.currentTarget.getBoundingClientRect(),a=i.top+i.height/2,c=t.clientY<a?"before":"after";z({col:o,targetId:r,pos:c})},xe=(t,o,r)=>{if(t.preventDefault(),t.stopPropagation(),!m.id||!m.from)return;let a=l.lists[o].indexOf(r);a===-1?M(m.id,m.from,o,null):(k.pos==="after"&&(a+=1),M(m.id,m.from,o,a)),P()},he=t=>{let r=l.lists[t].slice().map(i=>l.tasks[i]).filter(Boolean);if(v.trim()){const i=v.toLowerCase();r=r.filter(a=>a.title.toLowerCase().includes(i)||(a.desc||"").toLowerCase().includes(i)||(a.labels||[]).join(",").toLowerCase().includes(i))}if(C!=="All"&&(r=r.filter(i=>i.priority===C)),A==="updated")r.sort((i,a)=>a.updatedAt-i.updatedAt);else if(A==="due")r.sort((i,a)=>{const c=i.due?new Date(i.due).getTime():1/0,f=a.due?new Date(a.due).getTime():1/0;return c-f});else if(A==="priority"){const i={High:0,Medium:1,Low:2};r.sort((a,c)=>(i[a.priority]??9)-(i[c.priority]??9))}else r=l.lists[t].map(i=>l.tasks[i]).filter(Boolean).filter(i=>r.includes(i));return r.map(i=>i.id)},ge=()=>{const t=new Blob([JSON.stringify(l,null,2)],{type:"application/json"}),o=URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=`kanban-board-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(o),j("Exported JSON")},Q=h.useRef(null),me=()=>{var t;return(t=Q.current)==null?void 0:t.click()},fe=t=>{var i;const o=(i=t.target.files)==null?void 0:i[0];if(!o)return;const r=new FileReader;r.onload=()=>{try{const a=JSON.parse(r.result);g(Z(a)),j("Imported board")}catch{j("Invalid JSON")}},r.readAsText(o),t.target.value=""},J=t=>S({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"danger",hideCancel:!1,...t}),[be,U]=h.useState(null),[x,w]=h.useState(null),je=t=>{U(t.id),w({title:t.title,desc:t.desc||"",priority:t.priority||"Medium",due:t.due||"",labels:(t.labels||[]).join(", ")})},ye=()=>{U(null),w(null)},we=t=>{const o={title:x.title.trim()||"(Untitled)",desc:x.desc.trim(),priority:I.includes(x.priority)?x.priority:"Medium",due:x.due||"",labels:(x.labels||"").split(",").map(r=>r.trim()).filter(Boolean).slice(0,6)};oe(t,o),U(null),w(null),j("Task updated")};return e.jsx(n.Page,{children:e.jsxs(n.Container,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx(n.Title,{children:"Kanban Board"}),e.jsx("div",{style:{height:8}}),e.jsxs(n.Sub,{children:["Personal Trello-like board with ",e.jsx("b",{children:"To Do"}),", ",e.jsx("b",{children:"Doing"}),", ",e.jsx("b",{children:"Done"}),". Drag cards to move, reorder within a list, search & sort, edit inline, and export/import as JSON. Data stays in your browser (LocalStorage)."]}),e.jsx("div",{style:{height:6}}),e.jsxs(n.BulletList,{"aria-label":"How to use",children:[e.jsx(n.BulletItem,{children:"Use the form to add tasks; drag to move across columns."}),e.jsx(n.BulletItem,{children:"Sort view by Updated, Due, or Priority — or keep Manual order."}),e.jsx(n.BulletItem,{children:"Edit any card inline; delete with confirmation."}),e.jsx(n.BulletItem,{children:"Export/Import your entire board as JSON."})]})]}),e.jsxs(n.BadgeRow,{children:[e.jsxs(n.Tag,{children:["Total: ",Object.keys(l.tasks).length]}),e.jsxs(n.Tag,{tone:"muted",children:["To Do: ",F.todo]}),e.jsxs(n.Tag,{tone:"muted",children:["Doing: ",F.doing]}),e.jsxs(n.Tag,{tone:"muted",children:["Done: ",F.done]})]})]}),e.jsx(n.Card,{children:e.jsxs(n.FormRow,{children:[e.jsxs(n.Label,{title:"Task title",children:[e.jsx(n.LabelText,{children:"Title"}),e.jsx(n.Input,{placeholder:"Build Kanban board…",value:p.title,onChange:t=>T({...p,title:t.target.value})})]}),e.jsxs(n.Label,{title:"Task description",children:[e.jsx(n.LabelText,{children:"Description"}),e.jsx(n.Textarea,{placeholder:"Optional details…",value:p.desc,onChange:t=>T({...p,desc:t.target.value})})]}),e.jsxs(n.Label,{title:"Task priority",children:[e.jsx(n.LabelText,{children:"Priority"}),e.jsx(n.Select,{value:p.priority,onChange:t=>T({...p,priority:t.target.value}),children:I.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(n.Label,{title:"Due date",children:[e.jsx(n.LabelText,{children:"Due"}),e.jsx(n.DateInput,{value:p.due,onChange:t=>T({...p,due:t.target.value})})]}),e.jsxs(n.Label,{title:"Comma-separated labels",children:[e.jsx(n.LabelText,{children:"Labels (comma separated)"}),e.jsx(n.Input,{placeholder:"frontend, api, bug…",value:p.labels,onChange:t=>T({...p,labels:t.target.value})})]}),e.jsxs(n.Label,{title:"Target column",children:[e.jsx(n.LabelText,{children:"Add to"}),e.jsx(n.Select,{value:p.column,onChange:t=>T({...p,column:t.target.value}),children:l.columns.map(t=>{var o;return e.jsx("option",{value:t,children:((o=l.columnMeta[t])==null?void 0:o.title)||t},t)})})]}),e.jsxs(n.RowWrap,{children:[e.jsx(n.PrimaryButton,{type:"button",onClick:ie,disabled:!p.title.trim(),children:"Add task"}),e.jsx(n.Button,{type:"button",onClick:_,children:"Reset"})]})]})}),e.jsx("div",{style:{height:10}}),e.jsx(n.Card,{children:e.jsxs(n.FormRow,{children:[e.jsxs(n.Label,{title:"Search title, description, labels",children:[e.jsx(n.LabelText,{children:"Search"}),e.jsx(n.Input,{placeholder:"Filter tasks…",value:v,onChange:t=>R(t.target.value)})]}),e.jsxs(n.Label,{title:"Filter by priority",children:[e.jsx(n.LabelText,{children:"Priority"}),e.jsx(n.Select,{value:C,onChange:t=>ne(t.target.value),children:["All",...I].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(n.Label,{title:"Ordering for view",children:[e.jsx(n.LabelText,{children:"Order"}),e.jsxs(n.Select,{value:A,onChange:t=>re(t.target.value),children:[e.jsx("option",{value:"manual",children:"Manual (drag)"}),e.jsx("option",{value:"updated",children:"Last updated"}),e.jsx("option",{value:"due",children:"Due date"}),e.jsx("option",{value:"priority",children:"Priority"})]})]}),e.jsx(n.RowWrap,{children:e.jsx(n.Button,{type:"button",onClick:()=>R(""),children:"Clear search"})}),e.jsxs(n.ButtonRow,{children:[e.jsx(n.Button,{type:"button",onClick:ge,children:"Export JSON"}),e.jsx(n.Button,{type:"button",onClick:me,children:"Import JSON"}),e.jsx("input",{ref:Q,type:"file",accept:"application/json",onChange:fe,hidden:!0}),e.jsx(n.DangerButton,{type:"button",onClick:()=>J({title:"Clear entire board?",message:"This will delete every task across all columns.",confirmText:"Clear All",onConfirm:()=>{ae(),S(null),j("Cleared board")}}),children:"Clear All"})]})]})}),e.jsx(n.BoardGrid,{children:l.columns.map(t=>{var i;const o=((i=l.columnMeta[t])==null?void 0:i.title)||t,r=he(t);return e.jsxs(n.Column,{onDragOver:a=>ce(a,t),onDrop:a=>ue(a,t),children:[e.jsxs(n.ColumnHeader,{children:[e.jsx(n.ColumnTitle,{children:o}),e.jsxs(n.ColumnMeta,{children:[e.jsxs(n.Chip,{children:[r.length," items"]}),e.jsx(n.Button,{type:"button",onClick:()=>J({title:`Clear "${o}"?`,message:"This will delete all tasks in this column.",confirmText:"Clear Column",onConfirm:()=>{le(t),S(null),j(`Cleared ${o}`)}}),children:"Clear"})]})]}),e.jsxs(n.TaskList,{children:[k.col===t&&k.targetId==null&&e.jsx(n.DropIndicator,{}),r.map(a=>{const c=l.tasks[a],f=m.id===a,D=k.col===t&&k.targetId===a,$=D&&k.pos==="before",ve=D&&k.pos==="after";return e.jsxs(Te.Fragment,{children:[$&&e.jsx(n.DropIndicator,{}),e.jsx(n.TaskCard,{draggable:!0,onDragStart:u=>de(u,a),onDragEnd:P,onDragOver:u=>pe(u,t,a),onDrop:u=>xe(u,t,a),$dragging:f,$flash:c.flash,children:be===a?e.jsxs(e.Fragment,{children:[e.jsx(n.Input,{value:x.title,onChange:u=>w({...x,title:u.target.value}),placeholder:"Title"}),e.jsx(n.Textarea,{value:x.desc,onChange:u=>w({...x,desc:u.target.value}),placeholder:"Description"}),e.jsxs(n.FormRow,{children:[e.jsxs(n.Label,{children:[e.jsx(n.LabelText,{children:"Priority"}),e.jsx(n.Select,{value:x.priority,onChange:u=>w({...x,priority:u.target.value}),children:I.map(u=>e.jsx("option",{value:u,children:u},u))})]}),e.jsxs(n.Label,{children:[e.jsx(n.LabelText,{children:"Due"}),e.jsx(n.DateInput,{value:x.due,onChange:u=>w({...x,due:u.target.value})})]}),e.jsxs(n.Label,{children:[e.jsx(n.LabelText,{children:"Labels"}),e.jsx(n.Input,{value:x.labels,onChange:u=>w({...x,labels:u.target.value}),placeholder:"comma separated"})]})]}),e.jsxs(n.ButtonRow,{children:[e.jsx(n.PrimaryButton,{type:"button",onClick:()=>we(a),children:"Save"}),e.jsx(n.Button,{type:"button",onClick:ye,children:"Cancel"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(n.TaskTitle,{children:c.title}),c.desc?e.jsx(n.TaskDesc,{children:c.desc}):null,e.jsxs(n.TaskMeta,{children:[e.jsx(n.Chip,{title:"Priority",children:c.priority}),c.due&&e.jsxs(n.Chip,{title:"Due date",style:{opacity:ee(c.due)?1:.9},children:[ee(c.due)?"⚠️ ":"",Be(c.due)]}),(c.labels||[]).slice(0,6).map((u,L)=>e.jsxs(n.Chip,{title:`Label: ${u}`,children:[e.jsx(n.LabelDot,{$c:V[L%V.length]}),u]},L)),e.jsx(n.Chip,{title:"Last updated",children:Me(c.updatedAt)})]}),e.jsxs(n.ButtonRow,{children:[e.jsx(n.Button,{type:"button",onClick:()=>je(c),children:"Edit"}),e.jsx(n.Button,{type:"button",onClick:()=>{var O;const u=E(c.id),L=((O=l.lists.doing)==null?void 0:O.length)??0;M(c.id,u,"doing",L),j("Moved to Doing")},children:"Move to Doing"}),e.jsx(n.Button,{type:"button",onClick:()=>{var O;const u=E(c.id),L=((O=l.lists.done)==null?void 0:O.length)??0;M(c.id,u,"done",L),j("Moved to Done")},children:"Move to Done"}),e.jsx(n.DangerButton,{type:"button",onClick:()=>J({title:"Delete this task?",message:"This cannot be undone.",confirmText:"Delete",onConfirm:()=>{se(c.id),S(null),j("Task deleted")}}),children:"Delete"})]})]})}),ve&&e.jsx(n.DropIndicator,{})]},a)})]})]},t)})}),e.jsx(n.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline. Export your board to back it up."}),K&&e.jsx(n.Toast,{role:"status","aria-live":"polite",children:K}),b&&e.jsx(n.ModalOverlay,{onClick:()=>S(null),children:e.jsxs(n.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(n.ModalTitle,{id:"confirm-title",children:b.title}),b.message?e.jsx(n.ModalMessage,{children:b.message}):null,e.jsxs(n.ModalActions,{children:[!b.hideCancel&&e.jsx(n.Button,{type:"button",onClick:()=>S(null),children:b.cancelText||"Cancel"}),b.tone==="danger"?e.jsx(n.DangerButton,{type:"button",onClick:b.onConfirm,autoFocus:!0,children:b.confirmText||"Confirm"}):e.jsx(n.PrimaryButton,{type:"button",onClick:b.onConfirm,autoFocus:!0,children:b.confirmText||"Confirm"})]})]})})]})})}export{Oe as default};
