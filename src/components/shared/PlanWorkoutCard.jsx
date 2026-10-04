import React from "react";
import Image from "next/image";
import Link from "next/link";

const PlanWorkoutCard = ({ work }) => {
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

    return (
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#11131a] shadow-lg transition-all duration-300 hover:border-lime-400/30 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row">

                {/* Image */}
                <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-auto md:w-72">
                    <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-sm font-bold text-white backdrop-blur-md">
                        ⭐ {rating}
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">

                    <div>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime-400">
                                {muscleGroups}
                            </span>

                            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/50">
                                {difficulty}
                            </span>
                        </div>

                        <h2 className="mt-3 text-2xl font-extrabold text-white">
                            {name}
                        </h2>

                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-wide text-white/40">
                                    Calories
                                </p>
                                <p className="mt-1 font-bold text-white">
                                    🔥 {caloriesBurned} kcal
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-wide text-white/40">
                                    Duration
                                </p>
                                <p className="mt-1 font-bold text-white">
                                    ⏱ {duration}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-wide text-white/40">
                                    Equipment
                                </p>
                                <p className="mt-1 truncate font-bold text-white">
                                    🏋️ {equipment}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-sm text-white/40">
                            Ready to train?
                        </span>

                        <Link
                            href={`/viewAllCard/${id}`}
                            className="rounded-full bg-lime-400 px-6 py-2.5 text-sm font-extrabold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300"
                        >
                            View Details →
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlanWorkoutCard;