//ce composant  est le bouton suprimant toutes les tâches
import { Player } from '@lordicon/react' //importation de la librairie pour les animations des icones
import deleteAllicon from '../../assets/deleteAllicon.json' //importation de l'icone de suppression
import { useRef } from 'react' // Import du hook useRef pour contrôler l’animation



export const ButtonDeleteAll = ({ deleteAllTask, tasksList }) => {

    const handleDeleteAllTask = (event) => { //fonction de suppression de toutes les tasks
        event.preventDefault(); //empêche le comportement par défaut du formulaire qui consiste à recharger la page
        deleteAllTask()
    }

    const playerRef = useRef(null); // création d'une référence pour contrôler l'animation Lordicon, definie par defaut à null pour éviter les erreurs de rendu avant que le composant soit monté
    const handlePlay = () => { // fonction pour jouer l’animation au survol
        playerRef.current?.playFromBeginning(); // Utilisation de l’opérateur de chaînage optionnel pour éviter les erreurs si playerRef.current est null
    };
    const handleStop = () => { // fonction pour arrêter l’animation quand la souris quitte
        playerRef.current?.stop();
    };


    if (tasksList.length > 0) { //si la valeur des éléments du tableau est supperieur à 0
        return (
            <button
                className="button-delete-all"
                onClick={handleDeleteAllTask}
                onMouseEnter={handlePlay} //on joue l'animation au survol de la souris
                onMouseLeave={handleStop}
            >
                <Player
                    icon={deleteAllicon}
                    size={24}
                    colorize="#ff2828"
                    loop={false} //ne boucle pas l’animation
                    ref={playerRef} //on passe la référence pour contrôler l'animation
                />
            </button>
        )
    }

    return null //sinon
}
