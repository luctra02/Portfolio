"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { programmingLanguages, projects } from "./data/portfolioData";
import TypewriterEffect from "./components/TypewriterEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useLayoutEffect(() => {
        // Delay the setup slightly to ensure the DOM is fully rendered
        const timeoutId = setTimeout(() => {
            // Set up animations
            gsap.from(".fade-text", {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#om-meg",
                    start: "top center", // Start when the top of #om-meg reaches the center of the viewport
                },
            });

            gsap.from(".fade-image", {
                opacity: 0,
                x: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: "#om-meg",
                    start: "top center", // Start when the top of #om-meg reaches the center of the viewport
                },
            });

            gsap.from(".fade-button", {
                opacity: 0,
                x: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: "#om-meg",
                    start: "top center", // Start when the top of #om-meg reaches the center of the viewport
                },
            });

            gsap.from(".fade-languages", {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            });

            gsap.from(".fade-projects", {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top center",
                },
            });

            // Refresh ScrollTrigger to ensure accurate calculations
            ScrollTrigger.refresh();
        }, 100); // Adjust the delay if needed

        // Recalculate positions on window resize
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            clearTimeout(timeoutId); // Clear the timeout if the component unmounts
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <main className="flex flex-col items-center min-h-screen text-white px-6">
            {/* Full-screen Title Section */}
            <section className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
                <h1 className="text-5xl font-bold text-white">
                    Hei, jeg heter{" "}
                    <span className="text-emerald-300">Lucas</span>!
                </h1>
                <div>
                    <TypewriterEffect />
                </div>
                <Button
                    onClick={() => {
                        const element = document.getElementById("om-meg");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white transition w-max shadow-md"
                >
                    Bli kjent med meg!
                </Button>
            </section>

            {/* Intro Section */}
            <section
                className="flex flex-col md:flex-row justify-between max-w-6xl w-full space-y-12 md:space-y-0 min-h-[40vh]"
                id="om-meg"
            >
                {/* Text Section */}
                <div className="flex flex-col text-left space-y-6 md:w-1/2">
                    <h1 className="text-5xl font-bold fade-text">Om meg</h1>
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
                <div className="flex justify-center md:w-1/2 fade-image">
                    <CgProfile size={275} className="text-emerald-300" />
                </div>
            </section>

            <section className="text-gray-200 w-screen py-14 mt-40" id="skills">
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
                                className="hover:scale-110 transition-transform flex flex-col items-center space-y-2 fade-languages"
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
            <section
                className="bg-gray-800 text-gray-200 w-full py-14"
                id="projects"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-20">
                        Mine nylige prosjekter
                    </h2>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 mb-20 fade-projects"
                        >
                            {/* Text and Buttons Section */}
                            <div className="flex flex-col space-y-6 md:w-1/2">
                                <h3 className="text-4xl font-bold">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-gray-300">
                                    {project.description}
                                </p>
                                <div className="flex space-x-4">
                                    <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max">
                                        View Project
                                    </Button>
                                    <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max">
                                        View Code
                                    </Button>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="md:w-1/2">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
