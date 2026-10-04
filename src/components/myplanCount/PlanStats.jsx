import React from "react";

const PlanStats = ({ exercises, minutes, calories }) => {
    return (
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* Experience */}
            <div className="rounded-2xl border border-white/10 bg-[#11131a] p-6 shadow-lg">
                <p className="text-sm text-white/50">
                    Experience
                </p>

                <h2 className="mt-2 text-3xl font-bold text-lime-400">
                    {exercises}
                </h2>

                <p className="mt-1 text-xs text-white/40">
                    workouts selected
                </p>
            </div>

            {/* Minutes */}
            <div className="rounded-2xl border border-white/10 bg-[#11131a] p-6 shadow-lg">
                <p className="text-sm text-white/50">
                    Minutes
                </p>

                <h2 className="mt-2 text-3xl font-bold text-lime-400">
                    {minutes}
                </h2>

                <p className="mt-1 text-xs text-white/40">
                    total duration
                </p>
            </div>

            {/* Calories */}
            <div className="rounded-2xl border border-white/10 bg-[#11131a] p-6 shadow-lg">
                <p className="text-sm text-white/50">
                    Calories
                </p>

                <h2 className="mt-2 text-3xl font-bold text-lime-400">
                    {calories}
                </h2>

                <p className="mt-1 text-xs text-white/40">
                    kcal burned
                </p>
            </div>

        </div>
    );
};

export default PlanStats;