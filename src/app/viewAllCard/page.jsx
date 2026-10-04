import WorkoutsCard from '@/components/shared/WorkoutsCard';
import React from 'react';

const getWorkouts = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};


const page = async() => {
    const getData=await getWorkouts()

    return (
         <section className="container mx-auto my-10 px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getData.map((gym2) => (
                    <WorkoutsCard
                        key={gym2.id}
                        work={gym2}
                    />
                ))}

            </div>
        </section>
    );
};

export default page;