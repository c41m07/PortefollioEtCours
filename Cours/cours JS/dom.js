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
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputSubject = document.getElementById('inputSubject');
const inputMessage = document.getElementById('inputMessage');
const monFormulaire = document.getElementById('monFormulaire');

function champvid(field) {
    return field.value.trim() === '';
}

function setError(field, message) {
    field.value = message;
    field.style.borderColor = 'red';
    field.style.borderWidth = '1px';
    field.style.borderStyle = 'solid';
}

monFormulaire.addEventListener('submit', function(e) {
    e.preventDefault();

    const isNameEmpty = champvid(inputName);
    const isEmailEmpty = champvid(inputEmail);
    const isSubjectEmpty = champvid(inputSubject);
    const isMessageEmpty = champvid(inputMessage);

    if (isNameEmpty || isEmailEmpty || isSubjectEmpty || isMessageEmpty) {
        if (isNameEmpty) setError(inputName, 'erreur : le champ ne peut pas être vide');
        if (isEmailEmpty) setError(inputEmail, 'erreur : le champ ne peut pas être vide');
        if (isSubjectEmpty) setError(inputSubject, 'erreur : le champ ne peut pas être vide');
        if (isMessageEmpty) setError(inputMessage, 'erreur : le champ ne peut pas être vide');
        return;
    }

    console.log(`formulaire soumis avec le nom : ${inputName.value}, ${inputEmail.value}, ${inputSubject.value}, ${inputMessage.value}`);
    inputName.style.border = 'solid 1px green';
    monFormulaire.reset();
});