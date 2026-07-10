function ExportCapabilityTabs() {
  const [tab, setTab] = React.useState(0);
  const TABS = ["Quality & Manufacturing", "Trade Compliance", "ESG & Carbon Readiness"];
  return /* @__PURE__ */ React.createElement("div", { className: "exp-tabs-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "exp-tabs", role: "tablist", "aria-label": "Export capability overview" }, TABS.map((t, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      role: "tab",
      "aria-selected": tab === i,
      "aria-controls": `exp-tabpanel-cap-${i}`,
      id: `exp-tab-cap-${i}`,
      className: `exp-tab-btn ${tab === i ? "is-active" : ""}`,
      onClick: () => {
        setTab(i);
        exportTrack("capability_tab_select", { tab: t });
      }
    },
    t
  ))), /* @__PURE__ */ React.createElement(
    "div",
    {
      id: "exp-tabpanel-cap-0",
      role: "tabpanel",
      "aria-labelledby": "exp-tab-cap-0",
      hidden: tab !== 0,
      className: "exp-tab-panel"
    },
    /* @__PURE__ */ React.createElement("div", { className: "exp-tab-cols" }, /* @__PURE__ */ React.createElement("div", { className: "export-quality-list" }, /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_QUALITY.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, q)))), /* @__PURE__ */ React.createElement("div", { className: "export-inspect-callout", style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Inspection"), /* @__PURE__ */ React.createElement("p", null, "We welcome customer inspection, third-party inspection and Factory Acceptance Tests based on agreed project requirements."))), /* @__PURE__ */ React.createElement("div", { className: "export-doc-cards" }, EXP_QUALITY_DOCS.map((d) => /* @__PURE__ */ React.createElement("div", { className: "export-doc-card2", key: d.code }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, d.code), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, d.title), /* @__PURE__ */ React.createElement("p", null, d.note))))))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      id: "exp-tabpanel-cap-1",
      role: "tabpanel",
      "aria-labelledby": "exp-tab-cap-1",
      hidden: tab !== 1,
      className: "exp-tab-panel"
    },
    /* @__PURE__ */ React.createElement("div", { className: "export-status-list exp-status-list-narrow" }, EXP_TRADE.map((item) => /* @__PURE__ */ React.createElement("div", { className: "export-status-row", key: item.k }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 12, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: { color: "var(--accent)", fontWeight: 700, flexShrink: 0 } }, "\u203A"), item.k), /* @__PURE__ */ React.createElement("span", { className: `export-chip ${EXP_STATUS_CHIP[item.s].cls}` }, EXP_STATUS_CHIP[item.s].label))))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      id: "exp-tabpanel-cap-2",
      role: "tabpanel",
      "aria-labelledby": "exp-tab-cap-2",
      hidden: tab !== 2,
      className: "exp-tab-panel"
    },
    /* @__PURE__ */ React.createElement("div", { className: "export-status-list exp-status-list-narrow" }, EXP_ESG.map((item) => /* @__PURE__ */ React.createElement("div", { className: "export-status-row", key: item.k }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 12, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: { color: "var(--accent)", fontWeight: 700, flexShrink: 0 } }, "\u203A"), item.k), /* @__PURE__ */ React.createElement("span", { className: `export-chip ${EXP_STATUS_CHIP[item.s].cls}` }, EXP_STATUS_CHIP[item.s].label))))
  ));
}
function ResourcesTabs() {
  const [tab, setTab] = React.useState(0);
  const TABS = ["Documentation", "Logistics & Incoterms", "Warranty & Support"];
  return /* @__PURE__ */ React.createElement("div", { className: "exp-tabs-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "exp-tabs", role: "tablist", "aria-label": "Resources" }, TABS.map((t, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      role: "tab",
      "aria-selected": tab === i,
      "aria-controls": `exp-tabpanel-res-${i}`,
      id: `exp-tab-res-${i}`,
      className: `exp-tab-btn ${tab === i ? "is-active" : ""}`,
      onClick: () => setTab(i)
    },
    t
  ))), /* @__PURE__ */ React.createElement(
    "div",
    {
      id: "exp-tabpanel-res-0",
      role: "tabpanel",
      "aria-labelledby": "exp-tab-res-0",
      hidden: tab !== 0,
      className: "exp-tab-panel"
    },
    /* @__PURE__ */ React.createElement("div", { className: "exp-resources-cols" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Standard documents"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_DOCS_STD.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, d))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Applicable documents"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_DOCS_APP.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, d))))))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      id: "exp-tabpanel-res-1",
      role: "tabpanel",
      "aria-labelledby": "exp-tab-res-1",
      hidden: tab !== 1,
      className: "exp-tab-panel"
    },
    /* @__PURE__ */ React.createElement("div", { className: "exp-resources-cols" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Supported Incoterms"), /* @__PURE__ */ React.createElement("div", { className: "export-incoterm-row" }, EXP_INCOTERMS.map((t) => /* @__PURE__ */ React.createElement("span", { className: "export-incoterm exp-incoterm-light", key: t }, t))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Final Incoterms, payment terms and delivery responsibilities are confirmed in the quotation.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Logistics support"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_LOGISTICS2.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, d)))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Indicative lead time is shared by product family. Fixed dates are confirmed at order.")))
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      id: "exp-tabpanel-res-2",
      role: "tabpanel",
      "aria-labelledby": "exp-tab-res-2",
      hidden: tab !== 2,
      className: "exp-tab-panel"
    },
    /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_AFTERSALES.map((a, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, a))))
  ));
}
const JOURNEY_PHASES = [
  {
    phase: "01",
    name: "Enquiry & Proposal",
    steps: [
      {
        n: "01.1",
        title: "Technical Review",
        desc: "Customer drawings, application requirements and compliance expectations reviewed.",
        items: ["Drawings review", "Technical clarification", "Customer discussions"]
      },
      {
        n: "01.2",
        title: "Commercial Proposal",
        desc: "Commercial offer prepared with delivery schedule, Incoterms and lead time commitments.",
        items: ["Commercial offer", "Incoterms", "Lead time estimation"]
      }
    ]
  },
  {
    phase: "02",
    name: "Engineering & Production",
    steps: [
      {
        n: "02.1",
        title: "Engineering & Manufacturing",
        desc: "Design, planning and manufacturing executed for the confirmed order.",
        items: ["Transformers", "Control Panels", "Battery Chargers", "Custom assemblies"]
      },
      {
        n: "02.2",
        title: "Testing & FAT",
        desc: "Routine quality tests and Factory Acceptance Tests conducted before dispatch.",
        items: ["Routine tests", "Factory Acceptance Test", "Third-party inspection"]
      }
    ]
  },
  {
    phase: "03",
    name: "Documentation & Logistics",
    steps: [
      {
        n: "03.1",
        title: "Documentation",
        desc: "Export documentation prepared and verified for international shipment compliance.",
        items: ["Packing List", "Commercial Invoice", "Certificate of Origin", "Test Certificates"]
      },
      {
        n: "03.2",
        title: "Shipping & Customs",
        desc: "Export clearance and freight coordination managed end-to-end.",
        items: ["Export clearance", "Freight coordination", "Customs support"]
      }
    ]
  },
  {
    phase: "04",
    name: "Delivery & Support",
    steps: [
      {
        n: "04.1",
        title: "Delivery",
        desc: "Shipment dispatched on schedule with material handling and customer coordination.",
        items: ["On-time shipment", "Material handling", "Customer coordination"]
      },
      {
        n: "04.2",
        title: "After-Sales Support",
        desc: "Technical assistance, spare part guidance and responsive customer communication post-delivery.",
        items: ["Technical support", "Spare assistance", "Customer communication"]
      }
    ]
  }
];
const EXPORT_CUSTOMER_LOGOS = [
  "./assets/Logo1.webp",
  "./assets/Logo2.webp",
  "./assets/Logo3.webp",
  "./assets/Logo4.1.png",
  "./assets/Logo5.webp",
  "./assets/Logo6.jpg",
  "./assets/Logo7.webp",
  "./assets/Logo8.webp",
  "./assets/Logo9.webp"
];
function PageExport({ navigate }) {
  useReveal();
  React.useEffect(() => {
    const fired = {};
    function onScroll() {
      const sc = document.scrollingElement || document.documentElement;
      const pct = (sc.scrollTop + sc.clientHeight) / sc.scrollHeight;
      if (pct >= 0.5 && !fired["50"]) {
        fired["50"] = 1;
        exportTrack("export_page_scroll_50");
      }
      if (pct >= 0.9 && !fired["90"]) {
        fired["90"] = 1;
        exportTrack("export_page_scroll_90");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement("main", { className: "page-enter", "data-screen-label": "Export" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero export-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "export-hero-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "EXPORT CAPABILITY"), /* @__PURE__ */ React.createElement("h1", null, "Engineered in India. Prepared for global industrial requirements."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Dynalektric supplies magnetics, DC power systems, control panels and engineered assemblies with structured documentation, testing coordination and export support for international industrial buyers."), /* @__PURE__ */ React.createElement("div", { className: "export-hero-cta" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => {
    exportTrack("export_rfq_start", { from: "hero" });
    navigate("contact");
  } }, "Request an Export Quote ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => {
    exportTrack("supplier_qualification_click");
    navigate("contact");
  } }, "Start Supplier Qualification")), /* @__PURE__ */ React.createElement("div", { className: "export-trust-row" }, EXP_TRUST.map((t) => /* @__PURE__ */ React.createElement("span", { className: `export-trust-chip ${t.state === "cond" ? "is-cond" : ""}`, key: t.label }, /* @__PURE__ */ React.createElement("span", { className: "export-trust-mark", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "export-trust-label" }, t.label), /* @__PURE__ */ React.createElement("span", { className: "export-trust-note" }, t.note))))), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "./assets/export-hero-optimized.webp",
      alt: "Dynalektric integrated and assembled engineered systems",
      width: "720",
      height: "540",
      decoding: "async",
      fetchpriority: "high"
    }
  ))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Global reach")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Global Reach & Industries Served"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Dynalektric supports industrial customers across multiple regions and sectors with engineered products and export coordination."))), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-grid" }, /* @__PURE__ */ React.createElement("div", { className: "exp-reach-panel" }, /* @__PURE__ */ React.createElement("div", { className: "exp-reach-title" }, "Regions served"), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-chips" }, EXP_REGIONS.map((r) => /* @__PURE__ */ React.createElement("span", { className: "exp-reach-chip", key: r }, r)))), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-panel" }, /* @__PURE__ */ React.createElement("div", { className: "exp-reach-title" }, "Industries served"), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-chips" }, EXP_SECTORS.map((s) => /* @__PURE__ */ React.createElement("span", { className: "exp-reach-chip exp-reach-chip-ind", key: s }, s))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Product portfolio")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Export Product Portfolio"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Core product groups prepared for international industrial applications."))), /* @__PURE__ */ React.createElement("div", { className: "exp-ptable-wrap" }, /* @__PURE__ */ React.createElement("table", { className: "exp-ptable" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Product Group"), /* @__PURE__ */ React.createElement("th", null, "Indicative HS Heading"), /* @__PURE__ */ React.createElement("th", null, "Rating Range"), /* @__PURE__ */ React.createElement("th", null, "Documentation"), /* @__PURE__ */ React.createElement("th", null, "Customisation Capability"))), /* @__PURE__ */ React.createElement("tbody", null, EXP_PORTFOLIO.map((g) => /* @__PURE__ */ React.createElement("tr", { key: g.id }, /* @__PURE__ */ React.createElement("td", { className: "exp-ptable-group" }, /* @__PURE__ */ React.createElement("span", { className: "exp-ptable-name" }, g.group), /* @__PURE__ */ React.createElement("ul", { className: "exp-ptable-items" }, g.items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item }, item)))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", { className: "mono exp-ptable-hs" }, "HS ", g.hs)), /* @__PURE__ */ React.createElement("td", null, g.rating), /* @__PURE__ */ React.createElement("td", null, g.docs), /* @__PURE__ */ React.createElement("td", null, g.custom)))))), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile" }, EXP_PORTFOLIO.map((g) => /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-card", key: g.id }, /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-head" }, /* @__PURE__ */ React.createElement("span", { className: "exp-ptable-name" }, g.group), /* @__PURE__ */ React.createElement("span", { className: "mono exp-ptable-hs" }, "HS ", g.hs)), /* @__PURE__ */ React.createElement("ul", { className: "exp-ptable-items exp-pmobile-items" }, g.items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item }, item))), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-meta" }, /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-k" }, "Rating range"), /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-v" }, g.rating)), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-k" }, "Documentation"), /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-v" }, g.docs)), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-k" }, "Customisation"), /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-v" }, g.custom)))))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Indicative HS headings are confirmed per product and destination. Final classification is set at quotation."))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--panel-dark)", color: "var(--on-dark)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head", style: { borderColor: "rgba(255,255,255,0.12)" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "rgba(244,244,241,0.6)" } }, "Trust and verification")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { color: "var(--on-dark)" } }, "Trust & Verification"), /* @__PURE__ */ React.createElement("p", { className: "export-sub", style: { color: "rgba(244,244,241,0.72)" } }, "Legal identity, independent verification and financial readiness for procurement onboarding. Values shown as placeholders are confirmed with client-approved data."))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-grid" }, /* @__PURE__ */ React.createElement("div", { className: "export-verify-panel" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title" }, "Legal identity"), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-rows on-dark" }, EXP_LEGAL.map((f) => /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row", key: f.k }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, f.k), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, f.v)))), /* @__PURE__ */ React.createElement("div", { className: "export-map" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      title: "Dynalektric Registered Address",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.2830804704245!2d77.62583052848488!3d12.769318741084197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae69fde1bc74cd%3A0x9dbf3aaa6f14c1c7!2sDynalektric%20Equipment%20Private%20Limited!5e0!3m2!1sen!2sin!4v1781670618586!5m2!1sen!2sin",
      width: "100%",
      height: "100%",
      style: { border: 0 },
      loading: "lazy",
      allowFullScreen: true,
      referrerPolicy: "no-referrer-when-downgrade"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-side" }, /* @__PURE__ */ React.createElement("div", { className: "export-verify-panel" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title" }, "Financial readiness"), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-rows on-dark" }, EXP_FINANCIAL.map((f) => /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row", key: f.k }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, f.k), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, f.v))))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-panel" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title" }, "Social proof"), /* @__PURE__ */ React.createElement("p", { className: "export-verify-p" }, "Approved customer logos, anonymous case studies and approved testimonials are shared once the supplier qualification request is reviewed."), /* @__PURE__ */ React.createElement("div", { className: "export-logo-row" }, EXPORT_CUSTOMER_LOGOS.map((logo, index) => /* @__PURE__ */ React.createElement("div", { className: "export-logo-slot", key: index }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: logo,
      alt: `Customer logo ${index + 1}`,
      loading: "lazy",
      decoding: "async"
    }
  ))))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-actions" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost on-dark", onClick: () => exportTrack("clearance_scheme_view", { action: "view_address" }) }, "View Registered Address"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost on-dark", onClick: () => {
    exportTrack("supplier_qualification_click");
    navigate("contact");
  } }, "Submit Supplier Qualification Request")))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Certifications and standards")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Certifications and Standards"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "A three-status view across management systems and product or market standards. Status reflects current position and is confirmed with certificate references on request."))), /* @__PURE__ */ React.createElement(CertMatrix, null))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Destination-market clearance")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Destination Market Clearance Schemes"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Select a destination country and product group to view a likely compliance path. Schemes shown are indicative and confirmed per product and order."))), /* @__PURE__ */ React.createElement(ClearanceSelector, { navigate }), /* @__PURE__ */ React.createElement("div", { className: "export-testing-note" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title", style: { color: "var(--accent-2)" } }, "Testing support"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list export-tick-blue" }, EXP_TESTING_SUPPORT.map((t, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, t))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Capability overview")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Export Capability Overview"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Structured quality systems, trade compliance processes and sustainability readiness support international customer requirements."))), /* @__PURE__ */ React.createElement(ExportCapabilityTabs, null))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "From RFQ to after-sales")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Export Process Journey"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Eight structured steps across four phases \u2014 from initial enquiry to delivery and after-sales support."))), /* @__PURE__ */ React.createElement("div", { className: "exp-roadmap", role: "list", "aria-label": "Export process phases" }, JOURNEY_PHASES.map((phase) => /* @__PURE__ */ React.createElement("div", { className: "exp-phase", key: phase.phase, role: "listitem" }, /* @__PURE__ */ React.createElement("div", { className: "exp-phase-hd" }, /* @__PURE__ */ React.createElement("span", { className: "exp-phase-num" }, phase.phase), /* @__PURE__ */ React.createElement("span", { className: "exp-phase-name" }, phase.name)), /* @__PURE__ */ React.createElement("div", { className: "exp-phase-body" }, phase.steps.map((step) => /* @__PURE__ */ React.createElement("div", { className: "exp-phase-step", key: step.n }, /* @__PURE__ */ React.createElement("div", { className: "exp-step-hd" }, /* @__PURE__ */ React.createElement("span", { className: "exp-step-n" }, step.n), /* @__PURE__ */ React.createElement("span", { className: "exp-step-title" }, step.title)), /* @__PURE__ */ React.createElement("p", { className: "exp-step-desc" }, step.desc), /* @__PURE__ */ React.createElement("ul", { className: "exp-step-items" }, step.items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i }, item))))))))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint", style: { marginTop: 24 } }, "Indicative sequence. Specific milestones are aligned with customer project requirements and confirmed at order."))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Documentation, logistics and support")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Documentation packages, Incoterms, logistics support and after-sales terms for international orders."))), /* @__PURE__ */ React.createElement(ResourcesTabs, null))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Common questions")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Frequently Asked Questions"))), /* @__PURE__ */ React.createElement(ExportFaq, null))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
}
window.PageExport = PageExport;
