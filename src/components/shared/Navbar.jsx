"use client";

import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { WorkContext } from "@/context/WorklistContext";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const Navbar = () => {
    const { addToPlan, saveForLater } = useContext(WorkContext);

    const links = (
        <>
            <li>
                <Link
                    href="/viewAllCard"
                    className="rounded-lg px-4 py-2 text-sm font-medium tracking-wide text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-[#ccff00]"
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/myplan"
                    className="rounded-lg px-4 py-2 text-sm font-medium tracking-wide text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-[#ccff00]"
                >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <nav className="border-b border-white/10 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="navbar min-h-[72px] px-0">

                    {/* Left */}
                    <div className="navbar-start">

                        {/* Mobile Menu */}
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost mr-1 rounded-full text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-[#ccff00] md:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content z-1 mt-3 w-56 gap-1 rounded-box border border-white/10 bg-black p-2 shadow-xl shadow-black/60"
                            >
                                {links}

                                <li>
                                    <Link
                                        href="/myplan?tab=today"
                                        className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium tracking-wide text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-[#ccff00]"
                                    >
                                        Plan

                                        <span className="rounded-full bg-[#ccff00] px-2 py-0.5 text-xs font-bold text-black">
                                            {addToPlan.length}
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/myplan?tab=saved"
                                        className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium tracking-wide text-white/70 transition-colors duration-200 hover:bg-white/5 hover:text-[#ccff00]"
                                    >
                                        Saved

                                        <span className="rounded-full border border-white/20 px-2 py-0.5 text-xs font-bold text-white/80">
                                            {saveForLater.length}
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Logo */}
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
                    </div>

                    {/* Center */}
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal gap-1 px-1">
                            {links}
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="navbar-end hidden gap-3 md:flex">

                        {/* Plan */}
                        <Link
                            href="/myplan?tab=today"
                            className="btn h-10 min-h-0 gap-2 rounded-full border border-white/20 bg-transparent px-5 text-sm font-semibold text-white shadow-none transition-colors duration-200 hover:border-[#ccff00] hover:bg-transparent hover:text-[#ccff00]"
                        >
                            Plan

                            <span className="badge badge-sm border-0 bg-black font-bold text-[#ccff00]">
                                {addToPlan.length}
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link
                            href="/myplan?tab=saved"
                            className="btn h-10 min-h-0 gap-2 rounded-full border border-white/20 bg-transparent px-5 text-sm font-semibold text-white shadow-none transition-colors duration-200 hover:border-[#ccff00] hover:bg-transparent hover:text-[#ccff00]"
                        >
                            Saved

                            <span className="badge badge-sm border-0 bg-black font-bold text-[#ccff00]">
                                {saveForLater.length}
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;