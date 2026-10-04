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
        <section className="container mx-auto my-16 px-4">

            {/* Section Header */}
            <div className="mb-10 text-center">
                <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-pink-600">
                    Explore Workouts
                </span>

                <h2 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
                    Find Your Perfect
                    <span className="text-pink-600"> Workout</span>
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                    Discover effective workouts designed to help you build
                    strength, burn calories, and reach your fitness goals.
                </p>
            </div>

            {/* 6 Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.slice(0, 6).map((gym) => (
                    <WorkoutsCard
                        key={gym.id}
                        work={gym}
                    />
                ))}
            </div>

            <div className="mt-10 text-center">
                <Link
                    href="/viewAllCard"
                    className="rounded-full bg-gray-900 px-8 py-3.5 text-sm font-bold text-white"
                >
                    View All Workouts
                    <span className="ml-2">→</span>
                </Link>
            </div>

        </section>
    );
};

export default Workouts;