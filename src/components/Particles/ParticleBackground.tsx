import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -20,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 45,
          },

          color: {
            value: "#3B82F6",
          },

          links: {
            enable: true,
            color: "#3B82F6",
            opacity: 0.15,
            distance: 140,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.35,
          },

          size: {
            value: 2,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 150,
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;