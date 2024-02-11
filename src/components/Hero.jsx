import { useState } from "react";
import { styles } from "../styles";
import "../index.css";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("/AnimatedMe.png");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    setImageSrc("/Me.png");
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setImageSrc("/AnimatedMe.png");
  };

  const handleTouchStart = () => {
    setIsHovering(true);
    setImageSrc("/AnimatedMe.png");
  };

  const handleTouchEnd = () => {
    setIsHovering(false);
    setImageSrc("/Me.png");
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gradient-to-r from-red-400 to-red-800' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-red-400 to-red-800' />
        </div>

        <div className="flex flex-col sm:flex-row hero justify-center items-center gap-5">
          <div className="hero-text">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800'>Jay Lee</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              As an aspiring software engineer, I am deeply
              passionate about creating web interfaces that are
              both visually stunning and engaging, striving to
              deliver exceptional user experiences through every
              project I undertake.
            </p>
          </div>
          <div
            className="relative hero-img"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={imageSrc}
              alt="Jay Lee"
              style={{
                transition: "all 0.5s ease-in-out",
              }}
              className="rounded-full h-120 w-120"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
