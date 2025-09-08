import{d as i,l as V,r as o,j as e}from"./index-C6xxe--m.js";const p="1px solid hsl(0 0% 100% / 0.14)",G="1px solid hsl(0 0% 100% / 0.10)",T="0 0 0 3px hsl(0 0% 100% / 0.15)",n={Page:i.div`
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
    `,Tag:i.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${G};
        color: inherit;
        ${({tone:s})=>s==="muted"&&V`
                opacity: 0.7;
            `}
    `,DueHint:i.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${G};
    `,Card:i.div`
        border-radius: 16px;
        padding: 16px;
        border: ${p};
        background: transparent;
    `,FormRow:i.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    `,FilterBar:i.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin: 16px 0 10px;
        > * {
            min-width: 0;
        }
    `,Input:i.input`
        background: transparent;
        color: inherit;
        border: ${p};
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
            box-shadow: ${T};
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
    `,Select:i.select`
        background: transparent;
        color: inherit;
        border: ${p};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        flex: 1 1 220px;
        &:focus-visible {
            box-shadow: ${T};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:i.textarea`
        background: transparent;
        color: inherit;
        border: ${p};
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
            box-shadow: ${T};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:i.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:i.button`
        border: ${p};
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
            box-shadow: ${T};
        }
    `,Button:i.button`
        border: ${p};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${T};
        }
    `,DangerButton:i.button`
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
    `,RowWrap:i.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,List:i.div`
        display: grid;
        gap: 10px;
    `,Empty:i.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${p};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:i.div`
        display: grid;
        grid-template-columns: ${({$edit:s})=>s?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${p};
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
    `,ItemMeta:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.8;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,IconButton:i.button`
        background: transparent;
        border: ${p};
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
        color: inherit;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${T};
        }
    `,Bullets:i.ul`
        margin: 8px 0 0;
        padding: 0 0 0 18px;
        display: grid;
        gap: 6px;
        li {
            line-height: 1.4;
        }
    `,Fieldset:i.fieldset`
        border: ${p};
        border-radius: 12px;
        padding: 12px;
        margin: 2px 0 0;
        background: transparent;
    `,Legend:i.legend`
        padding: 0 6px;
        opacity: 0.9;
        font-weight: 600;
    `,ButtonRow:i.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
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
        border: ${p};
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
    `},Q="workout-planner.v1",K=["Planned","Done"],J=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,y=()=>{const s=new Date,x=s.getFullYear(),h=String(s.getMonth()+1).padStart(2,"0"),m=String(s.getDate()).padStart(2,"0");return`${x}-${h}-${m}`},Z=s=>s?new Date(`${s}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"";function te(){const[s,x]=o.useState(()=>{try{return JSON.parse(localStorage.getItem(Q))??[]}catch{return[]}}),[h,m]=o.useState(""),[F,A]=o.useState(y()),[P,I]=o.useState(""),[$,j]=o.useState("Planned"),[R,B]=o.useState(""),[b,L]=o.useState(""),[v,S]=o.useState("All"),[f,N]=o.useState("All"),[g,z]=o.useState("created"),[W,C]=o.useState(null),[c,u]=o.useState(null),O=t=>u({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",hideCancel:!1,...t}),w=()=>{const t=c==null?void 0:c.onConfirm;u(null),typeof t=="function"&&t()};o.useEffect(()=>{if(!c)return;const t=a=>{a.key==="Escape"&&u(null),a.key==="Enter"&&w()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[c]),o.useEffect(()=>{localStorage.setItem(Q,JSON.stringify(s))},[s]);const E=o.useMemo(()=>Array.from(new Set(s.map(t=>t.category).filter(Boolean))).sort(),[s]),M=o.useMemo(()=>({planned:s.filter(t=>t.status==="Planned").length,done:s.filter(t=>t.status==="Done").length,total:s.length}),[s]),q=o.useMemo(()=>{let t=s;if(v!=="All"&&(t=t.filter(a=>a.status===v)),f!=="All"&&(t=t.filter(a=>a.category===f)),b.trim()){const a=b.toLowerCase();t=t.filter(l=>l.title.toLowerCase().includes(a)||(l.category||"").toLowerCase().includes(a)||(l.exercises||[]).some(d=>(d.name||"").toLowerCase().includes(a)))}if(g==="title")t=[...t].sort((a,l)=>a.title.localeCompare(l.title));else if(g==="date")t=[...t].sort((a,l)=>new Date(a.date||0)-new Date(l.date||0));else if(g==="duration")t=[...t].sort((a,l)=>(Number(l.duration)||0)-(Number(a.duration)||0));else if(g==="status"){const a={Planned:0,Done:1};t=[...t].sort((l,d)=>a[l.status]-a[d.status]||l.title.localeCompare(d.title))}else t=[...t].sort((a,l)=>l.createdAt-a.createdAt);return t},[s,v,f,b,g]),H=t=>{t.preventDefault();const a=h.trim();if(!a)return;const l={id:J(),title:a,date:F||y(),category:P.trim(),status:$,duration:R.trim(),notes:"",exercises:[],createdAt:Date.now(),updatedAt:Date.now(),completedAt:$==="Done"?y():""};x(d=>[l,...d]),m(""),A(y()),I(""),j("Planned"),B(""),u({title:"Saved",message:`Added “${a}”.`,confirmText:"OK",hideCancel:!0})},r=t=>C(t),k=()=>C(null),D=(t,a)=>{x(l=>l.map(d=>d.id===t?{...d,...a,updatedAt:Date.now()}:d)),C(null),u({title:"Saved",message:"Workout updated.",confirmText:"OK",hideCancel:!0})},Y=t=>{O({title:"Delete workout?",message:"This will remove it from your planner.",confirmText:"Delete",tone:"danger",onConfirm:()=>x(a=>a.filter(l=>l.id!==t))})},_=t=>{const a=s.find(d=>d.id===t);if(!a)return;const l={...a,id:J(),title:`${a.title} (copy)`,createdAt:Date.now(),updatedAt:Date.now(),completedAt:"",status:"Planned"};x(d=>[l,...d])},U=(t,a)=>{x(l=>l.map(d=>d.id===t?{...d,status:a,completedAt:a==="Done"?y():"",updatedAt:Date.now()}:d))};return e.jsx(n.Page,{children:e.jsxs(n.Container,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx(n.Title,{children:"Workout Planner"}),e.jsx(n.Sub,{children:"Create and track your daily workout routines — LocalStorage."})]}),e.jsxs(n.BadgeRow,{children:[e.jsxs(n.Tag,{children:["Total: ",M.total]}),e.jsxs(n.Tag,{children:["Planned: ",M.planned]}),e.jsxs(n.Tag,{children:["Done: ",M.done]})]})]}),e.jsxs(n.Card,{as:"form",onSubmit:H,children:[e.jsxs(n.FormRow,{children:[e.jsx(n.Input,{placeholder:"Workout title *",value:h,onChange:t=>m(t.target.value),required:!0,style:{flex:"2 1 320px"}}),e.jsx(n.Input,{type:"date",value:F,onChange:t=>A(t.target.value),"aria-label":"Date",style:{flex:"0 1 170px"}}),e.jsx(n.Input,{placeholder:"Category (e.g., Strength)",value:P,onChange:t=>I(t.target.value),list:"cat-suggestions",style:{flex:"1 1 220px"}}),e.jsx("datalist",{id:"cat-suggestions",children:E.map(t=>e.jsx("option",{value:t},t))}),e.jsx(n.Input,{placeholder:"Duration (min)",inputMode:"numeric",value:R,onChange:t=>B(t.target.value),style:{flex:"0 1 140px"}}),e.jsx(n.Select,{value:$,onChange:t=>j(t.target.value),"aria-label":"Status",style:{flex:"0 1 160px"},children:K.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(n.PrimaryButton,{type:"submit",disabled:!h.trim(),children:"Add"})]}),!h.trim()&&e.jsx(n.Helper,{children:"Tip: Title is required."})]}),e.jsxs(n.FilterBar,{children:[e.jsx(n.Select,{value:v,onChange:t=>S(t.target.value),"aria-label":"Filter by status",title:"Filter by status",style:{flex:"0 1 180px"},children:["All",...K].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs(n.Select,{value:f,onChange:t=>N(t.target.value),"aria-label":"Filter by category",title:"Filter by category",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"All",children:"All categories"}),E.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs(n.Select,{value:g,onChange:t=>z(t.target.value),"aria-label":"Sort",title:"Sort",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"date",children:"Date (old → new)"}),e.jsx("option",{value:"title",children:"Title A–Z"}),e.jsx("option",{value:"duration",children:"Duration (high → low)"}),e.jsx("option",{value:"status",children:"By status"})]}),e.jsx(n.Input,{placeholder:"Search title/category/exercise…",value:b,onChange:t=>L(t.target.value),"aria-label":"Search",style:{flex:"2 1 320px"}})]}),e.jsxs(n.List,{children:[q.length===0&&e.jsx(n.Empty,{children:"No workouts yet. Add your first!"}),q.map(t=>{var a;return W===t.id?e.jsx(X,{workout:t,onCancel:k,onSave:D},t.id):e.jsxs(n.Item,{children:[e.jsx(n.ItemLeft,{children:e.jsxs("div",{children:[e.jsx(n.ItemTitle,{children:t.title}),e.jsxs(n.ItemMeta,{children:[t.date?e.jsxs(e.Fragment,{children:[e.jsx(n.Tag,{children:Z(t.date)}),e.jsx("span",{children:"•"})]}):null,t.category?e.jsxs(n.Tag,{children:["#",t.category]}):e.jsx(n.Tag,{tone:"muted",children:"No category"}),e.jsx("span",{children:"•"}),e.jsxs(n.Tag,{children:["#",t.status]}),t.duration?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.Tag,{children:[t.duration," min"]})]}):null,(a=t.exercises)!=null&&a.length?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.Tag,{children:[t.exercises.length," exercises"]})]}):null,t.completedAt&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.DueHint,{children:["Done ",Z(t.completedAt)]})]})]})]})}),e.jsxs(n.ItemRight,{children:[t.status!=="Done"?e.jsx(n.Button,{onClick:()=>U(t.id,"Done"),title:"Mark as Done",children:"✅ Done"}):e.jsx(n.Button,{onClick:()=>U(t.id,"Planned"),title:"Mark as Planned",children:"🔁 Planned"}),e.jsx(n.IconButton,{title:"Duplicate",onClick:()=>_(t.id),children:"📄"}),e.jsx(n.IconButton,{title:"Edit",onClick:()=>r(t.id),children:"✏️"}),e.jsx(n.IconButton,{title:"Delete",onClick:()=>Y(t.id),children:"🗑️"})]})]},t.id)})]}),e.jsx(n.FooterNote,{children:"Data stays in your browser (LocalStorage). Refresh-safe."}),c&&e.jsx(n.ModalOverlay,{onClick:()=>u(null),children:e.jsxs(n.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(n.ModalTitle,{id:"confirm-title",children:c.title}),c.message?e.jsx(n.ModalMessage,{children:c.message}):null,e.jsxs(n.ModalActions,{children:[!c.hideCancel&&e.jsx(n.Button,{type:"button",onClick:()=>u(null),children:c.cancelText||"Cancel"}),c.tone==="danger"?e.jsx(n.DangerButton,{type:"button",onClick:w,autoFocus:!0,children:c.confirmText||"Confirm"}):e.jsx(n.PrimaryButton,{type:"button",onClick:w,autoFocus:!0,children:c.confirmText||"Confirm"})]})]})})]})})}function X({workout:s,onCancel:x,onSave:h}){var H;const[m,F]=o.useState(s.title),[A,P]=o.useState(s.date||y()),[I,$]=o.useState(s.category||""),[j,R]=o.useState(s.status),[B,b]=o.useState(s.duration||""),[L,v]=o.useState(s.notes||""),[S,f]=o.useState((H=s.exercises)!=null&&H.length?s.exercises:[]),[N,g]=o.useState(""),[z,W]=o.useState(""),[C,c]=o.useState(""),[u,O]=o.useState(""),[w,E]=o.useState(""),M=r=>{var D;(D=r==null?void 0:r.preventDefault)==null||D.call(r);const k=N.trim();k&&(f(Y=>[...Y,{id:J(),name:k,sets:z.trim(),reps:C.trim(),weight:u.trim(),time:w.trim()}]),g(""),W(""),c(""),O(""),E(""))},q=r=>f(k=>k.filter(D=>D.id!==r));return e.jsx(n.Item,{as:"form",$edit:!0,onSubmit:r=>{r.preventDefault(),m.trim()&&h(s.id,{title:m.trim(),date:A,category:I.trim(),status:j,duration:B.trim(),notes:L,exercises:S,completedAt:j==="Done"&&!s.completedAt?y():s.completedAt})},children:e.jsxs(n.ItemLeft,{style:{flexDirection:"column",gap:12},children:[e.jsxs(n.FormRow,{children:[e.jsx(n.Input,{value:m,onChange:r=>F(r.target.value),placeholder:"Title *",required:!0,style:{flex:"2 1 320px"}}),e.jsx(n.Input,{type:"date",value:A,onChange:r=>P(r.target.value),style:{flex:"0 1 170px"}}),e.jsx(n.Input,{value:I,onChange:r=>$(r.target.value),placeholder:"Category",style:{flex:"1 1 220px"}}),e.jsx(n.Input,{value:B,onChange:r=>b(r.target.value),placeholder:"Duration (min)",inputMode:"numeric",style:{flex:"0 1 140px"}}),e.jsx(n.Select,{value:j,onChange:r=>R(r.target.value),style:{flex:"0 1 160px"},children:K.map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs(n.Fieldset,{children:[e.jsx(n.Legend,{children:"Exercises"}),e.jsxs(n.RowWrap,{children:[e.jsx(n.Input,{style:{flex:"2 1 240px"},placeholder:"Exercise name (e.g., Squats)",value:N,onChange:r=>g(r.target.value)}),e.jsx(n.Input,{placeholder:"Sets",inputMode:"numeric",value:z,onChange:r=>W(r.target.value),style:{flex:"0 1 90px"}}),e.jsx(n.Input,{placeholder:"Reps",inputMode:"numeric",value:C,onChange:r=>c(r.target.value),style:{flex:"0 1 90px"}}),e.jsx(n.Input,{placeholder:"Weight (kg)",inputMode:"numeric",value:u,onChange:r=>O(r.target.value),style:{flex:"0 1 120px"}}),e.jsx(n.Input,{placeholder:"Time (min)",inputMode:"numeric",value:w,onChange:r=>E(r.target.value),style:{flex:"0 1 110px"}}),e.jsx(n.PrimaryButton,{type:"button",onClick:M,children:"Add"})]}),S.length===0&&e.jsx(n.Helper,{children:"No exercises yet."}),S.length>0&&e.jsx(n.Bullets,{as:"ul",children:S.map(r=>e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsxs("span",{style:{flex:1},children:[e.jsx("strong",{children:r.name}),r.sets||r.reps?` — ${r.sets||"?"}×${r.reps||"?"}`:"",r.weight?` @ ${r.weight}kg`:"",r.time?` • ${r.time}min`:""]}),e.jsx(n.IconButton,{title:"Remove",onClick:()=>q(r.id),children:"✕"})]},r.id))})]}),e.jsx(n.TextArea,{placeholder:"Notes (optional)…",value:L,onChange:r=>v(r.target.value)}),e.jsxs(n.ButtonRow,{children:[e.jsx(n.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(n.Button,{type:"button",onClick:x,children:"Cancel"})]})]})})}export{te as default};
