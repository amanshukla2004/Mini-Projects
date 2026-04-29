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

function createProjectCard(proj) {
    return `
        <div class="project-card">
            <span class="id">UID: ${proj.id} | ${proj.complexity}</span>
            <h3>${proj.name}</h3>
            <div class="tags">
                ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${proj.path}" class="launch-btn" target="_blank">> RUN_SCRIPT</a>
        </div>
    `;
}

// Initialize grid
grid.innerHTML = projects.map(proj => createProjectCard(proj)).join('');

// Clock
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = `SYSTEM_TIME: ${now.toLocaleTimeString()}`;
}, 1000);

// Boot screen logic
const bootScreen = document.getElementById('boot-screen');
const lines = document.querySelectorAll('.typewriter');

lines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.4}s`;
});

setTimeout(() => {
    bootScreen.style.opacity = '0';
    bootScreen.style.transition = 'opacity 0.5s ease';
    setTimeout(() => bootScreen.classList.add('hidden'), 500);
}, (lines.length * 400) + 1000);
