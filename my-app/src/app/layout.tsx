import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";
import { Navbar } from "./components/NavBar";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lucas - Portfolio",
    description: "Lucas' portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-700 to-gray-900`}
            >
                <ParticlesBackground />
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    );
}
