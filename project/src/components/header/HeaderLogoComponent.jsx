import logo from '../../assets/images/Logo.svg';
import styles from "../../styles/Header.module.css";

export default function HeaderLogoComponent() {
    return <img className={styles.logo} src={logo} alt="logo image" />
}