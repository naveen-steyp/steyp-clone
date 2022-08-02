import React from "react";
import { useState } from "react";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import Certification from "./Certification";
import LearningDashboard from "./LearningDashboard";

function CerticateMain() {
    const [click, setClick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setClick} />
            <LearningDashboard />
            <DashSlider click={click} />
            <Certification />
        </div>
    );
}

export default CerticateMain;
