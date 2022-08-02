import React from "react";
import styled from "styled-components";
import LinkImage from "../../../assets/image/fathima.jpg";
import Linkedn from "../../../assets/image/linkedin-white.svg";

function LinkednProfile() {
    return (
        <Profile>
            <Wrapper className="wrapper">
                <ContentBox>
                    <Top>
                        <ImgContainer>
                            <LinkednImg src={LinkImage} alt="Club" />
                        </ImgContainer>
                        <h3>Fathimath Summaya</h3>
                        <p>SA-ADIYA</p>
                        <a href="">
                            <span className="img">
                                <img src={Linkedn} alt="Link " />
                            </span>
                            <p>Linkedin Profile</p>
                        </a>
                    </Top>
                    <Bottom>
                        <p>
                            I always wanted to learn a programming language.
                            After joining steyp made me a step closer to my
                            target. Steyp’s teaching method made programming
                            languages easier to learn and understand. Experts
                            clarify the doubts that arise from the video. Steyp
                            is the best choice to learn programming languages.
                            It helps alot.
                        </p>
                    </Bottom>
                    <SpanLine></SpanLine>
                </ContentBox>
            </Wrapper>
        </Profile>
    );
}

export default LinkednProfile;
const Profile = styled.div`
    margin-top: 100px;
    margin: 0 auto;
    position: relative;
`;
const Wrapper = styled.div`
    width: 650px;
    max-height: 90vh;
    overflow: hidden;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    padding: 40px;
    border-radius: 10px;
    transition: all 0.5s ease 0s;
    z-index: 101;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;
const Top = styled.div`
    margin-top: 20px;
    a {
        display: flex;
        align-items: center;
        width: 160px;
        background-color: rgb(43, 126, 188);
        height: 35px;
        -webkit-box-pack: center;
        justify-content: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 20px auto 0px;
    }

    h3 {
        font-size: 20px;
        text-align: center;
        font-family: goridita_medium;
        margin-top: 20px;
    }
    p {
        font-size: 14px;
        text-align: center;
    }
`;
const ContentBox = styled.div``;

const ImgContainer = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0px auto;
`;
const LinkednImg = styled.img`
    width: 100%;
    display: block;
`;
const Bottom = styled.div`
    margin-top: 40px;
    text-align: center;

    p {
        font-size: 16px;
        line-height: 1.6em;
        margin-bottom: 20px;
        position: relative;

        ::before {
            content: "";
            position: absolute;
            background: url("../../../assets/image/quotes.svg");
            left: 0px;
            top: -18px;
            color: rgb(45, 45, 45);
            width: 10px;
            display: block;
        }
    }
`;
const SpanLine = styled.div`
    width: 100%;
    border-top: 5px solid rgb(90, 199, 139);
    border-bottom: 5px solid rgb(69, 158, 123);
    position: absolute;
    bottom: 0px;
    left: 0px;
`;
