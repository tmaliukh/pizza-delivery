"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function Checkout() {
    const { items, total } = useCart();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would send data to backend
    };

    if (submitted) {
        return (
            <div className={`container ${styles.success}`}>
                <h1 className={styles.title}>Order Placed! 🎉</h1>
                <p>Thank you for your order. We will call you shortly to confirm.</p>
                <p>Estimated delivery: 30 minutes.</p>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className={`container ${styles.empty}`}>
                <h1 className={styles.title}>Your cart is empty</h1>
                <a href="/" className="btn btn-primary">Go to Menu</a>
            </div>
        );
    }

    return (
        <div className={`container ${styles.checkout}`}>
            <h1 className={styles.title}>Checkout</h1>

            <div className={styles.grid}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.group}>
                        <label className={styles.label}>Name</label>
                        <input type="text" required className={styles.input} placeholder="John Doe" />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>Phone</label>
                        <input type="tel" required className={styles.input} placeholder="+1 234 567 890" />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>Address</label>
                        <input type="text" required className={styles.input} placeholder="Street, House, Apt" />
                    </div>

                    <div className={styles.group}>
                        <label className={styles.label}>Payment Method</label>
                        <select className={styles.select}>
                            <option>Cash</option>
                            <option>Card to Courier</option>
                            <option>Online Payment</option>
                        </select>
                    </div>

                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                        Place Order ({total} ₴)
                    </button>
                </form>

                <div className={styles.summary}>
                    <h2 className={styles.subtitle}>Your Order</h2>
                    <div className={styles.items}>
                        {items.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <span>{item.name} x {item.quantity}</span>
                                <span>{item.price * item.quantity} ₴</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.total}>
                        <span>Total</span>
                        <span>{total} ₴</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
