import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} id="contacts">
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3 className={styles.title}>🍕 PizzaFast</h3>
                        <p className={styles.text}>
                            Hot pizza delivered in 30 minutes or it's free.
                            The best ingredients, the best taste.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>Menu</h4>
                        <ul className={styles.list}>
                            <li><a href="#pizza" className={styles.link}>Pizza</a></li>
                            <li><a href="#drinks" className={styles.link}>Drinks</a></li>
                            <li><a href="#desserts" className={styles.link}>Desserts</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>Contacts</h4>
                        <ul className={styles.list}>
                            <li><a href="tel:+1234567890" className={styles.link}>+1 234 567 890</a></li>
                            <li><a href="mailto:info@pizzafast.com" className={styles.link}>info@pizzafast.com</a></li>
                            <li className={styles.text}>123 Pizza Street, Food City</li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.subtitle}>Working Hours</h4>
                        <ul className={styles.list}>
                            <li className={styles.text}>Mon-Sun: 10:00 - 23:00</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>© 2024 PizzaFast. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
