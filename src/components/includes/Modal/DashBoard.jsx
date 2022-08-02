import React from "react";
import styled from "styled-components";
import $ from "jquery";

//Images
import SteypImage from "../../../assets/image/steyp-logo.svg";
import ProgramImage from "../../../assets/image/programs.svg";
import CompanyImage from "../../../assets/image/company.svg";
import CommunityImage from "../../../assets/image/community.svg";
import CloseImage from "../../../assets/image/close.svg";
import { useState, useEffect } from "react";

function DashBoard({ isDash, setDash }) {
    useEffect(() => {
        if (isDash) {
            $("html").addClass("modal-enabled");
        } else {
            $("html").removeClass("modal-enabled");
        }
    }, [isDash]);
    return (
        <>
            {isDash ? <Overlay></Overlay> : ""}
            <Board className={isDash ? "active" : ""}>
                <Wrapper className="wrapper">
                    <h1>
                        <a href="#">
                            <SteypImg src={SteypImage} alt="Sideimg" />
                        </a>
                    </h1>
                    <close onClick={() => setDash(false)}>
                        <CloseImg src={CloseImage} alt="Sideimg" />
                    </close>
                    <Bottom>
                        <Left>
                            <Program>
                                <span>
                                    <ProgramImg
                                        src={ProgramImage}
                                        alt="Program"
                                    />
                                </span>
                                <h3>Programs</h3>
                                <a href="#">Tech Schooling</a>
                                <a href="#">Tech Degree</a>
                                <a href="#">Tech Grad</a>
                                <a href="#">Challenges</a>
                            </Program>

                            <Company>
                                <span>
                                    <CompanyImg
                                        src={CompanyImage}
                                        alt="Program"
                                    />
                                </span>
                                <h3>Company</h3>
                                <a href="#">About Us</a>
                                <a href="#">Contact Us</a>
                            </Company>
                            <Community>
                                <span>
                                    <CommunityImg
                                        src={CommunityImage}
                                        alt="Program"
                                    />
                                </span>
                                <h3>Community</h3>
                                <a href="#">Talrop Talks</a>
                                <a href="#">Free Ground</a>
                            </Community>
                        </Left>
                        <Right>
                            <Button>Go to dashboard</Button>
                        </Right>
                    </Bottom>
                </Wrapper>
            </Board>
        </>
    );
}

export default DashBoard;
const Board = styled.div`
    position: absolute;
    top: -400px;
    background: #fff;
    width: 100%;
    z-index: 1000;
    &.active {
        top: 0px;
    }
    @media all and (max-width: 980px) {
        top: -445px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;

    h1 {
        width: 120px;
        position: relative;
        margin-top: 50px;
        @media all and (max-width: 980px) {
            width: 100px;
        }
        @media all and (max-width: 768px) {
            margin-top: 17px;
        }
        img {
            width: 100%;
            display: block;
        }
    }
`;
const Bottom = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 25px;
    }
`;
const Left = styled.div`
    display: flex;
    justify-content: space-around;
    width: 75%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 640px) {
        margin-bottom: 25px;
    }
`;

const Program = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 18px;
        color: rgb(112, 112, 112);
        font-family: goridita_medium;
        margin-bottom: 20px;
    }
    a {
        font-size: 14px;
        color: rgb(156, 156, 156);
        font-family: goridita_regular;
        margin-bottom: 10px;
        &:hover {
            color: rgb(78, 175, 124);
        }
    }
`;
const Company = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 18px;
        color: rgb(112, 112, 112);
        font-family: goridita_medium;
        margin-bottom: 20px;
    }
    a {
        font-size: 14px;
        color: rgb(156, 156, 156);
        font-family: goridita_regular;
        margin-bottom: 10px;
        &:hover {
            color: rgb(78, 175, 124);
        }
    }
`;
const Community = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 18px;
        color: rgb(112, 112, 112);
        font-family: goridita_medium;
        margin-bottom: 20px;
    }
    a {
        font-size: 14px;
        color: rgb(156, 156, 156);
        font-family: goridita_regular;
        margin-bottom: 10px;
        &:hover {
            color: rgb(78, 175, 124);
        }
    }
`;
const Right = styled.div`
    border-left: 1px solid #000;
    width: 25%;
    color: rgb(78, 175, 124);
    font-size: 18px;
    width: 90%;
    max-width: 250px;
    height: 60px;
    font-family: goridita_medium;
    text-align: center;
    border: 2px solid rgb(78, 175, 124);
    justify-content: center;
    align-items: center;
    display: flex;
`;
const SteypImg = styled.img``;
const ProgramImg = styled.img`
    width: 40px;
    margin-bottom: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const CompanyImg = styled.img`
    width: 40px;
    margin-bottom: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const CommunityImg = styled.img`
    width: 40px;
    margin-bottom: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const Button = styled.div``;
const CloseImg = styled.img`
    position: absolute;
    top: 56px;
    right: 176px;
    width: 25px;
    @media all and (max-width: 980px) {
        top: 52px;
        right: 42px;
    }
    @media all and (max-width: 768px) {
        top: 22px;
    }
`;
const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0px;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    filter: blur(1px);
`;
