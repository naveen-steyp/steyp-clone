import React from "react";
import { useState } from "react";
import DashTech from "../../screens/DashTech";
import DashSlider from "../DashSlider";
import TechSchool from "./TechSchool";

const DashboardMain = () => {
    const [click, setClick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setClick} />
            <DashSlider click={click} />
            <DashTech />
        </div>
    );
};

export default DashboardMain;
