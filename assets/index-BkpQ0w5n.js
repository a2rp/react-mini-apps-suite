import{d as a,l as se,r as s,j as e}from"./index-Clink-kh.js";const c="1px solid hsl(0 0% 100% / 0.14)",F="1px solid hsl(0 0% 100% / 0.10)",j="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:a.div`
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
        flex-wrap: wrap;
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
        flex-wrap: wrap;
    `,Tag:a.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${F};
        color: inherit;
        ${({tone:o})=>o==="muted"&&se`
                opacity: 0.7;
            `}
    `,DueHint:a.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${F};
    `,Card:a.div`
        border-radius: 16px;
        padding: 16px;
        border: ${c};
        background: transparent;
    `,FormRow:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    `,FilterBar:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin: 16px 0 10px;
        > * {
            min-width: 0;
        }
    `,ButtonRow:a.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,RowWrap:a.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,Input:a.input`
        background: transparent;
        color: inherit;
        border: ${c};
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
            box-shadow: ${j};
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
        &[type="password"],
        &[type="url"],
        &[type="text"] {
            color-scheme: dark;
        }
    `,Select:a.select`
        background: transparent;
        color: inherit;
        border: ${c};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        flex: 1 1 220px;
        &:focus-visible {
            box-shadow: ${j};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:a.textarea`
        background: transparent;
        color: inherit;
        border: ${c};
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
            box-shadow: ${j};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:a.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:a.button`
        border: ${c};
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
            box-shadow: ${j};
        }
    `,Button:a.button`
        border: ${c};
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
            box-shadow: ${j};
        }
    `,DangerButton:a.button`
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
    `,IconButton:a.button`
        background: transparent;
        border: ${c};
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
    `,List:a.div`
        display: grid;
        gap: 10px;
    `,Empty:a.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${c};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:a.div`
        display: grid;
        grid-template-columns: ${({$edit:o})=>o?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${c};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ItemLeft:a.div`
        display: flex;
        gap: 12px;
        flex: 1;
        flex-direction: column;
    `,ItemRight:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:a.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
    `,ItemMeta:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
        a {
            color: inherit;
            text-decoration: underline;
            text-underline-offset: 2px;
        }
    `,Fieldset:a.fieldset`
        border: ${c};
        border-radius: 12px;
        padding: 12px;
        margin: 2px 0 0;
        background: transparent;
    `,Legend:a.legend`
        padding: 0 6px;
        opacity: 0.9;
        font-weight: 600;
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
        border: ${c};
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
    `,LockWrap:a.div`
        display: grid;
        gap: 12px;
        max-width: 520px;
        margin: 40px auto 0;
    `,LockBanner:a.div`
        border: ${c};
        border-radius: 16px;
        padding: 12px;
        opacity: 0.9;
        font-size: 13px;
    `,Mono:a.code`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        background: hsl(0 0% 100% / 0.06);
        padding: 2px 6px;
        border-radius: 8px;
        border: ${F};
    `},K="passwordManager.v1",z="passwordManager.unlocked",O=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,ie=(o="")=>o?"•".repeat(Math.min(Math.max(o.length,8),18)):"",q=(o=16)=>{const u="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*()_+-=[]{};:,./?";let w="";const x=new Uint32Array(o);crypto.getRandomValues(x);for(let g=0;g<o;g++)w+=u[x[g]%u.length];return w},le=()=>{try{const o=localStorage.getItem(K);return o?JSON.parse(o):[]}catch{return[]}},de=o=>localStorage.setItem(K,JSON.stringify(o));function ue(){const[o,u]=s.useState(()=>le()),[w,x]=s.useState(()=>sessionStorage.getItem(z)==="true"),[g,m]=s.useState(""),$=t=>{var n;(n=t==null?void 0:t.preventDefault)==null||n.call(t),sessionStorage.setItem(z,"true"),x(!0),m("")},S=()=>{sessionStorage.removeItem(z),x(!1),m("")},[f,v]=s.useState(""),[k,C]=s.useState(""),[I,y]=s.useState(""),[T,b]=s.useState(""),[B,l]=s.useState(""),[A,N]=s.useState(""),[P,G]=s.useState(!1),[M,W]=s.useState(""),[L,Y]=s.useState("All"),[R,_]=s.useState("updated"),[J,E]=s.useState(null),[Z,Q]=s.useState({}),[d,h]=s.useState(null);s.useEffect(()=>de(o),[o]);const V=s.useMemo(()=>{const t=new Set;return o.forEach(n=>(n.tags||[]).forEach(i=>t.add(i))),Array.from(t).sort((n,i)=>n.localeCompare(i))},[o]),H=s.useMemo(()=>{let t=o;if(L!=="All"&&(t=t.filter(n=>(n.tags||[]).includes(L))),M.trim()){const n=M.toLowerCase();t=t.filter(i=>(i.site||"").toLowerCase().includes(n)||(i.username||"").toLowerCase().includes(n)||(i.url||"").toLowerCase().includes(n)||(i.tags||[]).some(p=>p.toLowerCase().includes(n)))}return R==="site"?t=[...t].sort((n,i)=>n.site.localeCompare(i.site)):R==="username"?t=[...t].sort((n,i)=>n.username.localeCompare(i.username)):t=[...t].sort((n,i)=>(i.updatedAt||0)-(n.updatedAt||0)),t},[o,L,M,R]),X=t=>{t.preventDefault();const n=f.trim();if(!n)return;const i={id:O(),site:n,username:k.trim(),password:I,url:T.trim(),tags:B.split(",").map(p=>p.trim()).filter(Boolean),notes:A.trim(),createdAt:Date.now(),updatedAt:Date.now()};u(p=>[i,...p]),v(""),C(""),y(""),b(""),l(""),N("")},ee=()=>E(null),te=(t,n)=>{u(i=>i.map(p=>p.id===t?{...p,...n,updatedAt:Date.now()}:p)),E(null)},re=t=>{const n=o.find(p=>p.id===t);if(!n)return;const i={...n,id:O(),site:`${n.site} (copy)`,createdAt:Date.now(),updatedAt:Date.now()};u(p=>[i,...p])},ne=t=>{h({title:"Delete credential?",message:"This will remove it from your local list.",tone:"danger",confirmText:"Delete",onConfirm:()=>u(n=>n.filter(i=>i.id!==t))})},ae=()=>{h({title:"Clear all credentials?",message:"This action cannot be undone.",tone:"danger",confirmText:"Clear all",onConfirm:()=>u([])})},U=async(t,n="Copied!")=>{try{await navigator.clipboard.writeText(t||""),h({title:n,hideCancel:!0,confirmText:"OK"})}catch{h({title:"Copy failed",hideCancel:!0,confirmText:"OK"})}},oe=t=>Q(n=>({...n,[t]:!n[t]})),D=()=>{const t=d==null?void 0:d.onConfirm;h(null),typeof t=="function"&&t()};return s.useEffect(()=>{if(!d)return;const t=n=>{n.key==="Escape"&&h(null),n.key==="Enter"&&D()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[d]),w?e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsxs(r.Header,{children:[e.jsxs("div",{children:[e.jsx(r.Title,{children:"Password Manager (Local)"}),e.jsx(r.Sub,{children:"Store website credentials locally. Master Password is a UI-only lock."})]}),e.jsxs(r.BadgeRow,{children:[e.jsxs(r.Tag,{children:["Total: ",o.length]}),e.jsx(r.Button,{onClick:S,title:"Lock the manager",children:"🔒 Lock"}),e.jsx(r.DangerButton,{onClick:ae,title:"Clear all credentials",children:"Clear All"})]})]}),e.jsxs(r.Card,{as:"form",onSubmit:X,children:[e.jsxs(r.FormRow,{children:[e.jsx(r.Input,{placeholder:"Site / App name * (e.g., GitHub)",value:f,onChange:t=>v(t.target.value),required:!0,style:{flex:"2 1 280px"}}),e.jsx(r.Input,{placeholder:"Username or Email",value:k,onChange:t=>C(t.target.value),style:{flex:"1 1 220px"}}),e.jsx(r.Input,{type:P?"text":"password",placeholder:"Password",value:I,onChange:t=>y(t.target.value),style:{flex:"1 1 220px"}}),e.jsx(r.IconButton,{type:"button",onClick:()=>G(t=>!t),title:P?"Hide password":"Show password",children:P?"🙈":"👁️"}),e.jsx(r.IconButton,{type:"button",onClick:()=>y(q(16)),title:"Generate strong password",children:"⚙️"}),e.jsx(r.Input,{type:"url",placeholder:"Login URL (optional)",value:T,onChange:t=>b(t.target.value),style:{flex:"2 1 280px"}}),e.jsx(r.Input,{placeholder:"Tags (comma separated)",value:B,onChange:t=>l(t.target.value),style:{flex:"2 1 280px"}}),e.jsx(r.PrimaryButton,{type:"submit",disabled:!f.trim(),children:"Add"})]}),e.jsx(r.TextArea,{placeholder:"Notes (optional)…",value:A,onChange:t=>N(t.target.value),style:{marginTop:10,width:"100%"}}),!f.trim()&&e.jsx(r.Helper,{children:"Tip: Site/App name is required."})]}),e.jsxs(r.FilterBar,{children:[e.jsxs(r.Select,{value:L,onChange:t=>Y(t.target.value),"aria-label":"Filter by tag",title:"Filter by tag",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"All",children:"All tags"}),V.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsxs(r.Select,{value:R,onChange:t=>_(t.target.value),"aria-label":"Sort by",title:"Sort by",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"updated",children:"Recently updated"}),e.jsx("option",{value:"site",children:"Site A–Z"}),e.jsx("option",{value:"username",children:"Username A–Z"})]}),e.jsx(r.Input,{placeholder:"Search site/username/url/tag…",value:M,onChange:t=>W(t.target.value),"aria-label":"Search",style:{flex:"2 1 320px"}})]}),e.jsxs(r.List,{children:[H.length===0&&e.jsx(r.Empty,{children:"No credentials yet. Add your first above."}),H.map(t=>{if(J===t.id)return e.jsx(pe,{item:t,onCancel:ee,onSave:te},t.id);const n=!!Z[t.id];return e.jsxs(r.Item,{children:[e.jsx(r.ItemLeft,{children:e.jsxs("div",{children:[e.jsx(r.ItemTitle,{children:t.site}),e.jsxs(r.ItemMeta,{children:[t.username?e.jsxs(r.Tag,{children:["@",t.username]}):e.jsx(r.Tag,{tone:"muted",children:"No username"}),e.jsx("span",{children:"•"}),e.jsx(r.Tag,{children:n?t.password||"":ie(t.password)}),t.url&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:new URL(t.url).hostname||t.url})]}),(t.tags||[]).length>0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),(t.tags||[]).map(i=>e.jsxs(r.Tag,{children:["#",i]},i))]}),e.jsx("span",{children:"•"}),e.jsxs(r.DueHint,{children:["Updated ",new Date(t.updatedAt||t.createdAt).toLocaleString()]})]})]})}),e.jsxs(r.ItemRight,{children:[e.jsx(r.Button,{onClick:()=>oe(t.id),title:n?"Hide password":"Reveal password",children:n?"🙈 Hide":"👁️ Reveal"}),e.jsx(r.Button,{onClick:()=>U(t.password,"Password copied"),title:"Copy password",children:"📋 Copy"}),e.jsx(r.IconButton,{onClick:()=>U(t.username,"Username copied"),title:"Copy username",children:"👤"}),e.jsx(r.IconButton,{onClick:()=>t.url&&U(t.url,"URL copied"),title:"Copy URL",children:"🔗"}),e.jsx(r.IconButton,{onClick:()=>re(t.id),title:"Duplicate",children:"📄"}),e.jsx(r.IconButton,{onClick:()=>E(t.id),title:"Edit",children:"✏️"}),e.jsx(r.IconButton,{onClick:()=>ne(t.id),title:"Delete",children:"🗑️"})]})]},t.id)})]}),e.jsxs(r.FooterNote,{children:["Note: This demo uses ",e.jsx("b",{children:"LocalStorage"})," and a UI-only lock. It does not encrypt your data."]}),d&&e.jsx(r.ModalOverlay,{onClick:()=>h(null),children:e.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(r.ModalTitle,{id:"confirm-title",children:d.title}),d.message?e.jsx(r.ModalMessage,{children:d.message}):null,e.jsxs(r.ModalActions,{children:[!d.hideCancel&&e.jsx(r.Button,{type:"button",onClick:()=>h(null),children:d.cancelText||"Cancel"}),d.tone==="danger"?e.jsx(r.DangerButton,{type:"button",onClick:D,autoFocus:!0,children:d.confirmText||"Confirm"}):e.jsx(r.PrimaryButton,{type:"button",onClick:D,autoFocus:!0,children:d.confirmText||"OK"})]})]})})]})}):e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsx(r.Header,{children:e.jsxs("div",{children:[e.jsx(r.Title,{children:"Password Manager (Local)"}),e.jsx(r.Sub,{children:"Master Password UI only — no real encryption. Data stays in your browser."})]})}),e.jsxs(r.LockWrap,{as:"form",onSubmit:$,children:[e.jsx(r.Input,{type:"password",placeholder:"Enter master password to unlock (UI-only)",value:g,onChange:t=>m(t.target.value),autoFocus:!0}),e.jsxs(r.RowWrap,{children:[e.jsx(r.PrimaryButton,{type:"submit",children:"Unlock"}),e.jsx(r.Button,{type:"button",onClick:()=>{m("")},children:"Clear"})]}),e.jsxs(r.LockBanner,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Important:"})," This is a mini-project. The “master password” is only a visual gate and is ",e.jsx("em",{children:"not"})," used for real encryption."]}),e.jsxs("div",{style:{marginTop:6},children:["For a production app, use ",e.jsx(r.Mono,{children:"Web Crypto API"})," (PBKDF2/Argon2, AES-GCM) and never store secrets in plaintext."]})]})]})]})})}function pe({item:o,onCancel:u,onSave:w}){const[x,g]=s.useState(o.site),[m,$]=s.useState(o.username||""),[S,f]=s.useState(o.password||""),[v,k]=s.useState(o.url||""),[C,I]=s.useState((o.tags||[]).join(", ")),[y,T]=s.useState(o.notes||""),[b,B]=s.useState(!1);return e.jsx(r.Item,{as:"form",$edit:!0,onSubmit:l=>{l.preventDefault(),x.trim()&&w(o.id,{site:x.trim(),username:m.trim(),password:S,url:v.trim(),tags:C.split(",").map(A=>A.trim()).filter(Boolean),notes:y.trim()})},children:e.jsxs(r.ItemLeft,{children:[e.jsxs(r.FormRow,{children:[e.jsx(r.Input,{value:x,onChange:l=>g(l.target.value),placeholder:"Site / App *",required:!0,style:{flex:"2 1 280px"}}),e.jsx(r.Input,{value:m,onChange:l=>$(l.target.value),placeholder:"Username or Email",style:{flex:"1 1 220px"}}),e.jsx(r.Input,{type:b?"text":"password",value:S,onChange:l=>f(l.target.value),placeholder:"Password",style:{flex:"1 1 220px"}}),e.jsx(r.IconButton,{type:"button",onClick:()=>B(l=>!l),title:b?"Hide password":"Show password",children:b?"🙈":"👁️"}),e.jsx(r.IconButton,{type:"button",onClick:()=>f(q(16)),title:"Generate strong password",children:"⚙️"}),e.jsx(r.Input,{type:"url",value:v,onChange:l=>k(l.target.value),placeholder:"Login URL",style:{flex:"2 1 280px"}}),e.jsx(r.Input,{value:C,onChange:l=>I(l.target.value),placeholder:"Tags (comma separated)",style:{flex:"2 1 280px"}})]}),e.jsx(r.TextArea,{value:y,onChange:l=>T(l.target.value),placeholder:"Notes (optional)…"}),e.jsxs(r.ButtonRow,{children:[e.jsx(r.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(r.Button,{type:"button",onClick:u,children:"Cancel"})]})]})})}export{ue as default};
