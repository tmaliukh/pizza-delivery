import Hero from '@/components/Hero';
import PizzaCard from '@/components/PizzaCard';
import { PIZZAS, CATEGORIES } from '@/lib/data';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      <section className={`container ${styles.menuSection}`} id="menu">
        <h2 className="section-title">Our Menu</h2>

        <div className={styles.filters}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${cat.id === 'all' ? styles.active : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {PIZZAS.map((pizza) => (
            <div key={pizza.id} className={styles.cardWrapper}>
              <PizzaCard {...pizza} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.reviews} id="reviews">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>"Best pizza I've ever had! The crust is perfect."</p>
              <p className={styles.reviewer}>- Alex K.</p>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>"Super fast delivery. Arrived hot and fresh."</p>
              <p className={styles.reviewer}>- Maria S.</p>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐</div>
              <p className={styles.reviewText}>"Great variety of toppings. Will order again."</p>
              <p className={styles.reviewer}>- John D.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
