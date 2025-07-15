//ce composant est utiliser pour afficher les items des tâches
import styles from "./taskItem.module.css"


const TaskItem = ({ task, editTask, deleteTask }) => { //props drilling depuis le parent le plus haut 'TaskContainer'
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
            <button className="button-primary">
                x
            </button>
        </li>
    )
}

export default TaskItem
