const sections = [
  { trigger: "apropos", target: "aproposCible" },
  { trigger: "projets", target: "projetsCible" },
  { trigger: "contact", target: "contactCible" },
];

// Fonction pour ajouter la classe 'active-link' au lien actif
function activateLink(linkId) {
  document.querySelectorAll("header a").forEach((link) => {
    link.classList.remove("active-link");
  });
  document.getElementById(linkId).classList.add("active-link");
}

// Fonction pour gérer le défilement et activer le lien correspondant
function handleScroll() {
  sections.forEach(({ trigger, target }) => {
    const section = document.getElementById(target);
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + 60; // ajustement pour la hauteur du header

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      activateLink(trigger);
    }
  });
}

// Écouteur d'événements pour le clic, pour faire défiler vers la section correspondante
sections.forEach(({ trigger, target }) => {
  const element = document.getElementById(trigger);
  const cible = document.getElementById(target);

  element.addEventListener("click", function (e) {
    e.preventDefault();
    cible.scrollIntoView({ behavior: "smooth" });
  });
});

// Écouteur d'événements pour le défilement
document.addEventListener("scroll", handleScroll);
