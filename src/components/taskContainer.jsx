//ce composant est utiliser pour afficher l'integralité des taches

import { useState } from "react"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"

export const TaskContainer = () => {

    // etat générale de l'application
    const [tasksList, setTasksList] = useState([
        {
            id: 1,
            title: "voir la lune",
            isCompleted: false
        },
        {
            id: 2,
            title: "voir le solei",
            isCompleted: false
        }
    ]) //l'etat qui vas contenire les taches, il va recupéré les taches despuis le composant enfant de creation des tâches, et les envoyer au composants enfant qui vas les affichés
    console.log(tasksList);

    const addTask = (title) => { //fonction pour ajouter les taches, elle prend en parametre les titres recupéré depuis la fonction de soumission de tâches du composant enfant ayant cette responsabilité

        const newTask = { //creation de nouvelle taches
            id: tasksList.length + 1, // l'ide sera le nombre d'element du tableau + 1
            title: title,
            isCompleted: false
        }

        setTasksList(...tasksList, newTask) //"spred operator", on ajoute dans la liste du tableau 'tasksList', les nouveaux élément de recupéré de l'input avec l'objet 'newTask' de cette fonction, sans modifier le tableau deja existant
    }



    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} /> {/* on passe la fonction addTask en prop au composant enfant TaskInput pour pouvoir ajouter des tâches depuis ce composant */}
            <TaskList />
            <Footer />
        </main>
    )
}