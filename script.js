document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile nav after clicking a link
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768 && navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
        }
      }
    });
  });

  // Highlight active menu item based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const updateActiveNav = () => {
    let currentSectionId = '';
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 90; // account for fixed nav
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSectionId)) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Run on load

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Scroll-to-top button logic
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  const handleScrollTopBtn = () => {
    if (!scrollTopBtn) return;
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  };

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', handleScrollTopBtn);
  handleScrollTopBtn(); // Run on load
});

const navToggle = document.getElementById('navToggle');
const mobileLinks = document.getElementById('mobileLinks');

if (navToggle && mobileLinks) {
  navToggle.addEventListener('click', () => {
    mobileLinks.classList.toggle('hidden');
  });
}
