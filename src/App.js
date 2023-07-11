import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login';
import Categories from './components/Categories/Categories';
import Todos from './components/Todos/Todos';
import Notfound from './components/NotFound/Notfound';
import Navigation from './components/Navigation';
import AuthProvider from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route to='/categories' element={<Categories />} />
                        <Route
                            to='/todos'
                            element={
                                <ProtectedRoute>
                                    <Todos />
                                </ProtectedRoute>
                            }
                        />
                        <Route to='/login' element={<Login />} />
                        <Route to='*' element={<Notfound />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}
