/* ============ DATA ============ */
const T = {
  en: {
    loading: "Loading data",
    "nav.exp": "Experience", "nav.value": "Value", "nav.skills": "Skills", "nav.projects": "Projects", "nav.contact": "Contact",
    hello: "Hello, I am ", 
    "hero.sub": "Data Analyst · Sales Operations · Finance",
    "hero.pitch": "I turn data into decisions that grow revenue.",
    "hero.cta": "See my journey",
    "exp.title": "Experience", "exp.hint": "Click a role to see responsibilities.",
    more: "Responsibilities →",
    "edu.title": "Education",
    "edu.degree": "Master's Degree — Commerce, Finance & Business Analytics",
    "value.title": "What I bring",
    "skills.title": "Technical skills",
    "skills.hint": "The periodic table of my data stack. Click an element.",
    "soft.title": "Soft skills",
    "projects.title": "Projects",
    "contact.title": "Let's work together.",
    code: "Code", live: "Live site"
  },
  fr: {
    loading: "Chargement des données",
    "nav.exp": "Parcours", "nav.value": "Apport", "nav.skills": "Compétences", "nav.projects": "Projets", "nav.contact": "Contact",
    hello: " Salut ! moi c'est  ",
    "hero.sub": "Data Analyst · Sales Operations · Finance",
    "hero.pitch": "Je transforme les donnée en décisions qui font croître le chiffre d'affaires.",
    "hero.cta": "Voir mon parcours",
    "exp.title": "Expérience", "exp.hint": "Cliquez sur un poste pour voir les responsabilités.",
    more: "Responsabilités →",
    "edu.title": "Formation",
    "edu.degree": "Master — Commerce, Finance & Business Analytics",
    "value.title": "Ce que je peux apporter à votre entreprise",
    "skills.title": "Compétences techniques",
    "skills.hint": "Un apercu de mes compétences data. Cliquez sur un élément pour plus de détails.",
    "soft.title": "Soft skills",
    "projects.title": "Projets",
    "contact.title": "Travaillons ensemble.",
    code: "Code", live: "Site live"
  }
};

const JOBS = [
  {
    period: "2025 — 2026", company: "Gallia Records Store", city: { en: "Marseille, France", fr: "Marseille, France" },
    role: { en: "Sales Operations Manager", fr: "Responsable des Opérations Commerciales" },
    tasks: {
      en: ["Steered daily sales operations, stock planning and supplier ordering.",
           "Built sales & margin dashboards to track performance by category.",
           "Optimised pricing and inventory rotation to improve profitability.",
           "Streamlined order-to-cash processes and e-commerce operations.",
           "Reported KPIs to management and aligned teams on targets."],
      fr: ["Pilotage des opérations commerciales, du stock et des commandes fournisseurs.",
           "Création de tableaux de bord ventes & marges par catégorie.",
           "Optimisation des prix et de la rotation des stocks pour la rentabilité.",
           "Fluidification du processus order-to-cash et des opérations e-commerce.",
           "Reporting des KPI à la direction et alignement des équipes sur les objectifs."]
    }
  },
  {
    period: "2022 — 2025", company: "Accenture", city: { en: "Kraków, Poland", fr: "Cracovie, Pologne" },
    role: { en: "Data Analyst", fr: "Data Analyst" },
    tasks: {
      en: ["Collected, cleaned and modelled financial and operational data with SQL & Python.",
           "Designed Power BI dashboards used by business stakeholders for decision-making.",
           "Automated recurring reports, cutting manual workload significantly.",
           "Performed variance and trend analysis to support financial performance.",
           "Translated business needs into data requirements with international clients."],
      fr: ["Collecte, nettoyage et modélisation de données financières et opérationnelles (SQL & Python).",
           "Conception de dashboards Power BI pour la prise de décision des métiers.",
           "Automatisation de reportings récurrents, réduisant fortement le travail manuel.",
           "Analyses d'écarts et de tendances au service de la performance financière.",
           "Traduction des besoins métiers en exigences data avec des clients internationaux."]
    }
  },
  {
    period: "2021", company: "Cognizant", city: { en: "Kraków, Poland", fr: "Cracovie, Pologne" },
    role: { en: "Payment System Integration Analyst — Transaction Processing", fr: "Analyste Intégration Systèmes de Paiement — Traitement des Transactions" },
    tasks: {
      en: ["Monitored and analysed card & payment transaction flows.",
           "Investigated failed or rejected transactions and drove root-cause fixes.",
           "Supported integration testing of payment systems with technical teams.",
           "Documented processes and ensured compliance with SLA requirements."],
      fr: ["Suivi et analyse des flux de transactions cartes et paiements.",
           "Investigation des transactions rejetées et résolution des causes racines.",
           "Support aux tests d'intégration des systèmes de paiement avec les équipes techniques.",
           "Documentation des processus et respect des SLA."]
    }
  },
  {
    period: "2019 — 2020", company: "Teleperformance", city: { en: "Lisbon, Portugal", fr: "Lisbonne, Portugal" },
    role: { en: "Business Account & Technical Support", fr: "Support Technique & Comptes Professionnels" },
    tasks: {
      en: ["Managed business client accounts and resolved technical issues.",
           "Delivered multilingual support with high customer-satisfaction scores.",
           "Escalated complex cases and shared feedback to improve products.",
           "Built strong communication skills with demanding stakeholders."],
      fr: ["Gestion de comptes clients professionnels et résolution d'incidents techniques.",
           "Support multilingue avec un haut niveau de satisfaction client.",
           "Escalade des cas complexes et remontée de feedback produit.",
           "Développement d'une communication solide avec des interlocuteurs exigeants."]
    }
  }
];

const VALUES = [
  { en: ["Financial performance", "Margin, cost and revenue analysis that turns numbers into profit levers."],
    fr: ["Performance financière", "Analyse des marges, coûts et revenus pour en faire des leviers de profit."] },
  { en: ["Data-driven decisions", "Clear dashboards and KPIs leaders actually use."],
    fr: ["Décisions pilotées par la donnée", "Des dashboards et KPI clairs, réellement utilisés par les décideurs."] },
  { en: ["Process automation", "Fewer manual tasks, faster and more reliable reporting."],
    fr: ["Automatisation des processus", "Moins de tâches manuelles, un reporting plus rapide et fiable."] },
  { en: ["Stakeholder communication", "Bridging business and tech, in English, French and beyond."],
    fr: ["Communication avec les parties prenantes", "Le lien entre métier et tech, en français, anglais et au-delà."] }
];

const CATS = {
  lang: { color: "#e63322", en: "Languages", fr: "Langages" },
  viz:  { color: "#1d4ed8", en: "Vizualisation", fr: "Visualisation" },
  data: { color: "#f5b700", en: "Data engineering", fr: "Data engineering" },
  biz:  { color: "#0f9d58", en: "Business & Methods", fr: "Business & Méthodes" }
};

const SKILLS = [
  { s: "Sq", n: "SQL", c: "lang", en: "Querying, joining and aggregating large datasets; window functions, CTEs and query optimisation.", fr: "Requêtes, jointures et agrégations sur de gros volumes ; fonctions de fenêtrage, CTE et optimisation." },
  { s: "Py", n: "Python", c: "lang", en: "Data cleaning, analysis and automation scripts for recurring reporting.", fr: "Nettoyage, analyse de données et scripts d'automatisation du reporting." },
  { s: "Pd", n: "Pandas", c: "lang", en: "Fast data wrangling: merges, pivots, time-series and feature preparation.", fr: "Manipulation rapide de données : fusions, pivots, séries temporelles." },
  { s: "Dx", n: "DAX", c: "lang", en: "Advanced measures and time-intelligence calculations in Power BI.", fr: "Mesures avancées et calculs de time-intelligence dans Power BI." },
  { s: "Pb", n: "Power BI", c: "viz", en: "End-to-end dashboards: data model, measures, interactive reports and publishing.", fr: "Dashboards de bout en bout : modèle de données, mesures, rapports interactifs, publication." },
  { s: "Tb", n: "Tableau", c: "viz", en: "Visual storytelling and interactive dashboards for business audiences.", fr: "Data storytelling et tableaux de bord interactifs pour les métiers." },
  { s: "Ex", n: "Excel", c: "viz", en: "Power Query, pivot tables, advanced formulas and financial models.", fr: "Power Query, tableaux croisés, formules avancées et modèles financiers." },
  { s: "Et", n: "ETL", c: "data", en: "Extract, transform and load pipelines that make data reliable and ready to use.", fr: "Pipelines d'extraction, transformation et chargement pour des données fiables." },
  { s: "Dw", n: "Data Modeling", c: "data", en: "Star schemas, fact & dimension tables for scalable analytics.", fr: "Schémas en étoile, tables de faits et dimensions pour une analyse scalable." },
  { s: "Az", n: "Azure", c: "data", en: "Cloud data services for storage, pipelines and reporting.", fr: "Services data cloud pour le stockage, les pipelines et le reporting." },
  { s: "St", n: "Statistics", c: "biz", en: "Descriptive stats, hypothesis testing, regression and forecasting.", fr: "Statistiques descriptives, tests d'hypothèses, régression et prévision." },
  { s: "Fa", n: "Financial Analysis", c: "biz", en: "P&L, margin, variance and budget analysis to drive performance.", fr: "Analyse P&L, marges, écarts et budgets pour piloter la performance." }
];

const SOFT = [
  { en: "Communication", fr: "Communication", v: .95 },
  { en: "Stakeholders", fr: "Parties prenantes", v: .9 },
  { en: "Problem solving", fr: "Résolution de problèmes", v: .9 },
  { en: "Adaptability", fr: "Adaptabilité", v: .95 },
  { en: "Leadership", fr: "Leadership", v: .8 },
  { en: "Teamwork", fr: "Esprit d'équipe", v: .9 }
];

const PROJECTS = [
  { title: { en: "Sales Performance Dashboard", fr: "Dashboard Performance Commerciale" },
    desc: { en: "Interactive dashboard tracking revenue, margin and top products by region.", fr: "Dashboard interactif : CA, marge et meilleurs produits par région." },
    tags: ["Power BI", "DAX", "SQL"], gh: "[github.com](https://github.com/your-username/sales-dashboard)", live: "[your-username.github.io](https://your-username.github.io/sales-dashboard/)" },
  { title: { en: "Payment Anomaly Detection", fr: "Détection d'Anomalies de Paiement" },
    desc: { en: "Python analysis flagging suspicious transactions and failure patterns.", fr: "Analyse Python repérant les transactions suspectes et les schémas d'échec." },
    tags: ["Python", "Pandas", "Statistics"], gh: "[github.com](https://github.com/your-username/payment-anomaly)", live: "[your-username.github.io](https://your-username.github.io/payment-anomaly/)" },
  { title: { en: "Customer Churn Analysis", fr: "Analyse du Churn Client" },
    desc: { en: "Segmentation and churn drivers with actionable retention recommendations.", fr: "Segmentation et facteurs de churn avec recommandations de rétention." },
    tags: ["SQL", "Tableau", "Excel"], gh: "[github.com](https://github.com/your-username/churn-analysis)", live: "[your-username.github.io](https://your-username.github.io/churn-analysis/)" }
];

/* ============ STATE ============ */
const root = document.documentElement;
let lang = localStorage.getItem("lang") || (navigator.language.startsWith("fr") ? "fr" : "en");
let accent = localStorage.getItem("accent") || "#e63322";
root.dataset.theme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
root.style.setProperty("--accent", accent);
document.getElementById("year").textContent = new Date().getFullYear();

/* ============ LOADER ============ */
(function loader() {
  document.body.classList.add("locked");
  const fill = document.getElementById("barFill"), pct = document.getElementById("pct");
  let p = 0;
  const tick = setInterval(() => {
    p = Math.min(100, p + Math.random() * 9 + 2);
    fill.style.width = p + "%";
    pct.textContent = Math.floor(p) + "%";
    if (p >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        document.getElementById("loader").classList.add("done");
        document.body.classList.remove("locked");
        typeHello();
      }, 350);
    }
  }, 70);
})();

/* ============ TYPEWRITER ============ */
let typeTimer;
function typeHello() {
  clearTimeout(typeTimer);
  const el = document.getElementById("typed");
  const prefix = T[lang].hello, name = "Bruno", full = prefix + name;
  let i = 0;
  (function step() {
    const txt = full.slice(0, i);
    el.innerHTML = i <= prefix.length ? txt : prefix + `<span class="name">${txt.slice(prefix.length)}</span>`;
    if (i++ < full.length) typeTimer = setTimeout(step, 70 + Math.random() * 70);
  })();
}

/* ============ RENDER ============ */
function render() {
  root.lang = lang;
  document.getElementById("langBtn").textContent = lang === "en" ? "FR" : "EN";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = T[lang][el.dataset.i18n];
    if (v) el.textContent = v;
  });

  // Timeline
  const tl = document.getElementById("timeline");
  tl.querySelectorAll(".t-item").forEach(n => n.remove());
  JOBS.forEach((j, i) => {
    const d = document.createElement("div");
    d.className = "t-item reveal";
    d.innerHTML = `<span class="t-node"></span>
      <div class="t-card">
        <div class="t-period">${j.period}</div>
        <div class="t-role">${j.role[lang]}</div>
        <div class="t-company">${j.company}</div>
        <div class="t-city">${j.city[lang]}</div>
        <div class="t-more">${T[lang].more}</div>
      </div>`;
    d.querySelector(".t-card").addEventListener("click", () => openJob(i));
    tl.appendChild(d);
  });

  // Values
  document.getElementById("valueGrid").innerHTML = VALUES.map(v =>
    `<div class="v-card reveal"><div class="v-icon"></div><h3>${v[lang][0]}</h3><p>${v[lang][1]}</p></div>`).join("");

  // Periodic table
  const pt = document.getElementById("ptable");
  pt.innerHTML = SKILLS.map((s, i) =>
    `<button class="el" style="--cat:${CATS[s.c].color};transition-delay:${i * 60}ms" data-i="${i}">
      <span class="el-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="el-sym">${s.s}</span>
      <span class="el-name">${s.n}</span>
    </button>`).join("");
  pt.querySelectorAll(".el").forEach(b => b.addEventListener("click", () => openSkill(+b.dataset.i)));
  document.getElementById("legend").innerHTML = Object.values(CATS).map(c =>
    `<span><i style="--cat:${c.color}"></i>${c[lang]}</span>`).join("");

  // Projects
  const shapes = [
    `<span style="width:90px;height:90px;background:var(--yellow);left:20px;top:30px"></span><span style="width:70px;height:70px;border-radius:50%;background:var(--blue);right:30px;top:40px"></span>`,
    `<span style="width:110px;height:110px;border-radius:50%;background:#111;left:40%;top:20px"></span><span style="width:50px;height:50px;background:var(--yellow);left:20px;bottom:20px"></span>`,
    `<span style="width:0;height:0;border-left:60px solid transparent;border-right:60px solid transparent;border-bottom:100px solid var(--yellow);left:30px;top:25px"></span><span style="width:80px;height:80px;background:var(--blue);right:30px;top:35px"></span>`
  ];
  document.getElementById("projectsGrid").innerHTML = PROJECTS.map((p, i) =>
    `<article class="p-card reveal">
      <div class="p-visual">${shapes[i]}</div>
      <div class="p-body">
        <h3>${p.title[lang]}</h3>
        <p>${p.desc[lang]}</p>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="p-links">
          <a href="${p.gh}" target="_blank" rel="noopener">GitHub</a>
          <a href="${p.live}" target="_blank" rel="noopener">${T[lang].live}</a>
        </div>
      </div>
    </article>`).join("");

  observeReveals();
  radarProgress = radarVisible ? 1 : radarProgress;
  drawRadar(radarProgress);
}

/* ============ MODAL ============ */
const modal = document.getElementById("modal");
function openModal(title, html) {
  document.getElementById("winTitle").textContent = title;
  document.getElementById("winBody").innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); }
document.getElementById("winClose").onclick = closeModal;
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function openJob(i) {
  const j = JOBS[i];
  openModal(`${j.company.toLowerCase().replace(/\s+/g, "-")}.exe`,
    `<h3>${j.role[lang]}</h3>
     <div class="meta">${j.company} · ${j.city[lang]} · ${j.period}</div>
     <ul>${j.tasks[lang].map((t, k) => `<li style="animation-delay:${k * 80}ms">${t}</li>`).join("")}</ul>`);
}
function openSkill(i) {
  const s = SKILLS[i];
  openModal(`skill://${s.n.toLowerCase().replace(/\s+/g, "-")}`,
    `<div class="big-sym">${s.s}</div>
     <h3>${s.n}</h3>
     <div class="meta">${CATS[s.c][lang]}</div>
     <p>${s[lang]}</p>`);
}

/* ============ REVEAL ON SCROLL ============ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: .15 });
function observeReveals() {
  document.querySelectorAll(".reveal:not(.in), .ptable:not(.in)").forEach(el => io.observe(el));
}

/* Timeline progress line */
function updateLine() {
  const tl = document.getElementById("timeline");
  const r = tl.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * .6 - r.top) / r.height));
  document.getElementById("lineFill").style.height = p * 100 + "%";
}
addEventListener("scroll", updateLine, { passive: true });

/* ============ CONTROLS ============ */
document.getElementById("langBtn").onclick = () => {
  lang = lang === "en" ? "fr" : "en";
  localStorage.setItem("lang", lang);
  render();
  typeHello();
};
document.getElementById("themeBtn").onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  drawRadar(radarProgress);
};
const sw = document.getElementById("swatches");
document.getElementById("accentBtn").onclick = e => { e.stopPropagation(); sw.classList.toggle("open"); };
document.addEventListener("click", e => { if (!e.target.closest(".accent")) sw.classList.remove("open"); });
function setAccent(c) {
  accent = c;
  root.style.setProperty("--accent", c);
  localStorage.setItem("accent", c);
  drawRadar(radarProgress);
}
sw.querySelectorAll("button").forEach(b => b.onclick = () => setAccent(b.dataset.color));
document.getElementById("customColor").addEventListener("input", e => setAccent(e.target.value));

/* ============ STARS ============ */
const sc = document.getElementById("stars"), sx = sc.getContext("2d");
let stars = [], mouse = { x: -999, y: -999 }, W, H;
function resizeStars() {
  W = sc.width = innerWidth * devicePixelRatio;
  H = sc.height = innerHeight * devicePixelRatio;
  sc.style.width = innerWidth + "px"; sc.style.height = innerHeight + "px";
  const count = Math.min(220, Math.floor(innerWidth * innerHeight / 7000));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: (Math.random() * 1.4 + .3) * devicePixelRatio,
    vx: (Math.random() - .5) * .15, vy: -(Math.random() * .25 + .05),
    ox: 0, oy: 0, a: Math.random() * .6 + .2, tw: Math.random() * Math.PI * 2
  }));
}
addEventListener("resize", resizeStars);
addEventListener("mousemove", e => { mouse.x = e.clientX * devicePixelRatio; mouse.y = e.clientY * devicePixelRatio; });
addEventListener("mouseleave", () => { mouse.x = mouse.y = -999; });
function animStars() {
  sx.clearRect(0, 0, W, H);
  const rgb = getComputedStyle(root).getPropertyValue("--star").trim();
  const R = 130 * devicePixelRatio;
  for (const s of stars) {
    s.x += s.vx; s.y += s.vy; s.tw += .03;
    if (s.y < -5) s.y = H + 5; if (s.x < -5) s.x = W + 5; if (s.x > W + 5) s.x = -5;
    const dx = s.x - mouse.x, dy = s.y - mouse.y, d = Math.hypot(dx, dy);
    if (d < R) { const f = (1 - d / R) * 18; s.ox += (dx / d * f - s.ox) * .12; s.oy += (dy / d * f - s.oy) * .12; }
    else { s.ox *= .94; s.oy *= .94; }
    const near = d < R;
    sx.beginPath();
    sx.fillStyle = near ? accent : `rgba(${rgb},${s.a * (.7 + .3 * Math.sin(s.tw))})`;
    sx.arc(s.x + s.ox, s.y + s.oy, near ? s.r * 1.6 : s.r, 0, Math.PI * 2);
    sx.fill();
  }
  requestAnimationFrame(animStars);
}
resizeStars(); animStars();

/* ============ ROTATING MESH LOGO (icosahedron) ============ */
const lc = document.getElementById("logo"), lx = lc.getContext("2d");
const PHI = (1 + Math.sqrt(5)) / 2;
const V = [[-1,PHI,0],[1,PHI,0],[-1,-PHI,0],[1,-PHI,0],[0,-1,PHI],[0,1,PHI],[0,-1,-PHI],[0,1,-PHI],[PHI,0,-1],[PHI,0,1],[-PHI,0,-1],[-PHI,0,1]];
const E = [];
for (let i = 0; i < V.length; i++) for (let j = i + 1; j < V.length; j++) {
  const d = Math.hypot(V[i][0]-V[j][0], V[i][1]-V[j][1], V[i][2]-V[j][2]);
  if (Math.abs(d - 2) < .01) E.push([i, j]);
}
let ang = 0;
function animLogo() {
  ang += .012;
  const w = lc.width, c = w / 2, sc2 = w / 4.4;
  lx.clearRect(0, 0, w, w);
  const P = V.map(([x, y, z]) => {
    let X = x * Math.cos(ang) - z * Math.sin(ang), Z = x * Math.sin(ang) + z * Math.cos(ang);
    let Y = y * Math.cos(ang * .7) - Z * Math.sin(ang * .7); Z = y * Math.sin(ang * .7) + Z * Math.cos(ang * .7);
    return [c + X * sc2, c + Y * sc2, Z];
  });
  const fg = getComputedStyle(root).getPropertyValue("--fg").trim();
  lx.lineWidth = 2.5;
  E.forEach(([a, b]) => {
    lx.strokeStyle = (P[a][2] + P[b][2]) > 0 ? accent : fg;
    lx.globalAlpha = (P[a][2] + P[b][2]) > 0 ? 1 : .35;
    lx.beginPath(); lx.moveTo(P[a][0], P[a][1]); lx.lineTo(P[b][0], P[b][1]); lx.stroke();
  });
  lx.globalAlpha = 1;
  P.forEach(p => { lx.fillStyle = accent; lx.fillRect(p[0] - 3, p[1] - 3, 6, 6); });
  requestAnimationFrame(animLogo);
}
animLogo();

/* ============ RADAR CHART ============ */
const rc = document.getElementById("radar"), rx = rc.getContext("2d");
let radarProgress = 0, radarVisible = false;
function drawRadar(p) {
  const w = rc.width, c = w / 2, R = w * .32, n = SOFT.length;
  const cs = getComputedStyle(root), fg = cs.getPropertyValue("--fg").trim();
  rx.clearRect(0, 0, w, w);
  const pt = (i, r) => [c + Math.cos(-Math.PI / 2 + i * 2 * Math.PI / n) * r, c + Math.sin(-Math.PI / 2 + i * 2 * Math.PI / n) * r];
  rx.strokeStyle = fg; rx.globalAlpha = .25; rx.lineWidth = 1.5;
  for (let k = 1; k <= 4; k++) {
    rx.beginPath();
    for (let i = 0; i <= n; i++) { const [x, y] = pt(i % n, R * k / 4); i ? rx.lineTo(x, y) : rx.moveTo(x, y); }
    rx.stroke();
  }
  for (let i = 0; i < n; i++) { const [x, y] = pt(i, R); rx.beginPath(); rx.moveTo(c, c); rx.lineTo(x, y); rx.stroke(); }
  rx.globalAlpha = 1;
  rx.beginPath();
  SOFT.forEach((s, i) => { const [x, y] = pt(i, R * s.v * p); i ? rx.lineTo(x, y) : rx.moveTo(x, y); });
  rx.closePath();
  rx.fillStyle = accent + "55"; rx.fill();
  rx.strokeStyle = accent; rx.lineWidth = 4; rx.stroke();
  SOFT.forEach((s, i) => { const [x, y] = pt(i, R * s.v * p); rx.fillStyle = fg; rx.fillRect(x - 6, y - 6, 12, 12); });
  rx.fillStyle = fg; rx.font = "700 20px Inconsolata, monospace"; rx.textBaseline = "middle";
  SOFT.forEach((s, i) => {
    const [x, y] = pt(i, R + 34);
    rx.textAlign = Math.abs(x - c) < 10 ? "center" : x > c ? "left" : "right";
    rx.fillText(s[lang], x, y);
  });
}
new IntersectionObserver(([e]) => {
  if (e.isIntersecting && !radarVisible) {
    radarVisible = true;
    const t0 = performance.now();
    (function a(t) {
      radarProgress = Math.min(1, (t - t0) / 1200);
      drawRadar(1 - Math.pow(1 - radarProgress, 3));
      if (radarProgress < 1) requestAnimationFrame(a);
    })(t0);
  }
}, { threshold: .4 }).observe(rc);

/* ============ INIT ============ */
render();
updateLine();
document.fonts && document.fonts.ready.then(() => drawRadar(radarProgress));
