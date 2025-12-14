import { ReactLenis } from 'lenis/react'
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StickyFeatures } from './components/StickyFeatures';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { InteractiveBackground } from './components/InteractiveBackground';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative">
          <InteractiveBackground />
          <Navbar />
          <main>
            <Hero />
            <StickyFeatures />
          </main>
          <Footer />
        </div>
      )}
    </ReactLenis>
  );
}

export default App;
