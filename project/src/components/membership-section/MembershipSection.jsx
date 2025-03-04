import styles from "../../styles/MembershipSection.module.css";
import image1 from "../../assets/images/Icon7.svg"
import image2 from "../../assets/images/Icon8.svg"
import image3 from "../../assets/images/Icon9.svg"
export default function MembershipSection() {
    return (
        <div className={styles.container}>
            <section className={styles.membershipSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Manage your entire community <br />in a single system</h1>
                    <p className={styles.description}>Who is Nexcent suitable for?</p>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <img src={image1} alt="image" />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <h1 className={styles.cardTitle}>Membership <br /> Organizations</h1>
                            <p className={styles.cardDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <img src={image2} alt="image" />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <h1 className={styles.cardTitle}>National <br /> Associations</h1>
                            <p className={styles.cardDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <img src={image3} alt="image" />
                        </div>
                        <div className={styles.cardTextContainer}>
                            <h1 className={styles.cardTitle}>Clubs And <br />Groups</h1>
                            <p className={styles.cardDescription}>Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}