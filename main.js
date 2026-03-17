// ── CV Data ──────────────────────────────────────────────────────────────────
const cvJson = {
  "name": "Simeon Martev",
  "title": "Chief Technology Officer of Identrics",
  "bio": "CTO of Identrics with about a generation of experience in software development. Relentless about building scalable, efficient, and easy-to-maintain solutions for data aggregation, transformation, and content enrichment. I lead legions of software engineers to craft tailor-made software for Business and Media Intelligence industries.",
  "contact": {
    "website": "https://smartev.wtf",
    "team": "https://identrics.ai/team/",
    "linkedin": "https://www.linkedin.com/in/smartev/",
    "github": "https://github.com/simeonmartev"
  },
  "experience": [
    {
      "company": "Identrics",
      "link": "https://identrics.ai/",
      "role": "Chief Technology Officer (Hands-on)",
      "period": "Sep 2025 - Present",
      "location": "Sofia, Bulgaria (Remote Friendly)",
      "highlights": [
        "Architected and shipped TRACE — a real-time event-driven monitoring service for the ANZ market (Python, Prefect, FastAPI). Enabled sub-second detection of republished press releases across thousands of media outlets.",
        "Engineered the Journalist Intelligence API integrating NLP pipelines (NER, Topic Modeling, Lexical Scoring) with Elasticsearch and Django REST Framework.",
        "Stabilized critical data delivery pipelines during a leadership transition, restoring 100% delivery continuity for key accounts."
      ]
    },
    {
      "company": "UpDataOne",
      "link": "https://updata.one/",
      "role": "VP of Engineering",
      "period": "Jan 2022 - Sep 2025",
      "location": "Sofia, Bulgaria",
      "highlights": [
        "Architected a high-volume ingestion pipeline processing 4+ million documents annually from print, broadcast, and social sources using Kafka, Logstash, and Docker.",
        "Designed NLP enrichment flows for Entity-Based Sentiment, NER, Topic Classification, and Text Normalization in streaming Kafka pipelines.",
        "Co-developed the proprietary REAL Impact Score (Reach, Engagement, Authority, Leverage) — a quantifiable metric for media performance.",
        "Engineered an automated Author Resolution System linking journalist identities across media types."
      ]
    },
    {
      "company": "A Data Pro",
      "link": "https://adata.pro/",
      "role": "Senior Software Developer & Lead Architect",
      "period": "Apr 2012 - Jan 2022",
      "location": "Sofia, Bulgaria",
      "highlights": [
        "Built end-to-end Media Intelligence Platform (Perceptica) — collection, storage, and visualization of online news, social, and blogs via RabbitMQ, Celery, and Elasticsearch.",
        "Modernized engineering infrastructure over a decade: introduced Airflow for orchestration, Kafka for streaming, and GitLab CI/CD.",
        "Developed OSINT and Risk Intelligence tools for Due Diligence and Adverse Media screening using Python Scrapy and Google APIs."
      ]
    },
    {
      "company": "Mag Advartisign",
      "link": "https://www.mag.bg/",
      "role": "Web Developer",
      "period": "Jan 2010 - Apr 2012",
      "location": "Sofia, Bulgaria",
      "description": "Web development and custom CMS solutions."
    }
  ]
};

// ── Render ────────────────────────────────────────────────────────────────────

function renderHeader() {
  const el = document.getElementById('header');
  el.innerHTML = `
    <div class="header-name">${cvJson.name}</div>
    <div class="header-title">${cvJson.title}</div>
    <div class="header-links">
      <a href="${cvJson.contact.github}" target="_blank" rel="noopener">github.com/simeonmartev</a>
      <span class="sep">—</span>
      <a href="${cvJson.contact.linkedin}" target="_blank" rel="noopener">linkedin.com/in/smartev</a>
      <span class="sep">—</span>
      <a href="${cvJson.contact.team}" target="_blank" rel="noopener">identrics.ai/team</a>
    </div>
  `;
}

function renderBio() {
  const el = document.getElementById('bio');
  el.textContent = cvJson.bio;
}

function renderJob(job) {
  const highlightsHtml = job.highlights
    ? `<ul class="job-highlights">${job.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
    : `<p class="job-description">${job.description}</p>`;

  return `
    <div class="job">
      <div>
        <span class="job-role">${job.role}</span>
        <span class="job-company"> — <a href="${job.link}" target="_blank" rel="noopener">${job.company}</a></span>
      </div>
      <div class="job-meta">${job.period} · ${job.location}</div>
      ${highlightsHtml}
    </div>
  `;
}

function renderExperience() {
  const main = document.getElementById('main');
  const section = document.createElement('div');
  section.className = 'section';
  section.innerHTML = `
    <div class="section-key"><span class="slash">//</span> experience</div>
    ${cvJson.experience.map(renderJob).join('')}
  `;
  main.appendChild(section);
}

function renderFooter() {
  const el = document.getElementById('footer');
  const year = new Date().getFullYear();
  el.innerHTML = `
    <span>${cvJson.name} — ${year}</span>
    <span>// generated with Claude</span>
  `;
}

// ── Feonor Easter Egg ─────────────────────────────────────────────────────────

(function initFeonor() {
  const sequence = 'feonor';
  let buffer = '';
  const toast = document.getElementById('feonor-toast');
  let hideTimer = null;

  document.addEventListener('keydown', (e) => {
    // Ignore modifier keys and non-printable keys
    if (e.key.length !== 1) { buffer = ''; return; }

    buffer += e.key.toLowerCase();
    if (buffer.length > sequence.length) {
      buffer = buffer.slice(-sequence.length);
    }

    if (buffer === sequence) {
      buffer = '';
      toast.textContent = 'Fëonor did nothing wrong.';
      toast.classList.add('visible');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
    }
  });
})();

// ── Init ──────────────────────────────────────────────────────────────────────

renderHeader();
renderBio();
renderExperience();
renderFooter();
