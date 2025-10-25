const logos = [
  'Acme Corp', 'Nova Labs', 'BluePeak', 'OrbitPay', 'ZenSoft', 'Northwind'
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Trusted by great teams</h2>
          <p className="mt-3 text-slate-600">From startups to enterprises across the globe.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map((l) => (
            <div key={l} className="h-16 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center text-slate-500 font-semibold tracking-wide uppercase text-xs hover:bg-white">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
