import styles from './style.module.css';
import logo from '../../assets/logo.svg';

export default function Home(){
    return (
    <div className={styles.container}>
        <div className={styles.esquerda}>
              <img src={logo} alt="Logo" />
        </div>
        <div className={styles.direita}>
        </div>
    </div>
    );
}