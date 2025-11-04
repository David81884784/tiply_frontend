import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Alert from './Alert';

export default function LogModal({ isOpen, onClose }) {
  // URL backend — Vercel sau local
  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const navigate = useNavigate();
  const { login } = useAuth();

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("info");

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [parola, setParola] = useState('');
  const [nume, setNume] = useState('');
  const [confirmParola, setConfirmParola] = useState('');

  // Alert timeout
  useEffect(() => {
    if (alertMessage) {
      const timeout = setTimeout(() => setAlertMessage(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [alertMessage]);

  // --- Login ---
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {   // ✅ ruta corectă
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, parola }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        const meRes = await fetch(`${BASE_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        if (!meRes.ok) {
          const errorMsg = await meRes.text();
          console.error('Eroare răspuns /auth/me:', errorMsg);
          throw new Error('Token invalid sau rută inexistentă');
        }

        const user = await meRes.json();
        login(data.token, user);
        setAlertMessage('Autentificat cu succes!');
        setAlertType('success');
        onClose();
        navigate('/account');
      } else {
        setAlertMessage(data.message || 'Eroare la autentificare');
        setAlertType('error');
      }
    } catch (error) {
      console.error('Eroare handleLogin:', error);
      setAlertMessage('Autentificarea a eșuat.');
      setAlertType('error');
    }
  };

  // --- Register ---
  const handleRegister = async (e) => {
    e.preventDefault();

    if (parola !== confirmParola) {
      setAlertMessage('Parolele nu coincid.');
      setAlertType('warning');
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {   // ✅ ruta corectă
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nume, email, parola }),
      });

      const data = await response.json();
      if (response.ok) {
        setAlertMessage('Înregistrare reușită! Te poți autentifica acum.');
        setAlertType('success');
        setIsLogin(true);
      } else {
        setAlertMessage(data.message || 'Eroare la înregistrare');
        setAlertType('error');
      }
    } catch (error) {
      console.error('Eroare handleRegister:', error);
      setAlertMessage('Înregistrarea a eșuat.');
      setAlertType('error');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-lg mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              {isLogin ? 'Autentificare' : 'Înregistrare'}
            </h3>

            <p className="text-gray-300 mb-4 text-center">
              {isLogin
                ? 'Conectează-te cu datele tale pentru a accesa contul.'
                : 'Creează un cont nou pentru a începe să folosești platforma.'}
            </p>

            {alertMessage && (
              <Alert type={alertType} message={alertMessage} />
            )}

            <form className="space-y-4 mt-4" onSubmit={isLogin ? handleLogin : handleRegister}>
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Nume complet"
                  value={nume}
                  onChange={(e) => setNume(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                placeholder="Parolă"
                value={parola}
                onChange={(e) => setParola(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirmă parola"
                  value={confirmParola}
                  onChange={(e) => setConfirmParola(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              )}
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
              >
                {isLogin ? 'Autentificare' : 'Creează cont'}
              </button>
            </form>

            <p className="text-center text-gray-400 mt-4">
              {isLogin ? 'Nu ai cont?' : 'Ai deja cont?'}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-cyan-400 hover:underline"
              >
                {isLogin ? 'Înregistrează-te' : 'Autentifică-te'}
              </button>
            </p>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
