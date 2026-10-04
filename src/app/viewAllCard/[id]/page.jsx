import React from 'react';
import Image from 'next/image';
import AddToPlan from '@/components/workDetailsButton/AddToPlan';
import SaveForLater from '@/components/workDetailsButton/SaveForLater';

const getSpecificPage = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};


const page = async({params}) => {
    const{id}=await params
    const receivedData=await getSpecificPage()
    const specificWorkout=receivedData.find(workout=>workout.id===Number(id))
    if (!specificWorkout) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center text-lg text-base-content/60">
                Not found
            </div>
        );
    }

    const {
        name,image,muscleGroups,equipment,difficulty,duration,caloriesBurned,sets,reps,rating,instructions

    }=specificWorkout
    return (
        <div className="relative min-h-screen overflow-hidden bg-black text-white">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-lime-400/5 blur-3xl" />

            <div className="container relative mx-auto px-4 py-10 md:py-16">
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* ============ LEFT: IMAGE ============ */}
                    <div className="lg:sticky lg:top-28">
                        <div className="group relative">
                            {/* Glow behind image */}
                            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-lime-400/40 via-transparent to-lime-400/10 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0f] shadow-2xl shadow-black">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

                                {/* Rating */}
                                <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-lime-400 px-3.5 py-1.5 text-sm font-bold text-black shadow-lg shadow-lime-400/30">
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    {rating}
                                </div>

                                {/* Muscle groups on image */}
                                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                                    {[].concat(muscleGroups ?? []).map((group) => (
                                        <span
                                            key={group}
                                            className="rounded-full border border-white/20 bg-black/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md"
                                        >
                                            {group}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ============ RIGHT: DETAILS ============ */}
                    <div className="flex flex-col">

                        {/* Eyebrow */}
                        <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-lime-400">
                            <span className="h-px w-8 bg-lime-400" />
                            Workout Details
                        </p>

                        {/* Name */}
                        <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                            {name}
                        </h1>

                        {/* Badges */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-lime-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                                {[].concat(muscleGroups ?? []).join(' • ')}
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                                <svg className="h-3.5 w-3.5 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 17l6-6 4 4 8-8" />
                                    <path d="M14 7h7v7" />
                                </svg>
                                {difficulty}
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

                            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40">
                                <svg className="h-5 w-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3c1 3 4 4.5 4 8.5a4 4 0 01-8 0c0-1.5.6-2.6 1.5-3.5C10 10 11 9 11 7c0-1.5.4-2.9 1-4z" />
                                </svg>
                                <p className="mt-3 text-2xl font-extrabold">
                                    {caloriesBurned}
                                    <span className="ml-1 text-xs font-medium text-white/50">kcal</span>
                                </p>
                                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">Calories</p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40">
                                <svg className="h-5 w-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v5l3 2" />
                                </svg>
                                <p className="mt-3 text-2xl font-extrabold">{duration}</p>
                                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">Duration</p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40">
                                <svg className="h-5 w-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                                <p className="mt-3 text-2xl font-extrabold">{sets}</p>
                                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">Sets</p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40">
                                <svg className="h-5 w-5 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 12a8 8 0 0114-5.3L20 9" />
                                    <path d="M20 4v5h-5" />
                                    <path d="M20 12a8 8 0 01-14 5.3L4 15" />
                                    <path d="M4 20v-5h5" />
                                </svg>
                                <p className="mt-3 text-2xl font-extrabold">{reps}</p>
                                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">Reps</p>
                            </div>

                        </div>

                        {/* Equipment */}
                        <div className="mt-3 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.07] to-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-lime-400/40">
                            <div className="flex items-center gap-3">
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-400/10 text-lime-400">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />
                                    </svg>
                                </span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Equipment</span>
                            </div>
                            <span className="text-right text-sm font-bold text-white sm:text-base">{equipment}</span>
                        </div>

                        {/* Instructions */}
                        <div className="mt-10">
                            <h2 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
                                <span className="h-6 w-1 rounded-full bg-lime-400" />
                                Instructions
                            </h2>

                            {Array.isArray(instructions) ? (
                                <ol className="mt-5 space-y-3">
                                    {instructions.map((step, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                                        >
                                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime-400 text-sm font-extrabold text-black">
                                                {index + 1}
                                            </span>
                                            <p className="pt-1 text-sm leading-relaxed text-white/75 sm:text-base">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <p className="mt-5 whitespace-pre-line rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-white/75 sm:text-base">
                                    {instructions}
                                </p>
                            )}
                        </div>

                        {/* Buttons (UI only) */}
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <AddToPlan data={specificWorkout}/>

                            <SaveForLater data={specificWorkout}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;