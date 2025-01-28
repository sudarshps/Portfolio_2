import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import heroImg from '../assets/IMG_4371.jpg'
import './Hero.css'

const Hero = () => {
  const heroName = "SUDARSH PS";
  const sentenceVariants = {
    hidden: {},
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
  };

  const heroImageStyle = {
    width: 250,
    height: 250,
    backgroundColor: "#161650",
    borderRadius: 10,
  };

  const heroImageStyleSm = {
    width: "200px",
    height: "200px",
    backgroundColor: "#161650",
    borderRadius: 10,
  };

  const designation = "MERN Stack Developer!";

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 534px)");

    const handleScreenChange = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleScreenChange);

    handleScreenChange(mediaQuery);
    return () => {      
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  return (
    <div className="block sm:grid sm:grid-cols-2">
      <div className="inline-block space-y-4 mt-5">
        <p className="mb-4 herofont text-lg md:text-2xl">Hi, I am</p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.0,
          }}
          className="text-xl md:text-6xl heromainfont bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          {heroName}
        </motion.span>

        <motion.p
          key={designation}
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-5xl herofont"
        >
          {designation.split("").map((char, i) => (
            <motion.span key={`${char}-${i}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <div className="flex items-end justify-end md:mt-1 mt-20 relative right-10">
        <motion.div
          style={isSmallScreen?heroImageStyleSm:heroImageStyle}
          animate={{ rotate: 320 }}
          transition={{ duration: 2.0 }}
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
        >
        </motion.div>
        <img src={heroImg} alt="hero" className="rounded-xl sm:w-64 w-48 absolute"/>

      </div>
    </div>
  );
};

export default Hero;
