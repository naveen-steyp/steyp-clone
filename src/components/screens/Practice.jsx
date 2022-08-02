import React from "react";
import styled from "styled-components";

//Images
import PractiseImg from "../../assets/image/practiseimage'.svg";
import EmptyImage from "../../assets/image/Emptypractices.svg";
import CatchImage from "../../assets/image/01_-_Caching_Post_Page.jpg";
import BuildImage from "../../assets/image/01_-_build_a_website.jpg";
import TravelImage from "../../assets/image/01_-_Create_Travel_App.jpg";
import StarImg from "../../assets/image/star.svg";

function Practice() {
    return (
        <Practises>
            {/* <Wrapper className="wrapper"> */}
            <Left>
                <Top>
                    <ImgContainer>
                        <img src={PractiseImg} alt="" />
                    </ImgContainer>
                    <Bottom>
                        <h3>There are no practices active</h3>
                        <p>
                            Currently, you have no practices to attend. Please
                            go to your next activity to unlock more practices.
                        </p>
                        <a href="#">Go to Dashboard</a>
                    </Bottom>
                </Top>
                <h2>Upcoming Practices</h2>
                <UpComing>
                    <EmptyImg>
                        <img src={EmptyImage} alt="" />
                    </EmptyImg>
                    <h3>Empty!</h3>
                    <p>There are no upcoming practices</p>
                </UpComing>
            </Left>

            <Right>
                <Border>
                    <Content>
                        <h5>Attended Practices</h5>
                        <a href="#">View All</a>
                    </Content>
                    <AttendPractise>
                        <a href="#">
                            <Page>
                                <img src={CatchImage} alt="" />
                            </Page>
                            <Container>
                                <Box>
                                    <span># 41 </span>

                                    <Star>
                                        10
                                        <img src={StarImg} alt="" />
                                    </Star>
                                </Box>

                                <h3>Caching Post Page</h3>
                                <h5>Progressive Web Apps</h5>
                            </Container>
                        </a>
                    </AttendPractise>
                    <AttendPractise>
                        <a href="#">
                            <Page>
                                <img src={TravelImage} alt="" />
                            </Page>
                            <Container>
                                <Box>
                                    <span># 26 </span>

                                    <Star>
                                        10 <img src={StarImg} alt="" />
                                    </Star>
                                </Box>
                                <h3>Create Travel App</h3>
                                <h5>UI Engineer/Jquery</h5>
                            </Container>
                        </a>
                    </AttendPractise>
                    <AttendPractise>
                        <a href="#">
                            <Page>
                                <img src={BuildImage} alt="" />
                            </Page>
                            <Container>
                                <Box>
                                    <span># 25 </span>

                                    <Star>
                                        10 <img src={StarImg} alt="" />
                                    </Star>
                                </Box>

                                <h3>Create a Website</h3>
                                <h5>UI Engineer/Bootstrap</h5>
                            </Container>
                        </a>
                    </AttendPractise>
                </Border>
            </Right>
            {/* </Wrapper> */}
        </Practises>
    );
}

export default Practice;
const Practises = styled.div`
    padding-left: 255px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
    @media all and (max-width: 780px) {
        margin-top: 30px;
    }
`;
const Left = styled.div`
    width: 53%;
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
    width: 41%;
    margin-right: 33px;

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
    h5 {
        color: rgb(168, 168, 168);
        font-family: goridita_regular;
        font-size: 13px;
    }
`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h5 {
        color: rgb(77, 77, 77);
        font-size: 20px;
        font-family: goridita_medium;
    }
    a {
        color: rgb(15, 167, 111);
        font-family: goridita_medium;
        font-size: 16px;
    }
`;
const Page = styled.div`
    width: 41%;
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
    width: 58%;
    padding: 14px;
    @media all and (max-width: 768px) {
        width: 100%;
    }

    span {
        display: flex;
        color: rgb(65, 174, 118);
        font-family: goridita_medium;
        font-size: 15px;
        margin-bottom: 5px;
    }
    h3 {
        font-size: 14px;
        max-width: 100%;
        color: rgb(77, 77, 77);
        line-height: 20px;
        margin-bottom: 10px;
        font-family: goridita_medium;
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
`;
const Border = styled.div`
    padding: 0px 0px 0px 20px;
    border-left: 1px solid rgb(232, 232, 232);
    @media all and (max-width: 768px) {
        margin-top: 15px;
    }
`;
