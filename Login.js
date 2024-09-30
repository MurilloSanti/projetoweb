import React, { useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); // Certifique-se de usar o hook useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/principal'); // Use navigate em vez de Navigate
    } catch (error) {
      alert('Usuário não está cadastrado!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;