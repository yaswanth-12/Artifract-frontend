import React from 'react'
import styles from '../styles/navbar.module.css'
import MyButton from './launchapp'

export default function Landing_Navbar() {
  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="https://github.com/yaswanth-12/Artifract-frontend/favicon.ico"></link>
      <div className={styles.nav}>
        <ul>
          <img src='/favicon.ico' ></img>
          <a href="#" className={styles.red}> <li> Home </li> </a>
          <a href="#" > <li> Ecosystem </li> </a>
          <a href="#" > <li> Community </li> </a>
          <a href="#" > <li> Developers </li> </a>
          <a href="#" > <li> FAQ </li> </a>
          <a href="#" > <li> Contact </li> </a>
          {/* <button className={styles.glow_btn}> Launch App </button> */}
          <MyButton />
        </ul>
      </div>
    </>
  )
}

export function Home_Navbar() {
  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="https://github.com/yaswanth-12/Artifract-frontend/favicon.ico"></link>
      <div className={styles.nav}>
        <ul>
          <img src='/favicon.ico' ></img>
          <img src='/search.png' className={styles.searchimage}></img>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="        Search"
          />
          <button className={styles.glow_btn}> Connect wallet</button>
        </ul>
      </div>
    </>
  )
}

export function Profile_Navbar() {
  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="https://github.com/yaswanth-12/Artifract-frontend/favicon.ico"></link>
      <div className={styles.nav}>
        <ul>
          <img src='/favicon.ico' ></img>
          <a href="#" className={styles.red}> <li> home </li> </a>
          <button className={styles.glow_btn}> Connect wallet</button>
        </ul>
      </div>
    </>
  )
}