document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.getElementById('scroll-up-btn');
  const navBtn = document.getElementById('nav-icon-btn');
  const navMenu = document.getElementById('nav-menu');
  const svg = document.getElementById('nav-icon-svg');
  let isOpen = false;

  // Hide both buttons if at the top of the page
  window.addEventListener('scroll', () => {
    const atTop = window.scrollY === 0;

    [scrollBtn, navBtn].forEach(btn => {
      if (btn) {
        btn.style.opacity = atTop ? '0' : '1';
        btn.style.pointerEvents = atTop ? 'none' : 'auto';
      }
    });
  });

  // Scroll-up click action
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      console.log('Scroll-up button clicked');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  } else {
    console.error('Scroll-up button not found!');
  }

  // Nav button toggle
  if (navBtn) {
    navBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      navBtn.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
        navMenu.style.opacity = '1';
        navMenu.style.pointerEvents = 'auto';
        navMenu.style.transform = 'translateY(0)';
        svg.style.transform = 'rotate(90deg)';
        [...svg.querySelectorAll('path')].forEach(path => path.style.stroke = '#1D4ED8');
      } else {
        navMenu.style.opacity = '0';
        navMenu.style.pointerEvents = 'none';
        navMenu.style.transform = 'translateY(16px)';
        svg.style.transform = 'rotate(0deg)';
        [...svg.querySelectorAll('path')].forEach(path => path.style.stroke = '#425B7D');
      }
    });
  }
});