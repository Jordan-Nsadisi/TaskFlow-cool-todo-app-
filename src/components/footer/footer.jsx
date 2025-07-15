import styles from "./footer.module.css"

export const Footer = ({ completedTasks }) => {
    return (
        <footer>
            <code className={styles.footer}>
                Avec TaskFlow, tu as éliminé {completedTasks} tâches
            </code>
        </footer>
    )
}
