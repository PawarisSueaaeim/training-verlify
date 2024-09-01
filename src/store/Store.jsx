import { configureStore } from '@reduxjs/toolkit';
import authStateValue from './reducer/AuthSlice';

export default configureStore({
    reducer: {
        authStateValue,
    }
})