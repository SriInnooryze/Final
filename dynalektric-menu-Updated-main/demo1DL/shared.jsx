/* shared.jsx — shared data, components, hooks for Dynalektric prototype */

const PRODUCTS = [
  {
    id: 'magnetics',
    num: '01',
    name: 'Magnetics',
    tagline: 'LV Transformers, MV Transformers, K-Rated Transformers, Air-Core Reactors, Oil-Cooled Reactors and De-tuned Reactors',
    overview: 'We design and manufacture a comprehensive range of electrical products including LV Transformers, MV Transformers, K-Rated Transformers, Air-Core Reactors, Oil-Cooled Reactors and De-tuned Reactors. Our solutions are engineered for reliable performance, efficient power distribution and superior power quality across industrial, commercial and utility applications while ensuring safety, durability and optimized system performance.',
    subcategories: [
      { code: '01.1', name: 'LV Transformers',          detail: 'LV Transformers are designed to step down electrical voltage to safer and usable levels for industrial, commercial and residential applications. They ensure efficient power distribution with minimal losses and high operational safety.' },
      { code: '01.2', name: 'MV Transformers',          detail: 'MV Transformers are used for voltage transformation in medium-voltage distribution systems and industrial power networks. They provide excellent insulation performance, high efficiency and reliable operation for demanding electrical applications.' },
      { code: '01.3', name: 'K-Rated Transformers',     detail: 'K-Rated Transformers are specially designed to handle non-linear loads that generate harmonics. They minimize overheating and ensure reliable operation for sensitive electrical equipment.' },
      { code: '01.4', name: 'Air-Core Reactor',         detail: 'Air-Core Reactors are inductive components without an iron core. They are widely used for fault current limitation, harmonic filtering, voltage stabilization and capacitor bank protection.' },
      { code: '01.5', name: 'Oil-Cooled Reactors',      detail: 'Oil-Cooled Reactors are designed for high-power applications where efficient heat dissipation and continuous operation are essential. They provide dependable performance under heavy electrical loads.' },
      { code: '01.6', name: 'De-tuned Reactor',         detail: 'De-tuned Reactors are used in capacitor banks to prevent harmonic resonance, improve power quality and protect electrical equipment from excessive harmonic currents.' },
    ],
    placeholders: [
      { k: 'Rating range',    v: '50 VA to 5 MVA' },
      { k: 'Voltage class',   v: 'up to 36 kV' },
      { k: 'Insulation',      v: 'Class B, F or H' },
      { k: 'Cooling',         v: 'AN, AF, ONAN, OFAF' },
      { k: 'Enclosure',       v: 'Indoor or outdoor IP rated' },
      { k: 'Standards',       v: 'IEC 60076, IS 2026, IEC 60289' },
    ],
    applications: ['Industrial substations', 'Renewable inverter stations', 'Traction power supply', 'Harmonic mitigation', 'Reactive compensation', 'Power conditioning'],
    industries: ['railways', 'renewables', 'powergrid', 'heavy', 'datacenter'],
  },
  {
    id: 'control-panels',
    num: '02',
    name: 'Control Panel Assemblies',
    tagline: 'Locomotive Panels, Driver Desk Panels, Power Distribution Units (PDUs), and Power Panels',
    overview: 'Locomotive Panels, Driver Desk Panels, Power Distribution Units (PDUs), and Power Panels are critical electrical systems that ensure the safe, reliable, and efficient operation of railway locomotives. These systems provide centralized control, monitoring, protection, signaling, communication, and power distribution for traction equipment, auxiliary systems, braking systems, and onboard electronics. Designed to meet stringent railway standards, they deliver high reliability, operational safety, and seamless performance under demanding railway operating conditions.',
    subcategories: [
      { code: '02.1', name: 'Locomotive Panels',  detail: 'SB1, SB2, HB1, and HB2 locomotive control and auxiliary cubicles designed for monitoring, control, protection, power distribution, and interfacing of various locomotive systems in electric locomotives.' },
      { code: '02.2', name: 'Driver Desk Panels', detail: 'Integrated A, C and D Driver Desk Panels providing locomotive pilots with an ergonomic, centralized and highly reliable control and monitoring interface for safe train operation.' },
      { code: '02.3', name: 'PDUs',               detail: 'Power Distribution Units safely distribute electrical power from the main supply source to locomotive and industrial subsystems while providing power management, protection and monitoring.' },
      { code: '02.4', name: 'Power Panels',       detail: 'Power Panels engineered for the control, protection and distribution of electrical power to auxiliary equipment and critical loads in railway and industrial applications.' },
    ],
    placeholders: [
      { k: 'Standard',         v: 'IEC 61439-1 and 61439-2' },
      { k: 'Form',             v: 'Form 2, 3b or 4b' },
      { k: 'Current ratings',  v: 'up to 6300 A' },
      { k: 'Enclosure',        v: 'IP rated, custom layouts' },
      { k: 'Tests',            v: 'Routine and type tested' },
      { k: 'Documentation',    v: 'GA drawings, BoM, QAP, FAT' },
    ],
    applications: ['Locomotive control cabinets', 'Driver desk consoles', 'Industrial automation', 'MCC and PCC distribution', 'Process control'],
    industries: ['railways', 'heavy', 'powergrid', 'datacenter'],
  },
  {
    id: 'power-electronics',
    num: '03',
    name: 'Power Electronics Systems',
    tagline: 'MHE Battery Chargers, Float Cum Boost Chargers and Special Application Battery Chargers',
    overview: 'Dynalektric offers a comprehensive range of industrial battery charging solutions designed for reliable, efficient and safe charging across diverse applications. The portfolio includes MHE Battery Chargers, Float Cum Boost Chargers and Special Application Battery Chargers engineered to maximize battery life, improve charging efficiency and provide uninterrupted DC power. Designed with advanced charging algorithms, high-efficiency power conversion and robust protection features, these systems support multiple battery chemistries and demanding industrial operating conditions.',
    subcategories: [
      { code: '03.1', name: 'MHE Battery Chargers',                detail: 'Material Handling Equipment (MHE) Battery Chargers are industrial charging systems designed to safely and efficiently recharge battery banks used in warehouse and material handling equipment. They deliver high charging efficiency, reliable battery performance and long operational life for intensive industrial environments.' },
      { code: '03.2', name: 'Float Cum Boost Chargers',            detail: 'Float Cum Boost Chargers are industrial DC power systems designed to provide continuous DC output while simultaneously charging battery banks. They operate in both float and boost modes to ensure uninterrupted power availability and reliable battery maintenance.' },
      { code: '03.3', name: 'Special Application Battery Chargers', detail: 'Special Application Battery Chargers are purpose-built charging systems developed to satisfy unique charging requirements across specialized industrial and mobility applications. They provide reliable charging performance while supporting custom voltage, current and enclosure configurations.' },
    ],
    placeholders: [
      { k: 'Output voltage',   v: '24 V to 220 V DC' },
      { k: 'Output current',   v: 'up to 400 A' },
      { k: 'Chemistries',      v: 'Lead-acid, Li-ion, NiCd' },
      { k: 'Connectivity',     v: 'CAN, Modbus, RS485' },
      { k: 'Enclosure',        v: 'IP rated industrial' },
      { k: 'Tests',            v: 'Routine and type tested' },
    ],
    applications: ['Forklift fleets', 'AGV depots', 'Substation auxiliary supply', 'Marine and defence', 'Industrial DC backup'],
    industries: ['mhe', 'powergrid', 'railways', 'datacenter'],
  },
  {
    id: 'cross-segment',
    num: '04',
    name: 'Cross-Segment Solutions',
    tagline: 'Busbars, Cable Harnessing, UPS, Driver Display Unit, Current Sensors, DC-DC Converters, Fire Detection Unit and Minimum Voltage Relay',
    overview: 'Dynalektric offers a comprehensive range of power distribution, control, monitoring and protection solutions engineered for railway, industrial and renewable energy applications. The portfolio includes Busbars, Cable Harnesses, UPS Systems, Driver Display Units, Current Sensors, DC-DC Converters, Fire Detection Units and Minimum Voltage Relays, delivering reliable power distribution, real-time monitoring, equipment protection and operational safety while meeting demanding industry standards.',
    subcategories: [
      { code: '04.1', name: 'Busbars',                 detail: 'High-conductivity copper and aluminium busbars designed for efficient power collection and distribution in switchgear, substations and industrial power systems.' },
      { code: '04.2', name: 'Cable Harnessing',        detail: 'Custom cable harness assemblies engineered for reliable power and signal transmission with organized routing, identification and protection.' },
      { code: '04.3', name: 'UPS',                     detail: 'Industrial UPS systems providing uninterrupted, clean and regulated power during outages, voltage fluctuations and electrical disturbances.' },
      { code: '04.4', name: 'Driver Display Unit',     detail: 'Railway-grade graphical operator interface providing real-time monitoring, diagnostics, subsystem visualization and driver information for electric locomotives.' },
      { code: '04.5', name: 'Current Sensors',         detail: 'High-precision closed-loop current sensors for traction control, harmonic filtering and railway power electronics.' },
      { code: '04.6', name: 'DC-DC Converters',        detail: 'High-efficiency railway DC-DC converters providing regulated auxiliary power for control, communication and monitoring systems.' },
      { code: '04.7', name: 'Fire Detection Unit',     detail: 'Air-sampling smoke detection system providing early fire detection for electric locomotives and critical industrial installations.' },
      { code: '04.8', name: 'Minimum Voltage Relay',   detail: 'Protective monitoring relay for undervoltage detection and safe operation of railway traction and industrial electrical systems.' },
    ],
    placeholders: [
      { k: 'Customisation',    v: 'OEM-specific designs' },
      { k: 'Standards',        v: 'IEC, IS, IRS as applicable' },
      { k: 'Voltage range',    v: 'LV to MV configurations' },
      { k: 'Applications',     v: 'Rolling stock, industrial, utility' },
      { k: 'Tests',            v: 'Per customer QAP' },
      { k: 'Documentation',    v: 'Datasheets available on request' },
    ],
    applications: ['Rolling stock onboard systems', 'Industrial control', 'Critical load backup', 'Sensing and protection', 'OEM integration'],
    industries: ['railways', 'heavy', 'powergrid', 'mhe', 'renewables', 'datacenter'],
  },
];

const INDUSTRIES = [
  {
    id: 'railways',
    num: '01',
    name: 'Railway & Traction',
    short: 'Onboard and trackside power for rolling stock OEMs and rail operators.',
    body: 'Vibration-tolerant magnetics, traction-grade transformers, locomotive and driver-desk panels, onboard converters and protection relays. Designed and tested against IRS, RDSO and IEC requirements.',
    applications: ['Traction transformers and reactors', 'Locomotive control panels', 'Driver desk consoles', 'Auxiliary converter magnetics', 'Onboard protection and display'],
    buyer: 'Rolling stock OEMs, traction integrators, signalling contractors and rail operators.',
    qa: 'Vibration, impulse and temperature rise tests where applicable. IRS, RDSO and IEC conformance based on tender requirement.',
    products: ['magnetics', 'control-panels', 'power-electronics', 'cross-segment'],
  },
  {
    id: 'renewables',
    num: '02',
    name: 'Renewable Sectors',
    short: 'Inverter-grade magnetics and grid-tie components for solar, wind and storage plants.',
    body: 'Inverter chokes, harmonic filter reactors, grid-tie transformers and balance-of-plant components for utility-scale solar, wind and battery storage. Designed for 25-year project life and full type testing.',
    applications: ['Solar inverter magnetics', 'String-level chokes', 'Wind converter components', 'Grid-tie transformers', 'Substation panels and protection'],
    buyer: 'Renewable EPC contractors, inverter OEMs, IPP owners and utilities.',
    qa: 'Routine tests on every unit. Type tests for thermal endurance and partial discharge, where applicable. Documentation aligned with EPC handover requirements.',
    products: ['magnetics', 'cross-segment'],
  },
  {
    id: 'powergrid',
    num: '03',
    name: 'Power & Utilities',
    short: 'Distribution transformers, reactors and protective panels for utilities and EPC contractors.',
    body: 'Type-tested transformers, reactors, distribution panels, float and boost chargers and protection assemblies meeting IEC and IS requirements for distribution networks, industrial substations and captive power plants.',
    applications: ['MV distribution transformers', 'Harmonic filter reactors', 'Substation panels and PDUs', 'Float cum boost chargers', 'Auxiliary supply systems'],
    buyer: 'Utilities, T&D EPC contractors and industrial substation owners.',
    qa: 'IEC 60076 and IEC 61439 routine tests. Type tests through accredited labs, where applicable. Third-party inspection ready.',
    products: ['magnetics', 'control-panels', 'power-electronics', 'cross-segment'],
  },
  {
    id: 'heavy',
    num: '04',
    name: 'Heavy Industries',
    short: 'Power and control packages for steel, cement, mining and process industries.',
    body: 'Isolation transformers, MV switchgear interfaces, drive cabinets and PDUs for plant electrification. Engineered for heavy duty cycles and built to customer QAP frameworks.',
    applications: ['Drive and motor control cabinets', 'Isolation transformers', 'Plant PDUs', 'Servo power supplies', 'Process automation panels'],
    buyer: 'Process plant owners, machine builders and EPC contractors for heavy industry.',
    qa: 'Customer QAP and stage inspection. Routine tests on every assembly. Material traceability available on request.',
    products: ['magnetics', 'control-panels', 'cross-segment'],
  },
  {
    id: 'mhe',
    num: '05',
    name: 'Material Handling & Warehousing',
    short: 'Chargers and power electronics for forklift, AGV and warehouse fleets.',
    body: 'High-frequency chargers and battery management systems for 24 / 7 fleet operations. Built for opportunity charging, multi-chemistry compatibility and fleet management integration.',
    applications: ['Forklift fleet charging', 'AGV depots', 'Cold-chain warehousing', 'E-commerce fulfilment centres'],
    buyer: 'Material handling equipment OEMs, fleet operators and warehouse logistics providers.',
    qa: 'Functional, efficiency and burn-in tests, where applicable. Conformance to chemistry-specific charging profiles. Optional third-party inspection.',
    products: ['power-electronics', 'cross-segment'],
  },
  {
    id: 'datacenter',
    num: '06',
    name: 'Data Centers',
    short: 'Distribution, UPS interface and critical-load backup for data centre infrastructure.',
    body: 'K-rated transformers, IT-grade PDUs, UPS units and busbar systems for data centre power chains. Supplied with documentation aligned to customer reliability and audit requirements.',
    applications: ['K-rated isolation transformers', 'IT power distribution', 'UPS and battery backup', 'Busbar trunking', 'Auxiliary protection'],
    buyer: 'Data centre operators, colocation providers and critical-power EPC contractors.',
    qa: 'IEC 61439 routine tests on assemblies. K-factor verification on magnetics, where applicable. Documentation prepared for audit and acceptance.',
    products: ['magnetics', 'control-panels', 'power-electronics', 'cross-segment'],
  },
];

const CERTIFICATIONS = [
  { code: 'ISO 9001',  label: 'Quality management' },
  { code: 'ISO 14001', label: 'Environmental management' },
  { code: 'ISO 45001', label: 'Occupational health and safety' },
  { code: 'IEC',       label: 'International standards' },
  { code: 'CE',        label: 'European conformity' },
];

const STATS = [
  { value: '40+',   label: 'Years of in-house engineering', sub: 'Established 1980' },
  { value: '500+',  label: 'Custom designs delivered',      sub: 'Magnetics, panels and systems' },
  { value: '15+',   label: 'Export markets served',         sub: 'Europe, Middle East, Asia' },
  { value: '1 day', label: 'Typical RFQ response time',     sub: 'For complete specifications' },
];

const HERO_HEADLINES = [
  {
    pre: 'Manufacturing partner · India · ISO 9001',
    main: 'Precision-engineered power solutions for industrial and export markets.',
    sub: 'Transformers, control panels, power electronics and cross-segment components, designed and tested in-house to IEC and IS standards. Supplied to OEMs, EPC contractors, utilities and procurement teams across Europe, the Middle East and Asia.',
  },
  {
    pre: 'Engineered to specification',
    main: 'Transformers, panels and power electronics for industrial OEMs and EPC projects.',
    sub: 'Forty years of in-house design, winding, panel build and testing. IEC and IS compliant. Type-tested with full QAP, FAT support and export documentation.',
  },
  {
    pre: 'Supplier qualification ready',
    main: 'A long-term manufacturing partner for power and motion systems.',
    sub: 'Four product groups covering magnetics, control panels, power electronics and cross-segment components. One engineering team from feasibility to series production.',
  },
];

/* ============================================================
   Sub-category detail map (keyed by code)
   ============================================================ */
const SUBCAT_DETAIL = {
  /* Magnetics */
  '01.1': {
    description: 'LV Transformers are designed to step down electrical voltage to safer and usable levels for industrial, commercial and residential applications. They ensure efficient power distribution with minimal losses and high operational safety. These transformers are engineered for reliability, compact design and long service life under varying load conditions.',
    applications: ['Industrial sub-distribution systems', 'Control supply and automation circuits', 'Signal isolation and load separation', 'Auxiliary power supply for electrical panels', 'Power conditioning and system protection'],
    specs: [
      { k: 'Rating range',    v: '50 VA – 200 kVA' },
      { k: 'Voltage class',   v: '30 V – 1100 V' },
      { k: 'Insulation',      v: 'Class F & H' },
      { k: 'Cooling',         v: 'AN / AF' },
      { k: 'Enclosure',       v: 'IP20 / IP23' },
      { k: 'Tests',           v: 'As per IS 2026 & IEC 60076' },
      { k: 'Standards',       v: 'IS 2026, IS 11171 & IEC 60076' },
      { k: 'Custom options',  v: 'As per customer requirements' },
      { k: 'Datasheet',       v: 'Based on specification' },
    ],
    industries: ['powergrid', 'heavy', 'renewables', 'datacenter'],
  },
  '01.2': {
    description: 'MV Transformers are used for voltage transformation in medium-voltage distribution systems and industrial power networks. They provide excellent insulation performance, high efficiency and reliable operation for demanding electrical applications.',
    applications: ['Utility power distribution networks', 'Industrial substations', 'Renewable energy plants', 'Heavy industrial facilities', 'Infrastructure projects'],
    specs: [
      { k: 'Rating range',    v: '200 kVA – 1 MVA' },
      { k: 'Voltage class',   v: '3.3 kV, 6.6 kV, 11 kV' },
      { k: 'Insulation',      v: 'Class F & H' },
      { k: 'Cooling',         v: 'AN / AF' },
      { k: 'Enclosure',       v: 'IP20 / IP23' },
      { k: 'Tests',           v: 'As per IS 2026 & IEC 60076' },
      { k: 'Standards',       v: 'IS 2026, IS 11171 & IEC 60076' },
      { k: 'Custom options',  v: 'As per customer requirements' },
      { k: 'Datasheet',       v: 'Based on specification' },
    ],
    industries: ['powergrid', 'heavy', 'renewables'],
  },
  '01.3': {
    description: 'K-Rated Transformers are specially designed to handle non-linear loads that generate harmonics. They minimize overheating and ensure reliable operation for sensitive electrical equipment.',
    applications: ['Power distribution for non-linear loads', 'Data centers and IT infrastructure', 'UPS systems', 'Industrial automation', 'Harmonic mitigation'],
    specs: [
      { k: 'Rating range',    v: '25 kVA – 1 MVA' },
      { k: 'K-factor',        v: '4, 7, 9, 11, 14' },
      { k: 'Voltage class',   v: '11 kV' },
      { k: 'Insulation',      v: 'Class A / F / H' },
      { k: 'Cooling',         v: 'ONAN / AN / AF' },
      { k: 'Tests',           v: 'As per IS 2026 & IEC 60076' },
      { k: 'Standards',       v: 'IS 2026, IS 11171 & IEC 60076' },
      { k: 'Custom options',  v: 'As per customer requirements' },
      { k: 'Datasheet',       v: 'Based on specification' },
    ],
    industries: ['datacenter', 'heavy'],
  },
  '01.4': {
    description: 'Air-Core Reactors are inductive components without an iron core. They are widely used for fault current limitation, harmonic filtering, voltage stabilization and capacitor bank protection.',
    applications: ['Fault current limiting', 'Harmonic filtering', 'Voltage stabilization', 'Power factor correction', 'Capacitor bank protection', 'Renewable energy integration'],
    specs: [
      { k: 'Inductance',       v: 'As per customer requirement' },
      { k: 'Current rating',   v: 'Up to 1600 A' },
      { k: 'Insulation',       v: 'Class B / F / H' },
      { k: 'Enclosure',        v: 'Not Applicable' },
      { k: 'Tests',            v: 'As per IS 2026 & IEC 60076' },
      { k: 'Standards',        v: 'IS 2026, IS 11171 & IEC 60076' },
      { k: 'Custom options',   v: 'As per customer requirements' },
      { k: 'Datasheet',        v: 'Based on specification' },
    ],
    industries: ['powergrid', 'renewables', 'railways', 'heavy'],
  },
  '01.5': {
    description: 'Oil-Cooled Reactors are designed for high-power applications where efficient heat dissipation and continuous operation are essential. They provide dependable performance under heavy electrical loads.',
    applications: ['Current limiting', 'Harmonic filtering', 'Reactive power compensation', 'Capacitor bank protection', 'Voltage regulation', 'Industrial drive systems'],
    specs: [
      { k: 'Rating range',    v: 'As per customer requirements' },
      { k: 'Voltage class',   v: 'Up to 11 kV' },
      { k: 'Insulation',      v: 'Class A' },
      { k: 'Cooling',         v: 'ONAN' },
      { k: 'Enclosure',       v: 'IP65' },
      { k: 'Tests',           v: 'As per IS 2026 & IEC 60076' },
      { k: 'Standards',       v: 'IS 2026, IS 11171 & IEC 60076' },
      { k: 'Custom options',  v: 'As per customer requirements' },
      { k: 'Datasheet',       v: 'Based on specification' },
    ],
    industries: ['powergrid', 'renewables', 'heavy'],
  },
  '01.6': {
    description: 'De-tuned Reactors are used in capacitor banks to prevent harmonic resonance, improve power quality and protect electrical equipment from excessive harmonic currents.',
    applications: ['Harmonic mitigation', 'Resonance prevention', 'Power factor correction', 'Capacitor protection', 'Power quality improvement', 'Industrial distribution'],
    specs: [
      { k: 'Tuning frequency',  v: 'As per customer requirement' },
      { k: 'Rating range',      v: 'As per customer requirements' },
      { k: 'Voltage class',     v: 'Up to 1.1 kV' },
      { k: 'Insulation',        v: 'Class F & H' },
      { k: 'Cooling',           v: 'AN / AF' },
      { k: 'Enclosure',         v: 'IP20 / IP23' },
      { k: 'Tests',             v: 'As per IS 2026 & IEC 60076' },
      { k: 'Standards',         v: 'IS 2026, IS 11171 & IEC 60076' },
      { k: 'Datasheet',         v: 'Based on specification' },
    ],
    industries: ['powergrid', 'renewables', 'heavy'],
  },

  /* Control Panel Assemblies */
  '02.1': {
    description: 'SB1, SB2, HB1, and HB2 locomotive control and auxiliary cubicles designed for monitoring, control, protection, power distribution, and interfacing of various locomotive systems in electric locomotives.',
    applications: ['WAP-7 locomotives', 'WAG-9 locomotives', 'WAP-5 locomotives', 'Metro rail systems', 'Rolling stock applications'],
    specs: [
      { k: 'Voltage class',   v: 'Up to 110 VDC, 230 VAC, 415 VAC and application-specific voltages' },
      { k: 'Enclosure',       v: 'Railway-grade stainless-steel fabricated cubicle' },
      { k: 'Insulation',      v: 'EBXL insulated wiring with insulated busbars' },
      { k: 'Cooling',         v: 'Natural air cooled' },
      { k: 'Tests',           v: 'Routine, Functional, Wiring Verification, HV, IR, Dielectric and customer-specific tests' },
      { k: 'Standards',       v: 'RDSO, IEC, Indian Railways and customer specifications' },
      { k: 'Custom options',  v: 'Customized layouts, switchgear, control logic, connectors, wiring and interfaces' },
      { k: 'Datasheet',       v: 'Available on request' },
    ],
    industries: ['railways'],
  },
  '02.2': {
    description: 'Integrated A, C and D Driver Desk Panels providing locomotive pilots with an ergonomic, centralized and highly reliable control and monitoring interface for safe train operation.',
    applications: ['Driver desks', 'Assistant driver desks', 'Electric locomotives', 'Diesel-electric locomotives', 'Rolling stock'],
    specs: [
      { k: 'Construction',        v: 'Corrosion-resistant sheet metal with industrial anodization' },
      { k: 'Enclosure',           v: 'IP54 or higher dust-proof and vibration-proof construction' },
      { k: 'Mounting',            v: 'Flush mount or modular integration' },
      { k: 'Tests',               v: 'IEC 61373 vibration, HV dielectric, IR and IP validation' },
      { k: 'Standards',           v: 'IEC 60571, EN 50155, IEC 61373' },
      { k: 'Custom options',      v: 'Customer-specific configurations' },
      { k: 'Additional features', v: 'Laser-etched lettering, anti-condensation heaters, plug-and-play connectors' },
      { k: 'Datasheet',           v: 'Technical documentation available on request' },
    ],
    industries: ['railways'],
  },
  '02.3': {
    description: 'Power Distribution Units safely distribute electrical power from the main supply source to locomotive and industrial subsystems while providing power management, protection and monitoring.',
    applications: ['Railway locomotives', 'Metro rail', 'Rolling stock', 'Industrial automation', 'Power generation', 'Process industries'],
    specs: [
      { k: 'Current rating', v: 'Up to 4000 A' },
      { k: 'Form',           v: 'Form 1 to Form 4B' },
      { k: 'Enclosure',      v: 'CRCA / GI / Stainless Steel' },
      { k: 'Protection',     v: 'IP42 to IP65' },
      { k: 'Mounting',       v: 'Floor or wall mounted' },
      { k: 'Tests',          v: 'Visual, IR, HV, Functional, Continuity and Routine Tests' },
      { k: 'Standards',      v: 'IEC 61439, IEC 60077, EN 50155' },
      { k: 'Datasheet',      v: 'Available upon request' },
    ],
    industries: ['railways', 'powergrid', 'heavy'],
  },
  '02.4': {
    description: 'Power Panels engineered for the control, protection and distribution of electrical power to auxiliary equipment and critical loads in railway and industrial applications.',
    applications: ['Railway locomotives', 'Metro coaches', 'Industrial plants', 'Power distribution', 'OEM equipment', 'Infrastructure projects'],
    specs: [
      { k: 'Current rating', v: 'Up to 6300 A' },
      { k: 'Voltage class',  v: 'Up to 1000 VAC / 1500 VDC' },
      { k: 'Form',           v: 'Form 1 to Form 4B' },
      { k: 'Enclosure',      v: 'CRCA / GI / Stainless Steel' },
      { k: 'Protection',     v: 'IP42 to IP65' },
      { k: 'Mounting',       v: 'Floor mounted, wall mounted or free standing' },
      { k: 'Tests',          v: 'Visual, Mechanical, IR, HV, Functional and Routine Tests' },
      { k: 'Standards',      v: 'IEC 61439, IEC 60077, EN 50155, IS Standards' },
      { k: 'Datasheet',      v: 'Available upon request' },
    ],
    industries: ['railways', 'renewables', 'powergrid', 'heavy'],
  },

  /* Power Electronics Systems */
  '03.1': {
    description: 'Material Handling Equipment (MHE) Battery Chargers are industrial charging systems designed to safely and efficiently recharge battery banks used in warehouse and material handling equipment. They deliver high charging efficiency, reliable battery performance and long operational life for intensive industrial environments.',
    applications: ['Stackers', 'Reach Trucks', 'VNA Vehicles', 'Golf Cart Vehicles', 'Automated Guided Vehicles (AGVs)'],
    specs: [
      { k: 'Output voltage (single phase)', v: '24V–72V DC (10A–70A)' },
      { k: 'Output voltage (three phase)',  v: '24V–80V DC (50A–200A)' },
      { k: 'Output current (single phase)', v: '10A–70A' },
      { k: 'Output current (three phase)',  v: '50A–200A' },
      { k: 'Battery chemistry',            v: 'Flooded, VRLA, Gel, AGM and Lithium Batteries' },
      { k: 'Connectivity',                 v: 'IoT Connectivity (Wi-Fi & Bluetooth) — Optional' },
      { k: 'Tests',                        v: 'Standard production and quality tests' },
      { k: 'Standards',                    v: 'IEC 60335-2-29, IS 3895, IS 6619' },
      { k: 'Custom options',               v: 'Customized ratings available on request' },
      { k: 'Datasheet',                    v: 'Available on request' },
    ],
    industries: ['mhe'],
  },
  '03.2': {
    description: 'Float Cum Boost Chargers are industrial DC power systems designed to provide continuous DC output while simultaneously charging battery banks. They operate in both float and boost modes to ensure uninterrupted power availability and reliable battery maintenance.',
    applications: ['Electrical Substations', 'Telecommunication Systems', 'Industrial Automation', 'Railway Signalling', 'Power Plants'],
    specs: [
      { k: 'Output voltage',   v: '24V, 48V, 110V, 220V' },
      { k: 'Output current',   v: '15A–250A' },
      { k: 'Operating modes',  v: 'Float & Boost' },
      { k: 'Connectivity',     v: 'Application specific' },
      { k: 'Tests',            v: 'Standard production and quality tests' },
      { k: 'Standards',        v: 'IEC 60146-1-1, IS 16539-1-1' },
      { k: 'Custom options',   v: 'Available' },
      { k: 'Datasheet',        v: 'Available' },
    ],
    industries: ['powergrid', 'railways', 'heavy'],
  },
  '03.3': {
    description: 'Special Application Battery Chargers are purpose-built charging systems developed to satisfy unique charging requirements across specialized industrial and mobility applications. They provide reliable charging performance while supporting custom voltage, current and enclosure configurations.',
    applications: ['Automated Guided Vehicles (AGVs)', 'Man Lifts', 'Aerial Work Platforms', 'Golf Carts', 'Electric Utility Vehicles', 'Aviation Ground Support Equipment'],
    specs: [
      { k: 'Output voltage', v: '24V, 36V, 48V, 72V, 96V' },
      { k: 'Output current', v: 'Up to 80A' },
      { k: 'Topology',       v: 'Half Controlled & Fully Controlled Rectifier' },
      { k: 'Enclosure',      v: 'IP20 to IP45' },
      { k: 'Tests',          v: 'Standard production and quality tests' },
      { k: 'Standards',      v: 'IEC 60146-1-1, IS 16539-1-1' },
      { k: 'Custom options', v: 'Available' },
      { k: 'Datasheet',      v: 'Available on request' },
    ],
    industries: ['mhe', 'heavy'],
  },

  /* Cross-Segment Solutions */
  '04.1': {
    description: 'High-conductivity copper and aluminium busbars designed for efficient power collection and distribution in switchgear, substations and industrial power systems.',
    applications: ['Power Distribution Panels', 'PCC Panels', 'MCC Panels', 'Switchgear Assemblies', 'Control Panels', 'UPS Systems', 'Battery Chargers', 'Renewable Energy Systems', 'Railway Applications', 'Industrial Power Distribution', 'OEM Equipment'],
    specs: [
      { k: 'Current rating',  v: 'Up to 6300 A' },
      { k: 'Voltage class',   v: 'Up to 1.1 kV AC/DC' },
      { k: 'Construction',    v: 'Flat, Laminated, Flexible, Copper, Aluminium and Custom Profiles' },
      { k: 'Custom options',  v: 'Tin/Nickel/Silver Plating, PVC Sleeving, Heat Shrink, Flexible Connectors, Custom Dimensions' },
      { k: 'Tests',           v: 'Dimensional, Conductivity, Plating, Continuity, Mechanical Strength' },
      { k: 'Standards',       v: 'IS 3052, IEC 61439 and applicable IS standards' },
      { k: 'Datasheet',       v: 'Available on request' },
    ],
    industries: ['railways', 'renewables', 'heavy', 'datacenter', 'powergrid'],
  },
  '04.2': {
    description: 'Custom cable harness assemblies engineered for reliable power and signal transmission with organized routing, identification and protection.',
    applications: ['Control Panels', 'Railway Systems', 'Renewable Energy', 'Industrial Automation', 'Battery Chargers', 'Electrical Equipment', 'OEM Assemblies', 'Automotive', 'Material Handling Equipment', 'Power Distribution'],
    specs: [
      { k: 'Cable types',     v: 'PVC, XLPE, Flexible, Control, Signal, Instrumentation and Power Cables' },
      { k: 'Construction',    v: 'Connectors, Ferrules, Sleeves, Heat Shrink, Cable Ties and Protective Coverings' },
      { k: 'Identification',  v: 'Ferrules, Labels, Heat Shrink, Wire Numbering and Color Coding' },
      { k: 'Tests',           v: 'Continuity, Crimp Pull, Polarity, Functional and Quality Inspection' },
      { k: 'Standards',       v: 'IEC, IS, OEM and ISO 9001 Manufacturing Practices' },
      { k: 'Custom options',  v: 'Custom Lengths, Connectors, Shielding and Routing' },
      { k: 'Datasheet',       v: 'Available on request' },
    ],
    industries: ['railways', 'renewables', 'heavy', 'mhe'],
  },
  '04.3': {
    description: 'Industrial UPS systems providing uninterrupted, clean and regulated power during outages, voltage fluctuations and electrical disturbances.',
    applications: ['IT & Data Centers', 'Hospitals', 'Educational Institutions', 'Telecom', 'Banking', 'Industrial Automation', 'Manufacturing', 'Laboratories', 'Security Systems'],
    specs: [
      { k: 'Rating range',   v: '2 kVA – 250 kVA' },
      { k: 'Topology',       v: 'Online Double Conversion, Industrial UPS, Static UPS, Offline UPS' },
      { k: 'Battery type',   v: 'SMF, Lead Acid, Lithium-Ion' },
      { k: 'Connectivity',   v: 'USB, SNMP, RS-232, RS-485, Ethernet, CAN, Wi-Fi' },
      { k: 'Tests',          v: 'Voltage, Frequency, Efficiency, Load, Battery and Safety Tests' },
      { k: 'Standards',      v: 'Relevant IS & IEC Standards' },
      { k: 'Custom options', v: 'Battery Banks, Custom Voltage, Industrial Enclosures' },
      { k: 'Datasheet',      v: 'Available on request' },
    ],
    industries: ['datacenter', 'heavy', 'railways'],
  },
  '04.4': {
    description: 'Railway-grade graphical operator interface providing real-time monitoring, diagnostics, subsystem visualization and driver information for electric locomotives.',
    applications: ['Electric Locomotives', 'Traction Monitoring', 'Fault Diagnostics', 'Energy Monitoring', 'Braking Systems', 'Route Mapping'],
    specs: [
      { k: 'Display',        v: '10.4-inch Industrial LCD' },
      { k: 'Interfaces',     v: 'MVB, USB, Ethernet, 110 VDC' },
      { k: 'Tests',          v: 'Functional, Communication, Environmental and Railway Validation' },
      { k: 'Standards',      v: 'Indian Railways Requirements' },
      { k: 'Custom options', v: 'Driver Authentication, Route Maps, Custom GUI' },
      { k: 'Datasheet',      v: 'Available on request' },
    ],
    industries: ['railways'],
  },
  '04.5': {
    description: 'High-precision closed-loop current sensors for traction control, harmonic filtering and railway power electronics.',
    applications: ['Primary Current Measurement', 'Traction Control', 'Auxiliary Converter Monitoring', 'Railway Power Electronics'],
    specs: [
      { k: 'Nominal current',  v: '1000 A RMS' },
      { k: 'Measuring range',  v: '±1500 A' },
      { k: 'Accuracy',         v: '±0.3%' },
      { k: 'Output',           v: '200 mA Analog' },
      { k: 'Bandwidth',        v: '100 kHz' },
      { k: 'Isolation',        v: '6 kV' },
      { k: 'Standards',        v: 'Relevant IEC / IS Standards' },
      { k: 'Datasheet',        v: 'Available on request' },
    ],
    industries: ['railways', 'renewables', 'heavy'],
  },
  '04.6': {
    description: 'High-efficiency railway DC-DC converters providing regulated auxiliary power for control, communication and monitoring systems.',
    applications: ['Control Systems', 'Communication Equipment', 'Instrumentation', 'Protection Relays', 'Auxiliary Electronics'],
    specs: [
      { k: 'Input voltage',  v: '31–144 VDC / 58–144 VDC' },
      { k: 'Output voltage', v: '24 VDC / 48 VDC' },
      { k: 'Power',          v: '96 W / 192 W' },
      { k: 'Efficiency',     v: 'Up to 96%' },
      { k: 'Isolation',      v: 'Galvanically Isolated' },
      { k: 'Standards',      v: 'IEC 60146, IEC 60068, IEC 60255' },
      { k: 'Datasheet',      v: 'Available on request' },
    ],
    industries: ['railways', 'heavy'],
  },
  '04.7': {
    description: 'Air-sampling smoke detection system providing early fire detection for electric locomotives and critical industrial installations.',
    applications: ['Electric Locomotives', 'Rolling Stock', 'Electrical Cabinets', 'Industrial Fire Monitoring', 'Critical Infrastructure'],
    specs: [
      { k: 'Detection',     v: 'Air Sampling Smoke Detection' },
      { k: 'Power supply',  v: '24 VDC Nominal' },
      { k: 'Outputs',       v: 'Alarm Relay, Fault Relay, LED Indicators' },
      { k: 'Protection',    v: 'IP40 / IP43 / IP54' },
      { k: 'Standards',     v: 'EN 54, EN 50155, IEC 60529' },
      { k: 'Datasheet',     v: 'Available on request' },
    ],
    industries: ['railways', 'heavy', 'datacenter'],
  },
  '04.8': {
    description: 'Protective monitoring relay for undervoltage detection and safe operation of railway traction and industrial electrical systems.',
    applications: ['Electric Locomotives', 'Traction Systems', 'Railway Control Circuits', 'Power Monitoring', 'Protection Systems'],
    specs: [
      { k: 'Input voltage',    v: '240 VAC ±10%' },
      { k: 'Reference supply', v: '48 VDC' },
      { k: 'Delay',            v: '0.2–20 seconds' },
      { k: 'Outputs',          v: '2 Changeover Relay Contacts' },
      { k: 'Standards',        v: 'IEC 255 Series, IEC 60571' },
      { k: 'Datasheet',        v: 'Available on request' },
    ],
    industries: ['railways', 'powergrid', 'heavy'],
  },
};

const QUALIFICATION = [
  { num: '01', title: 'Documentation pack',    body: 'QAP, GA drawings, BoM, datasheets, routine and type test reports, FAT protocol and material traceability on request.' },
  { num: '02', title: 'Standards compliance',  body: 'Designs and tests aligned with IEC 60076, IEC 61439, IEC 60068, IS 2026 and customer-specific specifications.' },
  { num: '03', title: 'In-house testing',      body: 'Routine testing on every unit. Type testing on-site for HV, partial discharge, temperature rise and impulse. Accredited external labs for type approvals.' },
  { num: '04', title: 'Export readiness',      body: 'Seaworthy packing, country of origin documentation, INCOTERMS support and CE marking pathway for European projects.' },
];

/* ============================================================
   Anonymous case study content (no project or client names)
   ============================================================ */
const CASE_STUDIES = [
  {
    tag: 'Railway equipment application',
    title: 'Auxiliary converter magnetics for metro rolling stock.',
    productGroup: 'Magnetics',
    buyerNeed: 'Vibration-tolerant magnetics on a fixed delivery schedule, qualified for onboard duty cycles.',
    quality: 'Type tests for vibration, impulse and temperature rise. Documentation aligned with rolling stock acceptance requirements.',
  },
  {
    tag: 'Renewable energy application',
    title: 'Harmonic filter reactors for a utility-scale solar plant.',
    productGroup: 'Magnetics',
    buyerNeed: 'Air-core reactor banks at the inverter station, validated for 25-year project life.',
    quality: 'Routine and type tests against IEC 60289 inputs. Documentation aligned with EPC handover. Subject to engineering review for site conditions.',
  },
  {
    tag: 'Power utility application',
    title: 'MV distribution transformers and substation panels.',
    productGroup: 'Magnetics + Control Panel Assemblies',
    buyerNeed: 'Type-tested transformers and IEC 61439 distribution panels for an industrial substation upgrade.',
    quality: 'Routine tests on every unit. Type tests through accredited external lab. Third-party witness inspection at hold points.',
  },
  {
    tag: 'Industrial automation application',
    title: 'Drive cabinets and isolation transformers for a heavy machine builder.',
    productGroup: 'Control Panel Assemblies + Magnetics',
    buyerNeed: 'Wired and tested cabinets with motor isolation, integrated with the customer drive platform.',
    quality: 'Stage inspection per customer QAP. FAT protocol agreed in advance. Material traceability supplied with dispatch.',
  },
  {
    tag: 'Material handling equipment application',
    title: 'High-frequency chargers for a multi-site forklift fleet.',
    productGroup: 'Power Electronics Systems',
    buyerNeed: 'Opportunity charging across two battery chemistries with fleet management integration.',
    quality: 'Functional, efficiency and burn-in tests. Documentation aligned with destination market requirements, where applicable.',
  },
  {
    tag: 'Data center power support application',
    title: 'K-rated isolation transformers and PDUs for an IT power chain.',
    productGroup: 'Magnetics + Control Panel Assemblies',
    buyerNeed: 'Harmonic-tolerant isolation transformers and audit-ready PDUs for a critical-load deployment.',
    quality: 'K-factor verification on magnetics, where applicable. IEC 61439 routine tests on assemblies. Documentation prepared for audit and acceptance.',
  },
];

/* ============================================================
   Reusable CaseStudyGrid component
   ============================================================ */
function CaseStudyGrid({ items = CASE_STUDIES, limit }) {
  const data = limit ? items.slice(0, limit) : items;
  return (
    <div className="case-grid">
      {data.map((c, i) => (
        <article className="case-card" key={i}>
          <div className="case-tag">{c.tag}</div>
          <h3>{c.title}</h3>
          <div className="case-section">
            <div className="case-label">Product group</div>
            <div className="case-value">{c.productGroup}</div>
          </div>
          <div className="case-section">
            <div className="case-label">Buyer need</div>
            <div className="case-value">{c.buyerNeed}</div>
          </div>
          <div className="case-section">
            <div className="case-label">Quality or documentation consideration</div>
            <div className="case-value">{c.quality}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ============================================================
   Reveal hook
   ============================================================ */
function useReveal() {
  React.useLayoutEffect(() => {
    let cancelled = false;
    let io = null;

    const setup = () => {
      if (cancelled) return;
      const els = document.querySelectorAll('.reveal:not(.is-visible)');
      if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-visible'));
        return;
      }
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          io.observe(el);
        }
      });
    };

    const raf1 = requestAnimationFrame(() => requestAnimationFrame(setup));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (io) io.disconnect();
    };
  }, []);
}

/* ============================================================
   Animated counter
   ============================================================ */
function Counter({ to, suffix = '', duration = 1400 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStart(true); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <span ref={ref} className="mono-num">{val}{suffix}</span>;
}

/* ============================================================
   Engineering abstract visual (SVG)
   ============================================================ */
function EngineeringVisual({ variant = 'grid' }) {
  return (
    <svg viewBox="0 0 600 660" className="eng-svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="dynaGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14,17,22,0.06)" strokeWidth="1" />
        </pattern>
        <pattern id="dynaGridMajor" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(14,17,22,0.12)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="660" fill="var(--bg-card)" />
      <rect width="600" height="660" fill="url(#dynaGrid)" />
      <rect width="600" height="660" fill="url(#dynaGridMajor)" />
      <g transform="translate(300 330)" fill="none" stroke="var(--ink)" strokeWidth="1">
        <circle r="40" />
        <circle r="80" />
        <circle r="120" strokeOpacity="0.7" />
        <circle r="160" strokeOpacity="0.5" />
        <circle r="200" strokeOpacity="0.3" />
        <circle r="240" strokeOpacity="0.15" />
      </g>
      <g stroke="var(--accent)" strokeWidth="1.5" fill="none">
        <path d="M 60 330 L 180 330" />
        <path d="M 420 330 L 540 330" />
        <circle cx="180" cy="330" r="3" fill="var(--accent)" />
        <circle cx="420" cy="330" r="3" fill="var(--accent)" />
      </g>
      <path d="M 60 540 Q 105 500 150 540 T 240 540 T 330 540 T 420 540 T 510 540 T 540 540"
            fill="none" stroke="var(--accent-2)" strokeWidth="1.5" />
      <g stroke="var(--ink)" strokeWidth="1">
        <line x1="60" y1="60" x2="60" y2="80" />
        <line x1="60" y1="60" x2="80" y2="60" />
        <line x1="540" y1="60" x2="540" y2="80" />
        <line x1="540" y1="60" x2="520" y2="60" />
        <line x1="60" y1="600" x2="60" y2="580" />
        <line x1="60" y1="600" x2="80" y2="600" />
        <line x1="540" y1="600" x2="540" y2="580" />
        <line x1="540" y1="600" x2="520" y2="600" />
      </g>
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-muted)" letterSpacing="1">
        <text x="60" y="50">FIG. 01 / CORE TOPOLOGY</text>
        <text x="60" y="640">f = 50 / 60 Hz</text>
        <text x="540" y="640" textAnchor="end">DYN-01.A</text>
      </g>
    </svg>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img className="footer-logo" src={(window.__resources && window.__resources.dynaLogoReversed) || "assets/dynalektric-logo-reversed2.png"} alt="Dynalektric logo" width="320" height="200" loading="lazy" />
            <p className="footer-tag">Magnetics, control panels, power electronics and cross-segment components. Engineered in India for industrial, power, railway, renewable and material handling applications worldwide.</p>
          </div>
          <div className="footer-col">
            <h4>Sitemap</h4>
            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="./Dynalektric.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./products-solutions.html">Products &amp; Solutions</a></li>
                <li><a href="./innovation-rd.html">Innovation Portfolio</a></li>
                <li><a href="./industries-applications.html">Industries &amp; Applications</a></li>
                <li><a href="./export.html">Export</a></li>
                <li><a href="./contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-col">
            <h4>Product groups</h4>
            <ul>
              {PRODUCTS.map(p => (
                <li key={p.id}><a href={`./products-solutions.html?focus=${p.id}`}>{p.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Enquiries</h4>
            <ul>
              <li><a>+91 (placeholder)</a></li>
              <li><a>sales01@dynalektric.com</a></li>
              <li><a>enquiry@dynalektric.com</a></li>
              <li><a href="./contact.html">Submit RFQ →</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Dynalektric · Power · Motion · Safety</span>
          <span>Engineered in India · Exported worldwide</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Final CTA strip
   ============================================================ */
function FinalCTA({
  navigate,
  eyebrow = 'RFQ and enquiry',
  heading = 'Send a specification. Get an engineering response in one business day.',
  body = 'Share your application, ratings, environment and timeline. Our engineering team replies with feasibility, indicative pricing and the relevant datasheets.',
  primaryLabel = 'Submit RFQ',
  primaryTo = 'contact',
  secondaryLabel = 'Browse products',
  secondaryTo = 'products',
  tertiaryLabel = null,
  tertiaryTo = 'contact',
}) {
  return (
    <section className="section reveal" style={{ paddingTop: 'calc(var(--section-y) * 1.2)', paddingBottom: 'calc(var(--section-y) * 1.2)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <div className="mono" style={{ marginBottom: 24, color: 'var(--accent)' }}>{eyebrow}</div>
        <h2 style={{ marginBottom: 32 }}>{heading}</h2>
        <p className="lead" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          {body}
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate(primaryTo)}>
            {primaryLabel} <span className="arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => navigate(secondaryTo)}>
            {secondaryLabel}
          </button>
        </div>
        {tertiaryLabel && (
          <div style={{ marginTop: 24 }}>
            <button
              className="mono"
              onClick={() => navigate(tertiaryTo)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-muted)', textDecoration: 'underline', textUnderlineOffset: 4, padding: 4, fontSize: 13 }}
            >
              {tertiaryLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* expose to window */
Object.assign(window, {
  PRODUCTS, INDUSTRIES, CERTIFICATIONS, STATS, HERO_HEADLINES, QUALIFICATION,
  CASE_STUDIES, SUBCAT_DETAIL,
  useReveal, Counter, EngineeringVisual, Footer, FinalCTA, CaseStudyGrid,
});
