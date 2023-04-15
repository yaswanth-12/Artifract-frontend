import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Landing_Navbar() {
  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="/Artifract_Logo_White.png"></link>
      <div className={styles.nav}>
        <ul>
          <img src='/Artifract_Logo_White.png' ></img>
          <a href="#" className={styles.red}> <li> Home </li> </a>
          <a href="#" > <li> Ecosystem </li> </a>
          <a href="#" > <li> Community </li> </a>
          <a href="#" > <li> Developers </li> </a>
          <a href="#" > <li> FAQ </li> </a>
          <a href="#" > <li> Contact </li> </a>
          <Link href="/home">
            <button className={styles.glow_btn}>Connect wallet</button>
          </Link>
        </ul>
      </div>
    </>
  )
}