import styles from "../../styles/ClientsSection.module.css";
import icon1 from "../../assets/images/Logo1.svg";
import icon2 from "../../assets/images/Logo2.svg";
import icon3 from "../../assets/images/Logo3.svg";
import icon4 from "../../assets/images/Logo4.svg";
import icon5 from "../../assets/images/Logo5.svg";
import icon6 from "../../assets/images/Logo6.svg";
export default function ClientsSection() {
    return (
        <div className={styles.container}>
            <section className={styles.clientsSection}>
                <h1 className={styles.title}>Our Clients</h1>
                <p className={styles.description}>We have been working with some Fortune 500+ clients</p>
                <div className={styles.icons}>
                    <img src={icon1} alt="icon" />
                    <img src={icon2} alt="icon" />
                    <img src={icon3} alt="icon" />
                    <img src={icon4} alt="icon" />
                    <img src={icon5} alt="icon" />
                    <img src={icon6} alt="icon" />
                    <img src={icon3} alt="icon" />
                </div>
            </section>
        </div>
    )
}