function exportTrack(event, detail) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event }, detail || {}));
  } catch (e) {
  }
}
const EXP_TRUST = [
  { label: "IMS 9001 : 14001 : 45001", state: "active", note: "Held" },
  { label: "IEC-aligned product design", state: "active", note: "Standard practice" },
  { label: "Inspection and FAT support", state: "active", note: "Supported" },
  { label: "Export documentation readiness", state: "cond", note: "Available based on requirement" }
];
const EXP_REGIONS = [
  "North America",
  "EU / EEA",
  "GCC and Middle East",
  "Africa",
  "Southeast Asia",
  "Australia and New Zealand"
];
const EXP_SECTORS = [
  "Railways",
  "Power and utilities",
  "Infrastructure",
  "Data centres",
  "Semiconductor",
  "Heavy industries",
  "Material handling"
];
const EXP_PORTFOLIO = [
  {
    id: "magnetics",
    group: "Magnetics",
    hs: "8504",
    rating: "50 VA to 5 MVA, up to 36 kV class",
    items: ["LV transformers", "MV transformers", "K-rated transformers", "Air-core reactors", "Oil-cooled reactors", "De-tuned reactors"],
    docs: "IEC 60076 / IS 2026 test reports, GA drawings, BoM, QAP",
    custom: "Taps, impedance, low-loss core, shielding"
  },
  {
    id: "control-panels",
    group: "Control Panel Assemblies",
    hs: "8537",
    rating: "Up to 6300 A, Form 2 to 4b",
    items: ["Locomotive panels", "Driver desk panels", "PDUs", "Power panels"],
    docs: "IEC 61439 type and routine tests, GA, wiring, FAT protocol",
    custom: "Layout, form separation, busbar rating"
  },
  {
    id: "power-electronics",
    group: "Power Electronics Systems",
    hs: "8504.40",
    rating: "24 V to 220 V DC, up to 400 A",
    items: ["MHE battery chargers", "Float cum boost chargers", "Special application battery chargers"],
    docs: "Functional, efficiency and burn-in reports, conformance notes",
    custom: "Chemistry, connectivity (CAN, Modbus, RS485), enclosure"
  },
  {
    id: "cross-segment",
    group: "Cross-Segment Solutions",
    hs: "8544 / 8537, varies",
    rating: "LV to MV configurations, per component",
    items: ["Busbars", "Cable harnessing", "UPS", "Driver's Display Unit", "Current sensors", "DC-DC converters", "Fire detection units", "Maximum voltage relays"],
    docs: "Component datasheets, drawings, type-test references where applicable",
    custom: "OEM-specific configurations to customer QAP"
  }
];
const EXP_LEGAL = [
  { k: "Company legal name", v: "Awaiting client-approved value" },
  { k: "CIN", v: "Awaiting client-approved value" },
  { k: "GST", v: "Awaiting client-approved value" },
  { k: "IEC (Importer Exporter Code)", v: "On file, reference on request" },
  { k: "Registered address", v: "Dynalektric Pvt. Ltd. Manufacturing facility, No-49/2, Vaderamanchanahalli Village,Kallubalu, Anekal Taluk, Jigani Hobli,Bangalore, India- 560105" },
  { k: "D-U-N-S number", v: "Provided if available on request" }
];
const EXP_FINANCIAL = [
  { k: "Bank reference", v: "Available on request" },
  { k: "Transaction methods", v: "Subject to quotation and order terms" },
  { k: "Customer references", v: "Approved references shared on qualification" }
];
const CERT_GROUPS = [
  {
    group: "Management systems",
    rows: [
      { name: "ISO 9001", scope: "Quality management", status: "held", product: "All groups", region: "All", note: "Certificate reference and validity provided on request." },
      { name: "ISO 14001", scope: "Environmental management", status: "held", product: "All groups", region: "All", note: "Certificate reference and validity provided on request." },
      { name: "ISO 45001", scope: "Occupational health and safety", status: "held", product: "All groups", region: "All", note: "Certificate reference and validity provided on request." },
      { name: "IRIS / ISO 22163", scope: "Rail quality management", status: "progress", product: "Rail products", region: "Rail markets", note: "Status subject to client confirmation." }
    ]
  },
  {
    group: "Product and market standards",
    rows: [
      { name: "IEC 60076", scope: "Power transformers", status: "complied", product: "Magnetics", region: "All", note: "Products designed and routine / type tested to this standard." },
      { name: "IEC 61439", scope: "LV switchgear and controlgear assemblies", status: "complied", product: "Control panels", region: "All", note: "Type-tested assembly evidence available per order." },
      { name: "IEC 61558", scope: "Safety of transformers and reactors", status: "complied", product: "Magnetics", region: "All", note: "Applied where relevant to product category." },
      { name: "CE", scope: "European conformity", status: "available", product: "Per product", region: "EU / EEA", note: "Evaluated based on product, directive and destination." },
      { name: "UL", scope: "North American safety", status: "available", product: "Per product", region: "North America", note: "Evaluated based on product and order requirement." },
      { name: "EN 50155", scope: "Railway electronic equipment", status: "available", product: "Rail electronics", region: "Rail markets", note: "Evaluated based on rolling-stock requirement." }
    ]
  }
];
const CERT_STATUS = {
  held: { label: "Held", cls: "is-held" },
  complied: { label: "Complied", cls: "is-complied" },
  progress: { label: "In Progress", cls: "is-progress" },
  available: { label: "Available based on requirement", cls: "is-available" }
};
const EXP_CLEARANCE = [
  {
    id: "usa",
    country: "USA",
    region: "North America",
    schemes: [
      "Applicable UL / NRTL product safety requirements reviewed",
      "Product testing and certification route confirmed where required",
      "Technical documentation and test evidence prepared for review",
      "Importer and customer compliance requirements confirmed"
    ]
  },
  {
    id: "canada",
    country: "Canada",
    region: "North America",
    schemes: [
      "Applicable Canadian electrical safety requirements reviewed",
      "SCC-accredited certification or inspection route assessed where required",
      "Product test reports and technical documentation reviewed",
      "Importer and provincial requirements confirmed per product"
    ]
  },
  {
    id: "uk",
    country: "UK",
    region: "United Kingdom",
    schemes: [
      "Applicable UK product regulations identified",
      "UKCA or accepted CE marking route reviewed where applicable",
      "Technical documentation and conformity evidence prepared",
      "Importer and product-specific requirements confirmed"
    ]
  },
  {
    id: "eu",
    country: "EU",
    region: "European Union",
    schemes: [
      "Applicable EU directives and regulations identified",
      "CE conformity assessment route reviewed where applicable",
      "Technical documentation and Declaration of Conformity requirements reviewed",
      "Product marking and importer responsibilities confirmed"
    ]
  },
  {
    id: "uae",
    country: "UAE",
    region: "Middle East",
    schemes: [
      "Product scope reviewed against UAE regulated-product requirements",
      "ECAS or EQM conformity route assessed where applicable",
      "Required test reports and conformity documents prepared",
      "Importer and local registration responsibilities confirmed"
    ]
  },
  {
    id: "sa",
    country: "Saudi Arabia",
    region: "Middle East",
    schemes: [
      "SASO / SABER product requirements reviewed",
      "Product Certificate of Conformity route assessed where applicable",
      "Shipment conformity documentation coordinated",
      "Local importer and SABER responsibilities confirmed"
    ]
  },
  {
    id: "kuwait",
    country: "Kuwait",
    region: "Middle East",
    schemes: [
      "Product scope reviewed against KUCAS requirements",
      "Applicable conformity assessment route identified",
      "Technical inspection and test documentation prepared where required",
      "Importer and Kuwait PAI requirements confirmed"
    ]
  },
  {
    id: "australia",
    country: "Australia",
    region: "Oceania",
    schemes: [
      "Applicable Australian electrical safety requirements reviewed",
      "EESS product classification assessed where applicable",
      "RCM compliance and marking requirements reviewed",
      "Responsible supplier and importer requirements confirmed"
    ]
  }
];
const EXP_TESTING_SUPPORT = [
  "ISO / IEC 17025 laboratory reports, where accepted",
  "IECEE CB scheme reports, where applicable",
  "Local testing requirements depend on product, market and importer responsibilities"
];
const EXP_QUALITY = [
  "In-house engineering",
  "Cross-functional engineering teams",
  "Capacity planning",
  "DFMEA discipline",
  "First-Time-Right approach",
  "Digital production tracking",
  "Product traceability",
  "Inspection checkpoints",
  "Calibration controls",
  "Documented quality review"
];
const EXP_QUALITY_DOCS = [
  { code: "01", title: "Inspection plan", note: "Hold and witness points by stage" },
  { code: "02", title: "FAT checklist", note: "Factory acceptance test scope" },
  { code: "03", title: "Calibration record", note: "Instrument calibration status" },
  { code: "04", title: "Traceability record", note: "Material to dispatch lineage" },
  { code: "05", title: "Quality documentation pack", note: "Consolidated per order" }
];
const EXP_TRADE = [
  { k: "Restricted-party screening", s: "available" },
  { k: "End-use review", s: "available" },
  { k: "End-user review", s: "available" },
  { k: "India export-control framework", s: "available" },
  { k: "Certificate of Origin", s: "available" },
  { k: "NDA process", s: "available" },
  { k: "Intellectual-property protection process", s: "available" }
];
const EXP_ESG = [
  { k: "RoHS", s: "requirement" },
  { k: "REACH", s: "requirement" },
  { k: "Conflict-minerals policy", s: "available" },
  { k: "ISO 14001 status", s: "available" },
  { k: "ISO 45001 status", s: "available" }
];
const EXP_STATUS_CHIP = {
  available: { label: "Available", cls: "chip-available" },
  review: { label: "Under Review", cls: "chip-review" },
  requirement: { label: "Based on Customer Requirement", cls: "chip-requirement" }
};
const EXP_PROCESS = [
  { n: "01", t: "Enquiry and technical clarification" },
  { n: "02", t: "Quotation and Incoterms" },
  { n: "03", t: "Order and payment terms" },
  { n: "04", t: "Manufacturing" },
  { n: "05", t: "FAT or TPI" },
  { n: "06", t: "Documentation and export packing" },
  { n: "07", t: "Customs coordination and dispatch" },
  { n: "08", t: "Delivery and after-sales" }
];
const EXP_INCOTERMS = ["EXW", "FOB", "CIF", "DAP", "DDP"];
const EXP_DOCS_STD = ["Commercial Invoice", "Packing List", "Shipping Bill", "Bill of Lading or Airway Bill", "Certificate of Origin"];
const EXP_DOCS_APP = ["Product test report", "Certificate of Conformity", "MSDS", "Warranty certificate", "Inspection record", "FAT documentation"];
const EXP_LOGISTICS2 = [
  "Export-grade packing",
  "Product identification and labelling",
  "Container-loading coordination",
  "Freight-forwarder coordination",
  "Dispatch tracking",
  "Indicative lead time by product family"
];
const EXP_AFTERSALES = [
  "Warranty terms confirmed per order",
  "Remote support",
  "On-site commissioning, where agreed",
  "Spares availability",
  "Structured complaint resolution process"
];
const EXP_FAQ = [
  { q: "What is the minimum order quantity?", a: "MOQ depends on product group and configuration. Engineered items are quoted per requirement; component items may carry a batch minimum. Confirmed in the quotation." },
  { q: "Can products be customised for our specification?", a: "Yes. Magnetics, panels and power electronics are engineered to application. Share ratings, standards and interfaces and the engineering team reviews feasibility." },
  { q: "How is certification handled by destination?", a: "Currently held certifications are listed in the certifications matrix. Destination-market approvals such as SASO, G-Mark, SONCAP and PVoC are reviewed per product and country during quotation." },
  { q: "What payment terms are supported?", a: "Transaction methods and payment terms are confirmed in the quotation, subject to order value, destination and Incoterms." },
  { q: "What lead times can we expect?", a: "Indicative lead time is shared by product family during quotation. Fixed dates are confirmed at order, after specification freeze and inspection planning." },
  { q: "How does the inspection process work?", a: "We support customer inspection, third-party inspection and FAT against an agreed inspection plan with defined hold and witness points." },
  { q: "What documents should an RFQ include?", a: "Product category, application and load profile, destination market and standards, quantity, and documentation or inspection scope. One supporting document can be attached." },
  { q: "Are datasheets available?", a: "Application-specific datasheets are provided on request per sub-category. Request them with your RFQ or supplier qualification." }
];
function ExportSelfSelect({ navigate }) {
  const [region, setRegion] = React.useState(null);
  const [sector, setSector] = React.useState(null);
  const [groupId, setGroupId] = React.useState(EXP_PORTFOLIO[0].id);
  const group = EXP_PORTFOLIO.find((g) => g.id === groupId);
  function pickRegion(r) {
    setRegion(r);
    exportTrack("destination_selector_use", { region: r });
  }
  return /* @__PURE__ */ React.createElement("div", { className: "exp-select" }, /* @__PURE__ */ React.createElement("div", { className: "exp-select-controls" }, /* @__PURE__ */ React.createElement("div", { className: "exp-select-field" }, /* @__PURE__ */ React.createElement("div", { className: "exp-label" }, "Region"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, EXP_REGIONS.map((r) => /* @__PURE__ */ React.createElement("button", { key: r, className: `exp-chip ${region === r ? "is-on" : ""}`, onClick: () => pickRegion(r) }, r)))), /* @__PURE__ */ React.createElement("div", { className: "exp-select-field" }, /* @__PURE__ */ React.createElement("div", { className: "exp-label" }, "Sector"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, EXP_SECTORS.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, className: `exp-chip exp-chip-blue ${sector === s ? "is-on" : ""}`, onClick: () => setSector(s) }, s)))), /* @__PURE__ */ React.createElement("div", { className: "exp-select-field" }, /* @__PURE__ */ React.createElement("div", { className: "exp-label" }, "Product group"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, EXP_PORTFOLIO.map((g) => /* @__PURE__ */ React.createElement("button", { key: g.id, className: `exp-chip ${groupId === g.id ? "is-on" : ""}`, onClick: () => setGroupId(g.id) }, g.group))))), /* @__PURE__ */ React.createElement("div", { className: "exp-select-result" }, /* @__PURE__ */ React.createElement("div", { className: "exp-select-result-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "exp-label", style: { color: "var(--accent)" } }, "Selected export path"), /* @__PURE__ */ React.createElement("h3", null, group.group)), /* @__PURE__ */ React.createElement("div", { className: "exp-path-tags" }, /* @__PURE__ */ React.createElement("span", { className: "exp-path-tag" }, region || "Any region"), /* @__PURE__ */ React.createElement("span", { className: "exp-path-tag exp-path-tag-blue" }, sector || "Any sector"))), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-rows" }, /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Indicative HS heading"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, group.hs)), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Rating range"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, group.rating)), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Export documentation"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, group.docs)), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Customisation"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, group.custom)), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Includes"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, group.items.join(", ")))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Indicative HS headings are confirmed per product and destination. Final classification is set at quotation."), /* @__PURE__ */ React.createElement("div", { className: "exp-result-actions" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => {
    exportTrack("export_rfq_start", { group: group.id });
    navigate("contact");
  } }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => {
    exportTrack("datasheet_download", { group: group.id });
    navigate("products", group.id);
  } }, "Request datasheet"))));
}
function CertMatrix() {
  return /* @__PURE__ */ React.createElement("div", { className: "exp-cert" }, /* @__PURE__ */ React.createElement("div", { className: "exp-cert-legend" }, Object.keys(CERT_STATUS).map((k) => /* @__PURE__ */ React.createElement("span", { key: k, className: `exp-cert-key ${CERT_STATUS[k].cls}` }, /* @__PURE__ */ React.createElement("span", { className: "exp-cert-dot", "aria-hidden": "true" }), CERT_STATUS[k].label))), CERT_GROUPS.map((grp) => /* @__PURE__ */ React.createElement("div", { className: "exp-cert-group", key: grp.group }, /* @__PURE__ */ React.createElement("h3", { className: "exp-cert-grouptitle" }, grp.group), /* @__PURE__ */ React.createElement("div", { className: "exp-cert-table", role: "table" }, /* @__PURE__ */ React.createElement("div", { className: "exp-cert-trow exp-cert-thead", role: "row" }, /* @__PURE__ */ React.createElement("span", { role: "columnheader" }, "Standard"), /* @__PURE__ */ React.createElement("span", { role: "columnheader" }, "Status"), /* @__PURE__ */ React.createElement("span", { role: "columnheader" }, "Product group"), /* @__PURE__ */ React.createElement("span", { role: "columnheader" }, "Region"), /* @__PURE__ */ React.createElement("span", { role: "columnheader" }, "Certificate / dates")), grp.rows.map((r) => /* @__PURE__ */ React.createElement("div", { className: "exp-cert-trow", role: "row", key: r.name }, /* @__PURE__ */ React.createElement("span", { role: "cell", className: "exp-cert-name" }, /* @__PURE__ */ React.createElement("strong", null, r.name), /* @__PURE__ */ React.createElement("span", { className: "exp-cert-scope" }, r.scope)), /* @__PURE__ */ React.createElement("span", { role: "cell" }, /* @__PURE__ */ React.createElement("span", { className: `exp-cert-badge ${CERT_STATUS[r.status].cls}` }, /* @__PURE__ */ React.createElement("span", { className: "exp-cert-dot", "aria-hidden": "true" }), CERT_STATUS[r.status].label)), /* @__PURE__ */ React.createElement("span", { role: "cell", className: "exp-cert-meta" }, r.product), /* @__PURE__ */ React.createElement("span", { role: "cell", className: "exp-cert-meta" }, r.region), /* @__PURE__ */ React.createElement("span", { role: "cell", className: "exp-cert-meta" }, "Reference on request", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "exp-cert-note" }, r.note))))), /* @__PURE__ */ React.createElement("div", { className: "exp-cert-cards" }, grp.rows.map((r) => /* @__PURE__ */ React.createElement(CertCard, { key: r.name, r }))))), /* @__PURE__ */ React.createElement("p", { className: "exp-claims" }, "Only currently held certifications are displayed as held. Additional market approvals are evaluated based on product, destination and order requirements. Certificate numbers and validity dates are provided on request and verification."));
}
function CertCard({ r }) {
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ React.createElement("div", { className: `exp-cert-card ${open ? "open" : ""}` }, /* @__PURE__ */ React.createElement("button", { className: "exp-cert-card-head", "aria-expanded": open, onClick: () => {
    setOpen(!open);
    if (!open) exportTrack("clearance_scheme_view", { cert: r.name });
  } }, /* @__PURE__ */ React.createElement("span", { className: "exp-cert-card-name" }, r.name), /* @__PURE__ */ React.createElement("span", { className: `exp-cert-badge ${CERT_STATUS[r.status].cls}` }, /* @__PURE__ */ React.createElement("span", { className: "exp-cert-dot", "aria-hidden": "true" }), CERT_STATUS[r.status].label), /* @__PURE__ */ React.createElement("span", { className: "exp-cert-card-icon", "aria-hidden": "true" }, open ? "\u2013" : "+")), /* @__PURE__ */ React.createElement("div", { className: "exp-cert-card-body" }, /* @__PURE__ */ React.createElement("div", { className: "exp-cert-card-inner" }, /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Scope"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, r.scope)), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Product group"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, r.product)), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Region"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, r.region)), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, "Certificate / dates"), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, "Reference on request")), /* @__PURE__ */ React.createElement("p", { className: "exp-cert-note" }, r.note), /* @__PURE__ */ React.createElement("button", { className: "exp-textlink", onClick: () => exportTrack("certificate_download", { cert: r.name }) }, "Download certificate ", /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192")))));
}
function ClearanceSelector({ navigate }) {
  const [countryId, setCountryId] = React.useState(EXP_CLEARANCE[0].id);
  const [groupId, setGroupId] = React.useState(EXP_PORTFOLIO[0].id);
  const country = EXP_CLEARANCE.find((c) => c.id === countryId);
  const group = EXP_PORTFOLIO.find((g) => g.id === groupId);
  function pickCountry(id) {
    setCountryId(id);
    exportTrack("clearance_scheme_view", { country: id });
  }
  return /* @__PURE__ */ React.createElement("div", { className: "exp-clear" }, /* @__PURE__ */ React.createElement("div", { className: "exp-clear-controls" }, /* @__PURE__ */ React.createElement("div", { className: "exp-clear-field" }, /* @__PURE__ */ React.createElement("div", { className: "exp-label" }, "1. Destination country"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, EXP_CLEARANCE.map((c) => /* @__PURE__ */ React.createElement("button", { key: c.id, className: `exp-chip ${countryId === c.id ? "is-on" : ""}`, onClick: () => pickCountry(c.id) }, c.country)))), /* @__PURE__ */ React.createElement("div", { className: "exp-clear-field" }, /* @__PURE__ */ React.createElement("div", { className: "exp-label" }, "2. Product group"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, EXP_PORTFOLIO.map((g) => /* @__PURE__ */ React.createElement("button", { key: g.id, className: `exp-chip exp-chip-blue ${groupId === g.id ? "is-on" : ""}`, onClick: () => setGroupId(g.id) }, g.group))))), /* @__PURE__ */ React.createElement("div", { className: "exp-clear-result" }, /* @__PURE__ */ React.createElement("div", { className: "exp-clear-result-head" }, /* @__PURE__ */ React.createElement("div", { className: "exp-label", style: { color: "var(--accent)" } }, "3. Likely compliance path"), /* @__PURE__ */ React.createElement("h3", null, group.group, " into ", country.country), /* @__PURE__ */ React.createElement("span", { className: "exp-path-tag exp-path-tag-blue" }, country.region)), /* @__PURE__ */ React.createElement("ol", { className: "exp-clear-steps" }, country.schemes.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "exp-clear-num" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", null, s)))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Destination-market requirements are reviewed based on product category, intended application, destination country and importer responsibilities. Final approval remains subject to the relevant authority and conformity process. We do not guarantee customs clearance or automatic acceptance."), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => {
    exportTrack("export_rfq_start", { country: country.id, group: group.id });
    navigate("contact");
  } }, "4. Submit RFQ for detailed review ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192"))));
}
function ExportFaq() {
  const [open, setOpen] = React.useState(0);
  return /* @__PURE__ */ React.createElement("div", { className: "exp-faq" }, EXP_FAQ.map((f, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ React.createElement("div", { className: `exp-faq-item ${isOpen ? "open" : ""}`, key: i }, /* @__PURE__ */ React.createElement("button", { className: "exp-faq-q", "aria-expanded": isOpen, onClick: () => setOpen(isOpen ? -1 : i) }, /* @__PURE__ */ React.createElement("span", null, f.q), /* @__PURE__ */ React.createElement("span", { className: "exp-faq-icon", "aria-hidden": "true" }, isOpen ? "\u2013" : "+")), /* @__PURE__ */ React.createElement("div", { className: "exp-faq-a" }, /* @__PURE__ */ React.createElement("div", { className: "exp-faq-a-inner" }, /* @__PURE__ */ React.createElement("p", null, f.a))));
  }));
}
const RFQ_STANDARDS = ["IEC 60076", "IEC 61439", "IEC 61558", "CE", "UL", "EN 50155", "Customer specific", "To be advised"];
function ExportRfq() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({ group: "", country: "", qty: "", standard: "", requirement: "", file: "" });
  const [done, setDone] = React.useState(false);
  const total = 6;
  function set(k, v) {
    setData((d) => Object.assign({}, d, { [k]: v }));
  }
  function next() {
    if (step < total) {
      const ns = step + 1;
      setStep(ns);
      exportTrack("export_rfq_step_" + (ns - 1), { step: ns });
    }
  }
  function back() {
    if (step > 1) setStep(step - 1);
  }
  function submit() {
    exportTrack("export_rfq_submit", data);
    setDone(true);
  }
  React.useEffect(() => {
    exportTrack("export_rfq_start");
  }, []);
  if (done) {
    return /* @__PURE__ */ React.createElement("div", { className: "exp-rfq exp-rfq-done" }, /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-check", "aria-hidden": "true" }, "\u2713"), /* @__PURE__ */ React.createElement("h3", null, "Thank you. Your export requirement has been received."), /* @__PURE__ */ React.createElement("p", null, "Our team will review the product, destination and documentation needs and respond with the next steps."), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => {
      setDone(false);
      setStep(1);
      setData({ group: "", country: "", qty: "", standard: "", requirement: "", file: "" });
    } }, "Start another enquiry"));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "exp-rfq" }, /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-progress" }, Array.from({ length: total }).map((_, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: `exp-rfq-pip ${i + 1 <= step ? "is-on" : ""}` })), /* @__PURE__ */ React.createElement("span", { className: "exp-rfq-stepno" }, "Step ", step, " of ", total)), /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-body" }, step === 1 && /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-field" }, /* @__PURE__ */ React.createElement("label", { className: "exp-label" }, "Product group"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, EXP_PORTFOLIO.map((g) => /* @__PURE__ */ React.createElement("button", { key: g.id, className: `exp-chip ${data.group === g.group ? "is-on" : ""}`, onClick: () => set("group", g.group) }, g.group)))), step === 2 && /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-field" }, /* @__PURE__ */ React.createElement("label", { className: "exp-label" }, "Destination country"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, EXP_CLEARANCE.map((c) => /* @__PURE__ */ React.createElement("button", { key: c.id, className: `exp-chip exp-chip-blue ${data.country === c.country ? "is-on" : ""}`, onClick: () => set("country", c.country) }, c.country)), /* @__PURE__ */ React.createElement("button", { className: `exp-chip exp-chip-blue ${data.country === "Other" ? "is-on" : ""}`, onClick: () => set("country", "Other") }, "Other"))), step === 3 && /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-field" }, /* @__PURE__ */ React.createElement("label", { className: "exp-label", htmlFor: "rfq-qty" }, "Quantity or project volume"), /* @__PURE__ */ React.createElement("input", { id: "rfq-qty", className: "exp-input", type: "text", value: data.qty, onChange: (e) => set("qty", e.target.value), placeholder: "e.g. 12 units, or 3 substations" })), step === 4 && /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-field" }, /* @__PURE__ */ React.createElement("label", { className: "exp-label" }, "Required standard or certification"), /* @__PURE__ */ React.createElement("div", { className: "exp-chip-row" }, RFQ_STANDARDS.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, className: `exp-chip ${data.standard === s ? "is-on" : ""}`, onClick: () => set("standard", s) }, s)))), step === 5 && /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-field" }, /* @__PURE__ */ React.createElement("label", { className: "exp-label", htmlFor: "rfq-req" }, "Technical requirement"), /* @__PURE__ */ React.createElement("textarea", { id: "rfq-req", className: "exp-input exp-textarea", value: data.requirement, onChange: (e) => set("requirement", e.target.value), placeholder: "Ratings, application, load profile, interfaces, timeline", rows: "4" })), step === 6 && /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-field" }, /* @__PURE__ */ React.createElement("label", { className: "exp-label", htmlFor: "rfq-file" }, "Upload one supporting document"), /* @__PURE__ */ React.createElement("input", { id: "rfq-file", className: "exp-input exp-file", type: "file", accept: ".pdf,.doc,.docx,.xls,.xlsx", onChange: (e) => set("file", e.target.value) }), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Accepted formats: PDF, Word, Excel. Please do not upload large DWG files at this stage."))), /* @__PURE__ */ React.createElement("div", { className: "exp-rfq-nav" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: back, disabled: step === 1, style: { opacity: step === 1 ? 0.4 : 1 } }, "Back"), step < total ? /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: next }, "Next ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192")) : /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: submit }, "Request an Export Quote ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192"))));
}
Object.assign(window, {
  exportTrack,
  EXP_TRUST,
  EXP_REGIONS,
  EXP_SECTORS,
  EXP_PORTFOLIO,
  EXP_LEGAL,
  EXP_FINANCIAL,
  CERT_GROUPS,
  CERT_STATUS,
  EXP_CLEARANCE,
  EXP_TESTING_SUPPORT,
  EXP_QUALITY,
  EXP_QUALITY_DOCS,
  EXP_TRADE,
  EXP_ESG,
  EXP_STATUS_CHIP,
  EXP_PROCESS,
  EXP_INCOTERMS,
  EXP_DOCS_STD,
  EXP_DOCS_APP,
  EXP_LOGISTICS2,
  EXP_AFTERSALES,
  EXP_FAQ,
  ExportSelfSelect,
  CertMatrix,
  CertCard,
  ClearanceSelector,
  ExportFaq,
  ExportRfq
});
