//ce composant  est le bouton suprimant toutes les tâches

export const ButtonDeleteAll = ({ deleteAllTask }) => {

    const handleDeleteAllTask = (event) => { //fonction de suppression de toutes les tasks
        event.preventDefault(); //empêche le comportement par défaut du formulaire qui consiste à recharger la page
        deleteAllTask()
    }

    return (
        <button
            className="button-delete-all"
            onClick={handleDeleteAllTask}
        >tous supprimer</button>
    )
}
