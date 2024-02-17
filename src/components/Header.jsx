import React from 'react';

function Header() {
    return (
        <div>
            <div className='flex items-center gap-4'>
                <img src='/avatar.png' className='w-20 h-20 rounded-full' />
                <div className='flex flex-col gap-1'>
                    <span className='text-2xl font-medium'>Mohamed Ashraf</span>
                    <span className='text-xl text-steel'>Software Engineer</span>
                </div>
            </div>
        </div>
    );
}

export default Header;