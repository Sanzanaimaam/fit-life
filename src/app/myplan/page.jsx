"use client";

import React, { useContext } from "react";
import { WorkContext } from "@/context/WorklistContext";
import PlanWorkoutCard from "@/components/shared/PlanWorkoutCard";

const Page = () => {
    const { addToPlan, saveForLater } = useContext(WorkContext);

    return (
        <div className="tabs tabs-lift text-black">

            {/* Today's Plan */}
            <input
                type="radio"
                name="my_tabs"
                className="tab"
                aria-label={`Today's Plan ${addToPlan.length > 0 ? `(${addToPlan.length})` : ""
                    }`}
                defaultChecked
            />

            <div className="tab-content border-white/10 bg-[#11131a] p-6 text-white">
                <div className="container mx-auto">
                    {addToPlan.length > 0 ? (
                        <div className="space-y-5">
                            {addToPlan.map(item => (
                                <PlanWorkoutCard
                                    key={item.id}
                                    work={item}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Nothing added to today&apos;s plan yet.</p>
                    )}
                </div>
            </div>

            {/* Saved */}
            <input
                type="radio"
                name="my_tabs"
                className="tab"
                aria-label={`Saved for Later ${saveForLater.length > 0 ? `(${saveForLater.length})` : ""
                    }`}
            />

            <div className="tab-content border-white/10 bg-[#11131a] p-6 text-white">
                <div className="container mx-auto">
                    {saveForLater.length > 0 ? (
                        <div className="space-y-5">
                            {saveForLater.map(item => (
                                <PlanWorkoutCard
                                    key={item.id}
                                    work={item}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Nothing saved for later yet.</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Page;