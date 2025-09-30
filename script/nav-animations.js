//nav links
document.addEventListener('DOMContentLoaded', () => {
  // Set initial state for animation
  gsap.set("nav a", { opacity: 0, y: -20 });

  // Animate in
  gsap.to("nav a", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });
});
