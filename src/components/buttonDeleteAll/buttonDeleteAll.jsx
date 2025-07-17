//ce composant  est le bouton suprimant toutes les tâches
import { Player } from '@lordicon/react' //importation de la librairie pour les animations des icones
import deleteAllicon from '../../assets/deleteAllicon.json' //importation de l'icone de suppression
import { useRef } from 'react' // Import du hook useRef pour contrôler l’animation
import { Tooltip } from 'react-tooltip'; // Importation de ReactTooltip pour personalier les infobulles
import useSound from 'use-sound'; // Importation du hook useSound pour jouer un son lors de l'interaction avec le bouton, importer depuis la librairie use-sound
import trashAll from '../../assets/sounds/trashAll.mp3'; // Importation du son de la corbeille


export const ButtonDeleteAll = ({ deleteAllTask, tasksList }) => {

    const handleDeleteAllTask = () => { //fonction de suppression de toutes les tasks. Pas besoin de capter l'évenement vue que le bouton n'est pas pas dans un formulaire
        // event.preventDefault(); //empêche le comportement par défaut du formulaire qui consiste à recharger la page
        deleteAllTask()
    }

    const playerRef = useRef(null); // création d'une référence pour contrôler l'animation Lordicon, definie par defaut à null pour éviter les erreurs de rendu avant que le composant soit monté
    const handlePlay = () => { // fonction pour jouer l’animation au survol
        playerRef.current?.playFromBeginning(); // Utilisation de l’opérateur de chaînage optionnel pour éviter les erreurs si playerRef.current est null
    };

    const [playSound] = useSound(trashAll, { volume: 0.3 }) // Utilisation du hook useSound pour jouer le son de la corbeille, avec un volume de 0.5


    if (tasksList.length > 0) { //si la valeur des éléments du tableau est supperieur à 0
        return (<>
            <button
                className="button-delete-all"
                onClick={() => {
                    handleDeleteAllTask();
                    playSound(); // Joue le son au clic
                }} //onClick pour supprimer toutes les tâches et jouer le son
                data-tooltip-id="deleteAllTooltip" //id de l'infobulle
                data-tooltip-content="Supprimer toutes les tâches" //contenu de l'infobulle
                onMouseEnter={handlePlay} //on joue l'animation au survol de la souris
            >
                <Player
                    icon={deleteAllicon}
                    size={24}
                    colorize="#ff2828"
                    loop={false} //ne boucle pas l’animation
                    ref={playerRef} //on passe la référence pour contrôler l'animation
                />
            </button>

            <Tooltip
                id="deleteAllTooltip"
                place="top" //position de l’infobulle par rapport à l’élément cible
                effect="float" //style d’apparition de l’infobulle
                arrowColor="#ff2828"
                className="custom-tooltip"
                style={{
                    backgroundColor: "#222",
                    color: "#fff",
                    borderRadius: "4px"
                }}

            />
        </>
        )
    }

    return null //sinon
}
