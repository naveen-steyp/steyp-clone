import React, { useState } from "react";

//Packages
import styled from "styled-components";

//Images
import DashImage from "../../assets/image/dashboard.svg";
import FreeImage from "../../assets/image/free.svg";
import ChallengeImage from "../../assets/image/challenge.svg";
import TalkImage from "../../assets/image/talk.svg";
import LinkednImage from "../../assets/image/linkedinsocial.svg";
import TwitterImage from "../../assets/image/twittersocial.svg";
import FacebookImage from "../../assets/image/facebooksocial.svg";
import InstagramImage from "../../assets/image/instagramsocail.svg";
import YoutubeImage from "../../assets/image/youtubesocial.svg";
import ExploreImage from "../../assets/image/explore-white-arrow.svg";
import { Link } from "react-router-dom";

function DashSlider({ click }) {
    console.log(click);
    return (
        <Slider className={click ? "slider" : ""}>
            <Top>
                <Box>
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <Dash>
                                    <img src={DashImage} alt="Dash" />
                                </Dash>
                                <p> Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/FreeGround">
                                <Free>
                                    <img src={FreeImage} alt="Free" />
                                </Free>
                                <p> Free Ground</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/Challenges">
                                <Challenge>
                                    <img src={ChallengeImage} alt="Challenge" />
                                </Challenge>
                                <p> Challenges </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/chat-with-rm">
                                <Talk>
                                    <img src={TalkImage} alt="Talk" />
                                </Talk>
                                <p>Chat with RM</p>
                            </Link>
                        </li>
                    </ul>
                </Box>
            </Top>
            <Bottom>
                <ul>
                    <li>
                        <Social>
                            <a href="#">
                                <img src={LinkednImage} alt="Linkedn" />
                            </a>
                            <a href="#">
                                <img src={TwitterImage} alt="Twitter" />
                            </a>
                            <a href="#">
                                <img src={FacebookImage} alt="Facebook" />
                            </a>
                            <a href="#">
                                <img src={InstagramImage} alt="Instagram" />
                            </a>
                            <a href="#">
                                <img src={YoutubeImage} alt="Youtube" />
                            </a>
                        </Social>
                    </li>

                    <li className="explore">
                        <a href="#">
                            <span>Explore Talrop</span>
                            <button>
                                <img src={ExploreImage} alt="Explore" />
                            </button>
                        </a>
                    </li>
                </ul>
            </Bottom>
        </Slider>
    );
}

export default DashSlider;
const Slider = styled.div`
    background: rgb(249, 249, 251);
    width: 238px;
    border-top: 1px solid rgb(239, 239, 239);
    position: fixed;
    z-index: 100;
    height: 100vh;
    top: 14px;

    left: 0px;
    transition: all 0.2s ease-in-out 0s;
    min-height: 758px;
    overflow-y: scroll;

    flex-direction: column;

    justify-content: space-between;
    display: flex !important;
    @media all and (max-width: 1280px) {
        left: -255px;
    }
    &.slider {
        left: 0;
    }
`;
const Top = styled.div``;
const Box = styled.div`
    ul {
        border-bottom: 1px solid #efefef;
        padding: 18px 0;
        width: 100%;
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    li {
        :first-child {
            border-bottom: 1px solid #efefef;
            margin-bottom: 15px;
            align-items: center;
        }
        a {
            display: flex;
            align-items: center;
            padding: 10px 20px;
        }
        p {
            padding: 10px 20px;
            font-size: 14px;
            font-family: goridita_medium;
            @media all and (max-width: 1280px) {
            }
        }
    }
    li {
        width: 90%;
    }
`;
const Dash = styled.div`
    width: 16px;
    max-height: 16px;
    display: block;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -6px;
    img {
        width: 100%;
        display: block;
    }
`;
const Free = styled.div`
    width: 16px;
    max-height: 16px;
    display: block;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -6px;
    img {
        width: 100%;
        display: block;
    }
`;
const Challenge = styled.div`
    width: 16px;
    max-height: 16px;
    display: block;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -6px;
    img {
        width: 100%;
        display: block;
    }
`;
const Talk = styled.div`
    width: 16px;
    max-height: 16px;
    display: block;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -6px;
    img {
        width: 100%;
        display: block;
    }
`;
const Bottom = styled.div`
    margin-bottom: 12px;
    ul {
        li.explore {
            display: flex;
            background: #56c082;
            max-height: 46px;
            display: flex;
            align-items: center;
            min-width: 60px;
            justify-content: center;
            align-items: center;

            button {
                outline: none;
                border: none;
                height: 45px;
            }
            span {
                font-family: goridita_medium;
                margin-right: 12px;
                color: rgb(255, 255, 255) !important;
                font-size: 14px;
            }
        }
    }
`;
const Social = styled.div`
    padding: 10px 21px;
    padding-bottom: 21px;
    display: flex;
    justify-content: space-between;
    a {
        width: 18px;
        margin-right: 15px;
    }
    img {
        width: 100%;
        display: block;
    }
`;
