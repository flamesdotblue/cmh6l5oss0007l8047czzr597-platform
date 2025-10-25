import { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Linkedin, Instagram, Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#services', label: 'Services' },
  { href: '#posts', label: 'Posts' },
  { href: '#clients', label: 'Clients' },
  { href: '#newsletter', label: 'Newsletter' },
  { href: '#contact', label: 'Contact' },
  { href: '#social', label: 'Social' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 grid place-items-center text-white font-bold">F</div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900 group-hover:text-slate-700">Fortune</span>
              <span className="text-xs text-slate-500">Business Solutions</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:hello@fortune.co" className="hidden xl:flex items-center gap-2 text-slate-600 hover:text-slate-900"><Mail size={16}/> hello@fortune.co</a>
            <a href="tel:+11234567890" className="hidden xl:flex items-center gap-2 text-slate-600 hover:text-slate-900"><Phone size={16}/> +1 123 456 7890</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-600 hover:text-slate-900"><Facebook size={18}/></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900"><Linkedin size={18}/></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-600 hover:text-slate-900"><Instagram size={18}/></a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white/80 backdrop-blur text-slate-700">
            {open ? <X size={20}/> : <Menu size={20}/>}        
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 hover:text-slate-900">
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:hello@fortune.co" className="flex items-center gap-2 text-slate-600 hover:text-slate-900"><Mail size={16}/> Email</a>
              <a href="tel:+11234567890" className="flex items-center gap-2 text-slate-600 hover:text-slate-900"><Phone size={16}/> Call</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
