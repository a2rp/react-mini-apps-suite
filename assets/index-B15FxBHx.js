import{d as n,l as v,r as p,j as e}from"./index-BySW6BSp.js";const m="1px solid hsl(0 0% 100% / 0.14)",Y="1px solid hsl(0 0% 100% / 0.10)",T="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:n.div`
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
        border: ${Y};
        color: inherit;
        ${({tone:o})=>o==="muted"&&v`
                opacity: 0.7;
            `}
    `,Card:n.div`
        border-radius: 16px;
        padding: 16px;
        border: ${m};
        background: transparent;
    `,BoardCard:n.div`
        margin-top: 14px;
        border-radius: 16px;
        padding: 16px;
        border: ${m};
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
        border: ${m};
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
            box-shadow: ${T};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Select:n.select`
        background: transparent;
        color: inherit;
        border: ${m};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${T};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,PrimaryButton:n.button`
        border: ${m};
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
            box-shadow: ${T};
        }
    `,Button:n.button`
        border: ${m};
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
            box-shadow: ${T};
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
        border: ${m};
        background: transparent;
        display: grid;
        place-items: center;
        cursor: pointer;
        transition: transform 60ms ease, background-color 120ms ease,
            border-color 120ms ease;
        ${({$disabled:o})=>o&&v`
                cursor: default;
                opacity: 0.9;
            `}
        ${({$win:o})=>o&&v`
                box-shadow: 0 0 0 3px hsl(140 70% 45% / 0.3);
                border-color: hsl(140 70% 50% / 0.8);
            `}
    &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${T};
        }
    `,Mark:n.span`
        font-size: clamp(34px, 9vw, 56px);
        font-weight: 800;
        letter-spacing: -0.02em;
        ${({$m:o})=>o==="X"?v`
                      color: hsl(200 80% 65% / 0.95);
                  `:o==="O"?v`
                      color: hsl(45 90% 65% / 0.95);
                  `:v`
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
        border: ${m};
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
    `},M="ticTacToeGame.v1",F=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],I=()=>Array(9).fill(""),W=()=>{try{return JSON.parse(localStorage.getItem(M))??{}}catch{return{}}},G=o=>{try{localStorage.setItem(M,JSON.stringify(o))}catch{}};function A(o){for(const[i,w,l]of F)if(o[i]&&o[i]===o[w]&&o[i]===o[l])return{winner:o[i],line:[i,w,l]};return o.every(Boolean)?{winner:"draw",line:[]}:{winner:null,line:[]}}function D(o,i){const w=i==="X"?"O":"X",l=a=>{for(let f=0;f<9;f++)if(!o[f]){const y=[...o];if(y[f]=a,A(y).winner===a)return f}return-1};let g=l(i);if(g!==-1||(g=l(w),g!==-1))return g;if(!o[4])return 4;const d=[0,2,6,8].filter(a=>!o[a]);if(d.length)return d[Math.floor(Math.random()*d.length)];const b=[1,3,5,7].filter(a=>!o[a]);return b.length?b[Math.floor(Math.random()*b.length)]:-1}function J(){const o=W(),[i,w]=p.useState(o.mode??"ai"),[l,g]=p.useState(o.youPlayAs??"X"),[d,b]=p.useState(o.scores??{X:0,O:0,draw:0}),[a,f]=p.useState(o.board??I()),[y,C]=p.useState(o.xIsNext??!0),[u,x]=p.useState(null),[R,B]=p.useState(!1),{winner:s,line:O}=p.useMemo(()=>A(a),[a]),h=y?"X":"O",k=i==="ai"&&h!==l&&!s;p.useEffect(()=>{G({mode:i,youPlayAs:l,board:a,xIsNext:y,scores:d})},[i,l,a,y,d]);const S=r=>a[r]||s?!1:(f(c=>{const $=[...c];return $[r]=h,$}),C(c=>!c),!0),X=r=>{a[r]||s||i==="ai"&&h!==l||S(r)};p.useEffect(()=>{if(!k)return;B(!0);const r=setTimeout(()=>{const c=D(a,h);c!==-1&&S(c),B(!1)},600);return()=>clearTimeout(r)},[k,a,h]),p.useEffect(()=>{s&&b(s==="draw"?r=>({...r,draw:r.draw+1}):r=>({...r,[s]:r[s]+1}))},[s]);const j=()=>{f(I()),C(!0)},P=()=>{a.some(Boolean)&&!s?x({title:"Reset current game?",message:"This will clear the board and start a new game.",confirmText:"Reset",tone:"danger",onConfirm:()=>{j(),x(null)}}):j()},z=()=>{(d.X||d.O||d.draw)&&x({title:"Reset scores?",message:"This will clear X/O/draw counters.",confirmText:"Reset",tone:"danger",onConfirm:()=>{b({X:0,O:0,draw:0}),x(null)}})},L=r=>{r!==i&&(a.some(Boolean)&&!s?x({title:"Switch mode?",message:"This will reset the current game.",confirmText:"Switch",onConfirm:()=>{w(r),j(),x(null)}}):(w(r),j()))},N=r=>{i!=="ai"||r===l||(a.some(Boolean)&&!s?x({title:"Change your mark?",message:"This will reset the current game.",confirmText:"Change",onConfirm:()=>{g(r),j(),x(null)}}):(g(r),j()))},E=s?s==="draw"?"It’s a draw!":`${s} wins!`:k?`Turn: ${h} — AI thinking…`:`Turn: ${h}`;return e.jsx(t.Page,{children:e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Tic-Tac-Toe Game"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Sub,{children:"A clean, offline-first Tic-Tac-Toe you can play solo against a simple AI or locally with a friend. It keeps a lightweight scoreboard in your browser (LocalStorage) and highlights the winning line when the game ends."}),e.jsx("div",{style:{height:6}}),e.jsxs(t.BulletList,{"aria-label":"How to use",children:[e.jsx(t.BulletItem,{children:"Choose mode: versus AI or play with a friend."}),e.jsx(t.BulletItem,{children:"If playing vs AI, pick your mark (X goes first)."}),e.jsx(t.BulletItem,{children:"Click a cell to place your mark; the app blocks invalid moves."}),e.jsx(t.BulletItem,{children:'Use "New game" to clear the board or "Reset scores" to clear counters (both ask for confirmation when needed).'})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(t.BadgeRow,{children:[e.jsxs(t.Tag,{children:["Mode: ",i==="ai"?"AI":"Friend"]}),e.jsxs(t.Tag,{children:["Turn: ",s?"-":h]}),k&&e.jsx(t.Tag,{children:"AI thinking…"}),e.jsxs(t.Tag,{tone:"muted",children:["Scores — X: ",d.X," • O: ",d.O," • Draw: ",d.draw]})]})]}),e.jsx(t.Card,{children:e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Select play mode",children:[e.jsx(t.LabelText,{children:"Mode"}),e.jsxs(t.Select,{value:i,onChange:r=>L(r.target.value),"aria-label":"Mode",children:[e.jsx("option",{value:"ai",children:"Play vs AI"}),e.jsx("option",{value:"friend",children:"Play with a friend"})]})]}),e.jsxs(t.Label,{title:"Choose your mark (AI plays the other)",style:{opacity:i==="ai"?1:.6},children:[e.jsx(t.LabelText,{children:"Your mark"}),e.jsxs(t.Select,{value:l,onChange:r=>N(r.target.value),"aria-label":"Your mark",disabled:i!=="ai",children:[e.jsx("option",{value:"X",children:"X (first)"}),e.jsx("option",{value:"O",children:"O (second)"})]})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.PrimaryButton,{type:"button",onClick:P,children:"New game"}),e.jsx(t.Button,{type:"button",onClick:z,children:"Reset scores"})]})]})}),e.jsxs(t.BoardCard,{"aria-live":"polite",children:[e.jsx(t.Status,{children:E}),e.jsx(t.BoardWrap,{children:a.map((r,c)=>e.jsx(t.Cell,{role:"button","aria-label":`Cell ${c+1} ${r||"empty"}`,$win:O.includes(c),$disabled:!!r||!!s||i==="ai"&&h!==l||R,onClick:()=>X(c),children:e.jsx(t.Mark,{$m:r,children:r})},c))})]}),e.jsx(t.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),u&&e.jsx(t.ModalOverlay,{onClick:()=>x(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:r=>r.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:u.title}),u.message?e.jsx(t.ModalMessage,{children:u.message}):null,e.jsxs(t.ModalActions,{children:[e.jsx(t.Button,{type:"button",onClick:()=>x(null),children:"Cancel"}),u.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:u.onConfirm,autoFocus:!0,children:u.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:u.onConfirm,autoFocus:!0,children:u.confirmText||"Confirm"})]})]})})]})})}export{J as default};
