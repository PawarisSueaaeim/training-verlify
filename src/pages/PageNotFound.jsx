import React from 'react';

export default function PageNotFound() {
    return (
        <div className='relative bg-pageNotFound bg-cover h-errorHeightScreen'>
            <div className='flex flex-col justify-center items-center h-full text-warningYellow font-[1000] text-[6vw] max-[770px]:text-[8vw]'>
                <div>404 Error</div>
                <div>Page Not Found</div>
            </div>
        </div>
    )
}
