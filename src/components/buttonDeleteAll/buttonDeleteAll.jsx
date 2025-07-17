//ce composant  est le bouton suprimant toutes les tâches
import { Player } from '@lordicon/react' //importation de la librairie pour les animations des icones
import deleteAllicon from '../../assets/deleteAllicon.json' //importation de l'icone de suppression
import { useRef } from 'react' // Import du hook useRef pour contrôler l’animation



export const ButtonDeleteAll = ({ deleteAllTask, tasksList }) => {

    const handleDeleteAllTask = (event) => { //fonction de suppression de toutes les tasks
        event.preventDefault(); //empêche le comportement par défaut du formulaire qui consiste à recharger la page
        deleteAllTask()
    }

    if (tasksList.length > 0) { //si la valeur des éléments du tableau est supperieur à 0
        return (
            <button
                className="button-delete-all"
                onClick={handleDeleteAllTask}
            >
                <Player
                    icon={deleteAllicon}
                    size={21}
                    colorize="#2870ff"
                    loop={false} //ne boucle pas l’animation
                    ref={playerRef} //on passe la référence pour contrôler l'animation
                />
            </button>
        )
    }

    return null //sinon
}
