import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home_st from './pages/home_students';
import Home_teacher from './pages/home_teacher';
import PrimarySearchAppBar from './pages/test';
import Quiz from './pages/quiz';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to ="/home_th"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home_th" element={<Home_teacher/>}/>
        <Route path="/home_st" element={<Home_st />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/test" element={<PrimarySearchAppBar/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


