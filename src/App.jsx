import "./App.css";
import { NavbarWithSolidBackground } from "./components/NavbarWithSolidBackground";
import HeroSection from "./components/Hero";
import About from './components/About'
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="flex flex-col w-full gap-y-24">
        <NavbarWithSolidBackground />
        <div className="md:mt-12 ps-16">
          <HeroSection />
          <About/>
          <Skills/>
        </div>

      </div>
    </>
  );
}

export default App;
