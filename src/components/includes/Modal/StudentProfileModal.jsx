import React, { useEffect } from "react";
import styled from "styled-components";
import $ from "jquery";
import LinkImage from "../../../assets/image/fathima.jpg";
import Linkedn from "../../../assets/image/linkedin-white.svg";

function StudentProfileModal({ handleSuccessModal, isModal }) {
    useEffect(() => {
        if (isModal) {
            $("html").addClass("modal-enabled");
        } else {
            $("html").removeClass("modal-enabled");
        }
    }, [isModal]);
    return (
        <MainContainer>
            {isModal ? (
                <Overlay onClick={() => handleSuccessModal()}></Overlay>
            ) : (
                ""
            )}
            <BackContainer style={{ transform: isModal && "scale(1,1)" }}>
                <Modal type="textarea">
                    <Profile>
                        <Wrapper className="wrapper">
                            <ContentBox>
                                <Top>
                                    <ImgContainer>
                                        <LinkednImg
                                            src={LinkImage}
                                            alt="Club"
                                        />
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
                                        I always wanted to learn a programming
                                        language. After joining steyp made me a
                                        step closer to my target. Steyp’s
                                        teaching method made programming
                                        languages easier to learn and
                                        understand. Experts clarify the doubts
                                        that arise from the video. Steyp is the
                                        best choice to learn programming
                                        languages. It helps alot.
                                    </p>
                                </Bottom>
                                <SpanLine></SpanLine>
                            </ContentBox>
                        </Wrapper>
                    </Profile>
                </Modal>
            </BackContainer>
        </MainContainer>
    );
}
export default StudentProfileModal;

const BackContainer = styled.div`
    position: fixed;
    transition: 0.3s;
    transform: scale(0, 0);
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    right: 0;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: 0px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
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
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const Modal = styled.div`
    width: 90%;
    max-width: 490px;
    margin: 0 auto;
    /* height: 90vh; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    transition: 0.5s;
    z-index: 101;
    border-radius: 5px;
    background: #fff;
    @media all and (max-width: 1280px) {
        width: 520px;
    }
    @media all and (max-width: 1080px) {
        width: 500px;
    }
    @media all and (max-width: 980px) {
        width: 650px;
    }
    @media all and (max-width: 768px) {
        width: 480px;
    }
    @media all and (max-width: 640px) {
        width: 400px;
    }
    @media all and (max-width: 480px) {
        width: 340px;
    }
    @media all and (max-width: 360px) {
        width: 300px;
    }
`;
const MainContainer = styled.div``;
const Container = styled.div`
    padding: 40px;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @me dia all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        padding: 30px;
    }
    @media all and (max-width: 480px) {
        padding: 15px;
    }
    @media all and (max-width: 360px) {
    }
`;
const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
    border-bottom: 2px solid #e7e7e7;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const Text = styled.div`
    color: #0a4771;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: "outfit_medium";
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        font-size: 17px;
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const ImageContainer = styled.div`
    width: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    & img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
    }
    @media all and (max-width: 360px) {
    }
`;
const CoverText = styled.div`
    display: flex;
    align-items: center;
`;
const CoverImage = styled.div`
    width: 40px;
    margin-right: 10px;
    margin-bottom: 20px;
    img {
        width: 100%;
        display: block;
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
    }
    @media all and (max-width: 480px) {
        width: 30px;
    }
    @media all and (max-width: 360px) {
    }
`;
const TextLen = styled.div`
    margin-bottom: 50px;
    color: #6b6b6b;
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
    }
    @media all and (max-width: 768px) {
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
    }
    @media all and (max-width: 480px) {
        margin-bottom: 30px;
    }
    @media all and (max-width: 360px) {
    }
`;
// const Bottom = styled.div`
//     display: flex;
//     justify-content: flex-end;
// `;
const Profile = styled.div`
    /* margin-top: 100px;
    margin: 0 auto;
    position: relative; */
`;
const Wrapper = styled.div`
    /* width: 650px;
    max-height: 90vh;
    overflow: hidden;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */

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
