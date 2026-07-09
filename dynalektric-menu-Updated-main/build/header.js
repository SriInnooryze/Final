const NAV_LINKS = [
  { id: "home", label: "Home", href: "./index.html" },
  { id: "about", label: "About", href: "./about.html" },
  { id: "products", label: "Products & Solutions", href: "./products-solutions.html" },
  { id: "rnd", label: "Innovation Portfolio", href: "./innovation-rd.html" },
  { id: "industries", label: "Industries & Applications", href: "./industries-applications.html" },
  { id: "export", label: "Export", href: "./export.html" },
  { id: "contact", label: "Contact", href: "./contact.html" }
];
function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const currentPage = document.body.dataset.page || "home";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", { className: "topbar", role: "banner" }, /* @__PURE__ */ React.createElement("div", { className: "topbar-inner" }, /* @__PURE__ */ React.createElement("a", { className: "topbar-logo", href: "./index.html", "aria-label": "Dynalektric home" }, /* @__PURE__ */ React.createElement("img", { src: window.__resources && window.__resources.dynaLogo || "assets/dynalektric-logo.png", alt: "Dynalektric, Power Motion Safety", width: "350", height: "150", decoding: "async" })), /* @__PURE__ */ React.createElement("nav", { className: "topbar-nav", "aria-label": "Main navigation" }, NAV_LINKS.map((n) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: n.id,
      className: "nav-link",
      href: n.href,
      "aria-current": currentPage === n.id ? "page" : void 0
    },
    n.label
  ))), /* @__PURE__ */ React.createElement("div", { className: "topbar-cta" }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "./contact.html", "aria-label": "Submit RFQ on contact page" }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "menu-btn", onClick: () => setDrawerOpen(true), "aria-label": "Open menu" }, "Menu")))), /* @__PURE__ */ React.createElement("div", { className: `mobile-drawer ${drawerOpen ? "is-open" : ""}`, role: "dialog", "aria-label": "Mobile navigation", "aria-hidden": !drawerOpen }, /* @__PURE__ */ React.createElement("button", { className: "menu-btn close-btn", onClick: () => setDrawerOpen(false), "aria-label": "Close menu" }, "Close"), NAV_LINKS.map((n) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: n.id,
      className: "nav-link",
      href: n.href,
      "aria-current": currentPage === n.id ? "page" : void 0
    },
    n.label
  )), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "./contact.html", style: { marginTop: 24, alignSelf: "flex-start" } }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192"))));
}
window.Header = Header;
