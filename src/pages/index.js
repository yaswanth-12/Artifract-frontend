import Landing_Navbar from '../components/Navbar'
import Main from '../components/Main'
import Cards from '../components/lapp_Cards'
import styles from '../styles/bg.module.css'
// landing Page

export default function landingPage() {
  return (
    <>
    <link rel="icon" type="image/x-icon" href="https://yaswanth-12.github.io/Artifract-frontend/Artifract_Fevicon.png"></link>
      <div className={styles.body}></div>
      <div className={styles.body}>
        <Landing_Navbar />
        <Main />
        <Cards />
      </div>
    </>
  )
}


