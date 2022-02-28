import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home_st from './pages/home_students';
import Home_teacher from './pages/home_teacher';
import Quiz from './pages/quiz';
import MakeQuiz_th from './pages/makequiz';
import Classroom_Teacher from './pages/classroom_th';
import Classroom_Students from './pages/classroom_st';
import SignUp from './pages/signup';
import Profile from './pages/profile';
import CardProfile from './pages/test_profile';
import Friends from './pages/friends';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to ="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home_th" element={<Home_teacher/>}/>
        <Route path="/home_st" element={<Home_st />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/quizth" element={<MakeQuiz_th />}/>
        <Route path="/classroom_th" element={<Classroom_Teacher />}/>
        <Route path="/classroom_st" element={<Classroom_Students />}/>
        <Route path="/friends" element={<Friends />}/>
        <Route path="/testprofile" element={<CardProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


