import{d as l,l as ee,r as s,j as t}from"./index-D9eEFYam.js";const h="1px solid hsl(0 0% 100% / 0.14)",te="1px solid hsl(0 0% 100% / 0.10)",w="0 0 0 3px hsl(0 0% 100% / 0.15)",a={Page:l.div`
        min-height: 100dvh;
    `,Container:l.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 32px 18px 84px;
    `,Header:l.header`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: end;
        margin: 12px 0 18px;
        flex-wrap: wrap;
    `,Title:l.h1`
        font-size: clamp(28px, 3.5vw, 40px);
        line-height: 1.1;
        margin: 0 0 6px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: inherit;
    `,Sub:l.p`
        margin: 0;
        color: inherit;
        opacity: 0.82;
        font-size: 14px;
    `,BulletList:l.ul`
        margin: 0;
        padding-left: 18px;
        list-style: disc outside;
        font-size: 14px;
        opacity: 0.82;
        line-height: 1.6;
    `,BulletItem:l.li`
        margin: 2px 0;
    `,BadgeRow:l.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
    `,Tag:l.span`
        font-size: 12px;
        padding: 6px 10px;
        border-radius: 999px;
        border: ${te};
        color: inherit;
        ${({tone:i})=>i==="muted"&&ee`
                opacity: 0.7;
            `}
    `,Card:l.div`
        border-radius: 16px;
        padding: 16px;
        border: ${h};
        background: transparent;
    `,FormRow:l.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: start;
        > * {
            min-width: 0;
        }
    `,RowWrap:l.div`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
    `,ButtonRow:l.div`
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 8px;
    `,Label:l.label`
        display: grid;
        gap: 6px;
        font-size: 12px;
        opacity: 0.95;
        min-width: 0;
        flex: 1 1 240px;
    `,LabelText:l.span`
        opacity: 0.85;
        font-weight: 600;
    `,Input:l.input`
        background: transparent;
        color: inherit;
        border: ${h};
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
        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        &[type="number"] {
            -moz-appearance: textfield;
        }
    `,Select:l.select`
        background: transparent;
        color: inherit;
        border: ${h};
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
    `,TextArea:l.textarea`
        background: transparent;
        color: inherit;
        border: ${h};
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
            box-shadow: ${w};
            border-color: hsl(0 0% 100% / 0.35);
        }
    `,Helper:l.div`
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.75;
    `,PrimaryButton:l.button`
        border: ${h};
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
    `,Button:l.button`
        border: ${h};
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
    `,DangerButton:l.button`
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
    `,ResultCard:l.div`
        margin-top: 10px;
        border: ${h};
        border-radius: 16px;
        padding: 16px;
        background: transparent;
    `,ResultValue:l.div`
        font-size: clamp(22px, 4.5vw, 36px);
        font-weight: 800;
        letter-spacing: -0.02em;
    `,ResultMeta:l.div`
        margin-top: 6px;
        opacity: 0.8;
        font-size: 13px;
    `,List:l.div`
        display: grid;
        gap: 10px;
    `,SectionTitle:l.h2`
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.01em;
    `,Empty:l.div`
        padding: 36px;
        text-align: center;
        opacity: 0.75;
        border: ${h};
        border-style: dashed;
        border-radius: 16px;
        background: transparent;
    `,Item:l.div`
        display: grid;
        grid-template-columns: ${({$edit:i})=>i?"1fr":"1fr auto"};
        gap: 12px;
        align-items: start;
        border: ${h};
        background: transparent;
        border-radius: 16px;
        padding: 12px;
    `,ItemLeft:l.div`
        display: grid;
        gap: 6px;
        min-width: 0;
    `,ItemRight:l.div`
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;
    `,ItemTitle:l.div`
        font-weight: 700;
        color: inherit;
        line-height: 1.2;
    `,ItemMeta:l.div`
        display: flex;
        gap: 8px;
        align-items: center;
        opacity: 0.85;
        font-size: 13px;
        flex-wrap: wrap;
    `,FooterNote:l.p`
        margin: 18px 0 0;
        text-align: center;
        opacity: 0.75;
        font-size: 12px;
    `,ModalOverlay:l.div`
        position: fixed;
        inset: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: hsl(0 0% 100% / 0.03);
        backdrop-filter: blur(3px);
    `,ModalCard:l.div`
        width: min(92vw, 520px);
        border-radius: 16px;
        padding: 16px;
        border: ${h};
        background: transparent;
    `,ModalTitle:l.h3`
        margin: 2px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: inherit;
    `,ModalMessage:l.p`
        margin: 0 0 14px;
        opacity: 0.85;
        line-height: 1.5;
    `,ModalActions:l.div`
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 4px;
    `,Toast:l.div`
        position: fixed;
        left: 50%;
        bottom: 24px;
        transform: translateX(-50%);
        z-index: 1000;
        padding: 8px 14px;
        border-radius: 999px;
        border: ${h};
        background: hsl(0 0% 100% / 0.08);
        backdrop-filter: blur(6px);
        font-size: 12px;
        color: inherit;
    `},A="unitConverter.v1",ae=i=>new Date(i).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"}),re=i=>new Date(i).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),oe=()=>{var i;return((i=crypto==null?void 0:crypto.randomUUID)==null?void 0:i.call(crypto))||`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`},le=()=>{try{return JSON.parse(localStorage.getItem(A))??{history:[]}}catch{return{history:[]}}},ie=i=>{try{localStorage.setItem(A,JSON.stringify(i))}catch{}},E=(i,r,f)=>Math.min(f,Math.max(r,i)),x=(i,r=4)=>{if(!isFinite(i))return"—";const f=E(Number(r)||0,0,12),u=i.toFixed(f);return f?u.replace(/(\.\d*?[1-9])0+$/,"$1").replace(/\.0+$/,""):u},B={length:{label:"Length",base:"m",units:{nm:{label:"Nanometer (nm)",factorToBase:1e-9},um:{label:"Micrometer (µm)",factorToBase:1e-6},mm:{label:"Millimeter (mm)",factorToBase:.001},cm:{label:"Centimeter (cm)",factorToBase:.01},m:{label:"Meter (m)",factorToBase:1},km:{label:"Kilometer (km)",factorToBase:1e3},in:{label:"Inch (in)",factorToBase:.0254},ft:{label:"Foot (ft)",factorToBase:.3048},yd:{label:"Yard (yd)",factorToBase:.9144},mi:{label:"Mile (mi)",factorToBase:1609.344},nmi:{label:"Nautical Mile (nmi)",factorToBase:1852}}},mass:{label:"Mass",base:"kg",units:{mg:{label:"Milligram (mg)",factorToBase:1e-6},g:{label:"Gram (g)",factorToBase:.001},kg:{label:"Kilogram (kg)",factorToBase:1},t:{label:"Tonne (t)",factorToBase:1e3},oz:{label:"Ounce (oz)",factorToBase:.028349523125},lb:{label:"Pound (lb)",factorToBase:.45359237},st:{label:"Stone (st)",factorToBase:6.35029318}}},temperature:{label:"Temperature",base:"K",units:{C:{label:"Celsius (°C)"},F:{label:"Fahrenheit (°F)"},K:{label:"Kelvin (K)"},R:{label:"Rankine (°R)"}}},volume:{label:"Volume",base:"L",units:{mL:{label:"Milliliter (mL)",factorToBase:.001},L:{label:"Liter (L)",factorToBase:1},cm3:{label:"Cubic Centimeter (cm³)",factorToBase:.001},m3:{label:"Cubic Meter (m³)",factorToBase:1e3},tsp:{label:"Teaspoon US (tsp)",factorToBase:.00492892159375},tbsp:{label:"Tablespoon US (tbsp)",factorToBase:.01478676478125},"fl oz":{label:"Fluid Ounce US (fl oz)",factorToBase:.0295735295625},cup:{label:"Cup US (cup)",factorToBase:.2365882365},pt:{label:"Pint US (pt)",factorToBase:.473176473},qt:{label:"Quart US (qt)",factorToBase:.946352946},gal:{label:"Gallon US (gal)",factorToBase:3.785411784}}},area:{label:"Area",base:"m²",units:{"cm²":{label:"Square Centimeter (cm²)",factorToBase:1e-4},"m²":{label:"Square Meter (m²)",factorToBase:1},"km²":{label:"Square Kilometer (km²)",factorToBase:1e6},"in²":{label:"Square Inch (in²)",factorToBase:64516e-8},"ft²":{label:"Square Foot (ft²)",factorToBase:.09290304},"yd²":{label:"Square Yard (yd²)",factorToBase:.83612736},acre:{label:"Acre",factorToBase:4046.8564224},ha:{label:"Hectare (ha)",factorToBase:1e4},"mi²":{label:"Square Mile (mi²)",factorToBase:2589988110336e-6}}},speed:{label:"Speed",base:"m/s",units:{"m/s":{label:"Meters per second (m/s)",factorToBase:1},"km/h":{label:"Kilometers per hour (km/h)",factorToBase:1e3/3600},mph:{label:"Miles per hour (mph)",factorToBase:.44704},"ft/s":{label:"Feet per second (ft/s)",factorToBase:.3048},kn:{label:"Knot (kn)",factorToBase:.514444444}}},pressure:{label:"Pressure",base:"Pa",units:{Pa:{label:"Pascal (Pa)",factorToBase:1},kPa:{label:"Kilopascal (kPa)",factorToBase:1e3},MPa:{label:"Megapascal (MPa)",factorToBase:1e6},bar:{label:"Bar",factorToBase:1e5},atm:{label:"Standard atmosphere (atm)",factorToBase:101325},mmHg:{label:"Millimeter of mercury (mmHg)",factorToBase:133.322368},psi:{label:"Pound-force per square inch (psi)",factorToBase:6894.757293168}}},energy:{label:"Energy",base:"J",units:{J:{label:"Joule (J)",factorToBase:1},kJ:{label:"Kilojoule (kJ)",factorToBase:1e3},cal:{label:"Calorie (cal)",factorToBase:4.184},kcal:{label:"Kilocalorie (kcal)",factorToBase:4184},Wh:{label:"Watt-hour (Wh)",factorToBase:3600},kWh:{label:"Kilowatt-hour (kWh)",factorToBase:36e5},BTU:{label:"British thermal unit (BTU)",factorToBase:1055.05585}}},power:{label:"Power",base:"W",units:{W:{label:"Watt (W)",factorToBase:1},kW:{label:"Kilowatt (kW)",factorToBase:1e3},MW:{label:"Megawatt (MW)",factorToBase:1e6},hp:{label:"Horsepower (hp)",factorToBase:745.699872}}},time:{label:"Time",base:"s",units:{ms:{label:"Millisecond (ms)",factorToBase:.001},s:{label:"Second (s)",factorToBase:1},min:{label:"Minute (min)",factorToBase:60},h:{label:"Hour (h)",factorToBase:3600},day:{label:"Day",factorToBase:86400},week:{label:"Week",factorToBase:604800}}},angle:{label:"Angle",base:"rad",units:{rad:{label:"Radian (rad)",factorToBase:1},deg:{label:"Degree (°)",factorToBase:Math.PI/180},grad:{label:"Gradian (gon)",factorToBase:Math.PI/200}}},data:{label:"Data (decimal)",base:"B",units:{b:{label:"bit (b)",factorToBase:1/8},B:{label:"Byte (B)",factorToBase:1},kB:{label:"Kilobyte (kB)",factorToBase:1e3},MB:{label:"Megabyte (MB)",factorToBase:1e6},GB:{label:"Gigabyte (GB)",factorToBase:1e9},TB:{label:"Terabyte (TB)",factorToBase:1e12}}}},se=i=>Object.entries(B[i].units).sort((r,f)=>(r[1].label||r[0]).localeCompare(f[1].label||f[0])),P=(i,r,f,u)=>{const n=B[i];if(!n)return NaN;const p=n.units[r],c=n.units[f];return!p||!c?NaN:(Number(u)||0)*(p.factorToBase||1)/(c.factorToBase||1)},ne=(i,r)=>(r=Number(r)||0,i==="K"?r:i==="C"?r+273.15:i==="F"?(r-32)*(5/9)+273.15:i==="R"?r*(5/9):r),ce=(i,r)=>i==="K"?r:i==="C"?r-273.15:i==="F"?(r-273.15)*(9/5)+32:i==="R"?r*(9/5):r,W=(i,r,f)=>ce(r,ne(i,f));function ue(){const i=le(),[r,f]=s.useState("length"),[u,n]=s.useState("m"),[p,c]=s.useState("ft"),[g,K]=s.useState(""),[y,H]=s.useState(4),[b,L]=s.useState(()=>i.history||[]),[O,C]=s.useState(!1),T=s.useRef(null),[m,v]=s.useState(null),R=e=>v({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"danger",hideCancel:!1,onConfirm:null,...e}),$=()=>{const e=m==null?void 0:m.onConfirm;v(null),typeof e=="function"&&e()};s.useEffect(()=>{if(!m)return;const e=o=>{o.key==="Escape"&&v(null),o.key==="Enter"&&$()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[m]),s.useEffect(()=>ie({history:b}),[b]);const N=s.useMemo(()=>se(r),[r]);s.useEffect(()=>{r==="length"?(n("m"),c("ft")):r==="mass"?(n("kg"),c("lb")):r==="temperature"?(n("C"),c("F")):r==="volume"?(n("L"),c("gal")):r==="area"?(n("m²"),c("ft²")):r==="speed"?(n("km/h"),c("mph")):r==="pressure"?(n("kPa"),c("psi")):r==="energy"?(n("kJ"),c("kcal")):r==="power"?(n("kW"),c("hp")):r==="time"?(n("min"),c("h")):r==="angle"?(n("deg"),c("rad")):r==="data"&&(n("kB"),c("MB"))},[r]);const j=s.useMemo(()=>{const e=Number(g);return isFinite(e)?r==="temperature"?W(u,p,e):P(r,u,p,e):NaN},[r,u,p,g]),q=()=>{n(e=>{const o=p;return c(e),o})},J=e=>{var o;return(o=e==null?void 0:e.preventDefault)==null?void 0:o.call(e)},G=()=>{const e=Number(g),o=Number(j);if(!isFinite(e)||!isFinite(o))return;const d={id:oe(),at:Date.now(),category:r,from:u,to:p,value:e,result:o,decimals:E(Number(y)||0,0,12)};L(Z=>[d,...Z])},V=e=>{R({title:"Delete entry?",message:"This will remove it from your history.",confirmText:"Delete",onConfirm:()=>L(o=>o.filter(d=>d.id!==e))})},Y=()=>{b.length&&R({title:"Clear all history?",message:"This will delete every conversion record.",confirmText:"Clear All",onConfirm:()=>L([])})},Q=async()=>{const e=Number(g),o=Number(j);if(!isFinite(e)||!isFinite(o))return;const d=`${x(e,y)} ${u} = ${x(o,y)} ${p}`;try{await navigator.clipboard.writeText(d),T.current&&clearTimeout(T.current),C(!0),T.current=setTimeout(()=>C(!1),1200)}catch{}},X=async e=>{const o=`${x(e.value,e.decimals)} ${e.from} = ${x(e.result,e.decimals)} ${e.to}`;try{await navigator.clipboard.writeText(o),T.current&&clearTimeout(T.current),C(!0),T.current=setTimeout(()=>C(!1),1200)}catch{}},[S,I]=s.useState(""),[k,z]=s.useState("All"),[M,D]=s.useState("newest"),F=s.useMemo(()=>{let e=b.slice();if(k!=="All"&&(e=e.filter(o=>o.category===k)),S.trim()){const o=S.toLowerCase();e=e.filter(d=>String(d.from).toLowerCase().includes(o)||String(d.to).toLowerCase().includes(o)||String(d.value).toLowerCase().includes(o)||String(d.result).toLowerCase().includes(o))}return M==="oldest"?e.sort((o,d)=>o.at-d.at):M==="category"?e.sort((o,d)=>(o.category||"").localeCompare(d.category||"")||d.at-o.at):e.sort((o,d)=>d.at-o.at),e},[b,S,k,M]),_=()=>{I(""),z("All"),D("newest")},U=s.useMemo(()=>({categories:Object.keys(B).length,historyCount:b.length}),[b.length]);return s.useEffect(()=>(document.title="Unit Converter",()=>{document.title="Unit Converter"}),[]),t.jsxs(a.Page,{children:[t.jsxs(a.Container,{children:[t.jsxs(a.Header,{children:[t.jsxs("div",{children:[t.jsx(a.Title,{children:"Unit Converter"}),t.jsx("div",{style:{height:8}}),t.jsx(a.Sub,{children:"A clean, offline-first unit converter with broad coverage: length, mass, temperature, volume, area, speed, pressure, energy, power, time, angle, and data. Convert instantly, copy the result, and keep a searchable history — everything stays in LocalStorage."}),t.jsx("div",{style:{height:6}}),t.jsxs(a.BulletList,{"aria-label":"How to use steps",children:[t.jsx(a.BulletItem,{children:"Select a category, choose the from/to units, and enter a value."}),t.jsx(a.BulletItem,{children:"Use Swap to flip units; pick decimal precision if needed."}),t.jsx(a.BulletItem,{children:"Result updates live. Copy or Save to history."})]}),t.jsx("div",{style:{height:10}})]}),t.jsxs(a.BadgeRow,{children:[t.jsxs(a.Tag,{children:["Categories: ",U.categories]}),t.jsxs(a.Tag,{tone:"muted",children:["History: ",U.historyCount]})]})]}),t.jsxs(a.Card,{as:"form",onSubmit:J,children:[t.jsxs(a.FormRow,{children:[t.jsxs(a.Label,{title:"Measurement category",children:[t.jsx(a.LabelText,{children:"Category"}),t.jsx(a.Select,{value:r,onChange:e=>f(e.target.value),"aria-label":"Category",children:Object.entries(B).map(([e,o])=>t.jsx("option",{value:e,children:o.label},e))})]}),t.jsxs(a.Label,{title:"Convert from this unit",children:[t.jsx(a.LabelText,{children:"From"}),t.jsx(a.Select,{value:u,onChange:e=>n(e.target.value),"aria-label":"From unit",children:N.map(([e,o])=>t.jsx("option",{value:e,children:o.label||e},e))})]}),t.jsxs(a.Label,{title:"Convert to this unit",children:[t.jsx(a.LabelText,{children:"To"}),t.jsx(a.Select,{value:p,onChange:e=>c(e.target.value),"aria-label":"To unit",children:N.map(([e,o])=>t.jsx("option",{value:e,children:o.label||e},e))})]}),t.jsxs(a.Label,{title:"Numeric value to convert",children:[t.jsx(a.LabelText,{children:"Value"}),t.jsx(a.Input,{type:"number",inputMode:"decimal",placeholder:"Enter value",value:g,onChange:e=>K(e.target.value),"aria-label":"Value"})]}),t.jsxs(a.Label,{title:"Decimal places in display",children:[t.jsx(a.LabelText,{children:"Decimals"}),t.jsx(a.Select,{value:y,onChange:e=>H(Number(e.target.value)||0),"aria-label":"Decimals",children:[0,1,2,3,4,5,6,7,8,9,10,11,12].map(e=>t.jsx("option",{value:e,children:e},e))})]}),t.jsx(a.RowWrap,{style:{alignSelf:"end"},children:t.jsx(a.Button,{type:"button",onClick:q,title:"Swap units",children:"Swap"})})]}),t.jsxs(a.ResultCard,{"aria-live":"polite",children:[t.jsx(a.ResultValue,{children:isFinite(Number(g))&&isFinite(j)?`${x(Number(g),y)} ${u} = ${x(j,y)} ${p}`:"—"}),t.jsxs(a.ResultMeta,{children:["1 ",u," ="," ",isFinite(j)?x(r==="temperature"?W(u,p,1):P(r,u,p,1),y):"—"," ",p]}),t.jsxs(a.RowWrap,{style:{marginTop:10},children:[t.jsx(a.Button,{type:"button",onClick:Q,title:"Copy result line",children:"Copy"}),t.jsx(a.PrimaryButton,{type:"submit",title:"Convert",children:"Convert"}),t.jsx(a.Button,{type:"button",onClick:G,title:"Save this conversion in history",children:"Save to history"})]})]})]}),t.jsx("div",{style:{marginTop:24}}),t.jsx(a.SectionTitle,{children:"Results (History)"}),t.jsx("div",{style:{height:8}}),t.jsx(a.Card,{children:t.jsxs(a.FormRow,{children:[t.jsxs(a.Label,{title:"Search in units/values",children:[t.jsx(a.LabelText,{children:"Search"}),t.jsx(a.Input,{placeholder:"Search units/values…",value:S,onChange:e=>I(e.target.value),"aria-label":"Search history"})]}),t.jsxs(a.Label,{title:"Filter by category",children:[t.jsx(a.LabelText,{children:"Category"}),t.jsxs(a.Select,{value:k,onChange:e=>z(e.target.value),"aria-label":"Filter category",children:[t.jsx("option",{value:"All",children:"All"}),Object.entries(B).map(([e,o])=>t.jsx("option",{value:e,children:o.label},e))]})]}),t.jsxs(a.Label,{title:"Sort the list",children:[t.jsx(a.LabelText,{children:"Sort by"}),t.jsxs(a.Select,{value:M,onChange:e=>D(e.target.value),"aria-label":"Sort history",children:[t.jsx("option",{value:"newest",children:"Newest"}),t.jsx("option",{value:"oldest",children:"Oldest"}),t.jsx("option",{value:"category",children:"Category"})]})]}),t.jsxs(a.RowWrap,{children:[t.jsx(a.Button,{type:"button",onClick:_,title:"Reset filters",children:"Reset"}),t.jsx(a.DangerButton,{type:"button",onClick:Y,title:"Delete all history",children:"Clear All"})]})]})}),t.jsx("div",{style:{height:10}}),t.jsxs(a.List,{children:[F.length===0&&b.length===0&&t.jsx(a.Empty,{children:"No history yet. Convert and save your first entry!"}),F.length===0&&b.length>0&&t.jsx(a.Empty,{children:"No results match your current filters. Try Reset."}),F.map(e=>{var o;return t.jsxs(a.Item,{children:[t.jsxs(a.ItemLeft,{children:[t.jsxs(a.ItemTitle,{children:[x(e.value,e.decimals)," ",e.from," = ",x(e.result,e.decimals)," ",e.to]}),t.jsxs(a.ItemMeta,{children:[t.jsxs(a.Tag,{children:["#",((o=B[e.category])==null?void 0:o.label)||e.category]}),t.jsx("span",{children:"•"}),t.jsxs(a.Tag,{tone:"muted",children:[ae(e.at)," • ",re(e.at)]})]})]}),t.jsxs(a.ItemRight,{children:[t.jsx(a.Button,{onClick:()=>X(e),title:"Copy line",children:"Copy"}),t.jsx(a.Button,{onClick:()=>V(e.id),title:"Delete",children:"Delete"})]})]},e.id)})]}),t.jsx(a.FooterNote,{children:"Data stays in your browser (LocalStorage). Works offline."}),m&&t.jsx(a.ModalOverlay,{onClick:()=>v(null),children:t.jsxs(a.ModalCard,{role:"dialog","aria-modal":"true","aria-labelledby":"confirm-title",onClick:e=>e.stopPropagation(),children:[t.jsx(a.ModalTitle,{id:"confirm-title",children:m.title}),m.message?t.jsx(a.ModalMessage,{children:m.message}):null,t.jsxs(a.ModalActions,{children:[!m.hideCancel&&t.jsx(a.Button,{type:"button",onClick:()=>v(null),children:m.cancelText||"Cancel"}),m.tone==="danger"?t.jsx(a.DangerButton,{type:"button",onClick:$,autoFocus:!0,children:m.confirmText||"Confirm"}):t.jsx(a.PrimaryButton,{type:"button",onClick:$,autoFocus:!0,children:m.confirmText||"Confirm"})]})]})})]}),O&&t.jsx(a.Toast,{role:"status","aria-live":"polite",children:"Copied"})]})}export{ue as default};
