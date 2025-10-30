import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Alert from "./Alert";

/* ---------- Mini UI Components (floating label + icons) ---------- */
function FancyField({ type = "text", value, onChange, label, autoComplete, leftIcon }) {
  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-r from-white/30 via-white/20 to-white/30">
      <div className="relative rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-sm focus-within:ring-4 focus-within:ring-indigo-500/20 transition">
        {leftIcon ? (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{leftIcon}</span>
        ) : null}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          autoComplete={autoComplete}
          className="peer w-full bg-transparent text-gray-900 placeholder-transparent px-12 py-3 rounded-2xl focus:outline-none"
        />
        <label
          className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200
                     peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600
                     peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

function PasswordField({ value, onChange, label = "Parolă", autoComplete }) {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-r from-white/30 via-white/20 to-white/30">
      <div className="relative rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 shadow-sm focus-within:ring-4 focus-within:ring-indigo-500/20 transition">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-80">
            <path fill="currentColor" d="M17 8h-1V6a4 4 0 1 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-6 0V6a3 3 0 1 1 6 0v2zM8 10h8v9H8z" />
          </svg>
        </span>
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder=" "
          autoComplete={autoComplete}
          className="peer w-full bg-transparent text-gray-900 placeholder-transparent px-12 py-3 pr-14 rounded-2xl focus:outline-none"
        />
        <label
          className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200
                     peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-600
                     peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs"
        >
          {label}
        </label>
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg grid place-items-center hover:bg-gray-100 text-gray-600"
          aria-label={show ? "Ascunde parola" : "Afișează parola"}
        >
          {show ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
}
/* ------------------------------------------------------------------ */

export default function LogModal({ isOpen, onClose }) {
  // 🔹 Varianta locală
  const BASE_URL = "http://localhost:5000";
  const navigate = useNavigate();
  const { login } = useAuth();

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("info");
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [nume, setNume] = useState("");
  const [confirmParola, setConfirmParola] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !parola) {
      setAlertMessage("Completează toate câmpurile!");
      setAlertType("warning");
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, parola }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        login(data.token, { email });
        onClose();
        navigate("/account");
      } else {
        setAlertMessage(data.message || "Eroare la autentificare");
        setAlertType("error");
      }
    } catch {
      setAlertMessage("Autentificarea a eșuat.");
      setAlertType("error");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!nume || !email || !parola) {
      setAlertMessage("Completează toate câmpurile!");
      setAlertType("warning");
      return;
    }
    if (parola !== confirmParola) {
      setAlertMessage("Parolele nu coincid!");
      setAlertType("warning");
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nume, email, parola }),
      });
      const data = await res.json();
      if (res.ok) {
        setAlertMessage("Înregistrare reușită!");
        setAlertType("success");
        setIsLogin(true);
      } else {
        setAlertMessage(data.message || "Eroare la înregistrare");
        setAlertType("error");
      }
    } catch {
      setAlertMessage("Înregistrare eșuată.");
      setAlertType("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_40px_#8b5cf633]
      bg-white/10 border border-white/20 backdrop-blur-xl grid md:grid-cols-2 animate-zoomIn">

        {/* Form side */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text 
          bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500">
            {isLogin ? "Bine ai revenit" : "Creează cont"}
          </h2>

          {alertMessage ? <Alert type={alertType} message={alertMessage} /> : null}

          <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">

            {!isLogin && (
              <FancyField
                type="text"
                value={nume}
                onChange={(e) => setNume(e.target.value)}
                label="Nume complet"
                autoComplete="name"
                leftIcon={
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5m0 2c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5" />
                  </svg>
                }
              />
            )}

            <FancyField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              autoComplete="email"
              leftIcon={
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 13L2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76zM21.64 6.22L12 12L2.36 6.22A2 2 0 0 1 3.99 5h16.02a2 2 0 0 1 1.63 1.22" />
                </svg>
              }
            />

            <PasswordField
              value={parola}
              onChange={(e) => setParola(e.target.value)}
              label="Parolă"
              autoComplete={isLogin ? "current-password" : "new-password"}
            />

            {!isLogin && (
              <PasswordField
                value={confirmParola}
                onChange={(e) => setConfirmParola(e.target.value)}
                label="Confirmă parola"
                autoComplete="new-password"
              />
            )}

            <button
              type="submit"
              className="w-full py-3 mt-1 rounded-xl font-semibold text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-gray-200 mt-4 text-center">
            {isLogin ? "Nou aici?" : "Ai deja cont?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-300 font-semibold hover:underline"
            >
              {isLogin ? "Creează cont" : "Autentifică-te"}
            </button>
          </p>
        </div>

        {/* Image side */}
        <div
          className="hidden md:flex relative bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/10 flex items-center justify-center text-center text-white p-8">
            <div>
              <h3 className="text-3xl font-bold mb-2 drop-shadow-md">
                {isLogin ? "Hai cu noi!" : "Bine ai revenit!"}
              </h3>
              <p className="opacity-90 max-w-xs mx-auto text-sm">
                Platformă modernă. Experiență premium. Totul pentru tine.
              </p>
            </div>
          </div>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-semibold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
