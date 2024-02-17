import SectionLayout from "./SectionLayout.jsx";
import React from "react";

export default function Languages() {
    const languages = [
        {
            name: 'Arabic',
            proficiency: 'Native'
        },
        {
            name: 'English',
            proficiency: 'Conversational'
        },
    ]
    return (
        <SectionLayout title='Languages' isBadge={false}>
            <div className='flex flex-col gap-4'>
                {languages.map((language, index) => {
                    return (
                        <div key={index} className='flex items-center gap-2'>
                            <span className='text-steel '>{language.name}</span>
                            <span className='w-1.5 h-1.5 rounded-full bg-cloud'></span>
                            <span className='text-steel '>{language.proficiency}</span>
                        </div>
                    );
                })}
            </div>
        </SectionLayout>
    );
};