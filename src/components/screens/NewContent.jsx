import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

//Images
import TechImage from "../../assets/image/1_Technology_Thumbnail.jpg";
import ClockImg from "../../assets/image/bx-time.svg";
import Layer from "../../assets/image/bx-layer.svg";

function NewContent() {
    return (
        <Contents>
            <h2>UI Engineer</h2>
            <Box>
                <a href="#">
                    <ImgContainer>
                        <img src={TechImage} alt="" />
                    </ImgContainer>
                    <Content>
                        <p>Skill 1</p>
                        <span>Technology</span>
                        <Bottom>
                            <LayerImg>
                                <img src={Layer} alt="Layer" />
                                <span className="color">1 lessons</span>
                            </LayerImg>

                            <Clock>
                                <img src={ClockImg} alt="Clock" />
                                <span className="color">49 mins</span>
                            </Clock>
                        </Bottom>
                    </Content>
                </a>
            </Box>
        </Contents>
    );
}

export default NewContent;
const Content = styled.div`
    span {
        font-size: 16px;
        font-family: goridita_medium;
    }
    p {
        font-size: 13px;
        font-family: gordita_regular;
        color: rgb(158, 158, 158);
    }
`;
const ImgContainer = styled.div`
    max-width: 160px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 14px;

    img {
        width: 100%;
        display: block;
    }
`;
const Left = styled.div`
    margin-right: 10px;
`;
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    margin-top: 15px;
    @media all and (max-width: 1080px) {
        flex-direction: column;
    }
`;
const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr;
        width: 80%;
    }
    a {
        display: flex;

        align-items: center;
        padding: 19px;
        border-radius: 7px;
        background: rgb(249, 249, 249);
    }
`;
const Contents = styled.div`
    padding-left: 255px;

    h2 {
        margin: 20px 0px;
        font-size: 21px;
        font-family: goridita_medium;
    }

    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
`;
const Clock = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 15px;
        display: block;
    }

    span.color {
        color: rgb(153, 153, 153);
        font-size: 13px;
        font-family: gordita_regular;
    }
`;
const LayerImg = styled.div`
    display: flex;
    align-items: center;
    margin-right: 7px;
    img {
        width: 15px;
        display: block;
    }
    @media all and (max-width: 1080px) {
    }
    span.color {
        color: rgb(153, 153, 153);
        font-size: 13px;
        font-family: gordita_regular;
    }
`;
