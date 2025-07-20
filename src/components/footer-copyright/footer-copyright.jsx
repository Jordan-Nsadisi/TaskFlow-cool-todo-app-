import styles from "./footer-copyright.module.css"


export const FooterCopyright = () => {
  const date = new Date().getFullYear()

  return (
    <footer
      className={styles.container}
    >
      <div className={styles.linkText}>
        <span>Copyright ©{" "}</span>
        {date}
        <a
          href="http://jordan-nsadisi.vercel.app"
          target="_blank"
          className={styles.link}
        >{" "} Jordan Nsadisi</a>
      </div>
    </footer>
  )
}
