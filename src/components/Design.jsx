import SectionLayout from "./SectionLayout.jsx";

export default function Design() {
    const skills = [
        'User Experience',
        'Design System',
        'Web Design (Responsive)',
        'WebApp Design (Responsive)',
        'Mobile App Design',
        'Prototyping',

    ]
    return (
        <SectionLayout title='Design' isBadge={true} badge='Skills'>
            <ul className='mx-3 list-disc list text-base'>
                {skills.map((skill, index) => (
                    <li key={index} className='text-base'>{skill}</li>
                ))}
            </ul>
        </SectionLayout>
    );
};