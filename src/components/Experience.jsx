import SectionLayout from "./SectionLayout.jsx";
import React from "react";
export function Experience() {
    const companies = [
        {
            "name": "Company Name",
            "experience": [
                {
                    "position": "Product Designer",
                    "duration": "Jan 2020 - Present",
                },
                {
                    "position": "Product Designer",
                    "duration": "May 2017 - Aug 2017",
                    "description": (<>
                        <li>Designed user interfaces for web and mobile applications</li>
                        <li>Used user-centered design principles and methodologies</li>
                        <li>Created a comprehensive design system</li>
                        <li>Conducted user research and benchmarking</li>
                        <li>Worked with cross-functional teams during the product design process</li>
                    </>)
                },

            ],
            "location": "Mountain View, CA",
            "logo": "/logos/google.png"
        },
        {
            "name": "Company Name",
            "experience": [
                {
                    "position": "Product Designer",
                    "duration": "Jan 2017 - Present",
                },
            ],
            "location": "Mountain View, CA",
            "logo": "/logos/facebook.png"
        },
        {
            "name": "Company Name",
            "experience": [
                {
                    "position": "Product Designer",
                    "duration": "Jan 2015 - Present",
                },
            ],
            "location": "Mountain View, CA",
            "logo": "/logos/amazon.png"
        }
    ]
    return (
        <SectionLayout title={'Experience'} isBadge={true} badge='Works'>
            <div className='flex flex-col gap-4'>
                {companies.map((company, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-6'>
                            <div className='relative flex flex-col gap-[2rem]'>
                                {company.experience.map((experience, index) => {
                                  return (
                                      <React.Fragment key={index}>
                                        <div className='rounded-2xl flex flex-col gap-2'>
                                            <div className='flex items-start gap-2'>
                                                <div>
                                                    <img src={company.logo} className='w-8 h-8 rounded-lg'/>
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                    <span className='text-lg'>{experience.position}</span>
                                                    <div className='flex gap-2 '>
                                                        <span className='text-sm'>{company.name}</span>
                                                        <span className='text-sm'>Full-time</span>
                                                        <span className='text-sm'>Remote</span>
                                                        <span className='text-steel text-sm'>{experience.duration}</span>
                                                    </div>
                                                    <span className='text-steel text-sm'>{company.location}</span>
                                                    <ul className='mx-6 list-disc text-sm'>
                                                        {experience.description}
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        {company.experience.length >= 2 && (index + 1) % 2 == 1  && (
                                            <div className='absolute top-[2.5rem] left-4 w-0.5 flex flex-col items-center gap-0.5'>
                                                <div className='w-1.5 h-1.5 rounded-full bg-cloud'></div>
                                                <div className='w-0.5 h-12 bg-cloud'></div>
                                                <div className='w-1.5 h-1.5 rounded-full bg-cloud'></div>
                                            </div>
                                        )}
                                      </React.Fragment>
                                  )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </SectionLayout>
    );
}