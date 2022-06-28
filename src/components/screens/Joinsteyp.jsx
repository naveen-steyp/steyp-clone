import React from "react";
//packages
import styled from "styled-components";
import Fade from "react-reveal/Fade";
//images
import LeftImage from "../../assets/image/who-can-banner.png";
import BlueTick from "../../assets/image/top-tick.svg";
import RedTick from "../../assets/image/red-tick.svg";
import GreenTick from "../../assets/image/green-tick.svg";
import YellowTick from "../../assets/image/bottom-tick.svg";
import Arrow from "../../assets/image/arrow.svg";

function Joinsteyp() {
    return (
        <Student>
            <Fade right big>
                <Wrapper className="wrapper">
                    <Left>
                        <LeftImg src={LeftImage} alt="Sideimg" />
                    </Left>
                    <Right>
                        <h2>
                            Who can join in <span>Steyp?</span>
                        </h2>
                        <Sat>
                            <ImageContainer>
                                <Img src={BlueTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                Students who are studying from Class 5 and above
                            </Description>
                        </Sat>
                        <Sat>
                            <ImageContainer>
                                <Img src={RedTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                Students who are Tech Enthusiasts
                            </Description>
                        </Sat>
                        <Sat>
                            <ImageContainer>
                                <Img src={GreenTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                Students who are studying from Class 5 and above
                            </Description>
                        </Sat>
                        <Sat>
                            <ImageContainer>
                                <Img src={YellowTick} alt="Image" />
                            </ImageContainer>
                            <Description>
                                Students who has a laptop or a desktop for day
                                to day studies and practice
                            </Description>
                        </Sat>
                        <Button>
                            Apply for Sat
                            <Span className="Arrow">
                                <SpanImage src={Arrow} alt="Arrow" />
                            </Span>
                        </Button>
                    </Right>
                </Wrapper>
            </Fade>
        </Student>
    );
}

export default Joinsteyp;
const Student = styled.div`
    padding: 100px 0px;
    background: rgb(249, 249, 249);
    margin-top: 100px;
    @media all and (max-width: 640px) {
        /* padding: 25px 25px; */
        margin-top: 20px;
        padding: 19px 0;
    }
`;

const Wrapper = styled.div`
    width: 85%;
    max-width: 1325px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
const Left = styled.div``;
const LeftImg = styled.img`
    width: 100%;
    display: block;
`;
const Right = styled.div`
    h2 {
        font-size: 34px;
        margin-bottom: 35px;
        font-family: goridita_medium;
        @media all and (max-width: 1280px) {
            font-size: 30px;
        }
        @media all and (max-width: 480px) {
            font-size: 26px;
        }

        span {
            color: rgb(14, 159, 106);
        }
    }
    img {
        width: 33px;
        margin-bottom: 20px;
    }
`;
const Sat = styled.div`
    display: flex;
    align-items: center;
`;
const ImageContainer = styled.div``;
const Img = styled.img`
    width: 33px;
    display: block;
`;
const Description = styled.div`
    color: rgb(89, 89, 89);
    margin-bottom: 20px;
    margin-left: 20px;
    font-size: 16px;
    font-family: goridita_medium;
    @media all and (max-width: 1280px) {
        font-size: 15px;
    }
    @media all and (max-width: 480px) {
        font-size: 13px;
    }
`;
const Button = styled.div`
    margin: 35px auto 0px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    /* padding: 15px 14px; */
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
    img {
        width: 0px;
    }
    @media all and (max-width: 480px) {
        width: 157px;
        height: 44px;
    }

    &:hover .Arrow {
        img {
            width: 20px;
            transition: 0.2s ease-in;
        }
    }
    @media all and (max-width: 768px) {
        margin: 0 auto;
    }
`;

const SpanImage = styled.img`
    display: inline-block;
    margin-top: 20px;
`;
const Span = styled.div``;
