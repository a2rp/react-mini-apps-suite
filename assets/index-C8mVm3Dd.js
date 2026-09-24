import{d as n,l as j,r as p,j as e}from"./index-CaYSG5FU.js";const w="1px solid hsl(0 0% 100% / 0.14)",F="1px solid hsl(0 0% 100% / 0.10)",C="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:n.div`
        min-height: 100dvh;
    `,Container:n.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 72px;
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
        margin: 0;
        color: inherit;
        opacity: 0.8;
        font-size: 14px;
    `,BulletList:n.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.85;
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
        border: ${F};
        color: inherit;
        ${({tone:o})=>o==="muted"&&j`
                opacity: 0.7;
            `}
    `,Card:n.div`
        border-radius: 16px;
        padding: 16px;
        border: ${w};
        background: transparent;
    `,BoardCard:n.div`
        margin-top: 14px;
        border-radius: 16px;
        padding: 16px;
        border: ${w};
        background: transparent;
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
        flex: 1 1 220px;
    `,LabelText:n.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:n.input`
        background: transparent;
        color: inherit;
        border: ${w};
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
            box-shadow: ${C};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Select:n.select`
        background: transparent;
        color: inherit;
        border: ${w};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${C};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,PrimaryButton:n.button`
        border: ${w};
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
            box-shadow: ${C};
        }
    `,Button:n.button`
        border: ${w};
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
            box-shadow: ${C};
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
    `,Status:n.div`
        text-align: center;
        font-weight: 700;
        letter-spacing: 0.02em;
        margin-bottom: 12px;
        opacity: 0.95;
    `,BoardWrap:n.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(90px, 1fr));
        grid-auto-rows: minmax(90px, 1fr);
        gap: 10px;

        @media (width < 460px) {
            grid-template-columns: repeat(3, minmax(70px, 1fr));
            grid-auto-rows: minmax(70px, 1fr);
            gap: 8px;
        }
    `,Cell:n.button`
        position: relative;
        border-radius: 12px;
        border: ${w};
        background: transparent;
        display: grid;
        place-items: center;
        cursor: pointer;
        transition: transform 60ms ease, background-color 120ms ease,
            border-color 120ms ease;
        ${({$disabled:o})=>o&&j`
                cursor: default;
                opacity: 0.9;
            `}
        ${({$win:o})=>o&&j`
                box-shadow: 0 0 0 3px hsl(140 70% 45% / 0.3);
                border-color: hsl(140 70% 50% / 0.8);
            `}
    &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${C};
        }
    `,Mark:n.span`
        font-size: clamp(34px, 9vw, 56px);
        font-weight: 800;
        letter-spacing: -0.02em;
        ${({$m:o})=>o==="X"?j`
                      color: hsl(200 80% 65% / 0.95);
                  `:o==="O"?j`
                      color: hsl(45 90% 65% / 0.95);
                  `:j`
                      color: hsl(0 0% 100% / 0.3);
                  `}
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
        border: ${w};
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
    `},O="ticTacToeGame.v1",W=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],R=()=>Array(9).fill(""),G=()=>{try{return JSON.parse(localStorage.getItem(O))??{}}catch{return{}}},D=o=>{try{localStorage.setItem(O,JSON.stringify(o))}catch{}};function I(o){for(const[u,a,f]of W)if(o[u]&&o[u]===o[a]&&o[u]===o[f])return{winner:o[u],line:[u,a,f]};return o.every(Boolean)?{winner:"draw",line:[]}:{winner:null,line:[]}}function H(o,u){const a=u==="X"?"O":"X",f=x=>{for(let i=0;i<9;i++)if(!o[i]){const v=[...o];if(v[i]=x,I(v).winner===x)return i}return-1};let l=f(u);if(l!==-1||(l=f(a),l!==-1))return l;if(!o[4])return 4;const b=[0,2,6,8].filter(x=>!o[x]);if(b.length)return b[Math.floor(Math.random()*b.length)];const d=[1,3,5,7].filter(x=>!o[x]);return d.length?d[Math.floor(Math.random()*d.length)]:-1}function K(){const o=G(),u=o.mode==="ai"?"computer":o.mode,[a,f]=p.useState(u??"computer"),[l,b]=p.useState(o.youPlayAs??"X"),[d,x]=p.useState(o.scores??{X:0,O:0,draw:0}),[i,v]=p.useState(o.board??R()),[k,B]=p.useState(o.xIsNext??!0),[m,h]=p.useState(null),[X,S]=p.useState(!1),{winner:s,line:P}=p.useMemo(()=>I(i),[i]),g=k?"X":"O",T=a==="computer"&&g!==l&&!s;p.useEffect(()=>{D({mode:a,youPlayAs:l,board:i,xIsNext:k,scores:d})},[a,l,i,k,d]);const $=r=>i[r]||s?!1:(v(c=>{const M=[...c];return M[r]=g,M}),B(c=>!c),!0),z=r=>{i[r]||s||a==="computer"&&g!==l||$(r)};p.useEffect(()=>{if(!T)return;S(!0);const r=setTimeout(()=>{const c=H(i,g);c!==-1&&$(c),S(!1)},600);return()=>clearTimeout(r)},[T,i,g]),p.useEffect(()=>{s&&x(s==="draw"?r=>({...r,draw:r.draw+1}):r=>({...r,[s]:r[s]+1}))},[s]);const y=()=>{v(R()),B(!0)},L=()=>{i.some(Boolean)&&!s?h({title:"Reset current game?",message:"This will clear the board and start a new game.",confirmText:"Reset",tone:"danger",onConfirm:()=>{y(),h(null)}}):y()},A=()=>{(d.X||d.O||d.draw)&&h({title:"Reset scores?",message:"This will clear X/O/draw counters.",confirmText:"Reset",tone:"danger",onConfirm:()=>{x({X:0,O:0,draw:0}),h(null)}})},N=r=>{r!==a&&(i.some(Boolean)&&!s?h({title:"Switch mode?",message:"This will reset the current game.",confirmText:"Switch",onConfirm:()=>{f(r),y(),h(null)}}):(f(r),y()))},E=r=>{a!=="computer"||r===l||(i.some(Boolean)&&!s?h({title:"Change your mark?",message:"This will reset the current game.",confirmText:"Change",onConfirm:()=>{b(r),y(),h(null)}}):(b(r),y()))},Y=s?s==="draw"?"It’s a draw!":`${s} wins!`:T?`Turn: ${g} - Computer thinking…`:`Turn: ${g}`;return e.jsx(t.Page,{children:e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Tic-Tac-Toe Game"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Sub,{children:"A clean, offline-first Tic-Tac-Toe you can play solo against a simple Computer or locally with a friend. It keeps a lightweight scoreboard in your browser (LocalStorage) and highlights the winning line when the game ends."}),e.jsx("div",{style:{height:6}}),e.jsxs(t.BulletList,{"aria-label":"How to use",children:[e.jsx(t.BulletItem,{children:"Choose mode: versus Computer or play with a friend."}),e.jsx(t.BulletItem,{children:"If playing vs Computer, pick your mark (X goes first)."}),e.jsx(t.BulletItem,{children:"Click a cell to place your mark; the app blocks invalid moves."}),e.jsx(t.BulletItem,{children:'Use "New game" to clear the board or "Reset scores" to clear counters (both ask for confirmation when needed).'})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(t.BadgeRow,{children:[e.jsxs(t.Tag,{children:["Mode: ",a==="computer"?"Computer":"Friend"]}),e.jsxs(t.Tag,{children:["Turn: ",s?"-":g]}),T&&e.jsx(t.Tag,{children:"Computer thinking…"}),e.jsxs(t.Tag,{tone:"muted",children:["Scores - X: ",d.X," • O: ",d.O," • Draw: ",d.draw]})]})]}),e.jsx(t.Card,{children:e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Select play mode",children:[e.jsx(t.LabelText,{children:"Mode"}),e.jsxs(t.Select,{value:a,onChange:r=>N(r.target.value),"aria-label":"Mode",children:[e.jsx("option",{value:"computer",children:"Play vs Computer"}),e.jsx("option",{value:"friend",children:"Play with a friend"})]})]}),e.jsxs(t.Label,{title:"Choose your mark (Computer plays the other)",style:{opacity:a==="computer"?1:.6},children:[e.jsx(t.LabelText,{children:"Your mark"}),e.jsxs(t.Select,{value:l,onChange:r=>E(r.target.value),"aria-label":"Your mark",disabled:a!=="computer",children:[e.jsx("option",{value:"X",children:"X (first)"}),e.jsx("option",{value:"O",children:"O (second)"})]})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.PrimaryButton,{type:"button",onClick:L,children:"New game"}),e.jsx(t.Button,{type:"button",onClick:A,children:"Reset scores"})]})]})}),e.jsxs(t.BoardCard,{"aria-live":"polite",children:[e.jsx(t.Status,{children:Y}),e.jsx(t.BoardWrap,{children:i.map((r,c)=>e.jsx(t.Cell,{role:"button","aria-label":`Cell ${c+1} ${r||"empty"}`,$win:P.includes(c),$disabled:!!r||!!s||a==="computer"&&g!==l||X,onClick:()=>z(c),children:e.jsx(t.Mark,{$m:r,children:r})},c))})]}),e.jsx(t.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),m&&e.jsx(t.ModalOverlay,{onClick:()=>h(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:r=>r.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:m.title}),m.message?e.jsx(t.ModalMessage,{children:m.message}):null,e.jsxs(t.ModalActions,{children:[e.jsx(t.Button,{type:"button",onClick:()=>h(null),children:"Cancel"}),m.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:m.onConfirm,autoFocus:!0,children:m.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:m.onConfirm,autoFocus:!0,children:m.confirmText||"Confirm"})]})]})})]})})}export{K as default};
