// Cindore - Premium Novel Platform
// Immersive Web Experience with Interactive Features

// ==================== Data ====================
const novelsData = [
    {
        id: 100,
        title: '로사멜시 (Rosa Melsy)',
        author: 'Cindore',
        genre: 'romance',
        rating: 5.0,
        chapters: 24,
        views: 'NEW',
        status: '1권 오픈',
        tags: ['로맨스', '힐링', 'OST'],
        gradient: 'linear-gradient(135deg, #e8b4bc 0%, #b8a4c9 50%, #7eb8da 100%)',
        description: '겨울 딸기처럼 달콤하고, 피아노 선율처럼 아름다운 사계절 이야기',
        featured: true
    },
    {
        id: 1,
        title: '달빛 아래 검의 노래',
        author: '검향',
        genre: 'fantasy',
        rating: 4.9,
        chapters: 342,
        views: '2.3M',
        status: '연재중',
        tags: ['판타지', '무협'],
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #7eb8da 100%)',
        description: '달빛이 비추는 밤, 검은 노래한다.'
    },
    {
        id: 2,
        title: '회귀자의 세계정복',
        author: '은하수',
        genre: 'fantasy',
        rating: 4.8,
        chapters: 520,
        views: '5.1M',
        status: '완결',
        tags: ['현대판타지', '회귀'],
        gradient: 'linear-gradient(135deg, #7eb8da 0%, #a8cce0 100%)',
        description: '10년 후의 기억을 가진 채 돌아왔다.'
    },
    {
        id: 3,
        title: '별이 된 소녀',
        author: '달빛소나타',
        genre: 'romance',
        rating: 4.7,
        chapters: 156,
        views: '1.8M',
        status: '연재중',
        tags: ['로맨스', '힐링'],
        gradient: 'linear-gradient(135deg, #6a9fc4 0%, #d1d5db 100%)',
        description: '그녀는 밤하늘의 별이 되었다.'
    },
    {
        id: 4,
        title: '던전의 지배자',
        author: '다크나이트',
        genre: 'action',
        rating: 4.9,
        chapters: 890,
        views: '8.7M',
        status: '연재중',
        tags: ['액션', '던전'],
        gradient: 'linear-gradient(135deg, #8fb8d4 0%, #e2e8f0 100%)',
        description: '세계에서 가장 깊은 던전의 주인이 되다.'
    },
    {
        id: 5,
        title: '그림자 탐정사무소',
        author: '미스터리안',
        genre: 'mystery',
        rating: 4.6,
        chapters: 234,
        views: '1.2M',
        status: '연재중',
        tags: ['미스터리', '추리'],
        gradient: 'linear-gradient(135deg, #a8cce0 0%, #e2e8f0 100%)',
        description: '그림자 속에 숨겨진 진실을 찾아서.'
    },
    {
        id: 6,
        title: '마법학교의 낙오생',
        author: '마법사K',
        genre: 'fantasy',
        rating: 4.8,
        chapters: 445,
        views: '3.4M',
        status: '연재중',
        tags: ['판타지', '학원'],
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #b8c5d0 100%)',
        description: '재능 없는 자의 마법이 시작된다.'
    },
    {
        id: 7,
        title: '재벌가의 막내아들',
        author: '골드핑거',
        genre: 'romance',
        rating: 4.7,
        chapters: 312,
        views: '4.2M',
        status: '완결',
        tags: ['현대', '로맨스'],
        gradient: 'linear-gradient(135deg, #b8c5d0 0%, #e2e8f0 100%)',
        description: '모든 것을 가진 남자의 사랑 이야기.'
    },
    {
        id: 8,
        title: '무림의 절대고수',
        author: '강호객',
        genre: 'action',
        rating: 4.9,
        chapters: 678,
        views: '6.5M',
        status: '연재중',
        tags: ['무협', '액션'],
        gradient: 'linear-gradient(135deg, #4a8ab8 0%, #7eb8da 100%)',
        description: '천하제일의 무공을 향한 여정.'
    }
];

const animationsData = [
    {
        id: 1,
        title: 'LOVER (2024)',
        episode: 'Cindore 오리지널 애니메이션',
        duration: '12:40',
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #a8cce0 100%)',
        youtubeId: 'nHPXmV8SZTw',
        isNew: true,
        views: '1.2M'
    },
    {
        id: 2,
        title: '달빛 아래 검의 노래',
        episode: 'EP.1 - 운명의 시작',
        duration: '24:30',
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #7eb8da 100%)',
        views: '890K'
    },
    {
        id: 3,
        title: '달빛 아래 검의 노래',
        episode: 'EP.2 - 첫 번째 시련',
        duration: '23:45',
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #7eb8da 100%)',
        views: '756K'
    },
    {
        id: 4,
        title: '회귀자의 세계정복',
        episode: 'EP.1 - 돌아온 자',
        duration: '25:00',
        gradient: 'linear-gradient(135deg, #7eb8da 0%, #a8cce0 100%)',
        views: '1.5M'
    },
    {
        id: 5,
        title: '회귀자의 세계정복',
        episode: 'EP.2 - 새로운 시작',
        duration: '24:15',
        gradient: 'linear-gradient(135deg, #7eb8da 0%, #a8cce0 100%)',
        views: '1.2M'
    },
    {
        id: 6,
        title: '별이 된 소녀',
        episode: 'EP.1 - 별빛 아래서',
        duration: '22:30',
        gradient: 'linear-gradient(135deg, #6a9fc4 0%, #d1d5db 100%)',
        views: '680K'
    }
];

const musicData = [
    {
        id: 1,
        title: 'Winter Strawberry Life - Piano Solo',
        artist: 'Shin Yeseo',
        subtitle: '로사멜시(Rosa Melsy) OST',
        duration: '3:24',
        gradient: 'linear-gradient(135deg, #e8b4bc 0%, #b8a4c9 50%, #7eb8da 100%)',
        coverImage: 'https://i.scdn.co/image/ab67616d00001e02c008f0fbd1b7aac61eee33d2',
        spotifyEmbed: 'https://open.spotify.com/embed/track/3phDz67JfTXoNwTwRPT5UX?utm_source=generator&theme=0',
        isNew: true,
        featured: true
    },
    {
        id: 2,
        title: 'Moonlit Serenade',
        artist: 'Cindore Studio',
        subtitle: '달빛 아래 검의 노래 OST',
        duration: '4:12',
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #7eb8da 100%)'
    },
    {
        id: 3,
        title: 'Return of the Hero',
        artist: 'Cindore Studio',
        subtitle: '회귀자의 세계정복 OST',
        duration: '3:45',
        gradient: 'linear-gradient(135deg, #7eb8da 0%, #a8cce0 100%)'
    },
    {
        id: 4,
        title: 'Starlight Dreams',
        artist: 'Cindore Studio',
        subtitle: '별이 된 소녀 OST',
        duration: '3:28',
        gradient: 'linear-gradient(135deg, #6a9fc4 0%, #d1d5db 100%)'
    },
    {
        id: 5,
        title: 'Dungeon Conquest',
        artist: 'Cindore Studio',
        subtitle: '던전의 지배자 OST',
        duration: '4:05',
        gradient: 'linear-gradient(135deg, #8fb8d4 0%, #e2e8f0 100%)'
    },
    {
        id: 6,
        title: 'Shadow Mystery',
        artist: 'Cindore Studio',
        subtitle: '그림자 탐정사무소 OST',
        duration: '3:52',
        gradient: 'linear-gradient(135deg, #a8cce0 0%, #e2e8f0 100%)'
    }
];

const nftData = [
    {
        id: 1,
        title: '달빛검사 #001',
        rarity: 'legendary',
        price: '0.5 ETH',
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #7eb8da 100%)'
    },
    {
        id: 2,
        title: '회귀자 #042',
        rarity: 'epic',
        price: '0.3 ETH',
        gradient: 'linear-gradient(135deg, #7eb8da 0%, #a8cce0 100%)'
    },
    {
        id: 3,
        title: '별소녀 #128',
        rarity: 'rare',
        price: '0.1 ETH',
        gradient: 'linear-gradient(135deg, #6a9fc4 0%, #d1d5db 100%)'
    },
    {
        id: 4,
        title: '던전마스터 #007',
        rarity: 'legendary',
        price: '0.8 ETH',
        gradient: 'linear-gradient(135deg, #8fb8d4 0%, #e2e8f0 100%)'
    }
];

const exhibitionData = [
    {
        id: 1,
        title: '달빛 아래 검의 세계',
        description: '판타지 소설 속 세계관을 현실에서 체험하는 몰입형 전시',
        date: '2025.03.01 - 04.30',
        location: '서울 DDP',
        badge: '진행중',
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #7eb8da 100%)'
    },
    {
        id: 2,
        title: '회귀자의 기억',
        description: '시간여행과 회귀를 주제로 한 인터랙티브 미디어아트',
        date: '2025.05.15 - 07.15',
        location: '부산 벡스코',
        badge: '예정',
        gradient: 'linear-gradient(135deg, #7eb8da 0%, #a8cce0 100%)'
    },
    {
        id: 3,
        title: '별이 된 소녀 - 빛의 정원',
        description: 'LED와 프로젝션 맵핑으로 구현한 환상의 정원',
        date: '2025.06.01 - 08.31',
        location: '제주 아트센터',
        badge: '예정',
        gradient: 'linear-gradient(135deg, #6a9fc4 0%, #d1d5db 100%)'
    }
];

const performanceData = [
    {
        id: 1,
        title: '달빛검사: 각성',
        subtitle: '뮤지컬',
        type: '뮤지컬',
        date: '2025.04.10 - 06.30',
        location: '블루스퀘어 신한카드홀',
        time: '평일 19:30 / 주말 14:00, 19:00',
        gradient: 'linear-gradient(135deg, #5a9bc4 0%, #7eb8da 100%)'
    },
    {
        id: 2,
        title: '회귀자의 세계정복',
        subtitle: '연극',
        type: '연극',
        date: '2025.05.01 - 05.31',
        location: '대학로 아트원씨어터',
        time: '화-금 19:30 / 토-일 15:00, 19:00',
        gradient: 'linear-gradient(135deg, #7eb8da 0%, #a8cce0 100%)'
    },
    {
        id: 3,
        title: 'Cindore Orchestra Concert',
        subtitle: 'OST 콘서트',
        type: '콘서트',
        date: '2025.07.20',
        location: '예술의전당 콘서트홀',
        time: '19:00',
        gradient: 'linear-gradient(135deg, #a8cce0 0%, #e2e8f0 100%)'
    }
];

// ==================== State ====================
let currentSection = 'home';
let isWeb3Mode = false;
let walletConnected = false;
let walletAddress = '';
let currentTrack = 0;
let isPlaying = false;
let selectedPlan = null;
let bgMusicPlaying = false;
let bgAudio = null;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

const planPrices = {
    basic: { web2: '9,900원/월', web3: '0.005 ETH/월' },
    premium: { web2: '19,900원/월', web3: '0.01 ETH/월' },
    ultimate: { web2: '39,900원/월', web3: '0.02 ETH/월' }
};

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    initMouseLight();
    initParticles();
    initHoverEffects();
    initNavigation();
    initModals();
    initPaymentToggle();
    renderNovels();
    renderAnimations();
    renderPlaylist();
    renderNFTs();
    renderExhibitions();
    renderPerformances();
    initMusicPlayer();
    initFilterButtons();
    initLoginTabs();
    initMobileMenu();
    initBackgroundMusic();
    initScrollAnimations();
    initTiltEffect();
    initRippleEffect();
    initParallaxBackground();
    initTypingEffect();
    initCounterAnimation();

    // Start animations after small delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ==================== Mouse Light Effect ====================
function initMouseLight() {
    const mouseLight = document.getElementById('mouseLight');
    if (!mouseLight) return;

    // Hide on touch devices
    if ('ontouchstart' in window) {
        mouseLight.style.display = 'none';
        return;
    }

    let lightX = 0, lightY = 0;
    let targetX = 0, targetY = 0;

    // Smooth follow
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function animateLight() {
        lightX += (targetX - lightX) * 0.08;
        lightY += (targetY - lightY) * 0.08;
        mouseLight.style.left = lightX + 'px';
        mouseLight.style.top = lightY + 'px';
        requestAnimationFrame(animateLight);
    }
    animateLight();

    // Touch ripple on click
    document.addEventListener('click', (e) => {
        createTouchRipple(e.clientX, e.clientY);
    });

    // Interactive element glow tracking
    const interactiveElements = document.querySelectorAll('.novel-card, .nft-card, .plan-card, .track-item, .animation-item');

    interactiveElements.forEach(el => {
        el.style.position = 'relative';

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            el.style.setProperty('--mouse-x', x + '%');
            el.style.setProperty('--mouse-y', y + '%');
        });
    });
}

function createTouchRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'touch-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
}

// ==================== Hover Effects ====================
function initHoverEffects() {
    // Magnetic buttons - buttons slightly follow mouse
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary, .play-button-large');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // Link underline animation
    const links = document.querySelectorAll('.nav-link, .footer-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.setProperty('--underline-width', '100%');
        });
        link.addEventListener('mouseleave', () => {
            link.style.setProperty('--underline-width', '0%');
        });
    });

    // Click ripple effect
    document.addEventListener('click', (e) => {
        const target = e.target.closest('button, .btn-primary, .btn-secondary, .track-item, .novel-card');
        if (!target) return;

        const ripple = document.createElement('span');
        ripple.className = 'click-ripple';
        const rect = target.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        target.style.position = 'relative';
        target.style.overflow = 'hidden';
        target.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
}

// ==================== Particles Background ====================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const colors = ['#7eb8da', '#b8a4c9', '#e8b4bc', '#a8d4d0', '#d4a574', '#9b8bb8', '#a8cce0'];
    const particleCount = window.innerWidth < 768 ? 30 : 60;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container, colors);
    }

    // Interactive particles that follow mouse
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
            createInteractiveParticle(e.clientX, e.clientY, colors);
        }
    });
}

function createParticle(container, colors) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    container.appendChild(particle);
}

function createInteractiveParticle(x, y, colors) {
    const particle = document.createElement('div');
    particle.className = 'interactive-particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
}

// ==================== Parallax Background ====================
function initParallaxBackground() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        const cards = document.querySelectorAll('.card-float');
        cards.forEach((card, i) => {
            const depth = (i + 1) * 0.5;
            card.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
        });
    });
}

// ==================== Ripple Effect ====================
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-subscribe, .filter-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ==================== Typing Effect ====================
function initTypingEffect() {
    const titles = document.querySelectorAll('.hero-title');
    titles.forEach(title => {
        title.classList.add('typing-ready');
    });
}

// ==================== Counter Animation ====================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const numericValue = parseInt(text.replace(/[^0-9]/g, ''));

    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString() + (hasPlus ? '+' : '');
    }, 30);
}

// ==================== Mobile Menu ====================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.querySelector('.mobile-menu-btn i');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.querySelector('.mobile-menu-btn i');
    menu.classList.remove('active');
    icon.className = 'fas fa-bars';
}

// ==================== Background Music ====================
function initBackgroundMusic() {
    bgAudio = new Audio();
    bgAudio.src = 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3';
    bgAudio.loop = true;
    bgAudio.volume = 0.2;
    bgAudio.load();
}

function toggleBgMusic() {
    const control = document.getElementById('bgMusicControl');

    if (bgMusicPlaying) {
        bgAudio.pause();
        control.classList.add('paused');
        bgMusicPlaying = false;
    } else {
        bgAudio.play().then(() => {
            control.classList.remove('paused');
            bgMusicPlaying = true;
        }).catch(err => {
            showToast('클릭하여 배경음악을 재생하세요');
        });
    }
}

// ==================== Scroll Animations ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 50);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.novel-card, .feature-card, .plan-card, .nft-card, .animation-item, .track-item').forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });
}

// ==================== Tilt Effect ====================
function initTiltEffect() {
    const cards = document.querySelectorAll('.novel-card, .nft-card, .feature-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

            // Update glow position
            const glowX = (x / rect.width) * 100;
            const glowY = (y / rect.height) * 100;
            card.style.setProperty('--glow-x', glowX + '%');
            card.style.setProperty('--glow-y', glowY + '%');
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ==================== Navigation ====================
function initNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            showSection(section);
            closeMobileMenu();
        });
    });

    document.querySelector('.logo')?.addEventListener('click', () => {
        showSection('home');
    });

    document.getElementById('loginBtn')?.addEventListener('click', () => {
        openModal('loginModal');
    });

    document.getElementById('walletBtn')?.addEventListener('click', () => {
        if (walletConnected) {
            disconnectWallet();
        } else {
            connectMetaMask();
        }
    });
}

function showSection(sectionId) {
    const currentActive = document.querySelector('.section.active');
    const newSection = document.getElementById(sectionId);

    if (currentActive) {
        currentActive.classList.add('fade-out');
        setTimeout(() => {
            currentActive.classList.remove('active', 'fade-out');
            newSection.classList.add('active');

            // Re-init animations for new section
            setTimeout(initScrollAnimations, 100);
            setTimeout(initTiltEffect, 100);
        }, 300);
    } else {
        newSection.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    currentSection = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== Modals ====================
function initModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== Login Tabs ====================
function initLoginTabs() {
    document.querySelectorAll('.login-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabType = tab.dataset.tab;
            if (tabType === 'email') {
                document.getElementById('emailForm').style.display = 'block';
                document.getElementById('socialForm').style.display = 'none';
            } else {
                document.getElementById('emailForm').style.display = 'none';
                document.getElementById('socialForm').style.display = 'block';
            }
        });
    });
}

function showSignup() {
    showToast('회원가입 페이지로 이동합니다');
}

// ==================== Payment Toggle ====================
function initPaymentToggle() {
    const toggle = document.getElementById('paymentToggle');
    toggle?.addEventListener('change', () => {
        isWeb3Mode = toggle.checked;
        updatePriceDisplay();
    });
}

function updatePriceDisplay() {
    document.querySelectorAll('.price-web2').forEach(el => {
        el.style.display = isWeb3Mode ? 'none' : 'inline';
    });
    document.querySelectorAll('.price-web3').forEach(el => {
        el.style.display = isWeb3Mode ? 'inline' : 'none';
    });
}

// ==================== Novels ====================
function renderNovels(filter = 'all') {
    const grid = document.getElementById('novelsGrid');
    if (!grid) return;

    const filteredNovels = filter === 'all'
        ? novelsData
        : novelsData.filter(novel => novel.genre === filter);

    grid.innerHTML = filteredNovels.map((novel, index) => `
        <div class="novel-card animate-ready" onclick="openNovel(${novel.id})" style="--delay: ${index * 0.1}s">
            <div class="novel-cover" style="background: ${novel.gradient}">
                <span class="novel-badge">${novel.status}</span>
                <div class="novel-hover-info">
                    <p>${novel.description}</p>
                    <span class="view-count"><i class="fas fa-eye"></i> ${novel.views}</span>
                </div>
            </div>
            <div class="novel-info">
                <h3 class="novel-title">${novel.title}</h3>
                <div class="novel-meta">
                    <span>${novel.author}</span>
                    <div class="novel-rating">
                        <i class="fas fa-star"></i>
                        <span>${novel.rating}</span>
                    </div>
                </div>
                <div class="novel-tags">
                    ${novel.tags.map(tag => `<span class="novel-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    setTimeout(() => {
        initTiltEffect();
        initScrollAnimations();
    }, 100);
}

function initFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Add filter animation
            const grid = document.getElementById('novelsGrid');
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(20px)';

            setTimeout(() => {
                renderNovels(btn.dataset.filter);
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
            }, 300);
        });
    });
}

function openNovel(id) {
    const novel = novelsData.find(n => n.id === id);
    if (novel) {
        document.getElementById('readerTitle').textContent = novel.title;
        document.getElementById('readerBody').innerHTML = generateSampleContent(novel);
        document.getElementById('chapterInfo').textContent = `1 / ${novel.chapters}`;
        openModal('readerModal');
    }
}

function generateSampleContent(novel) {
    return `
        <h2>제 1장: 시작</h2>
        <p class="chapter-intro">${novel.description}</p>
        <br>
        <p>어둠이 짙게 깔린 밤, 달빛만이 유일한 빛이었다. 그 빛 아래서 한 사람의 그림자가 길게 드리워졌다.</p>
        <p>바람이 불어왔다. 차갑고 날카로운 바람이었다. 하지만 그는 움직이지 않았다. 아니, 움직일 수 없었다.</p>
        <p>오래전 잊혀진 기억들이 하나둘 떠올랐다. 그것은 마치 오래된 책장에서 먼지를 털어내는 것과 같았다.</p>
        <p>"때가 되었군..."</p>
        <p>낮고 깊은 목소리가 고요한 밤공기를 갈랐다. 그리고 그 순간, 모든 것이 시작되었다.</p>
        <br>
        <p class="premium-notice"><i class="fas fa-crown"></i> 계속 읽으시려면 구독이 필요합니다.</p>
    `;
}

// ==================== Animations ====================
function renderAnimations() {
    const list = document.getElementById('animationList');
    if (!list) return;

    list.innerHTML = animationsData.map((anim, index) => `
        <div class="animation-item ${anim.isNew ? 'new-animation' : ''} animate-ready" onclick="playAnimation(${anim.id})" style="--delay: ${index * 0.1}s">
            <div class="animation-thumb" style="${anim.youtubeId ? `background-image: url('https://img.youtube.com/vi/${anim.youtubeId}/mqdefault.jpg'); background-size: cover; background-position: center;` : `background: ${anim.gradient}`}">
                ${anim.isNew ? '<span class="thumb-badge">NEW</span>' : ''}
                <div class="thumb-play"><i class="fas fa-play"></i></div>
            </div>
            <div class="animation-details">
                <h4>${anim.title}</h4>
                <p>${anim.episode}</p>
                <div class="animation-meta">
                    <span class="animation-duration"><i class="fas fa-clock"></i> ${anim.duration}</span>
                    ${anim.views ? `<span class="animation-views"><i class="fas fa-eye"></i> ${anim.views}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function playAnimation(id) {
    const anim = animationsData.find(a => a.id === id);
    if (!anim) return;

    if (anim.youtubeId) {
        // Update main video player
        const thumbnail = document.getElementById('videoThumbnail');
        const playOverlay = document.querySelector('.play-overlay');
        const videoContainer = document.getElementById('videoContainer');
        const youtubePlayer = document.getElementById('youtubePlayer');

        if (thumbnail) thumbnail.style.display = 'none';
        if (playOverlay) playOverlay.style.display = 'none';
        if (videoContainer) {
            videoContainer.style.display = 'block';
            youtubePlayer.src = `https://www.youtube.com/embed/${anim.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
        }

        document.querySelector('.animation-main')?.scrollIntoView({ behavior: 'smooth' });
        showToast(`"${anim.title}" 재생 중`);
    } else {
        showToast('애니메이션을 재생합니다 (구독 필요)');
    }
}

// ==================== Music Player ====================
function renderPlaylist() {
    const playlist = document.getElementById('playlist');
    if (!playlist) return;

    playlist.innerHTML = musicData.map((track, index) => `
        <div class="track-item ${index === currentTrack ? 'active' : ''} ${track.isNew ? 'new-track' : ''} animate-ready" onclick="selectTrack(${index})" style="--delay: ${index * 0.05}s">
            <span class="track-number">${String(index + 1).padStart(2, '0')}</span>
            <div class="track-thumb" style="${track.coverImage ? `background-image: url('${track.coverImage}'); background-size: cover;` : `background: ${track.gradient}`}">
                ${track.isNew ? '<span class="track-badge">NEW</span>' : ''}
            </div>
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${track.subtitle || track.artist}</p>
            </div>
            <span class="track-duration">${track.duration}</span>
            <div class="track-play-icon"><i class="fas fa-play"></i></div>
        </div>
    `).join('');
}

function initMusicPlayer() {
    const spotifyWrapper = document.getElementById('spotifyWrapper');

    // Toggle playing state when clicking on Spotify player
    spotifyWrapper?.addEventListener('click', () => {
        spotifyWrapper.classList.toggle('playing');
    });

    updatePlayerDisplay();
}

function togglePlay() {
    isPlaying = !isPlaying;
    const playBtn = document.getElementById('playBtn');
    const albumArt = document.getElementById('albumArt');
    const track = musicData[currentTrack];
    const spotifyContainer = document.getElementById('spotifyContainer');
    const spotifyEmbed = document.getElementById('spotifyEmbed');

    playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';

    if (isPlaying) {
        albumArt?.classList.add('playing');

        // Check if current track has Spotify embed
        if (track.spotifyEmbed && spotifyContainer && spotifyEmbed) {
            spotifyEmbed.src = track.spotifyEmbed;
            spotifyContainer.style.display = 'block';
        } else {
            if (spotifyContainer) spotifyContainer.style.display = 'none';
            simulatePlayback();
        }
    } else {
        albumArt?.classList.remove('playing');
        // Pause Spotify by clearing src
        if (track.spotifyEmbed && spotifyEmbed) {
            spotifyEmbed.src = '';
            if (spotifyContainer) spotifyContainer.style.display = 'none';
        }
    }
}

function simulatePlayback() {
    if (!isPlaying) return;

    const progress = document.getElementById('progress');
    let width = parseFloat(progress?.style.width) || 0;

    if (width >= 100) {
        nextTrack();
        return;
    }

    if (progress) progress.style.width = (width + 0.5) + '%';

    const track = musicData[currentTrack];
    const [mins, secs] = track.duration.split(':').map(Number);
    const totalSecs = mins * 60 + secs;
    const currentSecs = Math.floor(totalSecs * width / 100);
    const currentMins = Math.floor(currentSecs / 60);
    const remainingSecs = currentSecs % 60;

    const currentTimeEl = document.getElementById('currentTime');
    if (currentTimeEl) {
        currentTimeEl.textContent = `${currentMins}:${remainingSecs.toString().padStart(2, '0')}`;
    }

    setTimeout(simulatePlayback, 100);
}

function selectTrack(index) {
    currentTrack = index;
    updatePlayerDisplay();
    renderPlaylist();
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + musicData.length) % musicData.length;
    resetAndPlay();
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % musicData.length;
    resetAndPlay();
}

function resetAndPlay() {
    const progress = document.getElementById('progress');
    const currentTime = document.getElementById('currentTime');

    if (progress) progress.style.width = '0%';
    if (currentTime) currentTime.textContent = '0:00';

    updatePlayerDisplay();
    renderPlaylist();

    if (isPlaying) {
        isPlaying = false;
        togglePlay();
    }
}

function updatePlayerDisplay() {
    const track = musicData[currentTrack];
    const spotifyEmbed = document.getElementById('spotifyEmbed');
    const totalTime = document.getElementById('totalTime');
    const progressFill = document.getElementById('progressFill');

    // Update Spotify embed
    if (track.spotifyEmbed && spotifyEmbed) {
        spotifyEmbed.src = track.spotifyEmbed;
    }

    // Update time display
    if (totalTime) totalTime.textContent = track.duration;
    if (progressFill) progressFill.style.width = '0%';
}

// ==================== NFTs ====================
function renderNFTs() {
    const grid = document.getElementById('nftGrid');
    if (!grid) return;

    grid.innerHTML = nftData.map((nft, index) => `
        <div class="nft-card animate-ready" onclick="viewNFT(${nft.id})" style="--delay: ${index * 0.1}s">
            <div class="nft-image" style="background: ${nft.gradient}">
                <span class="nft-rarity ${nft.rarity}">${nft.rarity.toUpperCase()}</span>
                <div class="nft-shine"></div>
            </div>
            <div class="nft-details">
                <h4 class="nft-title">${nft.title}</h4>
                <div class="nft-price">
                    <span>현재가</span>
                    <span><i class="fab fa-ethereum"></i> ${nft.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function viewNFT(id) {
    if (!walletConnected) {
        showToast('NFT를 구매하려면 지갑을 연결하세요');
        return;
    }
    showToast('NFT 상세 페이지로 이동합니다');
}

// ==================== Exhibitions ====================
function renderExhibitions() {
    const grid = document.getElementById('exhibitionGrid');
    if (!grid) return;

    grid.innerHTML = exhibitionData.map((exhibition, index) => `
        <div class="exhibition-card animate-ready" style="--delay: ${index * 0.1}s">
            <div class="exhibition-image" style="background: ${exhibition.gradient}">
                <span class="exhibition-badge">${exhibition.badge}</span>
            </div>
            <div class="exhibition-content">
                <h3>${exhibition.title}</h3>
                <p>${exhibition.description}</p>
                <div class="exhibition-info">
                    <span class="exhibition-date"><i class="far fa-calendar"></i> ${exhibition.date}</span>
                    <span class="exhibition-location"><i class="fas fa-map-marker-alt"></i> ${exhibition.location}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== Performances ====================
function renderPerformances() {
    const grid = document.getElementById('performanceGrid');
    if (!grid) return;

    grid.innerHTML = performanceData.map((perf, index) => `
        <div class="performance-card animate-ready" style="--delay: ${index * 0.1}s">
            <div class="performance-poster" style="background: ${perf.gradient}">
                <span class="performance-type">${perf.type}</span>
            </div>
            <div class="performance-content">
                <h3>${perf.title}</h3>
                <p class="subtitle">${perf.subtitle}</p>
                <div class="performance-details">
                    <span><i class="far fa-calendar"></i> ${perf.date}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${perf.location}</span>
                    <span><i class="far fa-clock"></i> ${perf.time}</span>
                </div>
                <a href="#" class="btn-ticket" onclick="bookTicket(${perf.id}); return false;">예매하기</a>
            </div>
        </div>
    `).join('');
}

function bookTicket(id) {
    showToast('예매 페이지로 이동합니다');
}

// ==================== Subscription ====================
function subscribe(plan) {
    selectedPlan = plan;
    const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
    const price = isWeb3Mode ? planPrices[plan].web3 : planPrices[plan].web2;

    const selectedPlanEl = document.getElementById('selectedPlan');
    const selectedPriceEl = document.getElementById('selectedPrice');
    const selectedPlanWeb3El = document.getElementById('selectedPlanWeb3');
    const selectedPriceWeb3El = document.getElementById('selectedPriceWeb3');

    if (selectedPlanEl) selectedPlanEl.textContent = `${planName} 플랜`;
    if (selectedPriceEl) selectedPriceEl.textContent = price;
    if (selectedPlanWeb3El) selectedPlanWeb3El.textContent = `${planName} 플랜`;
    if (selectedPriceWeb3El) selectedPriceWeb3El.textContent = price;

    const web2Payment = document.getElementById('web2Payment');
    const web3Payment = document.getElementById('web3Payment');

    if (web2Payment) web2Payment.style.display = isWeb3Mode ? 'none' : 'block';
    if (web3Payment) web3Payment.style.display = isWeb3Mode ? 'block' : 'none';

    openModal('paymentModal');
}

function processPayment() {
    showToast('결제가 처리 중입니다...');
    setTimeout(() => {
        closeModal('paymentModal');
        showToast('구독이 완료되었습니다! 환영합니다!');
    }, 2000);
}

// ==================== Web3 Integration ====================
async function connectMetaMask() {
    if (typeof window.ethereum === 'undefined') {
        showToast('MetaMask가 설치되어 있지 않습니다');
        return;
    }

    try {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        walletAddress = accounts[0];
        walletConnected = true;
        updateWalletUI();
        showToast('지갑이 연결되었습니다!');

        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                disconnectWallet();
            } else {
                walletAddress = accounts[0];
                updateWalletUI();
            }
        });

    } catch (error) {
        showToast('지갑 연결에 실패했습니다');
    }
}

function connectWalletConnect() {
    showToast('WalletConnect 연결 중...');
    setTimeout(() => {
        walletConnected = true;
        walletAddress = '0x1234...5678';
        updateWalletUI();
        showToast('지갑이 연결되었습니다!');
    }, 1500);
}

function disconnectWallet() {
    walletConnected = false;
    walletAddress = '';
    updateWalletUI();
    showToast('지갑 연결이 해제되었습니다');
}

function updateWalletUI() {
    const walletBtn = document.getElementById('walletBtn');
    const connectedWalletSpan = document.getElementById('connectedWallet');

    if (walletConnected && walletBtn) {
        const shortAddress = walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4);
        walletBtn.innerHTML = `<i class="fab fa-ethereum"></i><span>${shortAddress}</span>`;
        walletBtn.classList.add('connected');
        if (connectedWalletSpan) connectedWalletSpan.textContent = shortAddress;
    } else if (walletBtn) {
        walletBtn.innerHTML = '<i class="fab fa-ethereum"></i><span>지갑 연결</span>';
        walletBtn.classList.remove('connected');
        if (connectedWalletSpan) connectedWalletSpan.textContent = '없음';
    }
}

// ==================== YouTube Video Player ====================
function playYouTubeVideo() {
    const thumbnail = document.getElementById('videoThumbnail');
    const playOverlay = document.querySelector('.play-overlay');
    const videoContainer = document.getElementById('videoContainer');
    const youtubePlayer = document.getElementById('youtubePlayer');

    if (thumbnail) thumbnail.style.display = 'none';
    if (playOverlay) playOverlay.style.display = 'none';
    if (videoContainer) {
        videoContainer.style.display = 'block';
        youtubePlayer.src = 'https://www.youtube.com/embed/nHPXmV8SZTw?autoplay=1&rel=0&modestbranding=1';
    }
}

// ==================== Toast Notifications ====================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    if (toastMessage) toastMessage.textContent = message;
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ==================== Global Exports ====================
window.showSection = showSection;
window.openModal = openModal;
window.closeModal = closeModal;
window.subscribe = subscribe;
window.processPayment = processPayment;
window.connectMetaMask = connectMetaMask;
window.connectWalletConnect = connectWalletConnect;
window.showSignup = showSignup;
window.openNovel = openNovel;
window.playAnimation = playAnimation;
window.selectTrack = selectTrack;
window.viewNFT = viewNFT;
window.toggleBgMusic = toggleBgMusic;
window.closeMobileMenu = closeMobileMenu;
window.playYouTubeVideo = playYouTubeVideo;
