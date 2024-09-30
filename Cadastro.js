import React, { useState } from 'react';
import { auth, db } from '../Firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function Cadastro() {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    dataNascimento: ''
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
       const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.senha);
      const user = userCredential.user;
       await setDoc(doc(db, 'users', user.uid), {
         nome: formData.nome,
         sobrenome: formData.sobrenome,
         dataNascimento: formData.dataNascimento,
         uid: user.uid
       });
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
      <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
      <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
      <input type="text" name="sobrenome" placeholder="Sobrenome" onChange={handleChange} required />
      <input type="date" name="dataNascimento" onChange={handleChange} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Cadastro;