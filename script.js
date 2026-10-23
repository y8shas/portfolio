document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.about-card, .project-card, .timeline-content');

  const reveal = () => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  };

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    card.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });

  reveal();
  window.addEventListener('scroll', reveal, { passive: true });
});

