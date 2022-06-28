import React from "react";
import { useState } from "react";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import LearningDashboard from "./LearningDashboard";
import Practice from "./Practice";

function PractiseMain() {
    const [click, setClick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setClick} />
            <LearningDashboard />
            <DashSlider click={click} />
            <Practice />
        </div>
    );
}

export default PractiseMain;
