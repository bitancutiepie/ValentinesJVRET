document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');
    const passcodeInput = document.getElementById('passcode-input');
    const scrapbookCard = document.getElementById('scrapbook-card');
    const flowerOverlay = document.getElementById('flower-overlay');

    // DOM elements to personalize
    const letterTitle = document.getElementById('letter-title');
    const letterBody = document.getElementById('letter-body');
    const stickerTopLeft = document.getElementById('sticker-top-left');
    const stickerMidLeft = document.getElementById('sticker-mid-left');
    const stickerBottomRight = document.getElementById('sticker-bottom-right');
    const origamiLetter = document.getElementById('origami-letter');

    // ============================================================
    //  PERSONALIZED CARD DATA - Edit each person's content here
    // ============================================================
    const valentines = {
        'tee gisinggg': {
            name: 'Chynne',
            heartLetter: 'C',
            title: "Dear Chynne",
            body: `
                <p>HELLOOO MADER?? HUWATT AHHAAH. Ayan para bawas bitter naman and also me being thankful for everythingggg wellll Happy Valentines! 🌸</p>
                <p>I hope you'll attain your dreams and sana makadaan ka sa daan ng tagumpay AHAHAHAHHA. You really are a very good friend to me and talagang napaka mother aura from all the kulitans to hampasan TOOOO SAKALANNN AHHAHAAHAH kahit na ganonnn I appreciate everything and I hope you never stop to show that kind of self.</p>
                <p>Ikaw ang nagsisilbing pinakabalance sa circle natin sa side natin thanks for your cheerful auraaaa and shempreng ang iyong walastik na tawaaaa ayun lang HAPPYYYY VALENTINESSS PO! ♥</p>
            `,
            stickerTopLeft: 'letterpics/chynne/image.png',
            stickerMidLeft: 'letterpics/chynne/image copy.png',
            stickerBottomRight: 'letterpics/chynne/image copy 2.png',
            // 🌸 Cherry blossom — soft pink + Hello Kitty
            theme: {
                borderColor: '#f9a8d4',
                bgTint: '#fff5f9',
                titleColor: '#be185d',
                bodyColor: '#1f1215',
                pinGradient: 'radial-gradient(circle at 40% 35%, #fbcfe8 0%, #ec4899 60%, #be185d 100%)',
                lineColor: 'rgba(219, 39, 119, 0.08)',
                motif: '🌸',
                titleFont: "'Dancing Script', cursive",
                sanrioStickers: [
                    'stickers/hello-kitty-transparent-background-8.png',
                    'stickers/stick1.png',
                    'stickers/stick2.png',
                    'stickers/main.png',
                    'stickers/stick3.png',
                    'stickers/stick4.png'
                ]
            }
        },
        'okie na, thankies': {
            name: 'Kyla',
            heartLetter: 'K',
            title: "Dear Kyla",
            body: `
                <p>Happy Valentines, I just want to thank you for everything ever since pa nung senior high school natin. You have been a really good friend and a sister to me AHAHAHAHA. 💗</p>
                <p>Napakalupet ng ating friendship and I really appreciate it. Suri guys ha at wala ako maigift sainyo despite ng mga nireregalo niyo or binibigay sakin AHAHAHA So dito nalang ako babawi sa forte ko. Sana po wag niyo na akong saktan masyado tao lang po ako huhuhuhu charrrr AHAHHAHAHA</p>
                <p>Again Happy Valentines! I hope you'll find your love that you are longing pero kung walang-wala na ay don kana sa afam mo. You deserve to be loved and appreciated inverter na tao AHAHAHAAH BYEEE! ♥</p>
            `,
            stickerTopLeft: 'letterpics/kyla/13cadb3b-7c4e-47a1-81e8-c6484ec420d5.jpg',
            stickerMidLeft: 'letterpics/kyla/36420b58-6d7b-46c7-b4d6-4a87a84ce0c5.jpg',
            stickerBottomRight: 'letterpics/kyla/e4dd36a1-356e-4169-8b4c-fabd299bb9b6.jpg',
            // 💜 Lavender — soft purple + My Melody
            theme: {
                borderColor: '#c4b5fd',
                bgTint: '#faf5ff',
                titleColor: '#6d28d9',
                bodyColor: '#1a1525',
                pinGradient: 'radial-gradient(circle at 40% 35%, #ddd6fe 0%, #8b5cf6 60%, #6d28d9 100%)',
                lineColor: 'rgba(124, 58, 237, 0.08)',
                motif: '💜',
                titleFont: "'Caveat', cursive",
                sanrioStickers: [
                    'stickers/character_profile_mymelody.png',
                    'stickers/sanrio-my-melody-shy-512x512.png',
                    'stickers/stick3.png',
                    'stickers/stick4.png',
                    'stickers/stick1.png',
                    'stickers/stick2.png'
                ]
            }
        },
        'tyyy': {
            name: 'Leann',
            heartLetter: 'L',
            title: "Dear Leann",
            body: `
                <p>HIII LIYANCHI, sana di naman to makasama sa iyong bebeloves pero HAPPYYYY VALENTINESSSS as a friend! 🎀</p>
                <p>I just want to thank you for everythinggg lalo na sa help sa acads and everything. I loveee how soft and somehow dragon sided you are HAHAAHAHAH. I hope na you'll still continue to be a cheerfullll and a bubbly personnnn and sana is maging paldo tayo sa pag cocoding sa kung ano man ang dalhin natinnnn ikaw ang most trusted ko na classmate when it comes to our projecttts.</p>
                <p>I appreciate everythinggg you have done ever since the start. Thank yuuuuu and Happy valentinesss enjoy kayo ng imong bebe! ♥</p>
            `,
            stickerTopLeft: 'letterpics/leann/image.png',
            stickerMidLeft: 'letterpics/leann/image copy.png',
            stickerBottomRight: 'letterpics/leann/image copy 2.png',
            // 🌿 Mint — fresh green + Cinnamoroll
            theme: {
                borderColor: '#86efac',
                bgTint: '#f0fdf4',
                titleColor: '#15803d',
                bodyColor: '#111a14',
                pinGradient: 'radial-gradient(circle at 40% 35%, #bbf7d0 0%, #22c55e 60%, #15803d 100%)',
                lineColor: 'rgba(22, 163, 74, 0.08)',
                motif: '🌿',
                titleFont: "'Dancing Script', cursive",
                sanrioStickers: [
                    'stickers/Cinnamoroll-Christmas-Sanrio-PNG-Photo.png',
                    'stickers/Mv-cinnamon.webp',
                    'stickers/stick1.png',
                    'stickers/stick2.png',
                    'stickers/main.png',
                    'stickers/stick3.png'
                ]
            }
        },
        'ok': {
            name: 'Kristine',
            heartLetter: 'K',
            title: "Dear Kristine",
            body: `
                <p>Haluuu TIn, well first sana is di to makasama sa iyong boyfiee this letter is just as a "friend" shet HAHAHAAHAH. 🌷</p>
                <p>Thank you for everythinggggg and sana maging praning ka pa lalo kasi yan talaga ang branding mooo AHAHAHAHAA I hope you know how unintentionally funny you are lalo na pag may gawaan ng project and shempre lalo na sa mga byahe-byahe AHAHAHAAHAH.</p>
                <p>Happy Valentines! I hope is maging okay ang relationship mo ng bf mo and continue to strive sa acads wag lagi mahiya mag tanong at mapressureee be confident hihi ♥</p>
            `,
            stickerTopLeft: 'letterpics/kristine/image.png',
            stickerMidLeft: 'letterpics/kristine/image copy.png',
            stickerBottomRight: 'letterpics/kristine/image copy 2.png',
            // 🍑 Peach — warm coral + Kuromi
            theme: {
                borderColor: '#fdba74',
                bgTint: '#fff7ed',
                titleColor: '#c2410c',
                bodyColor: '#1a1310',
                pinGradient: 'radial-gradient(circle at 40% 35%, #fed7aa 0%, #f97316 60%, #c2410c 100%)',
                lineColor: 'rgba(234, 88, 12, 0.08)',
                motif: '🌷',
                titleFont: "'Caveat', cursive",
                sanrioStickers: [
                    'stickers/Kuromi_render.png',
                    'stickers/stick3.png',
                    'stickers/stick4.png',
                    'stickers/main.png',
                    'stickers/stick1.png',
                    'stickers/stick2.png'
                ]
            }
        },
        'mag papasa ka na nung sa long envelope?': {
            name: 'Riana',
            heartLetter: 'R',
            title: "Dear Riana",
            body: `
                <p>Halu Kabuteeee HAPPYY HAPPY VALENTINESSS SA IMOONG TANANNN. 🌹</p>
                <p>I just want to reminddd you na napakabuti mong tao at napa busilakk, well sa pov ko HAHAHAHAAHA. I hope you will find the love that you want and to achieve your dreamss. KAHITT naa napakainverterrr mo na taooo I appreciate the way you are thankful to have us and lalo na ako as a friend and kitang-kita ko yon especially whenever my acads involved kasi napakasobrang appreciative mo and sobrang thankful na tao.</p>
                <p>Happy Valentinesss Rianaaa pasinya na eto ang akin attt walaa ako pang gift sainyo AHAHAHAHHA byeee! ♥</p>
            `,
            stickerTopLeft: 'letterpics/riana/image.png',
            stickerMidLeft: 'letterpics/riana/image copy.png',
            stickerBottomRight: 'letterpics/riana/image copy 2.png',
            // 🌹 Rose — deep romantic red + Pompompurin
            theme: {
                borderColor: '#fca5a5',
                bgTint: '#fef2f2',
                titleColor: '#b91c1c',
                bodyColor: '#1a1111',
                pinGradient: 'radial-gradient(circle at 40% 35%, #fecaca 0%, #ef4444 60%, #b91c1c 100%)',
                lineColor: 'rgba(220, 38, 38, 0.08)',
                motif: '🌹',
                titleFont: "'Dancing Script', cursive",
                sanrioStickers: [
                    'stickers/stick1.png',
                    'stickers/stick2.png',
                    'stickers/stick3.png',
                    'stickers/stick4.png',
                    'stickers/main.png',
                    'stickers/hello-kitty-transparent-background-8.png'
                ]
            }
        }
    };

    // ============================================================
    //  LANDING PAGE ANIMATIONS
    // ============================================================

    // Generate sparkles
    function createSparkles() {
        const container = document.getElementById('sparkles');
        if (!container) return;
        for (let i = 0; i < 30; i++) {
            const s = document.createElement('div');
            s.className = 'sparkle';
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDelay = (Math.random() * 4) + 's';
            s.style.animationDuration = (1.5 + Math.random() * 2) + 's';
            s.style.width = (4 + Math.random() * 6) + 'px';
            s.style.height = s.style.width;
            container.appendChild(s);
        }
    }

    // Generate drifting hearts that float upward continuously
    function createDriftingHearts() {
        const container = document.getElementById('drifting-hearts');
        if (!container) return;
        const symbols = ['♥', '♡', '❤', '💕', '✿', '❀', '🌸'];
        const colors = ['#fca5a5', '#fda4af', '#f9a8d4', '#fbb6ce', '#feb2b2', '#fecdd3'];
        for (let i = 0; i < 15; i++) {
            const h = document.createElement('div');
            h.className = 'drifting-heart';
            h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            h.style.left = Math.random() * 100 + '%';
            h.style.fontSize = (14 + Math.random() * 28) + 'px';
            h.style.color = colors[Math.floor(Math.random() * colors.length)];
            h.style.animationDuration = (6 + Math.random() * 10) + 's';
            h.style.animationDelay = (Math.random() * 8) + 's';
            h.style.opacity = 0.3 + Math.random() * 0.4;
            container.appendChild(h);
        }
    }

    createSparkles();
    createDriftingHearts();

    // ============================================================
    //  FLOWER BLOOM TRANSITION
    // ============================================================

    function playFlowerBloom(callback) {
        if (!flowerOverlay) { callback(); return; }

        flowerOverlay.classList.add('active');

        // Create petals in a circle
        const petalColors = [
            '#f472b6', '#fb7185', '#f9a8d4', '#fda4af',
            '#f43f5e', '#e879a0', '#ec4899', '#fbbf24'
        ];

        const petalCount = 12;
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            const angle = (360 / petalCount) * i;
            petal.style.setProperty('--petal-rot', angle + 'deg');
            petal.style.background = petalColors[i % petalColors.length];
            petal.style.animation = `petalBloom 1.2s ease-out ${i * 0.08}s forwards`;
            flowerOverlay.appendChild(petal);
        }

        // Second ring of petals (smaller, offset)
        setTimeout(() => {
            for (let i = 0; i < petalCount; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';
                const angle = (360 / petalCount) * i + 15; // offset by 15deg
                petal.style.setProperty('--petal-rot', angle + 'deg');
                petal.style.background = petalColors[(i + 3) % petalColors.length];
                petal.style.width = '35px';
                petal.style.height = '60px';
                petal.style.animation = `petalBloom 1s ease-out ${i * 0.06}s forwards`;
                flowerOverlay.appendChild(petal);
            }
        }, 400);

        // Add falling petals after bloom completes
        setTimeout(() => {
            for (let i = 0; i < 40; i++) {
                const fp = document.createElement('div');
                fp.className = 'falling-petal';
                fp.style.left = Math.random() * 100 + '%';
                fp.style.top = '-5%';
                fp.style.background = petalColors[Math.floor(Math.random() * petalColors.length)];
                fp.style.width = (12 + Math.random() * 16) + 'px';
                fp.style.height = (18 + Math.random() * 20) + 'px';
                fp.style.animation = `fallingPetal ${2 + Math.random() * 3}s ease-in ${Math.random() * 1.5}s forwards`;
                fp.style.opacity = 0.6 + Math.random() * 0.4;
                flowerOverlay.appendChild(fp);
            }
        }, 1800);

        // Fade out the overlay and trigger callback
        setTimeout(() => {
            flowerOverlay.style.animation = 'overlayFadeOut 1s ease-out forwards';
            setTimeout(() => {
                flowerOverlay.classList.remove('active');
                flowerOverlay.style.display = 'none';
                callback();
            }, 1000);
        }, 3500);
    }

    // ============================================================
    //  INPUT & CODE HANDLING
    // ============================================================

    passcodeInput.focus();

    passcodeInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            checkCode();
        }
    });

    passcodeInput.addEventListener('input', () => {
        const value = passcodeInput.value.trim().toLowerCase();
        if (valentines[value]) {
            unlockGate(value);
        }
    });

    function checkCode() {
        const value = passcodeInput.value.trim().toLowerCase();
        if (valentines[value]) {
            unlockGate(value);
        } else {
            rejectCode();
        }
    }

    function rejectCode() {
        passcodeInput.classList.add('shake');
        passcodeInput.style.borderColor = '#ef4444';
        setTimeout(() => {
            passcodeInput.classList.remove('shake');
            passcodeInput.style.borderColor = '';
        }, 500);
    }

    let unlocked = false;
    function unlockGate(code) {
        if (unlocked) return;
        unlocked = true;

        // Personalize ALL content before showing
        const person = valentines[code];
        if (person) {
            if (letterTitle) letterTitle.textContent = person.title;
            if (letterBody) letterBody.innerHTML = person.body;
            if (stickerTopLeft) stickerTopLeft.src = person.stickerTopLeft;
            if (stickerMidLeft) stickerMidLeft.src = person.stickerMidLeft;
            if (stickerBottomRight) stickerBottomRight.src = person.stickerBottomRight;
            if (origamiLetter) origamiLetter.textContent = person.heartLetter;

            // Apply unique theme to the letter panel
            if (person.theme) {
                const t = person.theme;
                const panel = document.querySelector('.letter-panel');
                if (panel) {
                    panel.style.borderTopColor = t.borderColor;
                    panel.style.background = t.bgTint;
                    // Rebuild the lined paper background with the person's line color
                    panel.style.backgroundImage = `repeating-linear-gradient(transparent, transparent 27px, ${t.lineColor} 27px, ${t.lineColor} 28px)`;
                    panel.style.backgroundPosition = '0 2.5rem';
                }

                // Style the title
                if (letterTitle) {
                    letterTitle.style.color = t.titleColor;
                    letterTitle.style.fontFamily = t.titleFont;
                    letterTitle.style.borderBottomColor = t.borderColor + '99'; // 60% opacity
                    // Add decorative motif next to title
                    letterTitle.textContent = person.title + ' ' + t.motif;
                }

                // Style the body text
                if (letterBody) {
                    letterBody.style.color = t.bodyColor;
                }

                // Style push pins
                const pins = document.querySelectorAll('.push-pin');
                pins.forEach(pin => {
                    pin.style.background = t.pinGradient;
                });

                pins.forEach(pin => {
                    pin.style.background = t.pinGradient;
                });
            }
        }

        // Play background music
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            bgMusic.loop = true;
            bgMusic.volume = 0.5;
            bgMusic.play().catch(() => {
                document.addEventListener('click', () => bgMusic.play(), { once: true });
            });
        }

        // 1. Fade out landing page
        landingPage.classList.add('hidden-gate');

        // 2. After landing fades, show the FLOWER BLOOM first
        setTimeout(() => {
            landingPage.style.display = 'none';

            // 3. Play flower bloom, THEN show the scrapbook
            playFlowerBloom(() => {
                mainContent.classList.add('visible');
                animateScrapbookEntry();

                // Scatter stickers AFTER bloom
                if (person.theme && person.theme.sanrioStickers) {
                    scatterSanrioStickers(person.theme.sanrioStickers);
                }
            });
        }, 800);
    }

    function animateScrapbookEntry() {
        if (scrapbookCard) {
            scrapbookCard.style.animation = 'fadeInUp 1s ease-out forwards';
            // Add breathing animation after entry
            setTimeout(() => scrapbookCard.classList.add('alive'), 1200);
        }

        // Activate letter panel glow
        const panel = document.querySelector('.letter-panel');
        if (panel) {
            setTimeout(() => panel.classList.add('alive'), 1500);
        }

        // Add shimmer to title
        const title = document.getElementById('letter-title');
        if (title) {
            setTimeout(() => title.classList.add('title-shimmer'), 1800);
        }

        // Staggered paragraph reveal
        const body = document.getElementById('letter-body');
        if (body) {
            body.classList.add('letter-reveal');
            const paragraphs = body.querySelectorAll('p');
            paragraphs.forEach((p, i) => {
                p.style.animationDelay = `${1.2 + i * 0.4}s`;
            });
        }

        // Start floating background hearts
        createBgHearts();

        const elements = document.querySelectorAll('.element-enter');
        elements.forEach((el, i) => {
            el.style.animationDelay = `${0.3 + i * 0.15}s`;
        });
    }

    // ============================================================
    //  CONTINUOUS FLOATING HEARTS (page background)
    // ============================================================

    function createBgHearts() {
        const container = document.getElementById('bg-hearts');
        if (!container) return;

        const symbols = ['♥', '♡', '❤', '💕', '💗', '✿', '❀', '🌸', '💖'];
        const colors = ['#fca5a5', '#fda4af', '#f9a8d4', '#c4b5fd', '#86efac', '#fdba74', '#fecdd3'];

        function spawnHeart() {
            const heart = document.createElement('div');
            heart.className = 'bg-heart';
            heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (16 + Math.random() * 24) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            const duration = 8 + Math.random() * 12;
            heart.style.animationDuration = duration + 's';
            container.appendChild(heart);

            // Clean up after animation ends
            setTimeout(() => heart.remove(), duration * 1000);
        }

        // Spawn initial batch
        for (let i = 0; i < 8; i++) {
            setTimeout(() => spawnHeart(), i * 600);
        }

        // Continue spawning every 2-4 seconds
        setInterval(() => spawnHeart(), 2000 + Math.random() * 2000);
    }

    // ============================================================
    //  SCATTER SANRIO STICKERS AROUND LETTER PANEL
    // ============================================================

    function scatterSanrioStickers(stickerUrls) {
        // Use the body or a full-screen container
        const container = document.body;
        if (!stickerUrls || stickerUrls.length === 0) return;

        // FIXED POSITIONS (Corners + Mids) - Designed to frame the content beautifully
        const positions = [
            { top: '10px', left: '10px', width: 'clamp(80px, 15vmin, 160px)', rot: -15 },   // Top Left
            { top: '10px', right: '10px', width: 'clamp(80px, 15vmin, 160px)', rot: 15 },   // Top Right
            { bottom: '10px', left: '10px', width: 'clamp(90px, 16vmin, 180px)', rot: 10 }, // Bottom Left
            { bottom: '10px', right: '10px', width: 'clamp(90px, 16vmin, 180px)', rot: -10 },// Bottom Right
            { top: '45%', left: '10px', width: 'clamp(60px, 12vmin, 120px)', rot: -5 },      // Mid Left
            { top: '45%', right: '10px', width: 'clamp(60px, 12vmin, 120px)', rot: 5 }       // Mid Right
        ];

        // Use up to 6 stickers
        const count = Math.min(stickerUrls.length, positions.length);

        for (let i = 0; i < count; i++) {
            const img = document.createElement('img');
            img.src = stickerUrls[i];
            img.className = 'sanrio-sticker';
            img.alt = 'Sanrio sticker';

            const pos = positions[i];

            img.style.position = 'fixed';
            if (pos.top) img.style.top = pos.top;
            if (pos.bottom) img.style.bottom = pos.bottom;
            if (pos.left) img.style.left = pos.left;
            if (pos.right) img.style.right = pos.right;

            img.style.width = pos.width;
            img.style.height = 'auto';
            img.style.zIndex = '50'; // On top of content
            img.style.setProperty('--sticker-rot', pos.rot + 'deg');

            // Stagger animation
            img.style.animationDelay = `${i * 0.15}s`;

            container.appendChild(img);
        }
    }

    // ============================================================
    //  FALLING ROSE PETALS (background ambiance)
    // ============================================================
    function createFallingPetals() {
        const petalsContainer = document.getElementById('bg-petals');
        if (!petalsContainer) return;

        const petalColors = ['#fda4af', '#fb7185', '#f9a8d4', '#f472b6', '#fecdd3', '#fbb6ce'];
        const petalCount = 12;

        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'bg-falling-petal';
            const size = 10 + Math.random() * 14;
            petal.style.width = size + 'px';
            petal.style.height = (size * 1.4) + 'px';
            petal.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
            petal.style.background = petalColors[Math.floor(Math.random() * petalColors.length)];
            petal.style.left = (Math.random() * 100) + '%';
            petal.style.animationDuration = (6 + Math.random() * 8) + 's';
            petal.style.animationDelay = (Math.random() * 10) + 's';
            petalsContainer.appendChild(petal);
        }
    }
    createFallingPetals();
});
