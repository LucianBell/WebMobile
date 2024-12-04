'use client';

import { useEffect } from 'react';
import WelcomeClient from '@/components/WelcomeClient';

export default function WelcomePage() {
  useEffect(() => {
    // Recupera o token do localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      // Exibe o token no console
      console.log('Token recebido:', token);
    } else {
      console.log('Nenhum token encontrado.');
    }
  }, []);

  return (
    <main className="bg-black text-white min-h-screen px-32 py-10">

      <WelcomeClient />
    </main>
  );
}
