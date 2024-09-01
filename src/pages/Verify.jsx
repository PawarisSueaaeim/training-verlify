import axios from 'axios';
import React, { useState } from 'react'
import { useSignIn } from 'react-auth-kit';
import Swal from 'sweetalert2';

export default function Verify() {
    const signIn = useSignIn();

    const [otp, setOtp] = useState('');

    const handleVerifyOnClick = async () => {
        try {
            const response = await axios.post('api/v1/otp/verify',{
                "mobile_number": "0955799772",
                "otp": otp
            });
            if (response.data.access_token) {
                Swal.fire({
                    title: 'Verify Success',
                    text: '',
                    icon: 'success',
                    confirmButtonColor: '#1A417B',
                    confirmButtonText: 'OK'
                })
                signIn({
                    token: response.data.access_token,
                    expiresIn: 720,
                    tokenType: 'Bearer',
                    authState: []
                });
                window.location = '/';
            } else {
                Swal.fire({
                    title: 'OTP ผิดพลาด',
                    text: '',
                    icon: 'warning',
                    confirmButtonColor: '#1A417B',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'OTP ผิดพลาด',
                text: '',
                icon: 'warning',
                confirmButtonColor: '#1A417B',
                confirmButtonText: 'OK'
            });
            console.log(error)
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
                                placeholder='กรอกรหัส OTP'
                                value={otp}
                                onChange={event => setOtp(event.target.value)}
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
                                onClick={() => handleVerifyOnClick()}
                            >
                                ยืนยัน
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
