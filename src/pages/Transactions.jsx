import React, { useEffect, useState } from 'react';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('transactions');
    if (stored) {
      try {
        setTransactions(JSON.parse(stored));
      } catch (e) {
        console.error('Eroare la citirea tranzacțiilor:', e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <nav className="w-full bg-black/30 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-white">Tranzacții</span>
        </div>
        <div className="flex gap-8">
          <span className="text-sm text-white/80">Cabinetul personal</span>
          <span className="text-sm text-white/80">Transferuri</span>
          <span className="text-sm text-white/80">Pentru imprimare</span>
          <span className="text-sm text-white/80">Profil</span>
        </div>
        <div className="relative">
          <button className="flex items-center gap-2 text-white hover:text-purple-400 transition focus:outline-none" aria-label="Setări cont">
            ⚙️
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Istoric tranzacții</h1>

        <div className="space-y-4">
          {transactions.length === 0 ? (
            <p className="text-center text-white/50 italic">Nu există tranzacții.</p>
          ) : (
            transactions.map((tx) => (
              <div
                key={tx.id}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex items-center justify-between hover:border-purple-500/30 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    💸
                  </div>
                  <div>
                    <p className="font-medium">{tx.purpose}</p>
                    <p className="text-sm text-white/70">{tx.date}</p>
                    <p className="text-sm text-white/60 italic">{tx.comment}</p>
                  </div>
                </div>

                <div className="text-right">
                <p className="font-bold text-purple-400">{tx.amount} Lei</p>
                <p className="text-sm flex items-center justify-end gap-1 mt-1 text-green-400">
                    ✅ Completat
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tiply • Platformă de bacșișuri digitale
        </footer>
      </main>

      <div
        className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl z-0"
        style={{ top: "10%", left: "50%", transform: "translateX(-50%)", animation: "moveBackground 10s infinite alternate ease-in-out" }}
      ></div>
      <div
        className="absolute right-0 top-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl z-0"
        style={{ animation: "scaleBackground 8s infinite alternate ease-in-out" }}
      ></div>
    </div>
  );
}
