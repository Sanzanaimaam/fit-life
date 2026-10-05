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
        <section className="container mx-auto mt-7 rounded-2xl bg-[#0b0b10] text-white">
            <div
                className="relative overflow-hidden rounded-2xl border border-white/[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                }}
            >
                {/* Ambient glows */}
                <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#ccff00]/10 blur-[140px]" aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-[-35%] left-[-8%] h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[120px]" aria-hidden="true" />

                <div className="container mx-auto px-4">
                    <div className="relative grid items-center gap-12 py-14 md:grid-cols-2 md:py-20">

                        {/* Left: text */}
                        <div className="max-w-xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#ccff00]/70" aria-hidden="true" />
                                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ccff00]">
                                    01 / Workout Library
                                </p>
                            </div>

                            <h1
                                className={`${oswald.className} text-5xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl`}
                            >
                                Train with <span className="text-[#ccff00]">intent.</span>
                                <br />
                                Log every set.
                            </h1>

                            <p className="mt-6 max-w-md border-l-2 border-[#ccff00]/30 pl-4 text-base leading-relaxed text-white/60">
                                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                                into today&apos;s plan, and watch the week&apos;s work add up.
                            </p>

                            <Link
                                href="/viewAllCard"
                                className="group mt-9 inline-flex items-center gap-3 bg-[#ccff00] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:shadow-[0_0_36px_-6px_rgba(204,255,0,0.65)]"
                            >
                                Browse Workouts
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                        </div>

                        {/* Right: editorial image */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-full max-w-sm md:max-w-md">
                                {/* Lime radial glow behind the image */}
                                <div
                                    className="pointer-events-none absolute inset-8 rounded-full bg-[#ccff00]/15 blur-[90px]"
                                    aria-hidden="true"
                                />

                                {/* Offset accent frame */}
                                <div
                                    className="absolute bottom-0 right-0 hidden h-full w-full translate-x-3 translate-y-3 border border-[#ccff00]/25 md:block"
                                    aria-hidden="true"
                                />

                                <Image
                                    src={banner}
                                    alt="Muscle anatomy figure using a preacher curl machine"
                                    priority
                                    className="relative h-auto w-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
                                />

                                {/* Small editorial footnote */}
                                <span className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30 md:block">
                                    FitLog — Train with precision
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
