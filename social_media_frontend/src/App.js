import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { fetchUser } from './utils/fetchUser';
import { useEffect } from 'react';


import { Login } from './components';
import Home from './container/Home';

export const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUser();
    if(!user) navigate('/login');
  }, [])
  
  return (
    <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="/*" element={<Home/>}/>
      </Routes>
  )
}


export default App;