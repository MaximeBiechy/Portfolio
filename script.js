// On récupère les éléments du DOM
const burgerMenu = document.querySelector(".burger-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

// On ajoute un événement au clic sur le burger menu
burgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// On ajoute un événement au clic sur les liens du menu pour fermer le menu burger et activer le dernier lien cliqué
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // On ferme le menu burger au clic sur un lien
    navbar.classList.remove("active");

    // On supprime la classe "active" de tous les liens
    navLinks.forEach((navLink) => navLink.classList.remove("active"));

    // On ajoute la classe "active" uniquement au lien cliqué
    link.classList.add("active");
  });
});
