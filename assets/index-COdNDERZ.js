import{d as i,l as k,m as se,r as p,j as e}from"./index-BySW6BSp.js";const g="1px solid hsl(0 0% 100% / 0.14)",le="1px solid hsl(0 0% 100% / 0.10)",M="0 0 0 3px hsl(0 0% 100% / 0.15)",de=se`
  from { box-shadow: 0 0 0 0 hsl(200 80% 60% / 0.0); }
  to   { box-shadow: 0 0 0 4px hsl(200 80% 60% / 0.35); }
`,o={Page:i.div`
        min-height: 100dvh;
    `,Container:i.div`
        max-width: 1120px;
        margin: 0 auto;
        padding: 32px 18px 72px;
    `,Header:i.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
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
        opacity: 0.8;
        font-size: 14px;
    `,BulletList:i.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.85;
        line-height: 1.6;
    `,BulletItem:i.li`
        margin: 2px 0;
    `,BadgeRow:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:i.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${le};
        color: inherit;
        ${({tone:a})=>a==="muted"&&k`
                opacity: 0.7;
            `}
    `,Card:i.div`
        border-radius: 16px;
        padding: 16px;
        border: ${g};
        background: transparent;
    `,FormRow:i.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:i.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,ButtonRow:i.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Label:i.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 220px;
    `,LabelText:i.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:i.input`
        background: transparent;
        color: inherit;
        border: ${g};
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
            box-shadow: ${M};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Select:i.select`
        background: transparent;
        color: inherit;
        border: ${g};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${M};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,PrimaryButton:i.button`
        border: ${g};
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
            box-shadow: ${M};
        }
    `,Button:i.button`
        border: ${g};
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
            box-shadow: ${M};
        }
    `,DangerButton:i.button`
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
    `,BoardCard:i.div`
        margin-top: 12px;
        border-radius: 16px;
        border: ${g};
        background: transparent;
        padding: 12px;
    `,Board:i.div`
        position: relative;
        min-height: 60vh;
        border-radius: 12px;
        border: ${g};
        overflow: hidden;
        background: radial-gradient(
                    circle at 1px 1px,
                    hsl(0 0% 100% / 0.06) 1px,
                    transparent 1px
                )
                0 0/16px 16px,
            linear-gradient(180deg, hsl(0 0% 100% / 0.03), transparent);
    `,Note:i.div`
        position: absolute;
        background: ${({$bg:a})=>a||"#FFF59D"};
        border: 1px solid hsl(0 0% 0% / 0.15);
        border-radius: 10px;
        box-shadow: 0 8px 16px hsl(0 0% 0% / 0.25),
            inset 0 1px 0 hsl(0 0% 100% / 0.35);
        display: grid;
        grid-template-rows: auto 1fr; /* header then body */
        ${({$dragging:a})=>a&&k`
                outline: 2px dashed hsl(200 80% 60% / 0.8);
                cursor: grabbing;
            `}
        ${({$flash:a})=>a&&k`
                animation: ${de} 420ms ease-out 0s 1 alternate;
            `}
    align-items: start;
    `,NoteHeader:i.div`
        display: grid;
        grid-template-columns: auto 1fr auto; /* grip | title | actions */
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        min-height: 34px;
        border-bottom: 1px dashed hsl(0 0% 0% / 0.15);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: linear-gradient(180deg, hsl(0 0% 100% / 0.25), transparent);
        overflow: hidden; /* clip scrollbar */
    `,NoteDrag:i.div`
        width: 16px;
        height: 18px;
        margin-right: 8px;
        cursor: grab;
        user-select: none;
        opacity: 0.7;
        position: relative;
        &:before,
        &:after {
            content: "";
            position: absolute;
            left: 4px;
            right: 4px;
            height: 2px;
            background: hsl(0 0% 0% / 0.35);
            border-radius: 2px;
        }
        &:before {
            top: 5px;
        }
        &:after {
            bottom: 5px;
        }
    `,NoteTitle:i.input`
        background: transparent;
        border: none;
        outline: none;
        font-weight: 700;
        font-size: 14px;
        color: hsl(0 0% 0% / 0.85);
        &::placeholder {
            color: hsl(0 0% 0% / 0.45);
        }
    `,NoteActions:i.div`
        display: flex;
        align-items: center;
        gap: 6px;
        max-width: ${({$w:a})=>a||"240px"};
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 16px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                hsl(0 0% 100% / 0.25)
            );
        }
    `,IconButton:i.button`
        background: transparent;
        border: 1px solid hsl(0 0% 0% / 0.2);
        border-radius: 8px;
        padding: 4px 6px;
        cursor: pointer;
        font-size: 14px;
        &:active {
            transform: translateY(1px);
        }
    `,NoteBody:i.div`
        padding: 8px;
        overflow: hidden;
        user-select: text;
    `,NoteText:i.textarea`
        width: 100%;
        height: 100%;
        min-height: 90px;
        background: transparent;
        border: none;
        outline: none;
        resize: none;
        font-size: 14px;
        color: hsl(0 0% 0% / 0.9);
        user-select: text;
        pointer-events: auto;
        cursor: text;
        &::placeholder {
            color: hsl(0 0% 0% / 0.45);
        }
    `,ResizeHandle:i.div`
        position: absolute;
        right: 4px;
        bottom: 4px;
        width: 14px;
        height: 14px;
        border-right: 2px solid hsl(0 0% 0% / 0.35);
        border-bottom: 2px solid hsl(0 0% 0% / 0.35);
        border-radius: 2px;
        cursor: nwse-resize;
        opacity: 0.8;
    `,ColorRow:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: ${({$nowrap:a})=>a?"nowrap":"wrap"};
        overflow-x: ${({$nowrap:a})=>a?"auto":"visible"};
        max-width: ${({$nowrap:a,$w:l})=>a?l||"160px":"none"};
        scrollbar-width: thin;
        &::-webkit-scrollbar {
            height: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background: hsl(0 0% 0% / 0.35);
            border-radius: 999px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
    `,ColorDot:i.button`
        width: 26px;
        height: 26px;
        border-radius: 999px;
        border: 1px solid hsl(0 0% 100% / 0.4);
        background: ${({$c:a})=>a};
        cursor: pointer;
        outline: none;
        position: relative;
        ${({$active:a})=>a&&k`
                box-shadow: 0 0 0 3px hsl(200 80% 60% / 0.35);
            `}
    `,TinyDot:i.button`
        width: 16px;
        height: 16px;
        border-radius: 999px;
        border: 1px solid hsl(0 0% 0% / 0.25);
        background: ${({$c:a})=>a};
        cursor: pointer;
        outline: none;
        ${({$active:a})=>a&&k`
                box-shadow: 0 0 0 2px hsl(200 80% 60% / 0.45);
            `}
    `,List:i.div`
        display: grid;
        gap: 10px;
    `,SectionTitle:i.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,Empty:i.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${g};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:i.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: start;
        border: ${g};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ItemLeft:i.div`
        display: grid;
        gap: 8px;
        min-width: 0;
    `,ItemRight:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:i.div`
        font-weight: 700;
        line-height: 1.3;
        color: inherit;
    `,ItemMeta:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        flex-wrap: wrap;
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
        border: ${g};
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
    `,Toast:i.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${g};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
    `},J="stickyNotesApp.v1",pe=()=>{try{return JSON.parse(localStorage.getItem(J))??{}}catch{return{}}},ce=a=>{try{localStorage.setItem(J,JSON.stringify(a))}catch{}},q=()=>{var a;return((a=crypto==null?void 0:crypto.randomUUID)==null?void 0:a.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`},v=(a,l,d)=>Math.max(l,Math.min(d,a)),w=(a,l)=>l>1?Math.round(a/l)*l:a,Y=["#FFF59D","#FFCCBC","#C5E1A5","#B3E5FC","#E1BEE7","#FFE082","#F8BBD0","#CFD8DC"],T=320,$=200,xe=200,he=120;function be(){const a=pe(),[l,d]=p.useState(a.notes??[]),[c,Z]=p.useState(a.grid??8),[D,K]=p.useState(a.defaultColor??Y[0]),[S,H]=p.useState(""),[B,X]=p.useState("updated"),[x,j]=p.useState(null),W=t=>j({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"danger",hideCancel:!1,...t}),[P,ue]=p.useState("");p.useRef(null),p.useEffect(()=>{ce({notes:l,grid:c,defaultColor:D})},[l,c,D]);const R=p.useRef(null),N=p.useRef({type:null,id:null,startX:0,startY:0,boxX:0,boxY:0,boxW:0,boxH:0}),O=p.useMemo(()=>{const t=l.length,r=new Set(l.map(n=>n.color)).size;return{total:t,colors:r}},[l]),A=()=>l.length?Math.max(...l.map(t=>t.z||1))+1:1,Q=()=>{const t=R.current,r=t==null?void 0:t.getBoundingClientRect(),n=(r==null?void 0:r.width)||900,s=(r==null?void 0:r.height)||520,b=l.length,m=16,y=w(v(20+b*24%Math.max(T,n-T-m),8,Math.max(8,n-T-m)),c),z=w(v(20+b*18%Math.max($,s-$-m),8,Math.max(8,s-$-m)),c),h={id:q(),title:"",text:"",color:D,x:y,y:z,w:T,h:$,z:A(),createdAt:Date.now(),updatedAt:Date.now(),flash:!1};d(u=>[...u,h])},V=t=>{W({title:"Delete this note?",message:"This cannot be undone.",confirmText:"Delete",tone:"danger",onConfirm:()=>{d(r=>r.filter(n=>n.id!==t)),j(null)}})},ee=()=>{l.length&&W({title:"Clear all notes?",message:"This will delete every note on the board.",confirmText:"Clear All",tone:"danger",onConfirm:()=>{d([]),j(null)}})},te=t=>{const r=l.find(s=>s.id===t);if(!r)return;const n={...r,id:q(),x:w(r.x+20,c),y:w(r.y+16,c),z:A(),createdAt:Date.now(),updatedAt:Date.now(),flash:!0};d(s=>[...s,n]),setTimeout(()=>{d(s=>s.map(b=>b.id===n.id?{...b,flash:!1}:b))},700)},F=t=>{const r=A();d(n=>n.map(s=>s.id===t?{...s,z:r,updatedAt:Date.now()}:s))},oe=(t,r)=>{d(n=>n.map(s=>s.id===t?{...s,color:r,updatedAt:Date.now()}:s))},G=(t,r)=>{d(n=>n.map(s=>s.id===t?{...s,...r,updatedAt:Date.now()}:s))},_=(t,r,n)=>{t.stopPropagation(),t.preventDefault();const s=l.find(y=>y.id===r);if(!s)return;const{clientX:b,clientY:m}=t;N.current={type:n,id:r,startX:b,startY:m,boxX:s.x,boxY:s.y,boxW:s.w,boxH:s.h},F(r),window.addEventListener("pointermove",U,{passive:!1}),window.addEventListener("pointerup",re,{once:!0})},U=t=>{const r=N.current;if(!r.id)return;const n=R.current,s=n==null?void 0:n.getBoundingClientRect(),b=(s==null?void 0:s.width)||900,m=(s==null?void 0:s.height)||520,y=t.clientX-r.startX,z=t.clientY-r.startY;if(r.type==="move"){let h=r.boxX+y,u=r.boxY+z;const f=l.find(I=>I.id===r.id),C=(f==null?void 0:f.w)??T,ae=(f==null?void 0:f.h)??$;h=v(h,0,Math.max(0,b-C)),u=v(u,0,Math.max(0,m-ae)),h=w(h,c),u=w(u,c),d(I=>I.map(E=>E.id===r.id?{...E,x:h,y:u}:E))}else if(r.type==="resize"){let h=v(r.boxW+y,xe,2e3),u=v(r.boxH+z,he,2e3);h=w(h,c),u=w(u,c),d(f=>f.map(C=>C.id===r.id?{...C,w:h,h:u}:C))}},re=()=>{N.current={type:null,id:null,startX:0,startY:0,boxX:0,boxY:0,boxW:0,boxH:0},window.removeEventListener("pointermove",U)},L=p.useMemo(()=>{let t=l.slice();if(S.trim()){const r=S.toLowerCase();t=t.filter(n=>(n.title||"").toLowerCase().includes(r)||(n.text||"").toLowerCase().includes(r))}return B==="title"?t.sort((r,n)=>(r.title||"").localeCompare(n.title||"")):B==="created"?t.sort((r,n)=>n.createdAt-r.createdAt):t.sort((r,n)=>n.updatedAt-r.updatedAt),t},[l,S,B]),ie=()=>{H(""),X("updated")},ne=t=>{F(t),d(r=>r.map(n=>n.id===t?{...n,flash:!0}:n)),setTimeout(()=>{d(r=>r.map(n=>n.id===t?{...n,flash:!1}:n))},700)};return e.jsx(o.Page,{children:e.jsxs(o.Container,{children:[e.jsxs(o.Header,{children:[e.jsxs("div",{children:[e.jsx(o.Title,{children:"Sticky Notes App"}),e.jsx("div",{style:{height:8}}),e.jsx(o.Sub,{children:"A digital cork-board for quick thoughts. Create colorful sticky notes, drag them around, resize, duplicate, and organize your ideas. Everything is saved locally in your browser (LocalStorage) and is refresh-safe."}),e.jsx("div",{style:{height:6}}),e.jsxs(o.BulletList,{"aria-label":"How to use",children:[e.jsx(o.BulletItem,{children:'Click "Add note" to create a new sticky.'}),e.jsx(o.BulletItem,{children:"Drag using the small grip in the header; pull the corner to resize."}),e.jsx(o.BulletItem,{children:"Change color, edit title/text, duplicate, or delete (with confirmation)."}),e.jsx(o.BulletItem,{children:'Toggle grid snap for tidy alignment; use "Focus" from results to bring one to front.'})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(o.BadgeRow,{children:[e.jsxs(o.Tag,{children:["Total: ",O.total]}),e.jsxs(o.Tag,{tone:"muted",children:["Colors: ",O.colors]})]})]}),e.jsx(o.Card,{children:e.jsxs(o.FormRow,{children:[e.jsxs(o.RowWrap,{children:[e.jsx(o.PrimaryButton,{type:"button",onClick:Q,children:"Add note"}),e.jsx(o.DangerButton,{type:"button",onClick:ee,disabled:!l.length,children:"Clear All"})]}),e.jsxs(o.Label,{title:"Default color for new notes",children:[e.jsx(o.LabelText,{children:"New note color"}),e.jsx(o.ColorRow,{children:Y.map(t=>e.jsx(o.ColorDot,{$c:t,"aria-label":`Choose ${t}`,onClick:()=>K(t),$active:D===t,title:t},t))})]}),e.jsxs(o.Label,{title:"Snap movement & resize to grid",children:[e.jsx(o.LabelText,{children:"Grid snap"}),e.jsxs(o.Select,{value:c,onChange:t=>Z(Number(t.target.value)||0),"aria-label":"Grid snap",children:[e.jsx("option",{value:0,children:"Off"}),e.jsx("option",{value:4,children:"4 px"}),e.jsx("option",{value:8,children:"8 px"}),e.jsx("option",{value:12,children:"12 px"}),e.jsx("option",{value:16,children:"16 px"})]})]})]})}),e.jsx(o.BoardCard,{children:e.jsx(o.Board,{ref:R,"aria-label":"Sticky notes board",children:l.map(t=>e.jsxs(o.Note,{style:{left:t.x,top:t.y,width:t.w,height:t.h,zIndex:t.z},$bg:t.color,$dragging:N.current.id===t.id,$flash:t.flash,onFocus:()=>F(t.id),children:[e.jsxs(o.NoteHeader,{children:[e.jsx(o.NoteDrag,{title:"Drag to move",onPointerDown:r=>_(r,t.id,"move")}),e.jsx(o.NoteTitle,{placeholder:"Title",value:t.title,onChange:r=>G(t.id,{title:r.target.value})}),e.jsxs(o.NoteActions,{$w:"240px",children:[e.jsx(o.ColorRow,{$nowrap:!0,$w:"170px",style:{marginRight:6},children:Y.map(r=>e.jsx(o.TinyDot,{$c:r,$active:t.color===r,onClick:()=>oe(t.id,r),title:`Set ${r}`},r))}),e.jsx(o.IconButton,{onClick:()=>te(t.id),title:"Duplicate",children:"📄"}),e.jsx(o.IconButton,{onClick:()=>V(t.id),title:"Delete",children:"🗑️"})]})]}),e.jsx(o.NoteBody,{children:e.jsx(o.NoteText,{placeholder:"Type your note…",value:t.text,onChange:r=>G(t.id,{text:r.target.value})})}),e.jsx(o.ResizeHandle,{title:"Drag to resize",onPointerDown:r=>_(r,t.id,"resize")})]},t.id))})}),e.jsx("div",{style:{marginTop:24}}),e.jsx(o.SectionTitle,{children:"Results"}),e.jsx("div",{style:{height:8}}),e.jsx(o.Card,{children:e.jsxs(o.FormRow,{children:[e.jsxs(o.Label,{title:"Search title & note text",children:[e.jsx(o.LabelText,{children:"Search"}),e.jsx(o.Input,{placeholder:"Find notes…","aria-label":"Search notes",value:S,onChange:t=>H(t.target.value)})]}),e.jsxs(o.Label,{title:"Sort the filtered results",children:[e.jsx(o.LabelText,{children:"Sort by"}),e.jsxs(o.Select,{value:B,onChange:t=>X(t.target.value),children:[e.jsx("option",{value:"updated",children:"Last updated"}),e.jsx("option",{value:"created",children:"Newest"}),e.jsx("option",{value:"title",children:"Title A–Z"})]})]}),e.jsx(o.RowWrap,{children:e.jsx(o.Button,{type:"button",onClick:ie,children:"Reset"})})]})}),e.jsx("div",{style:{height:10}}),e.jsxs(o.List,{children:[L.length===0&&l.length===0&&e.jsx(o.Empty,{children:'No notes yet. Click "Add note".'}),L.length===0&&l.length>0&&e.jsx(o.Empty,{children:"No notes match your search. Try Reset."}),L.map(t=>e.jsxs(o.Item,{children:[e.jsxs(o.ItemLeft,{children:[e.jsxs(o.ItemTitle,{children:[t.title||"(Untitled)"," —"," ",e.jsx("span",{style:{opacity:.7},children:new Date(t.updatedAt).toLocaleString()})]}),e.jsx(o.ItemMeta,{children:e.jsxs(o.Tag,{tone:"muted",children:[String(t.text||"").slice(0,120)||"No content",String(t.text||"").length>120?"…":""]})})]}),e.jsx(o.ItemRight,{children:e.jsx(o.Button,{type:"button",onClick:()=>ne(t.id),title:"Bring into focus",children:"Focus"})})]},t.id))]}),e.jsx(o.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),P&&e.jsx(o.Toast,{role:"status","aria-live":"polite",children:P}),x&&e.jsx(o.ModalOverlay,{onClick:()=>j(null),children:e.jsxs(o.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(o.ModalTitle,{id:"confirm-title",children:x.title}),x.message?e.jsx(o.ModalMessage,{children:x.message}):null,e.jsxs(o.ModalActions,{children:[!x.hideCancel&&e.jsx(o.Button,{type:"button",onClick:()=>j(null),children:x.cancelText||"Cancel"}),x.tone==="danger"?e.jsx(o.DangerButton,{type:"button",onClick:x.onConfirm,autoFocus:!0,children:x.confirmText||"Confirm"}):e.jsx(o.PrimaryButton,{type:"button",onClick:x.onConfirm,autoFocus:!0,children:x.confirmText||"Confirm"})]})]})})]})})}export{be as default};
