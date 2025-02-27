//CONST
const todoInput = document.querySelector('.input');
const todoaddButton = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');

//LISTENER
todoaddButton.addEventListener('click', fadd);

//FUNCTIONS
function fadd(event) {
    event.preventDefault();
    console.log('Fonction ok');

    // Div
    const newdiv = document.createElement('div');
    newdiv.classList.add('todo-item-container'); // Ajoute une classe à la div
    console.log('DIV créé');

    // Li
    const newli = document.createElement('li');
    newli.innerText = todoInput.value || "Test"; // Utilise la valeur saisie ou "Test" par défaut
    newli.classList.add('todo-item');
    newdiv.appendChild(newli);
    console.log('Li créé');

    // Bouton de validation
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('checkbox');
    newdiv.appendChild(checkButton);
    console.log('Bouton check créé');

    // Bouton de suppression
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('delete');
    newdiv.appendChild(trashButton);
    console.log('Bouton trash créé');

    // Ajoute le newdiv au conteneur de la liste
    todoList.appendChild(newdiv);
}
