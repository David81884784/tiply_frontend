import React, { useEffect, useState } from "react";

export default function Transfers() {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const mockTransfers = [
      {
        id: 1,
        type: "Către utilizator",
        user: "Maria Ionescu",
        date: "18 iunie 2025",
        amount: 50,
        status: "Completat",
      },
      {
        id: 2,
        type: "Depunere",
        user: "Card BCR",
        date: "17 iunie 2025",
        amount: 100,
        status: "Completat",
      },
      {
        id: 3,
        type: "Retragere",
        user: "Cont bancar",
        date: "16 iunie 2025",
        amount: 75,
        status: "În curs",
      },
    ];
    setTransfers(mockTransfers);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      <main className="max-w-4xl mx-auto py-16 px-6 md:px-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Istoric transferuri</h1>

        <div className="space-y-6">
          {transfers.map((transfer) => (
            <div
              key={transfer.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between items-center shadow hover:border-pink-500/40 transition"
            >
              <div>
                <h3 className="font-semibold text-lg">{transfer.type}</h3>
                <p className="text-sm text-white/70">{transfer.user}</p>
                <p className="text-xs text-white/40">{transfer.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-pink-400">{transfer.amount} Lei</p>
                <p
                  className={`text-sm mt-1 ${
                    transfer.status === "Completat"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  {transfer.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold shadow-lg transition transform hover:-translate-y-1 active:scale-95">
            Inițiază un transfer nou →
          </button>
        </div>
      </main>

      {/* Efecte fundal */}
      <div
        className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl z-0"
        style={{
          top: "15%",
          left: "60%",
          transform: "translateX(-50%)",
          animation: "moveBackground 10s infinite alternate ease-in-out",
        }}
      ></div>
      <div
        className="absolute left-0 bottom-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl z-0"
        style={{
          animation: "scaleBackground 8s infinite alternate ease-in-out",
        }}
      ></div>
    </div>
  );
}
