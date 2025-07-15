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

    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>🎯 Ajoute ta prochaine tâche</h2>
            <form className={styles.container} action="">
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Indiquez un titre de place explicite."
                    onChange={handleInputChange} //lorsque l'utilisateur tape dans l'input, on appelle la fonction handleInputChange pour mettre à jour l'état taskTitle
                    value={taskTitle} //liaison de l'état du titre de la tâche avec la valeur de l'input, c'est-à-dire que l'input affichera toujours la valeur actuelle de taskTitle, c'est-à-dire que si taskTitle change, l'input se mettra à jour automatiquement, c'est ce qu'on appelle le "controlled component", c'est-à-dire que la valeur de l'input est contrôlée par l'état React, c'est une bonne pratique pour gérer les formulaires dans React
                />
                <button
                    className={taskTitle.length === 0 ? "button-primary-disabled" : "button-primary"}
                    disabled={!taskTitle} //le bouton est désactivé si taskTitle est vide, c'est-à-dire que l'utilisateur n'a pas encore saisi de titre
                >
                    Ajouter
                </button>
            </form>
        </div>
    )
}