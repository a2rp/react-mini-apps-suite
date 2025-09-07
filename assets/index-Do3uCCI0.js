import{d as n,l as J,r as l,j as t}from"./index-BLm_Dx1g.js";const h="1px solid hsl(0 0% 100% / 0.14)",_="1px solid hsl(0 0% 100% / 0.10)",b="0 0 0 3px hsl(0 0% 100% / 0.15)",r={Page:n.div`
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
    `,Title:n.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:n.p`
        margin: 0;
        color: inherit;
        opacity: 0.75;
        font-size: 14px;
    `,BadgeRow:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
    `,Tag:n.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${_};
        color: inherit;
        ${({tone:i})=>i==="muted"&&J`
                opacity: 0.7;
            `}
    `,Card:n.div`
        border-radius: 16px;
        padding: 16px;
        border: ${h};
        background: transparent;
    `,FormRow:n.div`
        display: grid;
        grid-template-columns: 1.2fr 140px 160px 140px 1.2fr auto;
        gap: 10px;
        @media (width < 980px) {
            grid-template-columns: 1fr 120px 1fr 1fr;
        }
        @media (width < 560px) {
            grid-template-columns: 1fr;
        }
    `,Input:n.input`
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
            box-shadow: ${b};
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
        width: 100%;
        display: block;
        &::placeholder {
            color: hsl(0 0% 100% / 0.35);
        }
        &:focus-visible {
            box-shadow: ${b};
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
    `,Button:n.button`
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
            box-shadow: ${b};
        }
    `,DangerButton:n.button`
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
    `,Toolbar:n.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin: 16px 0;
        flex-wrap: wrap;
    `,RowWrap:n.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,Select:n.select`
        background: transparent;
        color: inherit;
        border: ${h};
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
        } /* ensure native list readable */
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
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: 72px 1fr auto;
        gap: 12px;
        align-items: start;
        background: transparent;
        border-radius: 16px;
        padding: 12px;
        border: ${h};
    `,ThumbWrap:n.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,ItemLeft:n.div`
        display: flex;
        gap: 12px;
        flex: 1;
        flex-wrap: wrap;
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
        span {
            opacity: 0.7;
            font-weight: 600;
        }
    `,ItemMeta:n.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.8;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
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
            box-shadow: ${b};
        }
    `,StarButton:n.button`
        background: transparent;
        border: ${h};
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
        color: ${({$filled:i})=>i?"#f5c518":"inherit"}; /* IMDb gold */
        border-color: ${({$filled:i})=>i?"hsl(46 90% 58% / 0.6)":""};
        &:hover {
            color: #f5c518;
            border-color: hsl(46 90% 58% / 0.6);
        }
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${b};
        }
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
    `},L=new URL("./noPoster.png",document.baseURI).toString(),N="movie-watchlist.v1",A=["To Watch","Watching","Watched"],P=[0,1,2,3,4,5],Z=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,z=(i,u,g)=>Math.max(u,Math.min(g,i));function V({value:i=0,onChange:u,titlePrefix:g="Rating"}){const x=d=>typeof u=="function"&&u(Math.max(0,Math.min(5,d))),v=d=>{d.key==="ArrowRight"&&x(i+1),d.key==="ArrowLeft"&&x(i-1)};return t.jsxs("div",{role:"radiogroup",tabIndex:0,onKeyDown:v,style:{display:"inline-flex",gap:6,outline:"none"},children:[[1,2,3,4,5].map(d=>{const f=i>=d;return t.jsx(r.StarButton,{type:"button",role:"radio","aria-checked":f&&i===d,title:`${g}: ${d}`,onClick:()=>x(d),$filled:f,children:f?"★":"☆"},d)}),t.jsx(r.IconButton,{type:"button",title:"Clear rating",onClick:()=>x(0),children:"⟲"})]})}function te(){const[i,u]=l.useState(()=>{try{return JSON.parse(localStorage.getItem(N))??[]}catch{return[]}}),[g,x]=l.useState(""),[v,d]=l.useState(""),[f,C]=l.useState("To Watch"),[k,S]=l.useState(0),[I,T]=l.useState(""),[y,M]=l.useState(""),[j,o]=l.useState("All"),[w,U]=l.useState("created"),[F,W]=l.useState(null),[p,m]=l.useState(null),B=e=>m({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",hideCancel:!1,...e}),R=()=>{const e=p==null?void 0:p.onConfirm;m(null),typeof e=="function"&&e()};l.useEffect(()=>{if(!p)return;const e=a=>{a.key==="Escape"&&m(null),a.key==="Enter"&&R()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[p]),l.useEffect(()=>localStorage.setItem(N,JSON.stringify(i)),[i]);const $=l.useMemo(()=>({toWatch:i.filter(e=>e.status==="To Watch").length,watching:i.filter(e=>e.status==="Watching").length,watched:i.filter(e=>e.status==="Watched").length}),[i]),E=l.useMemo(()=>{let e=i;if(j!=="All"&&(e=e.filter(a=>a.status===j)),y.trim()){const a=y.toLowerCase();e=e.filter(s=>s.title.toLowerCase().includes(a)||String(s.year||"").toLowerCase().includes(a))}if(w==="title")e=[...e].sort((a,s)=>a.title.localeCompare(s.title));else if(w==="year")e=[...e].sort((a,s)=>(s.year||0)-(a.year||0));else if(w==="rating")e=[...e].sort((a,s)=>(s.rating||0)-(a.rating||0));else if(w==="status"){const a={"To Watch":0,Watching:1,Watched:2};e=[...e].sort((s,c)=>a[s.status]-a[c.status]||s.title.localeCompare(c.title))}else e=[...e].sort((a,s)=>s.createdAt-a.createdAt);return e},[i,j,y,w]),Y=e=>{e.preventDefault();const a=g.trim();if(!a)return;const s={id:Z(),title:a,year:v.trim(),status:f,rating:Number(k)||0,posterUrl:I.trim(),notes:"",createdAt:Date.now(),updatedAt:Date.now()};u(c=>[s,...c]),x(""),d(""),C("To Watch"),S(0),T(""),m({title:"Saved",message:`Added “${a}”.`,confirmText:"OK",hideCancel:!0})},O=e=>W(e),K=()=>W(null),q=(e,a)=>{u(s=>s.map(c=>c.id===e?{...c,...a,updatedAt:Date.now()}:c)),W(null),m({title:"Saved",message:"Movie updated.",confirmText:"OK",hideCancel:!0})},H=e=>{B({title:"Delete movie?",message:"This will remove it from your list.",confirmText:"Delete",tone:"danger",onConfirm:()=>u(a=>a.filter(s=>s.id!==e))})},Q=()=>{B({title:"Clear all ‘Watched’ movies?",message:"This will remove all movies marked as Watched.",confirmText:"Clear",tone:"danger",onConfirm:()=>u(e=>e.filter(a=>a.status!=="Watched"))})},D=(e,a)=>{u(s=>s.map(c=>c.id===e?{...c,status:a,updatedAt:Date.now()}:c))},G=(e,a)=>{u(s=>s.map(c=>c.id===e?{...c,rating:z(Number(a)||0,0,5),updatedAt:Date.now()}:c))};return t.jsx(r.Page,{children:t.jsxs(r.Container,{children:[t.jsxs(r.Header,{children:[t.jsxs("div",{children:[t.jsx(r.Title,{children:"Movie Watchlist"}),t.jsx(r.Sub,{children:"Save movies to watch, track progress, and rate — LocalStorage."})]}),t.jsxs(r.BadgeRow,{children:[t.jsxs(r.Tag,{children:["To Watch: ",$.toWatch]}),t.jsxs(r.Tag,{children:["Watching: ",$.watching]}),t.jsxs(r.Tag,{children:["Watched: ",$.watched]})]})]}),t.jsxs(r.Card,{as:"form",onSubmit:Y,children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{placeholder:"Movie title *",value:g,onChange:e=>x(e.target.value),required:!0}),t.jsx(r.Input,{placeholder:"Year (e.g., 2024)",inputMode:"numeric",pattern:"\\d{4}",value:v,onChange:e=>d(e.target.value)}),t.jsx(r.Select,{value:f,onChange:e=>C(e.target.value),children:A.map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsx(r.Select,{value:k,onChange:e=>S(Number(e.target.value)),"aria-label":"Initial rating",title:"Initial rating",children:P.map(e=>t.jsx("option",{value:e,children:e===0?"No rating":`${e} ★`},e))}),t.jsx(r.Input,{placeholder:"Poster URL (optional)",value:I,onChange:e=>T(e.target.value)}),t.jsx(r.PrimaryButton,{type:"submit",disabled:!g.trim(),children:"Add"})]}),!g.trim()&&t.jsx(r.Helper,{children:"Tip: Title is required."}),t.jsxs(r.Helper,{children:["Add ",t.jsx("code",{children:"public/noPoster.png"})," for a graceful image fallback."]})]}),t.jsxs(r.Toolbar,{children:[t.jsxs(r.RowWrap,{children:[t.jsx(r.Select,{value:j,onChange:e=>o(e.target.value),"aria-label":"Filter",children:["All",...A].map(e=>t.jsx("option",{value:e,children:e},e))}),t.jsxs(r.Select,{value:w,onChange:e=>U(e.target.value),"aria-label":"Sort",children:[t.jsx("option",{value:"created",children:"Newest"}),t.jsx("option",{value:"title",children:"Title A–Z"}),t.jsx("option",{value:"year",children:"Year (new → old)"}),t.jsx("option",{value:"rating",children:"Rating (high → low)"}),t.jsx("option",{value:"status",children:"By status"})]}),t.jsx(r.Input,{placeholder:"Search title/year…",value:y,onChange:e=>M(e.target.value),"aria-label":"Search"})]}),t.jsx(r.RowWrap,{children:t.jsx(r.DangerButton,{type:"button",onClick:Q,children:"Clear ‘Watched’"})})]}),t.jsxs(r.List,{children:[E.length===0&&t.jsx(r.Empty,{children:"No movies yet. Add your first!"}),E.map(e=>F===e.id?t.jsx(X,{movie:e,onCancel:K,onSave:q},e.id):t.jsxs(r.Item,{children:[t.jsx(r.ThumbWrap,{children:t.jsx("img",{src:e.posterUrl&&e.posterUrl.trim()||L,onError:a=>{a.currentTarget.dataset.fallback||(a.currentTarget.dataset.fallback="1",a.currentTarget.src=L)},alt:`${e.title} poster`,width:64,height:88,style:{width:64,height:88,objectFit:"cover",borderRadius:8}})}),t.jsx(r.ItemLeft,{children:t.jsxs("div",{children:[t.jsxs(r.ItemTitle,{children:[e.title," ",e.year?t.jsxs("span",{children:["(",e.year,")"]}):null]}),t.jsxs(r.ItemMeta,{children:[t.jsxs(r.Tag,{children:["#",e.status]}),t.jsx("span",{children:"•"}),e.rating>0?t.jsxs(r.Tag,{children:[e.rating," ★"]}):t.jsx(r.Tag,{tone:"muted",children:"No rating"})]})]})}),t.jsxs(r.ItemRight,{children:[t.jsx(V,{value:e.rating||0,onChange:a=>G(e.id,a),titlePrefix:`Rate ${e.title}`}),e.status!=="Watching"&&t.jsx(r.IconButton,{onClick:()=>D(e.id,"Watching"),title:"Mark as Watching",children:"🎬"}),e.status!=="Watched"&&t.jsx(r.IconButton,{onClick:()=>D(e.id,"Watched"),title:"Mark as Watched",children:"✅"}),t.jsx(r.IconButton,{onClick:()=>O(e.id),title:"Edit",children:"✏️"}),t.jsx(r.IconButton,{onClick:()=>H(e.id),title:"Delete",children:"🗑️"})]})]},e.id))]}),t.jsx(r.FooterNote,{children:"Data stays in your browser (LocalStorage). Refresh-safe."}),p&&t.jsx(r.ModalOverlay,{onClick:()=>m(null),children:t.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:e=>e.stopPropagation(),children:[t.jsx(r.ModalTitle,{id:"confirm-title",children:p.title}),p.message?t.jsx(r.ModalMessage,{children:p.message}):null,t.jsxs(r.ModalActions,{children:[!p.hideCancel&&t.jsx(r.Button,{type:"button",onClick:()=>m(null),children:p.cancelText||"Cancel"}),p.tone==="danger"?t.jsx(r.DangerButton,{type:"button",onClick:R,autoFocus:!0,children:p.confirmText||"Confirm"}):t.jsx(r.PrimaryButton,{type:"button",onClick:R,autoFocus:!0,children:p.confirmText||"Confirm"})]})]})})]})})}function X({movie:i,onCancel:u,onSave:g}){const[x,v]=l.useState(i.title),[d,f]=l.useState(i.year||""),[C,k]=l.useState(i.status),[S,I]=l.useState(i.rating||0),[T,y]=l.useState(i.posterUrl||""),[M,j]=l.useState(i.notes||"");return t.jsxs(r.Item,{as:"form",onSubmit:o=>{o.preventDefault(),x.trim()&&g(i.id,{title:x.trim(),year:d.trim(),status:C,rating:z(Number(S)||0,0,5),posterUrl:T.trim(),notes:M})},children:[t.jsxs(r.ItemLeft,{style:{flexDirection:"column",gap:10},children:[t.jsxs(r.FormRow,{children:[t.jsx(r.Input,{value:x,onChange:o=>v(o.target.value),placeholder:"Title *",required:!0}),t.jsx(r.Input,{value:d,onChange:o=>f(o.target.value),placeholder:"Year",inputMode:"numeric",pattern:"\\d{4}"}),t.jsx(r.Select,{value:C,onChange:o=>k(o.target.value),children:A.map(o=>t.jsx("option",{value:o,children:o},o))}),t.jsx(r.Select,{value:S,onChange:o=>I(Number(o.target.value)),"aria-label":"Rating",children:P.map(o=>t.jsx("option",{value:o,children:o===0?"No rating":`${o} ★`},o))}),t.jsx(r.Input,{value:T,onChange:o=>y(o.target.value),placeholder:"Poster URL"})]}),t.jsx(r.TextArea,{placeholder:"Notes (optional)…",value:M,onChange:o=>j(o.target.value)})]}),t.jsxs(r.ItemRight,{children:[t.jsx(r.PrimaryButton,{type:"submit",children:"Save"}),t.jsx(r.Button,{type:"button",onClick:u,children:"Cancel"})]})]})}export{te as default};
