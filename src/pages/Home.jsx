import React from "react";
import { assets } from '../assets/assets';


const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
      {/* Efect de Blur */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          width: "925px",
          height: "670px",
          top: "-101.3px",
          left: "-527.05px",
          transform: "rotate(30deg)",
          background:
            "linear-gradient(330.85deg, rgba(236, 42, 239, 0.8) 16.08%, rgba(215, 20, 130, 0.8) 46.17%, rgba(135, 24, 137, 0.8) 83.88%)",
          filter: "blur(300px)",
          zIndex: 0,
        }}
      ></div>

      {/* Hero Section */}
      <section className="max-w-screen-lg mx-auto p-8 md:p-16 mt-[150px] ml-[220px] relative z-10">
        <div className="w-full">
          <h2 className="text-5xl font-bold leading-tight mb-4">
            Oferă Tips Ușor, <br />
            Rapid și Transparent
          </h2>
          <p className="text-lg text-white mb-8">
            Cu Tiply, lași un bacșiș în doar câteva secunde. <br />
            Fără numerar, fără confuzii – doar apreciere <br />
            sinceră pentru serviciul excelent.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              style={{
                width: "202px",
                height: "54px",
                borderRadius: "15px",
                padding: "16px 32px",
                background: "linear-gradient(90deg, #228DAF 0%, #7A67BB 94.23%)",
              }}
              className="text-white font-bold text-lg shadow-lg hover:opacity-80 transition whitespace-nowrap"
            >
              Vezi Mai Multe
            </button>

            <button
              style={{
                width: "275px",
                height: "56px",
                borderRadius: "15px",
                padding: "16px 32px",
                background: "#5C489F4D",
                border: "2px solid transparent",
                borderImageSource:
                  "linear-gradient(90deg, #5C489F 0%, #62308F 100%)",
              }}
              className="text-white font-bold text-lg shadow-lg hover:border hover:border-gradient-to-r hover:border-[#5C489F] transition whitespace-nowrap"
            >
              Lasă un Tips Acum →
            </button>

            <div className=" absolute top-[18px] left-0  flex justify-center  ml-[1000px] w-[75%]">
          <img
            src={assets.heroImage}
            alt="Hero Image"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>
          </div>
        </div>
      </section>

      {/* Cum funcționează Tiply */}
      <section className="relative z-10 mt-[300px] px-8 md:px-16 text-center">
        <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-20 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="relative w-[320px] h-[220px] flex items-end group transition-transform duration-300 hover:scale-[1.03]">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none animate-pulse-slow"
              style={{
                background: `radial-gradient(circle at center, #D26BFF 0%, transparent 80%)`,
                filter: "blur(100px)",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full rounded-[30px] z-10 pointer-events-none"
              style={{
                boxShadow: `0 0 80px 10px #D26BFF66`,
              }}
            />
            <div
              className="relative z-20 p-6 text-white w-full h-full flex flex-col justify-center"
              style={{
                background: "rgba(176, 102, 255, 0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-3">Creezi contul tău gratuit</h3>
              <p className="text-sm text-white/80 leading-snug">
                Îți ia doar 1 minut să te înregistrezi și să primești un cod QR personalizat.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-[320px] h-[220px] flex items-end group transition-transform duration-300 hover:scale-[1.03]">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none animate-pulse-slow"
              style={{
                background: `radial-gradient(circle at center, #2C73D2 0%, transparent 80%)`,
                filter: "blur(100px)",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full rounded-[30px] z-10 pointer-events-none"
              style={{
                boxShadow: `0 0 80px 10px #2C73D266`,
              }}
            />
            <div
              className="relative z-20 p-6 text-white w-full h-full flex flex-col justify-center"
              style={{
                background: "rgba(176, 102, 255, 0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-3">Primești bacșiș prin QR</h3>
              <p className="text-sm text-white/80 leading-snug">
                Afișezi codul tău pe telefon, bon sau alte materiale și clienții îl scanează.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-[320px] h-[220px] flex items-end group transition-transform duration-300 hover:scale-[1.03]">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none animate-pulse-slow"
              style={{
                background: `radial-gradient(circle at center, #FFD700 0%, transparent 80%)`,
                filter: "blur(100px)",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full rounded-[30px] z-10 pointer-events-none"
              style={{
                boxShadow: `0 0 80px 10px #FFD70066`,
              }}
            />
            <div
              className="relative z-20 p-6 text-white w-full h-full flex flex-col justify-center"
              style={{
                background: "rgba(176, 102, 255, 0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTopRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-xl font-bold mb-3">Retragi banii instant</h3>
              <p className="text-sm text-white/80 leading-snug">
                Bacșișurile intră în contul tău și le poți retrage oricând, simplu și sigur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noua secțiune cu instructiuni din imagine */}
      <section className="max-w-screen-xl mx-auto px-6 py-24 text-white text-center mt-[200px] bg-gradient-to-br from-purple-950 to-black rounded-3xl shadow-2xl">
  <div className="flex flex-col md:flex-row items-center justify-between gap-16">
    {/* Instrucțiuni animate */}
    <div className="w-full md:w-1/2 space-y-10">
      {[ 
        "Activează contul și descarcă codul tău QR.",
        "Tipărește-l sau salvează-l în telefon.",
        "Primește bani direct pe cardul tău bancar."
      ].map((text, index) => (
        <div
          key={index}
          className="flex items-center text-left group transition-transform hover:scale-105 duration-300"
        >
          <span className="mr-6 bg-purple-600 group-hover:bg-pink-500 transition-colors text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">
            {index + 1}
          </span>
          <p className="text-xl md:text-2xl font-medium group-hover:text-white/90">{text}</p>
        </div>
      ))}
    </div>

    {/* Text explicativ */}
    <div className="w-full md:w-1/2 text-left">
      <h2 className="text-5xl font-extrabold leading-tight mb-6 tracking-tight bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
        Primește bacșiș fără numerar, simplu și elegant
      </h2>
      <p className="text-lg md:text-xl text-white/70">
        O soluție digitală pentru profesioniști din servicii – rapidă, elegantă și fără comisioane ascunse.
      </p>
    </div>
  </div>
</section>

{/* Cod QR cu efect de glass + animații */}
<section className="max-w-screen-xl mx-auto mt-24 px-8 py-16 rounded-3xl bg-white/10 backdrop-blur-lg text-white shadow-2xl">
  <div className="flex flex-col md:flex-row items-center justify-between gap-16">
    <div className="w-full md:w-1/2 space-y-6 text-left">
      <h3 className="text-3xl font-semibold mb-4">Materiale personalizate</h3>
      <ul className="space-y-4 text-lg list-disc list-inside">
        <li>Tipărește materiale QR</li>
        <li>Creează autocolante</li>
        <li>Insigne sau carduri personalizate</li>
      </ul>
    </div>

    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <img
        src=""
        alt="QR "
        className="w-44 h-44 md:w-56 md:h-56 rounded-xl shadow-xl border border-white/20 hover:scale-110 transition-transform duration-300"
      />
    </div>
  </div>
</section>

{/* Beneficii animate */}
<section className="max-w-screen-xl mx-auto px-6 py-20 text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Beneficii principale</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      "Timp economisit",
      "Plăți rapide",
      "Istoric tranzacții",
      "Confirmări automate",
      "Notificări instant",
      "Setări personalizate"
    ].map((benefit, index) => (
      <div
        key={index}
        className="group bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl p-6 text-white shadow-xl flex items-center gap-4 hover:scale-105 transform transition-all duration-300"
      >
        <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full shadow-inner">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-lg font-medium">{benefit}</span>
      </div>
    ))}
  </div>
</section>

{/* Footer rafinat */}
<footer className="bg-black py-16 mt-20 text-white text-center">
  <div className="max-w-screen-lg mx-auto space-y-6">
  <img src={assets.logo} alt="Logo" className="w-24 h-24 mx-auto animate-pulse" />
    <p className="text-lg text-white/70">
      © {new Date().getFullYear()} Tiply. Toate drepturile rezervate.
    </p>
    <div className="flex justify-center gap-6 text-sm text-white/60">
      <a href="#" className="hover:text-white transition">Termeni de utilizare</a>
      <a href="#" className="hover:text-white transition">Politica de confidențialitate</a>
      <a href="#" className="hover:text-white transition">Contact</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;

