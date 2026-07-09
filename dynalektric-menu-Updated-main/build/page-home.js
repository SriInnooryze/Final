const CAPABILITIES = [
  {
    num: "01",
    productId: "magnetics",
    slotId: "cap-magnetics",
    resKey: "cardMagnetics",
    img: "assets/card-magnetics-optimized.webp",
    title: "Power Transformation and Magnetics",
    back: "Transformers, reactors and magnetic components engineered for power conversion, distribution, harmonic control and specialised industrial applications.",
    labels: ["Application-specific engineering", "Manufacturing and testing", "Industrial and infrastructure use"],
    cta: "Explore Magnetics",
    imgPlaceholder: "Replace with Dynalektric Magnetics manufacturing image",
    imgAlt: "Industrial transformer manufacturing at Dynalektric"
  },
  {
    num: "02",
    productId: "control-panels",
    slotId: "cap-control",
    resKey: "cardControl",
    img: "assets/card-control-optimized.webp",
    title: "Control, Distribution and Panel Engineering",
    back: "Panel and distribution assemblies developed around control, operating, safety and application requirements for railway, power and industrial equipment.",
    labels: ["Control integration", "Assembly and wiring", "Testing and documentation"],
    cta: "Explore Panel Engineering",
    imgPlaceholder: "Replace with Dynalektric Panel Engineering image",
    imgAlt: "Electrical control panel assembly at Dynalektric"
  },
  {
    num: "03",
    productId: "power-electronics",
    slotId: "cap-power",
    resKey: "cardPower",
    img: "assets/card-power-optimized.webp",
    title: "DC Power and Electronic Systems",
    back: "DC power, charging and electronic systems configured for equipment duty, operational environments and specialised industrial applications.",
    labels: ["Duty-specific design", "Power conversion", "Validation and testing"],
    cta: "Explore Power Electronics",
    imgPlaceholder: "Replace with Dynalektric Power Electronics image",
    imgAlt: "Battery charger and power electronics assembly at Dynalektric"
  },
  {
    num: "04",
    productId: "cross-segment",
    slotId: "cap-integrated",
    resKey: "cardIntegrated",
    img: "assets/card-integrated-optimized.webp",
    title: "Integrated Components and Assemblies",
    back: "Supporting electrical and electronic components integrated into railway, power, equipment and cross-sector industrial systems.",
    labels: ["Component integration", "Custom assemblies", "Cross-sector applications"],
    cta: "Explore Integrated Solutions",
    imgPlaceholder: "Replace with Dynalektric Integrated Components image",
    imgAlt: "Dynalektric technician assembling integrated electrical components"
  }
];
function FlipCard({ cap, navigate }) {
  const [flipped, setFlipped] = React.useState(false);
  const frontBtnRef = React.useRef(null);
  const backBtnRef = React.useRef(null);
  React.useEffect(() => {
    if (flipped) {
      backBtnRef.current && backBtnRef.current.focus();
    }
  }, [flipped]);
  return /* @__PURE__ */ React.createElement("div", { className: "capcar-card" }, /* @__PURE__ */ React.createElement("div", { className: "flip-inner", "data-flipped": flipped }, /* @__PURE__ */ React.createElement("div", { className: "flip-face flip-front", "aria-hidden": flipped, inert: flipped ? "" : void 0 }, /* @__PURE__ */ React.createElement(
    "image-slot",
    {
      id: `home-${cap.slotId}`,
      src: window.__resources && window.__resources[cap.resKey] || cap.img,
      fit: "cover",
      position: "50% 50%",
      placeholder: cap.imgPlaceholder,
      "aria-label": cap.imgAlt,
      shape: "rect",
      loading: "lazy"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flip-front-scrim" }), /* @__PURE__ */ React.createElement("div", { className: "flip-front-top" }, /* @__PURE__ */ React.createElement("span", { className: "flip-front-num" }, cap.num, " / 04"), /* @__PURE__ */ React.createElement("span", { className: "flip-front-ind" }, /* @__PURE__ */ React.createElement("span", { className: "pulse" }), "Capability")), /* @__PURE__ */ React.createElement("div", { className: "flip-front-foot" }, /* @__PURE__ */ React.createElement("h3", null, cap.title), /* @__PURE__ */ React.createElement(
    "button",
    {
      ref: frontBtnRef,
      type: "button",
      className: "flip-trigger",
      "aria-expanded": flipped,
      "aria-label": `Show details for ${cap.title}`,
      onClick: () => setFlipped(true)
    },
    "Click to explore ",
    /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u21BB")
  ))), /* @__PURE__ */ React.createElement("div", { className: "flip-face flip-back", "aria-hidden": !flipped, inert: !flipped ? "" : void 0 }, /* @__PURE__ */ React.createElement("span", { className: "flip-back-num" }, cap.num, " / 04"), /* @__PURE__ */ React.createElement("div", { className: "flip-back-title" }, cap.title), /* @__PURE__ */ React.createElement("p", { className: "flip-back-text" }, cap.back), /* @__PURE__ */ React.createElement("div", { className: "flip-back-labels" }, cap.labels.map((l) => /* @__PURE__ */ React.createElement("span", { className: "lbl", key: l }, l))), /* @__PURE__ */ React.createElement("div", { className: "flip-back-foot" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "flip-cta",
      onClick: () => navigate("products", cap.productId)
    },
    cap.cta,
    " ",
    /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      ref: backBtnRef,
      type: "button",
      className: "flip-flipback",
      "aria-label": `Show image for ${cap.title}`,
      onClick: () => {
        setFlipped(false);
        frontBtnRef.current && frontBtnRef.current.focus();
      }
    },
    /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2190"),
    " Back"
  )))));
}
function CapabilityCarousel({ navigate }) {
  const total = CAPABILITIES.length;
  const [index, setIndex] = React.useState(0);
  const [perPage, setPerPage] = React.useState(2);
  const trackRef = React.useRef(null);
  const [tx, setTx] = React.useState(0);
  React.useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w <= 720) setPerPage(0);
      else if (w <= 1080) setPerPage(1);
      else setPerPage(2);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  const maxIndex = perPage === 0 ? 0 : Math.max(0, total - perPage);
  React.useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);
  React.useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || perPage === 0) {
        setTx(0);
        return;
      }
      const card = track.children[0];
      if (!card) return;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
      const step = card.getBoundingClientRect().width + gap;
      setTx(-(index * step));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index, perPage]);
  const stacked = perPage === 0;
  const atStart = index <= 0;
  const atEnd = index >= maxIndex;
  return /* @__PURE__ */ React.createElement("div", { className: "capcar" }, /* @__PURE__ */ React.createElement("div", { className: "capcar-viewport" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "capcar-track",
      ref: trackRef,
      style: { transform: stacked ? "none" : `translateX(${tx}px)` }
    },
    CAPABILITIES.map((cap) => /* @__PURE__ */ React.createElement(FlipCard, { key: cap.productId, cap, navigate }))
  )), /* @__PURE__ */ React.createElement("div", { className: "capcar-controls" }, /* @__PURE__ */ React.createElement("div", { className: "capcar-arrows" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "capcar-arrow",
      "aria-label": "Previous capability",
      disabled: atStart,
      onClick: () => setIndex((i) => Math.max(0, i - 1))
    },
    /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M15 5l-7 7 7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "capcar-arrow",
      "aria-label": "Next capability",
      disabled: atEnd,
      onClick: () => setIndex((i) => Math.min(maxIndex, i + 1))
    },
    /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
  )), /* @__PURE__ */ React.createElement("div", { className: "capcar-count", "aria-live": "polite" }, /* @__PURE__ */ React.createElement("b", null, String(index + 1).padStart(2, "0")), " / ", String(total).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "capcar-foot" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-ghost-text", onClick: () => navigate("products") }, "Explore all products and solutions ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")))));
}
const HOME_INDUSTRIES = [
  {
    id: "railways",
    num: "01",
    name: "Railway & Traction",
    img: "assets/industry-railways-optimized.webp",
    resKey: "indRailways",
    desc: "Electrical and electronic systems supporting onboard, trackside and railway equipment applications.",
    labels: ["Traction equipment", "Onboard systems", "Control and auxiliary power"],
    cta: "Explore Railway Applications",
    placeholder: "Replace with approved Dynalektric Railway application image",
    alt: "Modern electric railway and traction infrastructure"
  },
  {
    id: "renewables",
    num: "02",
    name: "Renewable Sectors",
    img: "assets/industry-renewables.jpg",
    resKey: "indRenewables",
    desc: "Magnetics, reactors and power systems supporting conversion, grid integration and renewable-energy infrastructure.",
    labels: ["Solar and wind", "Grid integration", "Energy conversion"],
    cta: "Explore Renewable Applications",
    placeholder: "Replace with approved Dynalektric Renewable application image",
    alt: "Renewable energy infrastructure with solar, wind and electrical systems"
  },
  {
    id: "powergrid",
    num: "03",
    name: "Power & Utilities",
    img: "assets/industry-powergrid.jpg",
    resKey: "indPowergrid",
    desc: "Power conversion, distribution and control solutions supporting utilities, EPC contractors and infrastructure projects.",
    labels: ["Power distribution", "Utility systems", "EPC projects"],
    cta: "Explore Power Applications",
    placeholder: "Replace with approved Dynalektric Power & Utilities image",
    alt: "Power utility substation and electrical transmission infrastructure"
  },
  {
    id: "heavy",
    num: "04",
    name: "Heavy Industries",
    img: "assets/industry-heavy.jpg",
    resKey: "indHeavy",
    desc: "Electrical, magnetic and control solutions developed for demanding process and heavy-equipment environments.",
    labels: ["Steel and cement", "Mining", "Process industries"],
    cta: "Explore Heavy Industry Applications",
    placeholder: "Replace with approved Dynalektric Heavy Industries image",
    alt: "Heavy industrial steel manufacturing and process equipment"
  },
  {
    id: "mhe",
    num: "05",
    name: "Material Handling & Warehousing",
    img: "assets/industry-mhe.jpg",
    resKey: "indMhe",
    desc: "Charging, power electronics and control systems supporting forklifts, AGVs and warehouse equipment.",
    labels: ["Forklifts", "AGVs", "Charging systems"],
    cta: "Explore Material Handling Applications",
    placeholder: "Replace with approved Dynalektric Material Handling image",
    alt: "Material handling and automated warehousing operations"
  },
  {
    id: "datacenter",
    num: "06",
    name: "Data Centers",
    img: "assets/industry-datacenter.jpg",
    resKey: "indDatacenter",
    desc: "Distribution, UPS interface and critical-power support for data-centre infrastructure and operational continuity.",
    labels: ["Critical power", "UPS interface", "Distribution systems"],
    cta: "Explore Data Center Applications",
    placeholder: "Replace with approved Dynalektric Data Center power image",
    alt: "Modern data center with server and critical power infrastructure"
  }
];
function IndustryStage({ navigate }) {
  const total = HOME_INDUSTRIES.length;
  const [active, setActive] = React.useState(0);
  const [preview, setPreview] = React.useState(null);
  const tabRefs = React.useRef([]);
  const touch = React.useRef({ x: 0, y: 0 });
  const shown = preview != null ? preview : active;
  const ind = HOME_INDUSTRIES[shown];
  const select = (i) => {
    setActive(i);
    setPreview(null);
  };
  const go = (dir) => setActive((i) => {
    const n = i + dir;
    if (n < 0 || n > total - 1) return i;
    setPreview(null);
    return n;
  });
  const onRailKey = (e, i) => {
    let n = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = Math.min(total - 1, i + 1);
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = Math.max(0, i - 1);
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = total - 1;
    if (n != null) {
      e.preventDefault();
      select(n);
      const el = tabRefs.current[n];
      el && el.focus();
    }
  };
  const onTouchStart = (e) => {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "indstage" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "indstage-main",
      onTouchStart,
      onTouchEnd
    },
    HOME_INDUSTRIES.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: "indstage-img", "data-active": i === shown, "aria-hidden": i !== shown, key: it.id }, /* @__PURE__ */ React.createElement(
      "image-slot",
      {
        id: `home-ind-${it.id}`,
        src: window.__resources && window.__resources[it.resKey] || it.img,
        fit: "cover",
        position: "50% 50%",
        placeholder: it.placeholder,
        "aria-label": it.alt,
        shape: "rect",
        loading: "lazy"
      }
    ))),
    /* @__PURE__ */ React.createElement("div", { className: "indstage-scrim" }),
    /* @__PURE__ */ React.createElement("div", { className: "indstage-content", key: shown, role: "tabpanel", "aria-live": "polite" }, /* @__PURE__ */ React.createElement("span", { className: "indstage-num mono" }, ind.num, " / 06"), /* @__PURE__ */ React.createElement("h3", null, ind.name), /* @__PURE__ */ React.createElement("p", null, ind.desc), /* @__PURE__ */ React.createElement("div", { className: "indstage-labels" }, ind.labels.map((l) => /* @__PURE__ */ React.createElement("span", { className: "indstage-chip", key: l }, l))), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "indstage-explore",
        onClick: () => navigate("industries", ind.id)
      },
      ind.cta,
      " ",
      /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")
    ))
  ), /* @__PURE__ */ React.createElement("div", { className: "indstage-rail", role: "tablist", "aria-label": "Select an industry" }, HOME_INDUSTRIES.map((it, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: it.id,
      type: "button",
      role: "tab",
      id: `indtab-${it.id}`,
      ref: (el) => tabRefs.current[i] = el,
      className: "ind-sel",
      "aria-selected": active === i,
      tabIndex: active === i ? 0 : -1,
      onClick: () => select(i),
      onKeyDown: (e) => onRailKey(e, i),
      onMouseEnter: () => setPreview(i),
      onMouseLeave: () => setPreview(null)
    },
    /* @__PURE__ */ React.createElement("span", { className: "ind-sel-bar", "aria-hidden": "true" }),
    /* @__PURE__ */ React.createElement("span", { className: "num" }, it.num),
    /* @__PURE__ */ React.createElement("span", { className: "nm" }, it.name)
  ))), /* @__PURE__ */ React.createElement("div", { className: "indstage-controls" }, /* @__PURE__ */ React.createElement("div", { className: "indstage-arrows" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "indstage-arrow",
      "aria-label": "Previous industry",
      disabled: active <= 0,
      onClick: () => go(-1)
    },
    /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M15 5l-7 7 7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "indstage-arrow",
      "aria-label": "Next industry",
      disabled: active >= total - 1,
      onClick: () => go(1)
    },
    /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
  )), /* @__PURE__ */ React.createElement("div", { className: "indstage-count", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("b", null, String(active + 1).padStart(2, "0")), " / ", String(total).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "indstage-foot" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost indstage-allbtn", onClick: () => navigate("industries") }, "Explore All Industries and Applications \u2192"))));
}
function HeroVideo({ navigate }) {
  const [playing, setPlaying] = React.useState(true);
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    const applyMotionPreference = () => {
      if (!video || !mq) return;
      if (mq.matches) {
        video.pause();
        setPlaying(false);
      } else {
        video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };
    applyMotionPreference();
    if (mq && typeof mq.addEventListener === "function") {
      mq.addEventListener("change", applyMotionPreference);
      return () => mq.removeEventListener("change", applyMotionPreference);
    }
    if (mq && typeof mq.addListener === "function") {
      mq.addListener(applyMotionPreference);
      return () => mq.removeListener(applyMotionPreference);
    }
  }, []);
  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (video.paused) {
        await video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Unable to control hero video:", error);
      setPlaying(false);
    }
  };
  return /* @__PURE__ */ React.createElement("section", { className: "hero-video", "data-playing": playing, "aria-label": "Dynalektric engineering and manufacturing" }, /* @__PURE__ */ React.createElement("div", { className: "hero-video-media" }, /* @__PURE__ */ React.createElement(
    "video",
    {
      ref: videoRef,
      className: "hero-video-element",
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      preload: "metadata",
      poster: window.__resources && window.__resources.heroPoster || "assets/hero-poster-optimized.webp",
      "aria-label": "Dynalektric factory, engineering and manufacturing",
      onPlay: () => setPlaying(true),
      onPause: () => setPlaying(false),
      onError: (event) => {
        console.error("Hero video failed to load:", event.currentTarget.currentSrc);
        setPlaying(false);
      },
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        objectFit: "cover",
        objectPosition: "center top"
      }
    },
    /* @__PURE__ */ React.createElement("source", { src: "./public/videos/Dynalektric_Hero-optimized.mp4", type: "video/mp4" }),
    "Your browser does not support background video."
  )), /* @__PURE__ */ React.createElement("div", { className: "hero-video-scrim" }), /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "hero-video-content" }, /* @__PURE__ */ React.createElement("div", { className: "hero-video-eyebrow mono" }, /* @__PURE__ */ React.createElement("span", { className: "hero-video-line", "aria-hidden": "true" }), "Engineered for industry"), /* @__PURE__ */ React.createElement("h1", null, "Engineering built for industrial progress."), /* @__PURE__ */ React.createElement("p", null, "In-house engineering, manufacturing and testing for infrastructure, mobility, energy and industrial applications."), /* @__PURE__ */ React.createElement("div", { className: "hero-video-actions" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => navigate("about") }, "Discover Dynalektric ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "hero-video-link", onClick: () => navigate("contact") }, "Discuss Your Requirement ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "hero-video-toggle",
      "aria-pressed": playing,
      "aria-label": playing ? "Pause background video" : "Play background video",
      onClick: toggleVideo
    },
    playing ? /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("rect", { x: "6.5", y: "5", width: "3.6", height: "14", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "13.9", y: "5", width: "3.6", height: "14", rx: "1" })) : /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M8 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 8 5.5z" }))
  ));
}
function OrgSection({ navigate }) {
  const caps = [
    { t: "In-house engineering", d: "Design, development and application review supported by cross-functional technical teams." },
    { t: "Manufacturing capability", d: "Structured production across magnetics, panels, power electronics and engineered assemblies." },
    { t: "Testing and documentation", d: "Inspection, validation and documentation aligned to product and project requirements." }
  ];
  const proof = [
    { k: "Since 1980", v: "Engineering and manufacturing" },
    { k: "In-house", v: "Design, production and testing" },
    { k: "Six sectors", v: "Industries supported" },
    { k: "Export ready", v: "Documentation and delivery" }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "section reveal org-section" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "org-split" }, /* @__PURE__ */ React.createElement("div", { className: "org-visual" }, /* @__PURE__ */ React.createElement(
    "image-slot",
    {
      id: "org-image",
      src: window.__resources && window.__resources.cardMagnetics || "assets/inside-dynalektric.jpg",
      fit: "cover",
      position: "50% 50%",
      placeholder: "Replace with a Dynalektric factory floor, engineering team or testing image",
      "aria-label": "Dynalektric manufacturing facility and production floor",
      shape: "rect",
      loading: "lazy"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "org-body" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Inside Dynalektric")), /* @__PURE__ */ React.createElement("h2", null, "The organisation behind every engineered solution."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Dynalektric combines engineering teams, manufacturing capability, testing processes and application experience within one operating environment."), /* @__PURE__ */ React.createElement("ul", { className: "org-caps" }, caps.map((c) => /* @__PURE__ */ React.createElement("li", { key: c.t }, /* @__PURE__ */ React.createElement("h3", null, c.t), /* @__PURE__ */ React.createElement("p", null, c.d)))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-ghost-text org-cta", onClick: () => navigate("about") }, "About Dynalektric ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")))), /* @__PURE__ */ React.createElement("div", { className: "org-proof", "aria-label": "Company credentials" }, proof.map((p) => /* @__PURE__ */ React.createElement("div", { className: "org-proof-item", key: p.k }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, p.k), /* @__PURE__ */ React.createElement("div", { className: "org-proof-label" }, p.v))))));
}
const FEATURED_CASES = [
  {
    id: "railway",
    industry: "Industrial Machinery",
    title: "55 kVA Three-Phase Auto Transformer for CNC Woodworking Machinery",
    challenge: "A leading industrial machinery manufacturer required a custom-engineered three-phase auto transformer capable of supporting multiple international input voltages while delivering a stable 400 V output for CNC woodworking equipment. The solution needed to operate reliably across global installations, maintain high electrical efficiency, withstand continuous industrial duty and integrate seamlessly into the customer's machine architecture while meeting applicable international electrical standards.",
    response: "Dynalektric engineered and manufactured a 55 kVA three-phase copper-wound auto transformer specifically for this application. The design incorporated optimized magnetic construction, Class F insulation, tropicalized winding treatment and robust mechanical construction for dependable long-term operation. Every unit underwent comprehensive electrical testing and inspection before delivery, ensuring reliable voltage conversion, operational stability and consistent performance for demanding industrial manufacturing environments.",
    capability: ["Custom Transformer Engineering", "Copper Winding Technology", "Industrial Manufacturing", "Factory Tested"],
    img: "assets/industry-railways-optimized.webp",
    resKey: "indRailways",
    placeholder: "Replace with approved Dynalektric railway project or product-in-application image",
    alt: "Representative railway and traction application image",
    to: "railways"
  },
  {
    id: "renewable",
    industry: "Power Quality & Renewable Energy",
    title: "25 kV Air Core Reactor for Static VAR Generator Applications",
    challenge: "A power quality improvement project required a high-performance air core reactor for integration into a Static VAR Generator (SVG) system. The solution needed to provide dependable harmonic mitigation, support reactive power compensation and maintain stable electrical characteristics during continuous operation within demanding industrial and utility environments while ensuring long operational life.",
    response: "Dynalektric developed an application-specific air core reactor engineered for optimized inductance, thermal stability and electrical reliability. The reactor was designed using proven electromagnetic engineering principles and manufactured under stringent quality processes. Comprehensive validation and routine testing ensured reliable integration into SVG systems while supporting improved grid stability and long-term power quality performance.",
    capability: ["Power Quality Engineering", "Custom Reactor Design", "Thermal Optimization", "Performance Validation"],
    img: "assets/industry-renewables.jpg",
    resKey: "indRenewables",
    placeholder: "Replace with approved Dynalektric renewable-energy project image",
    alt: "Representative renewable-energy application image",
    to: "renewables"
  },
  {
    id: "power",
    industry: "Industrial Power Systems",
    title: "300 kVA Copper Wound Dry Type Auto Transformer",
    challenge: "An industrial rectifier power application required a high-capacity dry type auto transformer capable of delivering reliable voltage transformation under continuous heavy-duty operating conditions. The design required excellent thermal performance, dependable insulation, optimized efficiency and robust mechanical construction while satisfying demanding industrial operating requirements.",
    response: "Dynalektric engineered and manufactured a 300 kVA copper-wound dry type auto transformer designed specifically for industrial power conversion applications. The transformer combined optimized winding geometry, robust insulation systems and precision manufacturing with comprehensive routine testing to ensure dependable electrical performance, operational reliability and long service life across critical industrial installations.",
    capability: ["Copper Winding", "Dry Type Engineering", "Heavy Duty Applications", "Quality Assurance"],
    img: "assets/industry-powergrid.jpg",
    resKey: "indPowergrid",
    placeholder: "Replace with approved Dynalektric utility or substation project image",
    alt: "Representative power and utilities application image",
    to: "powergrid"
  }
];
function FeaturedCases({ navigate }) {
  const total = FEATURED_CASES.length;
  const [idx, setIdx] = React.useState(0);
  const thumbRefs = React.useRef([]);
  const touch = React.useRef({ x: 0, y: 0 });
  const c = FEATURED_CASES[idx];
  const go = (dir) => setIdx((i) => (i + dir + total) % total);
  const onThumbKey = (e, i) => {
    let n = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % total;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + total) % total;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = total - 1;
    if (n != null) {
      e.preventDefault();
      setIdx(n);
      const el = thumbRefs.current[n];
      el && el.focus();
    }
  };
  const onTouchStart = (e) => {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x, dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "cases" }, /* @__PURE__ */ React.createElement("div", { className: "cases-stage" }, /* @__PURE__ */ React.createElement("div", { className: "case-visual", onTouchStart, onTouchEnd }, FEATURED_CASES.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: "case-img", "data-active": i === idx, "aria-hidden": i !== idx, key: it.id }, /* @__PURE__ */ React.createElement(
    "image-slot",
    {
      id: `home-case-${it.id}`,
      src: window.__resources && window.__resources[it.resKey] || it.img,
      fit: "cover",
      position: "50% 50%",
      placeholder: it.placeholder,
      "aria-label": it.alt,
      shape: "rect",
      loading: "lazy"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "case-img-scrim" }), /* @__PURE__ */ React.createElement("span", { className: "case-img-tag mono" }, "Representative application image")), /* @__PURE__ */ React.createElement("div", { className: "case-panel", key: idx }, /* @__PURE__ */ React.createElement("div", { className: "case-panel-top" }, /* @__PURE__ */ React.createElement("span", { className: "case-industry mono" }, c.industry), /* @__PURE__ */ React.createElement("span", { className: "case-count mono", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("b", null, String(idx + 1).padStart(2, "0")), " / ", String(total).padStart(2, "0"))), /* @__PURE__ */ React.createElement("h3", null, c.title), /* @__PURE__ */ React.createElement("div", { className: "case-row" }, /* @__PURE__ */ React.createElement("span", { className: "case-k mono" }, "Challenge"), /* @__PURE__ */ React.createElement("p", null, c.challenge)), /* @__PURE__ */ React.createElement("div", { className: "case-row" }, /* @__PURE__ */ React.createElement("span", { className: "case-k mono" }, "Dynalektric response"), /* @__PURE__ */ React.createElement("p", null, c.response)), /* @__PURE__ */ React.createElement("div", { className: "case-caps" }, c.capability.map((l) => /* @__PURE__ */ React.createElement("span", { className: "case-chip", key: l }, l))), /* @__PURE__ */ React.createElement("div", { className: "case-foot" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "case-readlink", onClick: () => navigate("industries", c.to) }, "View Application ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("div", { className: "case-arrows" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "case-arrow", "aria-label": "Previous case study", onClick: () => go(-1) }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M15 5l-7 7 7 7", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ React.createElement("button", { type: "button", className: "case-arrow", "aria-label": "Next case study", onClick: () => go(1) }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7", strokeLinecap: "round", strokeLinejoin: "round" }))))))), /* @__PURE__ */ React.createElement("div", { className: "case-thumbs", role: "tablist", "aria-label": "Select a case study" }, FEATURED_CASES.map((it, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: it.id,
      type: "button",
      role: "tab",
      ref: (el) => thumbRefs.current[i] = el,
      className: "case-thumb",
      "aria-selected": idx === i,
      tabIndex: idx === i ? 0 : -1,
      onClick: () => setIdx(i),
      onKeyDown: (e) => onThumbKey(e, i)
    },
    /* @__PURE__ */ React.createElement("span", { className: "case-thumb-num mono" }, String(i + 1).padStart(2, "0")),
    /* @__PURE__ */ React.createElement("span", { className: "case-thumb-name" }, it.industry)
  )), /* @__PURE__ */ React.createElement("p", { className: "case-note" }, "Customer names and project details are shown only where approved.")));
}
function PageHome({ navigate, tweaks }) {
  useReveal();
  return /* @__PURE__ */ React.createElement("main", { className: "page-enter home-main" }, /* @__PURE__ */ React.createElement(HeroVideo, { navigate }), /* @__PURE__ */ React.createElement(OrgSection, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "What we engineer")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Engineering systems that power, control and support industrial operations."), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 16 } }, "Dynalektric combines engineering, manufacturing and testing across four core capability areas serving demanding industrial applications."))), /* @__PURE__ */ React.createElement(CapabilityCarousel, { navigate }))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--panel-dark)", color: "var(--on-dark)", margin: "0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head", style: { borderColor: "rgba(255,255,255,0.1)" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label on-dark" }, "Industries & applications")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { color: "var(--bg)" } }, "Engineering capability applied across demanding industries."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "rgba(244,244,241,0.7)", maxWidth: "60ch" } }, "Dynalektric supports power, control and equipment applications across established infrastructure, mobility and industrial sectors."))), /* @__PURE__ */ React.createElement(IndustryStage, { navigate }))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser" }, /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser-copy" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Engineering and NPD")), /* @__PURE__ */ React.createElement("h2", null, "Custom requirements engineered in-house."), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 24 } }, "Our engineering and new product development teams take a customer specification through feasibility, design, prototyping, validation and pilot production. One team, one process."), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-ghost-text", style: { marginTop: 32 }, onClick: () => navigate("rnd") }, "View engineering capability ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))), /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser-visual" }, /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser-figure" }, /* @__PURE__ */ React.createElement(
    "image-slot",
    {
      id: "home-engineering-npd",
      src: window.__resources && window.__resources.engineeringNpd || "assets/engineering-npd-optimized.webp",
      fit: "cover",
      position: "50% 50%",
      placeholder: "Replace with a Dynalektric in-house engineering and assembly image",
      "aria-label": "Dynalektric engineers developing and assembling a custom electrical solution in-house",
      shape: "rect",
      loading: "lazy"
    }
  )))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Standards and testing")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Type-tested designs, full documentation, traceable processes."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "var(--ink-soft)" } }, "Every product ships with routine and type test reports, QAP documentation and material traceability. Designs validated against IEC, IS and customer specifications."))), /* @__PURE__ */ React.createElement("div", { className: "standards-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { marginBottom: 24, color: "var(--accent)", fontWeight: 600 } }, "Certifications and standards"), /* @__PURE__ */ React.createElement("div", { className: "cert-row" }, CERTIFICATIONS.map((c) => /* @__PURE__ */ React.createElement("div", { className: "cert-item", key: c.code }, /* @__PURE__ */ React.createElement("div", { className: "cert-code" }, c.code), /* @__PURE__ */ React.createElement("div", { className: "cert-label mono" }, c.label)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 }, className: "mono" }, "Certificate copies available on request")), /* @__PURE__ */ React.createElement("div", { className: "qa-card" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { marginBottom: 16, color: "var(--accent)", fontWeight: 600 } }, "Quality process"), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13, paddingBottom: 12, borderBottom: "1px solid var(--rule-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "Routine testing"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "100% electrical validation on every unit")), /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13, paddingBottom: 12, borderBottom: "1px solid var(--rule-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "Type testing"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "On-site labs plus accredited externals")), /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13, paddingBottom: 12, borderBottom: "1px solid var(--rule-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "FAT support"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "Customer factory acceptance testing")), /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "Documentation"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "QAP, GA drawings, test reports, BoM"))))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--panel-dark)", borderRadius: "var(--radius-card)", padding: "48px 40px", marginTop: 56 } }, /* @__PURE__ */ React.createElement("div", { className: "stats-row" }, STATS.map((s, i) => /* @__PURE__ */ React.createElement("div", { className: "stats-item reveal", key: i, style: { transitionDelay: `${i * 80}ms`, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "big-num", style: { color: "#ffffff" } }, s.value.includes("+") ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Counter, { to: parseInt(s.value) }), "+") : s.value), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { marginTop: 12, color: "rgba(244,244,241,0.55)" } }, s.sub), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "rgba(244,244,241,0.75)", marginTop: 8 } }, s.label))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Case studies")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Engineering outcomes from real applications."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "var(--ink-soft)" } }, "Selected examples of how Dynalektric applies engineering, manufacturing and testing capability across industrial applications."))), /* @__PURE__ */ React.createElement(FeaturedCases, { navigate }))), /* @__PURE__ */ React.createElement(
    FinalCTA,
    {
      navigate,
      eyebrow: "Discuss your requirement",
      heading: "Discuss your application or engineering requirement",
      body: "Connect with the Dynalektric team to discuss your application, technical requirement or project context.",
      primaryLabel: "Discuss Your Requirement",
      primaryTo: "contact",
      secondaryLabel: "Explore Our Capabilities",
      secondaryTo: "about",
      tertiaryLabel: "Submit a Detailed RFQ",
      tertiaryTo: "contact"
    }
  ), /* @__PURE__ */ React.createElement(Footer, { navigate }));
}
window.PageHome = PageHome;
