"use client";

import { DisplayProjects } from "../components/DisplayProjects";
import { allProjects } from "../data/portfolioData";

export default function ProjectsPage() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white px-6 pt-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-emerald-300">
                Mine prosjekter
            </h2>
            <div className="w-full max-w-7xl">
                <DisplayProjects projects={allProjects} />
            </div>
        </main>
    );
}
