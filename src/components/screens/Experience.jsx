import React, { useState } from "react";

//Packages
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StudentProfileModal from "../includes/Modal/StudentProfileModal";

//images
import Linkedn from "../../assets/image/linkedin-white.svg";
import SiyaImage from "../../assets/image/bismiya-min.jpg";
import LuxmiImage from "../../assets/image/laxmi.jpg";
import SanoobImage from "../../assets/image/sanoop-min-min-min_z20uBMu.jpg";
import FathimaImage from "../../assets/image/Copy_of_14061-Fath_cEY4FGm.jpg";
function Experience() {
    const [state, setState] = useState([
        {
            image: SiyaImage,
            name: "Siya WIlson",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "STEYP",
            Heading:
                "Steyp is a team with a big vision. The team consists of very.",
            span: "see More",
        },
        {
            image: LuxmiImage,
            name: "Lekshmi B S",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "STEYP",
            Heading:
                "Amazing, Really helpful for students. All the concepts can  ",
            span: "see More",
        },
        {
            image: SanoobImage,
            name: "Sanoob",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "STEYP",
            Heading:
                "The beginning was a bit difficult but then everything got easy.. ",
            span: "see More",
        },
        {
            image: FathimaImage,
            name: "Fathimath Summaya",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "SA-ADIYA",
            Heading:
                "I learned a lot of things from this course. I got knowledge",
            span: "see More",
        },
    ]);
    const [modals, setModals] = useState([
        {
            image: SiyaImage,
            name: "Siya WIlson",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "STEYP",
            Heading:
                "Steyp is a team with a big vision. The team consists of very.",
            span: "see More",
        },
        {
            image: LuxmiImage,
            name: "Lekshmi B S",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "STEYP",
            Heading:
                "Amazing, Really helpful for students. All the concepts can  ",
            span: "see More",
        },
        {
            image: SanoobImage,
            name: "Sanoob",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "STEYP",
            Heading:
                "The beginning was a bit difficult but then everything got easy.. ",
            span: "see More",
        },
        {
            image: FathimaImage,
            name: "Fathimath Summaya",
            Linkedn: Linkedn,
            paragraph: "Linkedin Profile",
            para2: "SA-ADIYA",
            Heading:
                "I learned a lot of things from this course. I got knowledge",
            span: "see More",
        },
    ]);

    const [isModal, setModal] = useState(false);
    const [color, setColor] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const handleSuccessModal = () => {
        setModal(!isModal);
    };
    const renderitem = () => {
        return state.map((items) => (
            <Box onClick={() => setModal(true)}>
                <ImgContainer>
                    <img src={items.image} alt="Image" />
                </ImgContainer>
                <Cover>
                    00
                    <Top>
                        <h4>{items.name}</h4>
                        <a href="">
                            <span className="img">
                                <img src={items.Linkedn} alt="Link " />
                            </span>
                            <p>{items.paragraph}</p>
                        </a>
                    </Top>
                    <p>{items.para2}</p>
                    <h5>{items.Heading} </h5>
                    <span>{items.span}</span>
                </Cover>
            </Box>
        ));
    };
    const renderitems = () => {
        return modals.map((items) => (
            <Box onClick={() => setModal(true)}>
                <ImgContainer>
                    <img src={items.image} alt="Image" />
                </ImgContainer>
                <Cover>
                    <Top>
                        <h4>{items.name}</h4>
                        <a href="">
                            <span className="img">
                                <img src={items.Linkedn} alt="Link " />
                            </span>
                            <p>{items.paragraph}</p>
                        </a>
                    </Top>

                    <p>{items.para2}</p>
                    <h5>{items.Heading} </h5>

                    <span>{items.span}</span>
                </Cover>
            </Box>
        ));
    };
    return (
        <Students>
            <Wrapper className="wrapper">
                <h1>
                    What our students say about the experience in{" "}
                    <span>Steyp</span>
                </h1>
                <Slider {...settings}>
                    <Container className="flex">{renderitem()}</Container>

                    <Container className="flex">{renderitems()}</Container>
                </Slider>
                <StudentProfileModal
                    isModal={isModal}
                    setModal={setModal}
                    handleSuccessModal={handleSuccessModal}
                />
            </Wrapper>
        </Students>
    );
}

export default Experience;
const Students = styled.div`
    margin-top: 100px;
    @media all and (max-width: 480px) {
        margin-top: 25px;
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;

    h1 {
        font-size: 35px;
        font-family: goridita_medium;
        color: rgb(33, 33, 33);
        max-width: 721px;
        margin: 0 auto 55px;
        text-align: center;
        @media all and (max-width: 640px) {
            font-size: 28px;
        }
        @media all and (max-width: 480px) {
            font-size: 21px;
        }
    }
    span {
        color: rgb(15, 167, 111);
    }
`;

const ContentBox = styled.div``;
const Container = styled.div`
    &.flex {
        display: flex !important;
        flex-wrap: wrap !important;
    }
`;

const Scroll = styled.div`
    display: flex !important;
    /* flex-wrap: wrap; */
`;
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
