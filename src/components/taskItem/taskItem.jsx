//ce composant est utiliser pour afficher les items des tâches
import styles from "./taskItem.module.css"
import { Player } from '@lordicon/react' //importation de la librairie pour les animations des icones
import deleteIcon from '../../assets/deleteIcon.json' //importation de l'icone de suppression
import { useRef } from 'react' // Import du hook useRef pour contrôler l’animation

const TaskItem = ({ task, editTask, deleteTask }) => { //props drilling depuis le parent le plus haut 'TaskContainer', sauf 'task' qui est l'objet contenant les infos de chaque tâche, mappé deouis le composant TaskList


    const playerRef = useRef(null); // création d'une référence pour contrôler l'animation Lordicon, definie par defaut à null pour éviter les erreurs de rendu avant que le composant soit monté


    const handlePlay = () => { // fonction pour jouer l’animation au survol
        playerRef.current?.playFromBeginning(); // Utilisation de l’opérateur de chaînage optionnel pour éviter les erreurs si playerRef.current est null
    };


    const handleStop = () => { // fonction pour arrêter l’animation quand la souris quitte
        playerRef.current?.stop();
    };

    return (
        <li
            className={`${styles.container} ${task?.isCompleted ? styles.success : styles.default}`}
            onClick={() => editTask(task.id, !task.isCompleted)} //on joue la fonction d'edition et on lui passe l'id de la tache et son status different à chaque clique, en gros on change le statut complété de la tache, à l'évenement au clique
        >
            <div className={styles.item}>
                <div className={`${styles.id} ${task?.isCompleted ? styles.idSuccess : styles.idDefault}`}>
                    {task.id}
                </div>
                <div className={task?.isCompleted ? styles.contentSuccess : styles.contentDefault}>
                    {task.title}
                </div>
            </div>

            <button
                className="button-primary"
                onClick={(event) => { //au clique du bouton...
                    event.stopPropagation() // on stop la propagation de l'evenement plus haut
                    deleteTask(task.id) //on joue la fonction de suppression et on lui passe l'id de la tache concerner
                }}
                onMouseEnter={handlePlay} //on joue l'animation au survol de la souris
                onMouseLeave={handleStop}
            >
                <Player
                    icon={deleteIcon}
                    size={21}
                    colorize="#2870ff"
                    loop={false} //ne boucle pas l’animation
                    ref={playerRef} //on passe la référence pour contrôler l'animation
                />
            </button>
        </li>
    )
}

export default TaskItem
