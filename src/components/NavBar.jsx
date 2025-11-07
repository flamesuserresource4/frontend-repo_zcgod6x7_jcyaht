import React from 'react';
import { Ticket, User } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Ticket size={20} className="text-white" />
          <span className="font-semibold">GG tix</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#tickets" className="hover:text-white">Tickets</a>
          <a href="#history" className="hover:text-white">History</a>
          <a href="#profile" className="hover:text-white">Profile</a>
        </nav>
        <a href="#auth" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 text-white px-3 py-2 text-sm hover:bg-white/20 transition">
          <User size={16} />
          <span>Login</span>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
