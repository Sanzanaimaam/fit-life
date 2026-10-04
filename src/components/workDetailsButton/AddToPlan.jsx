"use client"


import { WorkContext } from '@/context/WorklistContext';
import React, { useContext } from 'react';




const AddToPlan = ({data}) => {


    const {addToPlan, setAddToPlan}=useContext(WorkContext)

    const handleAddButton = () => {
    console.log("button clicked");
    alert("Added to Today's Plan");

    setAddToPlan([...addToPlan, data]);
};

    return <button
                                type="button"
                                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime-400 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-[0_10px_40px_-8px_rgba(163,230,53,0.7)] active:translate-y-0 active:scale-[0.98]"


                               onClick={handleAddButton}
                            
                            
                            
                            >
                                <svg className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                                Add to Today&apos;s Plan
                            </button>
 
};

export default AddToPlan;