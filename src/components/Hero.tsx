import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hot Pizza Delivered in <span className={styles.highlight}>30 Minutes</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Fresh ingredients, crispy crust, and 100% mozzarella.
                        Order now and get 20% off your first order!
                    </p>
                    <div className={styles.buttons}>
                        <Link href="#menu" className="btn btn-primary">
                            Order Now
                        </Link>
                        <div className={styles.promo}>
                            <span className={styles.promoCode}>PROMO: TASTY20</span>
                        </div>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🚀</span>
                            <span>Fast Delivery</span>
                        </div>
                        <div className={styles.feature}>
                            <span className={styles.featureIcon}>🧀</span>
                            <span>Real Mozzarella</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.circle}></div>
                    <Image
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
                        alt="Delicious Pizza"
                        width={600}
                        height={600}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
