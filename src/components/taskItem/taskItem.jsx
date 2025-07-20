// ce composant est utilisé pour afficher les items des tâches
import styles from "./taskItem.module.css"
import { Player } from '@lordicon/react' // importation de la librairie pour les animations des icônes
import { useRef, useState, useEffect } from 'react' // Import des hooks React nécessaires
import useSound from 'use-sound'; // Importation du hook useSound pour jouer un son lors de l'interaction avec le bouton
import deleteTaskSound from '../../assets/sounds/deleteTaskSound.mp3'; // Importation du son de la corbeille
import changeStatusTask from '../../assets/sounds/changeStatusTask.mp3'; // Importation du son de changement de statut

export const TaskItem = ({ task, editTask, deleteTask }) => {
    // props drilling depuis le parent le plus haut 'TaskContainer', sauf 'task' qui est l'objet contenant les infos de chaque tâche, mappé depuis le composant TaskList

    const [deleteIcon, setDeleteIcon] = useState(null); // État pour stocker dynamiquement l'icône de suppression

    useEffect(() => {
        // Import dynamique du fichier JSON contenant l'icône deleteIcon pour éviter les erreurs liées à l'objet gelé lors du build
        import("../../assets/deleteIcon.json").then((mod) => {
            // Clone l'objet JSON importé pour éviter les erreurs liées à l'objet gelé
            setDeleteIcon(JSON.parse(JSON.stringify(mod.default)));
        }).catch((err) => {
            console.error("Erreur lors du chargement de l'icône deleteIcon :", err);
        });
    }, []);

    const playerRef = useRef(null); // création d'une référence pour contrôler l'animation Lordicon, définie par défaut à null pour éviter les erreurs avant que le composant soit monté

    const handlePlay = () => {
        // fonction pour jouer l’animation au survol
        playerRef.current?.playFromBeginning(); // Utilisation de l’opérateur de chaînage optionnel pour éviter les erreurs si playerRef.current est null
    };

    const handleStop = () => {
        // fonction pour arrêter l’animation quand la souris quitte
        playerRef.current?.stop();
    };

    const [playSound] = useSound(deleteTaskSound, { volume: 0.3 }) // Utilisation du hook useSound pour jouer le son de la corbeille, avec un volume de 0.3
    const [playChangeStatusSound] = useSound(changeStatusTask, { volume: 0.3 }) // Utilisation du hook useSound pour jouer le son de changement de statut, avec un volume de 0.3

    return (
        <li
            className={`${styles.container} ${task?.isCompleted ? styles.success : styles.default}`}
            onClick={() => {
                // au clic sur l'item de la tâche, on change le statut complété de la tâche
                editTask(task.id, !task.isCompleted);
                playChangeStatusSound(); // joue le son de changement de statut
            }}
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
                onClick={(event) => {
                    // au clic du bouton de suppression...
                    event.stopPropagation(); // on stop la propagation de l'événement pour ne pas déclencher le onClick du li parent
                    deleteTask(task.id); // on joue la fonction de suppression et on lui passe l'id de la tâche concernée
                    playSound(); // joue le son au clic
                }}
                onMouseEnter={handlePlay} // on joue l'animation au survol de la souris
                onMouseLeave={handleStop} // on arrête l'animation quand la souris quitte le bouton
                disabled={!deleteIcon} // désactive le bouton tant que l'icône n'est pas chargée pour éviter les bugs
                aria-label="Supprimer la tâche" // accessibilité : description du bouton pour les lecteurs d'écran
            >
                {deleteIcon && (
                    <Player
                        icon={deleteIcon} // icône dynamique chargée
                        size={21}
                        colorize="#2870ff"
                        loop={false} // ne boucle pas l’animation
                        ref={playerRef} // on passe la référence pour contrôler l'animation
                    />
                )}
            </button>
        </li>
    )
}
