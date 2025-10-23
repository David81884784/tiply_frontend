import React from 'react';

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <header className="bg-black/60 backdrop-blur-md border-b border-white/10 py-6 px-6 md:px-12">
        <h1 className="text-3xl font-bold">Profilul Tău</h1>
        <p className="text-sm text-gray-400 mt-1">Gestionează-ți contul și codul tău QR.</p>
      </header>

      {/* Main Content */}
      

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Tiply • Platformă de bacșișuri digitale
      </footer>
    </div>
  );
}