import React from "react";
import styled from "styled-components";

//Images
import UICertificate from "../../assets/image/UI_Engineer.jpg";
import StarImg from "../../assets/image/star.ef254f4e.svg";

function Certification() {
    return (
        <Certificate>
            <Container>
                <Box>
                    <Left>
                        <ImgContainer>
                            <img src={UICertificate} alt="" />
                        </ImgContainer>
                    </Left>
                    <Right>
                        <Content>
                            <Side>
                                <h5>UI Engineer Certification</h5>
                                <p>
                                    You have completed your course. Now you can
                                    apply for a certificate.
                                </p>
                                <Bottom>
                                    <BoxLeft>
                                        <p>Started </p>
                                        <p className="color">2 Dec 2021</p>
                                    </BoxLeft>
                                    <BoxRight>
                                        <p>Completed</p>
                                        <p className="color">21 May 2022</p>
                                    </BoxRight>
                                </Bottom>
                            </Side>
                            <Star>
                                <a href="#">
                                    9
                                    <img src={StarImg} alt="Star" />
                                    <p className="score">Total Score</p>
                                </a>
                                <Button>View Certificate</Button>
                            </Star>
                        </Content>
                    </Right>
                </Box>
            </Container>
        </Certificate>
    );
}

export default Certification;
const Certificate = styled.div`
    padding-left: 255px;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
`;
const Container = styled.div`
    @media all and (max-width: 1280px) {
        width: 60%;
    }
`;
const Left = styled.div``;
const ImgContainer = styled.div`
    width: 300px;
    margin-right: 25px;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
    @media all and (max-width: 1280px) {
        width: 100%;
    }

    img {
        width: 100%;
        display: block;
    }
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: rgb(249, 249, 251);
    border: 1px solid rgb(224, 224, 224);
    padding: 25px;
    border-radius: 6px;
    @media all and (max-width: 1280px) {
        width: 100%;
    }
`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media all and (max-width: 1280px) {
        flex-direction: column;
    }
    @media all and (max-width: 1080px) {
        width: 100%;
    }
`;
const Side = styled.div`
    width: 65%;

    h5 {
        font-size: 18px;
        color: rgb(57, 56, 56);
        font-family: "Baloo Paaji 2";
    }
    p {
        font-size: 15px;
        font-family: "Baloo Paaji 2";
        color: rgb(106, 106, 106);
        max-width: 83%;
        @media all and (max-width: 1280px) {
            width: 32%;
            position: absolute;
        }
    }
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.3em;
    justify-content: space-evenly;
    padding: 10px;
    min-height: 42px;
    border: 2px dashed rgb(16, 167, 112);
    background-color: rgb(231, 255, 246);
    border-radius: 5px;
    margin-right: 30px;
    margin-top: 40px;
    @media all and (max-width: 1080px) {
        width: 100%;
    }

    h5 {
        font-size: 14px;
        font-family: goridita_regular;
        color: rgb(16, 167, 112);
        font-style: italic;
        line-height: 1.3em;
    }
`;
const Star = styled.div`
    width: 35%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    a {
        font-size: 45px;
        font-family: "Baloo Paaji 2";
        color: rgb(248, 193, 70);
        margin-right: 5px;
        display: inline-block;
        line-height: 1em;
        margin-bottom: 15px;
        text-align: center;
        p.score {
            font-size: 14px;
            font-family: "Baloo Paaji 2";
            color: rgb(106, 106, 106);
        }
        @media all and (max-width: 1280px) {
            position: relative;
            left: 200px;
            top: -156px;
            right: 0;
        }
    }
`;

const Button = styled.div`
    display: flex;

    align-items: center;

    justify-content: center;
    font-size: 16px;
    font-family: "Baloo Paaji 2";
    color: rgb(255, 255, 255);
    background-color: rgb(15, 167, 111);
    border-radius: 5px;
    width: 230px;
    height: 40px;
    text-align: center;
    cursor: pointer;
`;
const Box = styled.div`
    display: flex;
    height: 100%;
    background-color: rgb(255, 255, 255);
    padding: 25px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 9px;
    @media all and (max-width: 1280px) {
        flex-direction: column;
    }
`;
const BoxLeft = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    p.color {
        font-size: 13px;
        font-family: baloo_paaji_2semiBold;
        color: rgb(16, 167, 112);
        font-style: italic;
        line-height: 1.3em;
    }
    p {
        font-size: 14px;
        color: rgb(106, 106, 106);
        font-family: baloo_paaji_2semiBold;
        margin-right: 5px;
        line-height: 1.3em;
    }
`;
const BoxRight = styled.div`
    display: flex;
    align-items: center;

    p.color {
        font-size: 13px;
        font-family: baloo_paaji_2semiBold;
        color: rgb(16, 167, 112);
        font-style: italic;
        line-height: 1.3em;
    }
    p {
        font-size: 14px;
        color: rgb(106, 106, 106);
        font-family: baloo_paaji_2semiBold;
        margin-right: 5px;
        line-height: 1.3em;
    }
`;
