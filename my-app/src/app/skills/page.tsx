"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { allSkills } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsPage() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            gsap.from(".fade-in", {
                opacity: 0,
                x: 50,
                duration: 1.5,
                stagger: 0.3,
            });
        }, 100); // Small delay to ensure elements are rendered

        return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, []);
    return (
        <main className="flex flex-col items-center min-h-screen text-white px-6 bg-gray-800">
            {/* Skills Section */}
            <section className="w-full py-20" id="skills">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <h2 className="text-3xl font-bold text-center mb-10 text-emerald-300">
                        Mine ferdigheter
                    </h2>

                    {/* Skills Grid */}
                    <div className="space-y-12">
                        {allSkills.map((category, index) => (
                            <div key={index} className="fade-in">
                                {/* Category Title */}
                                <h3 className="text-2xl font-bold text-emerald-300 mb-6">
                                    {category.title}
                                </h3>

                                {/* Skills List */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <Link
                                                href={skill.url}
                                                target="_blank"
                                                key={skillIndex}
                                                className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                                            >
                                                {/* Skill Icon */}
                                                <div className="w-12 h-12 relative mb-3">
                                                    <Image
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>

                                                {/* Skill Name */}
                                                <span className="text-sm text-center text-gray-200">
                                                    {skill.name}
                                                </span>
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
