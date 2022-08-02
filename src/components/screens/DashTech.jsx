import React from "react";

//Packages
import styled from "styled-components";

//images
import DecorImage from "../../assets/image/decor.svg";
import SideImg from "../../assets/image/sideaf.svg";
import SchoolImg from "../../assets/image/techschoolingimg.svg";
import ArrowImg from "../../assets/image/greenarrow_KMnh8MC.svg";
import DotImg from "../../assets/image/dots.svg";
import { Link } from "react-router-dom";
function DashTech() {
    return (
        <Main>
            {/* <Wrapper className="wrapper"> */}
            <Top>
                <h3>
                    <Span>Hi,</Span>Naveen Nissar 👋
                </h3>
                <span className="decor">
                    <img src={DecorImage} alt="DecorImage" />
                </span>
            </Top>
            <Middle>
                <h3>Subjects</h3>
            </Middle>
            <Bottom>
                <Tech to="/techschool">
                    <a href="#">
                        <Sideimg>
                            <img src={SideImg} alt="SideImg" />
                        </Sideimg>
                        <School>
                            <img src={SchoolImg} alt="SchoolImg" />
                        </School>
                        <h3>Tech Schooling</h3>
                        <Aroww>
                            <img src={ArrowImg} alt="ArowImg" />
                        </Aroww>
                        <Dots>
                            <img src={DotImg} alt="DotImg" />
                        </Dots>
                    </a>
                </Tech>
            </Bottom>
            {/* </Wrapper> */}
        </Main>
    );
}

export default DashTech;
const Main = styled.div`
    /* height: 100vh; */
    padding-left: 255px;
    margin-top: 85px;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
`;

const Top = styled.div`
    padding: 5px 20px;
    background-color: rgb(228, 242, 229);
    margin-top: 10px;
    display: flex;
    width: 96%;

    justify-content: space-between;

    align-items: center;

    span.decor {
        width: 70px;
        display: block;

        img {
            width: 100%;
            display: block;
        }
    }
    h3 {
        font-size: 24px;
        display: flex;
        font-family: goridita_medium;
    }
`;
const Span = styled.div``;
const Bottom = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 17px;
    padding-top: 10px;
    border-radius: 5px;
    @media all and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
    }
`;
const Tech = styled(Link)`
    border-radius: 7px;
    padding: 40px 30px;
    height: 276px;
    background-color: rgb(236, 253, 237);
    position: relative;
    padding-top: 25px;

    a {
    }
    h3 {
        font-size: 21px;
        width: 50%;
        font-family: goridita_medium;
        margin-top: 20px;
    }
`;
const Sideimg = styled.div`
    display: block;
    position: absolute;
    top: 5px;
    left: unset;
    right: 0px;
    width: 60px;
    img {
        width: 100%;
        display: block;
    }
`;
const School = styled.div`
    box-shadow: rgb(0 0 0 / 16%) 4px 3px 19px;
    border-radius: 50%;
    width: 50px;
    display: block;

    img {
        width: 100%;
        display: block;
    }
`;
const Aroww = styled.div`
    cursor: pointer;
    width: 25px;
    display: flex;

    justify-content: center;

    align-items: center;
    border-radius: 5px;
    margin-top: 60px;
`;
const Dots = styled.div`
    position: absolute;
    bottom: 8px;
    right: unset;
    left: 6px;
    width: 65px;

    img {
        width: 100%;
        display: block;
    }
`;
const Middle = styled.div`
    padding-top: 25px;
    h3 {
        font-size: 21px;
        color: rgb(10, 10, 10);
        font-family: goridita_medium;
    }
    img {
        width: 100%;
        display: block;
    }
`;
