//ce composant est utiliser pour afficher les items des tâches
import styles from "./taskItem.module.css"


const TaskItem = ({ task, editTask, deleteTask }) => { //props drilling depuis le parent le plus haut 'TaskContainer', sauf 'task' qui est l'objet contenant les infos de chaque tâche, mappé deouis le composant TaskList
    return (
        <li
            className={`${styles.container} ${styles.default}`}
            onClick={() => editTask(task.id, !task.isCompleted)} //on joue la fonction d'edition et on lui passe l'id de la tache et son status different à chaque clique, en gros on change le statut complété de la tache, à l'évenement au clique
        >
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    {task.id}
                </div>
                <div className={styles.contentDefault}>
                    {task.title}
                </div>
            </div>
            <button className="button-primary">
                {deleteTask} {/* pour supprimer un tâche */}
            </button>
        </li>
    )
}

export default TaskItem
