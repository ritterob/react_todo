import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Notfound from './components/NotFound/Notfound';
import AuthProvider from './contexts/AuthContext';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Categories from './components/Categories/Categories';
import Todos from './components/Todos/Todos';
import Footer from './components/Footer';
import Home from './components/Home';

export default function App() {
    return (
        <div className='App'>
            <AuthProvider>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/todos'
                            element={
                                <ProtectedRoute>
                                    <Todos />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path='/categories'
                            element={
                                <ProtectedRoute>
                                    <Categories />
                                </ProtectedRoute>
                            }
                        />
                        <Route path='/login' element={<Login />} />
                        <Route path='*' element={<Notfound />} />
                    </Routes>
                </Router>
            </AuthProvider>
            <Footer />
        </div>
    );
}
