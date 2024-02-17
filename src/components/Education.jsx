import SectionLayout from "./SectionLayout.jsx";

export default function Education() {
    return (
        <SectionLayout title='Education' isBadge={false}>
            <div className='flex flex-col gap-1'>
                <span className='font-medium '>Your Major</span>
                <span className='font-medium text-sm text-steel'>University Name • Location</span>
                <span className='font-medium text-sm text-steel'>2002 - 2006 • Bachelor’s Degree</span>
            </div>
        </SectionLayout>
    );
};