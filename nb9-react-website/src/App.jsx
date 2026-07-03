import Header from './components/Header';
import Hero from './components/sections/Hero';
import Music from './components/sections/Music';
import Tour from './components/sections/Tour';
import Videos from './components/sections/Videos';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Music />
        <Tour />
        <Videos />
        <Contact />
      </main>
      <footer className="px-6 py-8 text-center text-xs uppercase tracking-widest text-offwhite/40">
        &copy; {new Date().getFullYear()} Naked By 9. All rights reserved.
      </footer>
    </>
  );
}
