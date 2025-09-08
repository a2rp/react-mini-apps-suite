import{d as i,r as c,j as e}from"./index-BFEzxGX6.js";const w="1px solid hsl(0 0% 100% / 0.14)",J="1px solid hsl(0 0% 100% / 0.10)",b="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:i.div`
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
    `,Badge:i.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${J};
        color: inherit;
    `,Card:i.div`
        border-radius: 16px;
        padding: 16px;
        border: ${w};
        background: transparent;
    `,FormRow:i.div`
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 10px;
        @media (width < 760px) {
            grid-template-columns: 1fr auto;
        }
        @media (width < 520px) {
            grid-template-columns: 1fr;
        }
    `,Input:i.input`
        background: transparent;
        color: inherit;
        border: ${w};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        caret-color: currentColor;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${b};
            border-color: hsl(0 0% 100% / 0.35);
        }
        &[type="date"],
        &[type="number"] {
            color-scheme: dark;
        }
        &[type="date"] {
            padding-right: 40px;
        }
        &[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1) brightness(1.2);
            opacity: 0.9;
            cursor: pointer;
        }
        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type="number"] {
            -moz-appearance: textfield;
        }
    `,TextArea:i.textarea`
        background: transparent;
        color: inherit;
        border: ${w};
        border-radius: 12px;
        padding: 12px;
        font-size: 14px;
        line-height: 1.5;
        min-height: 240px;
        width: 100%;
        resize: vertical;
        outline: none;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${b};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:i.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:i.button`
        border: ${w};
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
            box-shadow: ${b};
        }
    `,Button:i.button`
        border: ${w};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${b};
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
    `,Toolbar:i.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin: 16px 0;
        flex-wrap: wrap;
    `,RowWrap:i.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,Select:i.select`
        background: transparent;
        color: inherit;
        border: ${w};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        &:focus-visible {
            box-shadow: ${b};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,ItemMeta:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.8;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,Tag:i.span`
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        border: ${J};
        color: inherit;
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
        border: ${w};
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
    `},K="journal.v1",z=12e4,Y=new TextEncoder,ne=new TextDecoder,F=t=>{const a=t instanceof Uint8Array?t:new Uint8Array(t);let n="";for(let o=0;o<a.byteLength;o++)n+=String.fromCharCode(a[o]);return btoa(n)},I=t=>{const a=atob(t),n=new Uint8Array(a.length);for(let o=0;o<a.length;o++)n[o]=a.charCodeAt(o);return n.buffer},ae=()=>{try{return JSON.parse(localStorage.getItem(K))??null}catch{return null}},oe=t=>localStorage.setItem(K,JSON.stringify(t)),P=()=>{const t=new Date,a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${a}-${n}-${o}`},M=t=>new Date(`${t}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"});async function A(t,a){const n=a?I(a):crypto.getRandomValues(new Uint8Array(16)).buffer,o=await crypto.subtle.importKey("raw",Y.encode(t),"PBKDF2",!1,["deriveKey"]);return{key:await crypto.subtle.deriveKey({name:"PBKDF2",salt:n,iterations:z,hash:"SHA-256"},o,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"]),saltB64:F(n)}}async function S(t,a){const n=crypto.getRandomValues(new Uint8Array(12)),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,Y.encode(a));return{iv:F(n),ct:F(o)}}async function $(t,a,n){const o=await crypto.subtle.decrypt({name:"AES-GCM",iv:new Uint8Array(I(n))},t,I(a));return ne.decode(o)}function pe(){const[t,a]=c.useState(ae),[n,o]=c.useState(null),[d,u]=c.useState(!1),[l,h]=c.useState(P()),[g,x]=c.useState(""),[D,O]=c.useState(!1),[U,L]=c.useState(!1),[T,H]=c.useState(!1),N=c.useMemo(()=>Object.keys((t==null?void 0:t.data)||{}).length,[t]),[y,m]=c.useState(null),B=s=>m({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",hideCancel:!1,...s}),j=()=>{const s=y==null?void 0:y.onConfirm;m(null),typeof s=="function"&&s()};c.useEffect(()=>{if(!y)return;const s=p=>{p.key==="Escape"&&m(null),p.key==="Enter"&&j()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[y]),c.useEffect(()=>{(async()=>{var p;if(!d||!n){x("");return}const s=(p=t==null?void 0:t.data)==null?void 0:p[l];if(!s){x("");return}try{O(!0);const f=await $(n,s.ct,s.iv);x(f)}catch{x("[Decryption error]")}finally{O(!1)}})()},[l,d,n,t]),c.useEffect(()=>{t&&oe(t)},[t]);const G=async s=>{const{key:p,saltB64:f}=await A(s),v=await S(p,"ok");a({meta:{salt:f,iter:z,verifier:v},data:{}}),o(p),u(!0)},q=async s=>{var f;if(!((f=t==null?void 0:t.meta)!=null&&f.salt))throw new Error("Journal not initialized.");const{key:p}=await A(s,t.meta.salt);try{if(await $(p,t.meta.verifier.ct,t.meta.verifier.iv)!=="ok")throw new Error("Invalid password.");return o(p),u(!0),!0}catch{return!1}},V=()=>{o(null),u(!1),x("")},Z=async s=>{if(!(!d||!n)){H(!0);try{const p={};for(const[C,k]of Object.entries(t.data||{}))try{p[C]=await $(n,k.ct,k.iv)}catch{p[C]=""}const{key:f,saltB64:v}=await A(s),E={};for(const[C,k]of Object.entries(p)){const re=await S(f,k);E[C]={...re,updatedAt:Date.now()}}const te=await S(f,"ok");a({meta:{salt:v,iter:z,verifier:te},data:E}),o(f),u(!0),L(!1)}finally{H(!1)}}};function _(){B({title:"Reset all journal data?",message:"This clears all encrypted entries and settings from this browser. This cannot be undone.",confirmText:"Erase & start fresh",tone:"danger",onConfirm:()=>{try{localStorage.removeItem(K)}catch{}a(null),o(null),u(!1),x("")}})}const Q=async()=>{if(!d||!n)return;const s=await S(n,g),p={...t,data:{...(t==null?void 0:t.data)||{},[l]:{...s,updatedAt:Date.now()}}};a(p),m({title:"Saved",message:`Entry for ${M(l)} saved.`,confirmText:"OK",hideCancel:!0})},X=()=>{B({title:"Delete today’s entry?",message:`Remove the entry for ${M(l)}?`,confirmText:"Delete",tone:"danger",onConfirm:()=>{const s={...t,data:{...(t==null?void 0:t.data)||{}}};delete s.data[l],a(s),x("")}})},ee=()=>{B({title:"Clear ALL entries?",message:"This removes every saved entry permanently (but keeps your password).",confirmText:"Clear all",tone:"danger",onConfirm:()=>a({...t,data:{}})})};return t?d?e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsxs(r.Header,{children:[e.jsxs("div",{children:[e.jsx(r.Title,{children:"Journal / Diary"}),e.jsxs(r.Sub,{children:[N," saved day(s) • AES-GCM encrypted at rest"]})]}),e.jsxs(r.BadgeRow,{children:[e.jsx(r.Badge,{children:"Unlocked"}),e.jsx(r.Button,{onClick:V,children:"Lock"})]})]}),e.jsxs(r.Toolbar,{children:[e.jsxs(r.RowWrap,{children:[e.jsx(r.Button,{type:"button",onClick:()=>h(W(l,-1)),children:"◀ Prev"}),e.jsx(r.Input,{type:"date",value:l,onChange:s=>h(s.target.value||P()),"aria-label":"Selected date",style:{width:160}}),e.jsx(r.Button,{type:"button",onClick:()=>h(P()),children:"Today"}),e.jsx(r.Button,{type:"button",onClick:()=>h(W(l,1)),children:"Next ▶"})]}),e.jsxs(r.RowWrap,{children:[e.jsx(r.PrimaryButton,{onClick:Q,disabled:T||D,children:"Save"}),e.jsx(r.DangerButton,{onClick:X,disabled:T||D,children:"Delete"})]})]}),e.jsxs(r.Card,{children:[e.jsxs(r.ItemMeta,{style:{marginBottom:10},children:[e.jsxs(r.Tag,{children:["#",M(l)]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:D?"Decrypting…":"Write your entry below"})]}),e.jsx(r.TextArea,{placeholder:"Start typing your thoughts…",value:g,onChange:s=>x(s.target.value),spellCheck:"false"})]}),e.jsxs(r.Card,{style:{marginTop:14},children:[e.jsxs(r.RowWrap,{style:{justifyContent:"space-between"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Security"}),e.jsx("div",{style:{opacity:.8,fontSize:12,marginTop:4},children:"Change password (re-encrypts all entries in your browser)."})]}),e.jsx(r.Button,{onClick:()=>L(s=>!s),children:U?"Close":"Change password"})]}),U&&e.jsx(le,{busy:T,onChangePassword:Z})]}),e.jsx(r.RowWrap,{style:{marginTop:14},children:e.jsx(r.DangerButton,{onClick:ee,children:"Clear ALL entries"})}),e.jsx(r.FooterNote,{children:"Zero-knowledge: your password/key never leaves the browser."}),y&&e.jsx(R,{confirm:y,onCancel:()=>m(null),onConfirm:j})]})}):e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsx(r.Header,{children:e.jsxs("div",{children:[e.jsx(r.Title,{children:"Journal / Diary"}),e.jsxs(r.Sub,{children:["Enter password to unlock • ",N," saved day(s)"]})]})}),e.jsx(ie,{onUnlock:q}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:12},children:e.jsx(r.DangerButton,{type:"button",onClick:_,children:"Reset storage (erase all)"})}),e.jsx(r.FooterNote,{children:"Forgot password? There is no recovery (zero-knowledge). You can reset by clearing localStorage."}),y&&e.jsx(R,{confirm:y,onCancel:()=>m(null),onConfirm:j})]})}):e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsx(r.Header,{children:e.jsxs("div",{children:[e.jsx(r.Title,{children:"Journal / Diary"}),e.jsx(r.Sub,{children:"Password-protected • AES-GCM • LocalStorage"})]})}),e.jsx(se,{onSubmit:G}),e.jsx(r.FooterNote,{children:"Data is encrypted in your browser. Keep your password safe."}),y&&e.jsx(R,{confirm:y,onCancel:()=>m(null),onConfirm:j})]})})}function R({confirm:t,onCancel:a,onConfirm:n}){return e.jsx(r.ModalOverlay,{onClick:a,children:e.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:o=>o.stopPropagation(),children:[e.jsx(r.ModalTitle,{id:"confirm-title",children:t.title}),t.message?e.jsx(r.ModalMessage,{children:t.message}):null,e.jsxs(r.ModalActions,{children:[!t.hideCancel&&e.jsx(r.Button,{type:"button",onClick:a,children:t.cancelText||"Cancel"}),t.tone==="danger"?e.jsx(r.DangerButton,{type:"button",onClick:n,autoFocus:!0,children:t.confirmText||"Confirm"}):e.jsx(r.PrimaryButton,{type:"button",onClick:n,autoFocus:!0,children:t.confirmText||"Confirm"})]})]})})}function se({onSubmit:t}){const[a,n]=c.useState(""),[o,d]=c.useState(""),[u,l]=c.useState(""),h=async g=>{if(g.preventDefault(),l(""),a.length<6){l("Password must be at least 6 characters.");return}if(a!==o){l("Passwords do not match.");return}await t(a),n(""),d("")};return e.jsxs(r.Card,{as:"form",onSubmit:h,children:[e.jsxs(r.FormRow,{children:[e.jsx(r.Input,{type:"password",placeholder:"Create password *",value:a,onChange:g=>n(g.target.value),required:!0}),e.jsx(r.Input,{type:"password",placeholder:"Confirm password *",value:o,onChange:g=>d(g.target.value),required:!0}),e.jsx(r.PrimaryButton,{type:"submit",children:"Set password"})]}),e.jsx(r.Helper,{children:"Tip: Minimum 6 characters. This cannot be recovered if lost."}),u&&e.jsx(r.Helper,{style:{color:"hsl(0 70% 70% / 0.9)"},children:u})]})}function ie({onUnlock:t}){const[a,n]=c.useState(""),[o,d]=c.useState(""),u=async l=>{l.preventDefault(),d(""),await t(a)||d("Wrong password. Try again."),n("")};return e.jsxs(r.Card,{as:"form",onSubmit:u,children:[e.jsxs(r.FormRow,{children:[e.jsx(r.Input,{type:"password",placeholder:"Enter password *",value:a,onChange:l=>n(l.target.value),required:!0}),e.jsx(r.PrimaryButton,{type:"submit",children:"Unlock"})]}),o&&e.jsx(r.Helper,{style:{color:"hsl(0 70% 70% / 0.9)"},children:o})]})}function le({busy:t,onChangePassword:a}){const[n,o]=c.useState(""),[d,u]=c.useState(""),[l,h]=c.useState(""),g=async x=>{if(x.preventDefault(),h(""),n.length<6){h("Password must be at least 6 characters.");return}if(n!==d){h("Passwords do not match.");return}await a(n),o(""),u("")};return e.jsxs(r.Card,{as:"form",onSubmit:g,style:{marginTop:12},children:[e.jsxs(r.FormRow,{children:[e.jsx(r.Input,{type:"password",placeholder:"New password *",value:n,onChange:x=>o(x.target.value),required:!0}),e.jsx(r.Input,{type:"password",placeholder:"Confirm new password *",value:d,onChange:x=>u(x.target.value),required:!0}),e.jsx(r.PrimaryButton,{type:"submit",disabled:t,children:t?"Re-encrypting…":"Change password"})]}),l&&e.jsx(r.Helper,{style:{color:"hsl(0 70% 70% / 0.9)"},children:l})]})}function W(t,a){const n=new Date(`${t}T00:00:00`);n.setDate(n.getDate()+a);const o=n.getFullYear(),d=String(n.getMonth()+1).padStart(2,"0"),u=String(n.getDate()).padStart(2,"0");return`${o}-${d}-${u}`}export{pe as default};
