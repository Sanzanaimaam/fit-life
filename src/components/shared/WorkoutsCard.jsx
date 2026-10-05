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
            className="group block cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#11131a] shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-[0_16px_40px_-18px_rgba(163,230,53,0.35)]"
        >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
                <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-transparent to-transparent" />

                {/* Category badge */}
                <span className="absolute left-3 top-3 max-w-[65%] truncate rounded-full border border-lime-400/30 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400 backdrop-blur-sm">
                    {muscleGroups}
                </span>

                {/* Rating */}
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-lime-400 px-2.5 py-1 text-xs font-extrabold text-black">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">

                {/* Name */}
                <h2 className="truncate text-lg font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-lime-400">
                    {name}
                </h2>

                {/* Equipment */}
                <p className="mt-1 truncate text-sm text-white/50">
                    {equipment}
                </p>

                {/* Stats */}
                <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-white/70">
                    <span>{duration}</span>
                    <span className="text-white/20">•</span>
                    <span>{caloriesBurned} kcal</span>
                </p>

                {/* Bottom */}
                <div className="mt-4 flex items-center justify-end border-t border-white/10 pt-3">
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-lime-400">
                        View Details
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutsCard;
