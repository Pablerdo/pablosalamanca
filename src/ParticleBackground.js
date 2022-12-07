import React from "react";
import Particles from "react-tsparticles"
import ParticleConfig from "./config/particle-config"
import { useCallback } from "react";
import { loadFull } from "tsparticles"

export default function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleConfig}></Particles>
  );
}

