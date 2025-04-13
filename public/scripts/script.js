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
  
  // Configuration pour un défilement fluide
  const carouselOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Gestion du défilement tactile et souris
  let isDown = false;
  let startX;
  let scrollLeft;
  let velocityX = 0;
  let lastX = 0;
  let rafId = null;

  // Arrêter l'animation de défilement
  function stopMomentumTracking() {
    cancelAnimationFrame(rafId);
  }

  // Animation de défilement avec inertie
  function performMomentumScroll() {
    carousel.scrollLeft += velocityX;
    velocityX *= 0.95; // Ralentissement progressif

    if (Math.abs(velocityX) > 0.5) {
      rafId = requestAnimationFrame(performMomentumScroll);
    }
  }

  // Événements pour le défilement
  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    stopMomentumTracking();
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
    
    // Démarrer le défilement avec inertie
    if (Math.abs(velocityX) > 1) {
      rafId = requestAnimationFrame(performMomentumScroll);
    }
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
    
    // Démarrer le défilement avec inertie
    if (Math.abs(velocityX) > 1) {
      rafId = requestAnimationFrame(performMomentumScroll);
    }
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    
    // Calcul de la vélocité
    velocityX = x - lastX;
    lastX = x;
    
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Gestion des événements tactiles
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    stopMomentumTracking();
  }, { passive: false });

  carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    
    // Calcul de la vélocité
    velocityX = x - lastX;
    lastX = x;
    
    carousel.scrollLeft = scrollLeft - walk;
    e.preventDefault();
  }, { passive: false });

  carousel.addEventListener('touchend', () => {
    // Démarrer le défilement avec inertie
    if (Math.abs(velocityX) > 1) {
      rafId = requestAnimationFrame(performMomentumScroll);
    }
  }, { passive: false });

  // Centrage des projets au clic
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