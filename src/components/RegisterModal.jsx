import React, { useState } from "react";

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nume, email, parola }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Înregistrare reușită! Te poți autentifica acum.");
        onSwitchToLogin?.();
      } else {
        alert("❌ Eroare la înregistrare: " + (data.message || "necunoscută"));
      }
    } catch (error) {
      console.error("Eroare la înregistrare:", error);
      alert("A apărut o eroare la conectarea cu serverul.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999
    }}>
      <div style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "420px",
        position: "relative",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "none",
            border: "none",
            fontSize: "1.3rem",
            cursor: "pointer",
            color: "#888"
          }}
        >
          ✕
        </button>

        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Înregistrare cont nou</h2>

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Nume complet</label>
            <input
              type="text"
              value={nume}
              onChange={(e) => setNume(e.target.value)}
              required
              placeholder="Ex: Andrei Popescu"
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                marginTop: "0.3rem"
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ex: exemplu@email.com"
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                marginTop: "0.3rem"
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Parolă</label>
            <input
              type="password"
              value={parola}
              onChange={(e) => setParola(e.target.value)}
              required
              placeholder="Minim 6 caractere"
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                marginTop: "0.3rem"
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.8rem",
              background: "linear-gradient(135deg, #8a2be2, #6f00ff)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
            {loading ? "Se înregistrează..." : "Înregistrează-te"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Ai deja un cont?{" "}
          <span
            onClick={onSwitchToLogin}
            style={{ color: "#6f00ff", cursor: "pointer", fontWeight: 600 }}
          >
            Autentifică-te
          </span>
        </p>
      </div>
    </div>
  );
}
