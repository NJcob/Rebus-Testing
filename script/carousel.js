window.addEventListener('DOMContentLoaded', () => {
  const slides = [
    {
      title: "Abu Dhabi International Airport Terminal A",
      subtitle: "Connecting the World",
      text: "ORAT Management (Subcontractor to Trojan)",
      image: "images/abudhabi-airport.jpg",
    },
    {
      title: "Barakah Nuclear Power Plant",
      subtitle: "Powering the Future",
      text: "PPS-I - Construction and Turnover Management, Testing Commissioning Management (In-House)",
      image: "images/Barakah-Nuclear-Energy-Plant-2.jpg",
    },
    {
      title: "Forsan Mall, Khalifa City",
      subtitle: "Discover, Dine, Delight at Forsan Mall",
      text: "PMC(Project Management Consultanct / Closeout",
      image: "images/Forsan Mall.jpg",
    },
    {
      title: "Fakeeh University Hospital",
      subtitle: "Excellence in Care, Every Step of the Way",
      text: "Engineering and Construction Management",
      image: "images/Fakeeh Hospital.webp",
    },
    {
      title: "Fasion Dome @ Dubai Mall",
      subtitle: "Where Style Meets Elegance",
      text: "Commissioning & Closeout Management",
      image: "images/Fashion Dome.jpg",
    },
    {
      title: "William Hare",
      subtitle: "Forging Innovation, Shaping Skylines",
      text: "General Contracting",
      image: "images/William Hare.jpeg",
    },
  ];

  let currentIndex = 0;
  const carouselImage = document.getElementById("carousel-image");
  const titleEl = document.getElementById("title");
  const subtitleEl = document.getElementById("subtitle");
  const textEl = document.getElementById("text");
  const textPanel = document.getElementById("text-panel");

  let autoShuffleInterval;

  function fadeOut(element) {
    return new Promise((resolve) => {
      element.style.opacity = 0;
      setTimeout(resolve, 500);
    });
  }

  function fadeIn(element) {
    return new Promise((resolve) => {
      element.style.opacity = 1;
      setTimeout(resolve, 500);
    });
  }

  async function updateSlide(index) {
    await Promise.all([fadeOut(carouselImage), fadeOut(textPanel)]);

    const slide = slides[index];
    titleEl.textContent = slide.title;
    subtitleEl.textContent = slide.subtitle;
    textEl.textContent = slide.text;
    carouselImage.src = slide.image;

    await Promise.all([fadeIn(carouselImage), fadeIn(textPanel)]);
  }

  function resetAutoShuffle() {
    if (autoShuffleInterval) clearInterval(autoShuffleInterval);
    autoShuffleInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    }, 5000); // every 5 seconds
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
    resetAutoShuffle(); // reset timer on manual click
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
    resetAutoShuffle(); // reset timer on manual click
  });

  // Initialize first slide
  carouselImage.style.opacity = 1;
  textPanel.style.opacity = 1;
  updateSlide(currentIndex);

  // Start auto shuffle
  resetAutoShuffle();
});