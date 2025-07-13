//ce composant est utiliser pour afficher l'integralité des taches

import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"

export const TaskContainer = () => {
    return (
        <main>
            <Header />
            <TaskInput />
        </main>
    )
}