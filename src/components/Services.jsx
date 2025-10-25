import { Gift, Package, Printer, Truck } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Gift,
    category: 'Corporate Goodies',
    details: 'Premium drinkware, apparel, stationery, tech accessories, eco-friendly kits, and more.'
  },
  {
    icon: Printer,
    category: 'Branding & Customization',
    details: 'Screen printing, embroidery, debossing, laser engraving, custom packaging, and inserts.'
  },
  {
    icon: Package,
    category: 'Kitting & Warehousing',
    details: 'Assemble multi-item kits, store inventory across regions, and monitor stock in real-time.'
  },
  {
    icon: Truck,
    category: 'Global Fulfillment',
    details: 'International shipping, customs handling, address collection portals, and tracking.'
  },
];

export default function Services() {
  const [form, setForm] = useState({ name: '', email: '', service: services[0].category, date: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Service Booking: ${form.service}`);
    const body = encodeURIComponent(
      `Hello Fortune Team,%0D%0A%0D%0AI'd like to book/request: ${form.service}.%0D%0APreferred date: ${form.date || 'Flexible'}%0D%0A%0D%0AMy details:%0D%0AName: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AThanks!`
    );
    const mailto = `mailto:hello@fortune.co?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    alert('Thanks! We\'ve opened your email client with a pre-filled message.');
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Explore our end-to-end solutions. Select a service and book a slot—we’ll confirm by email.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <article key={s.category} className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white transition">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
                  <s.icon size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{s.category}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.details}</p>
              </article>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-slate-900">Book a service</h3>
              <p className="mt-1 text-sm text-slate-600">We’ll review your request and send confirmation to your email.</p>
              <form onSubmit={onSubmit} className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full name</label>
                  <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="Jane Doe"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="jane@company.com"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Service</label>
                  <select value={form.service} onChange={(e)=>setForm({...form, service: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900">
                    {services.map((s)=> (
                      <option key={s.category} value={s.category}>{s.category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Preferred date</label>
                  <input type="date" value={form.date} onChange={(e)=>setForm({...form, date: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900"/>
                </div>
                <button type="submit" className="w-full rounded-md bg-slate-900 text-white font-semibold py-2.5 hover:bg-slate-800">Submit request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
