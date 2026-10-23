document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card, .about-card');

  const revealCards = () => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  };

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  revealCards();
  window.addEventListener('scroll', revealCards, { passive: true });
});
