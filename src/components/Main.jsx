import React from 'react'
import styles from '../styles/main.module.css'
import Link from 'next/link'

export default function Main() {
    return (
        <>
            <div className={styles.main}>
                <span>  <span className={styles.orange}> <b>ArtiFract</b></span> Protocol </span>
                <p>A single place to share, curate and discover visual that tells a story.</p> <br />
                <Link href="https://twitter.com/poyimone" target='_blank'> 
                    <button className={styles.button1}>Learn more</button>
                </Link>

            </div>

        </>
    )
}
