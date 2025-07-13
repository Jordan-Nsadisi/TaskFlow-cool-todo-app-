//ce composant est utiliser pour afficher le champ de saisie des tâches
import styles from "./taskInput.module.css"

export const TaskInput = () => {
    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>🎯 Ajoute ta prochaine tâche</h2>
            <form className={styles.container} action="">
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Indiquez un titre de place explicite."
                />
                <button className="button-primary">Ajouter</button>
            </form>
        </div>
    )
}