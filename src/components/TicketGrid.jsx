import React from 'react';
import { Calendar, MapPin, BadgeCheck } from 'lucide-react';

const tickets = [
  {
    id: 1,
    event: 'Valorant Masters — Tokyo',
    date: 'Jun 24, 2025',
    venue: 'Saitama Super Arena',
    price: 129,
    badge: 'VIP',
  },
  {
    id: 2,
    event: 'League Worlds — Grand Finals',
    date: 'Oct 04, 2025',
    venue: 'O2 Arena, London',
    price: 189,
    badge: 'Hot',
  },
  {
    id: 3,
    event: 'Dota 2 — The International',
    date: 'Aug 18, 2025',
    venue: 'Rogers Arena, Vancouver',
    price: 159,
    badge: 'New',
  },
];

const TicketCard = ({ item }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
    <div className="flex items-start justify-between">
      <h3 className="text-white font-medium text-lg">{item.event}</h3>
      <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/80">{item.badge}</span>
    </div>
    <div className="mt-3 flex items-center gap-4 text-white/70 text-sm">
      <span className="inline-flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
      <span className="inline-flex items-center gap-1"><MapPin size={14} /> {item.venue}</span>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div className="text-2xl font-semibold text-white">${item.price}</div>
      <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
        Get Ticket
      </button>
    </div>
  </div>
);

const TicketGrid = () => {
  return (
    <section id="tickets" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Featured tickets</h2>
          <div className="inline-flex items-center gap-2 text-white/70 text-sm">
            <BadgeCheck size={16} /> Secure checkout
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tickets.map((t) => (
            <TicketCard key={t.id} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketGrid;
