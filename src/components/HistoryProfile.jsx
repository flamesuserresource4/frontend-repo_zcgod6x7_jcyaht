import React from 'react';
import { Clock, UserCircle2, ShieldCheck } from 'lucide-react';

const HistoryProfile = () => {
  return (
    <section id="history" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-4 text-white">
            <Clock size={18} />
            <h3 className="font-semibold">Purchase history</h3>
          </div>
          <div className="text-sm text-white/70">
            No purchases yet. When you buy tickets, they will appear here with QR access and download options.
          </div>
        </div>

        <div id="profile" className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 mb-4 text-white">
            <UserCircle2 size={18} />
            <h3 className="font-semibold">Profile</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-white/70">Status: Guest</div>
            <div className="inline-flex items-center gap-2 text-white/70"><ShieldCheck size={16} /> Payments secured by 3D-auth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryProfile;
