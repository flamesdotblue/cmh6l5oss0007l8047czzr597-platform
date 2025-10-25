import { Facebook, Linkedin, Instagram, Globe } from 'lucide-react';

export default function SocialLinks() {
  return (
    <section id="social" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Follow Fortune</h2>
          <p className="mt-3 text-slate-600">Stay connected with our latest projects, stories, and behind-the-scenes.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SocialCard href="https://fortune.co" label="Website" icon={<Globe size={18}/>}/>
          <SocialCard href="https://facebook.com" label="Facebook" icon={<Facebook size={18}/>}/>
          <SocialCard href="https://linkedin.com" label="LinkedIn" icon={<Linkedin size={18}/>}/>
          <SocialCard href="https://instagram.com" label="Instagram" icon={<Instagram size={18}/>}/>
        </div>
      </div>
    </section>
  );
}

function SocialCard({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-6 hover:bg-white hover:shadow transition">
      <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">{icon}</div>
      <div className="mt-4 font-semibold text-slate-900 group-hover:underline">{label}</div>
      <div className="text-sm text-slate-600">Visit our {label} page</div>
    </a>
  );
}
