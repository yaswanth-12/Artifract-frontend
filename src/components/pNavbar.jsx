import React from 'react'
import styles from '../styles/navbar.module.css'

export default function Profile_Navbar() {
    return (
      <>
        <title>Artifract ♥</title>
        <link rel="icon" href="https://github.com/yaswanth-12/Artifract-frontend/favicon.ico"></link>
        <div className={styles.nav}>
          <ul>
            <img src='/Artifract_Logo_White.png' ></img>
          </ul>
        </div>
      </>
    )
  }