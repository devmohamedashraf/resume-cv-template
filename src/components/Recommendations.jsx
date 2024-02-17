import SectionLayout from "./SectionLayout.jsx";

export default function Recommendations() {
    const recommendations = [
        {
            user: {
                name: 'John Doe',
                position: 'CEO @ Acme Inc.',
                avatar: '/avatar.png',
            },
            text: 'Lorem ipsum dolor sit amet consectetur. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque.',
        },
        {
            user: {
                name: 'Jane Doe',
                position: 'CTO @ Acme Inc.',
                avatar: '/avatar.png',
            },
            text: 'Lorem ipsum dolor sit amet consectetur. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque.',
        },
        {
            user: {
                name: 'John Smith',
                position: 'CEO @ Smith Inc.',
                avatar: '/avatar.png',
            },
            text: 'Lorem ipsum dolor sit amet consectetur. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque. Non nibh cras eget cursus amet porta nibh in. In pharetra imperdiet in duis at massa. Diam viverra adipiscing amet pellentesque.',
        },
    ]
    return (
        <SectionLayout title={'Recommendations'} isBadge={false}>
            <div className='flex flex-col gap-2'>
                {recommendations.map((recommendation, index) => {
                    return (
                        <div key={index} className='border-2 border-cloud p-4 rounded-2xl flex flex-col gap-2'>
                            <div className='flex items-start gap-2'>
                                <div>
                                    <img src={recommendation.user.avatar} className='w-12 h-12 rounded-lg'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-lg'>{recommendation.user.name}</span>
                                    <span className='text-steel text-sm'>{recommendation.user.position}</span>
                                </div>
                            </div>
                            <span className='line-clamp-3 text-slate text-sm'>{recommendation.text}</span>
                        </div>
                    )
                })}
            </div>
        </SectionLayout>
    );
};