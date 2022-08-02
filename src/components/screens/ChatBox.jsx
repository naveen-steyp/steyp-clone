import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/Lotties/74498-call-center-support-lottie-animation.json";
import styled from "styled-components";

//Images

import EmojiImg from "../../assets/image/emoji.svg";
import ImageImg from "../../assets/image/image.svg";
import AttachImg from "../../assets/image/attach.svg";
import MicImg from "../../assets/image/mic.svg";
import AvatarImg from "../../assets/image/avatar.png";
function ChatBox() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Chat>
            <Left>
                <Container>
                    <Top>
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width={300}
                        />
                    </Top>
                    <Bottom>
                        <Box>
                            <Emoji>
                                <img src={EmojiImg} alt="Emoji" />
                            </Emoji>
                        </Box>
                        <Image>
                            <img src={ImageImg} alt="Image" />
                        </Image>
                        <Form>
                            <form action="">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Type a message..."
                                />
                            </form>
                        </Form>

                        <Attach>
                            <img src={AttachImg} alt="Attach" />
                        </Attach>
                        <Mic>
                            <img src={MicImg} alt="Mic" />
                        </Mic>
                    </Bottom>
                </Container>
            </Left>
            <Right>
                <RmImage>
                    <img src={AvatarImg} alt="" />
                </RmImage>
                <span>My RM ()</span>
            </Right>
        </Chat>
    );
}

export default ChatBox;
const Chat = styled.div`
    display: flex;
    padding-left: 255px;
    margin-top: 80px;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
    @media all and (max-width: 980px) {
        padding-right: 15px;
    }
    @media all and (max-width: 980px) {
        flex-direction: column-reverse;
    }
`;
const Left = styled.div`
    width: 70%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Container = styled.div``;
const Top = styled.div`
    background: rgb(240, 240, 240);
    /* flex: 1 1 0%; */
    border-radius: 5px;
    overflow-y: scroll;
    position: relative;
    padding: 165px 0px;
`;
const Bottom = styled.div`
    border-radius: 5px;
    height: 64px;
    background: rgb(240, 240, 240);
    display: flex;

    align-items: center;
    padding: 0px 25px;
    margin-top: 9px;
`;
const Box = styled.div`
    display: flex;

    align-items: center;
    /* flex: 1 1 0%; */
`;
const Emoji = styled.div`
    width: 25px;
    cursor: pointer;
    margin-right: 24px;
    img {
        width: 100%;
        display: block;
    }
`;
const Image = styled.div`
    width: 25px;
    cursor: pointer;
    margin-right: 24px;
    img {
        width: 100%;
        display: block;
    }
`;
const Attach = styled.div`
    width: 25px;
    cursor: pointer;
    margin-right: 24px;
    img {
        width: 100%;
        display: block;
    }
`;
const Mic = styled.div`
    width: 25px;
    cursor: pointer;
    margin-right: 24px;
    img {
        width: 100%;
        display: block;
    }
`;
const Form = styled.div`
    font-size: 15px;
    flex: 1 1 0%;
    font-family: gordita_regular;
    padding: 10px 15px;
    border-radius: 30px;
    background: rgb(255, 255, 255);
    margin-right: 24px;
`;
const Right = styled.div`
    background: rgb(240, 240, 240);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 15px;
    text-align: center;

    width: 27%;
    margin-left: 10px;
    @media all and (max-width: 980px) {
        margin-left: 0px;
        width: 100%;
        margin-bottom: 6px;

        padding: 0px 23px;
        height: 80px;
    }

    span {
        font-size: 15px;
        margin: 29px 0px 11px;
        font-family: goridita_medium;
        @media all and (max-width: 980px) {
            margin-right: 70%;
            margin-top: -34px;
        }
        @media all and (max-width: 768px) {
            margin-right: 66%;
        }
        @media all and (max-width: 640px) {
            margin-right: 53%;
        }
        @media all and (max-width: 480px) {
            margin-right: 44%;
        }
    }
`;
const RmImage = styled.div`
    width: 170px;
    margin: 0 auto;
    @media all and (max-width: 980px) {
        width: 54px;
        margin-left: 0px;
        margin-top: 15px;
    }

    img {
        width: 100%;
        display: block;
    }
`;
