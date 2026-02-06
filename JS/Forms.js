console.log("Forms.js loaded");

const form = document.querySelector(".Form");
const submitButton = document.querySelector("#submitform");

submitButton.addEventListener("submit", function(event) {
       // on empeche la soumission du formulaire
    // pour éviter le rechargement de page
    event.preventDefault();
    console.log('j\'ai soumis mon formulaire');
});

