import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../../assets/Lotties/8823-user.json";

//Images
import SteypImage from "../../../assets/image/steyp-logo.svg";
import CoinImage from "../../../assets/image/bx-coin-stack.svg";
import PlusImage from "../../../assets/image/bx-plus.svg";
import MailImage from "../../../assets/image/messages.svg";
import IconImage from "../../../assets/image/polygon.svg";
import { Link } from "react-router-dom";
import MenuImg from "../../../assets/image/menu-icon.svg";
import { useState } from "react";

function TechSchool({ click, setClick }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Steyp>
            <Container>
                <Header>
                    <Left>
                        <Menu
                            onClick={() => {
                                click ? setClick(false) : setClick(true);
                            }}
                        >
                            <img src={MenuImg} alt="MenuImg" />
                        </Menu>
                        <h1>
                            <Link to="/LandingPage">
                                <img src={SteypImage} alt="SteypImage" />
                            </Link>
                        </h1>
                    </Left>
                    <Right>
                        <Coins>
                            <a href="#">
                                <Coin>
                                    <span className="icon">
                                        <img src={CoinImage} alt="CoinImage" />
                                    </span>
                                    <h5>5 Coins</h5>
                                    <span className="Plus">
                                        <img src={PlusImage} alt="PlusImage" />
                                    </span>
                                </Coin>
                            </a>
                        </Coins>
                        <Box>
                            <Mail>
                                <img src={MailImage} alt="MailImage" />
                            </Mail>
                            <IconContainer>
                                <Lottie
                                    options={defaultOptions}
                                    height={25}
                                    width={25}
                                />
                            </IconContainer>

                            <Name>
                                <span className="name">Naveen Nissar</span>
                                <span className="icons">
                                    <img src={IconImage} alt="MailImage" />
                                </span>
                            </Name>
                        </Box>
                    </Right>
                </Header>
            </Container>
            {/* <Bottom>
                <Left>
                    <Top>
                        <a href="#">
                            <img src={DashImage} alt="DashImage" />
                            <span>DashBoard</span>
                        </a>
                    </Top>
                </Left>
            </Bottom> */}
        </Steyp>
    );
}

export default TechSchool;
const Steyp = styled.div`
    margin-top: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 10000;
`;
const Container = styled.div`
    align-items: center;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 18px;

    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    z-index: 99;
    background: rgb(249, 249, 251);

    align-items: inherit;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    h1 {
        width: 100px;
        margin-right: 33px;
        @media all and (max-width: 1280px) {
            width: 74px;
            margin-left: 20px;
        }
    }
`;
const Right = styled.div`
    display: flex;
`;
const Coins = styled.div`
    padding: 6px 16px;
    background: linear-gradient(
        90deg,
        rgb(255, 235, 59) 0%,
        rgb(255, 249, 196) 100%
    );
    @media all and (max-width: 1280px) {
        display: none;
    }
    border-radius: 26px 5px 5px 26px;
    margin-right: 25px;
    display: flex;
    padding-right: 23px;
    height: 45px;

    align-items: center;
    color: rgb(51, 51, 51);
    cursor: pointer;
`;
const Coin = styled.div`
    display: flex;
    align-items: center;
    h5 {
        font-size: 14px;
        margin: 0px 12px 0px 6px;
    }
`;
const Mail = styled.div`
    display: flex;
    align-items: center;
    padding-right: 18px;

    img {
        cursor: pointer;
        display: block;
        width: 20px;
        max-height: 19px;
    }
`;
const Name = styled.div`
    display: flex;
    align-items: center;
    .name {
        margin-left: 13px;
        font-size: 14px;
    }
    .icons {
        margin-right: 25px;
    }
`;
const Box = styled.div`
    display: flex;
`;
const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Menu = styled.div`
    display: none;

    @media all and (max-width: 1280px) {
        display: block;
        width: 19px;
        cursor: pointer;
        img {
            width: 100%;
            display: block;
        }
    }
`;
