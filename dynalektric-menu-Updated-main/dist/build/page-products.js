var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const GROUP_IMG_FILENAME = {
  "control-panels": "control-Panels.jpg"
};
const SUBCAT_IMG_SET = /* @__PURE__ */ new Set([
  "01.1",
  "01.2",
  "01.3",
  "01.4",
  "01.6",
  "02.1",
  "02.2",
  "03.1",
  "03.2",
  "04.1",
  "04.2",
  "04.3",
  "04.4",
  "04.5"
]);
function PageProducts({ navigate, focusId }) {
  useReveal();
  const initialGroup = focusId && PRODUCTS.find((p) => p.id === focusId) ? focusId : PRODUCTS[0].id;
  const [activeGroup, setActiveGroup] = React.useState(initialGroup);
  const [activeSubByGroup, setActiveSubByGroup] = React.useState(
    () => PRODUCTS.reduce((acc, p) => {
      acc[p.id] = p.subcategories[0].code;
      return acc;
    }, {})
  );
  const group = PRODUCTS.find((p) => p.id === activeGroup) || PRODUCTS[0];
  const activeSubCode = activeSubByGroup[group.id];
  const sub = group.subcategories.find((s) => s.code === activeSubCode) || group.subcategories[0];
  const subDetail = (window.SUBCAT_DETAIL || SUBCAT_DETAIL)[sub.code] || {};
  React.useEffect(() => {
    if (focusId && focusId !== activeGroup && PRODUCTS.find((p) => p.id === focusId)) {
      setActiveGroup(focusId);
    }
  }, [focusId]);
  const detailRef = React.useRef(null);
  const [detailAnimKey, setDetailAnimKey] = React.useState(0);
  React.useEffect(() => {
    if (detailAnimKey === 0) return;
    const el = detailRef.current;
    if (!el) return;
    el.classList.remove("is-refreshed");
    void el.offsetWidth;
    el.classList.add("is-refreshed");
    const t = setTimeout(() => {
      if (detailRef.current) detailRef.current.classList.remove("is-refreshed");
    }, 600);
    return () => clearTimeout(t);
  }, [detailAnimKey]);
  const selectGroup = (id) => {
    setActiveGroup(id);
    const el = document.getElementById("product-explorer");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  const selectSub = (code) => {
    setActiveSubByGroup((s) => __spreadProps(__spreadValues({}, s), { [group.id]: code }));
    setDetailAnimKey((k) => k + 1);
    setTimeout(() => {
      if (detailRef.current) {
        const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 80 - 16;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 60);
  };
  return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "PRODUCTS AND SOLUTIONS"), /* @__PURE__ */ React.createElement("h1", null, "Electrical and electronics products for industrial applications."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Custom magnetics, power systems, control panels and integrated assemblies, engineered for industrial requirements across six sectors. Select a product group to explore specifications.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "./assets/Product-hero.jpg",
      alt: "Dynalektric control panel and power electronics manufacturing",
      width: "720",
      height: "540",
      decoding: "async",
      fetchpriority: "high"
    }
  )))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "product-explorer" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("nav", { className: "prodx-tabs", "aria-label": "Select product group" }, PRODUCTS.map((p) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: p.id,
      className: `prodx-tab ${activeGroup === p.id ? "is-active" : ""}`,
      onClick: () => selectGroup(p.id),
      "aria-current": activeGroup === p.id ? "true" : void 0
    },
    /* @__PURE__ */ React.createElement("span", { className: "mono num" }, p.num),
    /* @__PURE__ */ React.createElement("span", null, p.name)
  ))), /* @__PURE__ */ React.createElement("div", { className: "prodx-layout" }, /* @__PURE__ */ React.createElement("aside", { className: "prodx-rail", "aria-label": "Product groups" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-rail-head" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)" } }, "Product groups"), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600 } }, PRODUCTS.length)), PRODUCTS.map((p) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: p.id,
      className: `prodx-rail-item ${activeGroup === p.id ? "is-active" : ""}`,
      onClick: () => selectGroup(p.id),
      "aria-current": activeGroup === p.id ? "true" : void 0
    },
    /* @__PURE__ */ React.createElement("span", { className: "num" }, p.num),
    /* @__PURE__ */ React.createElement("span", { className: "name" }, p.name),
    /* @__PURE__ */ React.createElement("span", { className: "count mono" }, p.subcategories.length)
  )), /* @__PURE__ */ React.createElement("div", { className: "prodx-rail-cta" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginBottom: 8 } }, "Need help choosing?"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%", justifyContent: "center" }, onClick: () => navigate("contact") }, "Talk to engineering"))), /* @__PURE__ */ React.createElement("div", { className: "prodx-main" }, /* @__PURE__ */ React.createElement("header", { className: "prodx-group-head" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-group-num" }, group.num), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-meta" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600 } }, "Product group ", group.num), /* @__PURE__ */ React.createElement("h2", null, group.name), /* @__PURE__ */ React.createElement("p", { className: "lead" }, group.tagline))), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-body" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-group-overview" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600, marginBottom: 8 } }, "Overview"), /* @__PURE__ */ React.createElement("p", null, group.overview)), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-image" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: `./assets/${GROUP_IMG_FILENAME[group.id] || group.id + ".jpg"}`,
      alt: group.name,
      width: "720",
      height: "540",
      loading: "lazy",
      decoding: "async",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "12px"
      }
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-specs" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600, marginBottom: 16 } }, "Specification placeholders for ", group.name), /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-row" }, group.placeholders.map((s) => /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-cell", key: s.k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, s.k), /* @__PURE__ */ React.createElement("div", { className: "v" }, s.v))))), /* @__PURE__ */ React.createElement("div", { className: "prodx-subcat" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-subcat-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)" } }, "Sub-category explorer"), /* @__PURE__ */ React.createElement("h3", { style: { marginTop: 6 } }, "Select a sub-category")), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)" } }, group.subcategories.length, " items in ", group.name)), /* @__PURE__ */ React.createElement("div", { className: "prodx-subcat-grid" }, group.subcategories.map((s) => {
    const isActive = s.code === activeSubCode;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s.code,
        className: `prodx-subcat-card ${isActive ? "is-active" : ""}`,
        onClick: () => selectSub(s.code),
        "aria-pressed": isActive
      },
      /* @__PURE__ */ React.createElement("div", { className: "code mono" }, s.code),
      /* @__PURE__ */ React.createElement("div", { className: "name" }, s.name),
      /* @__PURE__ */ React.createElement("div", { className: "detail" }, s.detail),
      /* @__PURE__ */ React.createElement("div", { className: "card-foot" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, isActive ? "Showing" : "View details"), /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))
    );
  }))), /* @__PURE__ */ React.createElement("article", { ref: detailRef, id: "subcat-detail", className: "prodx-detail", "aria-live": "polite" }, /* @__PURE__ */ React.createElement(
    "header",
    {
      className: "prodx-detail-head",
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 350px",
        gap: "40px",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "prodx-detail-crumbs" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Selected"), /* @__PURE__ */ React.createElement("span", { className: "mono crumb-group" }, group.name), /* @__PURE__ */ React.createElement("span", { className: "mono sep" }, "/"), /* @__PURE__ */ React.createElement("span", { className: "mono crumb-sub" }, sub.name)), /* @__PURE__ */ React.createElement("h3", null, sub.name), /* @__PURE__ */ React.createElement("p", null, subDetail.description || sub.detail)),
    SUBCAT_IMG_SET.has(sub.code) && /* @__PURE__ */ React.createElement("div", { className: "prodx-detail-img-wrap" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: `./assets/${sub.code}.jpg`,
        alt: sub.name,
        loading: "lazy",
        decoding: "async",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block"
        }
      }
    ))
  ), /* @__PURE__ */ React.createElement("div", { className: "prodx-detail-body" }, /* @__PURE__ */ React.createElement("section", { className: "prodx-detail-block" }, /* @__PURE__ */ React.createElement("h4", null, "Typical applications"), /* @__PURE__ */ React.createElement("ul", { className: "prodx-list" }, (subDetail.applications || []).map((a, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "+"), " ", /* @__PURE__ */ React.createElement("span", null, a))))), /* @__PURE__ */ React.createElement("section", { className: "prodx-detail-block prodx-detail-specs" }, /* @__PURE__ */ React.createElement("h4", null, "Specification placeholders"), /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-row prodx-spec-row-dense" }, (subDetail.specs || []).map((s) => /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-cell", key: s.k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, s.k), /* @__PURE__ */ React.createElement("div", { className: "v" }, s.v))))), /* @__PURE__ */ React.createElement("section", { className: "prodx-detail-block" }, /* @__PURE__ */ React.createElement("h4", null, "Relevant industries"), /* @__PURE__ */ React.createElement("div", { className: "prodx-ind-chips" }, (subDetail.industries || []).map((iid) => {
    const ind = INDUSTRIES.find((x) => x.id === iid);
    if (!ind) return null;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: iid,
        className: "prodx-ind-chip",
        onClick: () => navigate("industries", iid)
      },
      ind.name,
      " \u2192"
    );
  })))), /* @__PURE__ */ React.createElement("footer", { className: "prodx-detail-cta" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => navigate("contact") }, "Submit RFQ for ", sub.name, " ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => navigate("contact") }, "Request datasheet"), /* @__PURE__ */ React.createElement("span", { className: "mono prodx-detail-note" }, "Datasheet on request. Final specification subject to engineering review."))), /* @__PURE__ */ React.createElement("div", { className: "prodx-links" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginBottom: 8 } }, "Where it is used"), /* @__PURE__ */ React.createElement("div", { className: "prodx-link-row" }, group.industries.slice(0, 4).map((iid) => {
    const ind = INDUSTRIES.find((x) => x.id === iid);
    return ind ? /* @__PURE__ */ React.createElement("a", { key: iid, onClick: () => navigate("industries", iid), className: "prodx-link" }, ind.name, " ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")) : null;
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginBottom: 8 } }, "Procurement support"), /* @__PURE__ */ React.createElement("div", { className: "prodx-link-row" }, /* @__PURE__ */ React.createElement("a", { onClick: () => navigate("export"), className: "prodx-link" }, "Export readiness ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("a", { onClick: () => navigate("contact"), className: "prodx-link" }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))))))))), /* @__PURE__ */ React.createElement(FinalCTA, { navigate }), /* @__PURE__ */ React.createElement(Footer, { navigate }));
}
window.PageProducts = PageProducts;
