/* ============================================================
   BURNET BBQ — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky Nav + Active Link on Scroll ---------- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll handler
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  function handleScroll() {
    const scrollY = window.scrollY;

    // Add scrolled class to navbar
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - navbar.offsetHeight - 80;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Close mobile nav when link clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('navToggle').classList.remove('active');
    });
  });

  /* ---------- Mobile Nav Toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksEl.classList.toggle('open');
  });

  /* ---------- Reveal on Scroll (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after revealing (one-time)
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Menu Filter Tabs ---------- */
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuItems = document.querySelectorAll('.menu-item');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      // Update active tab
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter items
      menuItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
          // Re-trigger reveal animation
          item.classList.remove('visible');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              item.classList.add('visible');
            });
          });
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  /* ---------- Smooth Scroll for All Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Navbar link active on click (for non-scroll nav) ---------- */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

});
