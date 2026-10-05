"use client";

import React, { createContext, useState } from 'react';

export const WorkContext = createContext()

const WorklistContext = ({ children }) => {

    const [addToPlan, setAddToPlan] = useState([])
    const [saveForLater, setSaveForLater] = useState([])
    const [doneWorkouts, setDoneWorkouts] = useState([]);

    const shareData = {
        addToPlan,
        setAddToPlan,
        saveForLater,
        setSaveForLater,
         doneWorkouts,
        setDoneWorkouts
    }
    return <WorkContext.Provider value={shareData}>{children}</WorkContext.Provider>
};

export default WorklistContext;