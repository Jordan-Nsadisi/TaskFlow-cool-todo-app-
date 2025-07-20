// le composant taskList est utilisé pour afficher la liste des tâches
import { TaskItem } from "../taskItem/taskItem"
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



    if (taskLists && tasksList.length > 0) { //si la liste existe et que ça valeur est supperieur à 0
        return (
            <div className='box'>
                <h2 className={styles.title}>

                    {incompletedTasks > 0 ? ( // si les taches non accomplétés sont superieur
                        <> 📝 il te reste encore <span className="important">{incompletedTasks}</span>  tâches à accomplir !</>
                    ) : (
                        <> 🤝 Génial, tu as accompli toutes tes tâches !</>
                    ) //sinon
                    }
                </h2>

                {tasksList && tasksList.length > 0 && ( // si le tableau des tâches existe et le nombre des tâches est superieur à 0, ...
                    <ul className={styles.container}>
                        {taskLists} {/* on affiche dans une liste, le tableau mapper dans un composant TaskItem */}
                    </ul>
                )}

            </div>
        )
    }

    return ( //sinon affiche ceci
        <div className='box'>
            <h2 className={styles.emptyState}>
                👋 Salut, tu n'as rien à faire ! Profite de ton temps libre !
            </h2>
        </div>
    )

}
