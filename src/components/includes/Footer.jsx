import React from "react";
import styled from "styled-components";
import LeftImage from "../../assets/image/grey-logo.svg";
import InstaImage from "../../assets/image/instagram-color.svg";
import FacebookImage from "../../assets/image/facebook-color.svg";
import TwitterImage from "../../assets/image/twitter-color (1).svg";
import LinkdenImage from "../../assets/image/linkedin-color.svg";
import YoutubeImage from "../../assets/image/youtube-color.svg";

export default function Footer() {
    console.log("WOrking footer");
    return (
        // <div>
        <Steyp>
            <Wrapper className="wrapper">
                <Top>
                    <Program>
                        <Adress>
                            <LeftImg src={LeftImage} alt="Sideimg" />
                            <p>
                                Steyp Private Limited,
                                <br />
                                37/1959, 1st Floor, Infra Futura,
                                <br />
                                Opposite Bharath Matha College,
                                <br /> Seaport - Airport Rd,Thrikkakara, <br />
                                Kakkanad,Kerala, <br /> India - 682021
                            </p>
                        </Adress>
                        <Box>
                            <Tech>
                                <h5>Programs</h5>
                                <a href="#">Tech Schooling</a>
                                <a href="#">Tech Degree</a>
                                <a href="#">Tech Grad</a>
                                <a href="#">Challenges</a>
                            </Tech>
                            <Company>
                                <h5>Company</h5>
                                <a href="#">About Us</a>
                                <a href="#">Contact Us</a>
                            </Company>
                            <Community>
                                <h5>Community</h5>
                                <a href="#">Talrop Talks</a>
                                <a href="#">Free Ground</a>
                            </Community>
                            <Contact>
                                <h5>Contact</h5>
                                <a href="tel:+91 858 999 8874">
                                    +91 858 999 8874
                                </a>
                                <a href="mailto:hello@steyp.com">
                                    hello@steyp.com
                                </a>
                                <Span>
                                    <a href="https://www.instagram.com/accounts/login/?next=/steypworld/">
                                        <InstagramImg
                                            src={InstaImage}
                                            alt="Instagram"
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/accounts/login/?next=/steypworld/">
                                        <FaceImg
                                            src={FacebookImage}
                                            alt="Facebook"
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/accounts/login/?next=/steypworld/">
                                        <TwitImage
                                            src={TwitterImage}
                                            alt="Twitter"
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/accounts/login/?next=/steypworld/">
                                        <LinkImage
                                            src={LinkdenImage}
                                            alt="Twitter"
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/accounts/login/?next=/steypworld/">
                                        <YouImage
                                            src={YoutubeImage}
                                            alt="Twitter"
                                        />
                                    </a>
                                </Span>
                            </Contact>
                        </Box>
                    </Program>
                </Top>
                <Bottom>
                    <Left>
                        <p>
                            © 2022, Steyp Private Limited. All rights reserved
                        </p>
                    </Left>
                    <Right>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </Right>
                </Bottom>
            </Wrapper>
        </Steyp>
        // </div>
    );
}

const Steyp = styled.div`
    margin-top: 100px;
    background-color: rgb(30, 30, 30);
    padding: 100px 0px 50px;
    @media all and (max-width: 640px) {
        margin-top: 50px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
`;
const Top = styled.div`
    margin-bottom: 30px;
`;
const Program = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }

    /* display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr; */
    /* @media all and (max-width: 980px) {
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    } */
    h5 {
        font-size: 16px;
        font-family: goridita_medium;
        margin-bottom: 20px;
        color: rgb(255, 255, 255);
    }
    a {
        display: block;
        margin-bottom: 10px;
        color: rgb(170, 170, 170);
        font-size: 15px;
        text-decoration: none;
    }
`;
const Adress = styled.div`
    width: 30%;
    @media all and (max-width: 980px) {
        width: 100%;
        margin-bottom: 50px;
    }
    p {
        font-size: 15px;
        margin-top: 30px;
        color: rgb(170, 170, 170);
        line-height: 28px;
    }
`;
const LeftImg = styled.img`
    width: 100px;
    display: block;

    img {
        width: 100%;
        display: block;
    }
`;
const Tech = styled.div`
    display: flex;
    flex-direction: column;
`;
const Company = styled.div`
    display: flex;
    flex-direction: column;
`;
const Community = styled.div`
    display: flex;
    flex-direction: column;
`;
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    @media all and (max-width: 640px) {
        margin-top: 25px;
    }
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }

    p {
        font-size: 15px;
        color: rgb(170, 170, 170);
        @media all and (max-width: 768px) {
            font-size: 12px;
        }
        @media all and (max-width: 640px) {
            font-size: 12px;
            text-align: center;
            margin-bottom: 15px;
        }
    }
`;
const Left = styled.div`
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const Right = styled.div`
    @media all and (max-width: 640px) {
        justify-content: space-between;
        margin: 0 auto;
    }
    a {
        margin-bottom: 10px;
        color: rgb(170, 170, 170);
        font-size: 15px;
        text-decoration: none;
        margin-right: 10px;
    }
`;
const Span = styled.div`
    display: flex;
    margin-top: 20px;

    a {
        margin-right: 15px;
        height: 20px;
        @media all and (max-width: 980px) {
            height: 100%;
        }
    }
    img {
        width: 100%;
        display: block;
        filter: grayscale(100%);

        &:hover {
            filter: grayscale(0);
        }
    }
`;
const InstagramImg = styled.img`
    height: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const FaceImg = styled.img`
    height: 20px;

    img {
        width: 100%;
        display: block;
    }
`;
const TwitImage = styled.img`
    height: 20px;

    img {
        width: 100%;
        display: block;
    }
`;
const LinkImage = styled.img`
    img {
        width: 100%;
        display: block;
    }
`;
const YouImage = styled.img`
    height: 20px;
    img {
        width: 100%;
        display: block;
    }
`;
const Box = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    @media all and (max-width: 980px) {
        justify-content: space-between;
        width: 100%;
    }
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
    }
`;
