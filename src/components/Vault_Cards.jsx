import React from 'react'
import styles from '../styles/vault_cards.module.css'
import Image from 'next/image'

export default function Cards() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <img src={"/2.avif"} className={styles.image}></img>
                </div>

                <div className={styles.col2}>
                    
                </div>
            </div>
        </>
    )
}
