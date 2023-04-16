// Home page
import Link from 'next/link'
import Home_Navbar from '../components/hNavbar'
import Main from '../components/home_Main'
import Cards from '../components/home_Cards'
import styles from '../styles/bg.module.css'
// landing Page

export default function homepage() {
  return (
    <>
      <Link rel="icon" type="image/x-icon" href="https://yaswanth-12.github.io/Artifract-frontend/public/Artifract_Fevicon.png"></Link>
      <div className={styles.body}></div>
      <div className={styles.body}>
        <Home_Navbar />
        <Main />
        <Cards />
      </div>
    </>
  )
}


