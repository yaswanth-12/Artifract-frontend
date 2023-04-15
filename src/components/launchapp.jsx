import Link from 'next/link';
import styles from '../styles/navbar.module.css'

export default function MyButton() {
  return (
    <Link href="/home" target='_blank'>
      <button className={styles.glow_btn}>Launch App</button>
    </Link>
  );
}
