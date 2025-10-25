export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white grid place-items-center text-slate-900 font-bold">F</div>
            <div>
              <div className="font-semibold text-white">Fortune</div>
              <div className="text-xs text-slate-400">Business Solutions</div>
            </div>
          </div>
          <p className="mt-4 text-sm">Premium corporate gifting and logistics for teams that care about experience.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#posts" className="hover:underline">Posts</a></li>
            <li><a href="#clients" className="hover:underline">Clients</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Resources</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#why-us" className="hover:underline">Why Choose Us</a></li>
            <li><a href="#newsletter" className="hover:underline">Newsletter</a></li>
            <li><a href="#social" className="hover:underline">Social</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: hello@fortune.co</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Address: 123 Market Street, Suite 500, San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-xs text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Fortune, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
