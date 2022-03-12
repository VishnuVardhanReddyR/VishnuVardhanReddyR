import React from 'react';
import Particles from "react-tsparticles";

const ParticlesAnime = () => {
    const particlesInit = (main) => {
        
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute w-[70%] h-[100%] bottom-0 left-0 lg:h-[65%]" 
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            background: {
              color: {
                value: "",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.2,
                  size: 4,
                },
                push: {
                  quantity: 1,
                },
                grab: {
                  distance: 200,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "square",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
  )
}

export default ParticlesAnime;
