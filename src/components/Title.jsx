export default function Title({ title, isBadge, badge }) {
    return (
        <div>
            <div className='flex items-center justify-between gap-4'>
                <div>
                    <span className='font-medium text-lg'>{title}</span>
                </div>
                {isBadge && <div className='px-3 py-1 border-2 rounded-full bg-smoke uppercase font-semibold text-steel text-sm'>
                    {badge}
                </div>}
            </div>
        </div>
    );
};