import{d as r,l as A,r as l,j as e}from"./index-DkC-bgdE.js";const c="1px solid hsl(0 0% 100% / 0.14)",pe="1px solid hsl(0 0% 100% / 0.10)",w="0 0 0 3px hsl(0 0% 100% / 0.15)",t={Page:r.div`
        min-height: 100dvh;
    `,Container:r.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 72px;
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
        opacity: 0.8;
        font-size: 14px;
    `,BulletList:r.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.85;
        line-height: 1.6;
    `,BulletItem:r.li`
        margin: 2px 0;
    `,BadgeRow:r.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:r.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${pe};
        color: inherit;
        ${({tone:n})=>n==="muted"&&A`
                opacity: 0.7;
            `}
    `,Card:r.div`
        border-radius: 16px;
        padding: 16px;
        border: ${c};
        background: transparent;
        position: relative;
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
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,ButtonRow:r.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
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
        border: ${c};
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
            box-shadow: ${w};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Select:r.select`
        background: transparent;
        color: inherit;
        border: ${c};
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        min-width: 0;
        width: 100%;
        &:focus-visible {
            box-shadow: ${w};
            border-color: hsl(0 0% 100% / 0.35);
        }
        option {
            color: #000;
        }
    `,PrimaryButton:r.button`
        border: ${c};
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
            box-shadow: ${w};
        }
    `,Button:r.button`
        border: ${c};
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
            box-shadow: ${w};
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
    `,ProgressWrap:r.div`
        display: grid;
        gap: 6px;
    `,ProgressTrack:r.div`
        height: 10px;
        border-radius: 999px;
        border: ${c};
        overflow: hidden;
        background: transparent;
    `,ProgressFill:r.div`
        height: 100%;
        width: ${({$pct:n})=>Math.max(0,Math.min(100,Number(n)||0))}%;
        background: linear-gradient(
            90deg,
            hsl(200 70% 55% / 0.9),
            hsl(140 70% 45% / 0.9)
        );
        transition: width 150ms ease;
    `,ProgressText:r.div`
        font-size: 12px;
        opacity: 0.85;
    `,OptionGrid:r.div`
        margin-top: 12px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 10px;
    `,Option:r.button`
        --on: hsl(200 70% 55% / 0.2);
        border: ${c};
        background: ${({$selected:n})=>n?"var(--on)":"transparent"};
        color: inherit;
        border-radius: 12px;
        padding: 12px;
        text-align: left;
        cursor: pointer;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 10px;
        &:active {
            transform: translateY(1px);
        }
        &:focus-visible {
            box-shadow: ${w};
        }
    `,OptionIndex:r.span`
        font-weight: 800;
        opacity: 0.9;
    `,OptionText:r.span`
        opacity: 0.95;
    `,List:r.div`
        display: grid;
        gap: 10px;
    `,SectionTitle:r.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,Empty:r.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${c};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:r.div`
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 12px;
        align-items: start;
        border: ${c};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
        ${({$accent:n})=>n==="good"&&A`
                box-shadow: 0 0 0 3px hsl(140 70% 45% / 0.25);
                border-color: hsl(140 70% 50% / 0.7);
            `}
        ${({$accent:n})=>n==="bad"&&A`
                box-shadow: 0 0 0 3px hsl(0 70% 60% / 0.2);
                border-color: hsl(0 70% 60% / 0.6);
            `}
    `,ItemLeft:r.div`
        display: grid;
        gap: 8px;
        min-width: 0;
    `,ItemRight:r.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:r.div`
        font-weight: 700;
        line-height: 1.3;
        color: inherit;
    `,ItemMeta:r.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        flex-wrap: wrap;
    `,AnswerList:r.div`
        display: grid;
        gap: 6px;
    `,AnswerRow:r.div`
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 8px;
        align-items: center;
        border-radius: 10px;
        padding: 8px 10px;
        ${({$state:n})=>n==="correct"&&A`
                border: ${c};
                box-shadow: 0 0 0 2px hsl(140 70% 45% / 0.25) inset;
            `}
        ${({$state:n})=>n==="chosen"&&A`
                border: ${c};
                box-shadow: 0 0 0 2px hsl(200 70% 55% / 0.2) inset;
            `}
    `,MetaRow:r.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 12px;
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
        border: ${c};
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
    `,PrimaryButton:r.button`
        border: ${c};
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
            box-shadow: ${w};
        }
    `,Button:r.button`
        border: ${c};
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
            box-shadow: ${w};
        }
    `},X="quizApp.v1",he=n=>new Date(n).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),ue=n=>new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),xe=()=>{try{return JSON.parse(localStorage.getItem(X))??{}}catch{return{}}},fe=n=>{try{localStorage.setItem(X,JSON.stringify(n))}catch{}},ge=n=>{const d=n.slice();for(let b=d.length-1;b>0;b--){const x=Math.floor(Math.random()*(b+1));[d[b],d[x]]=[d[x],d[b]]}return d},me=()=>{var n;return((n=crypto==null?void 0:crypto.randomUUID)==null?void 0:n.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`},E=[{id:"js1",topic:"JavaScript",difficulty:"Easy",q:"Which keyword declares a block-scoped variable?",choices:["var","let","function","with"],a:1},{id:"js2",topic:"JavaScript",difficulty:"Easy",q:"What does Array.prototype.map return?",choices:["A mutated array","The same array","A new array","A number"],a:2},{id:"js3",topic:"JavaScript",difficulty:"Medium",q:"What is the value of typeof null in JS?",choices:['"object"','"null"','"undefined"','"number"'],a:0},{id:"js4",topic:"JavaScript",difficulty:"Medium",q:"Which method removes the last element of an array?",choices:["shift()","pop()","splice(0,1)","slice(-1)"],a:1},{id:"js5",topic:"JavaScript",difficulty:"Hard",q:"What does the 'this' value depend on?",choices:["Where a function is defined","How a function is called","File name","Strict mode cannot affect it"],a:1},{id:"r1",topic:"React",difficulty:"Easy",q:"What hook manages component state?",choices:["useState","useMemo","useRef","useEffect"],a:0},{id:"r2",topic:"React",difficulty:"Easy",q:"JSX compiles down to calls to…",choices:["React.memo","React.createElement","React.lazy","React.forwardRef"],a:1},{id:"r3",topic:"React",difficulty:"Medium",q:"Which hook runs after paint by default?",choices:["useLayoutEffect","useImperativeHandle","useEffect","useCallback"],a:2},{id:"r4",topic:"React",difficulty:"Medium",q:"What prop is required when rendering lists?",choices:["id","className","style","key"],a:3},{id:"r5",topic:"React",difficulty:"Hard",q:"useMemo caches based on…",choices:["object identity","dependency array","CPU load","render count"],a:1},{id:"c1",topic:"CSS",difficulty:"Easy",q:"Which unit is relative to root font size?",choices:["em","vh","rem","%"],a:2},{id:"c2",topic:"CSS",difficulty:"Medium",q:"Flexbox main axis is set by…",choices:["align-items","justify-content","flex-direction","flex-wrap"],a:2},{id:"c3",topic:"CSS",difficulty:"Hard",q:"What creates a new stacking context?",choices:["position: static","z-index: auto","transform","display: inline"],a:2},{id:"h1",topic:"HTML",difficulty:"Easy",q:"Semantic tag for navigation links is…",choices:["<nav>","<section>","<aside>","<article>"],a:0},{id:"h2",topic:"HTML",difficulty:"Medium",q:"Which attribute improves accessibility for images?",choices:["srcset","loading","alt","width"],a:2},{id:"h3",topic:"HTML",difficulty:"Hard",q:"Which element is not phrasing content?",choices:["<span>","<em>","<strong>","<div>"],a:3},{id:"w1",topic:"Web",difficulty:"Easy",q:"HTTP 404 indicates…",choices:["Unauthorized","Forbidden","Not Found","Too Many Requests"],a:2},{id:"w2",topic:"Web",difficulty:"Medium",q:"Which storage persists across sessions per origin?",choices:["sessionStorage","localStorage","Memory cache","Cookies (Session)"],a:1},{id:"w3",topic:"Web",difficulty:"Hard",q:"CORS primarily controls…",choices:["Script execution order","Cross-origin resource access","DNS caching","TLS versions"],a:1}],W=Array.from(new Set(E.map(n=>n.topic))).sort(),ye=["Any","Easy","Medium","Hard"];function je(){const n=xe(),[d,b]=l.useState(n.topic??W[0]),[x,V]=l.useState(n.difficulty??"Any"),[v,Z]=l.useState(n.numQuestions??5),[a,N]=l.useState(n.quiz??[]),[f,L]=l.useState(n.idx??0),[p,B]=l.useState(n.answers??[]),[T,H]=l.useState(n.startedAt??0),[C,P]=l.useState(n.finishedAt??0),g=a.length>0&&C===0,O=a.length>0&&C>0,[j,Q]=l.useState(n.attempts??[]),[h,y]=l.useState(null);l.useEffect(()=>{fe({topic:d,difficulty:x,numQuestions:v,quiz:a,idx:f,answers:p,startedAt:T,finishedAt:C,attempts:j})},[d,x,v,a,f,p,T,C,j]);const k=l.useMemo(()=>{if(!a.length)return 0;let i=0;for(let o=0;o<a.length;o++)p[o]===a[o].a&&i++;return i},[a,p]),ee=l.useMemo(()=>{if(!a.length)return 0;const i=p.filter(o=>o!=null).length;return Math.round(100*i/a.length)},[a,p]),Y=()=>{const i=E.filter(m=>m.topic===d);let s=(x==="Any"?i:i.filter(m=>m.difficulty===x)).slice();if(s.length<v){const m=i.filter(M=>!s.includes(M));s=s.concat(m)}if(s.length<v){const m=E.filter(M=>!s.includes(M));s=s.concat(m)}if(s.length===0)return;const u=ge(s).slice(0,v);N(u),B(Array(u.length).fill(null)),L(0),H(Date.now()),P(0)},te=()=>{g?y({title:"Start a new quiz?",message:"This will discard your current progress.",confirmText:"Start new",tone:"danger",onConfirm:()=>{y(null),Y()}}):Y()},ie=()=>{g&&y({title:"Quit this quiz?",message:"Your answers will be discarded.",confirmText:"Quit",tone:"danger",onConfirm:()=>{N([]),B([]),L(0),H(0),P(0),y(null)}})},re=()=>{if(!g)return;const i=Date.now();P(i);const o={id:me(),at:i,topic:d,difficulty:x,total:a.length,correct:k,durationSec:T?Math.max(0,Math.round((i-T)/1e3)):0,items:a.map((s,u)=>({id:s.id,q:s.q,topic:s.topic,difficulty:s.difficulty,choices:s.choices,answerIndex:s.a,selectedIndex:p[u],isCorrect:p[u]===s.a}))};Q(s=>[o,...s])},se=i=>{g&&B(o=>{const s=[...o];return s[f]=i,s})},oe=()=>L(i=>Math.max(0,i-1)),ne=()=>L(i=>Math.min(a.length-1,i+1)),[R,J]=l.useState(""),[q,U]=l.useState("All"),[$,G]=l.useState("All"),[I,_]=l.useState(0),[z,K]=l.useState("newest"),D=l.useMemo(()=>{let i=j.slice();if(q!=="All"&&(i=i.filter(o=>o.topic===q)),$!=="All"&&(i=i.filter(o=>o.difficulty===$)),I>0&&(i=i.filter(o=>Math.round(100*o.correct/o.total)>=I)),R.trim()){const o=R.toLowerCase();i=i.filter(s=>s.items.some(u=>(u.q||"").toLowerCase().includes(o)))}return z==="oldest"?i.sort((o,s)=>o.at-s.at):z==="score"?i.sort((o,s)=>s.correct/s.total-o.correct/o.total||s.at-o.at):i.sort((o,s)=>s.at-o.at),i},[j,R,q,$,I,z]),ae=()=>{J(""),U("All"),G("All"),_(0),K("newest")},le=()=>{j.length&&y({title:"Clear all results?",message:"This will delete every past quiz attempt.",confirmText:"Clear All",tone:"danger",onConfirm:()=>{Q([]),y(null)}})},F=a[f]||null,ce=g?`Question ${f+1} / ${a.length}`:"",de=l.useMemo(()=>g?Math.round(100*(f+1)/a.length):0,[g,f,a.length]);return e.jsx(t.Page,{children:e.jsxs(t.Container,{children:[e.jsxs(t.Header,{children:[e.jsxs("div",{children:[e.jsx(t.Title,{children:"Quiz App"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Sub,{children:"A clean, offline-first quiz app. Pick a topic and difficulty, answer multiple-choice questions, and see your score. Attempts are saved locally in your browser (LocalStorage), so it’s refresh-safe."}),e.jsx("div",{style:{height:6}}),e.jsxs(t.BulletList,{"aria-label":"How to use",children:[e.jsx(t.BulletItem,{children:"Select a topic, difficulty, and number of questions."}),e.jsx(t.BulletItem,{children:"Start the quiz, pick an answer for each question, and navigate with Next/Prev."}),e.jsx(t.BulletItem,{children:"Submit to see your score and review each answer."}),e.jsx(t.BulletItem,{children:"Scroll down to the Results section to search/filter past attempts."})]}),e.jsx("div",{style:{height:10}})]}),e.jsxs(t.BadgeRow,{children:[e.jsxs(t.Tag,{children:["Topic: ",d]}),e.jsxs(t.Tag,{children:["Diff: ",x]}),g?e.jsxs(t.Tag,{children:["Progress: ",ee,"%"]}):null,O?e.jsxs(t.Tag,{children:["Score: ",k,"/",a.length]}):null]})]}),e.jsx(t.Card,{children:e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Choose a topic for the quiz",children:[e.jsx(t.LabelText,{children:"Topic"}),e.jsx(t.Select,{value:d,onChange:i=>b(i.target.value),"aria-label":"Topic",children:W.map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs(t.Label,{title:"Pick difficulty",children:[e.jsx(t.LabelText,{children:"Difficulty"}),e.jsx(t.Select,{value:x,onChange:i=>V(i.target.value),"aria-label":"Difficulty",children:ye.map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs(t.Label,{title:"How many questions",children:[e.jsx(t.LabelText,{children:"Questions"}),e.jsx(t.Select,{value:v,onChange:i=>Z(Number(i.target.value)||5),"aria-label":"Number of questions",children:[5,10,15].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.PrimaryButton,{type:"button",onClick:te,title:"Start a new quiz",children:"Start quiz"}),g&&e.jsx(t.Button,{type:"button",onClick:ie,title:"Quit and discard",children:"Quit"})]})]})}),g&&F&&e.jsxs(t.Card,{style:{marginTop:12},"aria-live":"polite",children:[e.jsxs(t.ProgressWrap,{children:[e.jsx(t.ProgressTrack,{"aria-hidden":"true",children:e.jsx(t.ProgressFill,{$pct:de})}),e.jsx(t.ProgressText,{children:ce})]}),e.jsx(t.SectionTitle,{style:{marginTop:10},children:F.q}),e.jsx(t.OptionGrid,{children:F.choices.map((i,o)=>{const s=p[f]===o;return e.jsxs(t.Option,{$selected:s,onClick:()=>se(o),title:s?"Selected":"Select this option",children:[e.jsxs(t.OptionIndex,{children:[String.fromCharCode(65+o),"."]}),e.jsx(t.OptionText,{children:i})]},o)})}),e.jsxs(t.ButtonRow,{children:[e.jsx(t.Button,{type:"button",onClick:oe,disabled:f===0,children:"Prev"}),f<a.length-1?e.jsx(t.PrimaryButton,{type:"button",onClick:ne,children:"Next"}):e.jsx(t.PrimaryButton,{type:"button",onClick:re,disabled:p.some(i=>i===null),children:"Submit quiz"})]})]}),O&&e.jsxs(t.Card,{style:{marginTop:12},children:[e.jsx(t.SectionTitle,{children:"Summary"}),e.jsx("div",{style:{height:6}}),e.jsxs(t.MetaRow,{children:[e.jsxs(t.Tag,{children:["Score: ",k," / ",a.length]}),e.jsxs(t.Tag,{children:["Percent: ",Math.round(100*k/a.length),"%"]}),e.jsxs(t.Tag,{children:["Duration: ",Math.max(0,Math.round((C-T)/1e3)),"s"]})]}),e.jsx(t.List,{children:a.map((i,o)=>{const s=p[o],u=i.a,m=s===u;return e.jsxs(t.Item,{$accent:m?"good":"bad",children:[e.jsxs(t.ItemLeft,{children:[e.jsxs(t.ItemTitle,{children:["Q",o+1,". ",i.q]}),e.jsxs(t.ItemMeta,{children:[e.jsxs(t.Tag,{children:["#",i.topic]}),e.jsx("span",{children:"•"}),e.jsxs(t.Tag,{children:["#",i.difficulty]})]}),e.jsx(t.AnswerList,{children:i.choices.map((M,S)=>e.jsxs(t.AnswerRow,{$state:S===u?"correct":S===s?"chosen":"plain",children:[e.jsxs("span",{children:[String.fromCharCode(65+S),"."]}),e.jsx("span",{children:M}),e.jsx("span",{children:S===u?"Correct":S===s?"Your choice":""})]},S))})]}),e.jsx(t.ItemRight,{})]},i.id)})})]}),e.jsx("div",{style:{marginTop:24}}),e.jsx(t.SectionTitle,{children:"Results"}),e.jsx("div",{style:{height:8}}),e.jsx(t.Card,{children:e.jsxs(t.FormRow,{children:[e.jsxs(t.Label,{title:"Search within attempt questions",children:[e.jsx(t.LabelText,{children:"Search"}),e.jsx(t.Input,{placeholder:"Search question text…",value:R,onChange:i=>J(i.target.value),"aria-label":"Search attempts"})]}),e.jsxs(t.Label,{title:"Filter by topic",children:[e.jsx(t.LabelText,{children:"Topic"}),e.jsxs(t.Select,{value:q,onChange:i=>U(i.target.value),"aria-label":"Filter by topic",children:[e.jsx("option",{value:"All",children:"All topics"}),W.map(i=>e.jsx("option",{value:i,children:i},i))]})]}),e.jsxs(t.Label,{title:"Filter by difficulty",children:[e.jsx(t.LabelText,{children:"Difficulty"}),e.jsxs(t.Select,{value:$,onChange:i=>G(i.target.value),"aria-label":"Filter by difficulty",children:[e.jsx("option",{value:"All",children:"All"}),["Easy","Medium","Hard"].map(i=>e.jsx("option",{value:i,children:i},i))]})]}),e.jsxs(t.Label,{title:"Show attempts with score ≥ this percentage",children:[e.jsx(t.LabelText,{children:"Min %"}),e.jsx(t.Select,{value:I,onChange:i=>_(Number(i.target.value)||0),"aria-label":"Minimum percent",children:[0,50,60,70,80,90,100].map(i=>e.jsx("option",{value:i,children:i},i))})]}),e.jsxs(t.Label,{title:"Sort results",children:[e.jsx(t.LabelText,{children:"Sort by"}),e.jsxs(t.Select,{value:z,onChange:i=>K(i.target.value),"aria-label":"Sort",children:[e.jsx("option",{value:"newest",children:"Newest"}),e.jsx("option",{value:"oldest",children:"Oldest"}),e.jsx("option",{value:"score",children:"Score"})]})]}),e.jsxs(t.RowWrap,{children:[e.jsx(t.Button,{type:"button",onClick:ae,children:"Reset"}),e.jsx(t.DangerButton,{type:"button",onClick:le,children:"Clear All"})]})]})}),e.jsx("div",{style:{height:10}}),e.jsxs(t.List,{children:[D.length===0&&j.length===0&&e.jsx(t.Empty,{children:"No attempts yet. Start a quiz!"}),D.length===0&&j.length>0&&e.jsx(t.Empty,{children:"No attempts match your filters. Try Reset."}),D.map(i=>e.jsxs(t.Item,{children:[e.jsxs(t.ItemLeft,{children:[e.jsxs(t.ItemTitle,{children:[i.topic," • ",i.difficulty," — ",i.correct,"/",i.total," (",Math.round(100*i.correct/i.total),"%)"]}),e.jsxs(t.ItemMeta,{children:[e.jsxs(t.Tag,{tone:"muted",children:[he(i.at)," • ",ue(i.at)]}),e.jsx("span",{children:"•"}),e.jsxs(t.Tag,{children:["Duration ",i.durationSec,"s"]})]})]}),e.jsx(t.ItemRight,{})]},i.id))]}),e.jsx(t.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),h&&e.jsx(t.ModalOverlay,{onClick:()=>y(null),children:e.jsxs(t.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:i=>i.stopPropagation(),children:[e.jsx(t.ModalTitle,{id:"confirm-title",children:h.title}),h.message?e.jsx(t.ModalMessage,{children:h.message}):null,e.jsxs(t.ModalActions,{children:[!h.hideCancel&&e.jsx(t.Button,{type:"button",onClick:()=>y(null),children:h.cancelText||"Cancel"}),h.tone==="danger"?e.jsx(t.DangerButton,{type:"button",onClick:h.onConfirm,autoFocus:!0,children:h.confirmText||"Confirm"}):e.jsx(t.PrimaryButton,{type:"button",onClick:h.onConfirm,autoFocus:!0,children:h.confirmText||"Confirm"})]})]})})]})})}export{je as default};
