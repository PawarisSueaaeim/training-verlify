import React from 'react';
import Router from './router/Router'
import { Provider } from 'react-redux';
import Store from '../src/store/Store';

function App() {

    return (
        <>
            <Provider store={Store}>
                <Router />
            </Provider>
        </>
    )
}

export default App
