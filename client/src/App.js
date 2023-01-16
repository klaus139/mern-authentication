import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import {ToastContainer} from 'react-toastify';
import DataProvider from './context/authContext';
function App() {
  return (
    <React.Fragment>
        <DataProvider>
        <ToastContainer />
        <Router>
            <Routes>
                <Route path='/' element={<Register/>} />
                <Route path='/home' element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
        </DataProvider>
    </React.Fragment>
  );
}

export default App;