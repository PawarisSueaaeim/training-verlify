import React, { useEffect } from 'react';

// Helper
import { getCookies } from '../helper/utils/common';

// Component
import TitlePage from '../common/title/TitlePage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../store/reducer/AuthSlice';

export default function HomePage() {
    const dispatch = useDispatch();
    const token = getCookies('_auth');

    const {
        auth
    } = useSelector(state => state.authStateValue);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get('api/v1/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch(setAuth({value: response.data}))
            } catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, []);

    return (
        <div className='w-full'>
            <TitlePage title="Profile" />
            <div className='flex flex-col'>
                <div className='flex'>Email: <TitlePage title={auth.email} /></div>
                <div className='flex'>Id: <TitlePage title={auth.id} /></div>
                <div className='flex'>Active: <TitlePage title={auth.is_active} /></div>
                <div className='flex'>Superuser: <TitlePage title={auth.superuser} /></div>
                <div className='flex'>Phone: <TitlePage title={auth.mobile_number} /></div>
                <div className='flex'>username: <TitlePage title={auth.username} /></div>
            </div>
        </div>
    )
}
