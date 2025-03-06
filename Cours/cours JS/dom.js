// const inputName = document.getElementById('inputName');
// const inputEmail = document.getElementById('inputEmail');
// const inputSubject = document.getElementById('inputSubject');
// const inputMessage = document.getElementById('inputMessage');
//
// monFormulaire.addEventListener('submit', function(e) {
//     e.preventDefault();
//
//     if (inputName.value.trim() === '' ||
//         inputEmail.value.trim() === '' ||
//         inputSubject.value.trim() === '' ||
//         inputMessage == null) {
//
//         inputName.value = 'erreur : le champ ne peut pas être vide';
//         console.log(inputName);
//         inputName.style.borderColor = 'red';
//         inputName.style.borderWidth = '1px';
//         inputName.style.borderStyle = 'solid';
//
//         return;
//     }
//
//     inputName.textContent = `formulaire soumis avec le nom : ${inputName},${inputEmail},${inputSubject},${inputMessage}`;
//     inputName.style.border = 'solid 1px green';
//     console.log(`formulaire soumis avec le nom : ${inputName},${inputEmail},${inputSubject},${inputMessage}`);
//     monFormulaire.reset();
// });

// ===== PROTECTION CONTRE LES ATTAQUES XSS =====
// La fonction escapeHtml convertit les caractères spéciaux en entités HTML
// Cela empêche l'injection de code malveillant (attaques XSS)
// Par exemple: "<script>" devient "&lt;script&gt;" et ne sera pas exécuté comme du code

// Fonction de vérification du formulaire
// function checkForm() {
//     const inputs = document.querySelectorAll('#monFormulaire input, #monFormulaire textarea');
//     let formIsValid = true;

//     inputs.forEach(input => {
//         if (input.value.trim() === '') {
//             input.style.border = '2px solid red';
//             formIsValid = false;
//         }else {
//             input.style.border = '2px solid green';
//         }
//     });
//     return formIsValid;
// }
// Vérification à la soumission
// document.getElementById('monFormulaire').addEventListener('submit', function(event) {
//     if(!checkForm()) {
//         event.preventDefault();
//         alert('Veuillez remplir tous les champs du formulaire.');
//     }
// });

// Vérification en temps réel
// document.querySelectorAll('#monFormulaire input, #monFormulaire textarea').forEach(input => {
//     input.addEventListener('input', function() {
//         if(this.value.trim() === ''){
//             this.style.border = '2px solid red';
//         } else{
//             this.style.border = '2px solid green'
//         }
//     });
// });

    // Ce script est vulnérable aux attaques XSS : il insère directement et
    // les données utilisateur dans le DOM sans aucune sécurisation.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire pour rester sur la même page

    // Récupération des valeurs saisies
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Insertion des données dans le DOM avec innerHTML, sans échappement (vulnérable au XSS)
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Informations reçues :</h2>' +
        '<p>Nom : ' + nom + '</p>' +
        '<p>Prénom : ' + prenom + '</p>' +
        '<p>Email : ' + email + '</p>' +
        '<p>Message : ' + message + '</p>';
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// document.getElementById('myForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Empêche l'envoi du formulaire pour rester sur la même page
//
//     // Fonction d'échappement pour éviter les attaques XSS
//     function escapeHtml(unsafe) {
//         return unsafe
//             .replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/"/g, "&quot;")
//             .replace(/'/g, "&#039;");
//     }
//
//     // Récupération des valeurs saisies et échappement
//     const nom = escapeHtml(document.getElementById('nom').value);
//     const prenom = escapeHtml(document.getElementById('prenom').value);
//     const email = escapeHtml(document.getElementById('email').value);
//     const message = escapeHtml(document.getElementById('message').value);
//
//     // Insertion des données dans le DOM avec innerHTML, après échappement
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = '<h2>Informations reçues :</h2>' +
//         '<p>Nom : ' + nom + '</p>' +
//         '<p>Prénom : ' + prenom + '</p>' +
//         '<p>Email : ' + email + '</p>' +
//         '<p>Message : ' + message + '</p>';
// });
