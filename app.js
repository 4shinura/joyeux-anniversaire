// =============================================================================
// LOGIQUE INTERACTIVE - SITE D'ANNIVERSAIRE DE CAMILLE
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initDynamicContent();
  initLoveCounter();
  initAudioPlayer();
  initTimeline();
  initQuiz();
  initGiftBox();
});

// -----------------------------------------------------------------------------
// 1. PARTICULES & COEURS FLOTTANTS (CANVAS)
// -----------------------------------------------------------------------------
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = window.innerWidth < 768 ? 25 : 45;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.size = Math.random() * 14 + 10; // taille du coeur
      this.speedY = Math.random() * 0.8 + 0.4;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.4 - 0.2;
      this.opacity = Math.random() * 0.4 + 0.15;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.2;
      this.color = ['#fda4af', '#f43f5e', '#fecdd3', '#fb7185', '#fef08a'][Math.floor(Math.random() * 5)];
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
      this.rotation += this.rotationSpeed;
      if (this.y < -30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      
      // Dessin d'un coeur mignon
      const s = this.size / 20;
      ctx.scale(s, s);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-10, -10, -20, 5, 0, 20);
      ctx.bezierCurveTo(20, 5, 10, -10, 0, 0);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    const p = new Particle();
    p.y = Math.random() * height; // disperser au départ
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// -----------------------------------------------------------------------------
// 2. INJECTION DES CONTENUS DYNAMIQUES
// -----------------------------------------------------------------------------
function initDynamicContent() {
  if (typeof siteConfig === 'undefined') return;

  // Prénoms & Titres
  document.querySelectorAll('[data-bind="recipientName"]').forEach(el => el.textContent = siteConfig.recipientName);
  document.querySelectorAll('[data-bind="partnerName"]').forEach(el => el.textContent = siteConfig.partnerName);
  document.querySelectorAll('[data-bind="age"]').forEach(el => el.textContent = siteConfig.age);

  // Hero
  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroBtn = document.getElementById('hero-cta-btn');

  if (heroBadge) heroBadge.textContent = siteConfig.hero.badge;
  if (heroTitle) heroTitle.textContent = siteConfig.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = siteConfig.hero.subtitle;
  if (heroBtn) heroBtn.textContent = siteConfig.hero.buttonText;

  // Gift details
  const giftBadge = document.getElementById('ticket-badge');
  const giftTitle = document.getElementById('ticket-title');
  const giftDest = document.getElementById('ticket-destination');
  const giftDestDesc = document.getElementById('ticket-destination-desc');
  const giftDestImg = document.getElementById('ticket-destination-img');
  const giftLodging = document.getElementById('ticket-lodging');
  const giftLodgingDesc = document.getElementById('ticket-lodging-desc');
  const giftLodgingImg = document.getElementById('ticket-lodging-img');
  const giftTimeline = document.getElementById('ticket-timeline');
  const giftSweetMsg = document.getElementById('ticket-sweet-msg');

  if (giftBadge) giftBadge.textContent = siteConfig.gift.badge;
  if (giftTitle) giftTitle.textContent = siteConfig.gift.title;
  if (giftDest) giftDest.textContent = siteConfig.gift.destination;
  if (giftDestDesc) giftDestDesc.textContent = siteConfig.gift.destinationDesc;
  if (giftDestImg && siteConfig.gift.destinationImage) giftDestImg.src = siteConfig.gift.destinationImage;
  if (giftLodging) giftLodging.textContent = siteConfig.gift.lodging;
  if (giftLodgingDesc) giftLodgingDesc.textContent = siteConfig.gift.lodgingDesc;
  if (giftLodgingImg && siteConfig.gift.lodgingImage) giftLodgingImg.src = siteConfig.gift.lodgingImage;
  if (giftTimeline) giftTimeline.textContent = siteConfig.gift.timelineText;
  if (giftSweetMsg) giftSweetMsg.textContent = siteConfig.gift.sweetMessage;

  // Included list in ticket
  const listContainer = document.getElementById('ticket-included-list');
  if (listContainer && siteConfig.gift.includedList) {
    listContainer.innerHTML = siteConfig.gift.includedList
      .map(item => `<li class="flex items-center space-x-2"><span class="text-rose-400 font-bold">✔</span> <span>${item}</span></li>`)
      .join('');
  }
}

// -----------------------------------------------------------------------------
// 3. COMPTEUR D'AMOUR & SOUVENIRS
// -----------------------------------------------------------------------------
function initLoveCounter() {
  if (typeof siteConfig === 'undefined' || !siteConfig.relationshipStartDate) return;

  const startDate = new Date(siteConfig.relationshipStartDate);
  const daysEl = document.getElementById('counter-days');
  const hoursEl = document.getElementById('counter-hours');
  const minutesEl = document.getElementById('counter-minutes');

  function update() {
    const now = new Date();
    const diffTime = Math.max(0, now - startDate);
    
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffTime / 1000 / 60) % 60);

    if (daysEl) daysEl.textContent = days.toLocaleString('fr-FR');
    if (hoursEl) hoursEl.textContent = hours.toLocaleString('fr-FR');
    if (minutesEl) minutesEl.textContent = minutes.toLocaleString('fr-FR');
  }

  update();
  setInterval(update, 60000);
}

// -----------------------------------------------------------------------------
// 4. LECTEUR DE MUSIQUE DOUCE
// -----------------------------------------------------------------------------
function initAudioPlayer() {
  const toggleBtn = document.getElementById('audio-toggle');
  const audioEl = document.getElementById('bg-audio');
  const labelEl = document.getElementById('audio-label');

  if (!toggleBtn || !audioEl) return;

  if (siteConfig && siteConfig.music && siteConfig.music.audioSrc) {
    audioEl.src = siteConfig.music.audioSrc;
  }

  let isPlaying = false;

  toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      audioEl.pause();
      toggleBtn.classList.add('audio-paused');
      if (labelEl) labelEl.textContent = 'Musique en pause';
      isPlaying = false;
    } else {
      audioEl.play().then(() => {
        toggleBtn.classList.remove('audio-paused');
        if (labelEl) labelEl.textContent = 'Musique en cours...';
        isPlaying = true;
      }).catch(err => {
        console.log("Lecture audio requiert une interaction utilisateur ou fichier absent", err);
        // Créer un petit son doux avec l'API Web Audio si le MP3 n'est pas encore présent
        playCelebrationChime();
        if (labelEl) labelEl.textContent = 'Mélodie magique ✨';
      });
    }
  });
}

// Chime doux via Web Audio API si l'utilisateur n'a pas encore ajouté de MP3
function playCelebrationChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + idx * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 1.3);
    });
  } catch(e) {
    console.log("Audio synthesis not available", e);
  }
}

// -----------------------------------------------------------------------------
// 5. TIMELINE & POLAROIDS
// -----------------------------------------------------------------------------
function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || typeof siteConfig === 'undefined') return;

  container.innerHTML = siteConfig.timeline.map((item, index) => {
    return `
      <div class="polaroid-card flex flex-col items-center justify-between" style="transform: rotate(${item.rotation || '0deg'});">
        <div class="polaroid-tape"></div>
        <div class="w-full aspect-square rounded overflow-hidden bg-gray-100 mb-3 shadow-inner relative group">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='assets/images/photo1.svg'">
          <span class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs px-2.5 py-1 rounded-full font-medium text-rose-600 shadow-sm">${item.tag}</span>
        </div>
        <div class="w-full text-center px-1">
          <h4 class="font-serif font-bold text-lg text-gray-800">${item.title}</h4>
          <p class="font-handwriting text-xl text-rose-500 font-semibold mb-1">${item.subtitle}</p>
          <p class="text-xs text-gray-600 italic">"${item.caption}"</p>
        </div>
      </div>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// 6. MINI-QUIZ COMPLICE
// -----------------------------------------------------------------------------
let currentQuestionIndex = 0;
let quizCompleted = false;

function initQuiz() {
  renderQuestion();
}

function renderQuestion() {
  if (typeof siteConfig === 'undefined' || !siteConfig.quiz) return;

  const quizCard = document.getElementById('quiz-card');
  const progressEl = document.getElementById('quiz-progress-bar');
  const stepEl = document.getElementById('quiz-step');
  const totalQuestions = siteConfig.quiz.length;

  if (currentQuestionIndex >= totalQuestions) {
    // Quiz terminé !
    showQuizFinished();
    return;
  }

  const currentQ = siteConfig.quiz[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex) / totalQuestions) * 100;

  if (progressEl) progressEl.style.width = `${progressPercent}%`;
  if (stepEl) stepEl.textContent = `Question ${currentQuestionIndex + 1} / ${totalQuestions}`;

  const questionTitle = document.getElementById('quiz-question-title');
  const optionsContainer = document.getElementById('quiz-options-container');
  const feedbackContainer = document.getElementById('quiz-feedback');

  if (questionTitle) questionTitle.textContent = currentQ.question;
  if (feedbackContainer) {
    feedbackContainer.classList.add('hidden');
    feedbackContainer.innerHTML = '';
  }

  if (optionsContainer) {
    optionsContainer.innerHTML = currentQ.options.map((opt, idx) => {
      return `
        <button onclick="handleOptionClick(${idx})" class="quiz-option w-full text-left p-4 rounded-xl bg-white text-gray-800 font-medium text-sm md:text-base flex items-center justify-between shadow-sm">
          <span>${opt.text}</span>
          <span class="text-xl opacity-60">👉</span>
        </button>
      `;
    }).join('');
  }
}

window.handleOptionClick = function(optionIndex) {
  const currentQ = siteConfig.quiz[currentQuestionIndex];
  const option = currentQ.options[optionIndex];
  const buttons = document.querySelectorAll('.quiz-option');
  const feedbackContainer = document.getElementById('quiz-feedback');

  // Désactiver les boutons temporairement
  buttons.forEach(b => b.disabled = true);

  if (buttons[optionIndex]) {
    if (option.isCorrect) {
      buttons[optionIndex].classList.add('correct');
      playCelebrationChime();
    } else {
      buttons[optionIndex].classList.add('wrong');
    }
  }

  // Afficher le message d'ambiance
  if (feedbackContainer) {
    feedbackContainer.classList.remove('hidden');
    feedbackContainer.innerHTML = `
      <div class="p-4 rounded-xl ${option.isCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-rose-50 border border-rose-200 text-rose-800'} animate-fade-in flex flex-col md:flex-row items-center justify-between gap-3">
        <div class="flex items-center space-x-2">
          <span class="text-2xl">${option.isCorrect ? '🎉' : '😄'}</span>
          <p class="font-medium text-sm md:text-base">${option.feedback}</p>
        </div>
        <button onclick="nextQuestion()" class="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-lg font-semibold text-sm shadow-md transition-all whitespace-nowrap">
          ${currentQuestionIndex === siteConfig.quiz.length - 1 ? 'Voir le résultat 🔓' : 'Suivant ➔'}
        </button>
      </div>
    `;
  }
};

window.nextQuestion = function() {
  currentQuestionIndex++;
  renderQuestion();
};

function showQuizFinished() {
  quizCompleted = true;
  const progressEl = document.getElementById('quiz-progress-bar');
  const stepEl = document.getElementById('quiz-step');
  const quizCard = document.getElementById('quiz-card');

  if (progressEl) progressEl.style.width = '100%';
  if (stepEl) stepEl.textContent = 'Mission accomplie ! 🏆';

  if (quizCard) {
    quizCard.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="inline-flex p-4 bg-rose-100 rounded-full text-4xl animate-bounce">
          🔓
        </div>
        <h3 class="font-serif text-2xl md:text-3xl font-bold text-gray-800">Toutes les questions sont validées !</h3>
        <p class="text-gray-600 max-w-md mx-auto text-sm md:text-base">
          Tu as réussi le test haut la main mon amour ! Le cadenas de ta surprise est maintenant officiellement déverrouillé...
        </p>
        <div>
          <a href="#gift-section" class="inline-block px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Ouvrir la boîte cadeau 🎁
          </a>
        </div>
      </div>
    `;
  }

  // Activer visuellement la boîte cadeau
  const giftSection = document.getElementById('gift-section');
  if (giftSection) {
    giftSection.classList.remove('opacity-60', 'pointer-events-none');
  }

  triggerConfetti();
}

// -----------------------------------------------------------------------------
// 7. BOÎTE CADEAU MYSTÈRE & GRAND DÉVOILEMENT
// -----------------------------------------------------------------------------
function initGiftBox() {
  const giftBox = document.getElementById('interactive-gift-box');
  const modal = document.getElementById('vip-ticket-modal');
  const closeBtn = document.getElementById('close-ticket-modal');
  const printBtn = document.getElementById('print-ticket-btn');

  if (giftBox) {
    giftBox.addEventListener('click', () => {
      openGiftSurprise();
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function openGiftSurprise() {
  const modal = document.getElementById('vip-ticket-modal');
  
  // Pluie de confettis intense !
  triggerBigConfetti();
  playCelebrationChime();

  if (modal) {
    modal.classList.remove('hidden');
    // Scroll au modal
    modal.scrollIntoView({ behavior: 'smooth' });
  }
}

// Feux d'artifice de confettis avec canvas-confetti
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#fb7185', '#ffd166', '#a7f3d0', '#fbcfe8']
    });
  }
}

function triggerBigConfetti() {
  if (typeof confetti === 'function') {
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#f43f5e', '#f59e0b', '#10b981', '#ec4899', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}
