import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './components/Header';
import App from './components/App';
import Item from './components/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <App/>
    </React.StrictMode>
);