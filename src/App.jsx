import { useState, useEffect, useRef } from "react";

const C = {
  bg:"#F5F4F1",surface:"#ECEAE6",surfaceAlt:"#E4E2DD",
  border:"rgba(0,0,0,0.06)",
  teal:"#2A8A96",tealText:"#34A3B0",tealSoft:"rgba(42,138,150,0.1)",
  white:"#1A1A1A",dim:"#6B7280",muted:"#8A919A",
  cream:"#FFFFFF",warm:"#F7F6F3",dark:"#1A1A1A",gold:"#9A7B42",
};

const TX={
en:{
since:"Since 2006",h1a:"Deep Analysis.",h1b:"Fast Proof.",h1c:"High Impact.",
heroP:"Strategic sparring, AI-driven enterprise transformation and operational company building. OPEX reduction and new revenue streams — measurable within 6 to 9 months.",
ctaA:"Discover Transformation",ctaB:"Services",
s1:"Transaction Record",s2:"Markets",s3:"Sectors",s4:"Years as CEO",
nav:["Profile","Partners","Transformation","Services","Process","Contact"],
partnerTitle:"Clients & Partners",partnerSub:"Selected relationships from over 20 years of cross-sector collaboration",fo:"+ undisclosed Family Offices",
fLabel:"Founder",
fP1:"Lawyer, startup founder and serial CEO with over 25 years of operational experience. Transaction record exceeding EUR 200 million across six sectors — from telecom to real estate, hospitality, science and social impact.",
fP2:"Commissioned in 2015 as a pioneer by Deutsche Telekom and A1 Group to develop new digital revenue streams. Founder and CEO of Geolad GmbH — a multinational telecom data platform with 30+ employees and partners across EU and Asia.",
fQ:'"Thinking like a lawyer. Acting like an entrepreneur. Transforming digitally."',
sec:["Telecom & Data","Real Estate","Science & Education","Legal","Hospitality","Social Impact"],
compLabel:"Data Compliance & AI Regulation",compTitle:"8 Years of GDPR Expertise. Ready for the EU AI Act.",
compP:"Since the inception of the GDPR in 2018, we have been advising and implementing data protection compliance across multiple industries. This deep regulatory expertise now extends to the EU AI Act — ensuring that AI-driven transformation is not only effective, but fully compliant.",
compItems:["8 years of hands-on GDPR implementation across telecom, real estate, hospitality and science","Data Protection Impact Assessments (DPIAs) for AI systems and automated decision-making","EU AI Act readiness: risk classification, conformity assessments, documentation obligations","Design of compliant AI governance frameworks and data processing architectures","Cross-border data transfer structuring (EU, MENA, ASEAN) under Schrems II requirements","Training and enablement of teams for privacy-by-design and AI compliance culture"],
tLabel:"Enterprise Transformation",tTitle:"OPEX Reduction & New Revenue Streams",
tP:"We don't transform enterprises in theory — we implement measurable results. Two levers: reduce operational costs and unlock new income sources. Both AI-driven, both demonstrable within 6 to 9 months.",
opexT:"OPEX Reduction",
opex:["AI-driven automation of repetitive processes","Reduction of manual error rates and rework costs","Intelligent document management and contract analysis","Consolidation of fragmented data sources and systems","Predictive maintenance replacing reactive cost drivers"],
revT:"New Revenue Streams",
rev:["Data monetisation from existing enterprise assets","AI-driven product and service development","Digital platform and marketplace models","Cross-selling through intelligent customer analytics","Scalable SaaS components from internal solutions"],
k1v:"6–9",k1u:" Months",k1l:"to measurable results",k2v:"30%+",k2u:"",k2l:"typical OPEX savings in target processes",k3v:"Net New",k3u:"",k3l:"revenue streams from existing assets",
sLabel:"Services",sTitle:"What we do",
serv:[
{n:"01",t:"Strategic Sparring & Advisory",d:"C-level strategic reflection with cross-sector perspective. Transaction support in complex stakeholder environments. Interim management.",tags:["CEO Sparring","Transactions","Interim"]},
{n:"02",t:"AI & Data Consulting",d:"Industry-specific AI advisory from readiness assessment to operational implementation. AI agents, data platforms, predictive analytics — GDPR and EU AI Act compliant.",tags:["AI Agents","Data Strategy","EU AI Act"]},
{n:"03",t:"Process & Transformation",d:"End-to-end optimisation. Workflow automation, document management, change management for AI-driven work processes.",tags:["Automation","Change Mgmt","Dashboards"]},
{n:"04",t:"Incubator & Company Building",d:"Building tech startups with founder experience: ideation, incorporation, fundraising, international scaling.",tags:["Building","Fundraising","Scaling"]},
],
pLabel:"Process",pTitle:"From analysis to results in 6–9 months",
proc:[
{n:"01",t:"Initial Meeting",sub:"Week 1",d:"Identify scope, objectives and quick-win potential"},
{n:"02",t:"Case Analysis",sub:"Week 2–3",d:"Deep-dive: processes, data, stakeholders, bottlenecks"},
{n:"03",t:"Strategy Plan",sub:"Week 4–5",d:"Action plan with KPIs, responsibilities, milestones"},
{n:"04",t:"Execution",sub:"Month 2–6",d:"Operational implementation, AI integration, change management"},
{n:"05",t:"Revenue Impact",sub:"Month 6–9",d:"Measurable OPEX reduction and activated revenue streams"},
],
pBar:"Total duration:",pBarB:"6–9 months",pBarC:"from first meeting to measurable revenue impact",pBadge:"Committed Timeline",
cLabel:"Contact",cTitle:"Get in touch.",cP:"For strategic enquiries, partnership opportunities or incubator applications.",
loc:"Vienna, Austria",ent:"InVentures GmbH",entSub:"formerly Inside Holding & Real Estate GmbH (est. 2010)",
},
de:{
since:"Seit 2006",h1a:"Deep Analysis.",h1b:"Fast Proof.",h1c:"High Impact.",
heroP:"Strategisches Sparring, AI-gestuetzte Unternehmenstransformation und operatives Company Building. OPEX-Reduktion und neue Revenue Streams – messbar innerhalb von 6 bis 9 Monaten.",
ctaA:"Transformation entdecken",ctaB:"Leistungen",
s1:"Transaction Record",s2:"Maerkte",s3:"Sektoren",s4:"Jahre als CEO",
nav:["Profil","Partner","Transformation","Leistungen","Prozess","Kontakt"],
partnerTitle:"Kunden & Partner",partnerSub:"Auszug aus ueber 20 Jahren branchenuebergreifender Zusammenarbeit",fo:"+ undisclosed Family Offices",
fLabel:"Gruender",
fP1:"Jurist, Startup-Founder und Mehrfach-CEO mit ueber 25 Jahren operativer Erfahrung. Transaction Record von ueber 200 Mio. EUR ueber sechs Branchen hinweg – von Telekom ueber Immobilien und Hospitality bis Science und Social Impact.",
fP2:"Bereits 2015 als Pionier von der Deutschen Telekom und A1 Group beauftragt, neue digitale Revenue Streams zu entwickeln. Gruender der Geolad GmbH – Telekom-Datenplattform mit 30+ Mitarbeitern und Partnern in EU und Asien.",
fQ:'"Juristisch denkend. Unternehmerisch handelnd. Digital transformierend."',
sec:["Telekom & Data","Immobilien","Science & Education","Legal","Hospitality","Social Impact"],
compLabel:"Data Compliance & AI-Regulierung",compTitle:"8 Jahre DSGVO-Expertise. Bereit fuer den EU AI Act.",
compP:"Seit Inkrafttreten der DSGVO 2018 beraten und implementieren wir Datenschutz-Compliance ueber mehrere Branchen hinweg. Diese tiefe regulatorische Expertise erstreckt sich nun auf den EU AI Act – damit AI-getriebene Transformation nicht nur wirksam, sondern vollstaendig compliant ist.",
compItems:["8 Jahre hands-on DSGVO-Implementierung in Telekom, Immobilien, Hospitality und Science","Datenschutz-Folgenabschaetzungen (DSFAs) fuer AI-Systeme und automatisierte Entscheidungsfindung","EU AI Act Readiness: Risikoklassifizierung, Konformitaetsbewertungen, Dokumentationspflichten","Design complianter AI-Governance-Frameworks und Datenverarbeitungsarchitekturen","Cross-Border-Datentransfer-Strukturierung (EU, MENA, ASEAN) unter Schrems-II-Anforderungen","Training und Enablement von Teams fuer Privacy-by-Design und AI-Compliance-Kultur"],
tLabel:"Unternehmenstransformation",tTitle:"OPEX-Reduktion & neue Revenue Streams",
tP:"Wir transformieren Unternehmen nicht theoretisch – wir implementieren messbare Ergebnisse. Zwei Hebel: operative Kosten senken und neue Einnahmequellen erschliessen. Beides AI-gestuetzt, beides innerhalb von 6 bis 9 Monaten nachweisbar.",
opexT:"OPEX-Reduktion",
opex:["AI-gestuetzte Automatisierung repetitiver Prozesse","Reduktion manueller Fehlerquoten und Nacharbeitskosten","Intelligentes Dokumentenmanagement und Vertragsanalyse","Konsolidierung fragmentierter Datenquellen und Systeme","Predictive Maintenance statt reaktiver Kostentreiber"],
revT:"Neue Revenue Streams",
rev:["Datenmonetarisierung aus bestehenden Unternehmensassets","AI-gestuetzte Produkt- und Serviceentwicklung","Digitale Plattform- und Marktplatzmodelle","Cross-Selling durch intelligente Kundenanalyse","Skalierbare SaaS-Komponenten aus internen Loesungen"],
k1v:"6–9",k1u:" Monate",k1l:"bis zum messbaren Ergebnis",k2v:"30%+",k2u:"",k2l:"typische OPEX-Ersparnis",k3v:"Net New",k3u:"",k3l:"Revenue Streams aus bestehenden Assets",
sLabel:"Leistungen",sTitle:"Was wir tun",
serv:[
{n:"01",t:"Strategic Sparring & Advisory",d:"Strategische Reflexion auf Augenhoehe mit CEOs und Vorstaenden. Cross-Sektor-Perspektive. Transaktionsbegleitung. Interim Management.",tags:["CEO-Sparring","Transaktionen","Interim"]},
{n:"02",t:"AI & Data Consulting",d:"Branchenspezifische AI-Beratung vom Assessment bis zur Implementierung. AI-Agenten, Datenplattformen, Predictive Analytics – DSGVO- und EU-AI-Act-konform.",tags:["AI-Agents","Data Strategy","EU AI Act"]},
{n:"03",t:"Prozess & Transformation",d:"End-to-End-Optimierung. Workflow-Automatisierung, Dokumentenmanagement, Change Management fuer AI-gestuetzte Arbeitsprozesse.",tags:["Automatisierung","Change Mgmt","Dashboards"]},
{n:"04",t:"Incubator & Company Building",d:"Tech-Startups aufbauen mit Founder-Erfahrung: Ideation, Gesellschaftsgruendung, Fundraising, internationale Skalierung.",tags:["Building","Fundraising","Scaling"]},
],
pLabel:"Prozess",pTitle:"Von der Analyse zum Ergebnis in 6–9 Monaten",
proc:[
{n:"01",t:"Erstgespraech",sub:"Woche 1",d:"Scope, Ziele und Quick-Win-Potenziale identifizieren"},
{n:"02",t:"Case-Analyse",sub:"Woche 2–3",d:"Tiefenanalyse: Prozesse, Daten, Stakeholder, Engpaesse"},
{n:"03",t:"Strategieplan",sub:"Woche 4–5",d:"Massnahmenplan mit KPIs, Verantwortlichkeiten, Meilensteinen"},
{n:"04",t:"Umsetzung",sub:"Monat 2–6",d:"Operative Implementierung, AI-Integration, Change Management"},
{n:"05",t:"Revenue Impact",sub:"Monat 6–9",d:"Messbare OPEX-Reduktion und aktivierte Revenue Streams"},
],
pBar:"Gesamtdauer:",pBarB:"6–9 Monate",pBarC:"von Erstgespraech bis messbarem Revenue Impact",pBadge:"Verbindlicher Zeitrahmen",
cLabel:"Kontakt",cTitle:"Get in touch.",cP:"Fuer strategische Anfragen, Partnerschaftsmoeglichkeiten oder Incubator-Bewerbungen.",
loc:"Wien, Oesterreich",ent:"InVentures GmbH",entSub:"vormals Inside Holding & Real Estate GmbH (gegr. 2010)",
},
cn:{
since:"始于2006年",h1a:"深度分析。",h1b:"快验证。",h1c:"高回报。",
heroP:"战略顾问、AI驱动企业转型与运营公司建设。运营成本优化与新收入来源——6至9个月内可衡量成果。",
ctaA:"了解转型方案",ctaB:"服务内容",
s1:"交易记录",s2:"市场覆盖",s3:"行业领域",s4:"CEO经验",
nav:["创始人","合作伙伴","转型","服务","流程","联系"],
partnerTitle:"客户与合作伙伴",partnerSub:"逾20年跨行业合作精选",fo:"+ 非公开家族办公室",
fLabel:"创始人",
fP1:"法律专家、连续创业者及多次担任CEO，拥有超过25年的运营经验。横跨六大行业的交易记录超过2亿欧元——从电信到房地产、酒店、科研和社会公益。",
fP2:"2015年受德国电信和A1集团委托，率先开发新数字收入来源。Geolad GmbH创始人兼CEO——跨国电信数据平台，30+员工，合作伙伴遍布欧洲和亚洲。",
fQ:'"以法律思维思考。以企业家方式行动。以数字化实现转型。"',
sec:["电信与数据","房地产","科研与教育","法律","酒店业","社会公益"],
compLabel:"数据合规与AI监管",compTitle:"8年GDPR经验。为欧盟AI法案做好准备。",
compP:"自2018年GDPR生效以来，我们一直在多个行业中提供数据保护合规咨询和实施。这一深厚的监管专业知识现已扩展至欧盟AI法案——确保AI驱动的转型不仅有效，而且完全合规。",
compItems:["在电信、房地产、酒店和科研领域8年的GDPR实施经验","针对AI系统和自动决策的数据保护影响评估","欧盟AI法案就绪：风险分类、合规评估、文档义务","设计合规的AI治理框架和数据处理架构","Schrems II要求下的跨境数据传输结构（欧盟、中东北非、东盟）","团队隐私设计和AI合规文化培训"],
tLabel:"企业转型",tTitle:"运营成本优化与新收入来源",
tP:"我们不做理论转型——我们实现可衡量的结果。聚焦两大杠杆：降低运营成本，开拓新收入来源。均以AI驱动，均在6至9个月内可验证。",
opexT:"运营成本优化",
opex:["AI驱动重复流程自动化","降低人工错误率和返工成本","智能文档管理与合同分析","整合碎片化数据源和系统","预测性维护取代被动成本驱动"],
revT:"新收入来源",
rev:["从现有企业资产中实现数据变现","AI驱动的产品与服务开发","数字平台与市场模式","通过智能客户分析实现交叉销售","从内部解决方案构建可扩展SaaS组件"],
k1v:"6–9",k1u:" 个月",k1l:"达到可衡量成果",k2v:"30%+",k2u:"",k2l:"目标流程运营成本节省",k3v:"全新",k3u:"",k3l:"来自现有资产的收入来源",
sLabel:"服务",sTitle:"我们的业务",
serv:[
{n:"01",t:"战略顾问与咨询",d:"与CEO和董事会平等对话的战略反思。跨行业视角。交易支持。临时管理。",tags:["CEO顾问","交易","临时管理"]},
{n:"02",t:"AI与数据咨询",d:"从准备度评估到运营实施的行业AI咨询。AI代理、数据平台、预测分析——符合GDPR和欧盟AI法案。",tags:["AI代理","数据战略","欧盟AI法案"]},
{n:"03",t:"流程与转型",d:"端到端优化。工作流自动化、文档管理、AI驱动工作流程的变革管理。",tags:["自动化","变革管理","仪表盘"]},
{n:"04",t:"孵化器与公司建设",d:"以创始人经验构建科技初创企业：创意、公司设立、融资、国际化扩展。",tags:["建设","融资","扩展"]},
],
pLabel:"流程",pTitle:"从分析到成果：6–9个月",
proc:[
{n:"01",t:"初次会议",sub:"第1周",d:"确定范围、目标和速赢潜力"},
{n:"02",t:"案例分析",sub:"第2–3周",d:"深度分析：流程、数据、利益相关方、瓶颈"},
{n:"03",t:"战略规划",sub:"第4–5周",d:"包含KPI、责任分配和里程碑的行动计划"},
{n:"04",t:"执行实施",sub:"第2–6月",d:"运营实施、AI集成、变革管理"},
{n:"05",t:"收入成效",sub:"第6–9月",d:"可衡量的运营成本降低和已激活的收入来源"},
],
pBar:"总周期：",pBarB:"6–9个月",pBarC:"从首次会议到可衡量的收入成效",pBadge:"承诺时间框架",
cLabel:"联系",cTitle:"联系我们",cP:"欢迎战略咨询、合作机会或孵化器申请。",
loc:"维也纳，奥地利",ent:"InVentures GmbH",entSub:"前身 Inside Holding & Real Estate GmbH（成立于2010年）",
},
};

const anchors=["profil","partner","transformation","leistungen","prozess","kontakt"];
const partners=["Deutsche Telekom","A1 Group","Orange","Zain Group","Viettel","Huawei","Ericsson","Conwert SE","EPI Immobilien Group","Trimmobilien Gruppe","Arcotel Hotels","Plaza Group","Ibis Group","European Stroke Organisation","SFU Wien","Donau Universitaet Krems","Lansky Rechtsanwaelte","Prader Rechtsanwaelte","ORF","Integrationshaus Wien"];
const secDetail=["Deutsche Telekom, A1 Group, Orange, Zain, Viettel, Huawei, Ericsson","Conwert SE, EPI Immobilien Group, Arcotel Hotels, Trimmobilien","European Stroke Organisation, SFU Wien, Donau Universitaet Krems","Lansky Ganzger & Partner, Prader Rechtsanwaelte","Arcotel Hotels, Plaza Group, Ibis Group","Integrationshaus Wien, ORF, Red Bull, Verein vidid"];

function useV(t=0.1){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){s(true);o.unobserve(e);}},{threshold:t});o.observe(e);return()=>o.disconnect();},[t]);return[r,v];}

function useIsMobile(bp=768){const[m,s]=useState(false);useEffect(()=>{const c=()=>s(window.innerWidth<=bp);c();window.addEventListener("resize",c);return()=>window.removeEventListener("resize",c);},[bp]);return m;}

function R({children,delay=0}){
  const[r,v]=useV();
  return <div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(14px)",transition:`opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`}}>{children}</div>;
}

const F="'DM Sans',sans-serif";
const Label=({children})=>(<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><div style={{width:24,height:1,background:C.teal}}/><span style={{fontFamily:F,fontSize:10,letterSpacing:3,textTransform:"uppercase",color:C.tealText,fontWeight:600}}>{children}</span></div>);
const H2D=({children})=><h2 style={{fontFamily:F,fontSize:"clamp(26px,3vw,38px)",fontWeight:300,color:C.white,marginBottom:44,letterSpacing:"-0.02em"}}>{children}</h2>;
const H2L=({children})=><h2 style={{fontFamily:F,fontSize:"clamp(26px,3vw,38px)",fontWeight:300,color:C.dark,marginBottom:44,letterSpacing:"-0.02em"}}>{children}</h2>;
const Dot=({color})=><div style={{width:4,height:4,borderRadius:"50%",background:color,marginTop:7,flexShrink:0}}/>;

export default function App(){
  const[lang,setLang]=useState("en");
  const t=TX[lang];
  const[scrolled,setScrolled]=useState(false);
  const mob=useIsMobile();
  useEffect(()=>{const h=()=>setScrolled(window.scrollY>40);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);

  const[menuOpen,setMenuOpen]=useState(false);

  return(
<div style={{fontFamily:F}}>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
<style>{`*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{overflow-x:hidden;background:#F5F4F1}::selection{background:${C.teal};color:#fff}
@keyframes drift{0%{transform:translate(0,0)}50%{transform:translate(15px,-10px)}100%{transform:translate(0,0)}}
@keyframes glow{0%{opacity:0.03}50%{opacity:0.06}100%{opacity:0.03}}
@media(max-width:768px){
  .nav-links{display:none!important}
  .mob-menu{display:flex!important}
  .grid-2{grid-template-columns:1fr!important}
  .grid-3{grid-template-columns:1fr!important}
  .stats-row{gap:24px!important;flex-wrap:wrap!important}
  .proc-row{flex-direction:column!important;gap:28px!important}
  .proc-row>div{text-align:left!important;display:flex!important;gap:14px!important;align-items:flex-start!important}
  .proc-line{display:none!important}
  .proc-circle{margin:0!important;flex-shrink:0!important}
  .hero-pad{padding:110px 20px 60px!important}
  .sec-pad{padding:60px 20px!important}
  .kontakt-grid{grid-template-columns:1fr!important}
  .partner-wrap{justify-content:flex-start!important}
}
@media(max-width:480px){
  .stats-row{gap:16px!important}
  .stats-row>div>div:first-child{font-size:20px!important}
}`}</style>

{/* NAV */}
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:scrolled||menuOpen?"rgba(245,243,239,0.97)":"transparent",backdropFilter:scrolled||menuOpen?"blur(20px)":"none",borderBottom:scrolled?`1px solid rgba(0,0,0,0.08)`:"none",transition:"all 0.3s",padding:scrolled?"11px 0":"18px 0"}}>
<div style={{maxWidth:1060,margin:"0 auto",padding:"0 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
  <a href="#" style={{textDecoration:"none",display:"flex",flexDirection:"column"}}>
    <div style={{display:"flex",alignItems:"baseline",gap:4}}>
      <span style={{fontFamily:F,fontSize:15,fontWeight:700,color:C.white,letterSpacing:2.5}}>INVENTURES</span>
      <span style={{fontFamily:F,fontSize:9,letterSpacing:1.5,color:C.dim}}>.at</span>
    </div>
    <span style={{fontFamily:F,fontSize:7.5,letterSpacing:1.5,color:C.dim,textTransform:"uppercase",marginTop:1}}>InVentures GmbH</span>
  </a>
  <div className="nav-links" style={{display:"flex",alignItems:"center",gap:20}}>
    {t.nav.map((l,i)=>(
      <a key={i} href={`#${anchors[i]}`} style={{fontFamily:F,fontSize:11,letterSpacing:0.8,textTransform:lang==="cn"?"none":"uppercase",color:C.dim,textDecoration:"none",transition:"color 0.2s",fontWeight:500}}
        onMouseEnter={e=>e.target.style.color=C.white} onMouseLeave={e=>e.target.style.color=C.dim}>{l}</a>
    ))}
    <div style={{width:1,height:14,background:C.border,margin:"0 4px"}}/>
    <div style={{display:"flex",gap:2}}>
      {[["en","EN"],["de","DE"],["cn","中文"]].map(([code,label])=>(
        <button key={code} onClick={()=>setLang(code)} style={{fontFamily:F,fontSize:10,letterSpacing:0.5,fontWeight:lang===code?700:400,color:lang===code?C.tealText:C.dim,background:lang===code?C.tealSoft:"transparent",border:"none",padding:"4px 8px",cursor:"pointer",transition:"all 0.2s"}}>{label}</button>
      ))}
    </div>
  </div>
  {/* Mobile hamburger + lang switcher */}
  <div className="mob-menu" style={{display:"none",alignItems:"center",gap:12}}>
    <div style={{display:"flex",gap:2}}>
      {[["en","EN"],["de","DE"],["cn","中文"]].map(([code,label])=>(
        <button key={code} onClick={()=>setLang(code)} style={{fontFamily:F,fontSize:10,fontWeight:lang===code?700:400,color:lang===code?C.tealText:C.dim,background:lang===code?C.tealSoft:"transparent",border:"none",padding:"4px 6px",cursor:"pointer"}}>{label}</button>
      ))}
    </div>
    <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"none",border:"none",cursor:"pointer",padding:8,display:"flex",flexDirection:"column",gap:5}}>
      <div style={{width:22,height:2,background:C.white,transition:"all 0.3s",transform:menuOpen?"rotate(45deg) translate(3px,3px)":"none"}}/>
      <div style={{width:22,height:2,background:C.white,transition:"all 0.3s",opacity:menuOpen?0:1}}/>
      <div style={{width:22,height:2,background:C.white,transition:"all 0.3s",transform:menuOpen?"rotate(-45deg) translate(3px,-3px)":"none"}}/>
    </button>
  </div>
</div>
{/* Mobile dropdown menu */}
{menuOpen && (
  <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:12,borderTop:`1px solid ${C.border}`}}>
    {t.nav.map((l,i)=>(
      <a key={i} href={`#${anchors[i]}`} onClick={()=>setMenuOpen(false)} style={{fontFamily:F,fontSize:14,color:C.dim,textDecoration:"none",padding:"4px 0"}}>{l}</a>
    ))}
  </div>
)}
</nav>

{/* HERO */}
<section style={{minHeight:"100vh",display:"flex",alignItems:"center",background:`linear-gradient(160deg, #F0EEE9 0%, #EAE8E3 30%, #F2F0EB 60%, #F5F3EF 100%)`,position:"relative",overflow:"hidden"}}>
{/* dot grid */}
<div style={{position:"absolute",inset:0,opacity:0.03,backgroundImage:`radial-gradient(${C.teal} 0.4px, transparent 0.4px)`,backgroundSize:"32px 32px"}}/>
{/* large gradient orb top-right */}
<div style={{position:"absolute",top:"-25%",right:"-15%",width:"70%",height:"120%",background:`radial-gradient(ellipse at center, rgba(42,138,150,0.08) 0%, transparent 60%)`,pointerEvents:"none",animation:"drift 20s ease-in-out infinite"}}/>
{/* secondary orb bottom-left */}
<div style={{position:"absolute",bottom:"-30%",left:"-10%",width:"50%",height:"80%",background:`radial-gradient(ellipse at center, rgba(176,144,88,0.05) 0%, transparent 55%)`,pointerEvents:"none",animation:"drift 25s ease-in-out infinite reverse"}}/>
{/* pulsing center glow */}
<div style={{position:"absolute",top:"30%",left:"40%",width:"30%",height:"40%",background:`radial-gradient(ellipse, rgba(42,138,150,0.05) 0%, transparent 60%)`,pointerEvents:"none",animation:"glow 8s ease-in-out infinite"}}/>
{/* diagonal line accent */}
<svg style={{position:"absolute",top:0,right:0,width:"100%",height:"100%",pointerEvents:"none",opacity:0.04}} viewBox="0 0 1200 800" preserveAspectRatio="none">
  <line x1="800" y1="0" x2="1200" y2="400" stroke={C.teal} strokeWidth="0.6"/>
  <line x1="900" y1="0" x2="1200" y2="300" stroke={C.teal} strokeWidth="0.4"/>
  <line x1="700" y1="0" x2="1200" y2="500" stroke={C.teal} strokeWidth="0.4"/>
  <line x1="1000" y1="0" x2="1200" y2="200" stroke={C.teal} strokeWidth="0.6"/>
  <line x1="0" y1="600" x2="400" y2="800" stroke={C.gold} strokeWidth="0.3"/>
  <line x1="0" y1="700" x2="300" y2="800" stroke={C.gold} strokeWidth="0.3"/>
</svg>
{/* geometric corner frame */}
<div style={{position:"absolute",top:100,right:60,width:200,height:200,border:`1px solid rgba(42,138,150,0.08)`,pointerEvents:"none"}}/>
<div style={{position:"absolute",top:120,right:80,width:200,height:200,border:`1px solid rgba(42,138,150,0.05)`,pointerEvents:"none"}}/>
{/* horizontal light streak */}
<div style={{position:"absolute",top:"38%",left:0,right:0,height:1,background:`linear-gradient(90deg, transparent 0%, rgba(42,138,150,0.08) 30%, rgba(42,138,150,0.05) 70%, transparent 100%)`,pointerEvents:"none"}}/>
{/* vertical subtle line */}
<div style={{position:"absolute",top:0,bottom:0,left:"62%",width:1,background:`linear-gradient(180deg, transparent 0%, rgba(42,138,150,0.06) 40%, rgba(42,138,150,0.02) 70%, transparent 100%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",padding:mob?"100px 20px 48px":"140px 40px 80px",position:"relative",width:"100%",zIndex:1}}>
  <R><Label>{t.since}</Label></R>
  <R delay={0.08}><h1 style={{fontFamily:F,fontSize:"clamp(36px,5vw,64px)",fontWeight:300,color:C.white,lineHeight:1.1,marginBottom:24,maxWidth:720,letterSpacing:"-0.025em"}}>{t.h1a}<br/><span style={{fontWeight:700,color:C.tealText}}>{t.h1b}</span><br/>{t.h1c}</h1></R>
  <R delay={0.16}><p style={{fontFamily:F,fontSize:16,color:C.dim,lineHeight:1.75,maxWidth:500,marginBottom:40}}>{t.heroP}</p></R>
  <R delay={0.24}>
    <div style={{display:"flex",gap:14}}>
      <a href="#transformation" style={{fontFamily:F,fontSize:11,letterSpacing:1.2,textTransform:"uppercase",fontWeight:600,padding:"13px 28px",background:C.teal,color:C.white,textDecoration:"none",transition:"opacity 0.2s"}} onMouseEnter={e=>e.target.style.opacity="0.85"} onMouseLeave={e=>e.target.style.opacity="1"}>{t.ctaA}</a>
      <a href="#leistungen" style={{fontFamily:F,fontSize:11,letterSpacing:1.2,textTransform:"uppercase",fontWeight:500,padding:"13px 28px",border:`1px solid ${C.border}`,color:C.dim,textDecoration:"none",transition:"all 0.2s"}} onMouseEnter={e=>{e.target.style.borderColor=C.tealText;e.target.style.color=C.tealText}} onMouseLeave={e=>{e.target.style.borderColor=C.border;e.target.style.color=C.dim}}>{t.ctaB}</a>
    </div>
  </R>
  <R delay={0.32}>
    <div style={{display:"flex",gap:mob?20:52,marginTop:mob?40:64,flexWrap:"wrap"}}>
      {[{v:"200M+",l:t.s1},{v:"EU & Asia",l:t.s2},{v:"6",l:t.s3},{v:"20+",l:t.s4}].map((s,i)=>(
        <div key={i}><div style={{fontFamily:F,fontSize:24,fontWeight:700,color:C.tealText}}>{s.v}</div><div style={{fontFamily:F,fontSize:10,letterSpacing:1.5,textTransform:"uppercase",color:C.dim,marginTop:3,fontWeight:500}}>{s.l}</div></div>
      ))}
    </div>
  </R>
</div>
</section>

{/* PARTNERS */}
<section id="partner" style={{background:`linear-gradient(180deg, #F0EEE9 0%, #EBE9E4 50%, #F0EEE9 100%)`,padding:mob?"32px 20px":"56px 40px",borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`,position:"relative",overflow:"hidden"}}>
{/* soft horizontal glow */}
<div style={{position:"absolute",top:"40%",left:0,right:0,height:1,background:`linear-gradient(90deg, transparent, rgba(42,138,150,0.06), transparent)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R>
    <div style={{textAlign:"center",marginBottom:28}}>
      <span style={{fontFamily:F,fontSize:10,letterSpacing:3,textTransform:"uppercase",color:C.dim,fontWeight:500}}>{t.partnerTitle}</span>
    </div>
  </R>
  <R delay={0.06}>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:0,lineHeight:2.4}}>
      {partners.map((n,i)=>(
        <span key={i} style={{display:"inline-flex",alignItems:"center",cursor:"default"}}>
          <span style={{fontFamily:F,fontSize:13,fontWeight:500,color:"rgba(26,26,26,0.25)",letterSpacing:0.4,whiteSpace:"nowrap",transition:"color 0.3s",padding:"0 4px"}}
            onMouseEnter={e=>e.target.style.color=C.tealText}
            onMouseLeave={e=>e.target.style.color="rgba(236,234,230,0.28)"}>{n}</span>
          {i<partners.length-1 && <span style={{color:"rgba(42,138,150,0.2)",fontSize:6,padding:"0 10px"}}>&#9679;</span>}
        </span>
      ))}
      <span style={{display:"inline-flex",alignItems:"center"}}>
        <span style={{color:"rgba(42,138,150,0.2)",fontSize:6,padding:"0 10px"}}>&#9679;</span>
        <span style={{fontFamily:F,fontSize:13,fontWeight:400,color:"rgba(26,26,26,0.18)",fontStyle:"italic",whiteSpace:"nowrap",padding:"0 4px"}}>{t.fo}</span>
      </span>
    </div>
  </R>
</div>
</section>

{/* PROFIL */}
<section id="profil" style={{background:C.cream,padding:mob?"48px 20px":"88px 40px"}}>
<div style={{maxWidth:1060,margin:"0 auto"}}>
  <R><Label>{t.fLabel}</Label></R>
  <R delay={0.04}><h2 style={{fontFamily:F,fontSize:"clamp(26px,3vw,38px)",fontWeight:300,color:C.dark,marginBottom:44,letterSpacing:"-0.02em"}}>Mag. David Brainin</h2></R>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:mob?24:48}}>
    <R delay={0.08}>
      <div>
        <p style={{fontFamily:F,fontSize:15,color:C.dark,lineHeight:1.8,marginBottom:16}}>{t.fP1}</p>
        <p style={{fontFamily:F,fontSize:15,color:C.dark,lineHeight:1.8,marginBottom:24}}>{t.fP2}</p>
        <div style={{padding:"16px 20px",borderLeft:`2px solid ${C.teal}`,background:C.warm}}>
          <p style={{fontFamily:F,fontSize:15,fontStyle:"italic",color:C.dark,lineHeight:1.6,margin:0}}>{t.fQ}</p>
        </div>
      </div>
    </R>
    <R delay={0.16}>
      <div style={{display:"flex",flexDirection:"column",gap:5}}>
        {t.sec.map((s,i)=>(
          <div key={i} style={{padding:"11px 16px",background:"#fff",border:"1px solid #EAE8E4",transition:"all 0.2s",cursor:"default"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal;e.currentTarget.style.transform="translateX(2px)"}} onMouseLeave={e=>{e.currentTarget.style.borderColor="#EAE8E4";e.currentTarget.style.transform="translateX(0)"}}>
            <div style={{fontFamily:F,fontSize:10,letterSpacing:2,textTransform:"uppercase",color:C.teal,fontWeight:700,marginBottom:2}}>{s}</div>
            <div style={{fontFamily:F,fontSize:12,color:"#6B7280"}}>{secDetail[i]}</div>
          </div>
        ))}
      </div>
    </R>
  </div>
</div>
</section>

{/* COMPLIANCE */}
<section style={{background:`linear-gradient(170deg, #F0EEE9 0%, #EBE9E4 50%, #F0EEE9 100%)`,padding:mob?"48px 20px":"88px 40px",borderBottom:`1px solid ${C.border}`,position:"relative",overflow:"hidden"}}>
{/* subtle cross-hatch */}
<svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",opacity:0.025}} preserveAspectRatio="none" viewBox="0 0 800 600">
  <pattern id="ch" width="40" height="40" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="40" y2="40" stroke={C.teal} strokeWidth="0.4"/></pattern>
  <rect width="100%" height="100%" fill="url(#ch)"/>
</svg>
{/* glow */}
<div style={{position:"absolute",top:"20%",right:"-5%",width:"40%",height:"60%",background:`radial-gradient(ellipse, rgba(42,138,150,0.06) 0%, transparent 60%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R><Label>{t.compLabel}</Label></R>
  <R delay={0.04}><H2D>{t.compTitle}</H2D></R>
  <R delay={0.08}><p style={{fontFamily:F,fontSize:15,color:C.dim,lineHeight:1.8,maxWidth:640,marginBottom:40}}>{t.compP}</p></R>
  <R delay={0.12}>
    <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:16}}>
      {t.compItems.map((item,i)=>(
        <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"14px 18px",background:"#EAEAE6",border:`1px solid ${C.border}`}}>
          <div style={{width:20,height:20,borderRadius:"50%",border:`1.5px solid ${C.teal}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
            <span style={{fontFamily:F,fontSize:9,fontWeight:700,color:C.tealText}}>{String(i+1).padStart(2,"0")}</span>
          </div>
          <span style={{fontFamily:F,fontSize:13,color:C.muted,lineHeight:1.6}}>{item}</span>
        </div>
      ))}
    </div>
  </R>
</div>
</section>

{/* TRANSFORMATION */}
<section id="transformation" style={{background:`linear-gradient(175deg, #F2F0EB 0%, #EDEBE6 40%, #F0EEE9 70%, #F5F3EF 100%)`,padding:mob?"48px 20px":"88px 40px",position:"relative",overflow:"hidden"}}>
{/* large ambient orb */}
<div style={{position:"absolute",top:"-15%",left:"-10%",width:"55%",height:"80%",background:`radial-gradient(ellipse, rgba(176,144,88,0.05) 0%, transparent 55%)`,pointerEvents:"none"}}/>
{/* diagonal light lines */}
<svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",opacity:0.03}} preserveAspectRatio="none" viewBox="0 0 1200 900">
  <line x1="0" y1="200" x2="1200" y2="600" stroke={C.teal} strokeWidth="0.4"/>
  <line x1="0" y1="250" x2="1200" y2="650" stroke={C.teal} strokeWidth="0.2"/>
  <line x1="600" y1="0" x2="1200" y2="900" stroke={C.gold} strokeWidth="0.3"/>
</svg>
{/* horizontal divider glow */}
<div style={{position:"absolute",top:"55%",left:0,right:0,height:1,background:`linear-gradient(90deg, transparent 5%, rgba(42,138,150,0.05) 30%, rgba(176,144,88,0.04) 70%, transparent 95%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R><Label>{t.tLabel}</Label></R>
  <R delay={0.04}><H2D>{t.tTitle}</H2D></R>
  <R delay={0.08}><p style={{fontFamily:F,fontSize:15,color:C.dim,lineHeight:1.8,maxWidth:600,marginBottom:44}}>{t.tP}</p></R>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:16,marginBottom:40}}>
    <R delay={0.12}>
      <div style={{padding:"28px 24px",border:`1px solid ${C.border}`,background:"#EAEAE6",height:"100%"}}>
        <div style={{fontFamily:F,fontSize:11,letterSpacing:2,textTransform:"uppercase",color:C.tealText,fontWeight:600,marginBottom:16}}>{t.opexT}</div>
        {t.opex.map((x,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:12}}><Dot color={C.teal}/><span style={{fontFamily:F,fontSize:13,color:C.muted,lineHeight:1.6}}>{x}</span></div>))}
      </div>
    </R>
    <R delay={0.16}>
      <div style={{padding:"28px 24px",border:`1px solid ${C.border}`,background:"#EAEAE6",height:"100%"}}>
        <div style={{fontFamily:F,fontSize:11,letterSpacing:2,textTransform:"uppercase",color:C.gold,fontWeight:600,marginBottom:16}}>{t.revT}</div>
        {t.rev.map((x,i)=>(<div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:12}}><Dot color={C.gold}/><span style={{fontFamily:F,fontSize:13,color:C.muted,lineHeight:1.6}}>{x}</span></div>))}
      </div>
    </R>
  </div>
  <R delay={0.2}>
    <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"repeat(3,1fr)",gap:mob?12:16}}>
      {[{v:t.k1v,u:t.k1u,l:t.k1l,c:C.tealText},{v:t.k2v,u:t.k2u,l:t.k2l,c:C.tealText},{v:t.k3v,u:t.k3u,l:t.k3l,c:C.gold}].map((s,i)=>(
        <div key={i} style={{padding:"22px",background:C.surfaceAlt,border:`1px solid ${C.border}`,textAlign:"center"}}>
          <div style={{fontFamily:F,fontSize:26,fontWeight:700,color:s.c}}>{s.v}<span style={{fontSize:15,fontWeight:400}}>{s.u}</span></div>
          <div style={{fontFamily:F,fontSize:10,color:C.dim,marginTop:4,letterSpacing:0.5,textTransform:"uppercase"}}>{s.l}</div>
        </div>
      ))}
    </div>
  </R>
</div>
</section>

{/* SERVICES */}
<section id="leistungen" style={{background:C.cream,padding:mob?"48px 20px":"88px 40px"}}>
<div style={{maxWidth:1060,margin:"0 auto"}}>
  <R><Label>{t.sLabel}</Label></R>
  <R delay={0.04}><H2L>{t.sTitle}</H2L></R>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:14}}>
    {t.serv.map((s,i)=>(
      <R key={i} delay={i*0.06}>
        <div style={{padding:"28px 24px",border:"1px solid #EAE8E4",background:"#fff",transition:"border-color 0.25s",height:"100%",display:"flex",flexDirection:"column"}} onMouseEnter={e=>e.currentTarget.style.borderColor=C.teal} onMouseLeave={e=>e.currentTarget.style.borderColor="#EAE8E4"}>
          <span style={{fontFamily:F,fontSize:26,fontWeight:200,color:"rgba(42,138,150,0.18)"}}>{s.n}</span>
          <h3 style={{fontFamily:F,fontSize:17,fontWeight:600,color:C.dark,margin:"4px 0 10px"}}>{s.t}</h3>
          <p style={{fontFamily:F,fontSize:13,color:"#6B7280",lineHeight:1.7,flex:1}}>{s.d}</p>
          <div style={{display:"flex",gap:5,flexWrap:"wrap",marginTop:14}}>
            {s.tags.map(tag=><span key={tag} style={{fontFamily:F,fontSize:9,letterSpacing:0.8,textTransform:"uppercase",fontWeight:600,padding:"3px 8px",background:C.tealSoft,color:C.teal}}>{tag}</span>)}
          </div>
        </div>
      </R>
    ))}
  </div>
</div>
</section>

{/* PROCESS */}
<section id="prozess" style={{background:`linear-gradient(165deg, #F0EEE9 0%, #EDEBE6 50%, #F2F0EB 100%)`,padding:mob?"48px 20px":"88px 40px",position:"relative",overflow:"hidden"}}>
{/* concentric rings */}
<svg style={{position:"absolute",top:"-20%",right:"-15%",width:"60%",height:"140%",pointerEvents:"none",opacity:0.03}} viewBox="0 0 600 600">
  <circle cx="300" cy="300" r="120" fill="none" stroke={C.teal} strokeWidth="0.6"/>
  <circle cx="300" cy="300" r="200" fill="none" stroke={C.teal} strokeWidth="0.4"/>
  <circle cx="300" cy="300" r="280" fill="none" stroke={C.teal} strokeWidth="0.2"/>
</svg>
{/* ambient glow */}
<div style={{position:"absolute",bottom:"-20%",left:"20%",width:"40%",height:"60%",background:`radial-gradient(ellipse, rgba(42,138,150,0.06) 0%, transparent 55%)`,pointerEvents:"none"}}/>
<div style={{maxWidth:1060,margin:"0 auto",position:"relative",zIndex:1}}>
  <R><Label>{t.pLabel}</Label></R>
  <R delay={0.04}><H2D>{t.pTitle}</H2D></R>
  <R delay={0.08}>
    <div style={{position:"relative",display:"flex",flexDirection:mob?"column":"row",gap:mob?24:0}}>
      <div style={{position:"absolute",top:28,left:48,right:48,height:2,display:mob?"none":"block",background:`linear-gradient(90deg,${C.teal},${C.gold})`,opacity:0.2,zIndex:0}}/>
      {t.proc.map((s,i)=>{const last=i===4;return(
        <div key={i} style={{flex:1,position:"relative",zIndex:1,textAlign:mob?"left":"center",padding:mob?"0":"0 6px",display:mob?"flex":"block",gap:mob?14:0,alignItems:mob?"flex-start":"center"}}>
          <div style={{width:56,height:56,borderRadius:"50%",border:`2px solid ${last?C.gold:C.teal}`,background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",margin:mob?"0":"0 auto 14px"}}>
            <span style={{fontFamily:F,fontSize:15,fontWeight:700,color:last?C.gold:C.tealText}}>{s.n}</span>
          </div>
          <div style={{fontFamily:F,fontSize:13,fontWeight:600,color:C.white,marginBottom:3}}>{s.t}</div>
          <div style={{fontFamily:F,fontSize:10,letterSpacing:1,textTransform:"uppercase",color:last?C.gold:C.tealText,fontWeight:600,marginBottom:8}}>{s.sub}</div>
          <div style={{fontFamily:F,fontSize:11,color:C.dim,lineHeight:1.55}}>{s.d}</div>
        </div>
      )})}
    </div>
  </R>
  <R delay={0.16}>
    <div style={{marginTop:44,padding:"18px 24px",background:C.surfaceAlt,border:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <span style={{fontFamily:F,fontSize:13,color:C.muted}}>{t.pBar} <strong style={{color:C.white}}>{t.pBarB}</strong> {t.pBarC}</span>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:6,height:6,borderRadius:"50%",background:C.teal}}/>
        <span style={{fontFamily:F,fontSize:10,color:C.tealText,letterSpacing:1,textTransform:"uppercase",fontWeight:600}}>{t.pBadge}</span>
      </div>
    </div>
  </R>
</div>
</section>

{/* CONTACT */}
<section id="kontakt" style={{background:C.cream,padding:mob?"48px 20px":"88px 40px"}}>
<div style={{maxWidth:1060,margin:"0 auto"}}>
  <div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:mob?24:48}}>
    <R>
      <div>
        <Label>{t.cLabel}</Label>
        <h2 style={{fontFamily:F,fontSize:"clamp(26px,3vw,38px)",fontWeight:300,color:C.dark,marginBottom:16,letterSpacing:"-0.02em"}}>{t.cTitle}</h2>
        <p style={{fontFamily:F,fontSize:15,color:"#6B7280",lineHeight:1.75,maxWidth:380}}>{t.cP}</p>
      </div>
    </R>
    <R delay={0.08}>
      <div>
        <div style={{display:"flex",flexDirection:"column",gap:16,marginTop:4}}>
          {[{l:"Web",v:"inventures.at",h:"https://inventures.at"},{l:"E-Mail",v:"info@inventures.at",h:"mailto:info@inventures.at"},{l:"Location",v:t.loc,h:null}].map((c,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:14,borderBottom:"1px solid #EAE8E4"}}>
              <span style={{fontFamily:F,fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"#6B7280",fontWeight:500}}>{c.l}</span>
              {c.h?<a href={c.h} style={{fontFamily:F,fontSize:15,color:C.dark,textDecoration:"none",fontWeight:500,transition:"color 0.2s"}} onMouseEnter={e=>e.target.style.color=C.teal} onMouseLeave={e=>e.target.style.color=C.dark}>{c.v}</a>
                :<span style={{fontFamily:F,fontSize:15,color:C.dark,fontWeight:500}}>{c.v}</span>}
            </div>
          ))}
        </div>
        <div style={{marginTop:28}}>
          <span style={{fontFamily:F,fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"#6B7280",fontWeight:500,display:"block",marginBottom:6}}>Legal Entity</span>
          <p style={{fontFamily:F,fontSize:13,color:C.dark,lineHeight:1.6,margin:0}}>{t.ent}<br/><span style={{color:"#9CA3AF"}}>{t.entSub}</span></p>
        </div>
      </div>
    </R>
  </div>
</div>
</section>

{/* FOOTER */}
<footer style={{background:`linear-gradient(180deg, #F0EEE9 0%, #F5F3EF 100%)`,padding:mob?"20px 20px":"28px 40px",borderTop:`1px solid ${C.border}`}}>
<div style={{maxWidth:1060,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
  <div style={{display:"flex",flexDirection:"column"}}>
    <div style={{display:"flex",alignItems:"baseline",gap:4}}>
      <span style={{fontFamily:F,fontSize:12,fontWeight:700,color:C.white,letterSpacing:2.5}}>INVENTURES</span>
      <span style={{fontFamily:F,fontSize:8,letterSpacing:1.5,color:C.dim}}>.at</span>
    </div>
    <span style={{fontFamily:F,fontSize:8,color:C.dim,letterSpacing:1,marginTop:2}}>{t.ent}</span>
  </div>
  <span style={{fontFamily:F,fontSize:10,color:C.dim}}>2006–2026 {t.ent}</span>
</div>
</footer>

</div>
  );
}
