import styles from './styles.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function LoginForm(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/usuario/create', { nome, email, senha }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Usuário criado com sucesso: ' + response.data.email);
            setShowSuccess(true);
            setNome("");
            setEmail("");
            setSenha("");
        } catch (error) {
            setErro("Erro ao criar usuário. Tente novamente.");
            setShowError(true);
            console.log("Erro ao criar usuário: " + error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.setaContainer}>
                <Link to="/" className={styles.seta}>&larr;</Link>
            </div>
            <h1 className={styles.cadastro}>Cadastro</h1>
            <form className={styles.form} onSubmit={handleCadastro}>
                <input type="text" className={styles.input} placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <hr className={styles.linha}></hr>
                <input type="text" className={styles.input} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <hr className={styles.linha}></hr>
                <input type="password" className={styles.input} placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <hr className={styles.linha}></hr>
                <button className={styles.botao} type="submit">cadastrar</button>
            </form>
            {showError && (
                <div className={styles.popupErro}>
                    <div className={styles.popupContentErro}>
                        <span className={styles.closeErro} onClick={() => setShowError(false)}>&times;</span>
                        <p>{erro}</p>
                    </div>
                </div>
            )}
            {showSuccess && (
                <div className={styles.popupSucess}>
                    <div className={styles.popupContentSucess}>
                        <Link to="/" className={styles.voltarlogin}>&larr; Login</Link>
                        <span className={styles.closeSucess} onClick={() => setShowSuccess(false)}>&times;</span>
                        <p>Usuário criado com sucesso!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
