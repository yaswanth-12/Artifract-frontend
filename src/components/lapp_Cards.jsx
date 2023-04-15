import React from 'react'
import styles from '../styles/lapp_cards.module.css'
import Image from 'next/image'
export default function Cards() {
    return (
        <>
            <div className={styles.alignment}>
                {card("/1.avif")}
                {card("/2.avif")}
                {card("/3.avif")}
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

