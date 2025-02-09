"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface Project {
    title: string;
    description: string;
    image: string;
    demoUrl?: string;
    codeUrl: string;
}

interface DisplayProjectsProps {
    projects: Project[];
}

export function DisplayProjects({ projects }: DisplayProjectsProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((prev) => (prev! + 1) % projects.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((prev) =>
                prev! === 0 ? projects.length - 1 : prev! - 1
            );
        }
    };

    return (
        <>
            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="bg-gray-800 border-gray-700 flex flex-col h-full 
                                   hover:shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300"
                    >
                        {/* Card Header */}
                        <CardHeader className="flex-none">
                            <CardTitle className="text-emerald-400 text-2xl font-bold">
                                {project.title}
                            </CardTitle>
                            <CardDescription className="text-gray-300 mt-2 min-h-[80px]">
                                {project.description}
                            </CardDescription>
                        </CardHeader>

                        {/* Card Content (Image) */}
                        <CardContent className="flex-none">
                            <div
                                className="relative h-48 overflow-hidden rounded-lg cursor-pointer group"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                            </div>
                        </CardContent>

                        {/* Card Footer (Buttons) */}
                        <CardFooter className="flex flex-wrap gap-2 mt-auto p-4">
                            <Button
                                asChild
                                className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1 min-w-0 
                                           transition-colors duration-200"
                            >
                                <Link
                                    href={project.codeUrl}
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 min-w-0 truncate"
                                >
                                    <FaGithub />
                                    <span className="whitespace-nowrap truncate">
                                        Vis prosjektet
                                    </span>
                                </Link>
                            </Button>
                            {project.demoUrl && (
                                <Button
                                    asChild
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1 min-w-0 
                                               transition-colors duration-200"
                                >
                                    <Link
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 min-w-0 truncate"
                                    >
                                        <CgWebsite />
                                        <span className="whitespace-nowrap truncate">
                                            Besøk nettsiden
                                        </span>
                                    </Link>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Image Popup Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div
                        className="relative flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Left Arrow */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 sm:left-6 md:left-8 lg:left-10 inset-y-1/2 transform -translate-y-1/2 
                                   text-black bg-white bg-opacity-80 p-3 rounded-full 
                                   hover:bg-opacity-100 transition-opacity duration-200 
                                   opacity-80 hover:opacity-100 shadow-lg w-12 h-12 flex items-center justify-center"
                        >
                            <FaChevronLeft size={24} />
                        </button>

                        {/* Image - Responsive sizing */}
                        <Image
                            src={projects[selectedIndex].image}
                            alt="Full Image"
                            width={1000}
                            height={1000}
                            className="object-contain max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] 
                                   max-h-[80vh] sm:max-h-[75vh] md:max-h-[70vh] lg:max-h-[70vh] rounded-lg transition-opacity duration-300"
                        />

                        {/* Right Arrow */}
                        <button
                            onClick={nextImage}
                            className="absolute right-4 sm:right-6 md:right-8 lg:right-10 inset-y-1/2 transform -translate-y-1/2 
                                   text-black bg-white bg-opacity-80 p-3 rounded-full 
                                   hover:bg-opacity-100 transition-opacity duration-200 
                                   opacity-80 hover:opacity-100 shadow-lg w-12 h-12 flex items-center justify-center"
                        >
                            <FaChevronRight size={24} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
