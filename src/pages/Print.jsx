import React from "react";
import QRCode from "react-qr-code";

export default function PrintablePage() {
  const qrItems = [
    {
      id: 1,
      title: "Scanează și donează 🙌",
      link: "https://tiply-flame.vercel.app/david",
      name: "David",
    },
    {
      id: 2,
      title: "Sprijină digital 🤝",
      link: "https://tiply-flame.vercel.app/david",
      name: "David",
    },
    {
      id: 3,
      title: "Mulțumim pentru susținere!",
      link: "https://tiply-flame.vercel.app/david",
      name: "David",
    },
    {
      id: 4,
      title: "Fără numerar? Donează aici.",
      link: "https://tiply-flame.vercel.app/david",
      name: "David",
    },
    {
      id: 5,
      title: "Donează cu un simplu scan",
      link: "https://tiply-flame.vercel.app/david",
      name: "David",
    },
    {
      id: 6,
      title: "Bacșiș digital",
      link: "https://tiply-flame.vercel.app/david",
      name: "David",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-12 px-4 print:bg-white print:text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 print:hidden bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-400 animate-text">
          Cartonașe QR pentru bacșiș digital
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 print:grid-cols-3 print:gap-4">
          {qrItems.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 p-6 rounded-3xl text-center shadow-2xl bg-gradient-to-br from-neutral-900 via-gray-950 to-black backdrop-blur-md text-white transition-all duration-300 hover:scale-105 hover:border-purple-600/30 group print:bg-white print:text-black print:border-black"
              style={{ minHeight: "340px" }}
            >
              <div className="text-lg font-semibold mb-3 tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {item.title}
              </div>
              <div className="bg-white p-2 rounded-lg shadow-inner w-fit mx-auto">
                <QRCode
                  value={item.link}
                  size={120}
                  bgColor="white"
                  fgColor="#000000"
                />
              </div>
              <div className="mt-4 text-sm text-white/80 group-hover:text-purple-300">
                Scan & donează către <strong>{item.name}</strong>
              </div>
              <div className="mt-1 text-[10px] text-gray-500 break-words max-w-full">
                {item.link}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 print:hidden">
          <button
            onClick={() => window.print()}
            className="px-7 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Imprimă toate cartonașele
          </button>
        </div>
      </div>
    </div>
  );
}