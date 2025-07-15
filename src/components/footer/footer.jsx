import styles from "./footer.module.css"

export const Footer = ({ completedTasks }) => {

    if (completedTasks) { //si les tâches complétés existent
        return (
            <footer>
                <code className={styles.footer}>
                    Avec TaskFlow, tu as éliminé {completedTasks} tâches
                </code>
            </footer>
        )
    }

    return null
    //return <></>
}
