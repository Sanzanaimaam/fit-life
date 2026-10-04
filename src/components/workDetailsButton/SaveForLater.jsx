"use client"


import { WorkContext } from '@/context/WorklistContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveForLater = ({data}) => {
    const {saveForLater, setSaveForLater}=useContext(WorkContext)
    
        const handleSaveButton = () => {
        console.log("button clicked");
        toast.success("Saved for Later");
    
        setSaveForLater([...saveForLater, data]);
    };

    return (
        <button
                                type="button"
                                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-400 hover:bg-lime-400/10 hover:text-lime-300 active:translate-y-0 active:scale-[0.98]"


                                onClick={handleSaveButton}
                            >
                                <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 3h12a1 1 0 011 1v17l-7-4-7 4V4a1 1 0 011-1z" />
                                </svg>
                                Save for Later
                            </button>
    );
};

export default SaveForLater;