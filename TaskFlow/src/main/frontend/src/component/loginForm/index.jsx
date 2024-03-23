import styles from './styles.module.css';
import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [showError, setShowError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      const { data } = await axios.post('http://localhost:8080/usuario/create',{
        email,
        senha
      });
      console.log('Usuário criado com sucesso: ' + data.email);
    } catch (error) {
      setErro("Erro ao criar usuário. Tente novamente.");
      setShowError(true);
      console.log("Erro ao criar usuário: " + error);
    }
  }

  return(
    <div className={styles.container}>
      <div className={styles.cima}>
        <h1 className={styles.titulo}>Entre na conta</h1>
      </div>
      <div className={styles.div_form}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} placeholder="email"></input>
          <hr className={styles.linha}></hr>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.input} placeholder="senha"></input>
          <hr className={styles.linha}></hr>
          <button type="submit" className={styles.botao}>Entrar</button>
          <a href="" className={styles.inscreva}>inscreva-se</a>
        </form>
        {showError && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={() => setShowError(false)}>&times;</span>
            <p>{erro}</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}