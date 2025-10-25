import { Star, ShieldCheck, Users, Rocket } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Curated Quality',
    desc: 'We handpick products from trusted manufacturers and boutique makers that reflect your brand standards.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Logistics',
    desc: 'Warehousing, kitting, and global shipping with tracking and SLAs your team can count on.'
  },
  {
    icon: Users,
    title: 'Engagement First',
    desc: 'Delight employees and customers with experiences designed to be kept, used, and shared.'
  },
  {
    icon: Rocket,
    title: 'Fast Turnaround',
    desc: 'From brief to shipped kits in days, not weeks—without compromising quality.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why choose Fortune</h2>
          <p className="mt-3 text-slate-600">We combine design, sourcing, and logistics into one smooth workflow so your team can launch impactful gifting programs effortlessly.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
