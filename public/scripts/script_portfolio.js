const sections = [
    { trigger: "c1Target", target: "c1Cible", block: "start" },
    { trigger: "c2Target", target: "c2Cible", block: "start" },
    { trigger: "c3Target", target: "c3Cible", block: "start" },
    { trigger: "c4Target", target: "c4Cible", block: "start" },
    { trigger: "c5Target", target: "c5Cible", block: "start" },
    { trigger: "c6Target", target: "c6Cible", block: "start" },
    { trigger: "c7Target", target: "c7Cible", block: "start" },
    { trigger: "stageTarget", target: "stageCible", block: "start" },
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
  
  

  
  
  