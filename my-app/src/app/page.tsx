import { CgProfile } from "react-icons/cg";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-stone-700 to-black text-white px-6">
            <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full space-y-10 md:space-y-0">
                {/* Text Section */}
                <div className="flex flex-col text-left space-y-6 md:w-1/2">
                    <h1 className="text-5xl font-bold">
                        Hei, jeg er{" "}
                        <span className="text-emerald-300">Lucas Tran</span>
                    </h1>
                    <p className="text-lg text-gray-300">
                        Jeg er en nyutdannet IT-student med en lidenskap for
                        utvikling av moderne og brukervennlige webapplikasjoner.
                        Jeg har ferdigheter og interesserer meg for
                        fullstack-utvikling, og trives med å kombinere
                        frontend-design og backend-funksjonalitet for å skape
                        komplette løsninger.
                    </p>
                    <div className="flex space-x-4">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max">
                            Se mine prosjekter
                        </Button>
                        <Button className="bg-emerald-500 hover:bg-emerald-600 transition w-max">
                            Kontakt meg
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex items-center justify-center md:w-1/2">
                    <CgProfile size={275} className="text-emerald-300" />
                </div>
            </section>
        </main>
    );
}
