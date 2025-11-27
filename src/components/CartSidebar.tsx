"use client";

import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './CartSidebar.module.css';

export default function CartSidebar() {
    const {
        items,
        removeFromCart,
        updateQuantity,
        total,
        isCartOpen,
        setIsCartOpen
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className={styles.overlay} onClick={() => setIsCartOpen(false)} />
            <aside className={styles.sidebar}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Your Order</h2>
                    <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.items}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Your cart is empty 😔</p>
                            <p className={styles.emptySub}>Add some delicious pizza!</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <div className={styles.itemInfo}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <p className={styles.itemPrice}>{item.price * item.quantity} ₴</p>
                                </div>

                                <div className={styles.controls}>
                                    <div className={styles.quantity}>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className={styles.qtyValue}>{item.quantity}</span>
                                        <button
                                            className={styles.qtyBtn}
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>Total:</span>
                            <span className={styles.totalAmount}>{total} ₴</span>
                        </div>
                        <a
                            href="/checkout"
                            className="btn btn-primary"
                            style={{ width: '100%', textAlign: 'center' }}
                            onClick={() => setIsCartOpen(false)}
                        >
                            Checkout
                        </a>
                    </div>
                )}
            </aside>
        </>
    );
}
