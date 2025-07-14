//ce composant est utiliser pour afficher le champ de saisie des tâches
import { useState } from "react";
import styles from "./taskInput.module.css"

export const TaskInput = () => {

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
                    onChange={handleInputChange}
                />
                <button className="button-primary">Ajouter</button>
            </form>
        </div>
    )
}