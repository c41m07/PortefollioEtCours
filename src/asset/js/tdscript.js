////////////////////////////////////////////////////CONST//////////////////////////////////////////////////////////////
// On récupère le champ de saisie pour écrire la tâche
const todoInput = document.querySelector('.input'); // Sélectionne l'élément avec la classe "input"

// On récupère le bouton pour ajouter une tâche
const todoaddButton = document.querySelector('.add'); // Sélectionne l'élément avec la classe "add"

// On récupère la liste qui va contenir toutes les tâches
const todoList = document.querySelector('.todo-list'); // Sélectionne l'élément avec la classe "todo-list"

// On récupère le menu déroulant pour filtrer les tâches
const fltroption = document.getElementById('filter'); // Sélectionne l'élément avec l'id "filter"

////////////////////////////////////////////////////LET//////////////////////////////////////////////////////////////
// On crée un tableau vide pour stocker nos tâches
let tablist = []; // Initialise un tableau vide pour sauvegarder les tâches

////////////////////////////////////////////////////LISTENERS//////////////////////////////////////////////////////////////
// On ajoute un écouteur d'événement sur le bouton "Ajouter"
todoaddButton.addEventListener('click', fadd); // Quand on clique sur le bouton, on lance la fonction fadd

// On ajoute un écouteur d'événement sur le menu de filtre
fltroption.addEventListener('change', ffiltre); // Quand le filtre change, on lance la fonction ffiltre

// On ajoute un écouteur pour charger les tâches au chargement de la page
addEventListener('load', fload); // Quand la page se charge, on lance la fonction fload

////////////////////////////////////////////////////FUNCTIONS//////////////////////////////////////////////////////////////
// Fonction pour ajouter une tâche
function fadd(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors du clic
    console.log('Fonction ok'); // Affiche un message dans la console pour vérifier le fonctionnement

    // Si le champ de saisie est vide
    if (!todoInput.value.trim()) {
        const notifError = document.createElement('div'); // Crée un div pour afficher une notification d'erreur
        const iconElement = document.createElement('i'); // Crée un élément pour l'icône d'erreur
        const spaceText = document.createTextNode(' '); // Crée un espace pour séparer l'icône du texte
        const messageText = document.createTextNode('Veuillez entrer du texte avant d\'ajouter'); // Crée le texte de l'erreur
        notifError.className = 'notifError'; // Assigne la classe CSS "notifError" au div
        iconElement.className = 'fas fa-exclamation-circle'; // Assigne les classes CSS pour l'icône d'exclamation
        notifError.appendChild(iconElement); // Ajoute l'icône dans le div
        notifError.appendChild(spaceText); // Ajoute l'espace dans le div
        notifError.appendChild(messageText); // Ajoute le message dans le div
        document.body.appendChild(notifError); // Ajoute le div de notification à la page

        // Affiche la notification d'erreur après 10 millisecondes
        setTimeout(() => {
            notifError.classList.add('pop'); // Ajoute la classe "pop" pour montrer la notification
        }, 10);

        // Masque et supprime la notification après 3000 millisecondes
        setTimeout(() => {
            notifError.classList.remove('pop'); // Retire la classe "pop" pour cacher la notification
            setTimeout(() => notifError.remove(), 500); // Supprime le div après 500 millisecondes
        }, 3000);

        return; // Arrête la fonction fadd si aucun texte n'est saisi
    }

    // Crée un nouvel élément de tâche (li)
    const newli = document.createElement('li'); // Crée un élément <li>
    newli.classList.add('todo-item'); // Ajoute la classe "todo-item" à ce li
    newli.id = 'todo-' + Date.now(); // Donne un id unique basé sur le timestamp actuel
    todoList.appendChild(newli); // Ajoute le li à la liste de tâches

    // Crée un div pour afficher le texte de la tâche
    const textDiv = document.createElement('div'); // Crée un élément <div>
    textDiv.classList.add('text'); // Ajoute la classe "text" à ce div
    textDiv.innerText = todoInput.value; // Place le texte saisi dans ce div
    newli.appendChild(textDiv); // Ajoute le div à la tâche

    // Récupère la valeur du champ deadline (date et heure)
    const deadlineInput = document.getElementById('deadline').value; // Récupère la valeur du champ avec l'id "deadline"
    if (deadlineInput) { // Si une deadline a été saisie
        const deadlineDiv = document.createElement('div'); // Crée un div pour afficher la deadline
        deadlineDiv.classList.add('time'); // Ajoute la classe "time" à ce div
        deadlineDiv.setAttribute('data-time', deadlineInput); // Stocke la date de deadline dans un attribut
        newli.appendChild(deadlineDiv); // Ajoute le div de deadline à la tâche
        updateCountdown(newli, deadlineInput); // Lance la fonction pour démarrer le compte à rebours de la deadline
    }

    // Crée un div pour contenir les boutons d'actions (validation et suppression)
    const actionsDiv = document.createElement('div'); // Crée un élément <div> pour les actions
    actionsDiv.classList.add('actions'); // Ajoute la classe "actions" à ce div
    newli.appendChild(actionsDiv); // Ajoute le div d'actions à la tâche

    // Crée un bouton pour marquer la tâche comme terminée
    const checkButton = document.createElement('button'); // Crée un bouton
    checkButton.innerHTML = '<i class="fas fa-check"></i>'; // Ajoute une icône de validation dans le bouton
    checkButton.classList.add('checkbox'); // Ajoute la classe "checkbox" au bouton
    actionsDiv.appendChild(checkButton); // Ajoute le bouton dans la zone d'actions

    // Crée un bouton pour supprimer la tâche
    const trashButton = document.createElement('button'); // Crée un bouton
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; // Ajoute une icône de poubelle dans le bouton
    trashButton.classList.add('delete'); // Ajoute la classe "delete" au bouton
    actionsDiv.appendChild(trashButton); // Ajoute le bouton dans la zone d'actions

    // Ajoute l'événement de validation sur le bouton "check"
    checkButton.addEventListener('click', fcheck); // Quand on clique sur le bouton check, on lance fcheck
    // Ajoute l'événement de suppression sur le bouton "trash"
    trashButton.addEventListener('click', fsupp); // Quand on clique sur le bouton trash, on lance fsupp

    fsave(); // Sauvegarde la tâche dans le navigateur
    todoInput.value = ''; // Vide le champ de saisie
    document.getElementById('deadline').value = ''; // Réinitialise le champ de la deadline
}

function fsupp(event) { // Fonction pour supprimer une tâche
    event.preventDefault(); // Empêche l'action par défaut du navigateur
    console.log('Fonction supp ok'); // Affiche un message dans la console
    const item = event.target.closest('.todo-item'); // Récupère l'élément de la tâche à supprimer
    if (item.classList.contains('completed')) { // Vérifie si la tâche est marquée comme complétée
        item.remove(); // Supprime la tâche du DOM
        fsave(); // Met à jour la sauvegarde des tâches
    } else { // Si la tâche n'est pas complétée
        console.log('Erreur check'); // Affiche une erreur dans la console
        const notifError = document.createElement('div'); // Crée un div pour la notification d'erreur
        const iconElement = document.createElement('i'); // Crée un élément pour l'icône d'erreur
        const spaceText = document.createTextNode(' '); // Crée un espace
        const messageText = document.createTextNode('Veuillez cocher la case avant de supprimer'); // Crée le message d'erreur
        notifError.className = 'notifError'; // Assigne la classe "notifError" au div
        iconElement.className = 'fas fa-exclamation-circle'; // Assigne les classes pour l'icône d'erreur
        notifError.appendChild(iconElement); // Ajoute l'icône dans le div
        notifError.appendChild(spaceText); // Ajoute l'espace dans le div
        notifError.appendChild(messageText); // Ajoute le message dans le div
        document.body.appendChild(notifError); // Ajoute la notification à la page

        setTimeout(() => { // Démarre un timer pour afficher la notification
            notifError.classList.add('pop'); // Affiche la notification
        }, 10);

        setTimeout(() => { // Démarre un timer pour masquer et supprimer la notification
            notifError.classList.remove('pop'); // Cache la notification
            setTimeout(() => notifError.remove(), 500); // Supprime le div de notification après 500 ms
        }, 3000);
    }
}

function fcheck(event) { // Fonction pour marquer une tâche comme complétée ou non
    event.preventDefault(); // Empêche l'action par défaut du navigateur
    console.log('Fonction check ok'); // Affiche un message dans la console
    const todo = event.target.closest('.todo-item'); // Récupère la tâche concernée
    todo.classList.toggle('completed'); // Change l'état de la tâche (ajoute ou enlève la classe "completed")
    if (todo.classList.contains('completed')) { // Si la tâche est marquée comme terminée
        todo.classList.remove('time-passed'); // Retire l'effet clignotant si présent
    }
    fsave(); // Met à jour la sauvegarde des tâches
}

function fsave() { // Fonction pour sauvegarder toutes les tâches dans le navigateur
    console.log('Fonction save ok'); // Affiche un message dans la console
    tablist = []; // Réinitialise le tableau des tâches
    const todoItems = document.querySelectorAll('.todo-item'); // Récupère toutes les tâches affichées
    todoItems.forEach((item) => { // Pour chaque tâche
        tablist.push({ // Ajoute un objet représentant la tâche dans le tableau
            id: item.id, // Stocke l'id de la tâche
            name: item.querySelector('.text').innerText, // Stocke le texte de la tâche
            deadline: item.querySelector('.time') ? item.querySelector('.time').getAttribute('data-time') : null, // Stocke la deadline si elle existe
            completed: item.classList.contains('completed') // Stocke l'état de la tâche (complétée ou non)
        });
    });
    localStorage.setItem('tablist', JSON.stringify(tablist)); // Enregistre le tableau des tâches dans le localStorage
}

function fload() { // Fonction pour charger les tâches sauvegardées au chargement de la page
    console.log('Fonction load ok'); // Affiche un message dans la console
    const data = localStorage.getItem('tablist'); // Récupère les données sauvegardées depuis le localStorage
    if (data) { // Si des données existent
        tablist = JSON.parse(data); // Convertit les données JSON en tableau
        tablist.forEach((todo) => { // Pour chaque tâche sauvegardée
            const newli = document.createElement('li'); // Crée un nouvel élément de tâche
            newli.id = todo.id; // Assigne l'id sauvegardé à la tâche
            newli.classList.add('todo-item'); // Ajoute la classe "todo-item"

            const textDiv = document.createElement('div'); // Crée un div pour le texte de la tâche
            textDiv.classList.add('text'); // Ajoute la classe "text"
            textDiv.innerText = todo.name; // Ajoute le texte de la tâche
            newli.appendChild(textDiv); // Ajoute le div de texte à la tâche

            if (todo.deadline) { // Si la tâche possède une deadline sauvegardée
                const deadlineDiv = document.createElement('div'); // Crée un div pour la deadline
                deadlineDiv.classList.add('time'); // Ajoute la classe "time"
                deadlineDiv.setAttribute('data-time', todo.deadline); // Stocke la deadline dans un attribut
                newli.appendChild(deadlineDiv); // Ajoute le div de deadline à la tâche
                updateCountdown(newli, todo.deadline); // Lance le compte à rebours pour cette deadline
            }

            const actionsDiv = document.createElement('div'); // Crée un div pour les boutons d'actions
            actionsDiv.classList.add('actions'); // Ajoute la classe "actions"
            newli.appendChild(actionsDiv); // Ajoute le div d'actions à la tâche

            if (todo.completed) { // Si la tâche était marquée comme terminée
                newli.classList.add('completed'); // Ajoute la classe "completed"
            }
            todoList.appendChild(newli); // Ajoute la tâche à la liste

            const checkButton = document.createElement('button'); // Crée un bouton pour valider la tâche
            checkButton.innerHTML = '<i class="fas fa-check"></i>'; // Ajoute l'icône de validation dans le bouton
            checkButton.classList.add('checkbox'); // Ajoute la classe "checkbox"
            actionsDiv.appendChild(checkButton); // Ajoute le bouton dans le div d'actions

            const trashButton = document.createElement('button'); // Crée un bouton pour supprimer la tâche
            trashButton.innerHTML = '<i class="fas fa-trash"></i>'; // Ajoute l'icône de suppression dans le bouton
            trashButton.classList.add('delete'); // Ajoute la classe "delete"
            actionsDiv.appendChild(trashButton); // Ajoute le bouton de suppression dans le div d'actions

            checkButton.addEventListener('click', fcheck); // Ajoute l'événement pour marquer la tâche comme terminée
            trashButton.addEventListener('click', fsupp); // Ajoute l'événement pour supprimer la tâche
        });
    }
}

function ffiltre(event) { // Fonction pour filtrer l'affichage des tâches
    const todoItems = document.querySelectorAll('.todo-item'); // Récupère toutes les tâches
    console.log('Fonction filtre ok'); // Affiche un message dans la console
    todoItems.forEach(function (todo) { // Pour chaque tâche
        switch (event.target.value) { // Selon le filtre sélectionné
            case "all": // Si le filtre est "all"
                todo.style.display = "flex"; // Affiche la tâche
                break; // Sort du switch
            case "completed": // Si le filtre est "completed"
                if (todo.classList.contains("completed")) { // Si la tâche est terminée
                    todo.style.display = "flex"; // Affiche la tâche
                } else {
                    todo.style.display = "none"; // Cache la tâche
                }
                break; // Sort du switch
            case "uncompleted": // Si le filtre est "uncompleted"
                if (!todo.classList.contains("completed")) { // Si la tâche n'est pas terminée
                    todo.style.display = "flex"; // Affiche la tâche
                } else {
                    todo.style.display = "none"; // Cache la tâche
                }
                break; // Sort du switch
            case "overtime": // Si le filtre est "overtime"
                if (todo.classList.contains("time-passed")) { // Si la tâche n'est pas terminée
                    todo.style.display = "flex"; // Affiche la tâche
                } else {
                    todo.style.display = "none"; // Cache la tâche
                }
                break;
        }
    });
}

function updateCountdown(taskElement, deadline) { // Fonction pour mettre à jour le compte à rebours de la deadline
    const deadlineDate = new Date(deadline); // Convertit la chaîne deadline en objet Date
    const deadlineDisplay = taskElement.querySelector('.time'); // Récupère l'élément qui affiche la deadline
    const interval = setInterval(() => { // Lance une fonction qui se répète toutes les secondes
        const now = new Date(); // Récupère la date et l'heure actuelles
        const diff = deadlineDate - now; // Calcule le temps restant avant la deadline
        if (diff <= 0) { // Si le temps est écoulé ou égal à zéro
            deadlineDisplay.innerText = "Temps écoulé"; // Affiche "Temps écoulé"
            if (!taskElement.classList.contains('completed')) { // Si la tâche n'est pas marquée comme terminée
                taskElement.classList.add('time-passed'); // Ajoute une classe pour déclencher l'effet clignotant
            }
            clearInterval(interval); // Arrête le compte à rebours
        } else { // Si le temps n'est pas encore écoulé
            const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // calcule le nombre de jours restants
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calcule le nombre d'heures restantes
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Calcule le nombre de minutes restantes
            const seconds = Math.floor((diff % (1000 * 60)) / 1000); // Calcule le nombre de secondes restantes
            // Affiche la date de fin et le temps restant
            deadlineDisplay.innerText = `Fin le: ${deadlineDate.toLocaleString()} | Reste: ${days}j ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000); // La fonction se répète toutes les 1000 millisecondes (1 seconde)
}
