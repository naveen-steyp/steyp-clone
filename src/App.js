import logo from "./logo.svg";
import "./App.css";

import Header from "./components/includes/Header";
import Home from "./components/screens/Home";
import Sat from "./components/screens/Sat";
import Student from "./components/screens/Student";
import Joinsteyp from "./components/screens/Joinsteyp";
import Work from "./components/screens/Work";
import Selection from "./components/screens/Selection";
import Exclusive from "./components/screens/Exclusive";
import Experience from "./components/screens/Experience";
import Program from "./components/screens/Program";
import Footer from "./components/includes/Footer";
import LinkednProfile from "./components/includes/Modal/LinkednProfile";
import React, { useState } from "react";
import LoginPage from "./components/includes/LoginPage";
import Map from "./components/screens/Map";
import TechSchool from "./components/includes/Modal/TechSchool";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/screens/LandingPage";
import DashSlider from "./components/includes/DashSlider";
import DashTech from "./components/screens/DashTech";
import LearningDashboard from "./components/screens/LearningDashboard";
import DashAchievements from "./components/screens/DashAchievements";
import DashboardMain from "./components/includes/Modal/DashboardMain";
import TechDashmain from "./components/screens/TechDashmain";
import Professions from "./components/screens/Professions";
import Practice from "./components/screens/Practice";
import ProfessionMain from "./components/screens/ProfessionMain";
import PractiseMain from "./components/screens/PractiseMain";
import WorkShop from "./components/screens/WorkShop";
import WorkshopMain from "./components/screens/WorkshopMain";
import Assesgment from "./components/screens/Assesgment";
import AssesmentMain from "./components/screens/AssesmentMain";
import NewContent from "./components/screens/NewContent";
import NewMain from "./components/screens/NewMain";
import Certification from "./components/screens/Certification";
import CerticateMain from "./components/screens/CerticateMain";
import FreeGround from "./components/screens/FreeGround";
import FreegroundMain from "./components/screens/FreegroundMain";
import Challenge from "./components/screens/Challenge";
import ChallengeMain from "./components/screens/ChallengeMain";
import ChatBox from "./components/screens/ChatBox";
import ChatMain from "./components/screens/ChatMain";

function App() {
    const [isModal, setModal] = useState(false);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<DashboardMain />} />
                    <Route path="/techschool" element={<TechDashmain />} />
                    <Route path="/learning" element={<ProfessionMain />} />
                    <Route path="/practises" element={<PractiseMain />} />
                    <Route path="/Workshops" element={<WorkshopMain />} />
                    <Route path="/Landingpage" element={<LandingPage />} />
                    <Route path="/Assessments" element={<AssesmentMain />} />
                    <Route path="/Skills" element={<NewMain />} />
                    <Route path="/Certification" element={<CerticateMain />} />
                    <Route path="/FreeGround" element={<FreegroundMain />} />
                    <Route path="/Challenges" element={<ChallengeMain />} />
                    <Route path="/chat-with-rm" element={<ChatMain />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
