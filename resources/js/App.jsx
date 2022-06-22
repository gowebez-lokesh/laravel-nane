require('./bootstrap');
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Air from './components/pagecomponent/Air';
import Dashboard from './components/pagecomponent/Dashboard';
import Flame from './components/pagecomponent/Flame';
import Land from './components/pagecomponent/Land';
import LoginMod from './components/pagecomponent/LoginMod';
import ProtectedRoute from './components/pagecomponent/protectedRoute';
import Register from './components/pagecomponent/Register';
import Sky from './components/pagecomponent/Sky';
import Water from './components/pagecomponent/Water';

const App = () => {
  return (
    <>
         <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginMod />} />
                <Route path="/register" element={<Register />} />

                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/flame" element={<Flame />} />
                  <Route path="/water" element={<Water />} />
                  <Route path="/air" element={<Air />} />
                  <Route path="/land" element={<Land />} />
                  <Route path="/sky" element={<Sky />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
