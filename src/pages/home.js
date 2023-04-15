// Home page

import Home_Navbar from '../components/Navbar'
import Main from '../components/Main'
import Cards from '../components/Cards'
import styles from '../styles/bg.module.css'
// landing Page

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


