import{d as o,l as Z,r as s,j as e,R as pe}from"./index-nahrugLd.js";const u="1px solid hsl(0 0% 100% / 0.14)",he="1px solid hsl(0 0% 100% / 0.10)",S="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:o.div`
        min-height: 100dvh;
    `,Container:o.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 72px;
    `,Header:o.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,Title:o.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px; /* extra spacer divs used in index.jsx per your rule */
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:o.p`
        margin: 0;
        color: inherit;
        opacity: 0.8;
        font-size: 14px;
    `,BulletList:o.ul`
        margin: 0;
        padding-left: 18px; /* indent for bullets */
        list-style: disc outside; /* standard bullets */
        font-size: 14px;
        opacity: 0.8;
        line-height: 1.6;
    `,BulletItem:o.li`
        margin: 2px 0;
    `,BadgeRow:o.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:o.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${he};
        color: inherit;
        ${({tone:i})=>i==="muted"&&Z`
                opacity: 0.7;
            `}
    `,Card:o.div`
        border-radius: 16px;
        padding: 16px;
        border: ${u};
        background: transparent;
    `,FormRow:o.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:o.div`
        /* border: 1px solid #f00; */
        margin-top: 25px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,ButtonRow:o.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Label:o.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 240px;
    `,LabelText:o.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:o.input`
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
            box-shadow: ${S};
            border-color: hsl(0 0% 100% / 0.35);
        }
        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin_button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type="number"] {
            -moz-appearance: textfield;
        }
    `,Select:o.select`
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
            box-shadow: ${S};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:o.textarea`
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
            box-shadow: ${S};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:o.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:o.button`
        border: ${u};
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
    `,Button:o.button`
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
            box-shadow: ${S};
        }
    `,DangerButton:o.button`
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
    `,List:o.div`
        display: grid;
        gap: 10px;
    `,SectionTitle:o.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,SectionBar:o.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin: 14px 0 6px;
    `,Empty:o.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${u};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:o.div`
        display: grid;
        grid-template-columns: ${({$edit:i})=>i?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${u};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
        ${({$favorite:i})=>i&&Z`
                box-shadow: 0 0 0 3px hsl(50 90% 60% / 0.25);
                border-color: hsl(50 90% 60% / 0.6);
            `}
    `,ItemLeft:o.div`
        display: grid;
        gap: 8px;
        min-width: 0;
    `,ItemRight:o.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,QuoteText:o.blockquote`
        margin: 0;
        font-size: clamp(16px, 2.4vw, 20px);
        line-height: 1.6;
        opacity: 0.95;
        quotes: "“" "”" "‘" "’";
        &:before {
            content: open-quote;
            margin-right: 2px;
        }
        &:after {
            content: close-quote;
            margin-left: 2px;
        }
    `,ItemMeta:o.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        flex-wrap: wrap;
    `,FooterNote:o.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:o.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:o.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${u};
        background: transparent;
    `,ModalTitle:o.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:o.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:o.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `,Toast:o.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${u};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
    `},ee="quoteCollector.v1",te=[1,2,3,4,5],V=()=>{var i;return((i=crypto==null?void 0:crypto.randomUUID)==null?void 0:i.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`},xe=()=>{try{return JSON.parse(localStorage.getItem(ee))??[]}catch{return[]}},ge=i=>{try{localStorage.setItem(ee,JSON.stringify(i))}catch{}};function q(i){return Array.from(new Set((i||"").split(/[,\s]+/).map(d=>d.trim().toLowerCase()).filter(Boolean)))}const re=(i=[])=>(i||[]).join(", ");function be(){const[i,d]=s.useState(()=>xe()),[D,m]=s.useState(!1),x=s.useRef(null);s.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const[g,L]=s.useState(""),[j,A]=s.useState(""),[v,k]=s.useState(""),[y,R]=s.useState(""),[w,B]=s.useState(""),[T,F]=s.useState(5),[C,I]=s.useState(!1),[n,U]=s.useState(""),[M,H]=s.useState(""),[N,P]=s.useState("All"),[$,W]=s.useState("All"),[Q,G]=s.useState(!1),[E,J]=s.useState(1),[f,_]=s.useState("created"),[ae,Y]=s.useState(null),[p,b]=s.useState(null);s.useEffect(()=>{ge(i)},[i]);const z=s.useMemo(()=>Array.from(new Set(i.map(r=>r.author).filter(Boolean))).sort(),[i]),ie=s.useMemo(()=>Array.from(new Set(i.flatMap(r=>r.tags||[]))).sort(),[i]),K=s.useMemo(()=>{const r=i.length,a=i.filter(c=>c.favorite).length,l=z.length;return{total:r,favs:a,authors:l}},[i,z]),O=s.useMemo(()=>{let r=i.slice();if(Q&&(r=r.filter(a=>a.favorite)),N!=="All"&&(r=r.filter(a=>a.author===N)),$!=="All"&&(r=r.filter(a=>(a.tags||[]).includes($))),E>1&&(r=r.filter(a=>(Number(a.rating)||0)>=E)),M.trim()){const a=M.toLowerCase();r=r.filter(l=>(l.text||"").toLowerCase().includes(a)||(l.author||"").toLowerCase().includes(a)||(l.source||"").toLowerCase().includes(a)||(l.notes||"").toLowerCase().includes(a)||(l.tags||[]).some(c=>(c||"").toLowerCase().includes(a)))}return f==="author"?r.sort((a,l)=>(a.author||"").localeCompare(l.author||"")||a.text.localeCompare(l.text)):f==="length"?r.sort((a,l)=>(a.text||"").length-(l.text||"").length):f==="rating"?r.sort((a,l)=>(Number(l.rating)||0)-(Number(a.rating)||0)||l.createdAt-a.createdAt):f==="year"?r.sort((a,l)=>(Number(l.year)||0)-(Number(a.year)||0)||l.createdAt-a.createdAt):r.sort((a,l)=>l.createdAt-a.createdAt),r},[i,Q,N,$,E,M,f]),X=()=>{H(""),P("All"),W("All"),G(!1),J(1),_("created")},oe=r=>{var c;(c=r==null?void 0:r.preventDefault)==null||c.call(r);const a=(g||"").trim();if(!a)return;const l={id:V(),text:a,author:j.trim(),source:v.trim(),tags:q(y),year:Number(w)||"",rating:Number(T)||0,favorite:!!C,notes:(n||"").trim(),createdAt:Date.now(),updatedAt:Date.now()};d(h=>[l,...h]),L(""),A(""),k(""),R(""),B(""),F(5),I(!1),U("")},le=(r,a)=>{d(l=>l.map(c=>c.id===r?{...c,...a,tags:q(a.tagsLine??re(c.tags||[])),rating:Number(a.rating??c.rating)||0,year:Number(a.year??c.year)||"",favorite:!!(a.favorite??c.favorite),updatedAt:Date.now()}:c)),Y(null)},se=r=>{b({title:"Delete quote?",message:"This will remove it from your list.",tone:"danger",confirmText:"Delete",onConfirm:()=>{d(a=>a.filter(l=>l.id!==r)),b(null)}})},ne=()=>{i.length&&b({title:"Clear all quotes?",message:"This will delete every quote from your list.",tone:"danger",confirmText:"Clear All",onConfirm:()=>{d([]),X(),b(null)}})},ce=r=>{const a=i.find(c=>c.id===r);if(!a)return;const l={...a,id:V(),favorite:!1,createdAt:Date.now(),updatedAt:Date.now()};d(c=>[l,...c])},de=r=>{d(a=>a.map(l=>l.id===r?{...l,favorite:!l.favorite,updatedAt:Date.now()}:l))},ue=async r=>{const a=i.find(h=>h.id===r);if(!a)return;const l=`${a.text} — ${a.author||"Unknown"}${a.source?` (${a.source})`:""}`;let c=!1;try{await navigator.clipboard.writeText(l),c=!0}catch{try{const h=document.createElement("textarea");h.value=l,document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),c=!0}catch{c=!1}}finally{c&&(x.current&&clearTimeout(x.current),m(!0),x.current=setTimeout(()=>m(!1),1200))}};return e.jsxs(t.Page,{children:[e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Quote Collector"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Sub,{children:"A simple, offline-first place to save your favourite inspirational quotes. Track the author, source, tags, rating, year and personal notes—everything stays in your browser via LocalStorage."}),e.jsx("div",{style:{height:6}}),e.jsxs(t.BulletList,{"aria-label":"How to use steps",children:[e.jsx(t.BulletItem,{children:"Type a quote in the form at the top."}),e.jsx(t.BulletItem,{children:"Optionally add author, source, tags, rating, year and notes."}),e.jsx(t.BulletItem,{children:"Click Add to save it to your collection."}),e.jsx(t.BulletItem,{children:"Scroll down to the Results section to search or filter by author, tag, favourites or rating."}),e.jsx(t.BulletItem,{children:"Use the actions on each item to favourite, copy, edit or delete."}),e.jsx(t.BulletItem,{children:"Use Clear All (with confirmation) to start fresh."})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(t.BadgeRow,{children:[e.jsxs(t.Tag,{children:["Total: ",i.length]}),e.jsxs(t.Tag,{children:["Favourites: ",K.favs]}),e.jsxs(t.Tag,{tone:"muted",children:["Authors: ",K.authors]})]})]}),e.jsxs(t.Card,{as:"form",onSubmit:oe,children:[e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"The quote itself (required)",children:[e.jsx(t.LabelText,{children:"Quote *"}),e.jsx(t.TextArea,{placeholder:'e.g., "We are what we repeatedly do. Excellence, then, is not an act, but a habit."',value:g,onChange:r=>L(r.target.value),"aria-label":"Quote text",required:!0})]}),e.jsxs(t.Label,{title:"Who said it?",children:[e.jsx(t.LabelText,{children:"Author"}),e.jsx(t.Input,{placeholder:"e.g., Aristotle",value:j,onChange:r=>A(r.target.value),"aria-label":"Author",list:"author-suggestions"}),e.jsx("datalist",{id:"author-suggestions",children:z.map(r=>e.jsx("option",{value:r},r))})]}),e.jsxs(t.Label,{title:"Book/article/speech/link",children:[e.jsx(t.LabelText,{children:"Source"}),e.jsx(t.Input,{placeholder:"e.g., Nicomachean Ethics",value:v,onChange:r=>k(r.target.value),"aria-label":"Source"})]}),e.jsxs(t.Label,{title:"Approximate year (optional)",children:[e.jsx(t.LabelText,{children:"Year"}),e.jsx(t.Input,{type:"number",inputMode:"numeric",placeholder:"e.g., 350",value:w,onChange:r=>B(r.target.value.replace(/[^\d-]/g,"")),"aria-label":"Year"})]}),e.jsxs(t.Label,{title:"How much this resonates (1–5)",children:[e.jsx(t.LabelText,{children:"Rating"}),e.jsx(t.Select,{value:T,onChange:r=>F(Number(r.target.value)||1),"aria-label":"Rating",children:te.map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs(t.Label,{title:"Mark as favourite",children:[e.jsx(t.LabelText,{children:"Favourite"}),e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",checked:C,onChange:r=>I(r.target.checked),"aria-label":"Favourite",id:"fav"})," ",e.jsx("label",{htmlFor:"fav",style:{opacity:.85,fontSize:12},children:"Add to favourites"})]})]}),e.jsxs(t.Label,{title:"Comma or space separated tags",children:[e.jsx(t.LabelText,{children:"Tags"}),e.jsx(t.Input,{placeholder:"e.g., discipline habits philosophy",value:y,onChange:r=>R(r.target.value),"aria-label":"Tags"}),e.jsxs(t.Helper,{children:["Use commas or spaces. Example: ",e.jsx("code",{children:"discipline, habits, philosophy"})]})]})]}),e.jsxs(t.Label,{style:{width:"100%",marginTop:8},title:"Your personal notes",children:[e.jsx(t.LabelText,{children:"Notes"}),e.jsx(t.TextArea,{placeholder:"Why this quote matters to you, where you used it, context…",value:n,onChange:r=>U(r.target.value),"aria-label":"Notes"})]}),!g.trim()&&e.jsx(t.Helper,{children:"Tip: Quote text is required."}),e.jsx(t.ButtonRow,{children:e.jsx(t.PrimaryButton,{type:"submit",disabled:!g.trim(),children:"Add"})})]}),e.jsx("div",{style:{marginTop:24}}),e.jsx(t.SectionTitle,{children:"Results"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Card,{children:e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Search across quote, author, source, tags, and notes",children:[e.jsx(t.LabelText,{children:"Search"}),e.jsx(t.Input,{placeholder:"Search quote/author/source/tags/notes…",value:M,onChange:r=>H(r.target.value),"aria-label":"Search"})]}),e.jsxs(t.Label,{title:"Filter by author",children:[e.jsx(t.LabelText,{children:"Author"}),e.jsxs(t.Select,{value:N,onChange:r=>P(r.target.value),"aria-label":"Filter by author",children:[e.jsx("option",{value:"All",children:"All authors"}),z.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs(t.Label,{title:"Filter by tag",children:[e.jsx(t.LabelText,{children:"Tag"}),e.jsxs(t.Select,{value:$,onChange:r=>W(r.target.value),"aria-label":"Filter by tag",children:[e.jsx("option",{value:"All",children:"All tags"}),ie.map(r=>e.jsx("option",{value:r,children:r},r))]})]}),e.jsxs(t.Label,{title:"Show only quotes with rating ≥ this value",children:[e.jsx(t.LabelText,{children:"Min rating"}),e.jsx(t.Select,{value:E,onChange:r=>J(Number(r.target.value)||1),"aria-label":"Minimum rating",children:[1,2,3,4,5].map(r=>e.jsx("option",{value:r,children:r},r))})]}),e.jsxs(t.Label,{title:"Sort results",children:[e.jsx(t.LabelText,{children:"Sort by"}),e.jsxs(t.Select,{value:f,onChange:r=>_(r.target.value),"aria-label":"Sort",children:[e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"author",children:"Author A–Z"}),e.jsx("option",{value:"length",children:"Quote length (short → long)"}),e.jsx("option",{value:"rating",children:"Rating (high → low)"}),e.jsx("option",{value:"year",children:"Year (new → old)"})]})]}),e.jsxs(t.RowWrap,{children:[e.jsxs("label",{style:{fontSize:12,opacity:.9},children:[e.jsx("input",{type:"checkbox",checked:Q,onChange:r=>G(r.target.checked),style:{verticalAlign:"middle",marginRight:6}}),"Favourites only"]}),e.jsx(t.Button,{type:"button",onClick:X,title:"Reset filters",children:"Reset"}),e.jsx(t.DangerButton,{type:"button",onClick:ne,title:"Delete all quotes",children:"Clear All"})]})]})}),e.jsx("div",{style:{height:10}}),e.jsxs(t.List,{children:[O.length===0&&i.length===0&&e.jsx(t.Empty,{children:"No quotes yet. Add your first!"}),O.length===0&&i.length>0&&e.jsx(t.Empty,{children:"No quotes match your current filters. Try Reset."}),O.map(r=>ae===r.id?e.jsx(me,{item:r,onCancel:()=>Y(null),onSave:le},r.id):e.jsxs(t.Item,{$favorite:r.favorite,children:[e.jsxs(t.ItemLeft,{children:[e.jsx(t.QuoteText,{children:r.text}),e.jsxs(t.ItemMeta,{children:[e.jsxs(t.Tag,{children:["#",r.author||"Unknown"]}),r.source&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(t.Tag,{children:["#",r.source]})]}),r.year&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx(t.Tag,{children:r.year})]}),e.jsx("span",{children:"•"}),e.jsxs(t.Tag,{children:["Rating ",r.rating||0,"/5"]}),(r.tags||[]).slice(0,6).map(a=>e.jsxs(pe.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(t.Tag,{children:["#",a]})]},a)),r.favorite&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsx(t.Tag,{tone:"muted",children:"Favourite"})]})]}),r.notes?e.jsx("div",{style:{marginTop:4,fontSize:13,opacity:.9},children:r.notes}):null]}),e.jsxs(t.ItemRight,{children:[e.jsx(t.Button,{onClick:()=>ue(r.id),title:"Copy to clipboard",children:"Copy"}),e.jsx(t.Button,{onClick:()=>de(r.id),title:"Toggle favourite",children:r.favorite?"Unfavourite":"Favourite"}),e.jsx(t.Button,{onClick:()=>ce(r.id),title:"Duplicate",children:"Duplicate"}),e.jsx(t.Button,{onClick:()=>Y(r.id),title:"Edit",children:"Edit"}),e.jsx(t.Button,{onClick:()=>se(r.id),title:"Delete",children:"Delete"})]})]},r.id))]}),e.jsx(t.FooterNote,{children:"Data stays in your browser (LocalStorage). Refresh-safe."}),p&&e.jsx(t.ModalOverlay,{onClick:()=>b(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:r=>r.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:p.title}),p.message?e.jsx(t.ModalMessage,{children:p.message}):null,e.jsxs(t.ModalActions,{children:[!p.hideCancel&&e.jsx(t.Button,{type:"button",onClick:()=>b(null),children:p.cancelText||"Cancel"}),e.jsx(t.DangerButton,{type:"button",onClick:p.onConfirm,autoFocus:!0,children:p.confirmText||"Confirm"})]})]})})]}),D&&e.jsx(t.Toast,{role:"status","aria-live":"polite",children:"Copied"})]})}function me({item:i,onCancel:d,onSave:D}){const[m,x]=s.useState(i.text),[g,L]=s.useState(i.author||""),[j,A]=s.useState(i.source||""),[v,k]=s.useState(i.year||""),[y,R]=s.useState(i.rating||5),[w,B]=s.useState(!!i.favorite),[T,F]=s.useState(re(i.tags||[])),[C,I]=s.useState(i.notes||"");return e.jsx(e.Fragment,{children:e.jsx(t.Item,{as:"form",$edit:!0,onSubmit:n=>{n.preventDefault(),m.trim()&&D(i.id,{text:m.trim(),author:g.trim(),source:j.trim(),year:v,rating:y,favorite:w,tagsLine:T,notes:C.trim()})},children:e.jsxs(t.ItemLeft,{style:{display:"grid",gap:12},children:[e.jsxs(t.Label,{title:"Edit quote text",children:[e.jsx(t.LabelText,{children:"Quote *"}),e.jsx(t.TextArea,{value:m,onChange:n=>x(n.target.value),placeholder:"Quote",required:!0})]}),e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Edit author",children:[e.jsx(t.LabelText,{children:"Author"}),e.jsx(t.Input,{value:g,onChange:n=>L(n.target.value),placeholder:"Author"})]}),e.jsxs(t.Label,{title:"Edit source",children:[e.jsx(t.LabelText,{children:"Source"}),e.jsx(t.Input,{value:j,onChange:n=>A(n.target.value),placeholder:"Source"})]}),e.jsxs(t.Label,{title:"Edit year",children:[e.jsx(t.LabelText,{children:"Year"}),e.jsx(t.Input,{type:"number",inputMode:"numeric",value:v,onChange:n=>k(n.target.value),placeholder:"Year"})]}),e.jsxs(t.Label,{title:"Edit rating",children:[e.jsx(t.LabelText,{children:"Rating"}),e.jsx(t.Select,{value:y,onChange:n=>R(Number(n.target.value)||1),children:te.map(n=>e.jsx("option",{value:n,children:n},n))})]}),e.jsxs(t.Label,{title:"Toggle favourite",children:[e.jsx(t.LabelText,{children:"Favourite"}),e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",checked:w,onChange:n=>B(n.target.checked)}),e.jsx("span",{style:{marginLeft:6,opacity:.85,fontSize:12},children:"Mark as favourite"})]})]})]}),e.jsxs(t.Label,{title:"Edit tags (comma or space separated)",children:[e.jsx(t.LabelText,{children:"Tags"}),e.jsx(t.Input,{value:T,onChange:n=>F(n.target.value),placeholder:"Tags"})]}),e.jsxs(t.Label,{title:"Edit notes",children:[e.jsx(t.LabelText,{children:"Notes"}),e.jsx(t.TextArea,{value:C,onChange:n=>I(n.target.value),placeholder:"Notes"})]}),e.jsxs(t.ButtonRow,{children:[e.jsx(t.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(t.Button,{type:"button",onClick:d,children:"Cancel"})]})]})})})}export{be as default};
