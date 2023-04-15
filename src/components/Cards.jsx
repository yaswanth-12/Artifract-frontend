import React from 'react'
import styles from '../styles/cards.module.css'
import Image from 'next/image'
export default function Cards() {
    return (
        <>
            <div className={styles.alignment}>
                {card("/1.png", "Branding", "===========================")}
                {card("/2.png", "Development", "===========================")}
                {card("/3.png", "Marketing", "===========================")}
            </div>
        </>
    )
}

function card(image, head, data) {
    return (
        <div className={styles.card}>
            <Image src={image} width="60" height="60" className={styles.logo_align}/> <br />
            <h3>{head}</h3> <br />
            <p>{data}</p>
        </div>
    )
}

