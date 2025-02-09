"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname(); // Get current page URL

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id: string) => {
        if (pathname !== "/") {
            router.push(`/?scrollTo=${id}`); // Navigate to Home with query
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false); // Close mobile menu
            }
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-emerald-300 hover:text-emerald-400 transition"
                        >
                            Lucas
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("about-me")}
                            className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                        >
                            Om meg
                        </Button>
                        <Link href="/skills">
                            <Button
                                variant="ghost"
                                className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                            >
                                Ferdigheter
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button
                                variant="ghost"
                                className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                            >
                                Prosjekter
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("contact")}
                            className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                        >
                            Kontakt
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-emerald-400"
                        >
                            {isOpen ? (
                                <FaTimes size={24} />
                            ) : (
                                <FaBars size={24} />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
                        <div className="flex flex-col space-y-2 px-4 pb-4">
                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection("about-me")}
                                className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                            >
                                Om meg
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection("skills")}
                                className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                            >
                                Ferdigheter
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection("projects")}
                                className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                            >
                                Prosjekter
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection("contact")}
                                className="text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 transition"
                            >
                                Kontakt
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
