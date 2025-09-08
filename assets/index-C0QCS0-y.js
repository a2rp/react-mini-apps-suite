import{d as n,l as O,r as l,j as e}from"./index-DkC-bgdE.js";const h="1px solid hsl(0 0% 100% / 0.14)",ce="1px solid hsl(0 0% 100% / 0.10)",j="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:n.div`
        min-height: 100dvh;
    `,Container:n.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 32px 18px 84px;
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
        margin: 0 0 6px; /* explicit spacers are used in index.jsx */
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:n.p`
        margin: 0;
        color: inherit;
        opacity: 0.82;
        font-size: 14px;
    `,BulletList:n.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.82;
        line-height: 1.6;
    `,BulletItem:n.li`
        margin: 2px 0;
    `,BadgeRow:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:n.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${ce};
        color: inherit;
        ${({tone:a})=>a==="muted"&&O`
                opacity: 0.7;
            `}
    `,Card:n.div`
        border-radius: 16px;
        padding: 16px;
        border: ${h};
        background: transparent;
    `,Grid:n.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(12, 1fr);
    `,Col:n.div`
        grid-column: span ${({span:a})=>a||12};
        @media (max-width: 900px) {
            grid-column: span 12;
        }
    `,FormRow:n.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:n.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
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
        flex: 1 1 240px;
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
        &[type="date"],
        &[type="time"] {
            color-scheme: dark;
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
            box-shadow: ${j};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,CheckboxRow:n.label`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        input {
            transform: translateY(1px);
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
            box-shadow: ${j};
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
            box-shadow: ${j};
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
            box-shadow: ${j};
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
    `,SectionTitle:n.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,List:n.div`
        display: grid;
        gap: 10px;
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
        ${({$done:a})=>a&&O`
                opacity: 0.8;
                filter: saturate(0.85);
            `}
    `,ItemLeft:n.div`
        display: grid;
        gap: 6px;
        min-width: 0;
    `,ItemRight:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:n.div`
        font-weight: 700;
        color: inherit;
        line-height: 1.2;
    `,ItemMeta:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        flex-wrap: wrap;
    `,BigNumber:n.div`
        font-size: clamp(24px, 5vw, 36px);
        font-weight: 800;
        letter-spacing: -0.02em;
    `,Muted:n.span`
        opacity: 0.75;
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
    `},U="personalDashboard.v1",pe={0:"Clear",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Depositing rime fog",51:"Light drizzle",53:"Drizzle",55:"Dense drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Snow fall",80:"Rain showers",95:"Thunderstorm"},b=()=>{var a;return((a=crypto==null?void 0:crypto.randomUUID)==null?void 0:a.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`},ue=()=>{try{return JSON.parse(localStorage.getItem(U))??{}}catch{return{}}},he=a=>{try{localStorage.setItem(U,JSON.stringify(a))}catch{}},xe=a=>a?new Date(a).toLocaleDateString(void 0,{month:"short",day:"2-digit"}):"";function ye(){const a=ue(),[g,k]=l.useState(a.todos??[]),[p,Y]=l.useState(a.quotes??[{id:b(),text:"What we think, we become.",author:"Buddha"},{id:b(),text:"Simplicity is the ultimate sophistication.",author:"Leonardo da Vinci"},{id:b(),text:"Make it work, make it right, make it fast.",author:"Kent Beck"}]),[m,K]=l.useState(a.city??""),[d,G]=l.useState(a.weather??null),[z,w]=l.useState(!1),[v,$]=l.useState(""),[R,q]=l.useState(""),[F,N]=l.useState(""),[T,J]=l.useState(""),[C,V]=l.useState("All"),[S,Z]=l.useState("created"),[D,E]=l.useState(""),[P,Q]=l.useState(""),[L,A]=l.useState(a.quoteIndex??0);l.useEffect(()=>{he({todos:g,quotes:p,city:m,weather:d,quoteIndex:L})},[g,p,m,d,L]);const B=p.length?p[(L%p.length+p.length)%p.length]:null,W=async(i,o)=>{var r,u,x,y,_,H;try{w(!0);const se=`https://api.open-meteo.com/v1/forecast?latitude=${i}&longitude=${o}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,c=await(await fetch(se)).json(),de={at:Date.now(),name:m||"Your location",lat:i,lon:o,temp:((r=c==null?void 0:c.current)==null?void 0:r.temperature_2m)??null,code:((u=c==null?void 0:c.current)==null?void 0:u.weather_code)??null,min:((y=(x=c==null?void 0:c.daily)==null?void 0:x.temperature_2m_min)==null?void 0:y[0])??null,max:((H=(_=c==null?void 0:c.daily)==null?void 0:_.temperature_2m_max)==null?void 0:H[0])??null};G(de)}catch{}finally{w(!1)}},X=async i=>{var o;try{if(!i.trim())return;w(!0);const r=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(i)}&count=1`,x=await(await fetch(r)).json(),y=(o=x==null?void 0:x.results)==null?void 0:o[0];if(!y)return;await W(y.latitude,y.longitude)}catch{}finally{w(!1)}},ee=()=>{"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(i=>{const{latitude:o,longitude:r}=i.coords||{};W(o,r)},()=>{})},te=i=>{var u;(u=i==null?void 0:i.preventDefault)==null||u.call(i);const o=(v||"").trim();if(!o)return;const r={id:b(),title:o,due:R.trim(),notes:(F||"").trim(),done:!1,createdAt:Date.now(),updatedAt:Date.now(),completedAt:""};k(x=>[r,...x]),$(""),q(""),N("")},ie=i=>{k(o=>o.map(r=>r.id===i?{...r,done:!r.done,completedAt:r.done?"":new Date().toISOString().slice(0,10),updatedAt:Date.now()}:r))},ne=i=>{le({onConfirm:()=>k(o=>o.filter(r=>r.id!==i))})},I=l.useMemo(()=>{let i=g.slice();if(C!=="All"&&(i=i.filter(o=>C==="Done"?o.done:!o.done)),T.trim()){const o=T.toLowerCase();i=i.filter(r=>(r.title||"").toLowerCase().includes(o)||(r.notes||"").toLowerCase().includes(o))}return S==="title"?i.sort((o,r)=>o.title.localeCompare(r.title)):S==="due"?i.sort((r,u)=>new Date(r.due||864e13)-new Date(u.due||864e13)||r.title.localeCompare(u.title)):i.sort((o,r)=>r.createdAt-o.createdAt),i},[g,C,T,S]),oe=i=>{var r;(r=i==null?void 0:i.preventDefault)==null||r.call(i);const o=(D||"").trim();o&&(Y(u=>[{id:b(),text:o,author:(P||"").trim()},...u]),E(""),Q(""),A(0))},re=()=>A(i=>(i+1)%(p.length||1)),ae=()=>A(i=>(i-1+(p.length||1))%(p.length||1)),[s,f]=l.useState(null),le=i=>f({title:"Delete task?",message:"This will remove it from your list.",confirmText:"Delete",cancelText:"Cancel",tone:"danger",hideCancel:!1,onConfirm:null,...i}),M=()=>{const i=s==null?void 0:s.onConfirm;f(null),typeof i=="function"&&i()};return l.useEffect(()=>{if(!s)return;const i=o=>{o.key==="Escape"&&f(null),o.key==="Enter"&&M()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[s]),e.jsx(t.Page,{children:e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Personal Dashboard"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Sub,{children:"A simple homepage that surfaces your day at a glance — quick weather, a focused to-do list, and rotating inspirational quotes. To-dos and quotes are saved locally (offline-friendly)."}),e.jsx("div",{style:{height:6}}),e.jsxs(t.BulletList,{"aria-label":"How to use steps",children:[e.jsx(t.BulletItem,{children:"Type a task, optionally set a due date, then click Add."}),e.jsx(t.BulletItem,{children:"Fetch weather by city or use your location (optional)."}),e.jsx(t.BulletItem,{children:"Add your own quotes or cycle through existing ones."}),e.jsx(t.BulletItem,{children:"Scroll to the To-Do Results to search, filter, and sort your tasks."})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(t.BadgeRow,{children:[e.jsxs(t.Tag,{tone:"muted",children:["Tasks: ",g.length]}),e.jsxs(t.Tag,{children:["Quotes: ",p.length]}),e.jsx(t.Tag,{tone:"muted",children:d?"Weather ready":"Weather idle"})]})]}),e.jsxs(t.Grid,{children:[e.jsx(t.Col,{span:6,children:e.jsxs(t.Card,{children:[e.jsx(t.SectionTitle,{children:"Weather"}),e.jsx("div",{style:{height:8}}),e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Enter a city name (e.g., Kolkata)",children:[e.jsx(t.LabelText,{children:"City"}),e.jsx(t.Input,{placeholder:"e.g., Kolkata",value:m,onChange:i=>K(i.target.value),"aria-label":"City"})]}),e.jsxs(t.RowWrap,{style:{marginTop:2},children:[e.jsx(t.PrimaryButton,{type:"button",onClick:()=>X(m),disabled:!m.trim()||z,title:"Fetch weather by city name",children:z?"Fetching…":"Fetch"}),e.jsx(t.Button,{type:"button",onClick:ee,title:"Use current location",children:"Use my location"})]})]}),e.jsx("div",{style:{marginTop:10},children:d?e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,flexWrap:"wrap"},children:[e.jsxs(t.BigNumber,{children:[d.temp!=null?Math.round(d.temp):"--","°C"]}),e.jsx("div",{style:{fontSize:14,opacity:.9},children:pe[d.code]||"—"})]}),e.jsxs(t.ItemMeta,{style:{marginTop:6},children:[e.jsxs(t.Tag,{children:["#",d.name]}),e.jsx("span",{children:"•"}),e.jsxs(t.Tag,{tone:"muted",children:["Min ",d.min!=null?Math.round(d.min):"--","° / Max"," ",d.max!=null?Math.round(d.max):"--","°"]})]}),e.jsxs(t.Helper,{style:{marginTop:8},children:["Cached locally at ",new Date(d.at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),"."]})]}):e.jsx(t.Helper,{children:"Tip: Weather is optional. Enter a city and click Fetch, or use your location."})})]})}),e.jsx(t.Col,{span:6,children:e.jsxs(t.Card,{children:[e.jsx(t.SectionTitle,{children:"Quotes"}),e.jsx("div",{style:{height:8}}),B?e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsxs("div",{style:{fontSize:"clamp(16px, 2.2vw, 20px)",lineHeight:1.6},children:['"',B.text,'"']}),e.jsxs(t.Muted,{children:["— ",B.author||"Unknown"]})]}):e.jsx(t.Empty,{children:"No quotes yet. Add one below."}),e.jsxs(t.RowWrap,{style:{marginTop:10},children:[e.jsx(t.Button,{type:"button",onClick:ae,title:"Previous quote",children:"Previous"}),e.jsx(t.Button,{type:"button",onClick:re,title:"Next quote",children:"Next"})]}),e.jsxs("div",{style:{marginTop:12},children:[e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Quote text",children:[e.jsx(t.LabelText,{children:"Add Quote"}),e.jsx(t.TextArea,{placeholder:'e.g., "Stay hungry, stay foolish."',value:D,onChange:i=>E(i.target.value),"aria-label":"New quote text"})]}),e.jsxs(t.Label,{title:"Who said it?",children:[e.jsx(t.LabelText,{children:"Author"}),e.jsx(t.Input,{placeholder:"e.g., Steve Jobs",value:P,onChange:i=>Q(i.target.value),"aria-label":"New quote author"})]})]}),e.jsx(t.ButtonRow,{children:e.jsx(t.PrimaryButton,{type:"button",onClick:oe,disabled:!D.trim(),children:"Add"})})]})]})})]}),e.jsx("div",{style:{marginTop:16}}),e.jsxs(t.Card,{as:"form",onSubmit:te,children:[e.jsx(t.SectionTitle,{children:"To-Do"}),e.jsx("div",{style:{height:8}}),e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Task title (required)",children:[e.jsx(t.LabelText,{children:"Title *"}),e.jsx(t.Input,{placeholder:"e.g., Prepare slides for demo",value:v,onChange:i=>$(i.target.value),"aria-label":"Todo title",required:!0})]}),e.jsxs(t.Label,{title:"Optional due date",children:[e.jsx(t.LabelText,{children:"Due"}),e.jsx(t.Input,{type:"date",value:R,onChange:i=>q(i.target.value),"aria-label":"Due date"})]})]}),e.jsxs(t.Label,{style:{width:"100%",marginTop:8},title:"Optional notes",children:[e.jsx(t.LabelText,{children:"Notes"}),e.jsx(t.TextArea,{placeholder:"Details, links, or steps…",value:F,onChange:i=>N(i.target.value),"aria-label":"Notes"})]}),!v.trim()&&e.jsx(t.Helper,{children:"Tip: Title is required."}),e.jsx(t.ButtonRow,{children:e.jsx(t.PrimaryButton,{type:"submit",disabled:!v.trim(),children:"Add"})})]}),e.jsx("div",{style:{marginTop:24}}),e.jsx(t.SectionTitle,{children:"Results"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Card,{children:e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Search across title and notes",children:[e.jsx(t.LabelText,{children:"Search"}),e.jsx(t.Input,{placeholder:"Search tasks…",value:T,onChange:i=>J(i.target.value),"aria-label":"Search"})]}),e.jsxs(t.Label,{title:"Filter by status",children:[e.jsx(t.LabelText,{children:"Status"}),e.jsx(t.Select,{value:C,onChange:i=>V(i.target.value),"aria-label":"Status",children:["All","Active","Done"].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs(t.Label,{title:"Sort the list",children:[e.jsx(t.LabelText,{children:"Sort by"}),e.jsxs(t.Select,{value:S,onChange:i=>Z(i.target.value),"aria-label":"Sort by",children:[e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"title",children:"Title A–Z"}),e.jsx("option",{value:"due",children:"Due date (early → late)"})]})]})]})}),e.jsx("div",{style:{height:10}}),e.jsxs(t.List,{children:[I.length===0&&g.length===0&&e.jsx(t.Empty,{children:"No tasks yet. Add your first!"}),I.length===0&&g.length>0&&e.jsx(t.Empty,{children:"No tasks match your current filters. Try adjusting them."}),I.map(i=>e.jsxs(t.Item,{$done:i.done,children:[e.jsxs(t.ItemLeft,{children:[e.jsxs(t.ItemTitle,{children:[i.done?"✅ ":"",i.title]}),e.jsxs(t.ItemMeta,{children:[i.due?e.jsxs(t.Tag,{children:["Due ",xe(i.due)]}):e.jsx(t.Tag,{tone:"muted",children:"No due"}),e.jsx("span",{children:"•"}),e.jsx(t.Tag,{tone:"muted",children:i.done?`Done ${i.completedAt||""}`:"Active"})]}),i.notes?e.jsx("div",{style:{marginTop:4,fontSize:13,opacity:.9},children:i.notes}):null]}),e.jsxs(t.ItemRight,{children:[e.jsx(t.Button,{type:"button",onClick:()=>ie(i.id),children:i.done?"Mark Active":"Mark Done"}),e.jsx(t.Button,{type:"button",onClick:()=>ne(i.id),children:"Delete"})]})]},i.id))]}),e.jsx(t.FooterNote,{children:"To-Dos & Quotes are saved in LocalStorage. Weather is fetched on demand and cached locally."}),s&&e.jsx(t.ModalOverlay,{onClick:()=>f(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:i=>i.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:s.title}),s.message?e.jsx(t.ModalMessage,{children:s.message}):null,e.jsxs(t.ModalActions,{children:[!s.hideCancel&&e.jsx(t.Button,{type:"button",onClick:()=>f(null),children:s.cancelText||"Cancel"}),s.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:M,autoFocus:!0,children:s.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:M,autoFocus:!0,children:s.confirmText||"Confirm"})]})]})})]})})}export{ye as default};
