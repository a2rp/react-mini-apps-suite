import{d as a,l as ae,r as s,j as e}from"./index-VpWi7Hcw.js";const h="1px solid hsl(0 0% 100% / 0.14)",K="1px solid hsl(0 0% 100% / 0.10)",M="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:a.div`
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
        border: ${K};
        color: inherit;
    `,Card:a.div`
        border-radius: 16px;
        padding: 16px;
        border: ${h};
        background: transparent;
    `,FormRow:a.div`
        display: grid;
        grid-template-columns: 1fr 140px 160px 160px auto;
        gap: 10px;
        @media (width < 1020px) {
            grid-template-columns: 1fr 140px 160px auto;
        }
        @media (width < 860px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (width < 520px) {
            grid-template-columns: 1fr;
        }
    `,Input:a.input`
        background: transparent;
        color: inherit;
        border: ${h};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        caret-color: currentColor;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${M};
            border-color: hsl(0 0% 100% / 0.35);
        }

        /* number & date on dark UI */
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
    `,Helper:a.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:a.button`
        border: ${h};
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
            box-shadow: ${M};
        }
    `,Button:a.button`
        border: ${h};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${M};
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
        border: ${h};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        &:focus-visible {
            box-shadow: ${M};
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
        border: ${h};
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
        border: ${h};
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
        border: ${K};
        color: inherit;
        ${({tone:i})=>i==="muted"&&ae`
                opacity: 0.7;
            `}
    `,IconButton:a.button`
        background: transparent;
        border: ${h};
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
        color: inherit;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${M};
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
        border: ${h};
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
    `},W="calorie-counter.v1",H="calorie-counter.goal.v2",re="calorie-counter.goal",N=2e3,x="kcal",oe=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,T=()=>{const i=new Date,d=i.getFullYear(),l=String(i.getMonth()+1).padStart(2,"0"),f=String(i.getDate()).padStart(2,"0");return`${d}-${l}-${f}`},B=i=>new Date(`${i}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),ie=()=>{try{return JSON.parse(localStorage.getItem(W))??[]}catch{return[]}},P=()=>{const i=Number(localStorage.getItem(H));if(Number.isFinite(i)&&i>0)return i;const d=Number(localStorage.getItem(re));return Number.isFinite(d)&&d>0?d:N};function de(){const[i,d]=s.useState(ie),[l,f]=s.useState(P),[b,v]=s.useState(""),[y,S]=s.useState(""),[D,m]=s.useState("Breakfast"),[C,k]=s.useState(T()),[u,L]=s.useState(T()),[I,U]=s.useState(""),[_,R]=s.useState(null),[g,O]=s.useState(P());s.useEffect(()=>O(l),[l]);const[c,w]=s.useState(null),$=n=>w({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",...n}),A=()=>{const n=c==null?void 0:c.onConfirm;w(null),typeof n=="function"&&n()};s.useEffect(()=>{if(!c)return;const n=o=>{o.key==="Escape"&&w(null),o.key==="Enter"&&A()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[c]),s.useEffect(()=>{localStorage.setItem(W,JSON.stringify(i))},[i]),s.useEffect(()=>{localStorage.setItem(H,String(l))},[l]);const z=s.useMemo(()=>{let n=i.filter(r=>r.date===u);if(I.trim()){const r=I.toLowerCase();n=n.filter(p=>p.name.toLowerCase().includes(r))}const o=["Breakfast","Lunch","Dinner","Snack","Other"];return[...n].sort((r,p)=>{const j=o.indexOf(r.mealType),Y=o.indexOf(p.mealType);return j!==Y?j-Y:p.createdAt-r.createdAt})},[i,u,I]),q=s.useMemo(()=>{const n=new Map;for(const o of z){const r=o.mealType||"Other";n.has(r)||n.set(r,[]),n.get(r).push(o)}return Array.from(n.entries())},[z]),E=s.useMemo(()=>i.filter(n=>n.date===u).reduce((n,o)=>n+(Number(o.kcal)||0),0),[i,u]),J=l>0?Math.min(999,Math.round(E/l*100)):0,Q=Math.max(0,l-E),G=Math.max(0,E-l),V=n=>{n.preventDefault();const o=b.trim(),r=Math.max(0,Number(y)||0);if(!o||!r)return;const p={id:oe(),name:o,kcal:r,mealType:D||"Other",date:C||T(),createdAt:Date.now()};d(j=>[p,...j]),v(""),S(""),m("Breakfast"),k(u)},X=n=>d(o=>o.filter(r=>r.id!==n)),Z=n=>R(n),ee=(n,o)=>{d(r=>r.map(p=>p.id===n?{...p,...o}:p)),R(null)},te=()=>R(null),ne=()=>d(n=>n.filter(o=>o.date!==u)),F=n=>{const o=new Date(`${u}T00:00:00`);o.setDate(o.getDate()+n);const r=o.getFullYear(),p=String(o.getMonth()+1).padStart(2,"0"),j=String(o.getDate()).padStart(2,"0");L(`${r}-${p}-${j}`)};return e.jsx(t.Page,{children:e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Calorie Counter"}),e.jsx(t.Sub,{children:"Log meals • Track daily calories • LocalStorage"})]}),e.jsxs("div",{style:{textAlign:"right"},children:[e.jsxs(t.Badge,{children:[E," ",x," today"]})," ",e.jsxs(t.Badge,{tone:"muted",children:["Goal: ",l," ",x," (",J,"%)"]}),e.jsx("div",{style:{fontSize:12,opacity:.8,marginTop:6},children:G>0?`Over by ${G} ${x}`:`Remaining ${Q} ${x}`})]})]}),e.jsxs(t.Card,{as:"form",onSubmit:V,children:[e.jsxs(t.FormRow,{children:[e.jsx(t.Input,{placeholder:"Meal name *",value:b,onChange:n=>v(n.target.value),"aria-label":"Meal name",required:!0}),e.jsx(t.Input,{type:"number",inputMode:"numeric",min:"0",step:"1",placeholder:`Calories * (${x})`,value:y,onChange:n=>S(n.target.value),"aria-label":"Calories"}),e.jsxs(t.Select,{value:D,onChange:n=>m(n.target.value),"aria-label":"Meal type",children:[e.jsx("option",{children:"Breakfast"}),e.jsx("option",{children:"Lunch"}),e.jsx("option",{children:"Dinner"}),e.jsx("option",{children:"Snack"}),e.jsx("option",{children:"Other"})]}),e.jsx(t.Input,{type:"date",value:C,onChange:n=>k(n.target.value),"aria-label":"Log date"}),e.jsx(t.PrimaryButton,{type:"submit",disabled:!b.trim()||!Number(y),children:"Add"})]}),(!b.trim()||!Number(y))&&e.jsx(t.Helper,{children:"Tip: Enter meal name and calories."})]}),e.jsxs(t.Toolbar,{children:[e.jsxs(t.RowWrap,{children:[e.jsx(t.Button,{type:"button",onClick:()=>F(-1),children:"◀ Prev"}),e.jsx(t.Input,{type:"date",value:u,onChange:n=>L(n.target.value||T()),"aria-label":"Selected date",style:{width:160}}),e.jsx(t.Button,{type:"button",onClick:()=>L(T()),children:"Today"}),e.jsx(t.Button,{type:"button",onClick:()=>F(1),children:"Next ▶"})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.Input,{placeholder:`Search meals on ${B(u)}…`,value:I,onChange:n=>U(n.target.value),"aria-label":"Search meals",style:{minWidth:220}}),e.jsx(t.Input,{type:"number",inputMode:"numeric",min:"1",step:"50",value:g,onChange:n=>O(Math.max(1,Number(n.target.value)||0)),onKeyDown:n=>{n.key==="Enter"&&Number(g)&&g!==l&&$({title:"Update daily goal?",message:`Set goal to ${g} ${x}?`,confirmText:"Set goal",onConfirm:()=>f(Math.max(1,Number(g)))})},"aria-label":`Daily goal (${x})`,style:{width:160}}),e.jsx(t.Button,{type:"button",onClick:()=>{!Number(g)||g===l||$({title:"Update daily goal?",message:`Set goal to ${g} ${x}?`,confirmText:"Set goal",onConfirm:()=>f(Math.max(1,Number(g)))})},children:"Set goal"}),e.jsx(t.DangerButton,{type:"button",onClick:()=>$({title:"Reset goal?",message:`Reset goal to ${N} ${x}?`,confirmText:"Reset",tone:"danger",onConfirm:()=>{f(N),O(N)}}),children:"Reset"})]}),e.jsx(t.RowWrap,{children:e.jsx(t.DangerButton,{type:"button",onClick:()=>$({title:"Clear this day?",message:`Remove all meals on ${B(u)}?`,confirmText:"Clear day",tone:"danger",onConfirm:ne}),children:"Clear day"})})]}),e.jsxs(t.List,{children:[z.length===0&&e.jsxs(t.Empty,{children:["No meals logged on ",B(u),"."]}),q.map(([n,o])=>e.jsxs("div",{children:[e.jsxs(t.GroupHeader,{children:["#",n]}),o.map(r=>_===r.id?e.jsx(se,{item:r,onCancel:te,onSave:ee},r.id):e.jsxs(t.Item,{children:[e.jsx(t.ItemLeft,{children:e.jsxs("div",{children:[e.jsx(t.ItemTitle,{children:r.name}),e.jsxs(t.ItemMeta,{children:[e.jsxs(t.Tag,{children:["#",r.mealType]}),e.jsx("span",{children:"•"}),e.jsxs("span",{children:[r.kcal," ",x]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:B(r.date)})]})]})}),e.jsxs(t.ItemRight,{children:[e.jsx(t.IconButton,{onClick:()=>Z(r.id),"aria-label":"Edit",children:"✏️"}),e.jsx(t.IconButton,{onClick:()=>$({title:"Delete meal?",message:`Delete “${r.name}” (${r.kcal} ${x})?`,confirmText:"Delete",tone:"danger",onConfirm:()=>X(r.id)}),"aria-label":"Delete",children:"🗑️"})]})]},r.id))]},n))]}),e.jsx(t.FooterNote,{children:"Data stays in your browser (localStorage). Refresh-safe."}),c&&e.jsx(t.ModalOverlay,{onClick:()=>w(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:n=>n.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:c.title}),c.message?e.jsx(t.ModalMessage,{children:c.message}):null,e.jsxs(t.ModalActions,{children:[e.jsx(t.Button,{type:"button",onClick:()=>w(null),children:c.cancelText||"Cancel"}),c.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:A,autoFocus:!0,children:c.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:A,autoFocus:!0,children:c.confirmText||"Confirm"})]})]})})]})})}function se({item:i,onCancel:d,onSave:l}){const[f,b]=s.useState(i.name),[v,y]=s.useState(i.kcal),[S,D]=s.useState(i.mealType||"Other");return e.jsxs(t.Item,{as:"form",onSubmit:m=>{m.preventDefault();const C=f.trim(),k=Math.max(0,Number(v)||0);!C||!k||l(i.id,{name:C,kcal:k,mealType:S})},children:[e.jsxs(t.ItemLeft,{style:{alignItems:"center"},children:[e.jsx(t.Input,{value:f,onChange:m=>b(m.target.value),"aria-label":"Edit meal",placeholder:"Meal name *",required:!0}),e.jsx(t.Input,{type:"number",min:"0",step:"1",value:v,onChange:m=>y(m.target.value),"aria-label":"Edit calories",style:{maxWidth:140}}),e.jsxs(t.Select,{value:S,onChange:m=>D(m.target.value),"aria-label":"Edit type",style:{maxWidth:160},children:[e.jsx("option",{children:"Breakfast"}),e.jsx("option",{children:"Lunch"}),e.jsx("option",{children:"Dinner"}),e.jsx("option",{children:"Snack"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs(t.ItemRight,{children:[e.jsx(t.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(t.Button,{type:"button",onClick:d,children:"Cancel"})]})]})}export{de as default};
