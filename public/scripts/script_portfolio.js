const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumberSpan = document.getElementById('pageNumber');

let currentPageIndex = 0;

function updatePage() {
    // Masquer toutes les pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Afficher la page courante
    pages[currentPageIndex].classList.add('active');
    
    // Mettre à jour le numéro de page
    // pageNumberSpan.textContent = `${currentPageIndex + 1} / ${pages.length}`;
    if (currentPageIndex + 1 === 7){
        pageNumberSpan.textContent = `Culture générale`;
    } else if (currentPageIndex + 1 === 8){
        pageNumberSpan.textContent = `Profil professionnel`;
    } else {
        pageNumberSpan.textContent = `Compétences ${currentPageIndex + 1}`
    }
    
    // Gérer l'état des boutons
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === pages.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updatePage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updatePage();
    }
});

// Initialisation
updatePage();


