import{d as i,l as H,m as de,r as u,j as e}from"./index-CNowL1fO.js";const y="1px solid hsl(0 0% 100% / 0.14)",ce="1px solid hsl(0 0% 100% / 0.10)",$="0 0 0 3px hsl(0 0% 100% / 0.15)",ue=de`
  0% { transform: scale(1); box-shadow: 0 0 0 0 hsl(200 80% 60% / 0.0); }
  50% { transform: scale(1.04); box-shadow: 0 0 0 6px hsl(200 80% 60% / 0.12); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 hsl(200 80% 60% / 0.0); }
`,r={Page:i.div`
        min-height: 100dvh;
    `,Container:i.div`
        max-width: 980px;
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
        border: ${ce};
        color: inherit;
        ${({tone:d})=>d==="muted"&&H`
                opacity: 0.7;
            `}
    `,MetaRow:i.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 12px;
    `,Card:i.div`
        border-radius: 16px;
        padding: 16px;
        border: ${y};
        background: transparent;
        position: relative;
    `,SectionTitle:i.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,ButtonRow:i.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,GuessRow:i.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        min-height: 48px;
        padding: 10px;
        border: ${y};
        border-radius: 12px;
        background: transparent;
    `,GuessTile:i.button`
        border: ${y};
        background: transparent;
        color: inherit;
        border-radius: 10px;
        padding: 10px 14px;
        min-width: 42px;
        text-align: center;
        font-weight: 800;
        letter-spacing: 0.06em;
        cursor: pointer;
        ${({$correct:d})=>d&&H`
                box-shadow: 0 0 0 3px hsl(140 70% 45% / 0.25);
                border-color: hsl(140 70% 50% / 0.8);
            `}
        ${({$pulse:d})=>d&&H`
                animation: ${ue} 850ms ease;
            `}
    &:focus-visible {
            box-shadow: ${$};
        }
    `,TileHintTitle:i.span`
        position: absolute;
        top: 2px;
        right: 6px;
        font-size: 11px;
        opacity: 0.7;
    `,EmptySlot:i.div`
        font-size: 13px;
        opacity: 0.75;
    `,PoolWrap:i.div`
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 10px;
        border: ${y};
        border-radius: 12px;
        background: transparent;
        min-height: 52px;
    `,PoolTile:i.button`
        border: ${y};
        background: transparent;
        color: inherit;
        border-radius: 10px;
        padding: 10px 14px;
        min-width: 42px;
        text-align: center;
        font-weight: 800;
        letter-spacing: 0.06em;
        cursor: pointer;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${$};
        }
    `,PrimaryButton:i.button`
        border: ${y};
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
    `,Button:i.button`
        border: ${y};
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
    `,Empty:i.div`
        padding: 8px 12px;
        border-radius: 10px;
        border: ${y};
        border-style: dashed;
        opacity: 0.7;
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
        border: ${y};
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
        position: absolute;
        left: 16px;
        bottom: 16px;
        z-index: 10;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${y};
        background: hsl(0 0% 100% / 0.07);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
    `},Z="wordScrambleGame.v1",A=["react","variable","function","object","array","promise","module","bundle","router","context","reducer","virtual","component","hook","state","effect","closure","syntax","compile","render","testing","jest","enzyme","parcel","webpack","vite","babel","typescript","javascript","frontend","backend","fullstack","network","storage","session","cookie","auth","token","refresh","graphql","schema","resolver","endpoint","request","response","payload","debug","release","feature","branch","commit","merge","deploy","version","optimize","runtime","memory","thread","promise","await","lint","format","eslint","prettier","node","server","client","socket","stream","buffer","binary"],pe=d=>Math.floor(Math.random()*d),G=d=>{const p=d.slice();for(let x=p.length-1;x>0;x--){const m=Math.floor(Math.random()*(x+1));[p[x],p[m]]=[p[m],p[x]]}return p},he=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`,xe=()=>{try{return JSON.parse(localStorage.getItem(Z))??{}}catch{return{}}},fe=d=>{try{localStorage.setItem(Z,JSON.stringify(d))}catch{}},ge=d=>{const p=d.split("");let x=G(p);for(let m=0;m<8&&x.join("")===d;m++)x=G(p);return x.map(m=>({id:he(),ch:m,used:!1}))};function be(){var J,K,_,Q,V,X;const d=xe(),[p,x]=u.useState(d.stats??{solved:0,played:0,streak:0,best:0}),[m,W]=u.useState(d.seen??{}),[h,ee]=u.useState(((J=d.round)==null?void 0:J.word)||""),[f,j]=u.useState(((K=d.round)==null?void 0:K.pool)||[]),[b,k]=u.useState(((_=d.round)==null?void 0:_.guessIds)||[]),[g,L]=u.useState(((Q=d.round)==null?void 0:Q.isSolved)||!1),[P,N]=u.useState(((V=d.round)==null?void 0:V.attempts)||0),[T,Y]=u.useState(((X=d.round)==null?void 0:X.hints)||0),[D,S]=u.useState(""),[w,C]=u.useState(null),[O,B]=u.useState(null),z=u.useRef(null),te=u.useRef(null);u.useEffect(()=>{fe({stats:p,seen:m,round:{word:h,pool:f,guessIds:b,isSolved:g,attempts:P,hints:T}})},[p,m,h,f,b,g,P,T]),u.useEffect(()=>{h||U()},[]);const E=u.useMemo(()=>{const t=new Map(f.map(s=>[s.id,s]));return b.map(s=>{var o;return((o=t.get(s))==null?void 0:o.ch)||""}).join("")},[f,b]),R=f.filter(t=>!t.used);function U(t){let s="";if(!s){const a=A.filter(n=>!m[n]);s=(a.length?a:A)[pe(a.length?a.length:A.length)]}const o=ge(s);ee(s),j(o),k([]),L(!1),N(0),Y(0),B(null),S(""),W(a=>({...a,[s]:!0})),setTimeout(()=>{var a;return(a=te.current)==null?void 0:a.focus()},0)}function re(){j(t=>t.map(s=>({...s,used:!1}))),k([]),B(null),S("")}function q(t){g||(j(s=>s.map(o=>o.id===t&&!o.used?{...o,used:!0}:o)),k(s=>[...s,t]),S(""))}function I(t=b.length-1){if(t<0||g)return;const s=b[t];k(o=>o.filter((a,n)=>n!==t)),j(o=>o.map(a=>a.id===s?{...a,used:!1}:a)),B(null)}function se(){if(g)return;const t=f.filter(a=>!a.used),s=f.filter(a=>a.used),o=G(t);j([...o,...s])}function F(){if(!g){if(E.length!==h.length){v("Use all letters before checking.");return}N(t=>t+1),E.toLowerCase()===h.toLowerCase()?(L(!0),x(t=>({solved:t.solved+1,played:t.played+1,streak:t.streak+1,best:Math.max(t.best,t.streak+1)})),v("Correct! 🎉")):(x(t=>({...t,played:t.played+1,streak:0})),v("Not quite - try again."))}}function oe(){if(g)return;const t=h.split(""),s=E.split("");let o=-1;for(let l=0;l<t.length;l++)if(s[l]!==t[l]){o=l;break}if(o===-1){v("You're almost there. Check and submit!");return}b[o]&&I(o);const a=t[o],n=f.find(l=>!l.used&&l.ch.toLowerCase()===a.toLowerCase());if(!n){v("Use existing letters to align the word.");return}j(l=>l.map(c=>c.id===n.id?{...c,used:!0}:c)),k(l=>{const c=l.slice();return c.splice(o,0,n.id),c}),Y(l=>l+1),B(o),v(`Hint added at position ${o+1}.`)}function ne(){g||C({title:"Reveal the answer?",message:"This shows the full word and ends the round.",confirmText:"Reveal",tone:"danger",onConfirm:()=>{var o,a;const t=new Set,s=new Array(h.length);for(let n=0;n<h.length;n++){const l=h[n].toLowerCase(),c=b[n],M=c?(a=(o=f.find(le=>le.id===c))==null?void 0:o.ch)==null?void 0:a.toLowerCase():void 0;c&&M===l&&!t.has(c)&&(s[n]=c,t.add(c))}for(let n=0;n<h.length;n++){if(s[n])continue;const l=h[n].toLowerCase(),c=f.find(M=>M.ch.toLowerCase()===l&&!t.has(M.id));c&&(s[n]=c.id,t.add(c.id))}j(n=>n.map(l=>({...l,used:t.has(l.id)}))),k(s),L(!0),x(n=>({...n,played:n.played+1,streak:0})),C(null),v("Answer revealed.")}})}function ie(){U()}function ae(){C({title:"Reset stats?",message:"Solved/played counts and streaks will be cleared.",confirmText:"Reset",tone:"danger",onConfirm:()=>{x({solved:0,played:0,streak:0,best:0}),W({}),C(null),v("Stats reset.")}})}function v(t){S(t),z.current&&clearTimeout(z.current),z.current=setTimeout(()=>S(""),1400)}return u.useEffect(()=>{const t=s=>{if(!h)return;const o=s.key;if(/^[a-z]$/i.test(o)){const a=o.toLowerCase(),n=R.find(l=>l.ch.toLowerCase()===a)||R[0];n&&q(n.id)}else o==="Backspace"?I():o==="Enter"&&F()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[h,f,b,R,g]),e.jsx(r.Page,{children:e.jsxs(r.Container,{children:[e.jsxs(r.Header,{children:[e.jsxs("div",{children:[e.jsx(r.Title,{children:"Word Scramble Game"}),e.jsx("div",{style:{height:8}}),e.jsx(r.Sub,{children:"A fast, offline-first word scramble. Rearrange the jumbled letters to find the correct word. Your streaks and stats are saved locally (LocalStorage), and the game is refresh-safe."}),e.jsx("div",{style:{height:6}}),e.jsxs(r.BulletList,{"aria-label":"How to use",children:[e.jsx(r.BulletItem,{children:"Click letters to build your guess (or type on the keyboard)."}),e.jsx(r.BulletItem,{children:"Backspace removes the last letter; click any chosen letter to put it back."}),e.jsx(r.BulletItem,{children:"Use Shuffle to reorder the pool, Hint to reveal a correct position, and Check to validate."}),e.jsx(r.BulletItem,{children:"Reveal shows the answer (ends the round), and Next starts a fresh word."}),e.jsx(r.BulletItem,{children:"Stats show solved/played, current streak, and best streak."})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(r.BadgeRow,{children:[e.jsxs(r.Tag,{children:["Solved: ",p.solved]}),e.jsxs(r.Tag,{children:["Played: ",p.played]}),e.jsxs(r.Tag,{children:["Streak: ",p.streak]}),e.jsxs(r.Tag,{tone:"muted",children:["Best: ",p.best]})]})]}),e.jsxs(r.Card,{children:[e.jsxs(r.MetaRow,{children:[e.jsxs(r.Tag,{children:["Letters: ",h.length]}),e.jsxs(r.Tag,{children:["Attempts: ",P]}),e.jsxs(r.Tag,{tone:T?void 0:"muted",children:["Hints: ",T]}),g?e.jsx(r.Tag,{children:"Result: Correct"}):null]}),e.jsx(r.SectionTitle,{children:"Your guess"}),e.jsx("div",{style:{height:6}}),e.jsxs(r.GuessRow,{"aria-label":"Current guess",children:[b.length===0&&e.jsx(r.EmptySlot,{tone:"muted",children:"Click letters below or type…"}),b.map((t,s)=>{var n,l;const o=((n=f.find(c=>c.id===t))==null?void 0:n.ch)||"",a=((l=h[s])==null?void 0:l.toLowerCase())===o.toLowerCase();return e.jsxs(r.GuessTile,{$correct:g||(O===s?!0:void 0),$pulse:O===s,onClick:()=>I(s),title:"Remove this letter",children:[o.toUpperCase(),!g&&e.jsx(r.TileHintTitle,{"aria-hidden":!0,children:a?"✓":""})]},t)})]}),e.jsxs(r.ButtonRow,{children:[e.jsx(r.Button,{type:"button",onClick:re,title:"Clear your current guess",children:"Clear"}),e.jsx(r.Button,{type:"button",onClick:se,title:"Shuffle remaining letters",children:"Shuffle"}),e.jsx(r.Button,{type:"button",onClick:oe,title:"Reveal a correct letter position",children:"Hint"}),e.jsx(r.PrimaryButton,{type:"button",onClick:F,title:"Check your guess",children:"Check"}),e.jsx(r.Button,{type:"button",onClick:ne,title:"Show the answer",children:"Reveal"}),e.jsx(r.Button,{type:"button",onClick:ie,title:"New word",children:"Next"}),e.jsx(r.DangerButton,{type:"button",onClick:ae,title:"Reset all stats",children:"Reset stats"})]}),e.jsx("div",{style:{height:12}}),e.jsx(r.SectionTitle,{children:"Letters"}),e.jsx("div",{style:{height:6}}),e.jsxs(r.PoolWrap,{"aria-label":"Available letters",children:[f.map(t=>t.used?null:e.jsx(r.PoolTile,{onClick:()=>q(t.id),title:"Add this letter",children:t.ch.toUpperCase()},t.id)),R.length===0&&e.jsx(r.Empty,{tone:"muted",children:"No letters left."})]}),D&&e.jsx(r.Toast,{role:"status","aria-live":"polite",children:D})]}),e.jsx(r.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),w&&e.jsx(r.ModalOverlay,{onClick:()=>C(null),children:e.jsxs(r.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(r.ModalTitle,{id:"confirm-title",children:w.title}),w.message?e.jsx(r.ModalMessage,{children:w.message}):null,e.jsxs(r.ModalActions,{children:[!w.hideCancel&&e.jsx(r.Button,{type:"button",onClick:()=>C(null),children:w.cancelText||"Cancel"}),w.tone==="danger"?e.jsx(r.DangerButton,{type:"button",onClick:w.onConfirm,autoFocus:!0,children:w.confirmText||"Confirm"}):e.jsx(r.PrimaryButton,{type:"button",onClick:w.onConfirm,autoFocus:!0,children:w.confirmText||"Confirm"})]})]})})]})})}export{be as default};
