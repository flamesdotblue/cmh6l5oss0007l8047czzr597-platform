import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Newsletter Subscription');
    const body = encodeURIComponent(`Please subscribe this email to Fortune updates: ${email}`);
    window.location.href = `mailto:newsletter@fortune.co?subject=${subject}&body=${body}`;
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Subscribe to our newsletter</h2>
            <p className="mt-3 text-slate-300">Monthly insights on corporate gifting, engagement, and brand experiences.</p>
          </div>
          <form onSubmit={onSubmit} className="bg-white/5 ring-1 ring-white/10 rounded-xl p-3 flex gap-3">
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 rounded-md bg-white text-slate-900 px-3 py-2 outline-none"/>
            <button className="rounded-md bg-white text-slate-900 font-semibold px-4">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
