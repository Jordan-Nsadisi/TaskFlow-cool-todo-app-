// ce composant est le bouton supprimant toutes les tâches
import { Player } from '@lordicon/react' // importation de la librairie pour les animations des icones
import { useRef, useState, useEffect } from 'react' // Import des hooks React
import { Tooltip } from 'react-tooltip'; // Importation de ReactTooltip pour personnaliser les infobulles
import useSound from 'use-sound'; // Importation du hook useSound pour jouer un son lors de l'interaction avec le bouton, importé depuis la librairie use-sound
import trashAll from '../../assets/sounds/trashAll.mp3'; // Importation du son de la corbeille

export const ButtonDeleteAll = ({ deleteAllTask, tasksList }) => {
    // État local pour stocker dynamiquement l'icône importée
    const [deleteAllicon, setDeleteAllicon] = useState(null);

    useEffect(() => {
        // import dynamique du JSON de l'icône
        import('../../assets/deleteAllicon.json')
            .then(module => {
                setDeleteAllicon(module.default);
            })
            .catch(err => {
                console.error("Erreur lors du chargement de l'icône deleteAllicon :", err);
            });
    }, []);

    const handleDeleteAllTask = () => {
        // fonction de suppression de toutes les tâches. Pas besoin de capter l'événement vu que le bouton n'est pas dans un formulaire
        deleteAllTask();
    }

    const playerRef = useRef(null); // création d'une référence pour contrôler l'animation Lordicon, définie par défaut à null pour éviter les erreurs de rendu avant que le composant soit monté
    const handlePlay = () => {
        // fonction pour jouer l’animation au survol
        playerRef.current?.playFromBeginning(); // Utilisation de l’opérateur de chaînage optionnel pour éviter les erreurs si playerRef.current est null
    };

    const [playSound] = useSound(trashAll, { volume: 0.3 }) // Utilisation du hook useSound pour jouer le son de la corbeille, avec un volume de 0.3

    if (tasksList.length > 0 && deleteAllicon) { // si il y a des tâches et que l'icône est chargée
        return (
            <>
                <button
                    className="button-delete-all"
                    onClick={() => {
                        handleDeleteAllTask();
                        playSound(); // Joue le son au clic
                    }} // onClick pour supprimer toutes les tâches et jouer le son
                    data-tooltip-id="deleteAllTooltip" // id de l'infobulle
                    data-tooltip-content="Supprimer toutes les tâches" // contenu de l'infobulle
                    onMouseEnter={handlePlay} // on joue l'animation au survol de la souris
                >
                    <Player
                        icon={deleteAllicon}
                        size={24}
                        colorize="#ff2828"
                        loop={false} // ne boucle pas l’animation
                        ref={playerRef} // on passe la référence pour contrôler l'animation
                    />
                </button>

                <Tooltip
                    id="deleteAllTooltip"
                    place="top" // position de l’infobulle par rapport à l’élément cible
                    effect="float" // style d’apparition de l’infobulle
                    arrowColor="#ff2828"
                    className="custom-tooltip"
                    style={{
                        backgroundColor: "#222",
                        color: "#fff",
                        borderRadius: "4px"
                    }}
                />
            </>
        );
    }

    return null; // sinon on ne rend rien
}
