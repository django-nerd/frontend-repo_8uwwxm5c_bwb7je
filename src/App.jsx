import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import TestimonialsContact from './components/TestimonialsContact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] font-inter antialiased">
      <Hero />
      <About />
      <Showcase />
      <TestimonialsContact />
    </div>
  );
}

export default App;
