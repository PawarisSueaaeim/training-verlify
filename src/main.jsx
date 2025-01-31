import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider
            authType={'cookie'}
            authName={'_auth'}
            cookieDomain={window.location.hostname}
            cookieSecure={false}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>,
)
