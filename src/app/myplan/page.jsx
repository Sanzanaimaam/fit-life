"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { WorkContext } from "@/context/WorklistContext";
import PlanWorkoutCard from "@/components/shared/PlanWorkoutCard";
import PlanStats from "@/components/myplanCount/PlanStats";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const Page = () => {
    const { addToPlan, saveForLater } = useContext(WorkContext);
    const [sortOption, setSortOption] = useState("duration");
    const [activeTab, setActiveTab] = useState("today");


    const sortWorkOuts = (workouts => {
        const sortedWorkouts = [...workouts];
        console.log("Duration:", workouts.map((item) => item.duration));
        console.log("Calories:", workouts.map((item) => item.caloriesBurned));

        if (sortOption === "duration") {
            sortedWorkouts.sort((a, b) => b.duration - a.duration);
        } else if (sortOption === "calories") {
            sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortOption === "rating") {
            sortedWorkouts.sort((a, b) => b.rating - a.rating);
        }
        return sortedWorkouts;
    })

    const sortedAddToPlan = sortWorkOuts(addToPlan)

    const sortedSavedLater = sortWorkOuts(saveForLater)
    const activeWorkouts =
        activeTab === "today" ? addToPlan : saveForLater;

    const totalExercises = activeWorkouts.length;

    const totalMinutes = activeWorkouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = activeWorkouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="group/root container mx-auto px-4 py-8 md:py-12">
                <PlanStats
                    exercises={totalExercises}
                    minutes={totalMinutes}
                    calories={totalCalories}
                />

                {/* Tab radios (CSS only) */}
                <input
                    id="tab-today"
                    type="radio"
                    name="my_tabs"
                    className="sr-only"
                    aria-label="Today's Plan"
                    defaultChecked
                    onChange={() => setActiveTab("today")}
                />
                <input
                    id="tab-saved"
                    type="radio"
                    name="my_tabs"
                    className="sr-only"
                    aria-label="Saved Workouts"
                    onChange={() => setActiveTab("saved")}
                />

                {/* Tabs (left) + Sort (right) */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Tabs */}
                    <div className="inline-flex w-fit rounded-xl border border-white/10 bg-[#11131a] p-1">
                        <label
                            htmlFor="tab-today"
                            className="cursor-pointer select-none rounded-lg px-5 py-2 text-sm font-medium text-white/50 transition-colors duration-300 hover:bg-white/5 hover:text-white group-has-[#tab-today:checked]/root:bg-white/10 group-has-[#tab-today:checked]/root:font-semibold group-has-[#tab-today:checked]/root:text-white"
                        >
                            Today&apos;s Plan
                        </label>
                        <label
                            htmlFor="tab-saved"
                            className="cursor-pointer select-none rounded-lg px-5 py-2 text-sm font-medium text-white/50 transition-colors duration-300 hover:bg-white/5 hover:text-white group-has-[#tab-saved:checked]/root:bg-white/10 group-has-[#tab-saved:checked]/root:font-semibold group-has-[#tab-saved:checked]/root:text-white"
                        >
                            Saved
                        </label>
                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-white/50 sm:text-sm">Sort By</span>

                        <div className="relative">
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="cursor-pointer appearance-none rounded-lg border border-white/10 bg-[#11131a] py-2 pl-4 pr-10 text-xs font-medium text-white transition-colors duration-300 hover:border-lime-400/50 focus:border-lime-400 focus:outline-none sm:text-sm"
                            >
                                <option disabled={true} className="bg-[#11131a]">Pick a Runtime</option>
                                <option value="duration" className="bg-[#11131a]">Duration</option>
                                <option value="calories" className="bg-[#11131a]">Calories</option>
                                <option value="rating" className="bg-[#11131a]">Rating</option>
                            </select>
                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/60"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Today's Plan */}
                <div className="mt-6 hidden group-has-[#tab-today:checked]/root:block">
                    {sortedAddToPlan.length > 0 ? (
                        <div className="space-y-5">
                            {sortedAddToPlan.map((item) => (
                                <PlanWorkoutCard
                                    key={item.id}
                                    work={item}
                                    type="today"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-white/15 p-8 text-center transition-colors duration-300 hover:border-white/25 md:min-h-[360px]">
                            <div>
                                <h2 className={`${oswald.className} text-2xl font-bold uppercase tracking-wide sm:text-3xl`}>
                                    Nothing here yet
                                </h2>

                                <p className="mx-auto mt-2 max-w-sm text-sm text-white/50">
                                    Add a workout to your plan.
                                </p>

                                <Link
                                    href="/"
                                    className="mt-6 inline-block rounded-full bg-lime-400 px-7 py-2.5 text-sm font-bold text-black shadow-[0_8px_30px_-8px_rgba(163,230,53,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-[0_12px_36px_-6px_rgba(163,230,53,0.8)]"
                                >
                                    Go to the Page
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Saved */}
                <div className="mt-6 hidden group-has-[#tab-saved:checked]/root:block">
                    {sortedSavedLater.length > 0 ? (
                        <div className="space-y-5">
                            {sortedSavedLater.map((item) => (
                                <PlanWorkoutCard
                                    key={item.id}
                                    work={item}
                                    type="saved"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-white/15 p-8 text-center transition-colors duration-300 hover:border-white/25 md:min-h-[360px]">
                            <div>
                                <h2 className={`${oswald.className} text-2xl font-bold uppercase tracking-wide sm:text-3xl`}>
                                    No saved workouts
                                </h2>

                                <p className="mx-auto mt-2 max-w-sm text-sm text-white/50">
                                    Save a workout and find it here later.
                                </p>

                                <Link
                                    href="/"
                                    className="mt-6 inline-block rounded-full bg-lime-400 px-7 py-2.5 text-sm font-bold text-black shadow-[0_8px_30px_-8px_rgba(163,230,53,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-[0_12px_36px_-6px_rgba(163,230,53,0.8)]"
                                >
                                    Go to workouts
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Page;