// le composant taskList est utilisé pour afficher la liste des tâches
import TaskItem from "../taskItem/taskItem"
import styles from "./taskList.module.css"


export const TaskLists = (
    { tasksList, incompletedTasks, editTask, deleteTask } //recupère en props les outils crée et transmis depuis le composant parent.
) => {

    return (
        <div className='box'>
            <h2 className={StyleSheet.title}>
                il te reste encore {incompletedTasks} tâches à accomplir !
            </h2>
            <ul className={styles.container}>
                <TaskItem />
            </ul>
        </div>
    )
}
