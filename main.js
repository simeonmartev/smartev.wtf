// Configuration
const CONFIG = {
    typingSpeed: 50,
    bootPause: 2000,
    prompt: "visitor@smartev.wtf:~$"
};

// Embedded Data
const cvJson = {
    "name": "Simeon Martev",
    "title": "Chief Technology Officer at Identrics",
    "bio": "Software developer with 15+ years of experience, currently leading teams of software engineers developing and implementing tailor-made software solutions in the field of data aggregation, data transformation, content enrichment, supporting business intelligence and media intelligence industries. Passionate about building scalable, maintainable, and efficient software solutions.",
    "contact": {
        "website": "https://smartev.wtf",
        "linkedin": "https://www.linkedin.com/in/smartev/"
    },
    "education": {
        "university": "University of Ruse",
        "period": "2007 - 2010"
    },
    "skills": [
        "Python", "Perl", "PHP", "Scrapy", "PostgreSQL", "Elasticsearch", "Airflow", "spaCy",
        "FastAPI", "RabbitMQ", "GraphDB", "Kafka", "Git", "Data Pipelines", "LLMs via API",
        "Pyro", "Celery", "Django"
    ],
    "interests": [
        "Data Pipelines", "Data Aggregation", "Data Transformation", "Content Enrichment",
        "Business Intelligence", "Media Intelligence", "AI", "LLMs"
    ],
    "experience": [
        {
            "company": "Identrics",
            "role": "Chief Technology Officer",
            "period": "Sep 2025 - Present",
            "description": "Leading teams of software engineers developing and implementing tailor-made software solutions."
        },
        {
            "company": "UpDataOne",
            "role": "VP of Engineering",
            "period": "Jan 2022 - Sep 2025",
            "description": "Oversaw data aggregation, transformation, and enrichment processes."
        },
        {
            "company": "UpDataOne",
            "role": "Senior Software Developer",
            "period": "Apr 2012 - Sep 2025",
            "description": "Developed and maintained complex data pipelines and CMS projects using Perl and Python."
        },
        {
            "company": "Mag Dvartisign",
            "role": "Web Developer",
            "period": "Jan 2010 - Apr 2012",
            "description": "Created bespoke websites and custom CMS solutions."
        }
    ],
    "side_quest": "Fëonor did nothing wrong."
};

const fileSystem = {
    "cv.json": JSON.stringify(cvJson, null, 2),
    "README.md": "Welcome to the interactive CV of Simeon Martev.\nType 'help' to see available commands."
};

const commands = {
    help: () => "Available commands:\n  help          - Show this help message\n  cat [file]    - Display file content (e.g., 'cat cv.json')\n  cv            - Shortcut for 'cat cv.json'\n  ls            - List files\n  clear         - Clear the terminal screen\n  whoami        - Display current user\n  feonor        - ???",
    ls: () => Object.keys(fileSystem).join("\n"),
    whoami: () => "visitor",
    feonor: () => "Fëonor did nothing wrong.",
    cv: () => highlightJson(fileSystem["cv.json"]),
    clear: () => {
        document.getElementById('output').innerHTML = "";
        return "";
    }
};

const terminal = document.getElementById('terminal');
const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('command-input');
const inputLine = document.getElementById('input-line');
const promptSpan = document.getElementById('prompt');
const cursor = document.querySelector('.blinking-cursor');

let commandHistory = [];
let historyIndex = -1;

// Utilities
const sleep = ms => new Promise(r => setTimeout(r, ms));

function escapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function linkify(text) {
    const urlRegex = /(https?:\/\/[^\s"]+)/g;
    return text.replace(urlRegex, (url) => {
        let cleanUrl = url;
        let suffix = "";
        if (url.endsWith('"') || url.endsWith("'")) {
            cleanUrl = url.slice(0, -1);
            suffix = url.slice(-1);
        }
        return `<a href="${cleanUrl}" target="_blank">${cleanUrl}</a>${suffix}`;
    });
}

function highlightJson(json) {
    if (typeof json !== 'string') {
        json = JSON.stringify(json, null, 2);
    }

    // First escape HTML entities in the raw JSON string
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'json-number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
                return `<span class="${cls}">${match.slice(0, -1)}</span><span class="json-bracket">:</span>`;
            } else {
                cls = 'json-string';
                if (match.match(/^"https?:/)) {
                    const url = match.slice(1, -1);
                    return `"<a href="${url}" target="_blank" class="json-string">${url}</a>"`;
                }
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-boolean';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        }
        return `<span class="${cls}">${match}</span>`;
    });
}

function printLine(content, type = 'text') {
    if (content === "") return;
    const line = document.createElement('div');

    if (type === 'command') {
        line.innerHTML = `<span style="color: #ff0099; margin-right: 10px;">${promptSpan.innerText}</span>${escapeHtml(content)}`;
    } else if (type === 'html') {
        line.innerHTML = content;
    } else {
        let processedText = escapeHtml(content);
        processedText = linkify(processedText);
        line.innerHTML = processedText;
    }

    outputDiv.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

async function typeText(text, element, speed = 50) {
    for (let char of text) {
        element.textContent += char;
        if (Math.random() > 0.95) await sleep(150);
        await sleep(speed);
    }
}

// Optimized LLM-style typing function
async function typeHtml(element, html, speed = 1) {
    // Regex to split into: 
    // 1. HTML Tags (<...>)
    // 2. HTML Entities (&...;)
    // 3. Regular text content
    const regex = /(<[^>]*>)|(&[^;]+;)|([^<&]+)/g;
    let match;
    let buffer = ""; // Build the HTML string incrementally
    let parts = [];

    // Pre-parse the HTML into a linear sequence of atomic parts
    while ((match = regex.exec(html)) !== null) {
        if (match[1]) {
            // Tag (e.g., <span class="json-key">)
            parts.push({ text: match[1], isTag: true });
        } else if (match[2]) {
            // Entity (e.g., &quot;)
            parts.push({ text: match[2], isTag: false });
        } else if (match[3]) {
            // Text content - split into chars for typing effect
            const text = match[3];
            for (let char of text) {
                parts.push({ text: char, isTag: false });
            }
        }
    }

    // Stream the parts
    for (let i = 0; i < parts.length; i++) {
        buffer += parts[i].text;

        // Only update DOM and pause if it's visible text (not a tag)
        // OR if it's the very last part (to ensure closure)
        if (!parts[i].isTag || i === parts.length - 1) {

            // Batching: Update DOM every N chars for performance in turbo mode
            // or every char if normal speed
            const isBatchUpdate = (i % 3 === 0) || (i === parts.length - 1);

            if (isBatchUpdate) {
                element.innerHTML = buffer;
                terminal.scrollTop = terminal.scrollHeight;

                // Speed control
                if (speed > 0) {
                    let delay = speed;
                    if (Math.random() > 0.99) delay += 30; // Occasional stutter
                    await sleep(delay);
                } else {
                    // Turbo mode: minimal yield to prevent UI freeze
                    if (i % 20 === 0) await sleep(0);
                }
            }
        }
    }
    // Final ensure
    element.innerHTML = buffer;
    terminal.scrollTop = terminal.scrollHeight;
}

// Ghost / Remote Viewer Logic
let ghostCursor;

function initGhostCursor() {
    ghostCursor = document.createElement('div');
    ghostCursor.id = 'ghost-cursor';
    document.body.appendChild(ghostCursor);

    // Start very soon after load (2 seconds)
    setTimeout(ghostSelectionLoop, 2000);

    // Ghost typing after 10-12 seconds
    setTimeout(ghostTypingLoop, 12000);
}

function ghostSelectionLoop() {
    // Very frequent interruptions: every 2s to 7s
    const delay = Math.random() * 5000 + 2000;
    setTimeout(async () => {
        await performGhostSelect();
        ghostSelectionLoop();
    }, delay);
}

async function performGhostSelect() {
    // Only target visible text parts (JSON colored elements)
    const targets = outputDiv.querySelectorAll('.json-key, .json-string, .json-number, .json-boolean');
    if (targets.length === 0) return;

    // Pick a random start
    const startIndex = Math.floor(Math.random() * targets.length);
    // Selection length (1-4 items)
    const length = Math.floor(Math.random() * 4) + 1;

    const selectedNodes = [];

    // Move cursor to start position first
    const startRect = targets[startIndex].getBoundingClientRect();
    if (startRect.top === 0 && startRect.bottom === 0) return; // Element hidden/scrolled away

    ghostCursor.style.left = (startRect.left - 5) + 'px';
    ghostCursor.style.top = (startRect.top + startRect.height / 2 - 8) + 'px'; // Center vertically
    ghostCursor.style.display = 'block';

    await sleep(300); // Wait for cursor to arrive

    // Simulate dragging selection
    for (let i = 0; i < length; i++) {
        if (startIndex + i < targets.length) {
            const el = targets[startIndex + i];
            const rect = el.getBoundingClientRect();

            // Check if visible in viewport (rough check)
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                el.classList.add('ghost-selected');
                selectedNodes.push(el);

                // Move cursor along
                ghostCursor.style.left = (rect.right) + 'px';
                ghostCursor.style.top = (rect.top + rect.height / 2 - 8) + 'px';

                // Random drag speed
                await sleep(Math.random() * 150 + 50);
            }
        }
    }

    // Hold selection (reading...)
    await sleep(Math.random() * 1500 + 1000);

    // Deselect
    selectedNodes.forEach(el => el.classList.remove('ghost-selected'));
    ghostCursor.style.display = 'none';
}

async function ghostTypingLoop() {
    // Only type if input is empty and not angry mode (idle)
    if (commandInput.value === '' && !document.body.classList.contains('angry-mode')) {
        await performGhostTyping();
    }
    // Repeat rarely (30s - 60s)
    setTimeout(ghostTypingLoop, Math.random() * 30000 + 30000);
}

async function performGhostTyping() {
    const phrases = ["who is this?", "help", "is anyone there?", "stop watching", "system_reset"];
    const text = phrases[Math.floor(Math.random() * phrases.length)];

    // Simulate typing
    for (let char of text) {
        // If user interrupts (starts typing), abort immediately
        if (commandInput.value !== text.substring(0, commandInput.value.length)) {
            return;
        }

        commandInput.value += char;
        updateCursor();

        // Random typing speed with hesitations
        await sleep(Math.random() * 150 + 50);
    }

    await sleep(1000); // Hesitate after finishing

    // Delete quickly
    while (commandInput.value.length > 0) {
        // If user interrupts, abort
        if (!text.startsWith(commandInput.value)) {
            return;
        }

        commandInput.value = commandInput.value.slice(0, -1);
        updateCursor();
        await sleep(50); // Fast delete
    }
}

async function typeCommand(text) {
    commandInput.value = "";
    for (let char of text) {
        commandInput.value += char;
        updateCursor();
        if (Math.random() > 0.9) await sleep(100);
        await sleep(30 + Math.random() * 50);
    }
    await sleep(200);
    const val = commandInput.value;
    commandInput.value = "";
    updateCursor();

    // Special handling for the boot sequence cv.json
    if (val === "cat cv.json") {
        printLine(val, 'command');
        // Manually trigger the typing effect for this specific boot command
        const content = highlightJson(fileSystem["cv.json"]);
        const line = document.createElement('div');
        outputDiv.appendChild(line);

        // Disable input while typing output
        commandInput.disabled = true;

        // Turbo speed: 0ms base delay, token batching handles the rest
        await typeHtml(line, content, 0);

        commandInput.disabled = false;
        commandInput.focus();
    } else {
        processCommand(val, true);
    }
}

function processCommand(input, automated = false) {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    if (!automated) {
        printLine(trimmedInput, 'command');
        commandHistory.push(trimmedInput);
        historyIndex = commandHistory.length;
    }

    const args = trimmedInput.split(' ');
    const cmd = args[0].toLowerCase();

    if (cmd === 'cat') {
        const file = args[1];
        if (file && fileSystem[file]) {
            if (file.endsWith('.json')) {
                printLine(highlightJson(fileSystem[file]), 'html');
            } else {
                printLine(fileSystem[file], 'text');
            }
        } else if (file) {
            printLine(`cat: ${file}: No such file or directory`, 'text');
        } else {
            printLine("usage: cat [file]", 'text');
        }
    } else if (commands[cmd]) {
        const result = commands[cmd]();
        if (cmd === 'cv') {
            printLine(result, 'html');
        } else {
            printLine(result, 'text');
        }
    } else {
        printLine(`command not found: ${cmd}`, 'text');
    }
}

async function bootSequence() {
    commandInput.disabled = true;
    inputLine.style.display = 'none';

    // 1. Initial wait
    const tempCursorLine = document.createElement('div');
    tempCursorLine.innerHTML = '<span class="blinking-cursor" style="position:relative; display:inline-block;"></span>';
    outputDiv.appendChild(tempCursorLine);

    await sleep(CONFIG.bootPause);

    outputDiv.removeChild(tempCursorLine);

    // 2. Welcome message
    const welcomeMsg = [
        "Welcome to Smartev Terminal v1.0.0",
        "Type 'help' for available commands."
    ];

    for (const msg of welcomeMsg) {
        const line = document.createElement('div');
        outputDiv.appendChild(line);
        await typeText(msg, line, 30);
        await sleep(300);
    }

    await sleep(1000);

    // 3. Reveal Prompt & Input
    inputLine.style.display = 'flex';

    // 4. Simulate user typing 'cat cv.json'
    await typeCommand("cat cv.json");

    // 5. Enable input (handled inside typeCommand)
    if (!commandInput.disabled) {
        commandInput.focus();
    }
}

// Input Handling
commandInput.addEventListener('keydown', (e) => {
    resetIdleTimer(); // Activity detected

    if (e.key === 'Enter') {
        const cmd = commandInput.value;
        commandInput.value = '';
        updateCursor();
        processCommand(cmd);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex];
            updateCursor();
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex];
            updateCursor();
        } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
            updateCursor();
        }
    }
});

commandInput.addEventListener('input', () => {
    updateCursor();
    resetIdleTimer();
});

function updateCursor() {
    const textLength = commandInput.value.length;
    cursor.style.transform = `translateX(${textLength}ch)`;
}

// Keep focus and track idle
document.addEventListener('click', (e) => {
    resetIdleTimer();
    if (e.target.tagName === 'A') return;
    if (window.getSelection().toString() === '') {
        commandInput.focus();
    }
});

document.addEventListener('mousemove', resetIdleTimer);

// Idle Timer Logic
let idleTimer;
const IDLE_TIMEOUT = 10000; // 10 seconds

function resetIdleTimer() {
    document.body.classList.remove('angry-mode');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        document.body.classList.add('angry-mode');
    }, IDLE_TIMEOUT);
}

// Start
window.onload = () => {
    bootSequence();
    initGhostCursor(); // Initialize the ghost
    resetIdleTimer();
};
