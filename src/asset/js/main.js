// ===================================================================
// Section : Gestion de l'écran de démarrage (Splash Screen)
// ===================================================================
function initSplashScreen() {
    // Récupère l'élément splash par son identifiant
    const splash = document.getElementById("splash");
    if (!splash) return; // Vérifie que l'élément existe
    // Attend 2000ms avant de lancer la transition de disparition
    setTimeout(() => {
        splash.style.transition = "opacity 1s ease-out";
        splash.style.opacity = "0";
        // Après 1000ms, cache définitivement l'écran de démarrage
        setTimeout(() => {
            splash.style.display = "none";
        }, 1000);
    }, 2000);
}

// ===================================================================
// Section : Défilement fluide pour les liens de navigation
// ===================================================================
function initSmoothScrolling() {
    // Récupère tous les liens de navigation ayant la classe .nav-link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            // Récupère l'élément cible grâce à l'attribut href
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                // Fait défiler la page vers l'élément cible avec une transition fluide
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// ===================================================================
// Section : Importation de navbar.html dans header.html
// ===================================================================
function importNavbar() {
    // Récupère le contenu de navbar.html depuis le dossier components
    fetch('/src/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            // Récupère le header par son identifiant
            const header = document.getElementById('header');
            if (header) {
                // Insère le contenu de la navbar dans le header
                header.innerHTML = data;
                // Initialise le défilement fluide après l'importation de la navbar
                initSmoothScrolling();
            }
        })
        .catch(error => console.error("Erreur lors de l'importation de la navbar :", error));
}

// ===================================================================
// Section : Importation de header.html dans toutes les pages
// ===================================================================
function importHeader() {
    // Récupère le contenu de header.html
    fetch('/src/components/header.html')
        .then(response => response.text())
        .then(data => {
            // Récupère l'élément header par son identifiant
            const header = document.getElementById('header');
            if (header) {
                // Insère le contenu récupéré au début du header
                header.insertAdjacentHTML('afterbegin', data);
            }
        })
        .catch(error => console.error("Erreur lors de l'importation du header :", error));
}

// ===================================================================
// Section : Importation de footer.html dans toutes les pages
// ===================================================================
function importFooter() {
    // Récupère le contenu de footer.html
    fetch('/src/components/footer.html')
        .then(response => response.text())
        .then(data => {
            // Récupère l'élément footer par son identifiant
            const footer = document.getElementById('footer');
            if (footer) {
                // Ajoute le contenu à la fin du footer
                footer.insertAdjacentHTML('beforeend', data);
            }
        })
        .catch(error => console.error("Erreur lors de l'importation du footer :", error));
}

// ===================================================================
// Section : Gestion du formulaire de contact
// ===================================================================
function initContactForm() {
    // Récupère le formulaire de contact par son identifiant
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return; // Vérifie que le formulaire existe
    // Ajoute un gestionnaire d'événement sur la soumission du formulaire
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Affiche un message de confirmation
        alert("Merci pour votre message !");
        // Réinitialise le formulaire
        this.reset();
    });
}

// ===================================================================
// Initialisation de toutes les sections
// ===================================================================
importNavbar();
importHeader();
importFooter();
initSplashScreen();
// initSmoothScrolling est appelé après l'importation de la navbar pour respecter l'ordre de chargement
initContactForm();