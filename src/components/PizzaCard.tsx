"use client";

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './PizzaCard.module.css';

type PizzaCardProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    ingredients: string[];
};

export default function PizzaCard({ id, name, description, price, image, ingredients }: PizzaCardProps) {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({ id, name, price, image });
    };

    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.footer}>
                    <span className={styles.price}>from {price} ₴</span>
                    <button className={styles.addButton} onClick={handleAdd}>
                        <span className={styles.addText}>Add</span>
                        <span className={styles.addIcon}><Plus size={20} /></span>
                    </button>
                </div>
            </div>
        </article>
    );
}
