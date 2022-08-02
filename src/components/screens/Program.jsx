import React, { useState } from "react";
// Packages
import styled from "styled-components";
import Fade from "react-reveal/Fade";

// Images
import ClubImage from "../../assets/image/club.svg";
import HubImage from "../../assets/image/hub.svg";
import DegreeImage from "../../assets/image/degree.svg";
import ArrowImg from "../../assets/image/arrow.svg";

function Program() {
    return (
        <Student>
            <Fade bottom big>
                <Wrapper className="wrapper">
                    <h2>
                        <span>Steyp's</span> Engineering program is designed for{" "}
                        <br />
                        School students, College students and Graduates
                    </h2>
                    <ContentBox>
                        <Box>
                            <span>
                                <img src={ClubImage} alt="Club" />
                            </span>
                            <h3>School Students</h3>
                            <p>Tech Schooling</p>
                            <Button>
                                Apply for SAT
                                <SpanImg className="Arrow">
                                    <SpanImage src={ArrowImg} alt="Arrow" />
                                </SpanImg>
                            </Button>
                        </Box>
                        <SpanLine></SpanLine>
                        <Box>
                            <span>
                                <img src={HubImage} alt="Club" />
                            </span>
                            <h3>College Students</h3>
                            <p>Tech Degree</p>
                            <Button>
                                Apply for SAT
                                <SpanImg className="Arrow">
                                    <SpanImage src={ArrowImg} alt="Arrow" />
                                </SpanImg>
                            </Button>
                        </Box>
                        <SpanLine></SpanLine>
                        <Box>
                            <span>
                                <img src={DegreeImage} alt="Club" />
                            </span>
                            <h3>Graduates</h3>
                            <p>Tech Grad</p>
                            <Button>
                                Apply for SAT
                                <SpanImg className="Arrow">
                                    <SpanImage src={ArrowImg} alt="Arrow" />
                                </SpanImg>
                            </Button>
                        </Box>
                        <SpanLine></SpanLine>
                    </ContentBox>
                </Wrapper>
            </Fade>
        </Student>
    );
}

export default Program;
const Student = styled.div`
    margin-top: 100px;
    @media all and (max-width: 640px) {
        margin-top: 25px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;

    h2 {
        font-size: 34px;
        margin-bottom: 30px;
        font-family: goridita_medium;
        text-align: center;
        @media all and (max-width: 1080px) {
            font-size: 32px;
        }
        @media all and (max-width: 980px) {
            font-size: 29px;
        }
        @media all and (max-width: 768px) {
            font-size: 24px;
        }
        @media all and (max-width: 640px) {
            font-size: 18px;
        }
        @media all and (max-width: 480px) {
            font-size: 13px;
        }
    }
    span {
        color: rgb(87, 194, 137);
    }
`;
const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;
const Box = styled.div`
    width: 300px;
    padding: 25px 0;
    min-width: 200px;
    border: 2px solid rgb(233, 233, 233);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    transition: 0.4s;
    align-items: center;

    p {
        margin-bottom: 10px;
        color: rgb(87, 194, 137);
    }
    &:hover {
        border: 2px solid rgb(87, 194, 137);
        margin-bottom: 10px;
        text-align: center;
        .box-btn {
            display: inline-block;
        }
    }
    &:hover .box-btn {
        display: inline-block;
    }

    span {
        width: 70px;
        margin: auto 20px;
        display: block;
    }

    img {
        width: 100%;
        display: block;
    }
`;
// const Button = styled.div`
//     /* display: none;
//     padding: 15px 14px;
//     width: 150px;
//     font-size: 15px;
//     border-radius: 5px;
//     border-style: none;
//     color: #fff;
//     cursor: pointer;
//     background: linear-gradient(
//             100deg,
//             rgb(15, 167, 111) 0%,
//             rgb(15, 158, 167) 100%
//         )
//         0% 0% no-repeat padding-box padding-box transparent;

//     &:hover {
//         display: block;
//     } */
//     width: 160px;
//     height: 0px;
//     opacity: 0;
//     background: linear-gradient(
//             100deg,
//             rgb(15, 167, 111) 0%,
//             rgb(15, 158, 167) 100%
//         )
//         0% 0% no-repeat padding-box padding-box transparent;
//     color: rgb(255, 255, 255);
//     font-family: gordita_medium;
//     display: flex;
//     -webkit-box-pack: center;
//     justify-content: center;
//     -webkit-box-align: center;
//     align-items: center;
//     font-size: 12px;
//     padding-top: 4px;
//     border-radius: 5px;
//     transition: all 0.3s ease 0s;
//     cursor: pointer;

// `;
const SpanLine = styled.div`
    width: 50px;
    height: 2px;
    display: block;
    border-bottom: 2px dashed rgb(87, 194, 137);

    &:last-child {
        display: none;
    }
    @media all and (max-width: 768px) {
        width: 2px;
        height: 50px;
        border-bottom: none;
        border-left: 2px dashed rgb(87, 194, 137);
    }
`;
const SpanImg = styled.div`
    width: 0px;
    display: block;
    transition: all 0.4s ease 0s;
    &:hover {
        width: 18px;
        margin-left: 10px;
    }
`;

const SpanImage = styled.img`
    width: 100%;
    display: block;
`;

const Button = styled.div`
    cursor: pointer;
    width: 200px;
    padding: 15px 14px;
    background: linear-gradient(
            100deg,
            rgb(15, 167, 111) 0%,
            rgb(15, 158, 167) 100%
        )
        0% 0% no-repeat padding-box padding-box transparent;
    font-size: 15px;
    color: rgb(255, 255, 255);
    font-family: goridita_medium;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    &:hover {
        width: 220px;
        height: 40px;
        opacity: 1;
    }
    &:hover .Arrow {
        /* display: block; */
        width: 20px;
        transition: 0.2s ease-in;
    }
    @media all and (max-width: 980px) {
        display: none;
        &:hover {
            display: block;
        }
    }
`;
