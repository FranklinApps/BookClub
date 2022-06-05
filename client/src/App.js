import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main.js'
import DetailedUser from './components/DetailedUser.js';
// import UpdateUser from './components/UpdateUser.js';
import UserForm from './components/UserForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/'/>
        <Route element={<DetailedUser/>} path='/user/:id'/>
        {/* <Route element={<UpdateUser/>} path='/user/edit/:id'/> */}
        <Route element={<UserForm/>} path= '/user/new/'/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
