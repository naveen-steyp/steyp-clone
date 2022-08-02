import React from "react";
import { useState } from "react";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import FreeGround from "./FreeGround";

function FreegroundMain() {
    const [click, setClick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setClick} />
            <FreeGround />
            <DashSlider click={click} />
        </div>
    );
}

export default FreegroundMain;
