// Cindore - Premium Novel Platform
// Web2 & Web3 Integration with Interactive Features

// ==================== Data ====================
const novelsData = [
    {
        id: 1,
        title: '달빛 아래 검의 노래',
        author: '검향',
        genre: 'fantasy',
        rating: 4.9,
        chapters: 342,
        status: '연재중',
        tags: ['판타지', '무협'],
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 2,
        title: '회귀자의 세계정복',
        author: '은하수',
        genre: 'fantasy',
        rating: 4.8,
        chapters: 520,
        status: '완결',
        tags: ['현대판타지', '회귀'],
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 3,
        title: '별이 된 소녀',
        author: '달빛소나타',
        genre: 'romance',
        rating: 4.7,
        chapters: 156,
        status: '연재중',
        tags: ['로맨스', '힐링'],
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 4,
        title: '던전의 지배자',
        author: '다크나이트',
        genre: 'action',
        rating: 4.9,
        chapters: 890,
        status: '연재중',
        tags: ['액션', '던전'],
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        id: 5,
        title: '그림자 탐정사무소',
        author: '미스터리안',
        genre: 'mystery',
        rating: 4.6,
        chapters: 234,
        status: '연재중',
        tags: ['미스터리', '추리'],
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        id: 6,
        title: '마법학교의 낙오생',
        author: '마법사K',
        genre: 'fantasy',
        rating: 4.8,
        chapters: 445,
        status: '연재중',
        tags: ['판타지', '학원'],
        gradient: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)'
    },
    {
        id: 7,
        title: '재벌가의 막내아들',
        author: '골드핑거',
        genre: 'romance',
        rating: 4.7,
        chapters: 312,
        status: '완결',
        tags: ['현대', '로맨스'],
        gradient: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)'
    },
    {
        id: 8,
        title: '무림의 절대고수',
        author: '강호객',
        genre: 'action',
        rating: 4.9,
        chapters: 678,
        status: '연재중',
        tags: ['무협', '액션'],
        gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)'
    }
];

const animationsData = [
    {
        id: 1,
        title: 'LOVER (2024)',
        episode: 'Cindore의 첫 오리지널',
        duration: '12:40',
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
        youtubeId: 'nHPXmV8SZTw',
        isNew: true
    },
    {
        id: 2,
        title: '달빛 아래 검의 노래',
        episode: 'EP.1 - 운명의 시작',
        duration: '24:30',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 3,
        title: '달빛 아래 검의 노래',
        episode: 'EP.2 - 첫 번째 시련',
        duration: '23:45',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 4,
        title: '회귀자의 세계정복',
        episode: 'EP.1 - 돌아온 자',
        duration: '25:00',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 5,
        title: '회귀자의 세계정복',
        episode: 'EP.2 - 새로운 시작',
        duration: '24:15',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 6,
        title: '별이 된 소녀',
        episode: 'EP.1 - 별빛 아래서',
        duration: '22:30',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 7,
        title: '던전의 지배자',
        episode: 'EP.1 - 각성',
        duration: '24:00',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
];

const musicData = [
    {
        id: 1,
        title: 'Winter Strawberry Life',
        artist: '로사멜시(Rosa Melsy) OST',
        duration: '3:30',
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
        audioSrc: '/Winter Strawberry Life_orchestra ver..wav',
        isNew: true
    },
    {
        id: 2,
        title: 'Return of the Hero',
        artist: '회귀자의 세계정복 OST',
        duration: '4:12',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 3,
        title: 'Starlight Dreams',
        artist: '별이 된 소녀 OST',
        duration: '3:28',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 4,
        title: 'Dungeon Master',
        artist: '던전의 지배자 OST',
        duration: '4:05',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        id: 5,
        title: 'Shadow Detective',
        artist: '그림자 탐정사무소 OST',
        duration: '3:52',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        id: 6,
        title: 'Magic Academy',
        artist: '마법학교의 낙오생 OST',
        duration: '3:38',
        gradient: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)'
    },
    {
        id: 7,
        title: 'Golden Dreams',
        artist: '재벌가의 막내아들 OST',
        duration: '4:20',
        gradient: 'linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)'
    },
    {
        id: 8,
        title: 'Martial Arts Legend',
        artist: '무림의 절대고수 OST',
        duration: '3:55',
        gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)'
    }
];

const nftData = [
    {
        id: 1,
        title: '달빛검사 #001',
        rarity: 'legendary',
        price: '0.5 ETH',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        id: 2,
        title: '회귀자 #042',
        rarity: 'epic',
        price: '0.3 ETH',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        id: 3,
        title: '별소녀 #128',
        rarity: 'rare',
        price: '0.1 ETH',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
        id: 4,
        title: '던전마스터 #007',
        rarity: 'legendary',
        price: '0.8 ETH',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
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
let trackAudio = null;

const planPrices = {
    basic: { web2: '9,900원/월', web3: '0.005 ETH/월' },
    premium: { web2: '19,900원/월', web3: '0.01 ETH/월' },
    ultimate: { web2: '39,900원/월', web3: '0.02 ETH/월' }
};

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModals();
    initPaymentToggle();
    renderNovels();
    renderAnimations();
    renderPlaylist();
    renderNFTs();
    initMusicPlayer();
    initFilterButtons();
    initLoginTabs();
    initCustomCursor();
    initParticles();
    initMobileMenu();
    initBackgroundMusic();
    initScrollAnimations();
    initTiltEffect();
});

// ==================== Custom Cursor ====================
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (!cursor || !follower) return;

    // Check if touch device
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Cursor follows immediately
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Follower has delay
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .novel-card, .feature-card, .plan-card, .nft-card, .track-item, .animation-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });

    // Mouse trail effect
    document.addEventListener('mousemove', createTrail);
}

let trailCount = 0;
function createTrail(e) {
    trailCount++;
    if (trailCount % 3 !== 0) return; // Throttle

    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => trail.remove(), 500);
    }, 100);
}

// ==================== Particles Background ====================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#00cec9'];
    const particleCount = window.innerWidth < 768 ? 20 : 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container, colors);
    }
}

function createParticle(container, colors) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.width = (Math.random() * 4 + 2) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
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
    menu.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('active');
}

// ==================== Background Music ====================
function initBackgroundMusic() {
    // Create audio context for orchestra music
    bgAudio = new Audio();
    // Using a royalty-free orchestra sample URL
    bgAudio.src = 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3';
    bgAudio.loop = true;
    bgAudio.volume = 0.3;

    // Preload
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
            console.log('Audio autoplay blocked:', err);
            showToast('클릭하여 음악을 재생하세요');
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
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animation
    document.querySelectorAll('.novel-card, .feature-card, .plan-card, .nft-card, .animation-item, .track-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==================== Tilt Effect ====================
function initTiltEffect() {
    const cards = document.querySelectorAll('.card-float, .novel-card, .nft-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ==================== Navigation ====================
function initNavigation() {
    // Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            showSection(section);
            closeMobileMenu();
        });
    });

    // Logo click
    document.querySelector('.logo').addEventListener('click', () => {
        showSection('home');
    });

    // Login button
    document.getElementById('loginBtn').addEventListener('click', () => {
        openModal('loginModal');
    });

    // Wallet button
    document.getElementById('walletBtn').addEventListener('click', () => {
        if (walletConnected) {
            disconnectWallet();
        } else {
            connectMetaMask();
        }
    });
}

function showSection(sectionId) {
    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        }
    });

    currentSection = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-init scroll animations for new section
    setTimeout(initScrollAnimations, 100);
}

// ==================== Modals ====================
function initModals() {
    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
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
    toggle.addEventListener('change', () => {
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
    const filteredNovels = filter === 'all'
        ? novelsData
        : novelsData.filter(novel => novel.genre === filter);

    grid.innerHTML = filteredNovels.map((novel, index) => `
        <div class="novel-card" onclick="openNovel(${novel.id})" style="animation-delay: ${index * 0.1}s">
            <div class="novel-cover" style="background: ${novel.gradient}">
                <span class="novel-badge">${novel.status}</span>
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

    // Re-init tilt effect for new cards
    setTimeout(initTiltEffect, 100);
}

function initFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderNovels(btn.dataset.filter);
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
        <p>"${novel.title}"의 첫 번째 장입니다.</p>
        <p>어둠이 짙게 깔린 밤, 달빛만이 유일한 빛이었다. 그 빛 아래서 한 사람의 그림자가 길게 드리워졌다.</p>
        <p>바람이 불어왔다. 차갑고 날카로운 바람이었다. 하지만 그는 움직이지 않았다. 아니, 움직일 수 없었다.</p>
        <p>오래전 잊혀진 기억들이 하나둘 떠올랐다. 그것은 마치 오래된 책장에서 먼지를 털어내는 것과 같았다.</p>
        <p>"때가 되었군..."</p>
        <p>낮고 깊은 목소리가 고요한 밤공기를 갈랐다. 그리고 그 순간, 모든 것이 시작되었다.</p>
        <br>
        <p>계속해서 읽으시려면 구독이 필요합니다.</p>
    `;
}

// ==================== Animations ====================
function renderAnimations() {
    const list = document.getElementById('animationList');
    list.innerHTML = animationsData.map((anim, index) => `
        <div class="animation-item ${anim.isNew ? 'new-animation' : ''}" onclick="playAnimation(${anim.id})" style="animation-delay: ${index * 0.1}s">
            <div class="animation-thumb" style="${anim.youtubeId ? `background-image: url('https://img.youtube.com/vi/${anim.youtubeId}/mqdefault.jpg'); background-size: cover; background-position: center;` : `background: ${anim.gradient}`}">
                ${anim.isNew ? '<span class="thumb-badge">NEW</span>' : ''}
            </div>
            <div class="animation-details">
                <h4>${anim.title}</h4>
                <p>${anim.episode}</p>
                <span class="animation-duration">${anim.duration}</span>
            </div>
        </div>
    `).join('');

    // 첫 번째 애니메이션(YouTube 영상)을 메인 플레이어에 로드
    const firstAnim = animationsData[0];
    if (firstAnim && firstAnim.youtubeId) {
        updateMainPlayer(firstAnim);
    }
}

function updateMainPlayer(anim) {
    const videoPlayer = document.getElementById('videoPlayer');
    if (anim.youtubeId) {
        videoPlayer.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${anim.youtubeId}?rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; border-radius: 20px;">
            </iframe>
        `;
    } else {
        videoPlayer.innerHTML = `
            <div class="play-button" onclick="playAnimation(${anim.id})">
                <i class="fas fa-play"></i>
            </div>
            <div class="video-info">
                <span class="video-badge">${anim.isNew ? 'NEW' : ''}</span>
                <h3>${anim.title} ${anim.episode}</h3>
            </div>
        `;
    }
}

function playAnimation(id) {
    const anim = animationsData.find(a => a.id === id);
    if (!anim) return;

    if (anim.youtubeId) {
        updateMainPlayer(anim);
        // 애니메이션 섹션으로 스크롤
        document.querySelector('.animation-featured').scrollIntoView({ behavior: 'smooth' });
        showToast(`"${anim.title}" 재생 중`);
    } else {
        showToast('애니메이션을 재생합니다 (구독 필요)');
    }
}

// ==================== Music Player ====================
function renderPlaylist() {
    const playlist = document.getElementById('playlist');
    playlist.innerHTML = musicData.map((track, index) => `
        <div class="track-item ${index === currentTrack ? 'active' : ''}" onclick="selectTrack(${index})" style="animation-delay: ${index * 0.05}s">
            <span class="track-number">${index + 1}</span>
            <div class="track-thumb" style="background: ${track.gradient}"></div>
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
            <span class="track-duration">${track.duration}</span>
        </div>
    `).join('');
}

function initMusicPlayer() {
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('prevBtn').addEventListener('click', prevTrack);
    document.getElementById('nextBtn').addEventListener('click', nextTrack);

    // Progress bar click
    document.querySelector('.progress-bar').addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width * 100;
        document.getElementById('progress').style.width = percent + '%';
    });

    updatePlayerDisplay();
}

function togglePlay() {
    isPlaying = !isPlaying;
    const playBtn = document.getElementById('playBtn');
    const albumArt = document.getElementById('albumArt');
    const track = musicData[currentTrack];

    playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';

    if (isPlaying) {
        albumArt.classList.add('playing');

        // 실제 오디오 파일이 있는 경우 재생
        if (track.audioSrc) {
            if (!trackAudio || trackAudio.src !== window.location.origin + track.audioSrc) {
                if (trackAudio) trackAudio.pause();
                trackAudio = new Audio(track.audioSrc);
                trackAudio.volume = 0.7;
                trackAudio.addEventListener('timeupdate', updateProgress);
                trackAudio.addEventListener('ended', nextTrack);
            }
            trackAudio.play().catch(err => console.log('Audio play error:', err));
        } else {
            simulatePlayback();
        }
    } else {
        albumArt.classList.remove('playing');
        if (trackAudio) trackAudio.pause();
    }
}

function updateProgress() {
    if (!trackAudio) return;
    const progress = document.getElementById('progress');
    const percent = (trackAudio.currentTime / trackAudio.duration) * 100;
    progress.style.width = percent + '%';

    // Update time display
    const currentMins = Math.floor(trackAudio.currentTime / 60);
    const currentSecs = Math.floor(trackAudio.currentTime % 60);
    document.getElementById('currentTime').textContent =
        `${currentMins}:${currentSecs.toString().padStart(2, '0')}`;
}

function simulatePlayback() {
    if (!isPlaying) return;

    const progress = document.getElementById('progress');
    let width = parseFloat(progress.style.width) || 0;

    if (width >= 100) {
        nextTrack();
        return;
    }

    progress.style.width = (width + 0.5) + '%';

    // Update time display
    const track = musicData[currentTrack];
    const [mins, secs] = track.duration.split(':').map(Number);
    const totalSecs = mins * 60 + secs;
    const currentSecs = Math.floor(totalSecs * width / 100);
    const currentMins = Math.floor(currentSecs / 60);
    const remainingSecs = currentSecs % 60;
    document.getElementById('currentTime').textContent =
        `${currentMins}:${remainingSecs.toString().padStart(2, '0')}`;

    setTimeout(simulatePlayback, 100);
}

function selectTrack(index) {
    if (trackAudio) {
        trackAudio.pause();
        trackAudio = null;
    }
    currentTrack = index;
    document.getElementById('progress').style.width = '0%';
    document.getElementById('currentTime').textContent = '0:00';
    updatePlayerDisplay();
    renderPlaylist();

    if (isPlaying) {
        isPlaying = false;
        togglePlay();
    } else {
        togglePlay();
    }
}

function prevTrack() {
    if (trackAudio) {
        trackAudio.pause();
        trackAudio = null;
    }
    currentTrack = (currentTrack - 1 + musicData.length) % musicData.length;
    document.getElementById('progress').style.width = '0%';
    document.getElementById('currentTime').textContent = '0:00';
    updatePlayerDisplay();
    renderPlaylist();

    if (isPlaying) {
        isPlaying = false;
        togglePlay();
    }
}

function nextTrack() {
    if (trackAudio) {
        trackAudio.pause();
        trackAudio = null;
    }
    currentTrack = (currentTrack + 1) % musicData.length;
    document.getElementById('progress').style.width = '0%';
    document.getElementById('currentTime').textContent = '0:00';
    updatePlayerDisplay();
    renderPlaylist();

    if (isPlaying) {
        isPlaying = false;
        togglePlay();
    }
}

function updatePlayerDisplay() {
    const track = musicData[currentTrack];
    document.getElementById('trackTitle').textContent = track.title;
    document.getElementById('trackArtist').textContent = track.artist;
    document.getElementById('albumArt').style.background = track.gradient;
    document.getElementById('totalTime').textContent = track.duration;
}

// ==================== NFTs ====================
function renderNFTs() {
    const grid = document.getElementById('nftGrid');
    grid.innerHTML = nftData.map((nft, index) => `
        <div class="nft-card" onclick="viewNFT(${nft.id})" style="animation-delay: ${index * 0.1}s">
            <div class="nft-image" style="background: ${nft.gradient}">
                <span class="nft-rarity ${nft.rarity}">${nft.rarity.toUpperCase()}</span>
            </div>
            <div class="nft-details">
                <h4 class="nft-title">${nft.title}</h4>
                <div class="nft-price">
                    <span>현재가</span>
                    <span>${nft.price}</span>
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

// ==================== Subscription ====================
function subscribe(plan) {
    selectedPlan = plan;
    const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
    const price = isWeb3Mode ? planPrices[plan].web3 : planPrices[plan].web2;

    document.getElementById('selectedPlan').textContent = `${planName} 플랜`;
    document.getElementById('selectedPrice').textContent = price;
    document.getElementById('selectedPlanWeb3').textContent = `${planName} 플랜`;
    document.getElementById('selectedPriceWeb3').textContent = price;

    document.getElementById('web2Payment').style.display = isWeb3Mode ? 'none' : 'block';
    document.getElementById('web3Payment').style.display = isWeb3Mode ? 'block' : 'none';

    openModal('paymentModal');
}

function processPayment() {
    showToast('결제가 처리 중입니다...');
    setTimeout(() => {
        closeModal('paymentModal');
        showToast('구독이 완료되었습니다!');
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

        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                disconnectWallet();
            } else {
                walletAddress = accounts[0];
                updateWalletUI();
            }
        });

    } catch (error) {
        console.error('Wallet connection error:', error);
        showToast('지갑 연결에 실패했습니다');
    }
}

function connectWalletConnect() {
    showToast('WalletConnect 연결 중...');
    // WalletConnect integration would go here
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

    if (walletConnected) {
        const shortAddress = walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4);
        walletBtn.innerHTML = `<i class="fab fa-ethereum"></i><span>${shortAddress}</span>`;
        walletBtn.classList.add('connected');
        if (connectedWalletSpan) {
            connectedWalletSpan.textContent = shortAddress;
        }
    } else {
        walletBtn.innerHTML = '<i class="fab fa-ethereum"></i><span>지갑 연결</span>';
        walletBtn.classList.remove('connected');
        if (connectedWalletSpan) {
            connectedWalletSpan.textContent = '없음';
        }
    }
}

// ==================== Toast Notifications ====================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== Expose functions to global scope ====================
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
