import Title from "./Title.jsx";

export default function SectionLayout({ title, isBadge, badge, children }) {
    return (
        <div className='p-4 rounded-2xl border-2 border-cloud space-y-3'>
            <Title title={title} isBadge={isBadge} badge={badge}/>
            <div className='border-b-2 border-dashed border-cloud'></div>
            <div>
                {children}
            </div>
        </div>
    );
};