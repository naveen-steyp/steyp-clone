import React from "react";
//Packages
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../../App.css";
//Images
import BlueTick from "../../assets/image/top-tick.svg";
import RedTick from "../../assets/image/red-tick.svg";
import GreenTick from "../../assets/image/green-tick.svg";
import YellowTick from "../../assets/image/bottom-tick.svg";
import RightImage from "../../assets/image/techie-club.png";
import ArrowImg from "../../assets/image/arrow.svg";

function Work() {
    return (
        <WorkContainer>
            <Fade left>
                <Wrapper className="wrapper">
                    <Left>
                        <h2>
                            Why are we <br /> checking your{" "}
                            <span>ELIGIBILITY?</span>{" "}
                        </h2>
                        <Job>
                            <ImageContainer>
                                <img src={BlueTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                <h3>Unemployment ratio is increasing</h3>
                                <p>
                                    Students take up Engineering due to peer
                                    pressure and other irrelevant reasons.
                                </p>
                            </Description>
                        </Job>
                        <Job>
                            <ImageContainer>
                                <img src={RedTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                <h3>Lack of skilled work force</h3>
                                <p>
                                    A lot of students completes Engineering but
                                    fails to pursue needed skills for the
                                    industry.
                                </p>
                            </Description>
                        </Job>
                        <Job>
                            <ImageContainer>
                                <img src={GreenTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                <h3>The right person for the right job</h3>
                                <p>
                                    It is high time to realize that if we
                                    encourage students what they want to pursue,
                                    society will get the right persons for the
                                    right duties.
                                </p>
                            </Description>
                        </Job>
                        <Job>
                            <ImageContainer>
                                <img src={YellowTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                <h3>
                                    Not everyone are meant to become Engineers
                                </h3>
                                <p>
                                    Only the capable, deserving, and passionate
                                    students grows to become an Engineer.
                                </p>
                            </Description>
                        </Job>

                        <Button>
                            Apply for SAT
                            <SpanImg className="Arrow">
                                <SpanImage src={ArrowImg} alt="Arrow" />
                            </SpanImg>
                        </Button>
                    </Left>

                    <Right>
                        <RightImg src={RightImage} alt="Sideimg" />
                    </Right>
                </Wrapper>
            </Fade>
        </WorkContainer>
    );
}

export default Work;
const WorkContainer = styled.div`
    margin-top: 100px;
    @media all and (max-width: 640px) {
        margin-top: 25px;
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
    width: 48%;
    @media all and (max-width: 980px) {
        width: 85%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 34px;
        font-family: goridita_medium;
        position: relative;
        @media all and (max-width: 1280px) {
            font-size: 30px;
        }
        @media all and (max-width: 1080px) {
            font-size: 28px;
        }
        @media all and (max-width: 980px) {
            margin-bottom: 50px;
        }
        @media all and (max-width: 640px) {
            font-size: 23px;
        }
        @media all and (max-width: 480px) {
            font-size: 18px;
        }

        &::before {
            content: "";
            position: absolute;
            top: -75px;
            left: -50px;
            width: 300px;
            height: 300px;
            display: block;
            z-index: -1;
            background: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/22-09-2021/color.png)
                0% 0% / contain no-repeat;

            @media all and (max-width: 640px) {
                display: none;
            }
        }
    }
    span {
        color: rgb(78, 175, 124);
    }
`;
const Job = styled.div`
    display: flex;
    margin-bottom: 25px;
    @media all and (max-width: 980px) {
        margin-top: 25px;
    }
`;
const ImageContainer = styled.span`
    min-width: 40px;
    margin-right: 30px;
    margin-bottom: 25px;
    @media all and (max-width: 480px) {
        margin-right: 10px;
    }

    img {
        width: 100%;
        display: block;
    }
`;
const Description = styled.div`
    h3 {
        margin-bottom: 15px;
        font-size: 22px;
        font-family: goridita_medium;
        @media all and (max-width: 640px) {
            font-size: 16px;
        }
        @media all and (max-width: 480px) {
            font-size: 14px;
        }
    }
    p {
        margin-bottom: 10px;
        @media all and (max-width: 480px) {
            font-size: 13px;
        }
    }
`;

const Right = styled.div`
    width: 48%;

    @media all and (max-width: 1280px) {
        margin-top: 226px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 768px) {
        margin-top: 88px;
    }

    @media all and (max-width: 640px) {
        margin-top: 43px;
    }
    @media all and (max-width: 480px) {
        margin-top: 55px;
    }
`;
const RightImg = styled.img`
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
    @media all and (max-width: 480px) {
        width: 157px;
        height: 44px;
    }
    &:hover .Arrow {
        /* display: block; */
        width: 20px;
        transition: 0.2s ease-in;
    }
    @media all and (max-width: 1080px) {
        margin: 0 auto;
    }
    @media all and (max-width: 980px) {
        margin: unset;
    }
    @media all and (max-width: 480px) {
        margin: 0 auto;
    }
`;
const SpanImg = styled.div`
    width: 0;
`;

const SpanImage = styled.img`
    width: 100%;
    display: block;
`;
