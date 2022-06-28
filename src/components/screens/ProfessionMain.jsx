import React from "react";
import { useState } from "react";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import LearningDashboard from "./LearningDashboard";
import Professions from "./Professions";

function ProfessionMain() {
    const [click, setclick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setclick} />
            <LearningDashboard />
            <DashSlider click={click} />
            <Professions />
        </div>
    );
}

export default ProfessionMain;
