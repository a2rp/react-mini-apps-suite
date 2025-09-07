import{d as r,l as Q,r as a,j as e}from"./index-CQZpQpof.js";const x="1px solid hsl(0 0% 100% / 0.14)",Y="1px solid hsl(0 0% 100% / 0.10)",S="0 0 0 3px hsl(0 0% 100% / 0.15)",n={Page:r.div`
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
    `,Tag:r.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${Y};
        color: inherit;
        ${({tone:o})=>o==="muted"&&Q`
                opacity: 0.7;
            `}
    `,DueHint:r.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${Y};
    `,Card:r.div`
        border-radius: 16px;
        padding: 16px;
        border: ${x};
        background: transparent;
    `,FormRow:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    `,Input:r.input`
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
            box-shadow: ${S};
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
    `,TextArea:r.textarea`
        background: transparent;
        color: inherit;
        border: ${x};
        border-radius: 12px;
        padding: 10px 12px;
        font-size: 14px;
        min-height: 110px;
        resize: vertical;
        outline: none;
        width: 100%;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${S};
            border-color: hsl(0 0% 100% / 0.35);
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
            box-shadow: ${S};
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
            box-shadow: ${S};
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
        /* border: 1px solid #f00; */
        width: 100%;
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
        min-width: 0;
        width: 100%;
        flex: 1 1 220px;
        &:focus-visible {
            box-shadow: ${S};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,List:r.div`
        display: grid;
        gap: 10px;
    `,Empty:r.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${x};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:r.div`
        /* border: 1px solid #f00; */
        /* display: grid; */
        /* grid-template-columns: 84px 1fr auto; */
        /* gap: 12px; */
        /* align-items: start; */
        position: relative;
        border: ${x};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ThumbWrap:r.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,ItemLeft:r.div`
        display: flex;
        gap: 12px;
        /* flex: 1; */
        flex-wrap: wrap;
    `,ItemRight:r.div`
        border-top: 1px solid #333;
        margin: 30px 0;
        padding: 30px 0;
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
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
            box-shadow: ${S};
        }
    `,Bullets:r.ul`
        margin: 8px 0 0;
        padding: 0 0 0 18px;
        display: grid;
        gap: 6px;
        li {
            line-height: 1.4;
        }
    `,Fieldset:r.fieldset`
        border: ${x};
        border-radius: 12px;
        padding: 12px;
        margin: 2px 0 0;
        background: transparent;
    `,Legend:r.legend`
        padding: 0 6px;
        opacity: 0.9;
        font-weight: 600;
    `,FooterNote:r.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
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
    `},_="recipe-box.v1",G=new URL("./noRecipe.png",document.baseURI).toString(),H=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,J=o=>Number(o)||0,Z=()=>{try{return JSON.parse(localStorage.getItem(_))??[]}catch{return[]}};function ee(){const[o,h]=a.useState(Z),[m,f]=a.useState(""),[B,I]=a.useState(""),[A,k]=a.useState(""),[$,T]=a.useState(""),[L,M]=a.useState(""),[D,R]=a.useState(""),[y,E]=a.useState(""),[v,F]=a.useState("All"),[b,j]=a.useState("created"),[z,g]=a.useState(null),[d,u]=a.useState(null),P=t=>u({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",hideCancel:!1,...t}),w=()=>{const t=d==null?void 0:d.onConfirm;u(null),typeof t=="function"&&t()};a.useEffect(()=>{if(!d)return;const t=s=>{s.key==="Escape"&&u(null),s.key==="Enter"&&w()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[d]),a.useEffect(()=>localStorage.setItem(_,JSON.stringify(o)),[o]);const C=a.useMemo(()=>Array.from(new Set(o.map(t=>t.category).filter(Boolean))).sort(),[o]),N=a.useMemo(()=>{let t=o;if(v!=="All"&&(t=t.filter(s=>s.category===v)),y.trim()){const s=y.toLowerCase();t=t.filter(l=>l.title.toLowerCase().includes(s)||(l.category||"").toLowerCase().includes(s)||(l.tags||[]).some(p=>p.toLowerCase().includes(s)))}return b==="title"?t=[...t].sort((s,l)=>s.title.localeCompare(l.title)):b==="category"?t=[...t].sort((s,l)=>(s.category||"").localeCompare(l.category||"")||s.title.localeCompare(l.title)):t=[...t].sort((s,l)=>l.createdAt-s.createdAt),t},[o,v,y,b]),O=t=>{t.preventDefault();const s=m.trim();if(!s)return;const l={id:H(),title:s,category:B.trim(),servings:A.trim(),prepMins:$.trim(),cookMins:L.trim(),imageUrl:D.trim(),tags:[],ingredients:[],steps:[],notes:"",createdAt:Date.now(),updatedAt:Date.now()};h(p=>[l,...p]),f(""),I(""),k(""),T(""),M(""),R(""),u({title:"Saved",message:`Added “${s}”.`,confirmText:"OK",hideCancel:!0})},q=t=>g(t),K=()=>g(null),U=(t,s)=>{h(l=>l.map(p=>p.id===t?{...p,...s,updatedAt:Date.now()}:p)),g(null),u({title:"Saved",message:"Recipe updated.",confirmText:"OK",hideCancel:!0})},W=t=>{P({title:"Delete recipe?",message:"This will remove it from your Recipe Box.",confirmText:"Delete",tone:"danger",onConfirm:()=>h(s=>s.filter(l=>l.id!==t))})},i=t=>{const s=o.find(p=>p.id===t);if(!s)return;const l={...s,id:H(),title:`${s.title} (copy)`,createdAt:Date.now(),updatedAt:Date.now()};h(p=>[l,...p])},c=t=>J(t.prepMins)+J(t.cookMins);return e.jsx(n.Page,{children:e.jsxs(n.Container,{children:[e.jsxs(n.Header,{children:[e.jsxs("div",{children:[e.jsx(n.Title,{children:"Recipe Box"}),e.jsx(n.Sub,{children:"Save your favorite recipes with ingredients & steps — LocalStorage."})]}),e.jsxs(n.BadgeRow,{children:[e.jsxs(n.Tag,{children:["Total: ",o.length]}),e.jsxs(n.Tag,{children:["Categories: ",C.length||0]})]})]}),e.jsxs(n.Card,{as:"form",onSubmit:O,children:[e.jsxs(n.FormRow,{children:[e.jsx(n.Input,{placeholder:"Recipe title *",value:m,onChange:t=>f(t.target.value),required:!0,style:{flex:"2 1 320px"}}),e.jsx(n.Input,{placeholder:"Category (e.g., Dessert)",value:B,onChange:t=>I(t.target.value),list:"cat-suggestions"}),e.jsx("datalist",{id:"cat-suggestions",children:C.map(t=>e.jsx("option",{value:t},t))}),e.jsx(n.Input,{placeholder:"Servings",inputMode:"numeric",value:A,onChange:t=>k(t.target.value),style:{flex:"0 1 120px"}}),e.jsx(n.Input,{placeholder:"Prep (min)",inputMode:"numeric",value:$,onChange:t=>T(t.target.value),style:{flex:"0 1 120px"}}),e.jsx(n.Input,{placeholder:"Cook (min)",inputMode:"numeric",value:L,onChange:t=>M(t.target.value),style:{flex:"0 1 120px"}}),e.jsx(n.Input,{placeholder:"Image URL (optional)",value:D,onChange:t=>R(t.target.value),style:{flex:"1 1 260px"}}),e.jsx(n.PrimaryButton,{type:"submit",disabled:!m.trim(),children:"Add"})]}),!m.trim()&&e.jsx(n.Helper,{children:"Tip: Title is required."})]}),e.jsx(n.Toolbar,{children:e.jsxs(n.RowWrap,{children:[e.jsxs(n.Select,{value:v,onChange:t=>F(t.target.value),"aria-label":"Filter by category",children:[e.jsx("option",{value:"All",children:"All"}),C.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs(n.Select,{value:b,onChange:t=>j(t.target.value),"aria-label":"Sort",children:[e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"title",children:"Title A–Z"}),e.jsx("option",{value:"category",children:"By category"})]}),e.jsx(n.Input,{placeholder:"Search title/category/tag…",value:y,onChange:t=>E(t.target.value),"aria-label":"Search"})]})}),e.jsxs(n.List,{children:[N.length===0&&e.jsx(n.Empty,{children:"No recipes yet. Add your first!"}),N.map(t=>{var s,l;return z===t.id?e.jsx(V,{recipe:t,onCancel:K,onSave:U},t.id):e.jsxs(n.Item,{style:{display:"flex",alignItems:"center",gap:"15px",width:"100%",border:"0px solid #f00"},children:[e.jsx(n.ThumbWrap,{children:e.jsx("img",{src:t.imageUrl&&t.imageUrl.trim()||G,onError:p=>{p.currentTarget.dataset.fallback||(p.currentTarget.dataset.fallback="1",p.currentTarget.src=G)},alt:`${t.title} image`,width:72,height:72,style:{width:72,height:72,objectFit:"cover",borderRadius:12}})}),e.jsx(n.ItemLeft,{style:{width:"100%"},children:e.jsxs("div",{children:[e.jsx(n.ItemTitle,{children:t.title}),e.jsxs(n.ItemMeta,{children:[t.category?e.jsxs(n.Tag,{children:["#",t.category]}):e.jsx(n.Tag,{tone:"muted",children:"No category"}),c(t)>0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.DueHint,{children:[c(t)," min"]})]}),t.servings&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.Tag,{children:[t.servings," servings"]})]}),(s=t.ingredients)!=null&&s.length?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.Tag,{children:[t.ingredients.length," ingredients"]})]}):null,(l=t.steps)!=null&&l.length?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.Tag,{children:[t.steps.length," steps"]})]}):null]})]})}),e.jsxs(n.ItemRight,{style:{width:"200px"},children:[e.jsx(n.IconButton,{title:"Duplicate",onClick:()=>i(t.id),children:"📄"}),e.jsx(n.IconButton,{title:"Edit",onClick:()=>q(t.id),children:"✏️"}),e.jsx(n.IconButton,{title:"Delete",onClick:()=>W(t.id),children:"🗑️"})]})]},t.id)})]}),e.jsx(n.FooterNote,{children:"Data stays in your browser (LocalStorage). Refresh-safe."}),d&&e.jsx(n.ModalOverlay,{onClick:()=>u(null),children:e.jsxs(n.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(n.ModalTitle,{id:"confirm-title",children:d.title}),d.message?e.jsx(n.ModalMessage,{children:d.message}):null,e.jsxs(n.ModalActions,{children:[!d.hideCancel&&e.jsx(n.Button,{type:"button",onClick:()=>u(null),children:d.cancelText||"Cancel"}),d.tone==="danger"?e.jsx(n.DangerButton,{type:"button",onClick:w,autoFocus:!0,children:d.confirmText||"Confirm"}):e.jsx(n.PrimaryButton,{type:"button",onClick:w,autoFocus:!0,children:d.confirmText||"Confirm"})]})]})})]})})}function V({recipe:o,onCancel:h,onSave:m}){var U,W;const[f,B]=a.useState(o.title),[I,A]=a.useState(o.category||""),[k,$]=a.useState(o.servings||""),[T,L]=a.useState(o.prepMins||""),[M,D]=a.useState(o.cookMins||""),[R,y]=a.useState(o.imageUrl||""),[E,v]=a.useState((o.tags||[]).join(", ")),[F,b]=a.useState(o.notes||""),[j,z]=a.useState((U=o.ingredients)!=null&&U.length?o.ingredients:[]),[g,d]=a.useState((W=o.steps)!=null&&W.length?o.steps:[]),[u,P]=a.useState(""),[w,C]=a.useState(""),N=i=>{var t;(t=i==null?void 0:i.preventDefault)==null||t.call(i);const c=u.trim();c&&(z(s=>[...s,{id:H(),text:c}]),P(""))},O=i=>{var t;(t=i==null?void 0:i.preventDefault)==null||t.call(i);const c=w.trim();c&&(d(s=>[...s,{id:H(),text:c}]),C(""))},q=i=>z(c=>c.filter(t=>t.id!==i)),K=i=>d(c=>c.filter(t=>t.id!==i));return e.jsxs(n.Item,{as:"form",onSubmit:i=>{i.preventDefault(),f.trim()&&m(o.id,{title:f.trim(),category:I.trim(),servings:k.trim(),prepMins:T.trim(),cookMins:M.trim(),imageUrl:R.trim(),tags:E.split(",").map(c=>c.trim()).filter(Boolean),ingredients:j,steps:g,notes:F})},children:[e.jsxs(n.ItemLeft,{children:[e.jsxs(n.FormRow,{children:[e.jsx(n.Input,{value:f,onChange:i=>B(i.target.value),placeholder:"Title *",required:!0,style:{flex:"2 1 320px"}}),e.jsx(n.Input,{value:I,onChange:i=>A(i.target.value),placeholder:"Category"}),e.jsx(n.Input,{value:k,onChange:i=>$(i.target.value),placeholder:"Servings",inputMode:"numeric",style:{flex:"0 1 120px"}}),e.jsx(n.Input,{value:T,onChange:i=>L(i.target.value),placeholder:"Prep (min)",inputMode:"numeric",style:{flex:"0 1 120px"}}),e.jsx(n.Input,{value:M,onChange:i=>D(i.target.value),placeholder:"Cook (min)",inputMode:"numeric",style:{flex:"0 1 120px"}}),e.jsx(n.Input,{value:R,onChange:i=>y(i.target.value),placeholder:"Image URL",style:{flex:"1 1 260px"}})]}),e.jsx(n.RowWrap,{children:e.jsx(n.Input,{style:{minWidth:260,flex:1},value:E,onChange:i=>v(i.target.value),placeholder:"Tags (comma-separated)"})}),e.jsxs(n.Fieldset,{children:[e.jsx(n.Legend,{children:"Ingredients"}),e.jsxs(n.RowWrap,{children:[e.jsx(n.Input,{style:{flex:1,minWidth:280},placeholder:"e.g., 2 cups flour",value:u,onChange:i=>P(i.target.value)}),e.jsx(n.PrimaryButton,{type:"button",onClick:N,children:"Add"})]}),j.length===0&&e.jsx(n.Helper,{children:"No ingredients yet."}),j.length>0&&e.jsx(n.Bullets,{as:"ul",children:j.map(i=>e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{flex:1},children:i.text}),e.jsx(n.IconButton,{title:"Remove",onClick:()=>q(i.id),children:"✕"})]},i.id))})]}),e.jsxs(n.Fieldset,{children:[e.jsx(n.Legend,{children:"Steps"}),e.jsxs(n.RowWrap,{children:[e.jsx(n.Input,{style:{flex:1,minWidth:280},placeholder:"e.g., Preheat oven to 180°C",value:w,onChange:i=>C(i.target.value)}),e.jsx(n.PrimaryButton,{type:"button",onClick:O,children:"Add"})]}),g.length===0&&e.jsx(n.Helper,{children:"No steps yet."}),g.length>0&&e.jsx(n.Bullets,{as:"ol",children:g.map(i=>e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("span",{style:{flex:1},children:i.text}),e.jsx(n.IconButton,{title:"Remove",onClick:()=>K(i.id),children:"✕"})]},i.id))})]}),e.jsx(n.TextArea,{placeholder:"Notes (optional)…",value:F,onChange:i=>b(i.target.value)})]}),e.jsxs(n.ItemRight,{children:[e.jsx(n.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(n.Button,{type:"button",onClick:h,children:"Cancel"})]})]})}export{ee as default};
