import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import Projects from "@/src/components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact/>
    </main>
  );
}
