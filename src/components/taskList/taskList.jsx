// le composant taskList est utilisé pour afficher la liste des tâches
import styles from "./taskList.module.css"


export const TaskList = () => {
    return (
        <div className='box'>
            <h2 className={StyleSheet.title}>
                il te reste encore x tâches à accomplir !
            </h2>
            <ul className={styles.container}>
                composant tasklist
            </ul>
        </div>
    )
}
