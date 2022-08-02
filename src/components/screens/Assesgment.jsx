import React from "react";
import styled from "styled-components";

//Images
import PractiseImg from "../../assets/image/practiseimage'.svg";
import EmptyImage from "../../assets/image/Emptypractices.svg";
import CatchImage from "../../assets/image/01_-_Caching_Post_Page.jpg";
import DataImage from "../../assets/image/03_-_Data_Types_and_Operations__1.jpg";
import BuildImage from "../../assets/image/01_-_build_a_website.jpg";
import TravelImage from "../../assets/image/01_-_Create_Travel_App.jpg";
import StarImg from "../../assets/image/star.svg";
import DateImage from "../../assets/image/09_-_Datetime_module__1.jpg";
import ReactImage from "../../assets/image/React_JS_Second_Assessment.jpg";
import FirstImage from "../../assets/image/React_JS_First_Assessment.jpg";
import BootImage from "../../assets/image/Bootstrap_First_Assessment.jpg";

import ControlImage from "../../assets/image/06_-_Control_flow_statements__1.jpg";

function Assesgment() {
    return (
        <Assessments>
            {/* <Wrapper className="wrapper"> */}
            <Left>
                <Top>
                    <ImgContainer>
                        <img src={PractiseImg} alt="" />
                    </ImgContainer>
                    <Bottom>
                        <h3>There are no assessments active</h3>
                        <p>
                            Currently, you have no assessments to attend. Please
                            go to your next activity to unlock more assessments.
                        </p>
                        <a href="#">Go to Dashboard</a>
                    </Bottom>
                </Top>
                <h2>Upcoming Assessments</h2>
                {/* <UpComing>
                        <EmptyImg>
                            <img src={EmptyImage} alt="" />
                        </EmptyImg>
                        <h3>Empty!</h3>
                        <p>There are no upcoming practices</p>
                    </UpComing> */}
                <ContainerBox>
                    <AssesPractise>
                        <a href="#">
                            <AssessmentsImage>
                                <img src={DataImage} alt="" />
                            </AssessmentsImage>
                            <Container>
                                <Box>
                                    <span># 41 </span>
                                </Box>

                                <h3>Assessment in Data Types and Operations</h3>
                                <h5>Backend Developer</h5>
                            </Container>
                        </a>
                    </AssesPractise>
                    <AssesPractise>
                        <a href="#">
                            <AssessmentsImage>
                                <img src={ControlImage} alt="" />
                            </AssessmentsImage>
                            <Container>
                                <Box>
                                    <span># 41 </span>
                                </Box>

                                <h3>Assessment in Control Flow Statements</h3>
                                <h5>Backend Developer</h5>
                            </Container>
                        </a>
                    </AssesPractise>
                    <AssesPractise>
                        <a href="#">
                            <AssessmentsImage>
                                <img src={DateImage} alt="" />
                            </AssessmentsImage>
                            <Container>
                                <Box>
                                    <span># 41 </span>
                                </Box>

                                <h3>Assessment in Datetime Module</h3>
                                <h5>Backend Developer</h5>
                            </Container>
                        </a>
                    </AssesPractise>
                </ContainerBox>
            </Left>

            <Right>
                <Content>
                    <h2> Attended Assessments</h2>
                    <a href="#">View All</a>
                </Content>
                <AttendPractise>
                    <a href="#">
                        <Page>
                            <img src={ReactImage} alt="" />
                        </Page>
                        <Containerone>
                            <BoxContainer>
                                <span>
                                    #16
                                    <Star>
                                        10
                                        <img src={StarImg} alt="" />
                                    </Star>
                                </span>
                            </BoxContainer>

                            <h3>React JS Second Assessment</h3>
                        </Containerone>
                    </a>
                </AttendPractise>
                <AttendPractise>
                    <a href="#">
                        <Page>
                            <img src={FirstImage} alt="" />
                        </Page>
                        <Containerone>
                            <BoxContainer>
                                <span>
                                    #15
                                    <Star>
                                        10 <img src={StarImg} alt="" />
                                    </Star>
                                </span>
                            </BoxContainer>
                            <h3>React JS FIRST Assessment</h3>
                        </Containerone>
                    </a>
                </AttendPractise>
                <AttendPractise>
                    <a href="#">
                        <Page>
                            <img src={BootImage} alt="" />
                        </Page>
                        <Containerone>
                            <BoxContainer>
                                <span>
                                    #14
                                    <Star>
                                        10 <img src={StarImg} alt="" />
                                    </Star>
                                </span>
                            </BoxContainer>

                            <h3>Bootstrap First Assessment</h3>
                        </Containerone>
                    </a>
                </AttendPractise>
            </Right>
            {/* </Wrapper> */}
        </Assessments>
    );
}

export default Assesgment;

const Assessments = styled.div`
    padding-left: 255px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
`;
const Left = styled.div`
    width: 58%;
    @media all and (max-width: 1080px) {
        width: 95%;
    }
    h2 {
        font-size: 20px;
        color: rgb(77, 77, 77);
        font-family: goridita_regular;
        margin-bottom: 5px;
        margin-top: 10px;
    }
`;
const Top = styled.div`
    background: rgb(249, 249, 251);
    border-radius: 7px;
    padding-bottom: 25px;
`;
const ImgContainer = styled.div`
    max-width: 300px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    img {
        width: 100%;
        display: block;
    }
`;
const Bottom = styled.div`
    margin-bottom: 25px;
    text-align: center;
    h3 {
        font-size: 20px;
        font-family: goridita_medium;
        margin-bottom: 8px;
    }
    a {
        background-color: rgb(15, 167, 111);
        font-family: goridita_medium;
        padding: 12px 25px;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        font-size: 14px;
    }
    p {
        margin: 0px auto 15px;
        max-width: 80%;
        color: rgb(116, 116, 116);
        font-family: goridita_regular;
        font-size: 14px;
        @media all and (max-width: 640px) {
            max-width: 87%;
        }
    }
`;
const UpComing = styled.div`
    text-align: center;
    background-color: rgb(245, 251, 255);
    padding: 30px 20px;
    border-radius: 20px;
    width: 100%;
    margin-top: 25px;
    h2 {
        font-size: 20px;
        color: rgb(77, 77, 77);
        font-family: goridita_regular;
    }
    h3 {
        font-size: 20px;
        font-family: goridita_medium;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 15px;
        color: rgb(116, 116, 116);
        font-family: goridita_regular;
    }
    h5 {
        color: rgb(168, 168, 168);
        font-family: goridita_regular;
        font-size: 13px;
    }
`;
const EmptyImg = styled.div`
    max-width: 300px;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;
const Right = styled.div`
    width: 38%;
    margin-right: 15px;
    @media all and (max-width: 1080px) {
        width: 95%;
    }
`;
const AttendPractise = styled.div`
    margin-bottom: 20px;
    background: rgb(249, 249, 251);

    a {
        display: flex;
        justify-content: space-between;
        @media all and (max-width: 768px) {
            flex-wrap: wrap;
        }
    }
`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h2 {
        color: rgb(30, 78, 82);
        font-size: 22px;
        font-family: goridita_regular;
    }
    a {
        color: rgb(15, 167, 111);
        font-family: goridita_regular;
        font-size: 16px;
    }
`;
const Page = styled.div`
    width: 37%;
    border-radius: 6px;
    overflow: hidden;
    @media all and (max-width: 768px) {
        width: 100%;
    }
    img {
        width: 100%;
        display: block;
    }
`;
const Container = styled.div`
    span {
        display: flex;
        color: rgb(65, 174, 118);
        font-family: goridita_medium;

        margin-top: 10px;
    }

    h3 {
        margin-top: 10px;
        font-size: 14px;
        max-width: 100%;
        color: rgb(77, 77, 77);
        line-height: 20px;
        margin-bottom: 10px;
        font-family: goridita_medium;
    }
    h5 {
        color: rgb(168, 168, 168);
        font-family: goridita_regular;
        font-size: 13px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
`;
const Star = styled.div``;
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }
`;
const AssesPractise = styled.div`
    background-color: rgb(249, 249, 251);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 31%;
    cursor: not-allowed;
    @media all and (max-width: 640px) {
        width: 46%;
    }
`;
const ContainerBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: 15px;
    padding-top: 15px;
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }
`;
const AssessmentsImage = styled.div`
    border-radius: 6px;
    overflow: hidden;
    img {
        width: 100%;
        display: block;
    }
`;
const BoxContainer = styled.div`
    span {
        display: flex;
        justify-content: space-between;
    }
    h3 {
        width: 63%;
    }
`;
const Containerone = styled.div`
    width: 63%;
    padding: 15px;
    @media all and (max-width: 768px) {
        width: 100%;
    }

    span {
        display: flex;
        color: rgb(65, 174, 118);
        font-family: goridita_medium;

        margin-top: 10px;
    }

    h3 {
        margin-top: 10px;
        font-size: 14px;
        max-width: 100%;
        color: rgb(77, 77, 77);
        line-height: 20px;
        margin-bottom: 10px;
        font-family: goridita_medium;
    }
    h5 {
        color: rgb(168, 168, 168);
        font-family: goridita_regular;
        font-size: 13px;
    }
`;
