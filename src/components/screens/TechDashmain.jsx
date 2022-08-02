import React, { useState } from "react";
import Slider from "react-slick";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import DashAchievements from "./DashAchievements";
import LearningDashboard from "./LearningDashboard";

const TechDashmain = () => {
    const [click, setClick] = useState(false);

    return (
        <div>
            <TechSchool setClick={setClick} click={click} />
            <LearningDashboard />
            <DashAchievements />
            <DashSlider click={click} />
        </div>
    );
};

export default TechDashmain;
