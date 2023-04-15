import React from 'react'
import styles from '../styles/home_cards.module.css'
import Image from 'next/image'

export default function Cards() {
    return (
        <>
            <div className={styles.alignment}>
                {card("/1.avif", "#Karma Vault")}
                {card("/2.avif", "#BAYC Vault")}
                {card("/3.png", "#Azuki Vault")}
            </div>
        </>
    )
}

function card(imagesrc, title) {
    return (
        <a href='/vault'>
            <div className={styles.card}>
                <div className={styles.container}>
                    <img src={imagesrc} className={styles.image}></img>
                    <div className={styles.textOverlay}>{title}</div>
                    <div className={styles.overlay}> </div>
                </div>
            </div>
        </a>

    )
}
