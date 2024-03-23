import styles from './style.module.css';
import logo from '../../assets/logo.svg';
import LoginForm from '../../component/loginForm';

export default function Home(){
    return (
    <div className={styles.container}>
        <div className={styles.esquerda}>
              <img src={logo} alt="Logo" className={styles.logo}/>
        </div>
        <div className={styles.direita}>
            <LoginForm/>
        </div>
    </div>
    );
}