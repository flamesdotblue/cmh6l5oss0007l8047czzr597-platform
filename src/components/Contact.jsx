import { MapPin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New inquiry from website');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:hello@fortune.co?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Contact us</h2>
            <p className="mt-3 text-slate-600">We’d love to learn about your project. Reach out and we’ll respond promptly.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-3"><Mail size={18}/> hello@fortune.co</p>
              <p className="flex items-center gap-3"><Phone size={18}/> +1 123 456 7890</p>
              <p className="flex items-center gap-3"><MapPin size={18}/> 123 Market Street, Suite 500, San Francisco, CA</p>
            </div>
            <div className="mt-6">
              <iframe title="Fortune HQ" className="w-full h-56 rounded-xl ring-1 ring-slate-200" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=San%20Francisco&output=embed" />
            </div>
          </div>
          <div>
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Send an inquiry</h3>
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
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea required rows={4} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="Tell us about your needs"/>
                </div>
                <button className="w-full rounded-md bg-slate-900 text-white font-semibold py-2.5 hover:bg-slate-800">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
