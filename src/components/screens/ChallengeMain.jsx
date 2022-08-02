import React, { useState } from "react";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import Challenge from "./Challenge";

function ChallengeMain() {
    const [click, setClick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setClick} />
            <Challenge />
            <DashSlider click={click} />
        </div>
    );
}

export default ChallengeMain;
