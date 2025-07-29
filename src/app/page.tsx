'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Set page title
    document.title = "Firma hovno";

    // Generate and set favicon
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D4AF37" /><stop offset="100%" stop-color="#C0C0C0" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      (faviconLink as HTMLLinkElement).rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    (faviconLink as HTMLLinkElement).href = faviconUrl;
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      <header className="bg-neutral-900 shadow-lg fixed w-full z-50 px-4 py-4 md:px-8">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-serif text-goldenrod-light tracking-wide">
            Firma hovno
          </div>
          <div className="hidden md:flex space-x-8 font-serif text-lg">
            <a href="#hero" className="hover:text-goldenrod-light transition duration-300">Úvod</a>
            <a href="#pricing" className="hover:text-goldenrod-light transition duration-300">Nabídka</a>
            <a href="#contact" className="hover:text-goldenrod-light transition duration-300">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-neutral-800 mt-4 mx-auto rounded-lg shadow-xl`}>
          <nav className="flex flex-col items-center py-4 space-y-4 text-lg">
            <a href="#hero" onClick={toggleMenu} className="w-full text-center py-2 hover:bg-neutral-700 transition duration-300">Úvod</a>
            <a href="#pricing" onClick={toggleMenu} className="w-full text-center py-2 hover:bg-neutral-700 transition duration-300">Nabídka</a>
            <a href="#contact" onClick={toggleMenu} className="w-full text-center py-2 hover:bg-neutral-700 transition duration-300">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549488346-4ce5ef6be40c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-serif text-goldenrod-light leading-tight mb-6 animate-fade-in-up">
              Firma hovno
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 animate-fade-in-up animation-delay-300">
              Prodvame chutne hovinko 100 kc
            </p>
          </div>
        </section>

        <section id="pricing" className="py-24 bg-neutral-900 text-center">
          <h2 className="text-5xl font-serif text-goldenrod-light mb-16">Naše Nabídka</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-goldenrod-dark transform hover:scale-105 transition duration-300">
                <h3 className="text-3xl font-serif text-goldenrod-light mb-4">Denni menu</h3>
                <p className="text-xl text-gray-300">Menu s jedinečnou chutí.</p>
                <p className="text-4xl font-bold text-goldenrod-light mt-6">100 KC</p>
              </div>
              <div className="bg-neutral-800 p-8 rounded-lg shadow-xl border border-goldenrod-dark transform hover:scale-105 transition duration-300">
                <h3 className="text-3xl font-serif text-goldenrod-light mb-4">Vecerni drink</h3>
                <p className="text-xl text-gray-300">Osvěžující večerní drinky.</p>
                <p className="text-4xl font-bold text-goldenrod-light mt-6">100 KC</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-neutral-800">
          <h2 className="text-5xl font-serif text-goldenrod-light text-center mb-16">Kontaktujte Nás</h2>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-20">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-serif text-goldenrod-light mb-4">Informace</h3>
              <p className="text-xl text-gray-300 mb-2">Email: info@firmahovno.cz</p>
              <p className="text-xl text-gray-300 mb-2">Telefon: +420 123 456 789</p>
              <p className="text-xl text-gray-300">Adresa: Hovínková 1, 100 00 Praha</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-950 py-8 text-center text-gray-500 text-sm">
        Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-goldenrod-light hover:underline">DigitalFusion</a>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .text-goldenrod-light { color: #D4AF37; }
        .border-goldenrod-dark { border-color: #A67C00; }
        .bg-neutral-900 { background-color: #1A1A1A; }
        .bg-neutral-800 { background-color: #2e2e2e; }
        .bg-neutral-950 { background-color: #0d0d0d; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}
