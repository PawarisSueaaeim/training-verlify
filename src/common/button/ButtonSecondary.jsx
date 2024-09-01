import React from 'react';
import '../../index.css';
import { GREY } from '../../data/Color';

export default function ButtonSecondary({ title, bgColor, textColor, onClick, disabled }) {
    return (
        <div
            onClick={event => {
                disabled ?  null : onClick(event);
            }}
            className={`${disabled ? '' : 'clickable cursor-pointer'} flex justify-center items-center rounded-md px-4 py-[5px] text-base select-none break-all`}
            style={{ 
                backgroundColor: disabled ? GREY : bgColor,
                color: textColor
            }}
        >
            {title}
        </div>
    )
}
