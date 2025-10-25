export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">About Fortune</h2>
            <p className="mt-4 text-slate-600">Fortune is a business solutions company specializing in branded corporate gifts and engagement programs. We help companies create memorable experiences for employees, customers, and partners through thoughtful, high-quality goodies and seamless logistics.</p>
            <p className="mt-4 text-slate-600">From product discovery to global fulfillment, our integrated platform and partner network enable fast turnarounds, transparent pricing, and consistent quality across every touchpoint.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat number="12+" label="Years Experience"/>
            <Stat number="1,200+" label="Brands Served"/>
            <Stat number="98%" label="On-time Delivery"/>
            <Stat number="35" label="Countries Shipped"/>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl ring-1 ring-slate-200 p-6 bg-gradient-to-b from-white to-slate-50">
      <div className="text-3xl font-bold text-slate-900">{number}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}
