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