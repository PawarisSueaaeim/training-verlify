import React from 'react';
import './InputPrimary.css';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { MdLock } from 'react-icons/md';

export default function InputPrimary({ type, topic, value, onChange, onBlur = () => { }, hasToggle = false, toggleTypeOnClick }) {

    return (
        <div className='input-container h-[40px]'>
            <div className='entry-area h-[40px]'>
                <input
                    type={type}
                    className='input-primary'
                    value={value}
                    onChange={event => onChange(event)}
                    onBlur={event => onBlur(event)}
                    required
                />
                <div className='label-line'>{topic}</div>

                {hasToggle && (
                    <div className='absolute top-[50%] -translate-y-1/2 right-[1px] text-rapidBlue text-xl bg-white z-[21]'>
                        <div className='flex justify-end items-center gap-x-2 px-2 pr-2'>
                            <div className='cursor-pointer' onClick={() => toggleTypeOnClick(type)}>
                                {type === 'text' ? <VscEye /> : <VscEyeClosed />}
                            </div>
                            <MdLock />
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
