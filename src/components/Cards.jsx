import React from 'react'
import styles from '../styles/cards.module.css'
import Image from 'next/image'
export default function Cards() {
    return (
        <>
            <div className={styles.alignment}>
                {card("/1.avif")}
                {card("/2.avif")}
                {card("/3.png")}
            </div>
        </>
    )
}

function card(imagesrc) {
    return (
        <div className={styles.card}>
            <Image src={imagesrc} width="260" height="260"/> <br />
        </div>
    )
}

