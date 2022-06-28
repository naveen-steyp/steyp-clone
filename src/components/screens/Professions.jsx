import React, { useState } from "react";
import styled from "styled-components";

//Images
import UiImage from "../../assets/image/UI_Engineer.jpg";

import SteypLogo from "../../assets/image/steyp-logo.svg";
import Backend from "../../assets/image/Backend_Developer_ACsVD3G.jpg";
import DevopImg from "../../assets/image/DevOps_Engineer.jpg";
import WebApp from "../../assets/image/Web_Application_Developer_vmaZxha.jpg";
import MobileApp from "../../assets/image/Mobile_Application_Developer.jpg";
import ErpApp from "../../assets/image/ERP_Developer.jpg";
import DataApp from "../../assets/image/Data_Scientist.jpg";
import MachineLearning from "../../assets/image/Robotics_Engineer__1.jpg";
import AiImg from "../../assets/image/AI_Engineer.jpg";
import BlockChain from "../../assets/image/Blockchain_Developer.jpg";
import ArImg from "../../assets/image/AR_Engineer.jpg";
import VrImg from "../../assets/image/VR_Engineer.jpg";
import IotImg from "../../assets/image/IoT_Engineer.jpg";
import RobotImg from "../../assets/image/Machine_Learning_Engineer.jpg";
import LockImg from "../../assets/image/lock.svg";

function Professions() {
    const [data, setData] = useState([
        {
            image: UiImage,
            name: "UI Engineer",
            description: "#1",
            is_completed: true,
        },
        {
            image: Backend,
            name: "Backend Developer",
            description: "#2 ",
            is_completed: false,
        },
        {
            image: DevopImg,
            name: "DevOps Engineer",
            description: "#3",
            is_completed: false,
        },

        {
            image: WebApp,
            name: "Web Application Developer",
            description: "#4",
            is_completed: false,
        },
        {
            image: MobileApp,
            name: "Mobile Application Developer",
            description: "#5",
            is_completed: false,
        },
        {
            image: ErpApp,
            name: "ERP Developer",
            description: "#6",
            is_completed: false,
        },
        {
            image: DataApp,
            name: "Data Scientist",
            description: "#7",
            is_completed: false,
        },
        {
            image: MachineLearning,
            name: " Machine Learning Engineer",
            description: "#8",
            is_completed: false,
        },
        {
            image: AiImg,
            name: " AI Engineer",
            description: "#9",
            is_completed: false,
        },
        {
            image: BlockChain,
            name: "Blockchain Developer",
            description: "#10",
            is_completed: false,
        },
        {
            image: ArImg,
            name: "AR Engineer",
            description: "#11",
            is_completed: false,
        },
        {
            image: VrImg,
            name: "VR Engineer",
            description: "#12",
            is_completed: false,
        },
        {
            image: IotImg,
            name: "IoT Engineer",
            description: "#13",
            is_completed: false,
        },
        {
            image: RobotImg,
            name: "Robotics Engineer",
            description: "#14",
            is_completed: false,
        },
    ]);
    return (
        <Profession>
            {/* <Wrapper className="wrapper"> */}
            <h4>Professions</h4>
            <Container>
                {data.map((items) => (
                    <Box
                        valid={items.is_completed}
                        className={
                            items.is_completed === false ? "not-active" : null
                        }
                    >
                        <a href="#">
                            <ImgContainer>
                                <img src={items.image} alt="" />
                            </ImgContainer>
                        </a>
                        <Content>
                            <Top>
                                <h3>
                                    <span>{items.description}</span>
                                </h3>
                                <span>{items.name}</span>
                            </Top>
                        </Content>
                        <Lock>
                            <img src={LockImg} alt="LockImg" />
                        </Lock>
                    </Box>
                ))}
            </Container>
            {/* </Wrapper> */}
        </Profession>
    );
}

export default Professions;
const Profession = styled.div`
    padding-left: 255px;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
    }

    h4 {
        font-size: 22px;
        color: rgb(24, 72, 76);
        margin-bottom: 13px;
        font-family: goridita_regular;
    }
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 19px;
    border-radius: 7px;
    background: rgb(249, 249, 249);
    @media all and (max-width: 1080px) {
        flex-direction: column;
    }
    cursor: ${({ valid }) => (valid ? "pointer" : "not-allowed")};
    &.not-active {
        filter: grayscale(100%);
    }
    h3 {
        color: rgb(153, 153, 153);
        display: flex;
        align-items: center;
        font-family: goridita_regular;
    }
    h5 {
        color: rgb(66, 66, 66);
        margin: 10px 0px;
        font-family: goridita_regular;
        font-size: 14px;
    }

    a {
    }
`;
const ImgContainer = styled.div`
    max-width: 160px;
    overflow: hidden;
    border-radius: 6px;
    margin-right: 14px;
    @media all and (max-width: 1080px) {
        max-width: 100%;
    }

    img {
        width: 100%;
        display: block;
    }
`;
const Content = styled.div`
    position: relative;
    @media all and (max-width: 1080px) {
        width: 100%;
    }
`;
const Top = styled.div``;
// const Wrapper = styled.div`
//     width: 85%;
//     margin: 0 auto;
//     max-width: 1325px;
// `;
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    position: relative;
    @media all and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media all and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;
const Lock = styled.div`
    width: 15px;
    position: absolute;
    right: 34px;
    bottom: 22px;

    img {
        width: 100%;
        display: block;
    }
`;
