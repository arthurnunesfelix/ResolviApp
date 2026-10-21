import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import BeforeAfter from "./components/BeforeAfter";
import Services from "./components/Services";
import Emotional from "./components/Emotional";
import Plans from "./components/Plans";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-azul-deep via-azul to-sky"
    />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream">
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Why />
        <BeforeAfter />
        <Services />
        <Emotional />
        <Plans />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
