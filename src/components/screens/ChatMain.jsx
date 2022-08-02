import React from "react";
import { useState } from "react";
import DashSlider from "../includes/DashSlider";
import TechSchool from "../includes/Modal/TechSchool";
import ChatBox from "./ChatBox";

function ChatMain() {
    const [click, setClick] = useState(false);
    return (
        <div>
            <TechSchool click={click} setClick={setClick} />
            <ChatBox />
            <DashSlider click={click} />
        </div>
    );
}

export default ChatMain;
