import{d as n,l as me,r as s,j as e}from"./index-VpWi7Hcw.js";const h="1px solid hsl(0 0% 100% / 0.14)",re="1px solid hsl(0 0% 100% / 0.10)",S="0 0 0 3px hsl(0 0% 100% / 0.15)",i={Page:n.div`
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
        margin: 15px 0;
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
        border: ${re};
        color: inherit;
        ${({tone:a})=>a==="muted"&&me`
                opacity: 0.7;
            `}
    `,DueHint:n.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${re};
    `,Card:n.div`
        border-radius: 16px;
        padding: 16px;
        border: ${h};
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
        border: ${h};
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
        border: ${h};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${S};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:n.textarea`
        background: transparent;
        color: inherit;
        border: ${h};
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
            box-shadow: ${S};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:n.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:n.button`
        border: ${h};
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
            box-shadow: ${S};
        }
    `,Button:n.button`
        border: ${h};
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
            box-shadow: ${S};
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
        border: ${h};
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
        margin-top: 100px;
        margin-bottom: 30px;
    `,Empty:n.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${h};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:n.div`
        display: grid;
        grid-template-columns: ${({$edit:a})=>a?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${h};
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
        border: ${h};
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
    `,Divider:n.div`
        margin: 50px;
    `},le="giftIdeas.v1",H=["Idea","Considering","To Buy","Purchased","Wrapped","Gifted"],ae=()=>{var a;return((a=crypto==null?void 0:crypto.randomUUID)==null?void 0:a.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`},C=()=>{const a=new Date,p=a.getFullYear(),x=String(a.getMonth()+1).padStart(2,"0"),g=String(a.getDate()).padStart(2,"0");return`${p}-${x}-${g}`},K=a=>a?new Date(`${a}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}):"",fe=a=>{if(!a)return null;const p=new Date;p.setHours(0,0,0,0);const x=new Date(`${a}T00:00:00`);return Math.round((x-p)/(1e3*60*60*24))},ne=a=>{const p=Number(a);if(!isFinite(p))return"";try{return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(p)}catch{return`₹${p.toFixed(0)}`}},be=()=>{try{return JSON.parse(localStorage.getItem(le))??[]}catch{return[]}},je=a=>{try{localStorage.setItem(le,JSON.stringify(a))}catch{}};function we(){const[a,p]=s.useState(()=>be()),[x,g]=s.useState(""),[b,j]=s.useState(""),[M,T]=s.useState(""),[P,k]=s.useState(""),[y,L]=s.useState("Idea"),[$,A]=s.useState(3),[B,I]=s.useState(""),[R,D]=s.useState(""),[F,N]=s.useState(""),[v,d]=s.useState(""),[E,J]=s.useState("All"),[G,Z]=s.useState("All"),[O,_]=s.useState("All"),[q,Q]=s.useState(""),[Y,V]=s.useState(""),[m,X]=s.useState("created"),[se,U]=s.useState(null),[f,w]=s.useState(null);s.useEffect(()=>{je(a)},[a]);const ee=s.useMemo(()=>Array.from(new Set(a.map(t=>t.recipient).filter(Boolean))).sort(),[a]),oe=s.useMemo(()=>Array.from(new Set(a.map(t=>t.occasion).filter(Boolean))).sort(),[a]),z=s.useMemo(()=>{const t=a.length,o=a.filter(l=>l.status==="Purchased").length,c=a.filter(l=>l.status==="Gifted").length,r=a.filter(l=>l.status!=="Gifted"&&Number(l.price)>0).reduce((l,u)=>l+Number(u.price),0);return{total:t,purchased:o,gifted:c,plannedSpend:r}},[a]),W=s.useMemo(()=>{let t=a.slice();E!=="All"&&(t=t.filter(r=>r.recipient===E)),G!=="All"&&(t=t.filter(r=>r.status===G)),O!=="All"&&(t=t.filter(r=>r.occasion===O));const o=Number(q),c=Number(Y);if(!Number.isNaN(o)&&o>0&&(t=t.filter(r=>Number(r.price)>=o)),!Number.isNaN(c)&&c>0&&(t=t.filter(r=>Number(r.price)<=c)),v.trim()){const r=v.toLowerCase();t=t.filter(l=>(l.title||"").toLowerCase().includes(r)||(l.recipient||"").toLowerCase().includes(r)||(l.occasion||"").toLowerCase().includes(r)||(l.notes||"").toLowerCase().includes(r))}if(m==="title")t.sort((r,l)=>r.title.localeCompare(l.title));else if(m==="recipient")t.sort((r,l)=>r.recipient.localeCompare(l.recipient)||r.title.localeCompare(l.title));else if(m==="price")t.sort((r,l)=>(Number(r.price)||0)-(Number(l.price)||0));else if(m==="priority")t.sort((r,l)=>(Number(l.priority)||0)-(Number(r.priority)||0));else if(m==="due"){const r=new Date("9999-12-31");t.sort((l,u)=>(l.due?new Date(`${l.due}T00:00:00`):r)-(u.due?new Date(`${u.due}T00:00:00`):r)||l.title.localeCompare(u.title))}else if(m==="status"){const r=Object.fromEntries(H.map((l,u)=>[l,u]));t.sort((l,u)=>r[l.status]-r[u.status]||l.title.localeCompare(u.title))}else t.sort((r,l)=>l.createdAt-r.createdAt);return t},[a,E,G,O,q,Y,v,m]),te=()=>{J("All"),Z("All"),_("All"),Q(""),V(""),d(""),X("created")},de=t=>{var l;(l=t==null?void 0:t.preventDefault)==null||l.call(t);const o=x.trim(),c=b.trim();if(!o||!c)return;const r={id:ae(),title:o,recipient:c,link:M.trim(),price:Number(P)||0,status:y,priority:Number($)||3,occasion:B.trim(),due:R.trim(),notes:F.trim(),createdAt:Date.now(),updatedAt:Date.now(),purchasedAt:y==="Purchased"?C():"",giftedAt:y==="Gifted"?C():""};p(u=>[r,...u]),g(""),j(""),T(""),k(""),L("Idea"),A(3),I(""),D(""),N("")},ce=t=>U(t),pe=()=>U(null),ue=(t,o)=>{p(c=>c.map(r=>r.id===t?{...r,...o,price:Number(o.price??r.price)||0,priority:Number(o.priority??r.priority)||0,purchasedAt:(o.status??r.status)==="Purchased"?r.purchasedAt||C():"",giftedAt:(o.status??r.status)==="Gifted"?r.giftedAt||C():"",updatedAt:Date.now()}:r)),U(null)},xe=t=>{w({title:"Delete gift idea?",message:"This will remove it from your list.",tone:"danger",confirmText:"Delete",onConfirm:()=>{p(o=>o.filter(c=>c.id!==t)),w(null)}})},he=()=>{a.length&&w({title:"Clear all gift ideas?",message:"This will delete every idea from your list.",tone:"danger",confirmText:"Clear All",onConfirm:()=>{p([]),te(),w(null)}})},ge=t=>{const o=a.find(r=>r.id===t);if(!o)return;const c={...o,id:ae(),title:`${o.title} (copy)`,status:"Idea",purchasedAt:"",giftedAt:"",createdAt:Date.now(),updatedAt:Date.now()};p(r=>[c,...r])},ie=(t,o)=>{p(c=>c.map(r=>r.id===t?{...r,status:o,purchasedAt:o==="Purchased"?r.purchasedAt||C():"",giftedAt:o==="Gifted"?r.giftedAt||C():"",updatedAt:Date.now()}:r))};return e.jsx(i.Page,{children:e.jsxs(i.Container,{children:[e.jsxs(i.Header,{children:[e.jsxs("div",{children:[e.jsx(i.Title,{children:"Gift Idea List"}),e.jsx(i.Sub,{children:"Keep thoughtful gift ideas organised by person, occasion, and priority. Track price, link, status, and due dates-all stored locally in your browser."}),e.jsx(i.Sub,{style:{marginTop:6},children:"How to use: add a gift idea with recipient, optional price and link. Filter by recipient, occasion, status, or price range; sort by priority, due date, or more. Mark items as Purchased or Gifted, duplicate similar ideas, and clear the list with a confirmation when needed."})]}),e.jsxs(i.BadgeRow,{children:[e.jsxs(i.Tag,{children:["Total: ",z.total]}),e.jsxs(i.Tag,{children:["Purchased: ",z.purchased]}),e.jsxs(i.Tag,{children:["Gifted: ",z.gifted]}),e.jsxs(i.Tag,{tone:"muted",children:["Planned spend: ",ne(z.plannedSpend)]})]})]}),e.jsxs(i.Card,{as:"form",onSubmit:de,children:[e.jsxs(i.FormRow,{children:[e.jsxs(i.Label,{title:"What is the gift?",children:[e.jsx(i.LabelText,{children:"Gift title *"}),e.jsx(i.Input,{placeholder:"e.g., Wireless headphones",value:x,onChange:t=>g(t.target.value),"aria-label":"Gift title",required:!0})]}),e.jsxs(i.Label,{title:"Who is this for?",children:[e.jsx(i.LabelText,{children:"Recipient *"}),e.jsx(i.Input,{placeholder:"e.g., Mom",value:b,onChange:t=>j(t.target.value),list:"recipient-suggestions","aria-label":"Recipient",required:!0}),e.jsx("datalist",{id:"recipient-suggestions",children:ee.map(t=>e.jsx("option",{value:t},t))})]}),e.jsxs(i.Label,{title:"Optional web link to the product",children:[e.jsx(i.LabelText,{children:"Link"}),e.jsx(i.Input,{placeholder:"https://example.com/product",value:M,onChange:t=>T(t.target.value),"aria-label":"Link"})]}),e.jsxs(i.Label,{title:"Approximate price in INR",children:[e.jsx(i.LabelText,{children:"Price (₹)"}),e.jsx(i.Input,{type:"number",inputMode:"numeric",placeholder:"0",value:P,onChange:t=>k(t.target.value.replace(/[^\d]/g,"")),"aria-label":"Price"})]}),e.jsxs(i.Label,{title:"Current status",children:[e.jsx(i.LabelText,{children:"Status"}),e.jsx(i.Select,{value:y,onChange:t=>L(t.target.value),"aria-label":"Status",children:H.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(i.Label,{title:"Priority (1 low – 5 high)",children:[e.jsx(i.LabelText,{children:"Priority"}),e.jsx(i.Select,{value:$,onChange:t=>A(t.target.value),"aria-label":"Priority",children:[1,2,3,4,5].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs(i.Label,{title:"Occasion name (optional)",children:[e.jsx(i.LabelText,{children:"Occasion"}),e.jsx(i.Input,{placeholder:"e.g., Birthday",value:B,onChange:t=>I(t.target.value),list:"occasion-suggestions","aria-label":"Occasion"}),e.jsx("datalist",{id:"occasion-suggestions",children:["Birthday","Anniversary","Diwali","Christmas","New Year","Graduation","Housewarming"].map(t=>e.jsx("option",{value:t},t))})]}),e.jsxs(i.Label,{title:"When is it needed by?",children:[e.jsx(i.LabelText,{children:"Due date"}),e.jsx(i.Input,{type:"date",value:R,onChange:t=>D(t.target.value),"aria-label":"Due date"})]}),e.jsx(i.PrimaryButton,{type:"submit",disabled:!x.trim()||!b.trim(),children:"Add"})]}),e.jsxs(i.Label,{style:{width:"100%",marginTop:8},title:"Optional notes for this gift",children:[e.jsx(i.LabelText,{children:"Notes"}),e.jsx(i.TextArea,{placeholder:"Any details, sizes, colours, store names…",value:F,onChange:t=>N(t.target.value),"aria-label":"Notes"})]}),!x.trim()||!b.trim()?e.jsx(i.Helper,{children:"Tip: Gift title and recipient are required."}):null]}),e.jsxs(i.SectionBar,{children:[e.jsx(i.SectionTitle,{children:"Gift ideas"}),e.jsx(i.DangerButton,{type:"button",onClick:he,title:"Delete all ideas",children:"Clear All"})]}),e.jsx(i.Divider,{}),e.jsxs(i.FilterBar,{children:[e.jsx(i.Select,{value:E,onChange:t=>J(t.target.value),"aria-label":"Filter by recipient",title:"Filter by recipient",style:{flex:"0 1 180px"},children:["All",...ee].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx(i.Select,{value:G,onChange:t=>Z(t.target.value),"aria-label":"Filter by status",title:"Filter by status",style:{flex:"0 1 180px"},children:["All",...H].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs(i.Select,{value:O,onChange:t=>_(t.target.value),"aria-label":"Filter by occasion",title:"Filter by occasion",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"All",children:"All occasions"}),oe.map(t=>e.jsx("option",{value:t,children:t},t))]}),e.jsx(i.Input,{placeholder:"Min ₹",value:q,onChange:t=>Q(t.target.value.replace(/[^\d]/g,"")),"aria-label":"Min price",style:{flex:"0 1 110px"},title:"Minimum price"}),e.jsx(i.Input,{placeholder:"Max ₹",value:Y,onChange:t=>V(t.target.value.replace(/[^\d]/g,"")),"aria-label":"Max price",style:{flex:"0 1 110px"},title:"Maximum price"}),e.jsxs(i.Select,{value:m,onChange:t=>X(t.target.value),"aria-label":"Sort",title:"Sort",style:{flex:"0 1 220px"},children:[e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"title",children:"Title A–Z"}),e.jsx("option",{value:"recipient",children:"Recipient A–Z"}),e.jsx("option",{value:"price",children:"Price (low → high)"}),e.jsx("option",{value:"priority",children:"Priority (high → low)"}),e.jsx("option",{value:"due",children:"Due date (early → late)"}),e.jsx("option",{value:"status",children:"By status"})]}),e.jsx(i.Input,{placeholder:"Search title/recipient/occasion/notes…",value:v,onChange:t=>d(t.target.value),"aria-label":"Search",style:{flex:"2 1 320px"},title:"Keyword search"}),e.jsx(i.Button,{type:"button",onClick:te,title:"Reset filters",children:"Reset"})]}),e.jsx(i.Divider,{}),e.jsxs(i.List,{children:[W.length===0&&a.length===0&&e.jsx(i.Empty,{children:"No gift ideas yet. Add your first!"}),W.length===0&&a.length>0&&e.jsx(i.Empty,{children:"No ideas match your current filters. Try Reset."}),W.map(t=>{const o=fe(t.due),c=o===null?null:o===0?"Due today":o>0?`Due in ${o} day${o===1?"":"s"}`:`${Math.abs(o)} day${Math.abs(o)===1?"":"s"} overdue`;return se===t.id?e.jsx(ye,{item:t,onCancel:pe,onSave:ue},t.id):e.jsxs(i.Item,{children:[e.jsx(i.ItemLeft,{children:e.jsxs("div",{children:[e.jsx(i.ItemTitle,{children:t.title}),e.jsxs(i.ItemMeta,{children:[e.jsxs(i.Tag,{children:["#",t.recipient||"Unknown"]}),e.jsx("span",{children:"•"}),e.jsxs(i.Tag,{children:["#",t.status]}),e.jsx("span",{children:"•"}),e.jsxs(i.Tag,{children:["Priority ",t.priority]}),t.occasion?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(i.Tag,{children:["#",t.occasion]})]}):null,t.due?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(i.DueHint,{children:[K(t.due),c?` • ${c}`:""]})]}):null,Number(t.price)>0?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx(i.Tag,{children:ne(t.price)})]}):null,t.giftedAt?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(i.DueHint,{children:["Gifted ",K(t.giftedAt)]})]}):t.purchasedAt?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(i.DueHint,{children:["Purchased ",K(t.purchasedAt)]})]}):null]}),t.notes?e.jsx("div",{style:{marginTop:6,fontSize:13,opacity:.9},children:t.notes}):null]})}),e.jsxs(i.ItemRight,{children:[t.link?e.jsx(i.Button,{onClick:()=>window.open(t.link,"_blank","noopener,noreferrer"),title:"Open link",children:"Open link"}):null,t.status!=="Purchased"&&t.status!=="Gifted"?e.jsx(i.Button,{onClick:()=>ie(t.id,"Purchased"),title:"Mark as Purchased",children:"Mark Purchased"}):null,t.status!=="Gifted"?e.jsx(i.Button,{onClick:()=>ie(t.id,"Gifted"),title:"Mark as Gifted",children:"Mark Gifted"}):null,e.jsx(i.IconButton,{title:"Duplicate",onClick:()=>ge(t.id),children:"📄"}),e.jsx(i.IconButton,{title:"Edit",onClick:()=>ce(t.id),children:"✏️"}),e.jsx(i.IconButton,{title:"Delete",onClick:()=>xe(t.id),children:"🗑️"})]})]},t.id)})]}),e.jsx(i.FooterNote,{children:"Data stays in your browser (LocalStorage). Refresh-safe."}),f&&e.jsx(i.ModalOverlay,{onClick:()=>w(null),children:e.jsxs(i.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(i.ModalTitle,{id:"confirm-title",children:f.title}),f.message?e.jsx(i.ModalMessage,{children:f.message}):null,e.jsxs(i.ModalActions,{children:[!f.hideCancel&&e.jsx(i.Button,{type:"button",onClick:()=>w(null),children:f.cancelText||"Cancel"}),e.jsx(i.DangerButton,{type:"button",onClick:f.onConfirm,autoFocus:!0,children:f.confirmText||"Confirm"})]})]})})]})})}function ye({item:a,onCancel:p,onSave:x}){const[g,b]=s.useState(a.title),[j,M]=s.useState(a.recipient),[T,P]=s.useState(a.link||""),[k,y]=s.useState(a.price||""),[L,$]=s.useState(a.status),[A,B]=s.useState(a.priority||3),[I,R]=s.useState(a.occasion||""),[D,F]=s.useState(a.due||""),[N,v]=s.useState(a.notes||"");return e.jsx(i.Item,{as:"form",$edit:!0,onSubmit:d=>{d.preventDefault(),!(!g.trim()||!j.trim())&&x(a.id,{title:g.trim(),recipient:j.trim(),link:T.trim(),price:Number(k)||0,status:L,priority:Number(A)||0,occasion:I.trim(),due:D,notes:N.trim()})},children:e.jsxs(i.ItemLeft,{style:{flexDirection:"column",gap:12},children:[e.jsxs(i.FormRow,{children:[e.jsxs(i.Label,{title:"Edit gift title",children:[e.jsx(i.LabelText,{children:"Gift title *"}),e.jsx(i.Input,{value:g,onChange:d=>b(d.target.value),placeholder:"Gift title",required:!0})]}),e.jsxs(i.Label,{title:"Edit recipient",children:[e.jsx(i.LabelText,{children:"Recipient *"}),e.jsx(i.Input,{value:j,onChange:d=>M(d.target.value),placeholder:"Recipient",required:!0})]}),e.jsxs(i.Label,{title:"Edit link",children:[e.jsx(i.LabelText,{children:"Link"}),e.jsx(i.Input,{value:T,onChange:d=>P(d.target.value),placeholder:"https://…"})]}),e.jsxs(i.Label,{title:"Edit price",children:[e.jsx(i.LabelText,{children:"Price (₹)"}),e.jsx(i.Input,{type:"number",inputMode:"numeric",value:k,onChange:d=>y(d.target.value),placeholder:"0"})]}),e.jsxs(i.Label,{title:"Edit status",children:[e.jsx(i.LabelText,{children:"Status"}),e.jsx(i.Select,{value:L,onChange:d=>$(d.target.value),children:H.map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs(i.Label,{title:"Edit priority",children:[e.jsx(i.LabelText,{children:"Priority"}),e.jsx(i.Select,{value:A,onChange:d=>B(d.target.value),children:[1,2,3,4,5].map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs(i.Label,{title:"Edit occasion",children:[e.jsx(i.LabelText,{children:"Occasion"}),e.jsx(i.Input,{value:I,onChange:d=>R(d.target.value),placeholder:"Occasion"})]}),e.jsxs(i.Label,{title:"Edit due date",children:[e.jsx(i.LabelText,{children:"Due date"}),e.jsx(i.Input,{type:"date",value:D,onChange:d=>F(d.target.value)})]})]}),e.jsxs(i.Label,{style:{width:"100%"},title:"Edit notes",children:[e.jsx(i.LabelText,{children:"Notes"}),e.jsx(i.TextArea,{value:N,onChange:d=>v(d.target.value),placeholder:"Notes"})]}),e.jsxs(i.ButtonRow,{children:[e.jsx(i.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(i.Button,{type:"button",onClick:p,children:"Cancel"})]})]})})}export{we as default};
