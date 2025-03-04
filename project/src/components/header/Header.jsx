import styles from "../../styles/Header.module.css";
import HeaderLogoComponent from "./HeaderLogoComponent";
import HeaderNavBar from "./HeaderNavBar";

export default function Header() {
    return (
        <div className={styles.container}>
            <header className={styles.headerContainer}>
                <HeaderLogoComponent />
                <HeaderNavBar />
            </header>
        </div>
    );
}