import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css'

export default function MyButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('src\pages\profile.js');
  };

  return (
    <button onClick={handleClick} className={styles.glow_btn}>Launch App</button>
  );
}
