const samplePosts = [
  {
    title: 'How to craft memorable onboarding kits',
    excerpt: 'Designing an onboarding experience that reflects company culture and sets new hires up for success.',
    tag: 'Guides'
  },
  {
    title: 'Sustainable gifting without compromise',
    excerpt: 'Eco-friendly materials and responsible sourcing that still delight recipients.',
    tag: 'Sustainability'
  },
  {
    title: 'From swag to strategy: KPIs that matter',
    excerpt: 'Measure engagement and brand lift with the right mix of qualitative and quantitative data.',
    tag: 'Insights'
  }
];

export default function Posts() {
  return (
    <section id="posts" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Company Posts</h2>
            <p className="mt-3 text-slate-600">News, tips, and inspiration from the Fortune team.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-sm font-semibold text-slate-900 hover:underline">View all</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {samplePosts.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 hover:shadow-md transition">
              <span className="inline-flex text-xs font-semibold px-2 py-1 rounded-full bg-sky-100 text-sky-700">{p.tag}</span>
              <h3 className="mt-3 font-semibold text-lg text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-slate-900 hover:underline">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
