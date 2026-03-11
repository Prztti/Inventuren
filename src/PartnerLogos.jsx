import { useState } from "react";

const F = "'DM Sans',sans-serif";
const gold = "#9A7B42";
const goldText = "#B8924E";

const logos = [
  {
    name: "A1 Group",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/A1_Telekom_Austria_logo.svg/200px-A1_Telekom_Austria_logo.svg.png",
  },
  {
    name: "Orange",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png",
  },
  {
    name: "Huawei",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei_Logo.svg/200px-Huawei_Logo.svg.png",
  },
  {
    name: "Ericsson",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Ericsson_logo_2023.svg/200px-Ericsson_logo_2023.svg.png",
  },
  {
    name: "UNIQA",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/UNIQA_logo.svg/200px-UNIQA_logo.svg.png",
  },
  {
    name: "LKW Walter",
    url: null,
  },
  {
    name: "Viettel",
    url: null,
  },
  {
    name: "Zain Group",
    url: null,
  },
];

const txTitles = {
  en: {
    title: "Selected Partners & Ecosystem",
    sub: "A curated network of institutional investors, telcos, technology leaders and advisory firms across DACH, MENA and Asia Pacific.",
  },
  de: {
    title: "Ausgewählte Partner & Ökosystem",
    sub: "Ein kuratiertes Netzwerk aus institutionellen Investoren, Telekommunikationsunternehmen, Technologieführern und Beratungsunternehmen in DACH, MENA und dem asiatisch-pazifischen Raum.",
  },
  cn: {
    title: "精选合作伙伴与生态系统",
    sub: "涵盖DACH、中东北非及亚太地区的机构投资者、电信公司、技术领导者和咨询公司的精英网络。",
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

export default function PartnerLogos({ lang = "en" }) {
  const tx = txTitles[lang] || txTitles.en;

  return (
    <div>
      <p style={{
        fontFamily: F, fontSize: 14, color: "#6B7280",
        lineHeight: 1.75, maxWidth: 580, marginBottom: 32,
      }}>
        {tx.sub}
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
