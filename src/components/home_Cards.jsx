import React from 'react';
import styles from '../styles/home_cards.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Cards() {
    return (
        <>
            <div className={styles.alignment}>
                {card("https://yaswanth-12.github.io/Artifract-frontend/1.avif", "#Karma Vault")}
                {card("https://yaswanth-12.github.io/Artifract-frontend/2.avif", "#BAYC Vault")}
                {card("https://yaswanth-12.github.io/Artifract-frontend/3.avif", "#Azuki Vault")}
            </div>
        </>
    )
}

function card(imagesrc, title) {
    return (
        <Link href="/vault">
            <div className={styles.card}>
                <div className={styles.container}>
                    <img src={imagesrc} className={styles.image}></img>
                    <div className={styles.textOverlay}>{title}</div>
                    <div className={styles.overlay}> </div>
                </div>
            </div>
        </Link>

    )
}
