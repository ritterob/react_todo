import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import Todos from './components/Todos/Todos';
import Notfound from './components/NotFound/Notfound';
import Navigation from './components/Navigation';
import AuthProvider from './contexts/AuthContext';

export default function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route to='/' element={<Login />} />
                        <Route to='/login' element={<Login />} />
                        <Route to='/categories' element={<Categories />} />
                        <Route to='/todos' element={<Todos />} />
                        <Route to='/*' element={<Notfound />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}
