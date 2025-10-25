import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-stretch">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-28 md:py-36 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-semibold">Modern corporate gifting • Trusted by teams</span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">Fortune — Business solutions and branded goodies that make people smile</h1>
          <p className="mt-5 text-lg text-slate-600 max-w-prose">Elevate your brand with premium corporate gifts, event kits, and reward programs. We handle sourcing, branding, and logistics so your team can focus on what matters.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800">
              Explore Services <ArrowRight size={16}/>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50">
              Get a Quote
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:justify-end">
          <div className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200 p-6 max-w-md">
            <h3 className="text-xl font-semibold text-slate-900">Fast project kickoff</h3>
            <p className="mt-2 text-slate-600 text-sm">Send us your brand assets and goals. We’ll craft a curated selection of goodies and a fulfillment plan within 48 hours.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Global sourcing and QA</li>
              <li>• Custom packaging and kitting</li>
              <li>• Warehousing and on-demand shipping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
