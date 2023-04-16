// Home page

import Home_Navbar from '../components/hNavbar'
import Main from '../components/home_Main'
import Cards from '../components/Vault_Cards'
import styles from '../styles/bg.module.css'
// Landing Page

export default function homepage() {
  return (
    <>
    <link rel="icon" type="image/x-icon" href="https://github.com/yaswanth-12/Artifract-frontend/Artifract_Fevicon.png"></link>
      <div className={styles.body}>
        <Home_Navbar />
        <Main />
        <Cards />
      </div>
    </>
  )
}


