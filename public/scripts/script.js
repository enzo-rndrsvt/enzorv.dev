const sections = [
  { trigger: "apropos", target: "aproposCible", block: "center" },
  { trigger: "projets", target: "projetsCible", block: "start" },
  { trigger: "contact", target: "contactCible", block: "center" },
];

// Fonction pour ajouter la classe 'active-link' au lien actif
function activateLink(linkId) {
  document.querySelectorAll("header a").forEach((link) => {
    link.classList.remove("active-link");
  });
  document.getElementById(linkId).classList.add("active-link");
}



// Écouteur d'événements pour le clic, pour faire défiler vers la section correspondante
sections.forEach(({ trigger, target, block }) => {
  const element = document.getElementById(trigger);
  const cible = document.getElementById(target);

  element.addEventListener("click", function (e) {
    e.preventDefault();
    cible.scrollIntoView({ behavior: "smooth", block: block });
  });
});



// Fonction pour ouvrir la prévisualisation
function openPreview(imageElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  
  // Met à jour l'image de la modale avec la source de l'image cliquée
  lightboxImg.src = imageElement.src;
  lightbox.style.display = "flex"; // Affiche la modale
}

// Fonction pour fermer la prévisualisation
function closePreview() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none"; // Cache la modale
}



