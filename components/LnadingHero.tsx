'use client'

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const LnadingHero = () => {

    const { isSignedIn } = useAuth()

    return (
        <div className="space-y-5 font-bold text-center text-white scroll-py-36" >
            <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
                <h1>The Best AI Tool for</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Chatbot.",
                                "Photo Generation.",
                                "Music Generation.",
                                "Code Generation.",
                                "Video Generation.",
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div className="text-sm font-light md:text-xl text-zinc-400">
                Create content using AI 10x faster.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="p-4 font-semibold rounded-full md:text-lg md:p-6">
                        Start Generating for free.
                    </Button>
                </Link>
            </div>
            <div className="text-xs font-normal text-zinc-400 md:text-sm">
                No credit card required.
            </div>
        </div>
    );
}
// Me gusta el 64, 16, 65
export default LnadingHero;
