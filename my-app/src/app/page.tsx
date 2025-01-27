"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";

export default function Home() {
    useEffect(() => {
        gsap.fromTo(
            ".fade-text", // Target text elements
            { opacity: 0, y: 30 }, // Initial state (invisible, moved down)
            { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
        );
        gsap.fromTo(
            ".fade-button",
            { opacity: 0, y: 40 }, // Start invisible and moved up a little
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
        gsap.fromTo(
            ".fade-image", // Target image (profile) element
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
        );
    }, []);

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-stone-700 to-black text-white px-6">
            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-10 md:space-y-0">
                {/* Text Section */}
                <div className="flex flex-col text-left space-y-6 md:w-1/2">
                    <h1 className="text-5xl font-bold fade-text">
                        Hei, jeg er{" "}
                        <span className="text-emerald-300">Lucas Tran</span>
                    </h1>
                    <p className="text-lg text-gray-300 fade-text">
                        Jeg er en nyutdannet IT-student med en lidenskap for
                        utvikling av moderne og brukervennlige webapplikasjoner.
                        Jeg har ferdigheter og interesserer meg for
                        fullstack-utvikling, og trives med å kombinere
                        frontend-design og backend-funksjonalitet for å skape
                        komplette løsninger.
                    </p>
                    <div className="flex space-x-4">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max fade-button">
                            Se mine prosjekter
                        </Button>
                        <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max fade-button">
                            Kontakt meg
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center md:w-1/2 fade-image">
                    <CgProfile size={275} className="text-emerald-300" />
                </div>
            </section>
        </main>
    );
}
