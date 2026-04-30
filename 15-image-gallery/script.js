const crew = [
    {
        name: "MONKEY D. LUFFY",
        role: "Captain",
        bounty: "3,000,000,000",
        quote: "I'm going to be the Pirate King!",
        img: "assets/luffy1.jpg"
    },
    {
        name: "RORONOA ZORO",
        role: "Swordsman",
        bounty: "1,111,000,000",
        quote: "Scars on the back are a swordsman's shame.",
        img: "assets/zoro.jpg"
    },
    {
        name: "NAMI",
        role: "Navigator",
        bounty: "366,000,000",
        quote: "I want to draw a map of the entire world!",
        img: "assets/nami.jpg"
    },
    {
        name: "GOD USOPP",
        role: "Sniper",
        bounty: "500,000,000",
        quote: "I am the Great Captain Usopp!",
        img: "assets/god.jpg"
    },
    {
        name: "VINSMOKE SANJI",
        role: "Cook",
        bounty: "1,032,000,000",
        quote: "Messing with a cook of the sea is a death sentence.",
        img: "assets/sanji.jpg"
    },
    {
        name: "TONY TONY CHOPPER",
        role: "Doctor",
        bounty: "1,000",
        quote: "I'll become a doctor who can cure any disease!",
        img: "assets/chopper.jpg"
    },
    {
        name: "NICO ROBIN",
        role: "Archaeologist",
        bounty: "930,000,000",
        quote: "I want to live!",
        img: "assets/robin.jpg"
    },
    {
        name: "FRANKY",
        role: "Shipwright",
        bounty: "394,000,000",
        quote: "I'm super!",
        img: "assets/franky.jpg"
    },
    {
        name: "BROOK",
        role: "Musician",
        bounty: "383,000,000",
        quote: "Yohohoho! May I see your panties?",
        img: "assets/brook.jpg"
    },
    {
        name: "JINBE",
        role: "Helmsman",
        bounty: "1,100,000,000",
        quote: "I will protect Luffy-kun with my life!",
        img: "assets/jinbe.jpg"
    }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('bio-modal');

// Inject Cards
crew.forEach((member, index) => {
    const card = document.createElement('div');
    card.className = 'poster-card';
    card.innerHTML = `
        <div class="poster-inner">
            <div class="poster-header">WANTED</div>
            <div class="img-container">
                <img src="${member.img}" alt="${member.name}">
            </div>
            <div class="poster-footer">
                <div class="poster-name">${member.name.split(' ').pop()}</div>
                <div class="bounty-text">฿ ${member.bounty}</div>
            </div>
        </div>
    `;
    card.onclick = () => openBio(index);
    gallery.appendChild(card);
});

function openBio(index) {
    const member = crew[index];
    document.getElementById('modal-img').src = member.img;
    document.getElementById('modal-name').innerText = member.name;
    document.getElementById('modal-role').innerText = member.role;
    document.getElementById('modal-quote').innerText = `"${member.quote}"`;
    document.getElementById('modal-bounty').innerText = member.bounty;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeBio() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBio();
});
