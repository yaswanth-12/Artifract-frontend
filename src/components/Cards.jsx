import React from 'react'
import styles from '../styles/cards.module.css'
import Image from 'next/image'
export default function Cards() {
    return (
        <>
            <div className={styles.alignment}>
                {card("/1.png", "Branding", "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's")}
                {card("/2.png", "Development", "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's")}
                {card("/3.png", "Marketing", "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's")}
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

