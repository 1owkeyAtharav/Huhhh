// ---------------- MUSIC ----------------
const playlist = ["song1.mp3", "song2.mp3"];
let currentSong = 0;
const player = document.getElementById("musicPlayer");

function playSong() {
    player.src = playlist[currentSong];
    player.play();
}

player.addEventListener("ended", function () {
    currentSong = (currentSong + 1) % playlist.length;
    playSong();
});

playSong();

// ---------------- SHOW SURPRISE ----------------
function showSurprise() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    // Page 1 fade out
    page1.style.opacity = 0;
    page1.style.transform = "scale(0.95)";

    setTimeout(() => {
        page1.style.display = "none";

        // Page 2 fade in
        page2.style.opacity = 1;
        page2.style.transform = "scale(1)";
        page2.style.zIndex = 2;

        // Card pop-in
        page2.classList.add("show");

        // Wish fade-in
        const wish = document.querySelector(".wish");
        wish.style.animation = "none";
        void wish.offsetWidth;
        wish.style.animation = "fadeInText 2s forwards 0.5s";
    }, 1000);

    // Generate floating hearts
    generateHearts(20);
}

// ---------------- FLOATING HEARTS ----------------
function generateHearts(num) {
    const container = document.querySelector(".floating-hearts");
    for (let i = 0; i < num; i++) {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (10 + Math.random() * 20) + "px";
        heart.style.animationDuration = (3 + Math.random() * 5) + "s";
        container.appendChild(heart);
    }
}
const sparklesContainer = document.querySelector(".sparkles");
for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("span");
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = 2 + Math.random() * 2 + "s";
    sparklesContainer.appendChild(sparkle);
}
