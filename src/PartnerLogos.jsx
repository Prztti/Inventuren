import { useState } from "react";

const F = "'DM Sans',sans-serif";
const gold = "#9A7B42";
const goldText = "#B8924E";

const logosTech = [
  { name: "A1 Group", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/A1_Telekom_Austria_logo.svg/200px-A1_Telekom_Austria_logo.svg.png" },
  { name: "Orange", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png" },
  { name: "Huawei", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei_Logo.svg/200px-Huawei_Logo.svg.png" },
  { name: "Ericsson", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ericsson_logo_2023.svg/200px-Ericsson_logo_2023.svg.png" },
  { name: "UNIQA", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/UNIQA_logo.svg/200px-UNIQA_logo.svg.png" },
  { name: "Deutsche Telekom", url: null },
  { name: "Viettel", url: null },
  { name: "Zain Group", url: null },
];

const logosRE = [
  { name: "Wiener Privatbank SE", url: null },
  { name: "EPI Immobilien Group", url: null },
  { name: "EPI Hospitality", url: null },
  { name: "Uniqa Versicherung", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/UNIQA_logo.svg/200px-UNIQA_logo.svg.png" },
  { name: "Arcotel Hotels", url: null },
  { name: "Ibis Group", url: null },
  { name: "Herbst Kinsky RAe", url: null },
  { name: "Raiffeisen Bank International", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Raiffeisen_Bank_International_2020.svg/200px-Raiffeisen_Bank_International_2020.svg.png" },
];

const txTitles = {
  en: {
    title: "Selected Partners & Ecosystem",
    sub: "A curated network of institutional investors, real estate groups, hospitality operators and advisory firms across Austria, CEE and Spain.",
    subTech: "A curated network of institutional investors, telcos, technology leaders and advisory firms across DACH and Asia Pacific.",
  },
  de: {
    title: "Ausgewählte Partner & Ökosystem",
    sub: "Ein kuratiertes Netzwerk aus institutionellen Investoren, Immobiliengruppen, Hospitality-Operatoren und Beratungsunternehmen in Österreich, CEE und Spanien.",
    subTech: "Ein kuratiertes Netzwerk aus institutionellen Investoren, Telekommunikationsunternehmen, Technologieführern und Beratungsunternehmen in DACH und dem asiatisch-pazifischen Raum.",
  },
  cn: {
    title: "精选合作伙伴与生态系统",
    sub: "涵盖奥地利、中东欧及西班牙的机构投资者、房地产集团、酒店运营商和咨询公司的精英网络。",
    subTech: "涵盖DACH及亚太地区的机构投资者、电信公司、技术领导者和咨询公司的精英网络。",
  },
};

function LogoTile({ logo }) {
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 24px", background: "#fff",
        border: "1px solid rgba(0,0,0,0.07)",
        minHeight: 76,
        filter: hovered ? "none" : "grayscale(100%)",
        opacity: hovered ? 1 : 0.55,
        transition: "filter 0.3s ease, opacity 0.3s ease, transform 0.25s ease, border-color 0.25s",
        transform: hovered ? "translateY(-2px)" : "none",
        borderColor: hovered ? `${gold}44` : "rgba(0,0,0,0.07)",
        cursor: "default",
      }}
    >
      {logo.url && !failed ? (
        <img
          src={logo.url}
          alt={logo.name}
          onError={() => setFailed(true)}
          style={{ maxHeight: 38, maxWidth: 110, objectFit: "contain", display: "block" }}
          loading="lazy"
        />
      ) : (
        <span style={{
          fontFamily: F, fontSize: 11, fontWeight: 700,
          color: hovered ? goldText : "#9CA3AF",
          letterSpacing: 1.2, textTransform: "uppercase",
          transition: "color 0.3s",
        }}>
          {logo.name}
        </span>
      )}
    </div>
  );
}

export default function PartnerLogos({ lang = "en", compact = false, track = "tech" }) {
  const tx = txTitles[lang] || txTitles.en;
  const logos = track === "re" ? logosRE : logosTech;
  const sub = track === "re" ? tx.sub : (tx.subTech || tx.sub);

  if (compact) return (
    <div style={{ padding: "24px 40px", borderTop: "1px solid #EAE8E4", borderBottom: "1px solid #EAE8E4", background: "#F5F4F1" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
        <span style={{ fontFamily: "'Neue Haas Grotesk Display Pro', Inter, sans-serif", fontSize: 9, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(26,26,26,0.35)", whiteSpace: "nowrap" }}>
          {lang === "de" ? "Ausgewählte Partner" : "Selected Partners"}
        </span>
        {logos.map((logo, i) => (
          <LogoTile key={i} logo={logo} />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <p style={{
        fontFamily: F, fontSize: 14, color: "#6B7280",
        lineHeight: 1.75, maxWidth: 580, marginBottom: 32,
      }}>
        {sub}
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
      }}>
        <style>{`
          @media(max-width:768px){
            .partner-grid{grid-template-columns:repeat(2,1fr)!important}
          }
        `}</style>
        {logos.map((logo, i) => (
          <LogoTile key={i} logo={logo} />
        ))}
      </div>
      <p style={{
        fontFamily: F, fontSize: 11, color: "#9CA3AF",
        marginTop: 16, letterSpacing: 0.3,
      }}>
        {lang === "de" ? "+ weitere institutionelle Partner & Family Offices" :
         lang === "cn" ? "+ 其他机构合作伙伴及家族办公室" :
         "+ additional institutional partners & family offices"}
      </p>
    </div>
  );
}
