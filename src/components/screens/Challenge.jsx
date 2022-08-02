import React from "react";
import styled from "styled-components";

//Images
import WohooImg from "../../assets/image/empty-challenge.svg";
import BackImg from "../../assets/image/challengeback.png";
import AlwinImg from "../../assets/image/Alwin_Sunil.jpg";
import WinnerCardImg from "../../assets/image/winner.svg";
import RunnerCardImg from "../../assets/image/runner.svg";
import { useState } from "react";
import MuhsinImg from "../../assets/image/Muhsin-challenge.jpeg";
import Aditya from "../../assets/image/Adithyan_S_P.jpeg";
import Abhinath from "../../assets/image/abhinath-S-R.jpeg";
import Faheem from "../../assets/image/Faheem_C_M-min.jpg";
import SwathiImg from "../../assets/image/Swathi.jpeg";
import ArshadImg from "../../assets/image/Arshad_khan.png";
import VaifavImg from "../../assets/image/Vaifav.jpg";
function Challenge() {
    const [results, setResults] = useState([
        {
            title: "HK Buildings Website Development Challenge",
            description:
                "Here we've provided you with a wide range of challenges! The current one is in connection with HK Buildings.  Your job here's to develop these designs using your touch of flair! 🧑🏻‍💻",
            winners: [
                {
                    id: 1,
                    image: AlwinImg,
                    h3: "Alwin Sunil",
                    isWinner: true,
                },
                {
                    id: 2,
                    image: Aditya,
                    isWinner: false,
                    h3: "Adhithyan SP",
                },

                {
                    id: 4,
                    image: Faheem,
                    isWinner: false,
                    h3: "Faheem CM",
                },
                {
                    id: 4,
                    image: Faheem,
                    isWinner: false,
                    h3: "Faheem CM",
                },
            ],
        },
        {
            title: "Fastpay Website Development Challenge",
            description:
                "Here we've provided you with a wide range of challenges! The current one is in connection with Fastpay. Your job here's to develop these designs using your touch of flair! 🧑🏻‍💻",
            winners: [
                {
                    id: 1,
                    image: MuhsinImg,
                    h3: "Alwin Sunil",
                    isWinner: true,
                },
                {
                    id: 2,
                    image: SwathiImg,
                    isWinner: false,
                    h3: "Swathi K",
                },
                {
                    id: 3,
                    image: ArshadImg,
                    isWinner: false,
                    h3: "Arshad Khan P",
                },
                // {
                //     id: 4,
                //     image: VaifavImg,
                //     isWinner: false,
                //     h3: "Vaifav S V",
                // },
            ],
        },
    ]);

    const fetchData = (data) =>
        data.map((result) => (
            <FullResultBox>
                <Upper>
                    <h5>{result.title}</h5>
                    <span className="time">5 Jan 2022</span>
                </Upper>
                <MainContainer>
                    <Left>
                        <p>{result.description}</p>
                        <Button>view full result</Button>
                    </Left>
                    <Right>
                        {result.winners.map((winner) =>
                            winner.isWinner ? (
                                <Winner>
                                    <WinnerCard>
                                        <WinImg>
                                            <img
                                                src={winner.image}
                                                alt="Winner"
                                            />
                                        </WinImg>
                                        <h3>{winner.h3}</h3>
                                        <span>Winner</span>
                                    </WinnerCard>
                                </Winner>
                            ) : (
                                <Runner>
                                    <RunnerCard>
                                        <RunImg>
                                            <img
                                                src={winner.image}
                                                alt="Runner"
                                            />
                                        </RunImg>
                                        <h3>{winner.h3}</h3>
                                        <span>Runner Up</span>
                                    </RunnerCard>
                                </Runner>
                            )
                        )}
                    </Right>
                </MainContainer>
            </FullResultBox>
        ));

    return (
        <Challenges>
            <Top>
                <Container>
                    <TopDiv>
                        <Content>
                            <h2>Steyp Challenges</h2>
                            <p>
                                {" "}
                                Steyp is now providing you with a variety of
                                exciting challenges! Come join us and earn
                                awesome rewards.
                            </p>
                        </Content>
                    </TopDiv>

                    <Active>
                        <h5>Active Challenges</h5>
                        <Wohoo>
                            <WohooImgDiv>
                                <img src={WohooImg} alt="Wohoo" />
                            </WohooImgDiv>
                            <span> Woohoo!</span>
                            <p>
                                No challenges pending. We will get back with
                                more fulfilled challenges for you.
                            </p>
                        </Wohoo>
                    </Active>
                </Container>
            </Top>
            <Bottom>
                <ResultContent>
                    <h5>Results</h5>
                    <span>5 Results</span>
                </ResultContent>
                {fetchData(results)}
            </Bottom>
        </Challenges>
    );
}

export default Challenge;
const Challenges = styled.div`
    padding-left: 255px;
    margin-top: 100px;
    @media all and (max-width: 1280px) {
        padding-left: 15px;
        margin-top: 80px;
    }
`;
const Top = styled.div``;
const Container = styled.div``;
const Active = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    h5 {
        font-size: 24px;
        font-family: goridita_medium;
        color: rgb(52, 52, 52);
        text-align: left;
    }
`;
const Wohoo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    span {
        text-align: center;
        font-size: 26px;
        font-family: goridita_medium;
        margin-bottom: 5px;
    }
    p {
        font-size: 16px;
        color: rgb(51, 51, 51);
        max-width: 500px;
        text-align: center;
        @media all and (max-width: 640px) {
            margin-bottom: 10px;
        }
    }
`;
const WohooImgDiv = styled.div`
    width: 230px;
    margin: 0 auto;
    img {
        width: 100%;
        display: block;
    }
`;
const TopDiv = styled.div`
    background-image: url(${BackImg});
    margin-bottom: 40px;
    padding: 60px 50px 50px;
    display: flex;

    h2 {
        font-size: 34px;
        font-family: goridita_medium;
        margin-bottom: 5px;
    }
    p {
        color: rgb(51, 51, 51);
        font-size: 14px;
        max-width: 600px;
        font-family: goridita_regular;
    }
`;
const Content = styled.div`
    margin-top: 30px;
    margin-right: 10px;
    @media all and (max-width: 980px) {
        text-align: center;
    }
`;
const Bottom = styled.div`
    width: 95%;
`;
const ResultContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    h5 {
        font-size: 22px;
        font-family: goridita_medium;
        color: rgb(52, 52, 52);
        text-align: left;
    }
    span {
        font-size: 18px;
        font-family: goridita_medium;
    }
`;
const FullResultBox = styled.div`
    padding: 20px;
    box-shadow: rgb(137 137 137 / 11%) 0px 3px 34px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 6px;
    transition: all 0.2s ease-in-out 0s;
    margin-bottom: 15px;
`;
const Upper = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px) {
        flex-direction: column;
        margin-top: 15px;
    }

    h5 {
        font-size: 18px;
        margin-bottom: 3px;
        font-family: goridita_medium;
        text-transform: capitalize;
        color: rgb(52, 52, 52);
    }
    span.time {
        font-size: 14px;
        font-family: goridita_regular;
    }
`;
const Left = styled.div`
    width: 30%;
    @media all and (max-width: 1280px) {
        width: 100%;
    }
    p {
        font-size: 14px;
        color: rgb(51, 51, 51);
        line-height: 1.5;
        margin-top: 15px;
    }
`;
const Button = styled.div`
    background-color: rgb(15, 167, 111);
    color: rgb(255, 255, 255);
    text-align: center;
    text-transform: capitalize;
    width: 165px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: goridita_medium;
    margin-top: 30px;
    cursor: pointer;
`;
const Right = styled.div`
    width: 70%;
    display: flex;
    margin-left: 15px;
    @media all and (max-width: 1280px) {
        margin-top: 25px;
    }
    @media all and (max-width: 980px) {
        overflow-x: scroll;
        width: 100%;
    }
`;
const Winner = styled.div`
    background-image: url(${WinnerCardImg});
    padding: 32px 65px 15px;
    width: 220px;
    border-bottom: 10px solid rgb(222, 142, 26);
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        height: 38px;
        line-height: 18px;
        font-family: goridita_medium;
    }
    span {
        font-size: 14px;
        font-family: goridita_medium;
        width: 100%;
        display: block;
        text-align: center;
        color: rgb(222, 142, 26);
    }
`;
const WinImg = styled.div`
    img {
        border-radius: 50%;
        margin: 0px auto;
        width: 75px;
        height: 75px;
        display: block;
    }
`;
const RunImg = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    img {
        border-radius: 50%;
        margin: 0px auto;
        height: 65px;
    }
`;
const Runner = styled.div`
    margin-left: 15px;
    h3 {
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
        height: 38px;
        line-height: 18px;
        font-family: goridita_medium;
    }
    span {
        font-size: 14px;
        font-family: goridita_medium;
        width: 100%;
        display: block;
        text-align: center;
        color: rgb(15, 167, 111);
    }
`;
const WinnerCard = styled.div``;
const RunnerCard = styled.div`
    background-image: url(${RunnerCardImg});
    padding: 32px 20px 15px;
    width: 170px;
    border-bottom: 8px solid rgb(15, 167, 111);
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
`;
const MainContainer = styled.div`
    display: flex;
    @media all and (max-width: 1280px) {
        flex-wrap: wrap;
    }
`;
