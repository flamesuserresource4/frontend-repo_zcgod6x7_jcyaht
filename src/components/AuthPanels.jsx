import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder }) => (
  <div className="relative">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
      <Icon size={16} />
    </span>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md bg-white/10 border border-white/10 pl-9 pr-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
    />
  </div>
);

const AuthPanels = () => {
  const [mode, setMode] = useState('login');

  return (
    <section id="auth" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">{mode === 'login' ? 'Login' : 'Create account'}</h3>
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-xs text-white/70 underline"
            >
              {mode === 'login' ? 'Need an account?' : 'Have an account?'}
            </button>
          </div>
          <div className="space-y-3">
            {mode === 'register' && (
              <Input icon={User} placeholder="Full name" />
            )}
            <Input icon={Mail} type="email" placeholder="Email address" />
            <Input icon={Lock} type="password" placeholder="Password" />
            <button className="w-full rounded-md bg-white text-black py-2 text-sm font-medium hover:bg-white/90 transition">
              {mode === 'login' ? 'Login' : 'Register'}
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold mb-3">Your profile</h3>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500" />
            <div>
              <div className="text-white">Guest</div>
              <div className="text-xs text-white/60">Sign in to sync your tickets</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-white/60">Purchased</div>
              <div className="text-white text-lg font-semibold">0</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-white/60">Saved</div>
              <div className="text-white text-lg font-semibold">0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPanels;
