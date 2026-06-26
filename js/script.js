document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .highlight-card, .steps div");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(18px)";
    setTimeout(() => {
      card.style.transition = "opacity .5s ease, transform .5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 70);
  });
});
