import React from "react";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import Exclusive from "./Exclusive";
import Experience from "./Experience";
import Home from "./Home";
import Joinsteyp from "./Joinsteyp";
import Program from "./Program";
import Sat from "./Sat";
import Selection from "./Selection";
import Student from "./Student";
import Work from "./Work";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Home />
            <Sat />
            <Program />
            <Student />
            <Joinsteyp />
            <Work />
            <Selection />
            <Exclusive />
            <Experience />
            <Footer />
        </div>
    );
};

export default LandingPage;
