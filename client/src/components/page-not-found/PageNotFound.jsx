import { Link } from "react-router-dom"
import styles from "./PageNotFound.module.css"

export default function PageNotFound() {
    return (
        <>
            <h1 className={styles.errorHeading}>404 Page Not Found</h1>
            <section className={styles.errorContainer}>
                <span className={styles.four}><span className={styles.screenReaderText}>4</span></span>
                <span className={styles.zero}><span className={styles.screenReaderText}>0</span></span>
                <span className={styles.four}><span className={styles.screenReaderText}>4</span></span>
            </section>
            <div className={styles.linkContainer}>
                <Link to="/" className={styles.moreLink}>Back To Home</Link>
            </div>
        </>
    )
}