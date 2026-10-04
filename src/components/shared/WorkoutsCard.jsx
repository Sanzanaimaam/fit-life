import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WorkoutsCard = ({ work }) => {
    const {
        id,
        muscleGroups,
        name,
        caloriesBurned,
        duration,
        equipment,
        image,
        rating,
    } = work;

    return (
        <Link
            href={`/viewAllCard/${id}`}
            className="group block cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Rating */}
                <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold text-gray-800 shadow-lg">
                    ⭐ {rating}
                </div>

                {/* Workout Name */}
                <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block rounded-full bg-pink-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {muscleGroups}
                    </span>

                    <h2 className="mt-2 text-2xl font-extrabold text-white">
                        {name}
                    </h2>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Calories & Duration */}
                <div className="grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-orange-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                            Calories
                        </p>

                        <p className="mt-1 text-lg font-extrabold text-gray-800">
                            🔥 {caloriesBurned}
                            <span className="ml-1 text-xs font-medium text-gray-500">
                                kcal
                            </span>
                        </p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                            Duration
                        </p>

                        <p className="mt-1 text-lg font-extrabold text-gray-800">
                            ⏱ {duration}
                        </p>
                    </div>

                </div>

                {/* Equipment */}
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-sm font-medium text-gray-500">
                        Equipment
                    </span>

                    <span className="max-w-[55%] truncate text-sm font-bold text-gray-800">
                        🏋️ {equipment}
                    </span>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm font-semibold text-gray-400">
                        Ready to train?
                    </span>

                    <span className="font-bold text-pink-600 transition-transform duration-300 group-hover:translate-x-1">
                        Explore →
                    </span>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutsCard;