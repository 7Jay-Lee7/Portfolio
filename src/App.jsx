import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Projects, Tech, StarsCanvas, LoadingScreen  } from "./components";
import { useState } from "react";
import { MotionConfig } from "framer-motion";
import framerMotionConfig from "./config";
import { CrispProvider } from "./components/CrispProvider";

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <BrowserRouter>
      <CrispProvider />
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
        ...framerMotionConfig,
        }}
      >
      </MotionConfig>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover 
        bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;