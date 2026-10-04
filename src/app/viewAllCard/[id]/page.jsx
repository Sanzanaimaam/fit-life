import React from 'react';

const getSpecificPage = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};


const page = async({params}) => {
    const{id}=await params
    const receivedData=await getSpecificPage()
    const specificWorkout=receivedData.find(workout=>workout.id===Number.id)
    if (!specificWorkout) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center text-lg text-base-content/60">
                Not found
            </div>
        );
    }
    return (
        <div>
            
        </div>
    );
};

export default page;