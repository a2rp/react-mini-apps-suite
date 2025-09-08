import{d as r,l as ce,r as o,j as e}from"./index-DkC-bgdE.js";const y="1px solid hsl(0 0% 100% / 0.14)",Q="1px solid hsl(0 0% 100% / 0.10)",W="0 0 0 3px hsl(0 0% 100% / 0.15)",n={Page:r.div`
        min-height: 100dvh;
    `,Container:r.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 56px;
    `,Header:r.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,Title:r.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:r.p`
        margin: 0;
        color: inherit;
        opacity: 0.75;
        font-size: 14px;
    `,Card:r.div`
        border-radius: 16px;
        padding: 16px;
        border: ${y};
        background: transparent;
    `,FormRow:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    `,Label:r.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 220px;
    `,LabelText:r.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:r.input`
        background: transparent;
        color: inherit;
        border: ${y};
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
            box-shadow: ${W};
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
    `,CheckboxRow:r.label`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: ${Q};
        border-radius: 10px;
        padding: 10px 12px;
        cursor: pointer;
        user-select: none;
        input {
            width: 16px;
            height: 16px;
            accent-color: currentColor;
            cursor: pointer;
        }
    `,ButtonRow:r.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Button:r.button`
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
            box-shadow: ${W};
        }
        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    `,PrimaryButton:r.button`
        border: ${y};
        background: transparent;
        color: inherit;
        padding: 10px 14px;
        border-radius: 10px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.05s ease;
        white-space: nowrap;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${W};
        }
    `,DangerButton:r.button`
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
    `,BigTimeCard:r.div`
        border-radius: 16px;
        padding: 22px 16px;
        border: ${y};
        background: transparent;
        display: grid;
        gap: 10px;
        justify-items: center;
        text-align: center;
    `,BigTime:r.div`
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", monospace;
        font-size: clamp(42px, 12vw, 88px);
        letter-spacing: 0.04em;
        line-height: 1.1;
        font-weight: 800;
        color: inherit;
    `,MetaRow:r.div`
        font-size: 12px;
        opacity: 0.8;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        justify-content: center;
    `,Badge:r.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${Q};
        color: inherit;
        ${({tone:i})=>i==="muted"&&ce`
                opacity: 0.7;
            `}
    `,ProgressWrap:r.div`
        display: grid;
        gap: 6px;
        margin-top: 4px;
        width: min(680px, 100%);
    `,ProgressTrack:r.div`
        height: 12px;
        border-radius: 999px;
        border: ${y};
        overflow: hidden;
        background: transparent;
    `,ProgressFill:r.div`
        height: 100%;
        width: ${({$pct:i})=>Math.max(0,Math.min(100,Number(i)||0))}%;
        background: linear-gradient(
            90deg,
            hsl(200 70% 50% / 0.9),
            hsl(140 70% 45% / 0.9)
        );
        transition: width 120ms ease;
    `,FooterNote:r.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:r.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:r.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${y};
        background: transparent;
    `,ModalTitle:r.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:r.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:r.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `},U="simpleTimer.v1",v=i=>String(Math.max(0,i|0)).padStart(2,"0"),g=(i,a,x)=>Math.min(x,Math.max(a,i)),S=i=>{i=Math.max(0,Math.floor(i||0));const a=Math.floor(i/3600),x=Math.floor(i%3600/60),l=i%60;return a>0?`${v(a)}:${v(x)}:${v(l)}`:`${v(x)}:${v(l)}`},de=()=>{try{return JSON.parse(localStorage.getItem(U))??{}}catch{return{}}},pe=i=>{try{localStorage.setItem(U,JSON.stringify(i))}catch{}};let C=null;const R=()=>{if(!C){const i=window.AudioContext||window.webkitAudioContext;i&&(C=new i)}},O=(i=220,a=880,x="sine",l=.08)=>{try{if(R(),!C)return;const h=C.createOscillator(),c=C.createGain();h.type=x,h.frequency.value=a,c.gain.value=l,h.connect(c),c.connect(C.destination),h.start(),setTimeout(()=>{h.stop(),h.disconnect(),c.disconnect()},i)}catch{}},ue=async(i,a)=>"Notification"in window?Notification.permission==="granted"?(new Notification(i,{body:a}),!0):Notification.permission==="default"&&await Notification.requestPermission()==="granted"?(new Notification(i,{body:a}),!0):!1:!1;function he(){var G,H,J,K,_;const i=de(),[a,x]=o.useState(i.label??""),[l,h]=o.useState(i.mm??5),[c,V]=o.useState(i.ss??0),[N,X]=o.useState(i.repeat??!1),[B,Z]=o.useState(i.soundOn??!0),[$,ee]=o.useState(i.notifyOn??!1),E=o.useMemo(()=>g((Number(l)||0)*60+(Number(c)||0),0,24*3600),[l,c]),[s,k]=o.useState(((G=i.last)==null?void 0:G.isRunning)??!1),[m,M]=o.useState(((H=i.last)==null?void 0:H.total)??E),[d,p]=o.useState(((J=i.last)==null?void 0:J.remaining)??E),[u,b]=o.useState(((K=i.last)==null?void 0:K.endAt)??0),[T,P]=o.useState(((_=i.last)==null?void 0:_.baseTotal)??E),F=o.useMemo(()=>(m||0)-(T||0),[m,T]),[f,D]=o.useState(null),te=t=>D({title:"Reset timer?",message:"This will stop and reset the countdown.",confirmText:"Reset",cancelText:"Cancel",tone:"danger",hideCancel:!1,...t});o.useEffect(()=>{pe({label:a,mm:l,ss:c,repeat:N,soundOn:B,notifyOn:$,last:{isRunning:s,total:m,remaining:d,endAt:u,baseTotal:T}})},[a,l,c,N,B,$,s,m,d,u,T]),o.useEffect(()=>{if(!s){const t=g((Number(l)||0)*60+(Number(c)||0),0,86400);P(t),M(t),p(t)}},[l,c]),o.useEffect(()=>{if(s&&u>0){const t=Math.ceil((u-Date.now())/1e3);p(Math.max(0,t)),t<=0&&z()}},[]),o.useEffect(()=>{if(!s)return;const t=setInterval(()=>{const w=Math.ceil((u-Date.now())/1e3);w<=0?(clearInterval(t),z()):p(w)},200);return()=>clearInterval(t)},[s,u]),o.useEffect(()=>{const t="Timer";return s?document.title=`${S(d)} • ${a||t}`:document.title=a?`${a} • ${t}`:t,()=>{document.title=t}},[s,d,a]);const ne=()=>{const t=g((Number(l)||0)*60+(Number(c)||0),0,86400);t&&(P(t),M(t),p(t),b(Date.now()+t*1e3),k(!0),R())},ie=()=>{if(!s)return;const t=Math.max(0,Math.ceil((u-Date.now())/1e3));p(t),k(!1),b(0)},re=()=>{s||d<=0||(b(Date.now()+d*1e3),k(!0),R())},oe=()=>{s?te({onConfirm:Y}):Y()},Y=()=>{const t=g((Number(l)||0)*60+(Number(c)||0),0,86400);k(!1),b(0),P(t),M(t),p(t),D(null)},I=t=>{const w=j=>g(j,0,86400);if(s)b(j=>{const L=j+t*1e3,A=Math.max(0,Math.ceil((L-Date.now())/1e3));return p(A),M(se=>{const le=w((se||0)+t);return Math.max(le,A)}),A<=0&&setTimeout(z,0),L});else{const j=g((d||0)+t,0,86400);p(j),M(L=>Math.max(L||0,j))}},ae=o.useMemo(()=>m<=0?0:Math.round(100*(1-(d||0)/m)),[d,m]),q=o.useMemo(()=>!s||!u?"":new Date(u).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[s,u]);async function z(){if(k(!1),p(0),b(0),B&&(O(180,880),setTimeout(()=>O(180,660),220),setTimeout(()=>O(220,1100),440)),$&&await ue(a||"Timer","Time is up!"),N){const t=g((Number(l)||0)*60+(Number(c)||0),0,86400);t>0&&(P(t),M(t),p(t),b(Date.now()+t*1e3),k(!0))}}return e.jsx(n.Page,{children:e.jsxs(n.Container,{children:[e.jsx(n.Header,{children:e.jsxs("div",{children:[e.jsx(n.Title,{children:"Simple Timer / Countdown"}),e.jsx(n.Sub,{children:"For cooking, workouts, or presentations — persists in LocalStorage."})]})}),e.jsxs(n.Card,{as:"form",onSubmit:t=>t.preventDefault(),children:[e.jsxs(n.FormRow,{children:[e.jsxs(n.Label,{title:"Optional label for your timer",children:[e.jsx(n.LabelText,{children:"Label"}),e.jsx(n.Input,{placeholder:"e.g., Pasta, HIIT, Demo",value:a,onChange:t=>x(t.target.value),"aria-label":"Timer label"})]}),e.jsxs(n.Label,{title:"Minutes part of duration",children:[e.jsx(n.LabelText,{children:"Minutes"}),e.jsx(n.Input,{type:"number",inputMode:"numeric",placeholder:"0",value:l,onChange:t=>h(t.target.value.replace(/[^\d]/g,"")),"aria-label":"Minutes"})]}),e.jsxs(n.Label,{title:"Seconds part of duration (0–59)",children:[e.jsx(n.LabelText,{children:"Seconds"}),e.jsx(n.Input,{type:"number",inputMode:"numeric",placeholder:"0",value:c,onChange:t=>V(String(g(Number(t.target.value||0),0,59))),"aria-label":"Seconds"})]}),e.jsxs(n.RowWrap,{style:{marginTop:2},children:[e.jsx(n.PrimaryButton,{type:"button",onClick:ne,disabled:s||(Number(l)||0)*60+(Number(c)||0)<=0,title:"Start the countdown",children:"▶️ Start"}),s?e.jsx(n.Button,{type:"button",onClick:ie,title:"Pause",children:"⏸️ Pause"}):e.jsx(n.Button,{type:"button",onClick:re,disabled:s||d<=0,title:"Resume",children:"⏯️ Resume"}),e.jsx(n.Button,{type:"button",onClick:oe,title:"Reset to configured duration",children:"🔄 Reset"}),e.jsx(n.Button,{type:"button",onClick:()=>I(-10),title:"-10 seconds",children:"-10s"}),e.jsx(n.Button,{type:"button",onClick:()=>I(10),title:"+10 seconds",children:"+10s"}),e.jsx(n.Button,{type:"button",onClick:()=>I(60),title:"+1 minute",children:"+1m"})]})]}),e.jsxs(n.RowWrap,{style:{marginTop:10},children:[e.jsxs(n.CheckboxRow,{title:"Repeat timer when it finishes",children:[e.jsx("input",{type:"checkbox",checked:N,onChange:t=>X(t.target.checked),"aria-label":"Repeat"}),"Repeat"]}),e.jsxs(n.CheckboxRow,{title:"Play a short beep when time is up",children:[e.jsx("input",{type:"checkbox",checked:B,onChange:t=>{Z(t.target.checked),t.target.checked&&R()},"aria-label":"Sound alert"}),"Sound alert",e.jsx(n.Button,{type:"button",onClick:()=>{R(),O()},title:"Test beep",style:{marginLeft:6},children:"Test"})]}),e.jsxs(n.CheckboxRow,{title:"Show a desktop notification when time is up",children:[e.jsx("input",{type:"checkbox",checked:$,onChange:async t=>{const w=t.target.checked;w&&"Notification"in window&&Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"||ee(w)},"aria-label":"Desktop notification"}),"Desktop notification"]})]})]}),e.jsxs(n.BigTimeCard,{"aria-live":"polite",children:[e.jsx(n.BigTime,{children:S(d)}),e.jsx(n.ProgressWrap,{children:e.jsx(n.ProgressTrack,{"aria-hidden":"true",children:e.jsx(n.ProgressFill,{$pct:ae})})}),e.jsxs(n.MetaRow,{children:[a?e.jsxs(n.Badge,{children:["#",a]}):e.jsx(n.Badge,{tone:"muted",children:"No label"}),e.jsx("span",{children:"•"}),e.jsx(n.Badge,{children:s?"Running":d>0?"Paused":"Finished"}),s&&q?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.Badge,{children:["Ends at ",q]})]}):null,e.jsx("span",{children:"•"}),e.jsxs(n.Badge,{tone:"muted",children:["Total ",S(m)]}),F!==0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"•"}),e.jsxs(n.Badge,{children:["Orig ",S(T)]}),e.jsx("span",{children:"•"}),e.jsxs(n.Badge,{tone:"muted",children:["Δ ",F>=0?"+":"-",S(Math.abs(F))]})]})]})]}),e.jsx(n.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),f&&e.jsx(n.ModalOverlay,{onClick:()=>D(null),children:e.jsxs(n.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx(n.ModalTitle,{id:"confirm-title",children:f.title}),f.message?e.jsx(n.ModalMessage,{children:f.message}):null,e.jsxs(n.ModalActions,{children:[!f.hideCancel&&e.jsx(n.Button,{type:"button",onClick:()=>D(null),children:f.cancelText||"Cancel"}),e.jsx(n.DangerButton,{type:"button",onClick:f.onConfirm,autoFocus:!0,children:f.confirmText||"Confirm"})]})]})})]})})}export{he as default};
