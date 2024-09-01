import { createSlice } from '@reduxjs/toolkit';

const setSessionStorage = state => sessionStorage.setItem('authStateValue', JSON.stringify(state));

const storedState = sessionStorage.getItem('authStateValue');
const initialState = storedState ? JSON.parse(storedState) : {
    auth: [],
};

const authStateValue = createSlice({
    name: 'authStateValue',
    initialState: initialState,
    reducers: {
        setAuth: (state, action) => {
            const { value } = action.payload;
            state.auth = value;
            
            setSessionStorage(state);
        },
    }
});

export const {
    setAuth,
} = authStateValue.actions;

export default authStateValue.reducer