import { useState } from "react";
import { styles } from "../styles";
import "../index.css";

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("/Me3D2.png");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    setImageSrc("/Me3D.png");
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setImageSrc("/Me3D2.png");
  };

  const handleTouchStart = () => {
    setIsHovering(true);
    setImageSrc("/Me3D.png");
  };

  const handleTouchEnd = () => {
    setIsHovering(false);
    setImageSrc("/Me3D2.png");
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#450606]' />
          <div className='w-1 sm:h-80 h-40 maroon-gradient' />
        </div>

        <div className="flex flex-col sm:flex-row hero justify-center items-center gap-5">
          <div className="hero-text">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#450606]'>Jay Lee</span>
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
                transform: isHovering ? "scale(1.4)" : "scale(1.3)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
