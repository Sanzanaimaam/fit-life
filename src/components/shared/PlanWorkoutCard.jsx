import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { WorkContext } from "@/context/WorklistContext";
import { toast } from "react-toastify";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const PlanWorkoutCard = ({ work, type }) => {
    const {
        id,
        name,
        image,
        muscleGroups,
        caloriesBurned,
        duration,
        equipment,
        rating,
        difficulty,
    } = work;

    const {
        addToPlan,
        setAddToPlan,
        saveForLater,
        setSaveForLater,
        doneWorkouts,
        setDoneWorkouts
    } = useContext(WorkContext);

    const isDone = doneWorkouts.includes(id);

    return (
        <div className="container mx-auto">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#11131a] shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-[0_20px_50px_-20px_rgba(163,230,53,0.35)]">

                {/* Soft top highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                {/* Remove button (UI only) */}
                <button
                    type="button"
                    title="Remove workout"
                    aria-label="Remove workout"

                    onClick={() => {
                        if (type === "today") {
                            setAddToPlan(
                                addToPlan.filter((item) => item.id !== id)
                            );

                            setDoneWorkouts(
                                doneWorkouts.filter((item) => item !== id)
                            );

                            toast.error("Removed from today's plan", {
                                toastId: `remove-${id}`,
                            });
                        } else {
                            setSaveForLater(
                                saveForLater.filter((item) => item.id !== id)
                            );

                            setDoneWorkouts(
                                doneWorkouts.filter((item) => item !== id)
                            );

                            toast.error("Removed from saved workouts", {
                                toastId: `remove-${id}`,
                            });
                        }
                    }}

                    className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/15 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
                >
                    <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>

                <div className="flex flex-col md:flex-row">

                    {/* Image */}
                    <div className="relative h-60 w-full shrink-0 overflow-hidden md:h-auto md:w-72">
                        <Image
                            src={image}
                            alt={name}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-[#11131a]/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#11131a]/80" />

                        {/* Rating */}
                        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-lime-400 px-3 py-1.5 text-xs font-extrabold text-black shadow-lg shadow-lime-400/30">
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            {rating}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6 md:p-7">

                        <div>
                            {/* Badges */}
                            <div className="flex flex-wrap items-center gap-2">
                                {[].concat(muscleGroups ?? []).map((group) => (
                                    <span
                                        key={group}
                                        className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lime-400"
                                    >
                                        {group}
                                    </span>
                                ))}

                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                                    <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                                    {difficulty}
                                </span>
                            </div>

                            {/* Name */}
                            <h2 className={`${oswald.className} mt-4 text-2xl font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-lime-400 sm:text-3xl`}>
                                {name}
                            </h2>

                            {/* Stats */}
                            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

                                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0c10] p-4 transition-colors duration-300 group-hover:border-white/20">
                                    <svg className="h-5 w-5 shrink-0 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 3c1 3 4 4.5 4 8.5a4 4 0 01-8 0c0-1.5.6-2.6 1.5-3.5C10 10 11 9 11 7c0-1.5.4-2.9 1-4z" />
                                    </svg>
                                    <div className="min-w-0 leading-tight">
                                        <p className="text-[11px] uppercase tracking-wider text-white/40">Calories</p>
                                        <p className="mt-1 font-bold text-white">{caloriesBurned} kcal</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0c10] p-4 transition-colors duration-300 group-hover:border-white/20">
                                    <svg className="h-5 w-5 shrink-0 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 7v5l3 2" />
                                    </svg>
                                    <div className="min-w-0 leading-tight">
                                        <p className="text-[11px] uppercase tracking-wider text-white/40">Duration</p>
                                        <p className="mt-1 font-bold text-white">{duration}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0c10] p-4 transition-colors duration-300 group-hover:border-white/20">
                                    <svg className="h-5 w-5 shrink-0 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />
                                    </svg>
                                    <div className="min-w-0 leading-tight">
                                        <p className="text-[11px] uppercase tracking-wider text-white/40">Equipment</p>
                                        <p className="mt-1 truncate font-bold text-white">{equipment}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-sm text-white/40">
                                Ready to train?
                            </span>

                            <div className="flex flex-wrap items-center gap-3">
                                {/* Mark as Done (UI only) */}
                                <button
                                    type="button"
                                    disabled={isDone}
                                    onClick={() => {
                                        console.log("button clicked");

                                        const alreadyDone = doneWorkouts.some(
                                            (item) => item === id
                                        );
                                        console.log("alreadyDone:", alreadyDone);
                                        console.log("current doneWorkouts:", doneWorkouts);
                                        console.log("current id:", id);

                                        if (alreadyDone) {
                                            toast.info("Workout is already marked as done");
                                            return;
                                        }

                                        setDoneWorkouts([...doneWorkouts, id]);
                                        toast.success("Workout marked as done");
                                    }}
                                    className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-2.5 text-sm font-bold text-lime-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400/60 hover:bg-lime-400/20 hover:shadow-[0_10px_30px_-10px_rgba(163,230,53,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/60"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    {isDone ? "Completed" : "Mark as Done"}
                                </button>

                                <Link
                                    href={`/viewAllCard/${id}`}
                                    className="group/btn inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-[0_10px_30px_-8px_rgba(163,230,53,0.7)]"
                                >
                                    View Details
                                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom lime bar that grows on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />
            </div>
        </div>
    );
};

export default PlanWorkoutCard;