import{d as n,l as pe,r as o,j as e}from"./index-CNowL1fO.js";const u="1px solid hsl(0 0% 100% / 0.14)",_="1px solid hsl(0 0% 100% / 0.10)",v="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:n.div`
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
        flex-wrap: wrap;
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
        flex-wrap: wrap;
    `,Tag:n.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${_};
        color: inherit;
        ${({tone:s})=>s==="muted"&&pe`
                opacity: 0.7;
            `}
    `,DueHint:n.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${_};
    `,Card:n.div`
        border-radius: 16px;
        padding: 16px;
        border: ${u};
        background: transparent;
    `,FormRow:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,FilterBar:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin: 16px 0 10px;
        > * {
            min-width: 0;
        }
    `,RowWrap:n.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,ButtonRow:n.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Label:n.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 220px;
    `,LabelText:n.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:n.input`
        background: transparent;
        color: inherit;
        border: ${u};
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
            box-shadow: ${v};
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
        &[type="date"] {
            padding-right: 40px;
            color-scheme: dark;
        }
        &[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1) brightness(1.2);
            opacity: 0.9;
            cursor: pointer;
        }
    `,Select:n.select`
        background: transparent;
        color: inherit;
        border: ${u};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${v};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:n.textarea`
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
            box-shadow: ${v};
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
            box-shadow: ${v};
        }
    `,Button:n.button`
        border: ${u};
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
            box-shadow: ${v};
        }
    `,DangerButton:n.button`
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
            box-shadow: ${v};
        }
    `,List:n.div`
        display: grid;
        gap: 10px;
    `,SectionTitle:n.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,SectionBar:n.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin: 14px 0 6px;
    `,Empty:n.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${u};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:n.div`
        display: grid;
        grid-template-columns: ${({$edit:s})=>s?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${u};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ItemLeft:n.div`
        display: flex;
        gap: 12px;
        flex: 1;
    `,ItemRight:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:n.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
    `,ItemMeta:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,ProgressWrap:n.div`
        display: grid;
        gap: 6px;
        margin-top: 8px;
    `,ProgressTrack:n.div`
        height: 10px;
        border-radius: 999px;
        border: ${u};
        overflow: hidden;
        background: transparent;
    `,ProgressFill:n.div`
        height: 100%;
        width: ${({$pct:s})=>Math.max(0,Math.min(100,Number(s)||0))}%;
        background: linear-gradient(
            90deg,
            hsl(140 70% 45% / 0.9),
            hsl(200 70% 50% / 0.9)
        );
        transition: width 120ms ease;
    `,ProgressText:n.div`
        font-size: 12px;
        opacity: 0.85;
    `,Fieldset:n.fieldset`
        border: ${u};
        border-radius: 12px;
        padding: 12px;
        margin: 2px 0 0;
        background: transparent;
    `,Legend:n.legend`
        padding: 0 6px;
        opacity: 0.9;
        font-weight: 600;
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
    `},V="goalSetter.v1",q=["Planned","In Progress","Done"],X=()=>{var s;return((s=crypto==null?void 0:crypto.randomUUID)==null?void 0:s.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`},N=()=>{const s=new Date,x=s.getFullYear(),h=String(s.getMonth()+1).padStart(2,"0"),g=String(s.getDate()).padStart(2,"0");return`${x}-${h}-${g}`},ee=s=>s?new Date(`${s}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"";function he(){const[s,x]=o.useState(()=>{try{return JSON.parse(localStorage.getItem(V))??[]}catch{return[]}}),h=String(new Date().getFullYear()),[g,A]=o.useState(""),[w,k]=o.useState(h),[S,L]=o.useState(""),[b,M]=o.useState("Planned"),[C,P]=o.useState(0),[T,I]=o.useState(""),[D,B]=o.useState(""),[f,d]=o.useState(""),[p,F]=o.useState(h),[$,R]=o.useState("All"),[E,Y]=o.useState("All"),[m,U]=o.useState("created"),[te,z]=o.useState(null),[c,y]=o.useState(null),G=()=>{const t=c==null?void 0:c.onConfirm;y(null),typeof t=="function"&&t()};o.useEffect(()=>{if(!c)return;const t=a=>{a.key==="Escape"&&y(null),a.key==="Enter"&&G()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[c]),o.useEffect(()=>{localStorage.setItem(V,JSON.stringify(s))},[s]);const K=o.useMemo(()=>{const t=new Set(s.map(a=>a.year).filter(Boolean));return t.add(h),Array.from(t).sort()},[s,h]),W=o.useMemo(()=>Array.from(new Set(s.map(t=>t.category).filter(Boolean))).sort(),[s]),H=o.useMemo(()=>{const t=s.filter(l=>p==="All"||l.year===p).length,a=s.filter(l=>(p==="All"||l.year===p)&&l.status==="Done").length,i=t-a;return{total:t,done:a,active:i}},[s,p]),re=o.useMemo(()=>{const t=s.filter(i=>p==="All"||i.year===p);if(!t.length)return 0;const a=t.reduce((i,l)=>i+(Number(l.progress)||0),0);return Math.round(100*a/(t.length*100))},[s,p]),O=o.useMemo(()=>{let t=s;if(p!=="All"&&(t=t.filter(a=>a.year===p)),$!=="All"&&(t=t.filter(a=>a.status===$)),E!=="All"&&(t=t.filter(a=>a.category===E)),f.trim()){const a=f.toLowerCase();t=t.filter(i=>(i.title||"").toLowerCase().includes(a)||(i.category||"").toLowerCase().includes(a)||(i.notes||"").toLowerCase().includes(a))}if(m==="title")t=[...t].sort((a,i)=>a.title.localeCompare(i.title));else if(m==="progress")t=[...t].sort((a,i)=>(Number(i.progress)||0)-(Number(a.progress)||0));else if(m==="due")t=[...t].sort((a,i)=>new Date(a.due||864e13)-new Date(i.due||864e13));else if(m==="status"){const a={Planned:0,"In Progress":1,Done:2};t=[...t].sort((i,l)=>a[i.status]-a[l.status]||i.title.localeCompare(l.title))}else m==="year"?t=[...t].sort((a,i)=>Number(a.year)-Number(i.year)||a.title.localeCompare(i.title)):t=[...t].sort((a,i)=>i.createdAt-a.createdAt);return t},[s,p,$,E,f,m]),J=()=>{F("All"),R("All"),Y("All"),d(""),U("created")},ae=t=>{var j;(j=t.preventDefault)==null||j.call(t);const a=g.trim();if(!a)return;const i=Math.max(0,Math.min(100,Number(C)||0)),l={id:X(),title:a,year:(w||h).trim(),category:S.trim(),status:b,progress:i,due:T.trim(),notes:D.trim(),createdAt:Date.now(),updatedAt:Date.now(),completedAt:b==="Done"||i===100?N():""};x(ce=>[l,...ce]),F(l.year),R("All"),Y("All"),d(""),A(""),k(h),L(""),M("Planned"),P(0),I(""),B("")},ne=t=>z(t),se=()=>z(null),ie=(t,a)=>{x(i=>i.map(l=>l.id===t?{...l,...a,progress:Math.max(0,Math.min(100,Number(a.progress??l.progress)||0)),completedAt:(a.status??l.status)==="Done"||(Number(a.progress??l.progress)||0)===100?l.completedAt||N():"",updatedAt:Date.now()}:l)),z(null)},le=t=>{y({title:"Delete goal?",message:"This will remove it from your list.",tone:"danger",confirmText:"Delete",onConfirm:()=>x(a=>a.filter(i=>i.id!==t))})},oe=()=>{s.length&&y({title:"Clear all goals?",message:"This will delete every goal from your list.",tone:"danger",confirmText:"Clear All",onConfirm:()=>{x([]),J()}})},de=t=>{const a=s.find(l=>l.id===t);if(!a)return;const i={...a,id:X(),title:`${a.title} (copy)`,status:"Planned",progress:0,createdAt:Date.now(),updatedAt:Date.now(),completedAt:""};x(l=>[i,...l])},Q=(t,a)=>{x(i=>i.map(l=>l.id===t?{...l,status:a,progress:a==="Done"?100:l.progress,completedAt:a==="Done"?N():"",updatedAt:Date.now()}:l))},Z=(t,a)=>{x(i=>i.map(l=>{if(l.id!==t)return l;const j=Math.max(0,Math.min(100,(Number(l.progress)||0)+a));return{...l,progress:j,status:j>=100?"Done":l.status,completedAt:j>=100?N():l.completedAt,updatedAt:Date.now()}}))};return e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsxs(r.Header,{children:[e.jsxs("div",{children:[e.jsx(r.Title,{children:"Personal Goal Setter"}),e.jsx(r.Sub,{children:"Set and track progress towards your yearly goals - LocalStorage."})]}),e.jsxs(r.BadgeRow,{children:[e.jsxs(r.Tag,{children:["Total: ",H.total]}),e.jsxs(r.Tag,{children:["Active: ",H.active]}),e.jsxs(r.Tag,{children:["Done: ",H.done]}),e.jsxs(r.Tag,{children:["Avg: ",re,"%"]})]})]}),e.jsxs(r.Card,{as:"form",onSubmit:ae,children:[e.jsxs(r.FormRow,{children:[e.jsxs(r.Label,{title:"Enter a short title for the goal",children:[e.jsx(r.LabelText,{children:"Title *"}),e.jsx(r.Input,{placeholder:"e.g., Run a half-marathon",value:g,onChange:t=>A(t.target.value),"aria-label":"Goal title",required:!0})]}),e.jsxs(r.Label,{title:"Target year for this goal",children:[e.jsx(r.LabelText,{children:"Year"}),e.jsx(r.Input,{placeholder:"e.g., 2025",inputMode:"numeric",value:w,onChange:t=>k(t.target.value),list:"year-suggestions","aria-label":"Year"}),e.jsx("datalist",{id:"year-suggestions",children:K.map(t=>e.jsx("option",{value:t},t))})]}),e.jsxs(r.Label,{title:"Category tag for grouping",children:[e.jsx(r.LabelText,{children:"Category"}),e.jsx(r.Input,{placeholder:"e.g., Health",value:S,onChange:t=>L(t.target.value),list:"cat-suggestions","aria-label":"Category"}),e.jsx("datalist",{id:"cat-suggestions",children:W.map(t=>e.jsx("option",{value:t},t))})]}),e.jsxs(r.Label,{title:"Optional due date",children:[e.jsx(r.LabelText,{children:"Due Date"}),e.jsx(r.Input,{type:"date",value:T,onChange:t=>I(t.target.value),"aria-label":"Due date"})]}),e.jsxs(r.Label,{title:"Current status of this goal",children:[e.jsx(r.LabelText,{children:"Status"}),e.jsx(r.Select,{value:b,onChange:t=>M(t.target.value),"aria-label":"Status",children:q.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(r.Label,{title:"Progress percentage (0–100)",children:[e.jsx(r.LabelText,{children:"Progress %"}),e.jsx(r.Input,{type:"number",inputMode:"numeric",placeholder:"0–100",value:C,onChange:t=>P(t.target.value),"aria-label":"Progress percent"})]}),e.jsx(r.PrimaryButton,{type:"submit",disabled:!g.trim(),children:"Add"})]}),e.jsxs(r.Label,{style:{width:"100%",marginTop:8},title:"Optional notes for this goal",children:[e.jsx(r.LabelText,{children:"Notes"}),e.jsx(r.TextArea,{placeholder:"Any details, sub-steps, or references…",value:D,onChange:t=>B(t.target.value),"aria-label":"Notes"})]}),!g.trim()&&e.jsx(r.Helper,{children:"Tip: Title is required."})]}),e.jsxs(r.FilterBar,{children:[e.jsx(r.Select,{value:p,onChange:t=>F(t.target.value),"aria-label":"Filter by year",title:"Filter by year",style:{flex:"0 1 180px"},children:["All",...K].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(r.Select,{value:$,onChange:t=>R(t.target.value),"aria-label":"Filter by status",title:"Filter by status",style:{flex:"0 1 180px"},children:["All",...q].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs(r.Select,{value:E,onChange:t=>Y(t.target.value),"aria-label":"Filter by category",title:"Filter by category",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"All",children:"All categories"}),W.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs(r.Select,{value:m,onChange:t=>U(t.target.value),"aria-label":"Sort",title:"Sort",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"title",children:"Title A–Z"}),e.jsx("option",{value:"progress",children:"Progress (high → low)"}),e.jsx("option",{value:"due",children:"Due date (early → late)"}),e.jsx("option",{value:"status",children:"By status"}),e.jsx("option",{value:"year",children:"By year"})]}),e.jsx(r.Input,{placeholder:"Search title/category/notes…",value:f,onChange:t=>d(t.target.value),"aria-label":"Search",style:{flex:"2 1 320px"},title:"Keyword search"}),e.jsx(r.Button,{type:"button",onClick:J,title:"Reset filters to default",children:"Reset"})]}),e.jsxs(r.SectionBar,{children:[e.jsx(r.SectionTitle,{children:"List of Goals"}),e.jsx(r.DangerButton,{type:"button",onClick:oe,title:"Delete all goals",children:"Clear All"})]}),e.jsxs(r.List,{children:[O.length===0&&s.length===0&&e.jsx(r.Empty,{children:"No goals yet. Add your first!"}),O.length===0&&s.length>0&&e.jsxs(r.Empty,{children:["No goals match your current filters. Try ",e.jsx("b",{children:"Reset"}),"."]}),O.map(t=>te===t.id?e.jsx(ue,{goal:t,onCancel:se,onSave:ie},t.id):e.jsxs(r.Item,{children:[e.jsx(r.ItemLeft,{children:e.jsxs("div",{children:[e.jsx(r.ItemTitle,{children:t.title}),e.jsxs(r.ItemMeta,{children:[e.jsxs(r.Tag,{children:["#",t.year]}),e.jsx("span",{children:"•"}),t.category?e.jsxs(r.Tag,{children:["#",t.category]}):e.jsx(r.Tag,{tone:"muted",children:"No category"}),e.jsx("span",{children:"•"}),e.jsxs(r.Tag,{children:["#",t.status]}),t.due?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(r.DueHint,{children:["Due ",ee(t.due)]})]}):null,t.completedAt&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(r.DueHint,{children:["Done ",ee(t.completedAt)]})]})]}),e.jsxs(r.ProgressWrap,{children:[e.jsx(r.ProgressTrack,{"aria-hidden":"true",children:e.jsx(r.ProgressFill,{$pct:t.progress})}),e.jsxs(r.ProgressText,{children:["Progress: ",t.progress,"%"]})]})]})}),e.jsxs(r.ItemRight,{children:[e.jsx(r.Button,{onClick:()=>Z(t.id,-10),title:"-10%",children:"−10%"}),e.jsx(r.Button,{onClick:()=>Z(t.id,10),title:"+10%",children:"+10%"}),t.status!=="Done"?e.jsx(r.Button,{onClick:()=>Q(t.id,"Done"),title:"Mark as Done",children:"✅ Done"}):e.jsx(r.Button,{onClick:()=>Q(t.id,"In Progress"),title:"Mark In Progress",children:"🔁 In Progress"}),e.jsx(r.IconButton,{title:"Duplicate",onClick:()=>de(t.id),children:"📄"}),e.jsx(r.IconButton,{title:"Edit",onClick:()=>ne(t.id),children:"✏️"}),e.jsx(r.IconButton,{title:"Delete",onClick:()=>le(t.id),children:"🗑️"})]})]},t.id))]}),e.jsx(r.FooterNote,{children:"Data stays in your browser (LocalStorage). Refresh-safe."}),c&&e.jsx(r.ModalOverlay,{onClick:()=>y(null),children:e.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(r.ModalTitle,{id:"confirm-title",children:c.title}),c.message?e.jsx(r.ModalMessage,{children:c.message}):null,e.jsxs(r.ModalActions,{children:[!c.hideCancel&&e.jsx(r.Button,{type:"button",onClick:()=>y(null),children:c.cancelText||"Cancel"}),c.tone==="danger"?e.jsx(r.DangerButton,{type:"button",onClick:G,autoFocus:!0,children:c.confirmText||"Confirm"}):e.jsx(r.PrimaryButton,{type:"button",onClick:G,autoFocus:!0,children:c.confirmText||"Confirm"})]})]})})]})})}function ue({goal:s,onCancel:x,onSave:h}){const[g,A]=o.useState(s.title),[w,k]=o.useState(s.year),[S,L]=o.useState(s.category||""),[b,M]=o.useState(s.status),[C,P]=o.useState(s.progress||0),[T,I]=o.useState(s.due||""),[D,B]=o.useState(s.notes||""),f=d=>Math.max(0,Math.min(100,Number(d)||0));return e.jsx(r.Item,{as:"form",$edit:!0,onSubmit:d=>{d.preventDefault(),g.trim()&&h(s.id,{title:g.trim(),year:String(w).trim(),category:S.trim(),status:b,progress:f(C),due:T,notes:D.trim()})},children:e.jsxs(r.ItemLeft,{style:{flexDirection:"column",gap:12},children:[e.jsxs(r.FormRow,{children:[e.jsxs(r.Label,{title:"Edit goal title",children:[e.jsx(r.LabelText,{children:"Title *"}),e.jsx(r.Input,{value:g,onChange:d=>A(d.target.value),placeholder:"Title",required:!0,"aria-label":"Title"})]}),e.jsxs(r.Label,{title:"Edit year",children:[e.jsx(r.LabelText,{children:"Year"}),e.jsx(r.Input,{value:w,onChange:d=>k(d.target.value),placeholder:"Year",inputMode:"numeric","aria-label":"Year"})]}),e.jsxs(r.Label,{title:"Edit category",children:[e.jsx(r.LabelText,{children:"Category"}),e.jsx(r.Input,{value:S,onChange:d=>L(d.target.value),placeholder:"Category","aria-label":"Category"})]}),e.jsxs(r.Label,{title:"Edit due date",children:[e.jsx(r.LabelText,{children:"Due Date"}),e.jsx(r.Input,{type:"date",value:T,onChange:d=>I(d.target.value),"aria-label":"Due date"})]}),e.jsxs(r.Label,{title:"Edit status",children:[e.jsx(r.LabelText,{children:"Status"}),e.jsx(r.Select,{value:b,onChange:d=>M(d.target.value),"aria-label":"Status",children:q.map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs(r.Label,{title:"Edit progress percent",children:[e.jsx(r.LabelText,{children:"Progress %"}),e.jsx(r.Input,{type:"number",inputMode:"numeric",value:C,onChange:d=>P(d.target.value),placeholder:"0–100","aria-label":"Progress percent"})]})]}),e.jsxs(r.Label,{style:{width:"100%"},title:"Edit notes",children:[e.jsx(r.LabelText,{children:"Notes"}),e.jsx(r.TextArea,{placeholder:"Notes",value:D,onChange:d=>B(d.target.value),"aria-label":"Notes"})]}),e.jsxs(r.ButtonRow,{children:[e.jsx(r.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(r.Button,{type:"button",onClick:x,children:"Cancel"})]})]})})}export{he as default};
