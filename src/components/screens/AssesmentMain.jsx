import React from "react";
import { useState } from "react";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import Assesgment from "./Assesgment";
import LearningDashboard from "./LearningDashboard";

function AssesmentMain() {
    const [click, setClick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setClick} />
            <LearningDashboard />
            <DashSlider click={click} />
            <Assesgment />
        </div>
    );
}

export default AssesmentMain;
