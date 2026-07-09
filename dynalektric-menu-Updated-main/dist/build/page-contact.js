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
const REQ_TYPES = [
  "New requirement",
  "Replacement",
  "Custom modification",
  "Technical clarification",
  "Supplier qualification",
  "Export enquiry"
];
const QTY_RANGES = [
  "Prototype",
  "Small batch",
  "Production scale",
  "Not confirmed"
];
const INDUSTRY_OPTS = [
  { id: "railways", label: "Railway & Traction" },
  { id: "renewables", label: "Renewable Sectors" },
  { id: "powergrid", label: "Power & Utilities" },
  { id: "heavy", label: "Heavy Industries" },
  { id: "mhe", label: "Material Handling & Warehousing" },
  { id: "datacenter", label: "Data Centers" },
  { id: "other", label: "Other" }
];
const ACCEPTED_FILE_TYPES = ".pdf,.doc,.docx,.xls,.xlsx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
function PageContact({ navigate }) {
  useReveal();
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    industry: "",
    reqType: "",
    qty: "",
    message: ""
  });
  const [file, setFile] = React.useState(null);
  const [fileError, setFileError] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [leadId, setLeadId] = React.useState("");
  const submissionIdRef = React.useRef(
    crypto.randomUUID()
  );
  const set = (k, v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
  const fileToBase64 = (selectedFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const result = String(reader.result || "");
          const base64Data = result.split(",")[1];
          if (!base64Data) {
            reject(
              new Error(
                "Unable to process the selected document."
              )
            );
            return;
          }
          resolve(base64Data);
        } catch (error) {
          reject(
            new Error(
              "Unable to process the selected document."
            )
          );
        }
      };
      reader.onerror = () => {
        reject(
          new Error(
            "Unable to read the selected document."
          )
        );
      };
      reader.readAsDataURL(
        selectedFile
      );
    });
  };
  const onFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) {
      setFile(null);
      setFileError("");
      return;
    }
    const okTypes = ["pdf", "doc", "docx", "xls", "xlsx"];
    const ext = (f.name.split(".").pop() || "").toLowerCase();
    if (!okTypes.includes(ext)) {
      setFileError("Please upload a PDF, Word or Excel file.");
      setFile(null);
      e.target.value = "";
      return;
    }
    if (f.size > 8 * 1024 * 1024) {
      setFileError("Please keep the file under 8 MB.");
      setFile(null);
      e.target.value = "";
      return;
    }
    setFile(f);
    setFileError("");
  };
  const clearFile = () => {
    setFile(null);
    setFileError("");
    const input = document.getElementById("rfq-file-input");
    if (input) input.value = "";
  };
  const submit = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }
    const errs = {};
    if (!form.name.trim()) {
      errs.name = "Required";
    }
    if (!form.company.trim()) {
      errs.company = "Required";
    }
    if (!form.email.trim()) {
      errs.email = "Required";
    } else if (!/.+@.+\..+/.test(form.email)) {
      errs.email = "Invalid email";
    }
    if (!form.phone.trim()) {
      errs.phone = "Required";
    }
    if (!form.country.trim()) {
      errs.country = "Required";
    }
    setErrors(errs);
    setSubmitError("");
    if (Object.keys(errs).length > 0) {
      return;
    }
    setIsSubmitting(true);
    try {
      let uploadedDocument = null;
      if (file) {
        const base64Data = await fileToBase64(file);
        uploadedDocument = {
          name: file.name,
          size: file.size,
          type: file.type,
          data: base64Data
        };
      }
      const payload = {
        submissionId: submissionIdRef.current,
        leadSource: "Website RFQ",
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        country: form.country.trim(),
        productInterest: form.product,
        industry: form.industry,
        requirementType: form.reqType,
        quantityRange: form.qty,
        message: form.message.trim(),
        uploadedDocument,
        receivedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby1UatbrZ2r8O-eeGhmKKyKbiTjHBOZ_vW-19MKHifZEd0cq4PGcXFw-0Jkoy71bWx2/exec";
      const response = await fetch(
        APPS_SCRIPT_URL,
        {
          method: "POST",
          body: JSON.stringify(payload)
        }
      );
      const result = await response.json();
      if (!result.success) {
        throw new Error(
          result.message || "Unable to submit your requirement."
        );
      }
      setLeadId(
        result.leadId || ""
      );
      setSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } catch (error) {
      setSubmitError(
        "Unable to submit your requirement. Please try again."
      );
      setIsSubmitting(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "CONTACT DYNALEKTRIC"), /* @__PURE__ */ React.createElement("h1", null, "Thank you. Your requirement has been received.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/card-magnetics-optimized.webp",
        alt: "Dynalektric precision magnetics and transformer manufacturing",
        width: "720",
        height: "540",
        decoding: "async",
        fetchpriority: "high"
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "section" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "success-state" }, /* @__PURE__ */ React.createElement("div", { className: "check" }, "\u2713"), /* @__PURE__ */ React.createElement("h2", { style: { marginBottom: 16 } }, "Your requirement has been received."), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { margin: "0 auto 24px" } }, "Thank you. Our team will review the details and respond with the next steps within one business day."), /* @__PURE__ */ React.createElement("div", { className: "success-summary" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "mono",
        style: {
          color: "var(--ink-muted)",
          marginBottom: 12
        }
      },
      "Submission reference"
    ), leadId && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "RFQ Reference"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, leadId))), form.product && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Product interest"), /* @__PURE__ */ React.createElement("span", null, (PRODUCTS.find((p) => p.id === form.product) || {}).name || form.product)), form.industry && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Industry"), /* @__PURE__ */ React.createElement("span", null, (INDUSTRY_OPTS.find((i) => i.id === form.industry) || {}).label || form.industry)), form.reqType && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Requirement type"), /* @__PURE__ */ React.createElement("span", null, form.reqType)), form.qty && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Quantity range"), /* @__PURE__ */ React.createElement("span", null, form.qty)), file && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Document"), /* @__PURE__ */ React.createElement("span", null, file.name))), /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          gap: 16,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 32
        }
      },
      /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "btn btn-secondary",
          onClick: () => {
            setSubmitted(false);
            setForm({
              name: "",
              company: "",
              email: "",
              phone: "",
              country: "",
              product: "",
              industry: "",
              reqType: "",
              qty: "",
              message: ""
            });
            setFile(null);
            setFileError("");
            setErrors({});
            setSubmitError("");
            setLeadId("");
            setIsSubmitting(false);
            submissionIdRef.current = crypto.randomUUID();
            const input = document.getElementById(
              "rfq-file-input"
            );
            if (input) {
              input.value = "";
            }
          }
        },
        "Submit another"
      ),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "btn btn-primary",
          onClick: () => navigate("home")
        },
        "Back to home",
        " ",
        /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")
      )
    )))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "CONTACT DYNALEKTRIC"), /* @__PURE__ */ React.createElement("h1", null, "Discuss your engineering requirement."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Share your product requirement, application details and a supporting document. Our team will review and respond with the next steps.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "./assets/inside-dynalektric.jpg",
      alt: "Dynalektric precision magnetics and transformer manufacturing",
      width: "720",
      height: "540",
      decoding: "async",
      fetchpriority: "high"
    }
  )))), /* @__PURE__ */ React.createElement("section", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "contact-grid" }, /* @__PURE__ */ React.createElement("form", { className: "contact-form reveal", onSubmit: submit, noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "who-you-are-block" }, /* @__PURE__ */ React.createElement("div", { className: "form-section-head" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--red)", fontWeight: 600 } }, "Contact"), /* @__PURE__ */ React.createElement("h2", null, "Tell us who you are.")), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Name *"), /* @__PURE__ */ React.createElement("input", { value: form.name, onChange: (e) => set("name", e.target.value), placeholder: "Full name" }), errors.name && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.name)), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Company *"), /* @__PURE__ */ React.createElement("input", { value: form.company, onChange: (e) => set("company", e.target.value), placeholder: "Organisation name" }), errors.company && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.company))), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Email *"), /* @__PURE__ */ React.createElement("input", { type: "email", value: form.email, onChange: (e) => set("email", e.target.value), placeholder: "you@company.com" }), errors.email && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.email)), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Phone *"), /* @__PURE__ */ React.createElement("input", { required: true, value: form.phone, onChange: (e) => set("phone", e.target.value), placeholder: "+ country code, number" }), errors.phone && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.phone))), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Country *"), /* @__PURE__ */ React.createElement("input", { value: form.country, onChange: (e) => set("country", e.target.value), placeholder: "e.g. Germany, UAE, USA, India" }), errors.country && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.country))), /* @__PURE__ */ React.createElement("div", { className: "form-section-head", style: { marginTop: 32 } }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600 } }, "Requirement"), /* @__PURE__ */ React.createElement("h2", null, "Tell us what you need.")), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Product interest"), /* @__PURE__ */ React.createElement("select", { value: form.product, onChange: (e) => set("product", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select a product group"), PRODUCTS.map((p) => /* @__PURE__ */ React.createElement("option", { key: p.id, value: p.id }, p.name)), /* @__PURE__ */ React.createElement("option", { value: "notsure" }, "Not sure"))), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Industry or application"), /* @__PURE__ */ React.createElement("select", { value: form.industry, onChange: (e) => set("industry", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select an industry"), INDUSTRY_OPTS.map((i) => /* @__PURE__ */ React.createElement("option", { key: i.id, value: i.id }, i.label))))), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Requirement type"), /* @__PURE__ */ React.createElement("select", { value: form.reqType, onChange: (e) => set("reqType", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select requirement type"), REQ_TYPES.map((r) => /* @__PURE__ */ React.createElement("option", { key: r, value: r }, r)))), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Quantity range"), /* @__PURE__ */ React.createElement("select", { value: form.qty, onChange: (e) => set("qty", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select quantity range"), QTY_RANGES.map((q) => /* @__PURE__ */ React.createElement("option", { key: q, value: q }, q))))), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Message or requirement details"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows: "5",
      value: form.message,
      onChange: (e) => set("message", e.target.value),
      placeholder: "Application, specification, ratings, environment, timeline."
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Supporting document"), /* @__PURE__ */ React.createElement("div", { className: "rfq-upload" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      id: "rfq-file-input",
      type: "file",
      accept: ACCEPTED_FILE_TYPES,
      onChange: onFileChange,
      hidden: true
    }
  ), !file ? /* @__PURE__ */ React.createElement("label", { htmlFor: "rfq-file-input", className: "rfq-upload-btn" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "+"), /* @__PURE__ */ React.createElement("span", null, "Choose a file")) : /* @__PURE__ */ React.createElement("div", { className: "rfq-upload-file" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, file.name), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginTop: 2 } }, Math.ceil(file.size / 1024), " KB")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "rfq-upload-remove", onClick: clearFile, "aria-label": "Remove file" }, "Remove"))), /* @__PURE__ */ React.createElement("p", { className: "rfq-upload-note" }, "Please upload one supporting document in PDF, Word or Excel format. Large drawing files are not required at this stage."), fileError && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, fileError)), submitError && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "form-err",
      style: {
        marginTop: 16,
        marginBottom: 16
      }
    },
    submitError
  ), /* @__PURE__ */ React.createElement("div", { className: "form-footer" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: 12, color: "var(--ink-muted)", maxWidth: "46ch" } }, "Your details are used only to respond to this enquiry. They are not shared with third parties. Final supply terms are subject to engineering review."), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    },
    isSubmitting ? "Submitting..." : /* @__PURE__ */ React.createElement(React.Fragment, null, "Submit RFQ", " ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))
  ))), /* @__PURE__ */ React.createElement("aside", { className: "contact-info reveal" }, /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Sales enquiries"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "sales01@dynalektric.com")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "General email"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "cs@dynalektric.com")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Phone"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "+91-903 554 2821"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "+91-903 554 2827")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Address"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "Dynalektric Pvt. Ltd.", /* @__PURE__ */ React.createElement("br", null), "Manufacturing facility", /* @__PURE__ */ React.createElement("br", null), "No-49/2 Vaderamanchanahalli Village, Kallubalu, Anekal Taluk, Jigani Hobli, Bangalore, India- 560105")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Working hours"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "Mon to Sat, 09:00 to 21:00 IST")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "For procurement teams"), /* @__PURE__ */ React.createElement("div", { className: "value", style: { fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.5 } }, "Request our supplier qualification pack, ISO certificates and sample test reports by email.")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Response window"), /* @__PURE__ */ React.createElement("div", { className: "value", style: { fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.5 } }, "One business day for complete specifications. Larger scopes may take longer, subject to engineering review.")), /* @__PURE__ */ React.createElement("div", { className: "contact-map" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.2830804704245!2d77.62583052848488!3d12.769318741084197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae69fde1bc74cd%3A0x9dbf3aaa6f14c1c7!2sDynalektric%20Equipment%20Private%20Limited!5e0!3m2!1sen!2sin!4v1781670618586!5m2!1sen!2sin",
      width: "100%",
      height: "400",
      style: {
        border: 0,
        borderRadius: "12px"
      },
      allowFullScreen: "",
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade",
      title: "Dynalektric Equipment Private Limited"
    }
  ))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
}
window.PageContact = PageContact;
