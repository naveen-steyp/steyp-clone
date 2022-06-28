import React from "react";
//Packages
import styled from "styled-components";
import Typed from "react-typed";
import TypeAnimation from "react-type-animation";
//Images
import RightImage from "../../assets/image/introduction-logo.png";
import Fade from "react-reveal/Fade";
import ArrowImg from "../../assets/image/arrow.svg";

function Sat() {
    return (
        <>
            <Fade bottom big>
                <Wrapper className="wrapper">
                    <Top>
                        <Left>
                            <h2>
                                {" "}
                                <span> Steyp </span>is Introducing a{" "}
                                <span className="box">learning system</span> to
                                create <br />
                                <div className="type">
                                    {/* <Typed
                                        strings={[" Tech Scientist"]}
                                        typeSpeed={30}
                                        backSpeed={40}
                                    /> */}
                                    <TypeAnimation
                                        cursor={true}
                                        sequence={[
                                            "Tech Scientist",
                                            "Computer Engineer",
                                            2000,
                                            "",
                                        ]}
                                        repeat={Infinity}
                                        wrapper="h2"
                                        className="typeanime"
                                    />
                                </div>
                            </h2>
                        </Left>
                        <Right>
                            <RightImg src={RightImage} alt="Sideimg" />
                        </Right>
                    </Top>
                    <Bottom>
                        <Box>
                            <h1>
                                Steyp's Aptitude Test <span>(SAT)</span>
                            </h1>
                            <p>
                                Steyp’s Engineering program is only for students
                                who qualifies SAT (Steyp’s Aptitude Test)
                            </p>
                            <Button>
                                Apply for SAT
                                <SpanImg className="Arrow">
                                    <SpanImage src={ArrowImg} alt="Arrow" />
                                </SpanImg>
                            </Button>
                        </Box>
                    </Bottom>
                </Wrapper>
            </Fade>
        </>
    );
}

export default Sat;
const Top = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px) {
        margin-top: 50px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
`;
const Left = styled.div`
    width: 45%;
    @media all and (max-width: 480px) {
        width: 75%;
    }

    h2 {
        text-align: left;

        font-family: goridita_medium;
        position: relative;
        font-size: 40px;
        color: rgb(45, 45, 45);
        @media all and (max-width: 1400px) {
            font-size: 35px;
        }
        @media all and (max-width: 1280px) {
            font-size: 32px;
        }
        @media all and (max-width: 1080px) {
            font-size: 29px;
        }
        @media all and (max-width: 980px) {
            font-size: 23px;
        }
        @media all and (max-width: 768px) {
            font-size: 19px;
        }
        @media all and (max-width: 640px) {
            font-size: 14px;
        }
        @media all and (max-width: 480px) {
            font-size: 15px;
        }
    }
    /* h2::after {
        content: "";
        border-radius: 6px;
        position: absolute;
        top: 50px;
        right: 159px;
        width: 328px;
        height: 50px;
        background: rgb(74, 237, 194);
        display: block;
        z-index: -1;
    } */

    span {
        color: rgb(87, 194, 137);
    }
    span {
        &.box {
            color: rgb(45, 45, 45);
        }
        &::before {
            content: "";
            border-radius: 6px;
            position: absolute;
            top: 50px;
            right: 263px;
            width: 328px;
            height: 50px;
            background: rgb(74, 237, 194);
            display: block;
            z-index: -1;
            @media all and (max-width: 1280px) {
                display: none;
            }
            @media all and (max-width: 1400px) {
                right: 165px;
            }
        }
    }
`;
const Right = styled.div`
    width: 35%;
`;
const RightImg = styled.img`
    width: 100%;
    display: block;
`;
const Bottom = styled.div`
    @media all and (max-width: 1080px) {
        margin-top: 50px;
    }
`;
const Box = styled.div`
    background-color: rgb(33, 33, 33);
    padding: 70px 0;
    text-align: center;
    h1 {
        font-size: 35px;
        color: rgb(255, 255, 255);
        @media all and (max-width: 640px) {
            font-size: 31px;
        }
        @media all and (max-width: 480px) {
            font-size: 24px;
        }
    }
    span {
        color: rgb(78, 175, 124);
    }
    p {
        width: 35%;
        color: rgb(255, 255, 255);
        margin: 0 auto;
        line-height: 1.6em;
        margin-bottom: 25px;
        color: #fff;
        @media all and (max-width: 1080px) {
            width: 64%;
            margin-top: 15px;
        }
        @media all and (max-width: 640px) {
            font-size: 15px;
            width: 80%;
            max-width: 80%;
        }
        @media all and (max-width: 480px) {
            font-size: 14px;
        }
    }
`;
const Button = styled.div`
    margin: 35px auto 0px;
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
    &:hover .Arrow {
        /* display: block; */
        width: 20px;
        transition: 0.2s ease-in;
    }
`;
const SpanImg = styled.div`
    width: 0;
`;

const SpanImage = styled.img`
    width: 100%;
    display: block;
`;
