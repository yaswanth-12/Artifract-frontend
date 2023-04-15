import React from 'react'
import styles from '../styles/main.module.css'
export default function Main() {
    return (
        <>
            <div className={styles.main}>
                <span>  <span className={styles.orange}> <b>ArtiFract</b></span> Protocol </span>
                <p>A single place to share, curate and discover visual that tells a story.</p> <br />
                <button className={styles.button1}>Learn more</button>
            </div>

        </>
    )
}
