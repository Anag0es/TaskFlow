import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";
import styles from './styles.module.css';

export default function LoginForm(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
    const [id, setId] = useState('');
  const [erro, setErro] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');
    try {
      const response = await axios.post('http://localhost:8080/usuario/login', { email, senha, id }, {
                                       headers: {
                                           'Content-Type': 'application/json',
                                       },
      });
      console.log('Usuário logado com sucesso: ' + email);

      localStorage.setItem('token', response.data);

      // decodifica o token e pega o userID
      const token = localStorage.getItem('token');
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const userID = JSON.parse(window.atob(base64)).userId;

      localStorage.setItem('userID', userID);


      navigate("/tarefas");
    } catch (error) {
      setErro("Erro ao fazer login. Tente novamente.");
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
          <Link to="/inscricao" className={styles.inscreva}>inscreva-se</Link>
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
