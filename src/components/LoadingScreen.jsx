import TypewriterComponent from "typewriter-effect";
import { useEffect } from "react";


const LoadingScreen = (props) => {
  const { started, setStarted } = props;

  useEffect(() => {{
      setTimeout(() => {
        setStarted(true);
      }, 1000 * 9);
    }
  });

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
      flex items-center justify-center bg-primary 
      ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800 items-center text-7xl font-extrabold">
        <TypewriterComponent
          options={{
            strings: [
                "Welcome to my Portfolio"
              ],
            autoStart: true,
            loop: false
          }}
      />
      </div>
    </div>
  )
}

export default LoadingScreen;