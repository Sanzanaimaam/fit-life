import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {

    const links = (
        <>
            <li>
                <Link href="">Workouts</Link>
            </li>

            <li>
                <Link href="/myplan">My Plan</Link>
            </li>
        </>
    );

    return (
        <nav className="bg-black border-b border-white/10 text-white">

            <div className="container mx-auto px-4">

                <div className="navbar">

                    {/* Left */}
                    <div className="navbar-start">

                        {/* Mobile Menu */}
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost md:hidden"
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
                                className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                {links}

                                <li>
                                    <Link href="/myplan?tab=today">
                                        Plan <span>0</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/myplan?tab=saved">
                                        Saved <span>0</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="FITlife logo"
                                className="h-9 w-9"
                            />

                            <span className="text-2xl font-extrabold tracking-tight">
                                FIT<span className="text-lime-400">life</span>
                            </span>
                        </Link>

                    </div>

                    {/* Center */}
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="navbar-end gap-2 hidden md:flex">

                        <Link
                            href="/myplan?tab=today"
                            className="btn rounded-full"
                        >
                            Plan
                            <span className="badge">0</span>
                        </Link>

                        <Link
                            href="/myplan?tab=saved"
                            className="btn rounded-full"
                        >
                            Saved
                            <span className="badge">0</span>
                        </Link>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;