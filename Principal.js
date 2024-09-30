import React, { useEffect, useState } from 'react';
import { auth, db } from '../Firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const Principal = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, []);

  if (!userData) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Bem-vindo, {userData.nome}</h1>
      <p>Sobrenome: {userData.sobrenome}</p>
      <p>Data de Nascimento: {userData.dataNascimento}</p>
    </div>
  );
};

export default Principal;