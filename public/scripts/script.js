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




function openPreview(imageElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  
  lightboxImg.src = imageElement.src;
  lightbox.style.display = "flex";
}

function closePreview() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}



