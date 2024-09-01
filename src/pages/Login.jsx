import React, { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignInOnClick = async () => {
        try {
            const login = async () => {
                const result = await axios.post(`api/v1/otp/request`, {
                    "mobile_number": phoneNumber
                })
                return result;
            };
            const response = await login();
            if (response.data.mobile_number) {
                navigate('/verify');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='absolute top-0 right-0 bottom-0 left-0 z-[1000] bg-backgroundColor1 min-h-screen'>
            <div className='flex justify-center items-center h-full px-5'>
                <div className='bg-white rounded-lg shadow-basic px-[120px] py-10 max-[600px]:px-[60px] max-[400px]:px-[30px] max-[400px]:py-5 transition-all duration-200'>
                    <div className='grid grid-cols-1 gap-y-4'>
                        <div className='text-[40px] font-bold text-rapidBlue max-[480px]:text-[30px] max-[400px]:text-[25px]'>ยืนยันตัวตน</div>
                        <div className='relative overflow-hidden rounded-md'>
                            <input
                                placeholder='เบอร์โทร'
                                value={phoneNumber}
                                onChange={event => setPhoneNumber(event.target.value)}
                                className=' w-full text-base py-2 px-3 rounded-md bg-whiteSmoke text-rapidBlue'
                                type='text'
                            />
                        </div>

                        <div className='flex justify-between items-center flex-wrap text-rapidBlue'>
                            <div className='grid grid-cols-1 gap-y-1'>
                            </div>
                            <div
                                tabIndex={0}
                                className='clickable text-white bg-rapidBlue px-5 py-2 rounded-md cursor-pointer select-none'
                                onClick={() => handleSignInOnClick()}
                            >
                                ส่ง OTP
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
