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

interface Project {
    title: string;
    description: string;
    image: string;
    demoUrl: string;
    codeUrl: string;
}

interface DisplayProjectsProps {
    projects: Project[];
}

export function DisplayProjects({ projects }: DisplayProjectsProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    className="bg-gray-700 border-gray-600 hover:scale-105 transition-transform duration-300 flex flex-col h-full"
                >
                    {/* Card Header */}
                    <CardHeader className="flex-none">
                        {" "}
                        {/* Prevent header from growing */}
                        <CardTitle className="text-emerald-300 text-2xl font-bold">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 mt-2 min-h-[80px]">
                            {project.description}
                        </CardDescription>
                    </CardHeader>

                    {/* Card Content (Image) */}
                    <CardContent className="flex-none">
                        {" "}
                        {/* Prevent image from growing */}
                        <div className="relative h-48 overflow-hidden rounded-lg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill // Use `fill` to make the image responsive
                                className="object-cover"
                            />
                        </div>
                    </CardContent>

                    {/* Card Footer (Buttons) */}
                    <CardFooter className="flex justify-between gap-4 mt-auto">
                        <Button
                            asChild
                            variant="outline"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1"
                        >
                            <Link href={project.demoUrl} target="_blank">
                                Demo
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1"
                        >
                            <Link href={project.codeUrl} target="_blank">
                                Kode
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
