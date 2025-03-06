////////////////////////////////////////////////////CONST//////////////////////////////////////////////////////////////
const todoInput = document.querySelector('.input');
const todoaddButton = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');
const fltroption = document.getElementById('filter');

////////////////////////////////////////////////////LET////////////////////////////////////////////////////////////////
let tablist = [];

////////////////////////////////////////////////////LISTENER////////////////////////////////////////////////////////////
todoaddButton.addEventListener('click', fadd);
fltroption.addEventListener('change', ffiltre);
addEventListener(`load`, fload);

////////////////////////////////////////////////////FUNCTION//////////////////////////////////////////////////////////////
//fonction bouton ajouter
function fadd(event) {
    event.preventDefault();
    console.log('Fonction ok');

    // Vérification si le champ est vide
    if (!todoInput.value.trim()) {
         // Créé une notification d'erreur
        const notifError = document.createElement('div');
        const iconElement = document.createElement('i');
        const spaceText = document.createTextNode(' ');
        const messageText = document.createTextNode('Veuillez entrer du texte avant d\'ajouter');
        notifError.className = 'notifError';
        iconElement.className = 'fas fa-exclamation-circle';
        notifError.appendChild(iconElement);
        notifError.appendChild(spaceText);
        notifError.appendChild(messageText);
        document.body.appendChild(notifError);

        // Pop la notification
        setTimeout(() => {
            notifError.classList.add('pop');
        }, 10);

        // Enlève la notification
        setTimeout(() => {
            notifError.classList.remove('pop');
            setTimeout(() => notifError.remove(), 500); // enlève la notification après 500ms
        }, 3000);

        return; // Sortir de la fonction sans ajouter d'élément
    }

    // ajout Li
    const newli = document.createElement('li');
    newli.classList.add('todo-item');
    newli.id='todo-'+ Date.now() // ajout d'un id unique
    todoList.appendChild(newli);

    // ajout Div pour le texte
    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.innerText = todoInput.value;
    newli.appendChild(textDiv);

    // ajout Div pour les actions
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');
    newli.appendChild(actionsDiv);

    // ajout bouton de validation dans Div actions
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('checkbox');
    actionsDiv.appendChild(checkButton);

    // ajout bouton de suppression dans Div actions
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('delete');
    actionsDiv.appendChild(trashButton);

    checkButton.addEventListener('click', fcheck);
    trashButton.addEventListener('click', fsupp);
    fsave();
    todoInput.value = ''; // efface le champ input
}

//fonction bouton supprimer
function fsupp(event) {
    event.preventDefault();
    console.log('Fonction supp ok');
    const item = event.target.closest('.todo-item'); // récupérer le parent li

    if (item.classList.contains('completed')) {
        item.remove();
        fsave();
    } else {
        console.log('Erreur check');
        // créé une notification d'erreur
        const notifError = document.createElement('div'); // créé un élément div
        const iconElement = document.createElement('i'); // créé un élément i
        const spaceText = document.createTextNode(' '); // créé un espace
        const messageText = document.createTextNode('Veuillez cocher la case avant de supprimer'); // créé un texte
        notifError.className = 'notifError';

        iconElement.className = 'fas fa-exclamation-circle';
        notifError.appendChild(iconElement);
        notifError.appendChild(spaceText);
        notifError.appendChild(messageText);
        document.body.appendChild(notifError);


        // pop la notification
        setTimeout(() => {
            notifError.classList.add('pop');
        }, 10);

        // enlève la notification
        setTimeout(() => {
            notifError.classList.remove('pop');
            setTimeout(() => notifError.remove(), 500); // enlève la notification après 500ms
        }, 3000);
    }
}

//fonction bouton check
function fcheck(event) {
    event.preventDefault();
    console.log('Fonction check ok');
    const todo = event.target.closest('.todo-item'); // récupérer le parent li
    todo.classList.toggle('completed');
    fsave();
}

//fonction de sauvegarde des données en local
function fsave() {
    console.log('Fonction save ok');
    tablist = [];
    const todoItems = document.querySelectorAll('.todo-item');

    todoItems.forEach((item) => {
        tablist.push({
            id: item.id,
            name: item.querySelector('.text').innerText,
            completed: item.classList.contains('completed')
        });
        //localStorage.setItem('tablist', JSON.stringify(tablist));
    });
    localStorage.setItem('tablist', JSON.stringify(tablist));
}

//fonction de chargement des données en local
function fload() {
    console.log('Fonction load ok');
    const data = localStorage.getItem('tablist');

    if (data) {
        tablist = JSON.parse(data);

        tablist.forEach((todo) => {
            // Crée un élément de liste
            const newli = document.createElement('li');
            newli.id=todo.id;
            newli.classList.add('todo-item');

            // Div pour le texte
            const textDiv = document.createElement('div');
            textDiv.classList.add('text');
            textDiv.innerText = todo.name;
            newli.appendChild(textDiv);

            // Div pour les actions
            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('actions');
            newli.appendChild(actionsDiv);

            // Si l'élément est complété
            if (todo.completed) {
                newli.classList.add('completed');
            }

            // Ajoute l'élément à la liste
            todoList.appendChild(newli);

            // Ajoute un bouton de validation
            const checkButton = document.createElement('button');
            checkButton.innerHTML = '<i class="fas fa-check"></i>';
            checkButton.classList.add('checkbox');
            actionsDiv.appendChild(checkButton);

            // Ajoute un bouton de suppression
            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fas fa-trash"></i>';
            trashButton.classList.add('delete');
            actionsDiv.appendChild(trashButton);

            // Ajoute les écouteurs d'événements
            checkButton.addEventListener('click', fcheck);
            trashButton.addEventListener('click', fsupp);
        });
    }
}

//fonction de filtre
function ffiltre(event) {
    const todoItems = document.querySelectorAll('.todo-item');
    console.log('Fonction filtre ok');
    todoItems.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}