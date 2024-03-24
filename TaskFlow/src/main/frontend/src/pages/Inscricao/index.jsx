import styles from './styles.module.css';
import logo from '../../assets/logo.svg';
import Cadastro from '../../component/Cadastro';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
    <div className={styles.container}>
        <Cadastro />
    </div>
    );
}