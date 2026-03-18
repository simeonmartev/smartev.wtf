// ── CV Data ──────────────────────────────────────────────────────────────────
const cvJson = {
    "name": "Simeon Martev",
    "title": "CTO of Identrics, Technical Architect and last but not least Data & AI Systems Engineer",
    "bio": "<p>I have been building data pipelines for Media Intelligence and Risk Intelligence for over 15 years. Most of my work sits at the ingestion and enrichment layer - taking millions of documents a day from unstructured sources and turning them into something clean and searchable. I have built multilingual NLP pipelines, and I spend most of my time on the validation layer between models and storage - making sure raw entity output is confidence-scored before it reaches anything downstream.</p><p>I work with LLMs to build enrichment agents - multi-provider model layers for classification, summarisation, and entity resolution at scale. I do my best work in the code, not just the diagram.</p>",
    "greatestHits": [
        "The ingestion pipeline I built now processes 20M+ documents a month across 370,000+ outlets. It started as a Bulgarian news crawler. Every scaling step meant replacing something - cron jobs became RabbitMQ, RabbitMQ became Kafka. I made those calls and did the building.",
        "The enrichment layer runs NER, topic classification, and entity-based sentiment analysis in-stream inside Kafka, before anything hits the index. I own the validation layer between the models and storage - the part that determines whether model output is actually usable. A multi-provider LLM layer now sits on top for the harder classification and summarisation work.",
        "Specific things that came out of this: press release detection across thousands of ANZ outlets in under a second, which caused a major monitoring provider to replace their previous vendor. Real-time narrative tracking across the 2023 Bulgarian elections. OSINT tooling that cut manual analyst research time by about 70% per investigation."
    ],
    "contact": {
        "website": "https://smartev.wtf",
        "team": "https://identrics.ai/team/",
        "linkedin": "https://www.linkedin.com/in/smartev/",
        "github": "https://github.com/simeonmartev"
    },
    "skills": {
        "Core - daily, production-hardened": [
            "Kafka",
            "Elasticsearch (cluster design, query DSL, aggregations at scale)",
            "Python",
            "FastAPI",
            "Django & DRF",
            "PostgreSQL",
            "Pydantic"
        ],
        "Orchestration & Streaming": [
            "Prefect",
            "Apache Airflow",
            "RabbitMQ",
            "Celery",
            "asyncio",
            "Logstash"
        ],
        "AI & LLM": [
            "LLM Agents",
            "RAG Pipelines",
            "MCP Tools",
            "LangExtract",
            "Multilingual NLP (NER, Topic Classification, Sentiment Analysis)",
            "SpaCy",
            "Hugging Face Transformers"
        ],
        "LLM Tooling": ["Claude Code", "Cursor", "Ollama", "LM Studio"],
        "Storage": ["Elasticsearch", "PostgreSQL", "Neo4j", "Meilisearch", "SQLite"],
        "Infrastructure & Tooling": ["Docker", "GitLab CI/CD", "Sentry", "Linux", "Scrapy", "crawl4ai", "BrightData", "Apify"]
    },
    "experience": [
        {
            "company": "Identrics",
            "link": "https://identrics.ai/",
            "role": "Chief Technology Officer",
            "context": "Sofia-based AI company building media intelligence products - narrative tracking, disinformation detection, journalist intelligence, and media monitoring. Stepped into the CTO role following a leadership transition, after three years as VP of Engineering building the core technology stack.",
            "period": "Sep 2025 - Present",
            "location": "Sofia, Bulgaria",
            "highlights": [
                "Leading development of PINGRID - a journalist intelligence platform that scans thousands of publications daily, discovers newly active authors, and keeps journalist profiles current with topics and regional coverage. PR software providers use the API to replace manual media database maintenance.",
                "Leading development of Annex - a platform that unifies Identrics' AI services for media intelligence. It tracks how narratives develop and spread across networks, surfaces key influencers, and gives clients a single view from first signal through to full analysis. Currently serving enterprise clients across Europe.",
                "Designed and built TRACE - an API-first, event-driven press release monitoring service for the ANZ market using Python, Prefect, and FastAPI. It detects republished content across thousands of live outlets in under one second from publication. A leading ANZ media monitoring provider replaced their previous vendor to adopt our full NLP service portfolio.",
                "Built and operated the in-stream NLP enrichment layer inside the Kafka pipelines - NER, Topic Classification, Text Normalisation, and Entity-Based Sentiment Analysis all run before a document hits the index. On-prem multilingual models handle the core pipeline; a multi-provider LLM layer sits on top for classification, summarisation, and entity resolution. The system processes 20M+ documents per month.",
                "Built Topify - a Python/Prefect pipeline for topic modelling and clustering on documents fetched from Elasticsearch. It builds structured cluster metadata per document and publishes enriched data downstream. Topify powered real-time monitoring of the 2023 Bulgarian regional elections, and the service was offered to the campaign team of Vasil Terziev, now Mayor of Sofia.",
            ]
        },
        {
            "company": "UpDataOne",
            "link": "https://updata.one/",
            "role": "VP of Engineering",
            "company_display": "UpDataOne",
            "context": "A group of four business intelligence companies - A Data Pro, Identrics, Perceptica, and Seenews - operating under one umbrella. Grew into the role from A Data Pro, reporting directly to the CTO.",
            "period": "Jan 2022 - Sep 2025",
            "location": "Sofia, Bulgaria",
            "highlights": [
                "Led a team of 5-10 engineers and personally built the core ingestion pipeline: orchestrated crawling via Scrapy and RabbitMQ across 370,000+ media outlets, producing over 20 million documents per month from print, broadcast, and social sources - processed through Kafka, Logstash, and Docker, indexed in Elasticsearch. Grew the catalogue from a Bulgaria-only operation at ~5M docs/month to a global footprint over 10 years.",
                "For RDC (risk intelligence), orchestrated ingestion of thousands of sanctions lists via Scrapy and Airflow and designed the data model for sanction entities - enabling structured, queryable watchlist data at scale.",
                "Built OSINT tools for corporate due diligence and adverse media screening using Python, Scrapy, and Google APIs - generating risk profiles from public sources automatically. Reduced manual analyst research time by approximately 70% per investigation.",
                "Introduced a human-in-the-loop validation dataflow: analysts review and correct NLP enrichment output directly in Google Sheets, with automated sync back into the pipeline.",
                "Streamlined and automated data enrichment for the REAL Impact Score (Reach, Engagement, Authority, Leverage) - a composite media performance metric offered to ANZ clients for integration into their media monitoring platforms.",
                "Represented Identrics at the Sofia Information Integrity Forum 2025.",
                "Built Kaspian, an intelligent enrichment engine that formed the data quality layer underpinning all AI-based services the company offers today.",
            ]
        },
        {
            "company": "A Data Pro",
            "link": "https://adata.pro/",
            "role": "Lead Architect",
            "company_display": "A Data Pro",
            "context": "Sofia-based company specialising in media monitoring and risk intelligence. Joined as a mid-level developer and grew into the Lead Architect role.",
            "period": "Apr 2012 - Jan 2022",
            "location": "Sofia, Bulgaria",
            "highlights": [
                "Introduced Elasticsearch to the company holding and Apache Airflow for pipeline orchestration - replacing ad-hoc cron-based scheduling with proper DAG-based workflows across the entire data platform.",
                "Modernised the engineering stack over a decade - replaced a cron-job-and-FTP setup with Elasticsearch for search and indexing, Docker for containerisation, and GitLab CI/CD for automated deployments. Deployment cycles dropped from days to under 30 minutes.",
                "Built Perceptica, a Media Intelligence Platform for ingesting, enriching, and serving online news, social media, and broadcast content. The architecture - RabbitMQ, Celery, and Elasticsearch - became the foundation that eventually scaled into today's 20M docs/month pipeline.",
            ]
        }
    ],
    "openTo": [
        "I want to be in the architecture and the code, not just the meeting about it. Roles that fit: Principal or Staff Engineer, VP of Engineering - in teams building search infrastructure, data enrichment at scale, or applied NLP and AI in production.",
        "I write most of my code through LLM coding agents now - Claude Code, Cursor - and the workflow interests me as much as the systems I build through it.",
        "Remote or hybrid. Based in Sofia, Bulgaria."
    ]
};

// ── SEO Init ───────────────────────────────────────────────────────────────────
function stripHtmlToText(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || '').replace(/\s+/g, ' ').trim();
}

function truncateText(text, maxLen) {
    if (text.length <= maxLen) return text;
    const trimmed = text.slice(0, maxLen).trimEnd();
    return `${trimmed}…`;
}

function initSeo() {
    const name = cvJson.name;
    const canonicalBase = cvJson.contact?.website || `${window.location.origin}${window.location.pathname}`;
    const canonicalUrl = canonicalBase.endsWith('/') ? canonicalBase : `${canonicalBase}/`;

    const seoTitle = `${name} — CTO of Identrics`;
    const bioText = stripHtmlToText(cvJson.bio);
    const seoDescription = truncateText(`CTO of Identrics. ${bioText}`, 155);

    document.title = seoTitle;

    const setMetaName = (metaName, content) => {
        const el = document.querySelector(`meta[name="${metaName}"]`);
        if (el) el.setAttribute('content', content);
    };

    const setMetaProperty = (metaProp, content) => {
        const el = document.querySelector(`meta[property="${metaProp}"]`);
        if (el) el.setAttribute('content', content);
    };

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', canonicalUrl);

    setMetaName('description', seoDescription);

    setMetaProperty('og:title', seoTitle);
    setMetaProperty('og:description', seoDescription);
    setMetaProperty('og:url', canonicalUrl);

    setMetaName('twitter:title', seoTitle);
    setMetaName('twitter:description', seoDescription);
    setMetaName('twitter:url', canonicalUrl);

    // Best-effort keywords from the current cvJson skills (non-critical, SEO depends mostly on content).
    const allSkills = Object.values(cvJson.skills).flat();
    const keywords = Array.from(
        new Set([
            'CTO',
            'Identrics',
            'Technical Architect',
            'Data & AI Systems Engineer',
            'media intelligence',
            'risk intelligence',
            ...allSkills
        ])
    ).slice(0, 28);
    setMetaName('keywords', keywords.join(', '));
}

// ── Render ────────────────────────────────────────────────────────────────────

function renderHeader() {
    const el = document.getElementById('header');
    el.innerHTML = `
    <h1 class="header-name">${cvJson.name}</h1>
    <div class="header-title">${cvJson.title}</div>
    <div class="header-links">
    <a href="${cvJson.contact.linkedin}" target="_blank" rel="noopener">linkedin.com/in/smartev</a>
    <span class="sep">-</span>
    <a href="${cvJson.contact.team}" target="_blank" rel="noopener">identrics.ai/team</a>
    <span class="sep">-</span>
    <a href="${cvJson.contact.github}" target="_blank" rel="noopener">github.com/simeonmartev</a>
    </div>
  `;
}

// cvJson.bio is a compile-time constant - innerHTML is safe here.
function renderBio() {
    const el = document.getElementById('bio');
    const headingId = 'bio-heading';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-labelledby', headingId);
    el.innerHTML = `
    <h2 class="section-key" id="${headingId}"><span class="slash">//</span> bio</h2>
    <div class="bio">${cvJson.bio}</div>
  `;
}

function renderTldr() {
    const main = document.getElementById('main');
    const section = document.createElement('section');
    section.className = 'section';
    const headingId = 'tldr-heading';
    section.setAttribute('role', 'region');
    section.setAttribute('aria-labelledby', headingId);

    // Paragraph spacing is handled via CSS (`.tldr p + p`), not `<br>`.
    const hitsHtml = cvJson.greatestHits.map(h => `<p>${h}</p>`).join('');
    section.innerHTML = `
    <h2 class="section-key" id="${headingId}"><span class="slash">//</span> tldr</h2>
    <div class="tldr">${hitsHtml}</div>
  `;

    main.appendChild(section);
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
        <span class="job-company"> - <a href="${job.link}" target="_blank" rel="noopener">${job.company_display || job.company}</a></span>
      </div>
      ${job.context ? `<div class="job-meta" style="font-style: italic;">${job.context}</div>` : ''}
      <div class="job-meta">${job.period} · ${job.location}</div>
      ${highlightsHtml}
    </div>
  `;
}

function renderSkills() {
    const main = document.getElementById('main');
    const section = document.createElement('section');
    section.className = 'section';
    const headingId = 'skills-heading';
    section.setAttribute('role', 'region');
    section.setAttribute('aria-labelledby', headingId);
    const rows = Object.entries(cvJson.skills).map(([category, items]) =>
        `<div class="skill-row">
            <span class="skill-category">${category}</span>
            <span class="skill-items">${items.join(' · ')}</span>
        </div>`
    ).join('');
    section.innerHTML = `
    <h2 class="section-key" id="${headingId}"><span class="slash">//</span> skills</h2>
    <div class="skill-grid">${rows}</div>
  `;
    main.appendChild(section);
}

function renderExperience() {
    const main = document.getElementById('main');
    const section = document.createElement('section');
    section.className = 'section';
    const headingId = 'experience-heading';
    section.setAttribute('role', 'region');
    section.setAttribute('aria-labelledby', headingId);
    section.innerHTML = `
    <h2 class="section-key" id="${headingId}"><span class="slash">//</span> experience</h2>
    ${cvJson.experience.map(renderJob).join('')}
  `;
    main.appendChild(section);
}

function renderOpenTo() {
    const main = document.getElementById('main');
    const section = document.createElement('section');
    section.className = 'section';
    const headingId = 'open-to-heading';
    section.setAttribute('role', 'region');
    section.setAttribute('aria-labelledby', headingId);
    const html = cvJson.openTo.map(p => `<p>${p}</p>`).join('');
    section.innerHTML = `
    <h2 class="section-key" id="${headingId}"><span class="slash">//</span> open to</h2>
    <div class="open-to">${html}</div>
  `;
    main.appendChild(section);
}

function renderFooter() {
    const el = document.getElementById('footer');
    const year = new Date().getFullYear();
    el.innerHTML = `<span>${cvJson.name} - ${year}</span>`;
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

initSeo();
renderHeader();
renderBio();
renderTldr();
renderSkills();
renderExperience();
renderOpenTo();
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
