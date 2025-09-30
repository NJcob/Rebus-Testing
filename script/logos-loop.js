document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.logo-loop-container');
  const track = document.querySelector('.logo-loop-track');

  // Clone the logos for seamless scroll
  track.innerHTML += track.innerHTML;

  let scrollPos = 0;
  let isInView = false;
  const speed = 0.5; // pixels per frame — lower is smoother & slower

  function animate() {
    if (isInView) {
      scrollPos += speed;
      if (scrollPos >= track.scrollWidth / 2) {
        scrollPos = 0;
      }
      track.style.transform = `translateX(${-scrollPos}px)`;
    }
    requestAnimationFrame(animate);
  }

  // Observer to check if the container is in view
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      isInView = entry.isIntersecting;
      // Optional: fade out when not visible
      container.style.opacity = isInView ? '1' : '0';
      container.style.transition = 'opacity 0.6s ease';
    });
  }, { threshold: 0.1 });

  observer.observe(container);
  animate();
});
