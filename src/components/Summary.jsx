import SectionLayout from "./SectionLayout.jsx";

export default function Summary() {
    return (
        <SectionLayout title='Summary' isBadge={true} badge='About me'>
            <ul className='mx-3 list-disc list text-base'>
                <li>Since 2021, I have been working as a freelance digital product designer.</li>
                <li>I design all components with style guide, ui kits, prototyping, animation and design system.</li>
            </ul>
        </SectionLayout>
    );
};