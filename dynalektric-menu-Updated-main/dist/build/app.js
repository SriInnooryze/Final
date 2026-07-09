var __defProp = Object.defineProperty;
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
const TWEAK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "accent": 0,
    "typography": "sohne",
    "heroVariant": 0,
    "texture": "clean",
    "density": "comfortable"
  }
);
const ACCENT_OPTIONS = [
  ["#0077B6", "#003366"],
  // ocean blue + deep navy (default)
  ["#003366", "#0077B6"],
  // deep navy led
  ["#002A52", "#0077B6"],
  // ink navy + ocean blue
  ["#005F92", "#003366"]
  // hover blue + deep navy
];
const PAGE_URLS = {
  home: "./index.html",
  about: "./about.html",
  products: "./products-solutions.html",
  rnd: "./innovation-rd.html",
  industries: "./industries-applications.html",
  export: "./export.html",
  contact: "./contact.html"
};
const PAGE_ID = document.body.dataset.page || "home";
const focusId = new URLSearchParams(window.location.search).get("focus") || null;
const navigate = (id, focus = null) => {
  const base = PAGE_URLS[id] || PAGE_URLS.home;
  window.location.href = focus ? base + "?focus=" + encodeURIComponent(focus) : base;
};
window.__navigate = navigate;
const PAGE_META = {
  home: {
    title: "Dynalektric | Industrial Engineering and Manufacturing Solutions",
    description: "Explore Dynalektric's engineering, manufacturing, testing and application capabilities across mobility, energy, utilities, infrastructure and industrial sectors.",
    path: "/"
  },
  about: {
    title: "About Dynalektric | Engineering and Manufacturing Capability",
    description: "Learn about Dynalektric's engineering teams, manufacturing capability, facilities, testing processes and experience across industrial applications.",
    path: "/about.html"
  },
  products: {
    title: "Products and Solutions | Dynalektric",
    description: "Explore Dynalektric solutions across magnetics, control panel assemblies, power electronics systems and integrated electrical components.",
    path: "/products-solutions.html"
  },
  rnd: {
    title: "Innovation Portfolio | Dynalektric Engineering and R&D",
    description: "Explore Dynalektric's innovation, engineering and product development capability from feasibility and design through prototyping, testing and production.",
    path: "/innovation-rd.html"
  },
  industries: {
    title: "Industries and Applications | Dynalektric",
    description: "Discover Dynalektric applications across railways, renewable energy, power, heavy industries, material handling, warehousing and data centres.",
    path: "/industries-applications.html"
  },
  export: {
    title: "Export Capability and Global Delivery | Dynalektric",
    description: "Learn how Dynalektric supports international customers through engineering coordination, documentation, testing, packaging and export delivery.",
    path: "/export.html"
  },
  contact: {
    title: "Contact Dynalektric | Discuss Your Engineering Requirement",
    description: "Contact Dynalektric to discuss industrial engineering, manufacturing, product development, export or customised electrical system requirements.",
    path: "/contact.html"
  }
};
const SITE_ORIGIN = "https://dynalektric.com";
function updateDocumentMeta(pageId) {
  const meta = PAGE_META[pageId] || PAGE_META.home;
  document.title = meta.title;
  const setMeta = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };
  setMeta('meta[name="description"]', "content", meta.description);
  setMeta('meta[property="og:title"]', "content", meta.title);
  setMeta('meta[property="og:description"]', "content", meta.description);
  setMeta('meta[property="og:url"]', "content", SITE_ORIGIN + meta.path);
  setMeta('meta[name="twitter:title"]', "content", meta.title);
  setMeta('meta[name="twitter:description"]', "content", meta.description);
  setMeta('link[rel="canonical"]', "href", SITE_ORIGIN + meta.path);
}
function App() {
  const tw = useTweaks(TWEAK_DEFAULTS);
  const t = tw.values;
  const setTweak = tw.set;
  React.useEffect(() => {
    const accent = ACCENT_OPTIONS[t.accent] || ACCENT_OPTIONS[0];
    const root = document.documentElement;
    if (typeof t.accent === "number") {
      root.style.setProperty("--accent", accent[0]);
      root.style.setProperty("--accent-2", accent[1]);
    } else if (typeof t.accent === "string") {
      root.style.setProperty("--accent", t.accent);
    }
    document.body.dataset.texture = t.texture || "clean";
    document.body.dataset.density = t.density || "comfortable";
    root.style.setProperty("--font-display", "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
    root.style.setProperty("--font-body", "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
    root.style.setProperty("--font-mono", "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
  }, [t.accent, t.texture, t.density]);
  const renderPage = () => {
    const props = { navigate, focusId, tweaks: t };
    switch (PAGE_ID) {
      case "home":
        return /* @__PURE__ */ React.createElement(PageHome, __spreadValues({}, props));
      case "about":
        return /* @__PURE__ */ React.createElement(PageAbout, __spreadValues({}, props));
      case "products":
        return /* @__PURE__ */ React.createElement(PageProducts, __spreadValues({}, props));
      case "industries":
        return /* @__PURE__ */ React.createElement(PageIndustries, __spreadValues({}, props));
      case "rnd":
        return /* @__PURE__ */ React.createElement(PageRnd, __spreadValues({}, props));
      case "export":
        return /* @__PURE__ */ React.createElement(PageExport, __spreadValues({}, props));
      case "contact":
        return /* @__PURE__ */ React.createElement(PageContact, __spreadValues({}, props));
      default:
        return /* @__PURE__ */ React.createElement(PageHome, __spreadValues({}, props));
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), renderPage(), /* @__PURE__ */ React.createElement(DynaTweaksPanel, { t, setTweak }));
}
function DynaTweaksPanel({ t, setTweak }) {
  return /* @__PURE__ */ React.createElement(TweaksPanel, { title: "Tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { title: "Accent palette" }, /* @__PURE__ */ React.createElement(
    TweakColor,
    {
      label: "Accent pair",
      value: typeof t.accent === "number" ? t.accent : 0,
      options: ACCENT_OPTIONS,
      onChange: (v) => setTweak("accent", v)
    }
  )), /* @__PURE__ */ React.createElement(TweakSection, { title: "Background texture" }, /* @__PURE__ */ React.createElement(
    TweakRadio,
    {
      label: "Surface",
      value: t.texture,
      options: [
        { label: "Clean", value: "clean" },
        { label: "Grid", value: "grid" },
        { label: "Dots", value: "dots" }
      ],
      onChange: (v) => setTweak("texture", v)
    }
  )), /* @__PURE__ */ React.createElement(TweakSection, { title: "Density" }, /* @__PURE__ */ React.createElement(
    TweakRadio,
    {
      label: "Spacing",
      value: t.density,
      options: [
        { label: "Comfortable", value: "comfortable" },
        { label: "Compact", value: "compact" }
      ],
      onChange: (v) => setTweak("density", v)
    }
  )));
}
ReactDOM.createRoot(document.getElementById("app")).render(/* @__PURE__ */ React.createElement(App, null));
