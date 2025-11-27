"use client";

import Link from 'next/link';
import { ShoppingCart, Phone, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    🍕 Pizza<span className={styles.logoAccent}>Fast</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="#menu" className={styles.link}>Menu</Link>
                    <Link href="#reviews" className={styles.link}>Reviews</Link>
                    <Link href="#contacts" className={styles.link}>Contacts</Link>
                </nav>

                <div className={styles.actions}>
                    <a href="tel:+1234567890" className={styles.phone}>
                        <Phone size={20} />
                        <span className={styles.phoneNumber}>+1 234 567 890</span>
                    </a>

                    <button
                        className={styles.cartBtn}
                        onClick={() => setIsCartOpen(true)}
                        aria-label="Open Cart"
                    >
                        <ShoppingCart size={24} />
                        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                    </button>
                </div>
            </div>
        </header>
    );
}
