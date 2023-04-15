import React from 'react'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          {navelements(<img src="../../public/favicon.ico" ></img>)}
          <span className={styles.red}> {navelements("Home")} </span>
          {navelements("About")}
          {navelements("Portfolio")}
          {navelements("Services")}
          {navelements("Price")}
          {navelements("Blog")}
          {navelements("Contact")}
        </ul>
      </nav>
    </>
  )
}

function navelements(element) {
  return (
    <a href=""> <li> {element} </li> </a>
  )
}
