"use client";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; // Use slim version
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log("Initializing particles..."); // Debug log
        await loadSlim(engine); // Load slim instead of full
        console.log("Particles initialized!");
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: 0 },
                particles: {
                    number: {
                        value: 100,
                        density: { enable: true, area: 800 },
                    },
                    color: { value: "#4ade80" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "out" },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { quantity: 4 },
                    },
                },
                background: { color: "transparent" },
            }}
        />
    );
}
