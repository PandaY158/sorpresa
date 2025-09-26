window.onload = () => {
    const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    const poemText = "Tu sonrisa florece en mi pecho,\n" +
        "como un girasol buscando al sol,\n" +
        "y en tu abrazo encuentro\n" +
        "el hogar que siempre soñé.";

    const poemElement = document.getElementById("poem-text");
    const root = document.documentElement;
    let charIndex = 0;
    const typingSpeed = 80;

    const stemHeights = {
        'flower--1': 70,
        'flower--2': 60,
        'flower--3': 55
    };

    function typeWriter() {
        if (charIndex < poemText.length) {
            poemElement.innerHTML += poemText.charAt(charIndex);
            charIndex++;

            const totalProgress = charIndex / poemText.length;
            const stemProgress = totalProgress;
            const leafProgress = Math.max(0, (totalProgress - 0.2) / 0.8);
            const flowerProgress = Math.max(0, (totalProgress - 0.5) / 0.5);

            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                const currentHeight = baseHeight * stemProgress;
                flower.querySelector('.flower__line').style.height = `${currentHeight}vmin`;
            });

            root.style.setProperty('--leaf-growth', leafProgress.toFixed(2));
            root.style.setProperty('--flower-growth', flowerProgress.toFixed(2));

            setTimeout(typeWriter, typingSpeed);
        } else {
            poemElement.classList.add("typing-done");
            root.style.setProperty('--leaf-growth', 1);
            root.style.setProperty('--flower-growth', 1);
            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                flower.querySelector('.flower__line').style.height = `${baseHeight}vmin`;
            });
        }
    }
    typeWriter();

    // ⭐ Crear estrellas
    function createStars() {
        const night = document.querySelector('.night');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            night.appendChild(star);
        }
    }
    createStars();

    // ✨ Crear partículas flotantes
    function createParticles() {
        const container = document.querySelector('.particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 6}s`;
            container.appendChild(particle);
        }
    }
    createParticles();

    // 🎶 Música
    const musicBtn = document.getElementById("music-btn");
    const music = document.getElementById("bg-music");
    let isPlaying = false;
    musicBtn.addEventListener("click", () => {
        if (isPlaying) {
            music.pause();
            musicBtn.textContent = "🎵";
        } else {
            music.play();
            musicBtn.textContent = "⏸️";
        }
        isPlaying = !isPlaying;
    });

    // ❤️ Mensaje secreto
    const secretBtn = document.getElementById("secret-btn");
    const secretMessage = document.getElementById("secret-message");
    secretBtn.addEventListener("click", () => {
        secretMessage.classList.toggle("show");
    });
};

// Mostrar el cuadro al hacer clic en el botón ❤️
document.getElementById("secret-btn").addEventListener("click", function() {
  document.getElementById("secret-message").style.display = "block";
});

// Acciones de los botones
document.getElementById("btnSi").addEventListener("click", function() {
  alert(" manda un corazon al whatsapp");
});

document.getElementById("btnNo").addEventListener("click", function() {
  alert("");
});
