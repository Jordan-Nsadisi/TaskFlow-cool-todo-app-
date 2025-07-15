//ce composant est utiliser pour afficher l'integralité des taches, géré la logique est partager les responsabilités à chaque composant enfant

import { useState } from "react"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskLists } from "./taskList/taskList"

export const TaskContainer = () => {

    // etat générale de l'application
    const [tasksList, setTasksList] = useState([
        //...les tâches seront ajoutées ici pendant la soumission, on initialise l'état avec un tableau vide. { id: 1, title: "Tâche 1", isCompleted: false },
    ]) //l'etat qui vas contenire les taches, il va recupéré les taches despuis le composant enfant de creation des tâches, et les envoyer au composants enfant qui vas les affichés
    console.log("Liste des tâches:", tasksList);



    //** start utils for Component TaskInput */
    const addTask = (title) => { //fonction pour ajouter les taches, elle prend en parametre les titres recupéré depuis la fonction de soumission de tâches du composant enfant ayant cette responsabilité

        const newTask = { //creation de nouvelle taches
            id: tasksList.length + 1, // l'ide sera le nombre d'element du tableau + 1
            title: title,
            isCompleted: false
        }

        setTasksList([...tasksList, newTask]) //"spred operator", on ajoute dans la liste du tableau 'tasksList', les nouveaux élément de recupéré de l'input avec l'objet 'newTask' de cette fonction, sans modifier le tableau deja existant
    }
    //** end utils for Component TaskInput */



    //** start utils for Component TaskLists */
    const editTask = (id, isCompletedValue) => { //fonction qui modifie le status de la tâche
        setTasksList( //bah, bien sûr qu'il dois modifier l'etat du tableau des tâches
            tasksList.map((task) => //on parcour le tableau des taches, et pour chaque tache...
                task.id === id ? { // si la valeur de l'id choisie est egal à un id existant
                    ...task, //spred operator, on recupère les valeurs existant de la tâche
                    isCompleted: isCompletedValue //et on met à jour la valeur de l'etat de l'enregistrement de la tache

                }
                    : task //sinon on renvoi juste la tache en question et on ne fais rien
            )
        );
    };

    const deleteTask = (id) => { //fonction qui supprime la tâche
        setTasksList( //bah, encore une fois on dois modifier l'etat du tableau des tâches
            tasksList.filter((task) => //pour la suppression, on vas filtré le tableau des taches, et pour chaque tache...
                task.id !== id // on ne garde que les taches dont l'id est différent de l'id de la tache à supprimer, cela signifie qu'on supprime la tâche
            ) //la methode filter va renvoyer un nouveau tableau sans la tâche supprimée
        )
    }

    const getTaskCounts = () => { //fonction qui renvois le nombre des taches restants à completer
        const completedTasks = tasksList.filter((task) => task.isCompleted === true).length //on filtre les tâches pour ressortir un tablau des tâches dont l'etat isCompleted est true(donc les tasks complètes), et avec la methode lenght, on transforme le tableau en nombre pour mieux géré les taches completent et incompletent
        const incompletedTasks = tasksList.length - completedTasks // on soustrait au nombre du tableau des tâches, le nombre des taches complétés pour recupéré les tâches incomplètes

        return { //et me retourne les deux éléments
            completedTasks,
            incompletedTasks
        }
    }

    const { completedTasks, incompletedTasks } = getTaskCounts(); //destructuring pour recupéré individuelement les outils provenant de la fonction 'getTaskCounts'
    // console.log("complété :", completedTasks, "non-complété :", incompletedTasks);
    //** end utils for Component TaskLists */





    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} /> {/* on passe la fonction addTask en prop au composant enfant TaskInput pour pouvoir ajouter des tâches depuis ce composant */}
            <TaskLists tasksList={tasksList} editTask={editTask}
                deleteTask={deleteTask} incompletedTasks={incompletedTasks} /> {/*on passe en props le tableau des taches, et les outils dont il a besoin */}
            <Footer completedTasks={completedTasks} /> {/*on passe en props le nombre des tâches complété pour géré leur affichages dans le composant enfant */}
        </main>
    )
}