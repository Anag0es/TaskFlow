// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios'; // para fazer solicitações HTTP ao backend

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Faça uma solicitação HTTP para o backend para autenticar o usuário
      const response = await axios.post('/api/login', { username, password });
      // Lidar com a resposta do backend (redirecionar, armazenar token de autenticação, etc.)
    } catch (error) {
      setError('Usuário ou senha incorretos. Por favor, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
