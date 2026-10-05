import React from 'react';
import WorkoutsCard from '../shared/WorkoutsCard';
import Link from 'next/link';

const getWorkouts = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};

const Workouts = async () => {
    const workouts = await getWorkouts();

    return (
        <section className="relative overflow-hidden bg-black py-16 md:py-24">

            {/* Subtle ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-lime-400/5 blur-3xl" />

            <div className="container relative mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="mb-12 text-center md:mb-14">
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#ccff00]">
                        <span className="h-px w-8 bg-[#ccff00]/50" />
                        Workout Library
                        <span className="h-px w-8 bg-[#ccff00]/50" />
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl">
                        Train with
                        <span className="text-[#ccff00]"> intent.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
                        Discover effective workouts designed to help you build
                        strength, burn calories, and reach your fitness goals.
                    </p>
                </div>

                {/* 6 Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {workouts.slice(0, 6).map((gym) => (
                        <WorkoutsCard
                            key={gym.id}
                            work={gym}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center md:mt-14">
                    <Link
                        href="/viewAllCard"
                        className="group inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-8 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8ff3a] hover:shadow-[0_12px_32px_-10px_rgba(204,255,0,0.6)]"
                    >
                        View All Workouts
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Workouts;