"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { programmingLanguages, projects } from "./data/portfolioData";
import { DisplayProjects } from "@/app/components/displayProjects";

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
        <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 text-white px-6">
            {/* Intro Section */}
            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-12 md:space-y-0">
                {/* Text Section */}
                <div className="flex flex-col text-left space-y-6 md:w-1/2">
                    <h1 className="text-5xl font-bold fade-text">
                        Hei, jeg er{" "}
                        <span className="text-emerald-300">Lucas Tran</span>
                    </h1>
                    <p className="text-lg text-gray-300 fade-text">
                        Jeg er en nyutdannet IT-student med en lidenskap for
                        utvikling av moderne og brukervennlige webapplikasjoner.
                        Jeg interesserer meg for fullstack-utvikling, og trives
                        med å kombinere frontend-design og
                        backend-funksjonalitet for å skape komplette løsninger.
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

            <section className="bg-gray-700 text-gray-200 w-screen py-14 mt-40">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Programmeringsspråk jeg er kjent med
                    </h2>

                    {/* Programming Languages Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center">
                        {programmingLanguages.map((language) => (
                            <Link
                                href={language.url}
                                target="_blank"
                                key={language.name}
                                className="hover:scale-110 transition-transform flex flex-col items-center space-y-2"
                            >
                                <Image
                                    src={language.icon}
                                    alt={language.name}
                                    width={64}
                                    height={64}
                                />
                                <span className="text-sm">{language.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gray-800 text-gray-200 w-screen py-14">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Mine nylige prosjekter
                    </h2>
                    <DisplayProjects projects={projects} />
                </div>
            </section>
        </main>
    );
}
