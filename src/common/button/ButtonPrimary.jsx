import React from 'react';
import '../../index.css';

export default function ButtonPrimary({ title, bgColor, textColor, onClick }) {
    return (
        <div
            onClick={event => onClick(event)}
            className='clickable flex justify-center items-center rounded px-[15px] py-[10px] text-[20px] cursor-pointer select-none break-all'
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            {title}
        </div>
    )
}
