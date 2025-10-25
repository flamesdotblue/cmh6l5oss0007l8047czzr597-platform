import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Posts from './components/Posts';
import Clients from './components/Clients';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main id="home" className="flex flex-col">
        <Hero />
        <div className="relative z-10">{/* content sections */}
          <About />
          <WhyChooseUs />
          <Services />
          <Posts />
          <Clients />
          <Newsletter />
          <SocialLinks />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
