import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Landing_Navbar() {
  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="https://yaswanth-12.github.io/Artifract-frontend/Artifract_Logo_White.png"></link>
      <div className={styles.nav}>
        <ul>
          <img src='https://yaswanth-12.github.io/Artifract-frontend/Artifract_Logo.png' ></img>
          <a href="#" className={styles.red}> <li> Home </li> </a>
          <a href="#" > <li> Ecosystem </li> </a>
          <a href="#" > <li> Contact </li> </a>
          <Link href="/home">
            <button className={styles.glow_btn}>Launch App</button>
          </Link>
        </ul>
      </div>
    </>
  )
}
