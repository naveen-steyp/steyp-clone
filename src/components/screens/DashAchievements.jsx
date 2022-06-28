import React from "react";

//Packages

import styled from "styled-components";
import { useState } from "react";

//Images
import UiImage from "../../assets/image/UI_Engineer.jpg";
import StarImg from "../../assets/image/star.svg";
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
import CalenderImg from "../../assets/image/calendar.svg";

function DashAchievements() {
    const [data, setData] = useState([
        {
            image: UiImage,
            name: "UI Engineer",
            description: "Completed on 21 May 2022",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: true,
        },
        {
            image: Backend,
            name: "Backend Developer",
            description: "Not enrolled yet  ",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: DevopImg,
            name: "DevOps Engineer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: WebApp,
            name: "Web Application Developer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },

        {
            image: MobileApp,
            name: "Mobile Application Developer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: ErpApp,
            name: "ERP Developer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: DataApp,
            name: "Data Scientist",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: MachineLearning,
            name: " Machine Learning Engineer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: AiImg,
            name: " AI Engineer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: BlockChain,
            name: "Blockchain Developer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: ArImg,
            name: "AR Engineer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: VrImg,
            name: "VR Engineer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: IotImg,
            name: "IoT Engineer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
        {
            image: RobotImg,
            name: "Robotics Engineer",
            description: "Not enrolled yet",
            star: StarImg,
            steyp: SteypLogo,
            is_completed: false,
        },
    ]);
    return (
        <Dash>
            {/* <Wrapper className="wrapper"> */}
            <Text>
                <h3>Achievements</h3>
                <h5>Overall Performance</h5>
            </Text>

            <Box>
                <Left>
                    {data.map((items) => (
                        <Container
                            valid={items.is_completed}
                            className={
                                items.is_completed === false
                                    ? "not-active"
                                    : null
                            }
                        >
                            <ImgContainer>
                                <img src={items.image} alt="UIImage" />
                            </ImgContainer>
                            <Content>
                                <span className="head">{items.name}</span>
                                <span className="color">
                                    {items.description}
                                </span>
                                <Star>
                                    <img src={items.star} alt="Star" />
                                    <img src={items.star} alt="Star" />
                                    <img src={items.star} alt="Star" />
                                    <img src={items.star} alt="Star" />
                                    <img src={items.star} alt="Star" />
                                    <img src={items.star} alt="Star" />
                                    <img src={items.star} alt="Star" />
                                    <img src={items.star} alt="Star" />
                                </Star>
                            </Content>
                            <SteypImg>
                                <img src={items.steyp} alt="Star" />
                            </SteypImg>
                        </Container>
                    ))}
                </Left>
                <Right>
                    <Skill>
                        <Top>
                            <Performance>
                                <Topic>
                                    <span>Lessons</span>
                                    <span className="number">96</span>
                                </Topic>
                                <Topic>
                                    <span>Topics</span>
                                    <span className="number">542</span>
                                </Topic>
                                <Profession>
                                    <Calender>
                                        <img src={CalenderImg} alt="Calender" />
                                    </Calender>
                                    <Texts>
                                        <h5>Professions</h5>
                                        <span>1</span>
                                    </Texts>
                                </Profession>
                                <Profession>
                                    <Calender>
                                        <img src={CalenderImg} alt="Calender" />
                                    </Calender>
                                    <Texts>
                                        <h5>Skills</h5>
                                        <span>9</span>
                                    </Texts>
                                </Profession>
                                <Profession>
                                    <Calender>
                                        <img src={CalenderImg} alt="Calender" />
                                    </Calender>
                                    <Texts>
                                        <h5>Practices</h5>
                                        <span>26</span>
                                    </Texts>
                                </Profession>
                                <Profession>
                                    <Calender>
                                        <img src={CalenderImg} alt="Calender" />
                                    </Calender>
                                    <Texts>
                                        <h5>Assessments</h5>
                                        <span>16</span>
                                    </Texts>
                                </Profession>
                                <Profession>
                                    <Calender>
                                        <img src={CalenderImg} alt="Calender" />
                                    </Calender>
                                    <Texts>
                                        <h5>Workshops</h5>
                                        <span>26</span>
                                    </Texts>
                                </Profession>
                                <Profession>
                                    <Calender>
                                        <img src={CalenderImg} alt="Calender" />
                                    </Calender>
                                    <Texts>
                                        <h5>Premium Assists</h5>
                                        <span>0</span>
                                    </Texts>
                                </Profession>
                            </Performance>
                        </Top>
                    </Skill>
                </Right>
            </Box>
            {/* </Wrapper> */}
        </Dash>
    );
}

export default DashAchievements;
const Dash = styled.div`
    margin: 0px 23px;
    gap: 20px;

    padding-left: 255px;
    margin-top: 20px;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
    @media all and (max-width: 1080px) {
        padding-left: 5px;
        margin-top: 30px;
    }
    h3 {
        margin-bottom: 15px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
`;
const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;
        margin-top: 25px;
    }
`;
const Left = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    @media all and (max-width: 1280px) {
        width: 100%;
        margin-top: 50px;
    }
    @media all and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
const Container = styled.div`
    width: 100%;
    background: rgb(232, 243, 253);
    padding: 16px 20px;
    border-radius: 5px;
    display: flex;
    position: relative;
    cursor: ${({ valid }) => (valid ? "pointer" : "not-allowed")};
    &.not-active {
        filter: grayscale(100%);
    }

    align-items: center;
    margin-bottom: 14px;
`;
const ImgContainer = styled.div`
    margin-right: 21px;
    width: 24%;
    img {
        width: 100%;
        display: block;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    span.head {
        font-family: goridita_medium;
        font-size: 15px;
    }
    span.color {
        color: rgb(127, 127, 127);
        font-size: 13px;
        font-family: goridita_regular;
    }
`;
const Star = styled.div``;
const SteypImg = styled.div`
    position: absolute;
    width: 35px;
    right: 26px;
    bottom: 10px;
    img {
        width: 100%;
        display: block;
    }
`;
const Right = styled.div`
    width: 28%;
    @media all and (max-width: 1280px) {
        width: 100%;
    }
`;
const Skill = styled.div``;
const Top = styled.div``;
const Performance = styled.div`
    @media all and (max-width: 1280px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;
const Topic = styled.div`
    background: rgb(241, 238, 251);
    padding: 7px 17px;
    border-radius: 5px;
    display: flex;

    align-items: center;
    margin-bottom: 5px;
    justify-content: space-between;
    span {
        font-family: goridita_medium;
        font-size: 16px;
        margin: 6px 0px;
    }
    span.number {
        font-family: goridita_bold;
        font-size: 20px;
        margin: 6px 0px;
    }
    @media all and (max-width: 1280px) {
        width: 49%;
    }
`;
const Profession = styled.div`
    background: rgb(232, 243, 253);
    display: flex;

    align-items: center;
    padding: 16px;
    border-radius: 5px;
    margin-bottom: 5px;
    @media all and (max-width: 1280px) {
        width: 49%;
    }
`;
const Calender = styled.div`
    background: rgb(99, 231, 189);
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;

    justify-content: center;
    border-radius: 50%;
    margin-right: 11px;
`;
const Text = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 7%;
    h3 {
        font-family: goridita_medium;
        font-size: 20px;
        margin-bottom: 8px;
    }
    h5 {
        font-family: goridita_medium;
        font-size: 20px;
        margin-bottom: 8px;
        @media all and (max-width: 1280px) {
            display: none;
        }
    }
`;
const Texts = styled.div``;
