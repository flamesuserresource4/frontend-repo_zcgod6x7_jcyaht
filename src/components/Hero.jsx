import React from 'react';
import Spline from '@splinetool/react-spline';
import { Ticket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[680px] overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Ticket size={14} />
          <span>e-tix — Futuristic e-sports tickets</span>
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Secure your e-sport experience
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Instant access to premium seats, digital ticket wallets, and real-time updates.
          Designed for speed, security, and style.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#tickets"
            className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
          >
            Browse tickets
            <ArrowRight size={16} />
          </a>
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition"
          >
            Login / Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
