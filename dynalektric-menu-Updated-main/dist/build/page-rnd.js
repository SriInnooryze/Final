const FOCUS_AREAS = [
  {
    num: "01",
    title: "Traction Product Development",
    body: "Engineering and development of traction and auxiliary power products supporting railway and mobility applications.",
    deliverables: [
      "Locomotive Transformer",
      "Metro Coach Traction Transformer",
      "Vande Bharat Traction Transformer",
      "Battery Charger",
      "Converter (Traction, Auxiliary & Hotel)"
    ]
  },
  {
    num: "02",
    title: "Renewable Product Development",
    body: "Power products and grid interface solutions supporting renewable energy and battery storage applications.",
    deliverables: [
      "Inverter Duty Transformer",
      "BESS Power Pack \u2013 Pre-Engineered Grid Interface for BESS Container Deployment"
    ]
  },
  {
    num: "03",
    title: "IoT & Communication Systems",
    body: "Monitoring and communication platforms enabling intelligent power management and remote diagnostics.",
    deliverables: [
      "Distributed Power with Communication System",
      "On-board Remote Monitoring System",
      "CAN Bus & IoT for MHE Chargers"
    ]
  },
  {
    num: "04",
    title: "Power Modules & Integrated Power Systems",
    body: "Integrated power conversion modules and power supply systems for industrial and mobility applications.",
    deliverables: [
      "SMPS Power Supplies",
      "Redundant Power Supplies",
      "Converters",
      "DC-DC Converters"
    ]
  }
];
const PROCESS = [
  { num: "01", title: "Brief and specification", body: "Application, load profile, environment and compliance requirements." },
  { num: "02", title: "Technical review and proposal", body: "Engineering review, technical feasibility and commercial proposal based on customer requirements." },
  { num: "03", title: "Design and engineering", body: "Electrical, mechanical and application-specific engineering based on customer requirements." },
  { num: "04", title: "Prototype and test", body: "Manufacturing, assembly, inspection and testing according to project requirements." },
  { num: "05", title: "Series production", body: "Production, documentation, dispatch and after-sales support." }
];
function PageRnd({ navigate }) {
  useReveal();
  return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "INNOVATION PORTFOLIO"), /* @__PURE__ */ React.createElement("h1", null, "Innovation and R&D portfolio for custom power solutions."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Our engineering capability covers transformers, reactors, control panels, battery chargers and custom electrical assemblies. From design and manufacturing to testing and documentation, Dynalektric supports OEMs, utilities and industrial customers with reliable power solutions.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "./assets/innovation-hero-optimized.webp",
      alt: "Dynalektric engineering and product development",
      width: "720",
      height: "540",
      decoding: "async",
      fetchpriority: "high"
    }
  )))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Focus areas")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Four programmes, one engineering team."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "var(--ink-soft)" } }, "Hover any focus area to see programme deliverables in active development."))), /* @__PURE__ */ React.createElement("div", { className: "focus-grid" }, FOCUS_AREAS.map((f) => /* @__PURE__ */ React.createElement("div", { className: "cap-card reveal", key: f.num }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "num" }, f.num), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 10, letterSpacing: "0.12em", color: "var(--ink-muted)", marginBottom: 16, textTransform: "uppercase" } }, "Focus Area"), /* @__PURE__ */ React.createElement("h3", null, f.title), /* @__PURE__ */ React.createElement("p", { className: "reveal-body" }, f.body), /* @__PURE__ */ React.createElement("ul", { className: "reveal-body focus-deliverables" }, f.deliverables.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "+"), " ", d)))), /* @__PURE__ */ React.createElement("div", { className: "footer-mark" }, /* @__PURE__ */ React.createElement("span", null, "In-house engineering"), /* @__PURE__ */ React.createElement("span", null, "+"))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--panel-dark)", color: "var(--on-dark)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head", style: { borderColor: "rgba(255,255,255,0.1)" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "rgba(244,244,241,0.6)" } }, "Engineering workflow")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { color: "var(--bg)" } }, "How a Dynalektric project moves."))), /* @__PURE__ */ React.createElement("div", { className: "process-flow" }, PROCESS.map((s) => /* @__PURE__ */ React.createElement("div", { className: "process-step", key: s.num }, /* @__PURE__ */ React.createElement("div", { className: "num" }, s.num), /* @__PURE__ */ React.createElement("h4", null, s.title), /* @__PURE__ */ React.createElement("p", null, s.body)))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)" } }, "Custom engineering"), /* @__PURE__ */ React.createElement("h2", { style: { marginTop: 16 } }, "Have a non-standard requirement?"), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 24 } }, "Our engineering team supports customer-specific requirements with technical review, product customization and manufacturing support for industrial, railway and power applications."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => navigate("contact") }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => navigate("products") }, "Browse products"))), /* @__PURE__ */ React.createElement("div", { style: { aspectRatio: "4/3" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "./assets/engineering-npd-optimized.webp",
      alt: "Dynalektric engineering and manufacturing",
      width: "720",
      height: "540",
      loading: "lazy",
      decoding: "async",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "8px"
      }
    }
  ))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
}
window.PageRnd = PageRnd;
