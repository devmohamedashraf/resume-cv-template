import SectionLayout from "./SectionLayout.jsx";

export default function SocialLinks() {
    const links = [
        {
            name: 'Twitter',
            url: 'Mohamed Ashraf',
        },
        {
            name: 'Dribbble',
            url: 'Mohamed Ashraf',
        },
        {
            name: 'Linkedin',
            url: 'Mohamed Ashraf',
        },
        {
            name: 'Framer',
            url: 'Mohamed Ashraf',
        },
    ]
    return (
        <SectionLayout title='Social Links' isBadge={true} badge='Let’s Be Friends'>
            <div className='flex flex-col gap-2'>
                {links.map((link, index) => {
                    return (
                        <div key={index} className='flex items-center gap-1 font-medium'>
                            <span className='text-steel'>{link.name}:</span>
                            <a href='#' className='underline'>@{link.url}</a>
                        </div>
                    );
                })}
            </div>
        </SectionLayout>
    );
};