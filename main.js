// ── CV Data ──────────────────────────────────────────────────────────────────
const cvJson = {
    "name": "Simeon Martev",
    "title": "Technical Architect · Data & AI Systems Engineer",
    "bio": "<p>I have been building data pipelines for Media Intelligence and Risk Intelligence for over 15 years. Most of my work sits at the ingestion and enrichment layer — taking millions of documents a day from unstructured sources and turning them into something clean and searchable, using Kafka, Elasticsearch, and Python. Over the years I have built and applied multilingual NLP pipelines for NER, Topic Classification, and <a href=\"https://identrics.ai/blog/what-is-entity-based-sentiment-analysis/\" target=\"_blank\" rel=\"noopener\">Entity-Based Sentiment Analysis</a>.</p><p>I spend a lot of time on the validation and post-processing layers between the models and storage, making sure raw entity output is clean and confidence-scored before it reaches anything downstream.</p><p>These days I work with LLMs to build enrichment agents that automate parts of this pipeline. I do my best work in the code, not just the diagram.</p>",
    "contact": {
        "website": "https://smartev.wtf",
        "team": "https://identrics.ai/team/",
        "linkedin": "https://www.linkedin.com/in/smartev/",
        "github": "https://github.com/simeonmartev"
    },
    "skills": {
        "Data & Streaming": ["Apache Kafka", "Elasticsearch", "Logstash", "Prefect", "Apache Airflow", "RabbitMQ", "Celery"],
        "Languages & Frameworks": ["Python", "FastAPI", "Django REST Framework", "Scrapy", "PHP"],
        "AI & NLP": ["Custom-trained multilingual NLP (NER, Topic, Sentiment)", "LLM Orchestration (OpenAI, Claude, Ollama)", "AI Agent Frameworks", "Entity-Based Sentiment Analysis", "SpaCy", "HuggingFace", "RAG"],
        "Databases": ["Elasticsearch", "PostgreSQL", "Neo4j"],
        "Infrastructure": ["Docker", "GitLab CI/CD", "On-prem self-hosted"]
    },
    "languages": [
        { "lang": "Bulgarian", "level": "Native" },
        { "lang": "English", "level": "Professional" }
    ],
    "experience": [
        {
            "company": "Identrics",
            "link": "https://identrics.ai/",
            "role": "Chief Technology Officer",
            "period": "Sep 2025 – Present",
            "location": "Sofia, Bulgaria",
            "highlights": [
                "<a href=\"https://identrics.ai/annex/\" target=\"_blank\" rel=\"noopener\">Annex</a> — a platform that unifies Identrics' AI services for media intelligence. It tracks how narratives develop and spread across networks, surfaces key influencers, and gives clients a view from first signal through to full analysis.",
                "<a href=\"https://identrics.ai/media-contacts/\" target=\"_blank\" rel=\"noopener\">PINGRID</a> — a journalist intelligence platform that scans thousands of publications every day, picks up newly active authors, and keeps journalist profiles current with their topics and regional coverage. PR software providers use the API to stop manually maintaining their media databases.",
                "Built TRACE — a press release monitoring service for the ANZ market using Python, Prefect, and FastAPI. It detects republished content across thousands of live outlets in under a second from publication.",
                "The core enrichment pipeline runs on-prem multilingual NLP models for NER, Topic Classification, and <a href=\"https://identrics.ai/blog/what-is-entity-based-sentiment-analysis/\" target=\"_blank\" rel=\"noopener\">Entity-Based Sentiment Analysis</a>. A multi-provider LLM layer (OpenAI, Claude, Ollama) sits on top for classification, summarisation, and entity resolution.",
                "Represented Identrics at the <a href=\"https://identrics.ai/blog/sofia-information-integrity-forum-2025/\" target=\"_blank\" rel=\"noopener\">Sofia Information Integrity Forum 2025</a>."
            ]
        },
        {
            "company": "UpDataOne",
            "link": "https://updata.one/",
            "role": "VP of Engineering",
            "period": "Jan 2022 – Sep 2025",
            "location": "Sofia, Bulgaria",
            "highlights": [
                "Led a team of 5–10 engineers and personally built the main ingestion pipeline: 4+ million documents per day from print, broadcast, and social sources, processed through Kafka, Logstash, and Docker, indexed in Elasticsearch.",
                "Built NLP enrichment directly into the Kafka pipelines. Entity-Based Sentiment Analysis, Named Entity Recognition, Topic Classification, and Text Normalisation all run in-stream, so by the time a document is indexed it is already enriched.",
                "Streamlined and automated data enrichment for the <a href=\"https://identrics.ai/case-studies/how-we-built-real-impact-score-moving-beyond-vanity-metrics-in-media-intelligence/\" target=\"_blank\" rel=\"noopener\">REAL Impact Score</a> (Reach, Engagement, Authority, Leverage) — a composite score that puts a single number on media performance.",
                "Built the Author Resolution System in Neo4j — graph-based matching and deduplication that links journalist identities across media sources at millions-of-documents scale."
            ]
        },
        {
            "company": "A Data Pro",
            "link": "https://adata.pro/",
            "role": "Senior Software Developer & Lead Architect",
            "period": "Apr 2012 – Jan 2022",
            "location": "Sofia, Bulgaria",
            "highlights": [
                "Joined as a mid-level developer and grew into the Lead Architect role over ten years. During that time I modernised the whole engineering stack: brought in Elasticsearch, Kafka, Docker, and GitLab CI/CD, replacing what was essentially a cron-job-and-FTP setup with a proper automated pipeline processing millions of documents a month.",
                "Built Perceptica, a Media Intelligence Platform for ingesting, enriching, and serving online news, social media, and broadcast content. The stack was RabbitMQ, Celery, and Elasticsearch.",
                "Developed OSINT tools for corporate due diligence and adverse media screening, using Python Scrapy and Google APIs to build risk profiles from public sources automatically."
            ]
        },
        {
            "company": "Mag Advartisign",
            "link": "https://www.mag.bg/",
            "role": "Web Developer",
            "period": "Jan 2010 – Apr 2012",
            "location": "Sofia, Bulgaria",
            "description": "Full-stack web development and bespoke CMS solutions using PHP and WordPress for Bulgarian media and digital publishing clients."
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
    <a href="${cvJson.contact.linkedin}" target="_blank" rel="noopener">linkedin.com/in/smartev</a>
    <span class="sep">—</span>
    <a href="${cvJson.contact.team}" target="_blank" rel="noopener">identrics.ai/team</a>
    <span class="sep">—</span>
    <a href="${cvJson.contact.github}" target="_blank" rel="noopener">github.com/simeonmartev</a>
    </div>
  `;
}

// cvJson.bio is a compile-time constant — innerHTML is safe here.
function renderBio() {
    const el = document.getElementById('bio');
    el.innerHTML = `
    <div class="section-key"><span class="slash">//</span> bio</div>
    <div class="bio">${cvJson.bio}</div>
  `;
}

// cvJson is a compile-time constant - innerHTML interpolation is safe here.
// If this ever sources from external input, escape all interpolated fields.
function renderJob(job) {
    const highlightsHtml = job.highlights
        ? `<ul class="job-highlights">${job.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
        : `<p class="job-description">${job.description}</p>`;

    return `
    <div class="job">
      <div>
        <span class="job-role">${job.role}</span>
        <span class="job-company"> - <a href="${job.link}" target="_blank" rel="noopener">${job.company}</a></span>
      </div>
      <div class="job-meta">${job.period} · ${job.location}</div>
      ${highlightsHtml}
    </div>
  `;
}

function renderSkills() {
    const main = document.getElementById('main');
    const section = document.createElement('div');
    section.className = 'section';
    const rows = Object.entries(cvJson.skills).map(([category, items]) =>
        `<div class="skill-row">
            <span class="skill-category">${category}:</span>
            <span class="skill-items">${items.join(', ')}</span>
        </div>`
    ).join('');
    section.innerHTML = `
    <div class="section-key"><span class="slash">//</span> skills</div>
    <div class="skill-grid">${rows}</div>
  `;
    main.appendChild(section);
}

function renderLanguages() {
    const main = document.getElementById('main');
    const section = document.createElement('div');
    section.className = 'section';
    const items = cvJson.languages.map(l =>
        `<span class="lang-item"><span class="lang-name">${l.lang}</span> <span class="lang-level">(${l.level})</span></span>`
    ).join('<span class="sep">·</span>');
    section.innerHTML = `
    <div class="section-key"><span class="slash">//</span> languages</div>
    <div class="lang-list">${items}</div>
  `;
    main.appendChild(section);
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
    <span>${cvJson.name} - ${year}</span>
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
renderSkills();
renderExperience();
renderLanguages();
renderFooter();

// ── Animations ───────────────────────────────────────────────────────────────
// Runs after all render calls so the DOM is fully populated.

// Section headers: cycle through comment/operator syntax from different languages
(function initSlashAnimation() {
    const frames = ['//', '##', '--', '::', '>>', '/*'];
    let idx = 0;

    function tick() {
        idx = (idx + 1) % frames.length;
        document.querySelectorAll('.slash').forEach(el => {
            el.classList.add('slash--out');
            setTimeout(() => {
                el.textContent = frames[idx];
                el.classList.remove('slash--out');
            }, 60);
        });
    }

    setInterval(tick, 700);
})();

// Name prefix: cycling terminal prompt glyph in pink
(function initNamePrefix() {
    const frames = ['$', '>', '~', '#', '_', '/'];
    let idx = 0;

    const prefix = document.createElement('span');
    prefix.className = 'name-prefix';
    prefix.setAttribute('aria-hidden', 'true');
    prefix.textContent = frames[0];

    const nameEl = document.querySelector('.header-name');
    nameEl.prepend(prefix);

    setInterval(() => {
        prefix.classList.add('name-prefix--out');
        setTimeout(() => {
            idx = (idx + 1) % frames.length;
            prefix.textContent = frames[idx];
            prefix.classList.remove('name-prefix--out');
        }, 60);
    }, 600);
})();
