// Profile page

import Profile_Navbar from '../components/pNavbar'
import Main from '../components/profile_Main'
import Cards from '../components/profile_Cards'
import styles from '../styles/bg.module.css'
// landing Page

export default function ProfilePage() {
  return (
    <>
    <link rel="icon" type="image/x-icon" href="https://yaswanth-12.github.io/Artifract-frontend/Artifract_Fevicon.png"></link>
      <div className={styles.body}></div>
      <div className={styles.body}>
        <Profile_Navbar />
        <Main />
        {/* <Cards /> */}
      </div>
    </>
  )
}
