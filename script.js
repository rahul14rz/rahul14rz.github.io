document.addEventListener('DOMContentLoaded', () => {
  
  // ==================== 1. THEME MANAGEMENT ====================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve existing preference or check system default
  const savedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  // Initialize current theme state
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
    });
  }

  // ==================== 2. MOBILE DRAWER & HAMBURGER ====================
  const hamburger = document.getElementById('hamburger');
  const navLinksList = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navLinksList) {
    const toggleMenu = () => {
      const isOpen = hamburger.classList.toggle('active');
      navLinksList.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
      hamburger.classList.remove('active');
      navLinksList.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when a navigation item is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on resize if screen grows larger than mobile threshold
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  // ==================== 3. SCROLL ACTIVE & STICKY NAV ====================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section, header');
  const navLinksArray = Array.from(navLinks);

  const handleScrollEffects = () => {
    // 3.1. Sticky navbar toggle
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 3.2. Active link state matching
    let currentActiveId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // accounting for navigation pad
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentActiveId = section.getAttribute('id');
      }
    });

    navLinksArray.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentActiveId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScrollEffects);
  handleScrollEffects(); // Execute once on start

  // ==================== 4. SCROLL REVEAL (INTERSECTION OBSERVER) ====================
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once animated, no need to watch it again
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback if observer not supported
    revealElements.forEach(element => element.classList.add('visible'));
  }

  // ==================== 5. EMAIL COPY HANDLER ====================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const developerEmail = 'rahulmanoharan0@gmail.com';

  if (copyEmailBtn && copyBtnText) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(developerEmail)
        .then(() => {
          copyEmailBtn.classList.add('success');
          copyBtnText.textContent = 'Copied to Clipboard!';
          
          setTimeout(() => {
            copyEmailBtn.classList.remove('success');
            copyBtnText.textContent = 'Copy Email Address';
          }, 2500);
        })
        .catch(err => {
          console.error('Email copy flow failed: ', err);
        });
    });
  }
});
