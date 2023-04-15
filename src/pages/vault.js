// Home page

import Home_Navbar from '../components/hNavbar'
import Main from '../components/home_Main'
import Cards from '../components/Vault_Cards'
import styles from '../styles/bg.module.css'
// Landing Page

export default function homepage() {
  return (
    <>
      <div className={styles.body}>
        <Home_Navbar />
        <Main />
        <Cards />
      </div>
    </>
  )
}


