import React from "react";
import styled from "styled-components";

//Images
import NationImg from "../../assets/image/nation.png";
import ArrowImg from "../../assets/image/arrow black.svg";
import PhoneImg from "../../assets/image/phone.svg";
import CloseImg from "../../assets/image/close.svg";

function LoginPage({ isActive, setActive }) {
    return (
        <>
            {isActive ? <Overlay></Overlay> : ""}
            <ContainerBox type={isActive}>
                <Close onClick={() => setActive(!isActive)}>
                    <img src={CloseImg} alt="Close" />
                </Close>
                <Box>
                    <Span className="close"></Span>
                    <Login>
                        <Page>
                            <h4>Login to your account</h4>
                            <p>Enter your registered phone number</p>
                            <Number>
                                <Nation>
                                    <NationImage src={NationImg} alt="Arrow" />
                                </Nation>
                                <Arrow src={ArrowImg} alt="Arrow" />

                                <Phone>
                                    <img src={PhoneImg} alt="Phone" /> +91
                                    <input
                                        type="text"
                                        placeholder="Enter your phone number"
                                    />
                                </Phone>
                            </Number>

                            <a href="#" className="button">
                                Next
                            </a>
                            <Create>
                                New to Steyp? <span>Create an account</span>
                            </Create>
                        </Page>
                    </Login>
                    <Bottom>Terms of service</Bottom>
                </Box>
            </ContainerBox>
        </>
    );
}

export default LoginPage;
const ContainerBox = styled.div`
    position: ${({ type }) => (type ? "fixed" : "")};
    transition: 0.3s;
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    right: 0;
    height: 100vh;
    z-index: 1000;
    background: #fff;
    @media all and (max-width: 980px) {
        width: 65%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    /* overflow-y: scroll; */
    background: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/auth/decorator.svg)
        0% 0% / contain no-repeat;
    background-repeat: no-repeat;
    padding: 0px 60px;
`;

const Span = styled.div``;
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
const Login = styled.div``;
const Page = styled.div`
    padding-top: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
        font-size: 25px;
        line-height: 1.4em;
        margin-top: 14px;
    }
    p {
        margin: 18px 0px 40px;
        width: 94%;
        font-size: 14px;
    }
    a {
        cursor: pointer;
        background: rgb(92, 198, 106);
        border-radius: 6px;
        height: 58px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-top: 40px;
        color: rgb(255, 255, 255);
        min-height: 50px;
    }
`;
const Number = styled.div`
    display: flex;
`;
const Nation = styled.div`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    margin-right: 7px;
    justify-content: center;
    cursor: pointer;
`;
const NationImage = styled.img`
    img {
        width: 100%;
        display: block;
    }
`;
const Arrow = styled.img`
    width: 6px;
    transform: rotate(90deg);
    img {
        width: 100%;
        display: block;
    }
`;
const Phone = styled.div`
    display: flex;
    border: 1px solid;
    border-radius: 7px;
    padding: 15px 18px;
    justify-content: flex-start;
    color: rgb(0, 0, 0);
    border-color: rgb(47, 51, 55);
    margin-left: 10px;
    font-size: 17px;
    width: 81%;
`;
const Create = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 14px 0px 70px;
    font-size: 14px;
`;
const Bottom = styled.div`
    text-align: center;
    border-top: 1px solid rgb(209, 219, 218);
    padding: 22px 0px 55px;
`;
const Close = styled.div`
    z-index: 1000;
    position: relative;
    img {
        position: absolute;
        top: 35px;
        left: -40px;
        width: 25px;
        @media all and (max-width: 640px) {
            left: 7px;
            width: 20px;
        }
    }
`;
