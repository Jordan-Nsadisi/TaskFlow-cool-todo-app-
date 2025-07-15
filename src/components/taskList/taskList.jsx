// le composant taskList est utilisé pour afficher la liste des tâches
import TaskItem from "../taskItem/taskItem"
import styles from "./taskList.module.css"


export const TaskLists = (
    { tasksList, incompletedTasks, editTask, deleteTask } //recupère en props les outils crée et transmis depuis le composant parent.
) => {

    const taskLists = tasksList.map((task) => ( //externalisation du pacours du tableau de taches pour les afficher à chaque tour dans un composant taskItem
        <TaskItem key={task.id}
            task={task} // il reçoit en props chaque tâche bouclé et ces informations
            editTask={editTask} // et l'outil d'edition des tâches
            deleteTask={deleteTask} // et l'outil de suppression des tâches
        />
    ))

    return (
        <div className='box'>
            <h2 className={StyleSheet.title}>
                il te reste encore {incompletedTasks} tâches à accomplir !
            </h2>

            {tasksList && tasksList.length > 0 && ( // si le tableau des tâches existe et le nombre des tâches est superieur à 0, ...
                <ul className={styles.container}>
                    {taskLists} {/* on affiche dans une liste, le tableau mapper dans un composant TaskItem */}
                </ul>
            )}

        </div>
    )
}
