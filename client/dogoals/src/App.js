import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import MainLayout from './pages/MainLayout';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

function App() {
  const [userDetails,setUserDetails]=useState({});
  return (
    <Routes>
      <Route index element={<LoginPage setUserDetails={setUserDetails}/>}/>
      <Route path='/' element={<MainLayout userDetails={userDetails}/>}>
        <Route path='/home' element={<Home userDetails={userDetails} />} />
      </Route>
      <Route path='*' element={<h1>page not found</h1>} />
    </Routes>
  );
}

export default App;
