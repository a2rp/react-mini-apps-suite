import{l as y,d as t,r as p,j as r}from"./index-DvrHrk8q.js";const d="1px solid hsl(0 0% 100% / 0.14)",L="1px solid hsl(0 0% 100% / 0.10)",g="0 0 0 3px hsl(0 0% 100% / 0.15)",a={Page:t.div`
        min-height: 100dvh;
    `,Container:t.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 56px;
    `,Header:t.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
    `,Title:t.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:t.p`
        margin: 0;
        color: inherit;
        opacity: 0.75;
        font-size: 14px;
    `,BadgeRow:t.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:t.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${L};
        color: inherit;
        ${({tone:n})=>n==="muted"&&y`
                opacity: 0.7;
            `}
    `,DueHint:t.span`
        margin-left: 6px;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 999px;
        border: ${L};
    `,Card:t.div`
        border-radius: 16px;
        padding: 16px;
        border: ${d};
        background: transparent;
    `,FormRow:t.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    `,FilterBar:t.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        margin: 16px 0 10px;
        > * {
            min-width: 0;
        }
    `,RowWrap:t.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    `,ButtonRow:t.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Input:t.input`
        background: transparent;
        color: inherit;
        border: ${d};
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
            box-shadow: ${g};
            border-color: hsl(0 0% 100% / 0.35);
        }
        &[type="number"],
        &[type="date"],
        &[type="month"] {
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
        &[type="date"],
        &[type="month"] {
            padding-right: 40px;
        }
        &[type="date"]::-webkit-calendar-picker-indicator,
        &[type="month"]::-webkit-calendar-picker-indicator {
            filter: invert(1) brightness(1.2);
            opacity: 0.9;
            cursor: pointer;
        }
    `,Select:t.select`
        background: transparent;
        color: inherit;
        border: ${d};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        flex: 1 1 220px;
        &:focus-visible {
            box-shadow: ${g};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,TextArea:t.textarea`
        background: transparent;
        color: inherit;
        border: ${d};
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
            box-shadow: ${g};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:t.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:t.button`
        border: ${d};
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
            box-shadow: ${g};
        }
    `,Button:t.button`
        border: ${d};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${g};
        }
    `,DangerButton:t.button`
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
    `,List:t.div`
        display: grid;
        gap: 10px;
    `,Empty:t.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${d};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:t.div`
        display: grid;
        grid-template-columns: ${({$edit:n})=>n?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${d};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ItemLeft:t.div`
        display: flex;
        gap: 12px;
        flex: 1;
    `,ItemRight:t.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:t.div`
        font-weight: 700;
        line-height: 1.2;
        color: inherit;
    `,ItemMeta:t.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.8;
        font-size: 13px;
        margin-top: 4px;
        flex-wrap: wrap;
    `,IconButton:t.button`
        background: transparent;
        border: ${d};
        border-radius: 10px;
        padding: 8px 10px;
        cursor: pointer;
        color: inherit;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${g};
        }
    `,Bullets:t.ul`
        margin: 8px 0 0;
        padding: 0 0 0 18px;
        display: grid;
        gap: 6px;
        li {
            line-height: 1.4;
        }
    `,Fieldset:t.fieldset`
        border: ${d};
        border-radius: 12px;
        padding: 12px;
        margin: 2px 0 0;
        background: transparent;
    `,Legend:t.legend`
        padding: 0 6px;
        opacity: 0.9;
        font-weight: 600;
    `,FooterNote:t.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:t.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:t.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${d};
        background: transparent;
    `,ModalTitle:t.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:t.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:t.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `,GridOuter:t.div`
        width: 100%;
        border: ${d};
        border-radius: 16px;
        background: transparent;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    `,GridHeader:t.div`
        position: sticky;
        top: 0;
        z-index: 3;
        display: grid;
        ${({$cols:n})=>y`
                grid-template-columns: 220px repeat(${n}, 46px);
            `}
        border-bottom: ${d};
        background: transparent;
        backdrop-filter: blur(0.5px);
    `,GHCell:t.div`
        padding: 10px 12px;
        font-weight: 700;
        font-size: 13px;
        white-space: nowrap;
        &.sticky {
            position: sticky;
            left: 0;
            z-index: 4;
            background: transparent;
            box-shadow: 6px 0 10px -8px rgba(0, 0, 0, 0.25);
        }
        &.day {
            display: grid;
            place-items: center;
            border-left: ${d};
        }
    `,HabitRow:t.div`
        display: grid;
        ${({$cols:n})=>y`
                grid-template-columns: 220px repeat(${n}, 46px);
            `}
        border-bottom: ${d};
        &:last-child {
            border-bottom: none;
        }
    `,HabitName:t.div`
        position: sticky;
        left: 0;
        z-index: 2;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        box-shadow: 6px 0 10px -8px rgba(0, 0, 0, 0.2);
        .name {
            font-weight: 700;
            line-height: 1.1;
        }
        .sub {
            font-size: 11px;
            opacity: 0.8;
        }
        .actions {
            margin-left: auto;
            display: flex;
            gap: 8px;
        }
    `,DayCell:t.button`
        border-left: ${d};
        background: transparent;
        display: grid;
        place-items: center;
        height: 42px;
        cursor: pointer;
        font-size: 12px;
        color: inherit;
        &:hover {
            background: hsl(0 0% 100% / 0.03);
        }
        ${({$state:n})=>n==="done"&&y`
                box-shadow: inset 0 0 0 2px rgba(16, 185, 129, 0.55);
                background: rgba(16, 185, 129, 0.08);
                font-weight: 700;
            `}
        ${({$state:n})=>n==="skip"&&y`
                box-shadow: inset 0 0 0 2px rgba(245, 158, 11, 0.55);
                background: rgba(245, 158, 11, 0.08);
                text-decoration: line-through;
                opacity: 0.95;
            `}
    `},O="habitTracker.v1",z=n=>String(n).padStart(2,"0"),B=(n,l)=>`${n}-${z(l)}`,Q=n=>{const[l,c]=n.split("-").map(Number);return{y:l,m:c}},W=(n,l)=>new Date(n,l,0).getDate(),$=(n,l,c)=>`${n}-${z(l)}-${z(c)}`,X=()=>{try{const n=localStorage.getItem(O);return n?JSON.parse(n):{habits:[]}}catch{return{habits:[]}}},Z=n=>localStorage.setItem(O,JSON.stringify(n));function te(){var I,R;const n=new Date,[l,c]=p.useState(B(n.getFullYear(),n.getMonth()+1)),[b,m]=p.useState(()=>X()),[M,j]=p.useState(!1),[v,C]=p.useState({name:""}),[S,P]=p.useState(""),[w,Y]=p.useState("all"),{y:x,m:h}=Q(l),u=W(x,h),N=p.useMemo(()=>Array.from({length:u},(e,i)=>i+1),[u]);p.useEffect(()=>{Z(b)},[b]);const D=()=>{const e=(v.name||"").trim();e&&(m(i=>({...i,habits:[...i.habits,{id:crypto.randomUUID(),name:e,createdAt:Date.now(),archived:!1,marks:{}}]})),C({name:""}),j(!1))},T=(e,i=!0)=>{m(o=>({...o,habits:o.habits.map(s=>s.id===e?{...s,archived:i}:s)}))},K=e=>{m(i=>({...i,habits:i.habits.filter(o=>o.id!==e)}))},U=(e,i)=>{const o=$(x,h,i);m(s=>{const k=s.habits.map(f=>{var G;if(f.id!==e)return f;const E=((G=f.marks)==null?void 0:G[o])||null,F=E===null?"done":E==="done"?"skip":null,H={...f.marks||{}};return F?H[o]=F:delete H[o],{...f,marks:H}});return{...s,habits:k}})},A=p.useMemo(()=>{const e=S.trim().toLowerCase();return b.habits.filter(i=>w==="archived"&&!i.archived||w==="active"&&i.archived?!1:e?i.name.toLowerCase().includes(e):!0)},[b.habits,S,w]),q=e=>{/^\d{4}-\d{2}$/.test(e)&&c(e)},J=()=>{let e=x,i=h-1;i<1&&(e-=1,i=12),c(B(e,i))},V=()=>{let e=x,i=h+1;i>12&&(e+=1,i=1),c(B(e,i))},_=e=>{var o;let i=0;for(let s=1;s<=u;s++)((o=e.marks)==null?void 0:o[$(x,h,s)])==="done"&&i++;return Math.round(i/u*100)||0};return r.jsx(a.Page,{children:r.jsxs(a.Container,{children:[r.jsxs(a.Header,{children:[r.jsxs("div",{children:[r.jsx(a.Title,{children:"Habit Tracker"}),r.jsx(a.Sub,{children:"Grid-based monthly tracker — LocalStorage. Click a day to toggle."})]}),r.jsxs(a.BadgeRow,{children:[r.jsxs(a.Tag,{children:["Total: ",b.habits.length]}),r.jsx(a.Tag,{tone:"muted",children:new Date(`${l}-01`).toLocaleString(void 0,{month:"long",year:"numeric"})})]})]}),r.jsxs(a.FilterBar,{children:[r.jsx(a.Input,{placeholder:'Search habits (e.g., "Exercise", "No Smoking")',value:S,onChange:e=>P(e.target.value),"aria-label":"Search habits",style:{flex:"2 1 320px"}}),r.jsxs(a.Select,{value:w,onChange:e=>Y(e.target.value),"aria-label":"View",children:[r.jsx("option",{value:"all",children:"All"}),r.jsx("option",{value:"active",children:"Active"}),r.jsx("option",{value:"archived",children:"Archived"})]}),r.jsx(a.Input,{type:"month",value:l,onChange:e=>q(e.target.value),"aria-label":"Month",style:{flex:"0 1 180px"}}),r.jsx(a.Button,{onClick:J,title:"Previous month",children:"◀"}),r.jsx(a.Button,{onClick:V,title:"Next month",children:"▶"}),r.jsx(a.Button,{onClick:()=>j(e=>!e),children:M?"Close":"Add Habit"}),r.jsx(a.DangerButton,{onClick:()=>{m(e=>({...e,habits:e.habits.map(i=>{const o={...i.marks||{}};for(let s=1;s<=u;s++)delete o[$(x,h,s)];return{...i,marks:o}})}))},title:"Clear all marks for this month",children:"Clear Month"})]}),M&&r.jsxs(a.Card,{children:[r.jsxs(a.FormRow,{children:[r.jsx(a.Input,{placeholder:'Habit name (e.g., "No Smoking", "Exercise")',value:v.name,onChange:e=>C({name:e.target.value}),autoFocus:!0,style:{flex:"2 1 360px"}}),r.jsx(a.PrimaryButton,{onClick:D,disabled:!((I=v.name)!=null&&I.trim()),children:"Add"})]}),r.jsxs(a.ButtonRow,{children:[r.jsx(a.Button,{onClick:()=>{j(!1),C({name:""})},children:"Cancel"}),r.jsx(a.PrimaryButton,{onClick:D,disabled:!((R=v.name)!=null&&R.trim()),children:"Save"})]})]}),r.jsxs(a.GridOuter,{children:[r.jsxs(a.GridHeader,{$cols:u,children:[r.jsx(a.GHCell,{className:"sticky",children:"Habit / Progress"}),N.map(e=>r.jsx(a.GHCell,{className:"day","aria-label":`Day ${e}`,children:e},`dh-${e}`))]}),A.length===0?r.jsx(a.Empty,{children:"No habits yet. Add one to get started."}):A.map(e=>r.jsxs(a.HabitRow,{$cols:u,children:[r.jsxs(a.HabitName,{children:[r.jsx("div",{className:"name",children:e.name}),r.jsxs("div",{className:"sub",children:[_(e),"% this month"]}),r.jsxs("div",{className:"actions",children:[e.archived?r.jsx(a.Button,{onClick:()=>T(e.id,!1),children:"Unarchive"}):r.jsx(a.Button,{onClick:()=>T(e.id,!0),children:"Archive"}),r.jsx(a.DangerButton,{onClick:()=>K(e.id),children:"Delete"})]})]}),N.map(i=>{var k;const o=$(x,h,i),s=((k=e.marks)==null?void 0:k[o])||null;return r.jsx(a.DayCell,{$state:s||void 0,onClick:()=>U(e.id,i),title:s?`${s} (${o})`:`mark done (${o})`,"aria-label":`Toggle ${e.name} on ${o}`,children:s==="done"?"✓":s==="skip"?"—":""},`${e.id}-${o}`)})]},e.id))]}),r.jsxs(a.FooterNote,{children:["Tip: Click a cell to cycle ",r.jsx("b",{children:"empty → done → skip → empty"}),". Data saves automatically in your browser."]})]})})}export{te as default};
