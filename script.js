let currentLang = localStorage.getItem('lang');
if (!currentLang || !['en', 'fr', 'es'].includes(currentLang)) {
  currentLang = 'en';
}

const introOverlay = document.getElementById('intro-overlay');
const preloader = document.getElementById('preloader');
let introSeen = localStorage.getItem('introSeen');

if (!introSeen && introOverlay) {
  // First visit: play cinematic intro, skip preloader
  if (preloader) preloader.style.display = 'none';
  document.body.classList.add('preloader-active');

  setTimeout(() => {
    introOverlay.classList.add('hidden');
    document.body.classList.remove('preloader-active');
    document.body.classList.add('loaded');
    localStorage.setItem('introSeen', 'true');
    setTimeout(() => {
      introOverlay.style.display = 'none';
    }, 700);
  }, 2700);
} else {
  // Returning visit: skip intro, run preloader
  if (introOverlay) introOverlay.style.display = 'none';

  if (preloader) {
    document.body.classList.add('preloader-active');
    let pageReady = false;
    let timerDone = false;

    function hidePreloader() {
      if (pageReady && timerDone) {
        preloader.classList.add('hidden');
        document.body.classList.remove('preloader-active');
        document.body.classList.add('loaded');
        setTimeout(() => { preloader.style.display = 'none'; }, 700);
      }
    }

    setTimeout(() => { timerDone = true; hidePreloader(); }, 1500);

    if (document.readyState === 'complete') {
      pageReady = true;
      hidePreloader();
    } else {
      window.addEventListener('load', () => {
        pageReady = true;
        hidePreloader();
      });
    }
  }
}

let words = [];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function setLanguage(lang) {
  if (typeof i18n === 'undefined') return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = i18n[lang][key];
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const html = i18n[lang][key];
    if (html) el.innerHTML = html;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = i18n[lang][key];
    if (text) el.placeholder = text;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  if (typingElement) {
    words = i18n[lang]['hero.typing-words'];
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typingElement.textContent = '';
  }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

if (typeof i18n !== 'undefined' && i18n[currentLang]) {
  words = i18n[currentLang]['hero.typing-words'];
}

function typeEffect() {
  if (!typingElement || !words.length) return;
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 400);
    return;
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

if (typingElement && words.length) typeEffect();

if (typeof i18n !== 'undefined') setLanguage(currentLang);

const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('glass-nav');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('glass-nav');
      navbar.classList.add('bg-transparent');
    }
  });
}

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
    if (menuIconOpen) menuIconOpen.classList.toggle('hidden');
    if (menuIconClose) menuIconClose.classList.toggle('hidden');
  });

  document.querySelectorAll('[data-mobile]').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIconOpen) menuIconOpen.classList.remove('hidden');
      if (menuIconClose) menuIconClose.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const navLinks = document.querySelectorAll('.nav-link');

if (navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
  });
}

const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.querySelectorAll('.gallery-item img').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => img.classList.add('loaded'));
    img.addEventListener('error', () => img.classList.add('loaded'));
  }
});
