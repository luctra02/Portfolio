"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { programmingLanguages, recentProjects } from "./data/portfolioData";
import TypewriterEffect from "./components/TypewriterEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaListAlt } from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";
import { ContactForm } from "./components/ContactForm";
import { useRouter, useSearchParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const searchParams = useSearchParams();
    const router = useRouter();

    useLayoutEffect(() => {
        const scrollTo = searchParams.get("scrollTo");

        if (scrollTo) {
            setTimeout(() => {
                const element = document.getElementById(scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });

                    // Remove query param after scrolling
                    const newUrl = new URL(window.location.href);
                    newUrl.searchParams.delete("scrollTo");
                    router.replace(newUrl.pathname, { scroll: false });
                }
            }, 250);
        }
    }, [router, searchParams]);

    useLayoutEffect(() => {
        if (buttonRef.current) {
            const button = buttonRef.current;
            const fingerIcon = button.querySelector(".finger-icon");

            if (fingerIcon) {
                const hoverAnimation = gsap.to(fingerIcon, {
                    y: -5, // Small upward movement
                    repeat: -1, // Infinite shake
                    yoyo: true, // Reverse the animation
                    duration: 0.3, // Speed of each shake
                    paused: true, // Initially paused
                });

                button.addEventListener("mouseenter", () => {
                    hoverAnimation.play(); // Play the animation on hover
                });

                button.addEventListener("mouseleave", () => {
                    hoverAnimation.pause(); // Pause the animation on mouse leave
                    gsap.set(fingerIcon, { y: 0 }); // Reset the icon's position
                });
            }
        }

        // Delay the setup slightly to ensure the DOM is fully rendered
        const timeoutId = setTimeout(() => {
            // Set up animations
            gsap.from(".fade-text", {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#about-me",
                    start: "top center",
                },
            });

            gsap.from(".fade-image", {
                opacity: 0,
                x: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: "#about-me",
                    start: "top center",
                },
            });

            gsap.from(".fade-button", {
                opacity: 0,
                x: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: "#about-me",
                    start: "top center",
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
                    ref={buttonRef}
                    onClick={() => {
                        const element = document.getElementById("about-me");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white transition w-max shadow-md p-6"
                >
                    Bli kjent med meg!
                    <FaHandPointDown className="finger-icon" />
                </Button>
            </section>

            {/* Intro Section */}
            <section
                className="flex flex-col md:flex-row justify-between max-w-6xl w-full space-y-12 md:space-y-0 min-h-[40vh]"
                id="about-me"
            >
                {/* Text Section */}
                <div className="flex flex-col text-left space-y-6 md:w-1/2">
                    <h2 className="text-3xl font-bold text-emerald-300">
                        Om meg
                    </h2>
                    <p className="text-lg text-gray-300 fade-text">
                        Jeg er en nyutdannet IT-student med en lidenskap for
                        utvikling av moderne og brukervennlige webapplikasjoner.
                        Jeg interesserer meg for fullstack-utvikling, og trives
                        med å kombinere frontend-design og
                        backend-funksjonalitet for å skape komplette løsninger.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/projects">
                            <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max fade-button">
                                <FaListAlt />
                                Se mine prosjekter
                            </Button>
                        </Link>
                        <Link href="mailto:lucastran1107@gmail.com">
                            <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max fade-button">
                                <MdEmail />
                                Kontakt meg
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:w-1/2 fade-image">
                    <CgProfile size={275} className="text-emerald-300" />
                </div>
            </section>

            <section
                className="bg-gray-700 text-gray-200 w-screen py-14 mt-40"
                id="skills"
            >
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <h2 className="text-3xl font-bold text-center mb-10 text-emerald-300">
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
                    <h2 className="text-3xl font-bold text-center mb-20 text-emerald-300">
                        Mine nylige prosjekter
                    </h2>
                    {recentProjects.map((project, index) => (
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
                                    <Link
                                        target="_blank"
                                        href={project.demoUrl}
                                    >
                                        <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max">
                                            <CgWebsite />
                                            Besøk nettsiden
                                        </Button>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href={project.codeUrl}
                                    >
                                        <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max">
                                            <FaGithub />
                                            Vis prosjektet
                                        </Button>
                                    </Link>
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
            {/* Contact Section */}
            <section
                className="bg-gray-800 text-gray-200 w-full py-14"
                id="contact"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-emerald-300">
                        Kontakt meg
                    </h2>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
