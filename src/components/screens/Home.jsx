import React, { useState } from "react";
import styled from "styled-components";
import CoverImg from "../../assets/image/spotlight-background.png";
import RightImage from "../../assets/image/spotlight-mammookka.png";
import ArrowImg from "../../assets/image/arrow.svg";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Fade left>
            <Spotlight>
                <Wrapper className="wrapper">
                    <CoverContainer>
                        <Left>
                            <h1>
                                Creating <br />
                                Computer <span>Engineers</span> & Tech{" "}
                                <span>Scientists</span>
                            </h1>

                            <p>
                                Steyp is introducing a digital space for
                                students to learn and become the future
                                Engineers and Scientists. Steyp is looking for
                                capable students who stands out, thinks
                                differently, and keeps a spark to shine!
                            </p>
                            <Button to="/dashboard">
                                Explore
                                <SpanImg className="Arrow">
                                    <SpanImage src={ArrowImg} alt="Arrow" />
                                </SpanImg>
                            </Button>
                        </Left>
                        <Right>
                            <BackImg></BackImg>
                            <RightImageBox>
                                <img src={RightImage} alt="Mammootty" />
                            </RightImageBox>
                        </Right>
                    </CoverContainer>
                </Wrapper>
            </Spotlight>
        </Fade>
    );
}

export default Home;
const Button = styled(Link)`
    padding: 12px 14px;
    /* width: 150px; */
    width: 170px;
    text-align: center;
    font-size: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-style: none;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s ease 0s;
    background: linear-gradient(
            100deg,
            rgb(15, 167, 111) 0%,
            rgb(15, 158, 167) 100%
        )
        0% 0% no-repeat;
    @media all and (max-width: 480px) {
        width: 157px;
        height: 44px;
    }
    &:hover .Arrow {
        /* display: block; */
        width: 20px;
        transition: 0.2s ease-in;
    }
`;
const Cover = styled.div``;
const CoverContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px) {
        margin-top: 11px;
    }
`;
const Spotlight = styled.div`
    padding-top: 50px;
    background: rgb(241, 250, 255);
    display: flex;
    justify-content: space-between;
    height: 100vh;
    overflow: hidden;
    @media all and (max-width: 640px) {
        height: 87vh;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
`;
const Left = styled.div`
    max-width: 550px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 40px;
    padding-top: 50px;
    width: 50%;
    /* @media all and (max-width: 1400px) {
        margin-top: -42px;
    } */
    @media all and (max-width: 768px) {
        width: 60%;
    }
    @media all and (max-width: 640px) {
        width: 92%;
    }

    h1 {
        width: 90%;
        font-size: 44px;
        color: rgb(33, 33, 33);
        font-family: "goridita_medium";

        @media all and (max-width: 1280px) {
            font-size: 32px;
        }
        @media all and (max-width: 1080px) {
            font-size: 29px;
        }
        @media all and (max-width: 980px) {
            font-size: 38px;
            max-width: 424px;
            min-width: 424px;
        }
        @media all and (max-width: 768px) {
            font-size: 34px;
        }
        @media all and (max-width: 640px) {
            font-size: 30px;
        }
        @media all and (max-width: 480px) {
            font-size: 16px;
        }
    }
    span {
        color: rgb(15, 167, 111);
        font-family: goridita_bold;
    }
    p {
        margin: 10px 0px 0px;
        margin-bottom: 25px;
        @media all and (max-width: 768px) {
            font-size: 15px;
            margin: 20px 0px 30px;
        }
    }
    button {
    }
`;
const Right = styled.div`
    width: 70%;
    position: relative;
    @media all and (max-width: 768px) {
        width: 40%;
    }
`;
const BackImg = styled.div`
    background-image: url(${CoverImg});
    position: absolute;
    width: 700px;
    height: 700px;
    right: 0;
    top: 0;
    z-index: 1;
    background-size: contain;
    background-repeat: no-repeat;
    @media all and (max-width: 1280px) {
        right: -80px;
    }
`;
const RightImageBox = styled.div`
    width: 90%;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    background-size: cover;
    margin-top: -62px;
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 1280px) {
        width: 532px;
        margin-top: -42px;
    }
    @media all and (max-width: 1080px) {
        width: 486px;
        margin-top: 3px;
    }
    @media all and (max-width: 980px) {
        width: 408px;
        margin-top: 81px;
    }
    @media all and (max-width: 768px) {
        margin-left: -62px;
    }
    @media all and (max-width: 640px) {
        width: 251px;
        margin-top: 238px;
        margin-left: -145px;
    }
`;
const SpanImg = styled.div`
    /* display: none; */
    width: 0;
`;

const SpanImage = styled.img`
    width: 100%;
    display: block;
`;
