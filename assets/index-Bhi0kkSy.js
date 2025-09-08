import{d as a,l as le,r as c,j as e,R as ie}from"./index-DkC-bgdE.js";const f="1px solid hsl(0 0% 100% / 0.14)",se="1px solid hsl(0 0% 100% / 0.10)",$="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:a.div`
        min-height: 100dvh;
    `,Container:a.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 84px;
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
        opacity: 0.82;
        font-size: 14px;
    `,BulletList:a.ul`
        margin: 10px 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.82;
        line-height: 1.6;
    `,BulletItem:a.li`
        margin: 2px 0;
    `,BadgeRow:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:a.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${se};
        color: inherit;
        ${({tone:l})=>l==="muted"&&le`
                opacity: 0.7;
            `}
    `,Card:a.div`
        border-radius: 16px;
        padding: 16px;
        border: ${f};
        background: transparent;
    `,FormRow:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:a.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,ButtonRow:a.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Label:a.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 240px;
    `,LabelText:a.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:a.input`
        background: transparent;
        color: inherit;
        border: ${f};
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
            box-shadow: ${$};
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
    `,Select:a.select`
        background: transparent;
        color: inherit;
        border: ${f};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${$};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:a.textarea`
        background: transparent;
        color: inherit;
        border: ${f};
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
            box-shadow: ${$};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:a.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:a.button`
        border: ${f};
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
            box-shadow: ${$};
        }
    `,Button:a.button`
        border: ${f};
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
            box-shadow: ${$};
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
    `,List:a.div`
        display: grid;
        gap: 10px;
    `,SectionTitle:a.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,Empty:a.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${f};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:a.div`
        display: grid;
        grid-template-columns: ${({$edit:l})=>l?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${f};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ItemLeft:a.div`
        display: grid;
        gap: 8px;
        min-width: 0;
    `,ItemRight:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:a.div`
        font-weight: 700;
        color: inherit;
        line-height: 1.2;
    `,ItemMeta:a.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        flex-wrap: wrap;
    `,SwatchGrid:a.div`
        /* border: 1px solid #f00; */
        /* display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    `,Swatch:a.button`
        border: ${f};
        border-radius: 10px;
        height: 64px;
        cursor: pointer;
        padding: 8px;
        display: grid;
        place-items: end start;
        transition: transform 0.05s ease;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${$};
        }
    `,SwatchHex:a.span`
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 999px;
        background: hsl(0 0% 0% / 0.35);
        color: #fff;
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
        border: ${f};
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
    `,Toast:a.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${f};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
    `},J="colorPalettePicker.v1",K=()=>{var l;return((l=crypto==null?void 0:crypto.randomUUID)==null?void 0:l.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`},ce=()=>{try{return JSON.parse(localStorage.getItem(J))??[]}catch{return[]}},de=l=>{try{localStorage.setItem(J,JSON.stringify(l))}catch{}};function _(l){return Array.from(new Set((l||"").split(/[,\s]+/).map(d=>d.trim().toLowerCase()).filter(Boolean)))}const Q=(l=[])=>(l||[]).join(", ");function w(l){let d=(l||"").toString().trim().replace(/#/g,"").toLowerCase();return d=d.replace(/[^0-9a-f]/g,""),d.length===3&&(d=d.split("").map(T=>T+T).join("")),d.length!==6&&(d="000000"),`#${d}`}const N=()=>`#${Array.from({length:6},()=>"0123456789abcdef"[Math.floor(Math.random()*16)]).join("")}`;function pe(l){const d=w(l).slice(1),T=parseInt(d.slice(0,2),16)/255,b=parseInt(d.slice(2,4),16)/255,g=parseInt(d.slice(4,6),16)/255,m=C=>C<=.03928?C/12.92:Math.pow((C+.055)/1.055,2.4);return .2126*m(T)+.7152*m(b)+.0722*m(g)>.54?"#000":"#fff"}function xe(){const[l,d]=c.useState(()=>ce()),[T,b]=c.useState(!1),g=c.useRef(null);c.useEffect(()=>()=>g.current&&clearTimeout(g.current),[]);const[m,E]=c.useState(""),[C,D]=c.useState(""),[k,L]=c.useState(""),[p,y]=c.useState(()=>Array.from({length:5},()=>N())),[B,A]=c.useState(""),[R,P]=c.useState("All"),[S,s]=c.useState(""),[u,j]=c.useState("created"),[v,M]=c.useState(null),[h,z]=c.useState(null),F=o=>z({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"danger",hideCancel:!1,onConfirm:null,...o}),H=()=>{const o=h==null?void 0:h.onConfirm;z(null),typeof o=="function"&&o()};c.useEffect(()=>{if(!h)return;const o=n=>{n.key==="Escape"&&z(null),n.key==="Enter"&&H()};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[h]),c.useEffect(()=>de(l),[l]);const X=c.useMemo(()=>Array.from(new Set(l.flatMap(o=>o.tags||[]))).sort(),[l]),O=c.useMemo(()=>{const o=l.length,n=l.reduce((i,x)=>{var I;return i+(((I=x.colors)==null?void 0:I.length)||0)},0),r=o?Math.round(n/o):0;return{total:o,totalColors:n,avg:r}},[l]),G=c.useMemo(()=>{let o=l.slice();if(R!=="All"&&(o=o.filter(n=>(n.tags||[]).includes(R))),B.trim()){const n=B.toLowerCase();o=o.filter(r=>(r.name||"").toLowerCase().includes(n)||(r.notes||"").toLowerCase().includes(n)||(r.tags||[]).some(i=>i.includes(n))||(r.colors||[]).some(i=>i.toLowerCase().includes(n)))}if(S.trim()){const n=S.toLowerCase().replace(/#/g,"");o=o.filter(r=>(r.colors||[]).some(i=>i.toLowerCase().replace("#","").includes(n)))}return u==="name"?o.sort((n,r)=>(n.name||"").localeCompare(r.name||"")):u==="count"?o.sort((n,r)=>{var i,x;return(((i=r.colors)==null?void 0:i.length)||0)-(((x=n.colors)==null?void 0:x.length)||0)}):o.sort((n,r)=>r.createdAt-n.createdAt),o},[l,B,R,S,u]),U=()=>{A(""),P("All"),s(""),j("created")},Z=()=>{y(o=>o.length>=10?o:[...o,N()])},V=o=>{F({title:"Remove this color?",message:"This will delete the swatch from the new palette.",confirmText:"Remove",onConfirm:()=>y(n=>n.length<=2?n:n.filter((r,i)=>i!==o))})},W=(o,n)=>{const r=w(n);y(i=>i.map((x,I)=>I===o?r:x))},Y=()=>{y(o=>o.map(()=>N()))},ee=o=>{var x;(x=o==null?void 0:o.preventDefault)==null||x.call(o);const n=(m||"").trim(),r=(p||[]).map(w).filter(Boolean);if(!n||r.length<2)return;const i={id:K(),name:n,colors:r,tags:_(C),notes:(k||"").trim(),createdAt:Date.now(),updatedAt:Date.now()};d(I=>[i,...I]),E(""),D(""),L(""),Y()},te=(o,n)=>{d(r=>r.map(i=>i.id===o?{...i,...n,colors:(n.colors||i.colors).map(w),tags:_(n.tagsLine??Q(i.tags||[])),updatedAt:Date.now()}:i)),M(null)},oe=o=>{const n=l.find(i=>i.id===o);if(!n)return;const r={...n,id:K(),name:`${n.name} (copy)`,createdAt:Date.now(),updatedAt:Date.now()};d(i=>[r,...i])},ne=o=>{F({title:"Delete palette?",message:"This will remove it from your list.",confirmText:"Delete",onConfirm:()=>d(n=>n.filter(r=>r.id!==o))})},re=()=>{l.length&&F({title:"Clear all palettes?",message:"This will delete every palette from your list.",confirmText:"Clear All",onConfirm:()=>{d([]),U()}})},q=async o=>{try{await navigator.clipboard.writeText(w(o)),g.current&&clearTimeout(g.current),b(!0),g.current=setTimeout(()=>b(!1),1200)}catch{}},ae=async o=>{const n=(o.colors||[]).join(", ");try{await navigator.clipboard.writeText(n),g.current&&clearTimeout(g.current),b(!0),g.current=setTimeout(()=>b(!1),1200)}catch{}};return e.jsxs(t.Page,{children:[e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Color Palette Picker"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Sub,{children:"Create, preview, and save your own color palettes. Each palette keeps a name, notes, tags, and multiple swatches — perfect for UI themes, brand kits, or mood boards. Everything is stored locally (works offline)."}),e.jsx("div",{style:{height:6}}),e.jsxs(t.BulletList,{"aria-label":"How to use steps",children:[e.jsx(t.BulletItem,{children:"Give your palette a name and pick at least two colors."}),e.jsx(t.BulletItem,{children:"Use the color pickers or type hex (e.g., #ff7a59). Add/Remove swatches as needed."}),e.jsx(t.BulletItem,{children:"Optionally add tags and notes, then click Add to save."}),e.jsx(t.BulletItem,{children:"Scroll to Results to search, filter by tag, and sort. Click a swatch to copy its hex."}),e.jsx(t.BulletItem,{children:"Duplicate, edit inline, or delete with confirmation anytime."})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(t.BadgeRow,{children:[e.jsxs(t.Tag,{children:["Total: ",O.total]}),e.jsxs(t.Tag,{children:["Colors: ",O.totalColors]}),e.jsxs(t.Tag,{tone:"muted",children:["Avg/palette: ",O.avg]})]})]}),e.jsxs(t.Card,{as:"form",onSubmit:ee,children:[e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Short title for the palette",children:[e.jsx(t.LabelText,{children:"Name *"}),e.jsx(t.Input,{placeholder:"e.g., Sunset Glow",value:m,onChange:o=>E(o.target.value),"aria-label":"Palette name",required:!0})]}),e.jsxs(t.Label,{title:"Comma or space separated tags",children:[e.jsx(t.LabelText,{children:"Tags"}),e.jsx(t.Input,{placeholder:"e.g., warm gradient brand",value:C,onChange:o=>D(o.target.value),"aria-label":"Tags"}),e.jsxs(t.Helper,{children:["Use commas or spaces. Example: ",e.jsx("code",{children:"warm, gradient, brand"})]})]})]}),e.jsxs("div",{style:{marginTop:10},children:[e.jsx(t.LabelText,{children:"Colors (click swatch to copy hex)"}),e.jsx("div",{style:{height:6}}),e.jsx(t.SwatchGrid,{children:p.map((o,n)=>{const r=w(o),i=pe(r);return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx(t.Swatch,{type:"button",style:{background:r},onClick:()=>q(r),title:"Copy hex",children:e.jsx(t.SwatchHex,{children:r})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr auto",gap:6},children:[e.jsx("input",{type:"color",value:r,onChange:x=>W(n,x.target.value),"aria-label":`Pick color ${n+1}`,style:{width:40,height:36,borderRadius:8,border:"1px solid hsl(0 0% 100% / 0.14)",background:"transparent",cursor:"pointer"}}),e.jsx(t.Input,{placeholder:"#AABBCC",value:r,onChange:x=>W(n,x.target.value),"aria-label":`Hex color ${n+1}`}),e.jsx(t.Button,{type:"button",onClick:()=>V(n),disabled:p.length<=2,title:"Remove this color",children:"Remove"})]}),e.jsxs("div",{style:{fontSize:11,opacity:.75},children:["Contrast label on this swatch would be"," ",e.jsx("span",{style:{color:i},children:i==="#000"?"black":"white"}),"."]})]},n)})}),e.jsxs(t.RowWrap,{style:{marginTop:10},children:[e.jsx(t.Button,{type:"button",onClick:Z,disabled:p.length>=10,title:"Add color",children:"+ Add color"}),e.jsx(t.Button,{type:"button",onClick:Y,title:"Randomize all colors",children:"Randomize"})]})]}),e.jsxs(t.Label,{style:{width:"100%",marginTop:10},title:"Optional notes",children:[e.jsx(t.LabelText,{children:"Notes"}),e.jsx(t.TextArea,{placeholder:"Inspiration, usage, or references…",value:k,onChange:o=>L(o.target.value),"aria-label":"Notes"})]}),!m.trim()&&e.jsx(t.Helper,{children:"Tip: Name is required. Add at least two colors."}),e.jsx(t.ButtonRow,{children:e.jsx(t.PrimaryButton,{type:"submit",disabled:!m.trim()||p.length<2,children:"Add"})})]}),e.jsx("div",{style:{marginTop:24}}),e.jsx(t.SectionTitle,{children:"Results"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Card,{children:e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Search across name, notes, tags, and hex values",children:[e.jsx(t.LabelText,{children:"Search"}),e.jsx(t.Input,{placeholder:"Search name/notes/tags/hex…",value:B,onChange:o=>A(o.target.value),"aria-label":"Search"})]}),e.jsxs(t.Label,{title:"Filter by tag",children:[e.jsx(t.LabelText,{children:"Tag"}),e.jsxs(t.Select,{value:R,onChange:o=>P(o.target.value),"aria-label":"Filter by tag",children:[e.jsx("option",{value:"All",children:"All tags"}),X.map(o=>e.jsx("option",{value:o,children:o},o))]})]}),e.jsxs(t.Label,{title:"Show palettes that contain this hex (partial OK)",children:[e.jsx(t.LabelText,{children:"Contains color"}),e.jsx(t.Input,{placeholder:"e.g., ff7a, #1e90ff",value:S,onChange:o=>s(o.target.value),"aria-label":"Contains hex"})]}),e.jsxs(t.Label,{title:"Sort the results",children:[e.jsx(t.LabelText,{children:"Sort by"}),e.jsxs(t.Select,{value:u,onChange:o=>j(o.target.value),"aria-label":"Sort",children:[e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"name",children:"Name A–Z"}),e.jsx("option",{value:"count",children:"Color count (high → low)"})]})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.Button,{type:"button",onClick:U,title:"Reset filters",children:"Reset"}),e.jsx(t.DangerButton,{type:"button",onClick:re,title:"Delete all palettes",children:"Clear All"})]})]})}),e.jsx("div",{style:{height:10}}),e.jsxs(t.List,{children:[G.length===0&&l.length===0&&e.jsx(t.Empty,{children:"No palettes yet. Add your first!"}),G.length===0&&l.length>0&&e.jsx(t.Empty,{children:"No results match your current filters. Try Reset."}),G.map(o=>{var n;return v===o.id?e.jsx(ue,{item:o,onCancel:()=>M(null),onSave:te},o.id):e.jsxs(t.Item,{children:[e.jsxs(t.ItemLeft,{children:[e.jsx(t.ItemTitle,{children:o.name}),e.jsxs(t.ItemMeta,{children:[(o.tags||[]).slice(0,8).map((r,i)=>e.jsxs(ie.Fragment,{children:[e.jsxs(t.Tag,{children:["#",r]}),e.jsx("span",{children:"•"})]},`${r}-${i}`)),e.jsxs(t.Tag,{tone:"muted",children:[((n=o.colors)==null?void 0:n.length)||0," colors"]})]}),e.jsx(t.SwatchGrid,{children:(o.colors||[]).map((r,i)=>e.jsx(t.Swatch,{type:"button",style:{background:w(r)},onClick:()=>q(r),title:"Copy hex",children:e.jsx(t.SwatchHex,{children:w(r)})},i))}),o.notes?e.jsx("div",{style:{marginTop:4,fontSize:13,opacity:.9},children:o.notes}):null]}),e.jsxs(t.ItemRight,{children:[e.jsx(t.Button,{onClick:()=>ae(o),title:"Copy hex list",children:"Copy list"}),e.jsx(t.Button,{onClick:()=>oe(o.id),title:"Duplicate",children:"Duplicate"}),e.jsx(t.Button,{onClick:()=>M(o.id),title:"Edit",children:"Edit"}),e.jsx(t.Button,{onClick:()=>ne(o.id),title:"Delete",children:"Delete"})]})]},o.id)})]}),e.jsx(t.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),h&&e.jsx(t.ModalOverlay,{onClick:()=>z(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:o=>o.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:h.title}),h.message?e.jsx(t.ModalMessage,{children:h.message}):null,e.jsxs(t.ModalActions,{children:[!h.hideCancel&&e.jsx(t.Button,{type:"button",onClick:()=>z(null),children:h.cancelText||"Cancel"}),h.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:H,autoFocus:!0,children:h.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:H,autoFocus:!0,children:h.confirmText||"Confirm"})]})]})})]}),T&&e.jsx(t.Toast,{role:"status","aria-live":"polite",children:"Copied"})]})}function ue({item:l,onCancel:d,onSave:T}){const[b,g]=c.useState(l.name),[m,E]=c.useState(Q(l.tags||[])),[C,D]=c.useState(l.notes||""),[k,L]=c.useState(l.colors||[]),[p,y]=c.useState(null),B=s=>y({title:"Remove this color?",message:"This will delete the swatch from this palette.",confirmText:"Remove",cancelText:"Cancel",tone:"danger",hideCancel:!1,onConfirm:null,...s}),A=()=>{const s=p==null?void 0:p.onConfirm;y(null),typeof s=="function"&&s()};c.useEffect(()=>{if(!p)return;const s=u=>{u.key==="Escape"&&y(null),u.key==="Enter"&&A()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[p]);const R=()=>L(s=>s.length>=10?s:[...s,N()]),P=s=>B({onConfirm:()=>L(u=>u.length<=2?u:u.filter((j,v)=>v!==s))}),S=(s,u)=>L(j=>j.map((v,M)=>M===s?w(u):v));return e.jsxs(t.Item,{as:"form",$edit:!0,onSubmit:s=>{s.preventDefault(),!(!b.trim()||(k||[]).length<2)&&T(l.id,{name:b.trim(),tagsLine:m,notes:C.trim(),colors:k})},children:[e.jsxs(t.ItemLeft,{children:[e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Edit palette name",children:[e.jsx(t.LabelText,{children:"Name *"}),e.jsx(t.Input,{value:b,onChange:s=>g(s.target.value),placeholder:"Name"})]}),e.jsxs(t.Label,{title:"Edit tags (comma/space separated)",children:[e.jsx(t.LabelText,{children:"Tags"}),e.jsx(t.Input,{value:m,onChange:s=>E(s.target.value),placeholder:"Tags"})]})]}),e.jsx(t.SwatchGrid,{children:k.map((s,u)=>{const j=w(s);return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx(t.Swatch,{type:"button",style:{background:j},title:"Preview",children:e.jsx(t.SwatchHex,{children:j})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr auto",gap:6},children:[e.jsx("input",{type:"color",value:j,onChange:v=>S(u,v.target.value),"aria-label":`Pick color ${u+1}`,style:{width:40,height:36,borderRadius:8,border:"1px solid hsl(0 0% 100% / 0.14)",background:"transparent",cursor:"pointer"}}),e.jsx(t.Input,{value:j,onChange:v=>S(u,v.target.value),placeholder:"#AABBCC","aria-label":`Hex color ${u+1}`}),e.jsx(t.Button,{type:"button",onClick:()=>P(u),disabled:k.length<=2,children:"Remove"})]})]},u)})}),e.jsx(t.RowWrap,{style:{marginTop:10},children:e.jsx(t.Button,{type:"button",onClick:R,disabled:k.length>=10,children:"+ Add color"})}),e.jsxs(t.Label,{title:"Edit notes",children:[e.jsx(t.LabelText,{children:"Notes"}),e.jsx(t.TextArea,{value:C,onChange:s=>D(s.target.value),placeholder:"Notes"})]}),e.jsxs(t.ButtonRow,{children:[e.jsx(t.PrimaryButton,{type:"submit",children:"Save"}),e.jsx(t.Button,{type:"button",onClick:d,children:"Cancel"})]})]}),p&&e.jsx(t.ModalOverlay,{onClick:()=>y(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:s=>s.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:p.title}),p.message?e.jsx(t.ModalMessage,{children:p.message}):null,e.jsxs(t.ModalActions,{children:[!p.hideCancel&&e.jsx(t.Button,{type:"button",onClick:()=>y(null),children:p.cancelText||"Cancel"}),p.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:A,autoFocus:!0,children:p.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:A,autoFocus:!0,children:p.confirmText||"Confirm"})]})]})})]})}export{xe as default};
