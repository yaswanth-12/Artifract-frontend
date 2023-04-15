import React from 'react'
import styles from '../styles/lapp_cards.module.css'
import Image from 'next/image'
export default function Cards() {
    return (
        <>
            <div className={styles.alignment}>
                {card("https://yaswanth-12.github.io/Artifract-frontend/1.avif")}
                {card("https://yaswanth-12.github.io/Artifract-frontend/2.avif")}
                {card("https://yaswanth-12.github.io/Artifract-frontend/3.avif")}
            </div>
        </>
    )
}

function card(imagesrc) {
    return (
        <div className={styles.card}>
            <img src={imagesrc} className={styles.image}></img>
        </div>
    )
}

