document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initDynamicContent();
  initLoveCounter();
  initTimeline();
  initQuiz();
  initGiftBox();
});

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
      this.size = Math.random() * 14 + 10;
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
    p.y = Math.random() * height;
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

function initDynamicContent() {
  if (typeof siteConfig === 'undefined') return;

  document.querySelectorAll('[data-bind="recipientName"]').forEach(el => el.textContent = siteConfig.recipientName);
  document.querySelectorAll('[data-bind="partnerName"]').forEach(el => el.textContent = siteConfig.partnerName);
  document.querySelectorAll('[data-bind="age"]').forEach(el => el.textContent = siteConfig.age);

  const heroBadge = document.getElementById('hero-badge');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroBtn = document.getElementById('hero-cta-btn');

  if (heroBadge && siteConfig.hero.badge) heroBadge.textContent = siteConfig.hero.badge;
  if (heroTitle && siteConfig.hero.title) heroTitle.innerHTML = siteConfig.hero.title;
  if (heroSubtitle && siteConfig.hero.subtitle) heroSubtitle.textContent = siteConfig.hero.subtitle;
  if (heroBtn && siteConfig.hero.buttonText) heroBtn.textContent = siteConfig.hero.buttonText;

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

  const listContainer = document.getElementById('ticket-included-list');
  if (listContainer && siteConfig.gift.includedList) {
    listContainer.innerHTML = siteConfig.gift.includedList
      .map(item => `<li class="flex items-center space-x-2"><span class="text-rose-400 font-bold">✔</span> <span>${item}</span></li>`)
      .join('');
  }
}

function initLoveCounter() {
  if (typeof siteConfig === 'undefined' || !siteConfig.relationshipStartDate) return;

  const startDate = new Date(siteConfig.relationshipStartDate);
  const daysEl = document.getElementById('counter-days');

  function update() {
    const now = new Date();
    const diffTime = Math.max(0, now - startDate);
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (daysEl) daysEl.textContent = days.toLocaleString('fr-FR');
  }

  update();
  setInterval(update, 60000);
}

function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || typeof siteConfig === 'undefined') return;

  container.innerHTML = siteConfig.timeline.map((item) => {
    return `
      <div class="polaroid-card flex flex-col items-center justify-between" style="transform: rotate(${item.rotation || '0deg'});">
        <div class="polaroid-tape"></div>
        <div class="w-full aspect-square rounded overflow-hidden bg-gray-100 mb-3 shadow-inner relative group">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='assets/images/photo1.svg'">
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
    showQuizFinished();
    return;
  }

  const currentQ = siteConfig.quiz[currentQuestionIndex];
  const progressPercent = (currentQuestionIndex / totalQuestions) * 100;

  if (progressEl) progressEl.style.width = `${progressPercent}%`;
  if (stepEl) stepEl.textContent = `Question ${currentQuestionIndex + 1} / ${totalQuestions}`;

  if (quizCard) {
    quizCard.innerHTML = `
      <h3 id="quiz-question-title" class="font-serif text-xl sm:text-2xl font-bold text-gray-800 text-center">
        ${currentQ.question}
      </h3>
      <div id="quiz-options-container" class="space-y-3">
        ${currentQ.options.map((opt, idx) => `
          <button onclick="handleOptionClick(${idx})" class="quiz-option w-full text-left p-4 rounded-xl bg-white text-gray-800 font-medium text-sm md:text-base flex items-center justify-between shadow-sm">
            <span>${opt.text}</span>
            <span class="text-xl opacity-60">👉</span>
          </button>
        `).join('')}
      </div>
      <div id="quiz-feedback" class="hidden"></div>
    `;
  }
}

window.handleOptionClick = function(optionIndex) {
  const currentQ = siteConfig.quiz[currentQuestionIndex];
  const option = currentQ.options[optionIndex];
  const buttons = document.querySelectorAll('.quiz-option');
  const feedbackContainer = document.getElementById('quiz-feedback');

  buttons.forEach(b => b.disabled = true);

  if (buttons[optionIndex]) {
    if (option.isCorrect) {
      buttons[optionIndex].classList.add('correct');
    } else {
      buttons[optionIndex].classList.add('wrong');
    }
  }

  if (feedbackContainer) {
    feedbackContainer.classList.remove('hidden');

    if (option.isCorrect) {
      const isLastQuestion = currentQuestionIndex === siteConfig.quiz.length - 1;
      feedbackContainer.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 animate-fade-in flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center space-x-2 text-center sm:text-left">
            <span class="text-2xl">🎉</span>
            <p class="font-medium text-sm md:text-base">${option.feedback}</p>
          </div>
          <button onclick="nextQuestion()" class="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer">
            ${isLastQuestion ? 'Débloquer mon cadeau ! 🔓🎁' : 'Question suivante ➔'}
          </button>
        </div>
      `;
    } else {
      feedbackContainer.innerHTML = `
        <div class="p-5 rounded-xl bg-rose-50 border-2 border-rose-300 text-rose-900 animate-fade-in flex flex-col items-center text-center gap-3 shadow-md">
          <div class="space-y-1">
            <span class="text-3xl inline-block mb-1">🙈 Oups !</span>
            <p class="font-bold text-base text-rose-700">${option.feedback}</p>
            <p class="text-xs text-rose-600 font-medium">Pour débloquer ton cadeau surprise, tu dois faire un sans-faute !</p>
          </div>
          <button onclick="restartQuiz()" class="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer mt-1">
            <span>🔄</span>
            <span>Recommencer le test</span>
          </button>
        </div>
      `;
    }
  }
};

window.nextQuestion = function() {
  currentQuestionIndex++;
  renderQuestion();
};

window.restartQuiz = function() {
  currentQuestionIndex = 0;
  const progressEl = document.getElementById('quiz-progress-bar');
  if (progressEl) progressEl.style.width = '0%';
  renderQuestion();
  
  const quizSection = document.getElementById('quiz-section');
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: 'smooth' });
  }
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
        <h3 class="font-serif text-2xl md:text-3xl font-bold text-gray-800">100% de bonnes réponses ! 🏆</h3>
        <p class="text-gray-600 max-w-md mx-auto text-sm md:text-base">
          Bravo mon amour, tu as réussi le test haut la main ! Ton cadeau d'anniversaire vient officiellement d'apparaître ci-dessous...
        </p>
        <div>
          <a href="#gift-section" class="inline-block px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Découvre ton cadeau 🎁
          </a>
        </div>
      </div>
    `;
  }

  const giftSection = document.getElementById('gift-section');
  if (giftSection) {
    giftSection.classList.remove('hidden');
    setTimeout(() => {
      giftSection.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }

  triggerConfetti();
}

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
  if (!quizCompleted) return;

  const modal = document.getElementById('vip-ticket-modal');
  
  triggerBigConfetti();

  if (modal) {
    modal.classList.remove('hidden');
    modal.scrollIntoView({ behavior: 'smooth' });
  }
}

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
    const end = Date.now() + 1 * 1000;
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
