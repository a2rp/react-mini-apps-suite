import{d as r,l as V,r as s,j as e}from"./index-kkvqZiud.js";const x="1px solid hsl(0 0% 100% / 0.14)",F="1px solid hsl(0 0% 100% / 0.10)",C="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:r.div`
        min-height: 100dvh;
    `,Container:r.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 56px;
    `,Header:r.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
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
        opacity: 0.75;
        font-size: 14px;
    `,BadgeRow:r.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Badge:r.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${F};
        color: inherit;
    `,Card:r.div`
        border-radius: 16px;
        padding: 16px;
        border: ${x};
        background: transparent;
    `,FormRow:r.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        @media (width < 520px) {
            grid-template-columns: 1fr;
        }
    `,Input:r.input`
        background: transparent;
        color: inherit;
        border: ${x};
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

        /* number & date tweaks for dark UI */
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
    `,Helper:r.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:r.button`
        border: ${x};
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
    `,Button:r.button`
        border: ${x};
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
    `,DangerButton:r.button`
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
    `,Toolbar:r.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin: 16px 0;
        flex-wrap: wrap;
    `,RowWrap:r.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,Select:r.select`
        background: transparent;
        color: inherit;
        border: ${x};
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
        }
    `,List:r.div`
        display: grid;
        gap: 6px 0;
    `,GroupHeader:r.h3`
        margin: 18px 0 8px;
        font-size: 14px;
        font-weight: 700;
        opacity: 0.8;
    `,Empty:r.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${x};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:r.div`
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: start;
        background: transparent;
        border-radius: 16px;
        padding: 12px;
        border: ${x};
    `,ItemLeft:r.div`
        display: flex;
        gap: 12px;
        flex: 1;
    `,ItemRight:r.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Checkbox:r.input`
        width: 20px;
        height: 20px;
        margin-top: 4px;
    `,ItemTitle:r.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
    `,ItemMeta:r.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.8;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,Tag:r.span`
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        border: ${F};
        color: inherit;
        ${({tone:a})=>a==="muted"&&V`
                opacity: 0.7;
            `}
    `,IconButton:r.button`
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
            box-shadow: ${C};
        }
    `,FooterNote:r.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ProgressWrap:r.div`
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: center;
        @media (width < 640px) {
            grid-template-columns: 1fr;
            justify-items: center;
        }
    `,Ring:r.div`
        width: 140px;
        height: 140px;
    `,ProgressInfo:r.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        .big {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -0.02em;
        }
        .small {
            opacity: 0.8;
            font-size: 13px;
        }
    `,QuickRow:r.div`
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
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
        border: ${x};
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
    `},z="water-intake.v1",U="water-intake.goal.v1",_="water-intake.glassml.v1",B=8,E=250,w="glasses",J=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,R=()=>{const a=new Date,p=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,"0"),g=String(a.getDate()).padStart(2,"0");return`${p}-${o}-${g}`},W=a=>new Date(`${a}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),Q=()=>{try{return JSON.parse(localStorage.getItem(z))??[]}catch{return[]}},q=()=>{const a=Number(localStorage.getItem(U));return Number.isFinite(a)&&a>0?a:B},X=()=>{const a=Number(localStorage.getItem(_));return Number.isFinite(a)&&a>0?a:E};function te(){const[a,p]=s.useState(Q),[o,g]=s.useState(q),[l,b]=s.useState(X),[c,u]=s.useState(R()),[$,M]=s.useState(1),[h,L]=s.useState(o),[f,N]=s.useState(l);s.useEffect(()=>L(o),[o]),s.useEffect(()=>N(l),[l]);const[d,v]=s.useState(null),m=n=>v({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",...n}),I=()=>{const n=d==null?void 0:d.onConfirm;v(null),typeof n=="function"&&n()};s.useEffect(()=>{if(!d)return;const n=i=>{i.key==="Escape"&&v(null),i.key==="Enter"&&I()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[d]),s.useEffect(()=>{localStorage.setItem(z,JSON.stringify(a))},[a]),s.useEffect(()=>{localStorage.setItem(U,String(o))},[o]),s.useEffect(()=>{localStorage.setItem(_,String(l))},[l]);const k=s.useMemo(()=>a.filter(n=>n.date===c).sort((n,i)=>i.createdAt-n.createdAt),[a,c]),j=k.length,O=j*l,A=o>0?Math.min(100,Math.round(j/o*100)):0,D=n=>{const i=Math.max(1,Math.floor(Number(n)||1)),y=Date.now(),S=Array.from({length:i},(T,P)=>({id:J()+P,date:c,createdAt:y+P}));p(T=>[...S,...T]),M(1)},Y=()=>{var i;const n=(i=k[0])==null?void 0:i.id;n&&p(y=>y.filter(S=>S.id!==n))},K=n=>p(i=>i.filter(y=>y.id!==n)),H=()=>p(n=>n.filter(i=>i.date!==c)),G=n=>{const i=new Date(`${c}T00:00:00`);i.setDate(i.getDate()+n);const y=i.getFullYear(),S=String(i.getMonth()+1).padStart(2,"0"),T=String(i.getDate()).padStart(2,"0");u(`${y}-${S}-${T}`)};return e.jsx(t.Page,{children:e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Water Intake"}),e.jsxs(t.Sub,{children:["Log ",w," • Visual progress • LocalStorage"]})]}),e.jsxs("div",{style:{textAlign:"right"},children:[e.jsxs(t.Badge,{children:[j,"/",o," ",w]})," ",e.jsxs(t.Badge,{tone:"muted",children:[A,"%"]}),e.jsxs("div",{style:{fontSize:12,opacity:.8,marginTop:6},children:["~",O," ml today ",e.jsxs("span",{style:{opacity:.7},children:["(",l," ml/glass)"]})]})]})]}),e.jsx(t.Card,{children:e.jsxs(t.ProgressWrap,{children:[e.jsx(Z,{value:j,max:o,size:140,stroke:10}),e.jsxs(t.ProgressInfo,{children:[e.jsxs("div",{className:"big",children:[j,"/",o]}),e.jsxs("div",{className:"small",children:[A,"% of goal"]})]}),e.jsxs(t.QuickRow,{children:[e.jsx(t.PrimaryButton,{type:"button",onClick:()=>D(1),children:"+1"}),e.jsx(t.Button,{type:"button",onClick:()=>D(2),children:"+2"}),e.jsx(t.Button,{type:"button",onClick:()=>D(3),children:"+3"}),e.jsx(t.Input,{type:"number",inputMode:"numeric",min:"1",step:"1",value:$,onChange:n=>M(Math.max(1,Number(n.target.value)||1)),"aria-label":"Number of glasses",style:{width:90}}),e.jsx(t.PrimaryButton,{type:"button",onClick:()=>D($),children:"Add"}),e.jsx(t.Button,{type:"button",onClick:Y,disabled:j===0,children:"Undo last"})]})]})}),e.jsxs(t.Toolbar,{children:[e.jsxs(t.RowWrap,{children:[e.jsx(t.Button,{type:"button",onClick:()=>G(-1),children:"◀ Prev"}),e.jsx(t.Input,{type:"date",value:c,onChange:n=>u(n.target.value||R()),"aria-label":"Selected date",style:{width:160}}),e.jsx(t.Button,{type:"button",onClick:()=>u(R()),children:"Today"}),e.jsx(t.Button,{type:"button",onClick:()=>G(1),children:"Next ▶"})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.Input,{type:"number",inputMode:"numeric",min:"1",step:"1",value:h,onChange:n=>L(Math.max(1,Number(n.target.value)||1)),onKeyDown:n=>{n.key==="Enter"&&h!==o&&m({title:"Update daily goal?",message:`Set goal to ${h} ${w}?`,confirmText:"Set goal",onConfirm:()=>g(h)})},"aria-label":`Daily goal (${w})`,style:{width:140}}),e.jsx(t.Button,{type:"button",onClick:()=>{h!==o&&m({title:"Update daily goal?",message:`Set goal to ${h} ${w}?`,confirmText:"Set goal",onConfirm:()=>g(h)})},children:"Set goal"}),e.jsx(t.DangerButton,{type:"button",onClick:()=>m({title:"Reset goal?",message:`Reset goal to ${B} ${w}?`,confirmText:"Reset",tone:"danger",onConfirm:()=>g(B)}),children:"Reset"})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.Input,{type:"number",inputMode:"numeric",min:"50",step:"50",value:f,onChange:n=>N(Math.max(1,Number(n.target.value)||1)),onKeyDown:n=>{n.key==="Enter"&&f!==l&&m({title:"Update per-glass size?",message:`Set per glass to ${f} ml?`,confirmText:"Set ml/glass",onConfirm:()=>b(f)})},"aria-label":"Per glass (ml)",style:{width:160}}),e.jsx(t.Button,{type:"button",onClick:()=>{f!==l&&m({title:"Update per-glass size?",message:`Set per glass to ${f} ml?`,confirmText:"Set ml/glass",onConfirm:()=>b(f)})},children:"Set ml/glass"}),e.jsx(t.DangerButton,{type:"button",onClick:()=>m({title:"Reset per-glass size?",message:`Reset to ${E} ml per glass?`,confirmText:"Reset",tone:"danger",onConfirm:()=>b(E)}),children:"Reset ml"})]}),e.jsx(t.RowWrap,{children:e.jsx(t.DangerButton,{type:"button",onClick:()=>m({title:"Clear this day?",message:`Remove all logs on ${W(c)}?`,confirmText:"Clear day",tone:"danger",onConfirm:H}),children:"Clear day"})})]}),e.jsxs(t.List,{children:[k.length===0&&e.jsxs(t.Empty,{children:["No logs on ",W(c),"."]}),k.map((n,i)=>e.jsxs(t.Item,{children:[e.jsx(t.ItemLeft,{children:e.jsxs("div",{children:[e.jsxs(t.ItemTitle,{children:["Glass #",k.length-i]}),e.jsxs(t.ItemMeta,{children:[e.jsx(t.Tag,{children:"#water"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:new Date(n.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[l," ml"]})]})]})}),e.jsx(t.ItemRight,{children:e.jsx(t.IconButton,{onClick:()=>m({title:"Delete log?",message:"Delete this glass entry?",confirmText:"Delete",tone:"danger",onConfirm:()=>K(n.id)}),"aria-label":"Delete",children:"🗑️"})})]},n.id))]}),e.jsx(t.FooterNote,{children:"Data stays in your browser (localStorage). Refresh-safe."}),d&&e.jsx(t.ModalOverlay,{onClick:()=>v(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:n=>n.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:d.title}),d.message?e.jsx(t.ModalMessage,{children:d.message}):null,e.jsxs(t.ModalActions,{children:[e.jsx(t.Button,{type:"button",onClick:()=>v(null),children:d.cancelText||"Cancel"}),d.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:I,autoFocus:!0,children:d.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:I,autoFocus:!0,children:d.confirmText||"Confirm"})]})]})})]})})}function Z({value:a,max:p,size:o=140,stroke:g=10}){const l=Math.max(1,Number(p)||1),b=Math.max(0,Math.min(a,l)),c=(o-g)/2,u=2*Math.PI*c,$=u*(b/l),M=u-$;return e.jsx(t.Ring,{"aria-label":`Progress ${b}/${l}`,children:e.jsxs("svg",{width:o,height:o,viewBox:`0 0 ${o} ${o}`,children:[e.jsx("circle",{cx:o/2,cy:o/2,r:c,fill:"none",stroke:"hsl(0 0% 100% / 0.12)",strokeWidth:g}),e.jsx("circle",{cx:o/2,cy:o/2,r:c,fill:"none",stroke:"currentColor",strokeWidth:g,strokeLinecap:"round",strokeDasharray:`${u} ${u}`,strokeDashoffset:M,transform:`rotate(-90 ${o/2} ${o/2})`})]})})}export{te as default};
