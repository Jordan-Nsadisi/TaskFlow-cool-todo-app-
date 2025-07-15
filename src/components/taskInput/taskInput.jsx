//ce composant est utiliser pour afficher le champ de saisie des tâches
import { useState } from "react";
import styles from "./taskInput.module.css"

export const TaskInput = (
    {
        addTask //fonction pour ajouter les tâches, elle est passée en prop depuis le composant parent TaskContainer
    }
) => {
    // console.log(addTask);

    const [taskTitle, setTaskTitle] = useState("") //hook pour la gestion de l'etat du titre du task
    // console.log(taskTitle);

    const handleInputChange = (event) => { //fonctionner qui permet de capturer ce qui est ecrit dans l'input du formulaire, elle prend en paramètre l'èvenement au changement de l'input
        // console.log(event.target.value);
        setTaskTitle(event.target.value) //met à jour la valeur du titre du task(tâche)
    }

    const handleAddTask = (event) => { //focntion qui soummet le formulaire, elle prend en paramètre l'èvenement de soumission du formulaire
        event.preventDefault(); //empêche le comportement par défaut du formulaire qui consiste à recharger la page

        if (taskTitle.trim()) { // on ajoute la tâche et reset la valeur de l'input si taskTitle existe sans espace
            addTask(taskTitle) // on a deja la fonction d'ajout de tâches récupéré en props depuis le parent, donc on la joue et on lui passe le titre(ce qui corespond à la valeur de l'input au moment de la soumission, le titre qui est mis à jour par la fonction 'handleInputChange' qui ecoute les évenement de l'input) 
            setTaskTitle("") //et on reset la valeur de l'input
            // console.log("Task added:", taskTitle); //affiche dans la console le titre de la tâche ajoutée
        } else {
            // TODO: mieux géré les messages d'erreurs
            console.log("le titre est vide");

        }
    }

    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>🎯 Ajoute ta prochaine tâche</h2>
            <form className={styles.container} onSubmit={handleAddTask}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Indiquez un titre de place explicite."
                    onChange={handleInputChange} //lorsque l'utilisateur tape dans l'input, on appelle la fonction handleInputChange pour mettre à jour l'état taskTitle
                    value={taskTitle} //liaison de l'état du titre de la tâche avec la valeur de l'input, c'est-à-dire que l'input affichera toujours la valeur actuelle de taskTitle, c'est-à-dire que si taskTitle change, l'input se mettra à jour automatiquement, c'est ce qu'on appelle le "controlled component", c'est-à-dire que la valeur de l'input est contrôlée par l'état React, c'est une bonne pratique pour gérer les formulaires dans React
                />
                <button
                    type="submit"
                    className={
                        taskTitle.length === 0 // si la valeur du titre est de 0
                        || !taskTitle.trim() // ou la valeur n'est pas un caractère mais un espace
                        ? "button-primary-disabled" : "button-primary"
                    }
                    disabled={!taskTitle} //le bouton est désactivé si taskTitle est vide, c'est-à-dire que l'utilisateur n'a pas encore saisi de titre
                >
                    Ajouter
                </button>
            </form>
        </div>
    )
}