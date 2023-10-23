"use client";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
const ParticlesContainer = () => {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="absolute inset-0 h-full w-full opacity-50 "
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        theme === "light"
          ? {
              fpsLimit: 30,
              fullScreen: { enable: false },
              background: {
                color: "",
              },
              particles: {
                move: {
                  enable: true,
                  speed: 1,
                  direction: "right",
                },
                rotate: {
                  value: 180,
                  random: false,
                  direction: "clockwise",
                },
                number: {
                  value: 10,
                  max: 8,
                },
                opacity: {
                  value: 1,
                },
                shape: {
                  options: {
                    image: {
                      gif: true,
                      height: 100,
                      src: "assets/bird.gif",
                      width: 100,
                    },
                  },
                  type: "image",
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 12,
                  },
                  value: 24,
                },
              },
            }
          : {
              fullScreen: { enable: false },
              background: {
                color: {
                  value: "",
                },
              },
              fpsLimit: 30,
              interactivity: {
                events: {
                  resize: true,
                },
                detectsOn: "canvas",
              },
              particles: {
                move: {
                  enable: true,
                  speed: 0.1,
                },
                color: {
                  value: "#fff",
                },
                number: {
                  density: {
                    enable: true,
                    area: 1000,
                  },
                  limit: 0,
                  value: 100,
                },
                opacity: {
                  animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 0.25,
                    sync: false,
                  },
                  random: {
                    enable: true,
                    minimumValue: 0.05,
                  },
                  value: 1,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 0.5,
                  },
                  value: 2,
                },
                detectRetina: false,
              },
            }
      }
    />
  );
};

export default ParticlesContainer;
