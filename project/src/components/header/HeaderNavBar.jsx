import styles from "../../styles/Header.module.css";

export default function HeaderNavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.ulLinks}>
                <li className={styles.link}><a href="#">Home</a></li>
                <li className={styles.link}><a href="#">Features</a></li>
                <li className={styles.link}><a href="#">Community</a></li>
                <li className={styles.link}><a href="#">Blog</a></li>
                <li className={styles.link}><a href="#">Pricing</a></li>
            </ul>
            <button className={styles.btn}>Register Now</button>
        </nav>
    );
}