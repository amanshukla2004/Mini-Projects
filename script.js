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
    { id: "01", name: "Counter Button", path: "01-counter-button/index.html", tags: ["HTML", "JS", "Basics"], complexity: "Basic" },
    { id: "02", name: "Live Char Count", path: "02-live-char-count/index.html", tags: ["Logic", "Strings"], complexity: "Basic" },
    { id: "03", name: "Theme Switcher", path: "03-theme-switcher/index.html", tags: ["Storage", "UX"], complexity: "Basic" },
    { id: "04", name: "Dynamic Forms", path: "04-dynamic-forms/index.html", tags: ["HTML", "Forms"], complexity: "Basic" },
    { id: "05", name: "Hire Me Button", path: "05-hire-me-button/index.html", tags: ["CSS", "Interactivity"], complexity: "Basic" },
    { id: "06", name: "Keyboard Events", path: "06-keyboard-events/index.html", tags: ["JS", "Input"], complexity: "Simple" },
    { id: "07", name: "Mouse Visualizer", path: "07-mouse-visualizer/index.html", tags: ["Events", "DOM"], complexity: "Simple" },
    { id: "08", name: "Event Bubbling", path: "08-event-bubbling/index.html", tags: ["JS", "Events"], complexity: "Simple" },
    { id: "09", name: "Bubbling & Capturing", path: "09-bubbling-capturing/index.html", tags: ["JS", "Theory"], complexity: "Simple" },
    { id: "10", name: "Upload Animation", path: "10-upload-animation/index.html", tags: ["CSS", "Transition"], complexity: "Simple" },
    { id: "11", name: "Download Progress", path: "11-download-progress/index.html", tags: ["Logic", "UI"], complexity: "Moderate" },
    { id: "12", name: "Focus Timer", path: "12-focus-timer/index.html", tags: ["Intervals", "State"], complexity: "Moderate" },
    { id: "13", name: "Form Validator", path: "13-form-validator/index.html", tags: ["Regex", "Logic"], complexity: "Moderate" },
    { id: "14", name: "Profile Card Gen", path: "14-profile-card-gen/index.html", tags: ["DOM", "Inputs"], complexity: "Moderate" },
    { id: "15", name: "Image Gallery", path: "15-image-gallery/index.html", tags: ["Layout", "CSS"], complexity: "Moderate" },
    { id: "16", name: "Parallax V1", path: "16-parallax-v1/index.html", tags: ["CSS", "Effect"], complexity: "Moderate" },
    { id: "17", name: "Parallax V2", path: "17-parallax-v2/index.html", tags: ["Scrolling", "Visuals"], complexity: "Advanced" },
    { id: "18", name: "Portfolio V1", path: "18-portfolio-v1/index.html", tags: ["Web Design", "Layout"], complexity: "Advanced" },
    { id: "19", name: "Interactive Particles", path: "19-interactive-particles/index.html", tags: ["Animation", "Visuals"], complexity: "Advanced" },
    { id: "20", name: "Particle Swarm Web", path: "20-particle-swarm-web/index.html", tags: ["Canvas", "Math"], complexity: "Advanced" },
    { id: "21", name: "Physics Swarm", path: "21-physics-swarm/index.html", tags: ["Physics", "Canvas"], complexity: "Advanced" },
    { id: "22", name: "Neon Network", path: "22-neon-network/index.html", tags: ["Canvas", "UX"], complexity: "Expert" },
    { id: "23", name: "Quantum Particle HUD", path: "23-quantum-particle-hud/index.html", tags: ["HUD", "Complex Math"], complexity: "Expert" },
    { id: "24", name: "3D Flux Dashboard", path: "24-3d-flux-dashboard/index.html", tags: ["Three.js", "WebGL"], complexity: "Expert" }
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
