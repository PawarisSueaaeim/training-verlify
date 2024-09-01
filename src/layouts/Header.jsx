import React from 'react';
import { useNavigate } from 'react-router-dom';

// Helper
import { getCookies } from '../helper/utils/common';
import Swal from 'sweetalert2';
import { useSignOut } from 'react-auth-kit';

export default function Header() {
    const token = getCookies('_auth');
    const signOut = useSignOut();
    const navigate = useNavigate();

    const handleClickLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: '',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28A745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Logout Success',
                    text: '',
                    icon: 'success',
                    confirmButtonColor: '#28A745',
                });
                signOut();
                navigate('/login');
            }
        });
    };

    return (
        <div className='relative flex justify-between items-center bg-white p-5 shadow-basic z-50'>
            {token && 
                <span className='flex justify-center items-center gap-4' onClick={() => handleClickLogout()}>
                    Logout
                </span>
            }
        </div>
    )
}
