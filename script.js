// Custom Cursor Logic
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.project-card') || e.target.closest('.launch-btn') || e.target.closest('h1')) {
        cursor.classList.add('active');
    } else {
        cursor.classList.remove('active');
    }
});

// Header Scramble Effect
const headerTitle = document.querySelector('.header h1');
const originalText = headerTitle.innerText;
const chars = "!<>-_\\/[]{}—=+*^?#________";

headerTitle.addEventListener('mouseover', () => {
    let iteration = 0;
    const interval = setInterval(() => {
        headerTitle.innerText = originalText.split("")
            .map((letter, index) => {
                if(index < iteration) return originalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        
        if(iteration >= originalText.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 30);
});

headerTitle.addEventListener('mouseleave', () => {
    headerTitle.innerText = originalText;
});

// Clock logic
setInterval(() => {
    const now = new Date();
    const clockEl = document.getElementById('clock');
    if(clockEl) clockEl.innerText = `SYSTEM_TIME: ${now.toLocaleTimeString()}`;
}, 1000);


// Projects injection
const projects = [
    { id: "01", name: "Dynamic Forms", path: "forms/index.html", tags: ["HTML", "Forms"], complexity: "Basic" },
    { id: "02", name: "Event Bubbling", path: "event-bubbling/index.html", tags: ["JS", "Events"], complexity: "Basic" },
    { id: "03", name: "Bubbling & Capturing", path: "bubbling-capturing/index.html", tags: ["JS", "Theory"], complexity: "Basic" },
    { id: "04", name: "Keyboard Events", path: "keyboard-events/index.html", tags: ["JS", "Input"], complexity: "Simple" },
    { id: "05", name: "Live Char Count", path: "live-character-count/index.html", tags: ["Logic", "Strings"], complexity: "Simple" },
    { id: "06", name: "Mouse Visualizer", path: "mouse-events-visualizer/index.html", tags: ["Events", "DOM"], complexity: "Simple" },
    { id: "07", name: "Upload Animation", path: "upload-button-animation/index.html", tags: ["CSS", "Transition"], complexity: "Simple" },
    { id: "08", name: "Download Progress", path: "download-progress-bar/index.html", tags: ["Logic", "UI"], complexity: "Moderate" },
    { id: "09", name: "Focus Timer", path: "Timer/index.html", tags: ["Intervals", "State"], complexity: "Moderate" },
    { id: "10", name: "Form Validator", path: "form-validator/index.html", tags: ["Regex", "Logic"], complexity: "Moderate" },
    { id: "11", name: "Profile Card Gen", path: "profile-card-generator/index.html", tags: ["DOM", "Inputs"], complexity: "Moderate" },
    { id: "12", name: "Theme Switcher", path: "theme-change/index.html", tags: ["Storage", "UX"], complexity: "Moderate" },
    { id: "13", name: "Interactive Particles", path: "interactive-particles/index.html", tags: ["Animation", "Visuals"], complexity: "Advanced" },
    { id: "14", name: "Particle Swarm Web", path: "particle-swarm-web/index.html", tags: ["Canvas", "Math"], complexity: "Advanced" },
    { id: "15", name: "Physics Swarm", path: "physics-particle-swarm/index.html", tags: ["Physics", "Canvas"], complexity: "Advanced" },
    { id: "16", name: "Neon Network Explore", path: "neon-network-explore/index.html", tags: ["Canvas", "UX"], complexity: "Expert" },
    { id: "17", name: "Quantum Particle HUD", path: "quantum-particle-hud/index.html", tags: ["HUD", "Complex Math"], complexity: "Expert" },
    { id: "18", name: "3D Flux Dashboard", path: "3d-flux-dashboard/index.html", tags: ["Three.js", "WebGL"], complexity: "Expert" }
];

const grid = document.getElementById('project-grid');
if(grid) {
    grid.innerHTML = projects.map(proj => `
        <div class="project-card">
            <span class="id">UID: ${proj.id} | ${proj.complexity}</span>
            <h3>${proj.name}</h3>
            <div class="tags">
                ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${proj.path}" class="launch-btn" target="_blank">> RUN_SCRIPT</a>
        </div>
    `).join('');
}

// Global Spasm Logic
setInterval(() => {
    if (Math.random() > 0.96) {
        document.body.classList.add('glitch-active');
        setTimeout(() => {
            document.body.classList.remove('glitch-active');
        }, 150);
    }
}, 1000);

// Boot screen
const bootScreen = document.getElementById('boot-screen');
const bootLines = document.querySelectorAll('.typewriter');
bootLines.forEach((line, i) => line.style.animationDelay = `${i * 0.4}s`);
setTimeout(() => {
    if(bootScreen) {
        bootScreen.style.opacity = '0';
        bootScreen.style.transition = 'opacity 0.5s';
        setTimeout(() => bootScreen.classList.add('hidden'), 500);
    }
}, (bootLines.length * 400) + 1000);
