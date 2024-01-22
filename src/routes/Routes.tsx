import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AuthPage from '../pages/AuthPage';

function RootRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/login' element={<AuthPage />} />
        </Routes>
    )
}

export default RootRoutes