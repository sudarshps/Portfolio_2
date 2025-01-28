import "./App.css";
import { NavbarWithSolidBackground } from "./components/MUI/NavbarWithSolidBackground";
import HeroSection from "./components/Hero";
import About from './components/About'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col w-full gap-y-24">
        <NavbarWithSolidBackground />
        <div className="md:mt-12 px-16">
          <HeroSection />
          <About/>
          <Skills/>
          <Projects/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
