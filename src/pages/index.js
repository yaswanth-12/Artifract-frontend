import Landing_Navbar from '../components/Navbar'
import Main from '../components/Main'
import Cards from '../components/Cards'
import styles from '../styles/bg.module.css'
// landing Page

export default function landingPage() {
  return (
    <>
      <div className={styles.body}>
        <Landing_Navbar />
        <Main />
        <Cards />
      </div>
    </>
  )
}


