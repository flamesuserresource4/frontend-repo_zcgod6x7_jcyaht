import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TicketGrid from './components/TicketGrid';
import AuthPanels from './components/AuthPanels';
import HistoryProfile from './components/HistoryProfile';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <NavBar />
      <Hero />
      <TicketGrid />
      <AuthPanels />
      <HistoryProfile />
      <footer className="bg-black/90 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <div>© {new Date().getFullYear()} e-tix. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#tickets" className="hover:text-white">Tickets</a>
            <a href="#profile" className="hover:text-white">Profile</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
