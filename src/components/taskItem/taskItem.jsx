//ce composant est utiliser pour afficher les items des tâches
import styles from "./taskItem.module.css"


 const TaskItem = () => {
    return (
        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    1
                </div>
                <div className={styles.contentDefault}>
                    titre : finire d'apprendre react
                </div>
            </div>
            <button>

            </button>
        </li>
    )
}

export default TaskItem
