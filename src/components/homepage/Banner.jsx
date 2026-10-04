import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Oswald } from "next/font/google";
import banner from "@/assets/banner.png";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const Banner = () => {
    return (
        <section className="bg-[#14141a] text-white container mx-auto mt-7 rounded-2xl ">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">

                    {/* Left: text */}
                    <div className="max-w-xl">
                        <p className="mb-5 text-xs font-bold uppercase tracking-wider text-lime-400">
                            Workout Library
                        </p>

                        <h1
                            className={`${oswald.className} text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl`}
                        >
                            Train with intent. Log every set.
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link
                            href="/workout"
                            className="mt-8 inline-block rounded-md bg-lime-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_28px_-4px_rgba(163,230,53,0.7)]"
                        >
                            Browse Workouts
                        </Link>
                    </div>

                    {/* Right: image */}
                    <div className="flex justify-center md:justify-end">
                        <Image
                            src={banner}
                            alt="Muscle anatomy figure using a preacher curl machine"
                            priority
                            className="h-auto w-full max-w-sm object-contain md:max-w-md"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;