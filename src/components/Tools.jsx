import SectionLayout from "./SectionLayout.jsx";

export default function Tools() {
    const tools = [
        'Figma',
        'Framer',
        'Notion',
        'Linear',
        'Figma Prototyping',
        'Screen Stuido',
        'Slack',
        'Discord',
    ]
    return (
        <SectionLayout title='Tools' isBadge={true} badge='Tech Stack'>
            <div className='flex flex-wrap gap-1'>
                {tools.map((tool, index) => {
                    return (
                        <div key={index} className='px-3 py-1 border-2 rounded-xl text-steel text-sm'>
                            {tool}
                        </div>
                    );
                })}
            </div>
        </SectionLayout>
    );
};