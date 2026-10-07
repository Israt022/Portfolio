import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        {/* <Skills /> */}
        <Qualification />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Global Background Elements — solid color ambient glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[160px]" />
      </div>
    </main>
  );
}
