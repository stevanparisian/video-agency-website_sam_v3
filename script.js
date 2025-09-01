/*
 * Simple slider logic.
 * When a navigation number is clicked, move the slide container and update the
 * hero section with the project title and artist defined in the slide's data attributes.
 */
document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.slides');
  const numberButtons = document.querySelectorAll('.nav-numbers span');
  const heroTitle = document.querySelector('.hero h1');
  const heroArtist = document.querySelector('.hero p');

  function goToSlide(index) {
    // Move the slide container
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    // Update active number styling
    numberButtons.forEach(btn => btn.classList.remove('active'));
    numberButtons[index].classList.add('active');
    // Grab the selected slide and update hero text
    const selectedSlide = slidesContainer.children[index];
    const title = selectedSlide.getAttribute('data-title');
    const artist = selectedSlide.getAttribute('data-artist');
    heroTitle.textContent = title;
    heroArtist.textContent = artist;
  }

  numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index, 10);
      goToSlide(index);
    });
  });

  // Optional: automatically cycle through slides every 5 seconds for a dynamic feel
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % numberButtons.length;
    goToSlide(currentIndex);
  }, 5000);
});