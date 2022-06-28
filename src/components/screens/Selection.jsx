import React from "react";
//Package
import styled from "styled-components";
import "../../App.css";
//Image
import TestImage from "../../assets/image/one.svg";
import InterviewImage from "../../assets/image/two.svg";
import ArrowImg from "../../assets/image/arrow.svg";

function Selection() {
    return (
        <Process>
            <Wrapper className="wrapper">
                <Left>
                    <h1>
                        Our <br /> selection <span>process</span>{" "}
                    </h1>
                    <p>
                        Candidates can take admissions in Steyp only through
                        qualifying SAT (Steyp’s Aptitude Test). Candidates can
                        apply for SAT online, and attend the test physically
                        from various centres where SAT is conducted.
                    </p>
                    <p>
                        There are 2 tests involved which includes a written{" "}
                        <span>Aptitude Test </span> and a{" "}
                        <span>Personal Interview</span>{" "}
                    </p>
                    <Button>
                        Apply for SAT
                        <SpanImg className="Arrow">
                            <SpanImage src={ArrowImg} alt="Arrow" />
                        </SpanImg>
                    </Button>
                </Left>

                <Right>
                    <Test>
                        <ImgContainer>
                            <img src={TestImage} alt="Image" />
                        </ImgContainer>
                        <Description>
                            <h3>Aptitude Test</h3>
                            <p>
                                A written Aptitude Test is the first process
                                where candidates will be assessed on their
                                logical thinking, tech knowledge, general
                                knowledge, and mathematical ability.
                            </p>
                        </Description>
                    </Test>

                    <Test>
                        <ImgContainer>
                            <img src={InterviewImage} alt="Image" />
                        </ImgContainer>
                        <Description>
                            <h3>Personal Interview</h3>
                            <p>
                                A Personal Interview is the next process where
                                candidates will be assessed on critical
                                thinking, situation analysis ability, and soft
                                skills.
                            </p>
                        </Description>
                    </Test>
                </Right>
            </Wrapper>
        </Process>
    );
}

export default Selection;
const Process = styled.div`
    margin-top: 100px;
    @media all and (max-width: 640px) {
        margin-top: 20px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    h1 {
        font-size: 35px;
        font-family: "goridita_medium";
        color: rgb(33, 33, 33);
        @media all and (max-width: 1080px) {
            width: unset;
            max-width: unset;
        }
        @media all and (max-width: 768px) {
            br {
                display: none;
                font-size: 18px;
            }
        }
        @media all and (max-width: 480px) {
            font-size: 25px;
        }
    }
    p {
        width: 79%;
        margin: 10px 0px 40px;
        @media all and (max-width: 480px) {
            width: 100%;
        }
    }
    span {
        color: rgb(15, 167, 111);
    }
`;

const Right = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Test = styled.div`
    padding: 30px 25px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    border: 1px solid rgba(76, 164, 115, 0.3);
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    gap: 20px;
    @media all and (max-width: 480px) {
        flex-wrap: wrap;
    }
`;
const ImgContainer = styled.div`
    min-width: 57px;
    max-width: 57px;
    @media all and (max-width: 1280px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        display: block;
    }
`;

const Description = styled.div`
    h3 {
        color: rgb(0, 0, 0);
        margin-bottom: 10px;
        font-family: goridita_medium;
    }

    p {
        font-size: 15px;
    }
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
    @media all and (max-width: 480px) {
        width: 157px;
        height: 44px;
    }
    &:hover .Arrow {
        /* display: block; */
        width: 20px;
        transition: 0.2s ease-in;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 50px;
    }
`;
const SpanImg = styled.div`
    width: 0;
`;

const SpanImage = styled.img`
    width: 100%;
    display: block;
`;
