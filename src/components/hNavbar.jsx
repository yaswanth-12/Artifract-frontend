import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Home_Navbar() {
    return (
        <>
            <title>Artifract ♥</title>
            <link rel="icon" href="https://github.com/yaswanth-12/Artifract-frontend/favicon.ico"></link>
            <div className={styles.nav}>
                <ul>
                    <img src='/Artifract_Logo_White.png' ></img>
                    <img src='/search.png' className={styles.searchimage}></img>
                    <input
                        className={styles.searchBar}
                        type="text"
                        placeholder="        Search"
                    />

                    <Link href="/profile">
                        <button className={styles.glow_btn}>Connect wallet</button>
                    </Link>
                </ul>
            </div>
        </>
    )
}