import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
    return (
        <div className="text-2xl font-bold text-center mb-10">
            <Typewriter
                options={{
                    strings: [
                        "Next.js Utvikler",
                        "Kotlin Utvikler",
                        "Nyutdannet IT-student",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50, // Speed of deletion
                    delay: 75, // Speed of typing
                }}
            />
        </div>
    );
}
