import React from 'react'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <img src='/favicon.ico' ></img>
          <a href="#" className={styles.red}> <li> home </li> </a>
          <a href="#"> <li> About </li> </a>
          <a href="#"> <li> Portfolio </li> </a>
          <a href="#"> <li> Services </li> </a>
          <a href="#"> <li> Price </li> </a>
          <a href="#"> <li> Blog </li> </a>
        </ul>
      </div>
    </>
  )
}