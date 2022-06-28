import React from "react";
//Package
import styled from "styled-components";
//Image
import RightImage from "../../assets/image/side-image.png";
import ArrowImg from "../../assets/image/arrow.svg";

function Student() {
    return (
        <Landingpage>
            <Wrapper className="wrapper">
                <Left>
                    <h1>
                        {" "}
                        <span> 40%</span> of students from <br /> a classroom
                        opts for Engineering
                    </h1>
                    <p>
                        A large number of students opts for Engineering because
                        of various reasons. Some students opt it out of passion
                        while some out of peer pressure. A majority of
                        Engineering graduated do not land a core job, because
                        they are not meant to become Engineers, but they might
                        become a good artist, a doctor, a teacher, a dancer,
                        etc. The fact remains is, everyone are not meant for``
                        Engineering.
                    </p>
                    <p>
                        Here is where Steyp comes in, to check the eligibility
                        of students, that whether a student is fit for
                        Engineering or not.
                    </p>
                    <Button>
                        Apply for SAT
                        <SpanImg className="Arrow">
                            <SpanImage src={ArrowImg} alt="Arrow" />
                        </SpanImg>
                    </Button>
                </Left>
                <Right>
                    <RightImg src={RightImage} alt="Sideimg" />
                </Right>
            </Wrapper>
        </Landingpage>
    );
}

export default Student;
const Landingpage = styled.div`
    margin-top: 100px;
    @media all and (max-width: 640px) {
        margin-top: 50px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
    @media all and (max-width: 980px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 45%;
    @media all and (max-width: 980px) {
        width: 100%;
    }
    h1 {
        color: rgb(33, 33, 33);
        font-size: 34px;
        font-family: goridita_medium;
        @media all and (max-width: 1280px) {
            font-size: 30px;
            max-width: 92%;
        }
        @media all and (max-width: 1080px) {
            width: unset;
            max-width: unset;
        }
        @media all and (max-width: 980px) {
            font-size: 38px;
        }
        @media all and (max-width: 768px) {
            font-size: 32px;
        }
        @media all and (max-width: 640px) {
            font-size: 23px;
        }
    }

    span {
        color: rgb(15, 167, 111);
    }
    p {
        width: 79%;
        margin: 10px 0px 30px;
        @media all and (max-width: 1080px) {
            width: 91%;
        }
        @media all and (max-width: 980px) {
            font-size: 18px;
        }
        @media all and (max-width: 640px) {
            font-size: 15px;
        }
    }
`;
const Right = styled.div`
    width: 55%;
    @media all and (max-width: 1280px) {
        margin-top: 130px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
    @media all and (max-width: 640px) {
        margin-top: 50px;
    }
`;
const RightImg = styled.img`
    width: 100%;
    display: block;
`;
const Button = styled.div`
    cursor: pointer;
    width: 200px;
    padding: 15px 14px;
    background: linear-gradient(
            100deg,
            rgb(15, 167, 111) 0%,
            rgb(15, 158, 167) 100%
        )
        0% 0% no-repeat padding-box padding-box transparent;
    font-size: 15px;
    color: rgb(255, 255, 255);
    font-family: goridita_medium;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    @media all and (max-width: 480px) {
        width: 157px;
        height: 44px;
    }
    &:hover .Arrow {
        /* display: block; */
        width: 20px;
        transition: 0.2s ease-in;
    }
`;
const SpanImg = styled.div`
    width: 0;
`;

const SpanImage = styled.img`
    width: 100%;
    display: block;
`;
