const sections = [
  { trigger: "apropos", target: "aproposCible", block: "center" },
  { trigger: "projets", target: "projetsCible", block: "start" },
  { trigger: "contact", target: "contactCible", block: "center" },
];

function activateLink(linkId) {
  document.querySelectorAll("header a").forEach((link) => {
    link.classList.remove("active-link");
  });
  document.getElementById(linkId).classList.add("active-link");
}

sections.forEach(({ trigger, target, block }) => {
  const element = document.getElementById(trigger);
  const cible = document.getElementById(target);

  element.addEventListener("click", function (e) {
    e.preventDefault();
    cible.scrollIntoView({ behavior: "smooth", block: block });
  });
});


function openImage(imageElement) {
  // Créer le modal s'il n'existe pas
  let modal = document.getElementById('imageModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'image-modal';
    
    const modalImage = document.createElement('img');
    modalImage.className = 'image-modal-content';
    
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
    
    // Fermer le modal en cliquant n'importe où
    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  // Sélectionner l'image dans le modal
  const modalImage = modal.querySelector('.image-modal-content');
  
  // Définir la source de l'image
  modalImage.src = imageElement.src;
  modalImage.alt = imageElement.alt;
  
  // Afficher le modal
  modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.project-carousel');
  let startX = 0;
  let scrollLeft = 0;
  let isDown = false;

  // Événements souris
  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Événements tactiles
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  }, { passive: true });

  carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  }, { passive: true });

  // Centrage automatique des projets
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      card.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      });
    });
  });
});