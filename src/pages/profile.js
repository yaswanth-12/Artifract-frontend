// Profile page

import Profile_Navbar from '../components/pNavbar'
import Main from '../components/profile_Main'
import Cards from '../components/profile_Cards'
import styles from '../styles/bg.module.css'
import styles1 from '../styles/profile_cards.module.css'
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
