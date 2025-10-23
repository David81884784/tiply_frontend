import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import Alert from "../components/Alert"; // Asigură-te că fișierul Alert.jsx există

export default function DonationPublicPage() {
  const [amount, setAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("info");

  useEffect(() => {
    setUser({ name: "David", avatar: null });

    const savedGoals = localStorage.getItem("donationGoals");
    if (savedGoals) {
      try {
        setGoals(JSON.parse(savedGoals));
      } catch (e) {
        console.error("Eroare la parsarea scopurilor:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (alertMessage) {
      const t = setTimeout(() => setAlertMessage(null), 3500);
      return () => clearTimeout(t);
    }
  }, [alertMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationAmount = amount || parseFloat(customAmount);
    if (!donationAmount || donationAmount <= 0 || !purpose) {
      setAlertMessage("Te rog selectează un scop și o sumă validă.");
      setAlertType("warning");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: donationAmount,
      date: new Date().toLocaleDateString("ro-RO"),
      purpose,
      comment: comment || "Fără mesaj",
    };

    const existing = JSON.parse(localStorage.getItem("transactions") || "[]");
    localStorage.setItem("transactions", JSON.stringify([newTransaction, ...existing]));

    setAlertMessage(
      `🎉 Mulțumim! Ai donat ${donationAmount} lei pentru „${purpose}”`
    );
    setAlertType("success");

    setAmount(0);
    setPurpose("");
    setComment("");
  };

  const handleGoalClick = (title) => setPurpose(title);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white font-sans py-12 px-4">
      <div className="max-w-xl mx-auto bg-gray-800/60 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm transition-all duration-300">
        <div className="text-center mb-8">
          {user?.avatar ? (
            <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full mx-auto mb-3" />
          ) : (
            <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-3 flex items-center justify-center text-3xl">👤</div>
          )}
          <h2 className="text-2xl font-bold">Susține-l pe {user?.name || "Utilizator"}</h2>
          <p className="text-sm text-purple-300 mt-1">Oferă-i un bacșiș digital ❤️</p>
        </div>

        <form onSubmit={handleSubmit}>
          {alertMessage && (
            <div className="mb-6">
              <Alert type={alertType} message={alertMessage} />
            </div>
          )}

          {/* Sume rapide + box suma */}
          <div className="mb-8 text-center">
            <p className="font-medium text-white/80 mb-4 text-lg">Alege sau introdu o sumă:</p>
            <div className="relative w-64 mx-auto mb-6">
              <button
                type="button"
                onClick={() => setAmount((prev) => Math.max(1, parseInt(prev || 0) - 1))}
                className="absolute left-0 top-0 bottom-0 px-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold rounded-l-md"
              >−</button>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setCustomAmount("");
                }}
                className="w-full h-14 text-center text-2xl font-bold bg-white/10 text-white outline-none border border-white/20 appearance-none rounded-md pl-12 pr-12"
              />
              <button
                type="button"
                onClick={() => setAmount((prev) => parseInt(prev || 0) + 1)}
                className="absolute right-0 top-0 bottom-0 px-4 bg-pink-600 hover:bg-pink-700 text-white text-xl font-bold rounded-r-md"
              >+</button>
            </div>

            <div className="inline-flex rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-md">
              {[10, 20, 40, 60, 80].map((val, i, arr) => (
                <div key={val} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setAmount(val);
                      setCustomAmount("");
                    }}
                    className={`px-6 py-2 text-sm font-semibold transition-all duration-200 
                    ${parseInt(amount) === val
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-inner"
                      : "text-white hover:bg-white/10"}`}
                  >
                    {val} Lei
                  </button>
                  {i < arr.length - 1 && (
                    <div className="absolute right-0 top-2 bottom-2 w-px bg-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Scopuri */}
          <div className="mb-6">
            <p className="font-medium text-white/80 mb-3">Scopul donației:</p>
            {goals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <div
                    key={goal.id}
                    onClick={() => handleGoalClick(goal.title)}
                    className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 text-center ${
                      purpose === goal.title
                        ? "bg-gradient-to-r from-purple-700 to-pink-600 border-purple-500 shadow-lg"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-2xl block mb-2">{goal.icon}</span>
                    <h3 className="font-semibold">{goal.title}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-white/50 italic">Momentan nu sunt definite scopuri.</p>
            )}
          </div>

          {/* Comentariu */}
          <div className="mb-6">
            <label className="block font-medium text-white/80 mb-2">
              Lasă un mesaj (opțional):
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Mesajul tău..."
              rows="3"
              className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/20 hover:from-purple-700 hover:to-pink-600 transition-transform duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Donează acum →
          </button>
        </form>
      </div>
    </div>
  );
}
