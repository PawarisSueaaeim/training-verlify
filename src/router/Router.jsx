import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RequireAuth } from 'react-auth-kit';

import Header from '../layouts/Header';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Verify from '../pages/Verify';

export default function Router() {

    const location = useLocation();
    const currentLocation = location.pathname;

    return (
        <>
            {currentLocation === '/login' || currentLocation === '/verify' ? null : <Header />}
            <div className='relative'>
                <div className='w-full p-5'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <RequireAuth loginPath='/login'>
                                    <HomePage />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <RequireAuth loginPath='/login'>
                                    <PageNotFound />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path='/verify'
                            element={<Verify/>}
                        />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}
