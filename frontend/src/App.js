import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home_st from './pages/home_students';
import Home_teacher from './pages/home_teacher';
import Quiz from './pages/quiz';
import MakeQuiz_th from './pages/makequiz';
import Classroom_Teacher from './pages/classroom_th';
import Classroom_Students from './pages/classroom_st';
import Profile from './pages/profile';
import CardProfile from './pages/test_profile';
import Friends from './pages/friends';
import Member_th from './pages/member_th'; 
import Score_st from './pages/score_st';
import Score_th from './pages/score_th';
import SignUp_Type from './pages/signup_type';
import SignUp_TH from './pages/signup_th';
import SignUp_ST from './pages/signup_st';
import Profile_th from './pages/profile_th';
import Quizmade from './pages/quizmade';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to ="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp_Type/>}/>
        <Route path="/signup/student" element={<SignUp_ST/>}/>
        <Route path="/signup/teacher" element={<SignUp_TH/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile_th" element={<Profile_th/>}/>
        <Route path="/home_th" element={<Home_teacher/>}/>
        <Route path="/home_st" element={<Home_st />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/quizth" element={<MakeQuiz_th />}/>
        <Route path="/classroom_th" element={<Classroom_Teacher />}/>
        <Route path="/classroom_st" element={<Classroom_Students />}/>
        <Route path="/friends" element={<Friends />}/>
        <Route path="/member_th" element={<Member_th/>}/>
        <Route path="/testprofile" element={<CardProfile />}/>
        <Route path="/score_st" element={<Score_st />}/>
        <Route path="/score_th" element={<Score_th />}/>
        <Route path="/quizmade" element={<Quizmade />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


