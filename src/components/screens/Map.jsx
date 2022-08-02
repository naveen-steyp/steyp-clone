import React from "react";
import { useState } from "react";
import JoelImage from "../../assets/image/14355-Joel_Lee_Roy-min.jpeg";
import Linkedn from "../../assets/image/linkedin-white.svg";
import styled from "styled-components";

function Map() {
    const [state, setState] = useState([
        {
            img: JoelImage,
            name: "Joel Lee Roy",
            Linkedn: Linkedn,
            para: "Linkedin Profile",
            para2: "Sarabhai College Vellanad",
            heading: "I am very happy to be a student of STEYP. I",
            span: "See more",
        },
        {
            img: JoelImage,
            name: "Joel Lee Roy",
            Linkedn: Linkedn,
            para: "Linkedin Profile",
            para2: "Sarabhai College Vellanad",
            heading: "I am very happy to be a student of STEYP. I",
            span: "See more",
        },
    ]);
    const renderitem = () => {
        return state.map((item) => (
            <Box>
                <ImgContainer>
                    <img src={item.img} alt="Image" />
                </ImgContainer>
                <Cover>
                    <Top>
                        <h4>{item.name}</h4>
                        <a href="">
                            <span className="img">
                                <img src={item.Linkedn} alt="Link " />
                            </span>
                            <p>{item.para}</p>
                        </a>
                    </Top>
                    <p>{item.para2}</p>
                    <h5>{item.heading} </h5>
                    <span>{item.span}</span>
                </Cover>
            </Box>
        ));
    };
    return <>{renderitem()}</>;
}

export default Map;
const Box = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    margin: 0 10px;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    min-height: 165px;
    margin: 0px 10px;
    border: 1px solid rgb(227, 227, 227);
    width: 48%;
    margin-bottom: 25px;
    @media all and (max-width: 1280px) {
        /* flex-wrap: wrap; */
        width: 47%;
    }
    @media all and (max-width: 1080px) {
        width: 100%;
    }

    @media all and (max-width: 640px) {
        /* padding: 15px;
        min-height: 160px; */
    }
    @media all and (max-width: 480px) {
        flex-wrap: wrap;
    }
`;
const ImgContainer = styled.div`
    width: 120px;
    min-width: 120px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 15px;
    margin-left: 15px;
    @media all and (max-width: 480px) {
        margin: 0 auto;
        margin-bottom: 30px;
        margin-top: 25px;
    }

    img {
        width: 100%;
        display: block;
        border-radius: 5px;
        overflow: hidden;
    }
`;
const Cover = styled.div`
    width: 74%;
    @media all and (max-width: 480px) {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 15px;
    }
    p {
        font-size: 12px;
    }
    h5 {
        position: relative;
        margin-top: 30px;
        font-size: 14px;
        &::before {
            content: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/29-09-2021/test.svg);
            position: absolute;
            left: 0px;
            top: -18px;
            color: rgb(45, 45, 45);
            width: 10px;
            display: block;
        }
    }
    span {
        color: rgb(4, 156, 216);
        cursor: pointer;
        font-family: gordita_medium;
    }
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;

    h4 {
        font-family: goridita_medium;
        font-size: 18px;
        color: rgb(45, 45, 45);
        text-transform: capitalize;
        @media all and (max-width: 640px) {
            font-size: 15px;
            margin-bottom: 10px;
        }
        @media all and (max-width: 480px) {
            margin: 0 auto;
        }
    }
    a {
        font-size: 13px;
        display: flex;
        align-items: center;
        width: 148px;
        background-color: rgb(43, 126, 188);
        height: 35px;
        -webkit-box-pack: center;
        justify-content: space-between;
        border-radius: 3px;
        cursor: pointer;
        margin-right: 20px;
        padding: 0px 5px;
        @media all and (max-width: 480px) {
            display: none;
            transform: translateY(10px);
        }

        p {
            font-size: 12px;
            font-family: goridita_medium;
            color: rgb(255, 255, 255);
            @media all and (max-width: 1280px) {
                font-size: 11px;
            }
            @media all and (max-width: 640px) {
                font-size: 10px;
            }
        }
        span {
            border-right: 1px solid #fff;
            margin-right: 6px;
            padding-right: 6px;
        }
    }
`;
