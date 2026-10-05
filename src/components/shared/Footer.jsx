
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import logo from "@/assets/logo.png";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const Footer = () => {
    return (
        <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#0b0c10]">

            {/* Soft top lime glow line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[32rem] -translate-x-1/2 rounded-full bg-lime-400/5 blur-3xl" />

            <div className="container relative mx-auto px-6 py-14 md:py-16">

                {/* Top section */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3"
                        >
                            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#11131a] transition-all duration-300 group-hover:border-lime-400/40 group-hover:shadow-[0_10px_30px_-10px_rgba(163,230,53,0.5)]">
                                <Image
                                    src={logo}
                                    alt="FITLIFE logo"
                                    width={44}
                                    height={44}
                                    className="h-full w-full object-contain p-1.5"
                                />
                            </span>

                            <span
                                className={`${oswald.className} text-2xl font-bold uppercase tracking-widest text-white transition-colors duration-300 group-hover:text-lime-400`}
                            >
                                FIT<span className="text-lime-400 group-hover:text-white">log</span>
                            </span>
                        </Link>

                        <p className="mt-4 text-sm leading-relaxed text-white/50">
                            Train with intent. Build consistency.
                        </p>
                    </div>

                    {/* Explore */}
                    <nav aria-label="Footer explore">
                        <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-lime-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                            Explore
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">
                            <span className="text-sm font-medium text-white/60">
                                Workout
                            </span>

                            <span className="text-sm font-medium text-white/60">
                                My Plan
                            </span>
                        </div>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:items-center md:justify-between md:text-left">

                    <p className="text-xs text-white/40">
                        © 2026 FitLife — Workout Library. Train hard, log honest.
                    </p>

                    <span className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                        Stay consistent
                    </span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;