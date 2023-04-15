import React from 'react'
import styles from '../styles/main.module.css'
export default function Main() {
    return (
        <>
            <div className={styles.main}>
                <h3>We Are Creative</h3>
                <span>THE WAY OF </span> <span className={styles.red}>DREAM</span>
                <p>A single place to share, curate and discover visual that tells a story.</p> <br />
                <button className={styles.button1}>LEARN MORE</button>
                <button className={styles.button2}>GET STARTED</button>
            </div>

        </>
    )
}
