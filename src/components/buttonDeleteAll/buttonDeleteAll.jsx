//ce composant  est le bouton suprimant toutes les tâches

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
                tous supprimer
            </button>
        )
    }

    return null //sinon
}
