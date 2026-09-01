// ============================================================
// SUSTAIN.ALL — project data & interactivity
// ============================================================

// Paste the Google Apps Script "Web app" URL here (ends in /exec).
// See README.md for how to set this up — until this is filled in,
// the form will show an error instead of submitting anywhere.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_53P_c2HMjkbTfsgp-F0_qfa9uzwxwym60Dpy8os4TDOe4vcojq_jXAAQrO5vMaSC/exec";

const STAGES = ["Concept", "Pre-Prototype", "Prototype", "Pre-Pilot", "Pilot"];

const PROJECTS = [
  {
    id: "impact",
    title: "Sustain.Impact",
    cluster: "AI, Data & Digital Sustainability",
    partner: "Dr. Kristina Fajga, Science & Startups",
    challenge: "TU Berlin had no comparable, quantitative way to measure or show the environmental impact of campus projects.",
    solution: "A website where project data is submitted, scored out of 100 by an AI engine, and displayed publicly under the relevant faculty.",
    development: "This semester the team shipped the scoring logic, the data pipeline, and a live webpage hosted on GitHub.",
    stage: 2, // Prototype
    further: "Correcting AI model bias, folding in feedback, and preparing a pilot program under EU data-protection rules.",
    link: "https://i-tup.github.io/frontend/",
    linkLabel: "View live prototype"
  },
  {
    id: "circularity-textile",
    title: "Sustain.Circularity — Textile",
    cluster: "Circular Economy",
    partner: "Anett Hein & Julia Krzyslak, Zentrale Beschaffung",
    challenge: "Contaminated institutional textiles had no centralised re-use or material recovery pathways.",
    solution: "A routing framework to safely categorise and dispatch used campus textiles for downcycling and recycling instead of disposal.",
    development: "Mapped materials, brought external recycling companies to the table, and drafted a pilot proposal.",
    stage: 3, // Pre-Pilot
    further: "Clarifying internal budgets, running the pilot, and assessing recycled-material quality and economics.",
    link: "https://docs.google.com/presentation/d/1nbzGQc3WowczfXzN0nqcEMnAVZIyF7PX/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "circularity-it",
    title: "Sustain.Circularity — IT",
    cluster: "Circular Economy",
    partner: null,
    challenge: "Old electronics sit unused across the TU while new devices keep getting ordered — a linear waste of money and resources.",
    solution: "An internal IT matchmaking site that requires staff to request refurbished TU hardware before ordering anything new.",
    development: "Mapped the key stakeholders and designed website wireframes with user-friendly hardware filters.",
    stage: 0, // Concept
    further: "Adding preliminary hardware inspections with the IT department, and embedding the platform into official university financing routes.",
    link: "https://docs.google.com/presentation/d/17TS0B-vTxgyZk8tjge8UisuwYLZveDgJ/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "mobility",
    title: "Sustain.Mobility",
    cluster: "Mobility & Smart Cities",
    partner: "Dr. Michael Hüllenkrämer, K4-Stabsstelle SDU & Gloria Karcher, Stabsstelle Nachhaltigkeit",
    challenge: "Outdated physical signage causes confusion on campus, with no real-time, multilingual or wheelchair-accessible routing.",
    solution: "A centralised TUB-Navi app combining indoor and outdoor maps with live updates on accessibility, bike parking and EV charging.",
    development: "Surveyed users to confirm demand, mapped stakeholders, analysed competitor navigation apps, and designed a static prototype.",
    stage: 1, // Pre-Prototype
    further: "Building a functional Figma prototype, securing data partnerships, and launching a pilot tied to a gamified mobility challenge.",
    link: "https://docs.google.com/presentation/d/1Q2khaSVovK6SpqVj5Hpw782yMjK2jyj2/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "partx",
    title: "Sustain.PartX",
    cluster: "People, Society & Wellbeing",
    partner: "Bengisu Berispek, Sustain.ALL Transformation Hub",
    challenge: "Plenty of eco-initiatives exist, but no centralised tool makes participating in them simple, rewarding or engaging.",
    solution: "A gamified platform that aggregates green opportunities and offers easier access and tangible rewards to motivate behavioural change.",
    development: "Ran stakeholder mapping, completed a student barrier survey, and designed a static web interface.",
    stage: 1, // Pre-Prototype
    further: "Translating the static interface into a working platform prototype that directly addresses the barriers students named.",
    link: "https://docs.google.com/presentation/d/1FQZWyR3iE4tRxksJK1CLRpaK4_Pwx5jl/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "food",
    title: "Sustain.Food",
    cluster: "People, Society & Wellbeing",
    partner: null,
    challenge: "The food system drives roughly 34% of greenhouse-gas emissions, and shifting student meal choices needs real behavioural change.",
    solution: "EcoLens — a gamified mobile app that turns official food data into sustainability points, rewarding eco-friendly cafeteria meals via leaderboards.",
    development: "Built a live interactive demo, formulated the scoring logic, and ran a technical API and cost-feasibility analysis.",
    stage: 2, // Prototype
    further: "Securing data partnerships with Studierendenwerk, obtaining pilot funding, and deploying the app for student use.",
    link: "https://www.youtube.com/watch?app=desktop&v=VjhzTcMpEts&ra=m",
    linkLabel: "Watch video demo"
  },
  {
    id: "energy",
    title: "Sustain.Energy",
    cluster: "Climate & Energy",
    partner: "Bengisu Berispek, Sustain.ALL Transformation Hub",
    challenge: "Campus energy use is invisible to the people in the building, and empty rooms are still heated and lit due to a spatial-utilisation gap.",
    solution: "An energy-visualisation dashboard paired with an open-source IoT system that uses ceiling radar to match HVAC use to real attendance.",
    development: "Built a monthly energy dashboard prototype for the library and mapped a zero-e-waste hardware integration matrix.",
    stage: 0, // Concept (& dashboard prototype)
    further: "Expanding smart-meter coverage, building an automated data pipeline, and piloting containerised local servers.",
    link: "https://drive.google.com/file/d/1MWUYYiTqSbNV0n85_zbeOujzClAn2b61/view?usp=sharing",
    linkLabel: "View project files"
  },
  {
    id: "hub",
    title: "Sustain.Hub",
    cluster: "Culture & Transformation",
    partner: "Dr. Michael Wilmes, Präsidialamt",
    challenge: "Unused cafeterias and large stores of spare furniture sit idle while students lack flexible, interdisciplinary collaboration space.",
    solution: "Turning abandoned cafeterias into circular co-creation hubs by retrofitting existing furniture into modular systems.",
    development: "Ran site visits, surveyed student needs, researched best practice, and produced a circular design framework.",
    stage: 0, // Concept
    further: "Building modular furniture prototypes, hosting a student makeathon, and running a life-cycle-assessment comparison.",
    link: "https://docs.google.com/presentation/d/1KXeZOZTSBWGOFCtnigPAbYpxDoKr3Q0Q/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "finance",
    title: "Sustain.Finance",
    cluster: "Sustainable Finance",
    partner: null,
    challenge: "Small student-led impact projects often fail because existing funding applications are too slow and complex for micro-funding amounts (€500–€2,500).",
    solution: "A fast, process-light TU Impact Fund offering rolling micro-grants based on a simple one-page application.",
    development: "Designed a five-seat allocation committee, drafted a €15,000 pilot budget, and defined ESG donor pipelines.",
    stage: 3, // Pre-Pilot
    further: "Setting up the donation directive, naming a foundation contact, and opening talks with prospective first donors.",
    link: "https://drive.google.com/file/d/1ka_4O3YXpg0b6CQhG9QZ1MOVutRq1tVX/view?usp=sharing",
    linkLabel: "View project files"
  }
];

function stepperHTML(stageIndex){
  const segs = STAGES.map((s, i) => `<span class="stepper-seg ${i <= stageIndex ? 'done' : ''}"></span>`).join("");
  return `
    <div class="stepper">
      <div class="stepper-track">${segs}</div>
      <div class="stepper-label">${STAGES[stageIndex]} <span>· Current Maturity</span></div>
    </div>`;
}

function cardHTML(p){
  return `
    <article class="pcard" data-cluster="${p.cluster}" data-id="${p.id}" tabindex="0">
      <div class="pcard-top">
        <span class="tag">${p.cluster}</span>
        <span class="origin">${STAGES[p.stage]}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="pcard-challenge">${p.challenge}</p>
      ${stepperHTML(p.stage)}
      <p class="pcard-partner">${p.partner ? `Partner: <b>${p.partner}</b>` : `<b> Student Initiative</b>`}</p>
      <span class="pcard-more">Read the full story →</span>
    </article>`;
}

function modalHTML(p){
  return `
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    <span class="tag">${p.cluster}</span>
    <h3>${p.title}</h3>
    ${p.partner ? `<p class="pcard-partner">Partner: <b>${p.partner}</b></p>` : `<p class="pcard-partner"><b> Student Initiative</b></p>`}
    ${stepperHTML(p.stage)}
    <div class="modal-row">
      <h5>The challenge</h5>
      <p>${p.challenge}</p>
    </div>
    <div class="modal-row">
      <h5>The proposed solution</h5>
      <p>${p.solution}</p>
    </div>
    <div class="modal-row">
      <h5>Progress so far</h5>
      <p>${p.development}</p>
    </div>
    <div class="modal-row">
      <h5>Next steps</h5>
      <p>${p.further}</p>
    </div>
    ${p.link ? `<a class="modal-link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel} ↗</a>` : ""}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.getElementById("cardGrid");
  const filterRow = document.getElementById("filterRow");
  const clusterGrid = document.getElementById("clusterGrid");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  // render cards
  function renderCards(filter){
    const list = filter && filter !== "all" ? PROJECTS.filter(p => p.cluster === filter) : PROJECTS;
    cardGrid.innerHTML = list.map(cardHTML).join("");
    cardGrid.querySelectorAll(".pcard").forEach(card => {
      card.addEventListener("click", () => openModal(card.dataset.id));
      card.addEventListener("keypress", (e) => { if(e.key === "Enter") openModal(card.dataset.id); });
    });
  }
  renderCards("all");

  // filter buttons (challenges section)
  filterRow.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterRow.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
      clusterGrid.querySelectorAll(".cluster-chip").forEach(c => c.classList.remove("active"));
      const match = clusterGrid.querySelector(`[data-cluster="${btn.dataset.filter}"]`);
      if(match) match.classList.add("active");
    });
  });

  // cluster chips scroll to + filter challenges
  clusterGrid.querySelectorAll(".cluster-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const cluster = chip.dataset.cluster;
      clusterGrid.querySelectorAll(".cluster-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filterRow.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      const match = filterRow.querySelector(`[data-filter="${cluster}"]`);
      if(match) match.classList.add("active");
      renderCards(cluster);
      document.getElementById("challenges").scrollIntoView({ behavior: "smooth" });
    });
  });

  // modal
  function openModal(id){
    const p = PROJECTS.find(x => x.id === id);
    if(!p) return;
    modalContent.innerHTML = modalHTML(p);
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("modalClose").addEventListener("click", closeModal);
  }
  function closeModal(){
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  modalOverlay.addEventListener("click", (e) => { if(e.target === modalOverlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

  // mobile nav
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  // form submission — sends data to a Google Apps Script web app,
  // which appends a row to a connected Google Sheet. See README.md.
  const form = document.getElementById("proposeForm");
  const success = document.getElementById("formSuccess");
  if(form){
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // honeypot check — real users never fill this hidden field
      if(form.querySelector('[name="bot-field"]').value){
        return;
      }

      if(!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.startsWith("PASTE_")){
        alert("Form isn't connected yet — add your Google Apps Script URL to GOOGLE_SCRIPT_URL in script.js.");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      submitBtn.disabled = true;

      try{
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", // Apps Script web apps don't return CORS headers;
                            // the request still lands and doPost() still runs.
          body: new FormData(form)
        });
        form.style.display = "none";
        success.classList.add("show");
      }catch(err){
        alert("Something went wrong sending that — please try again in a moment.");
        submitBtn.textContent = originalLabel;
        submitBtn.disabled = false;
      }
    });
  }
});
