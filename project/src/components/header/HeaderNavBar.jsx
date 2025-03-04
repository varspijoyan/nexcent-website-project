import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import styles from "../../styles/Header.module.css";

export default function HeaderNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={styles.navBar}>
            <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
                <ul className={styles.ulLinks}>
                    <li className={styles.link}><a href="#">Home</a></li>
                    <li className={styles.link}><a href="#">Features</a></li>
                    <li className={styles.link}><a href="#">Community</a></li>
                    <li className={styles.link}><a href="#">Blog</a></li>
                    <li className={styles.link}><a href="#">Pricing</a></li>
                </ul>
            </div>
            <div className={styles.hamburgerMenu}>
                <Hamburger toggled={isOpen} toggle={setIsOpen}/>
            </div>
            <button className={styles.btn}>Register Now</button>
        </nav>
    );
}