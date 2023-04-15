// Profile page

import Profile_Navbar from '../components/pNavbar'
import Main from '../components/Main'
import Cards from '../components/Cards'
import styles from '../styles/bg.module.css'
// landing Page

export default function ProfilePage() {
  return (
    <>
      <div className={styles.body}>
        <Profile_Navbar />
        <Main />
        <Cards />
      </div>
    </>
  )
}
