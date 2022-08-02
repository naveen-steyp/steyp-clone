import React from "react";
//Package
import styled from "styled-components";
//Image
import ArrowImg from "../../assets/image/arrow.svg";

function Exclusive() {
    return (
        <Steyp>
            <Wrapper className="wrapper">
                <ContentBox>
                    <h1>
                        {" "}
                        <span> Steyp</span> is exclusively available for <br />
                        students from <small>Kerala</small>
                    </h1>
                    <Button>
                        Apply for SAT
                        <SpanImg className="Arrow">
                            <SpanImage src={ArrowImg} alt="Arrow" />
                        </SpanImg>
                    </Button>
                </ContentBox>
            </Wrapper>
        </Steyp>
    );
}

export default Exclusive;
const Steyp = styled.div`
    margin-top: 100px;
    background: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/30-04-2022/restricted-background.png)
        125% 0% / 36% no-repeat rgb(33, 33, 33);
    padding: 90px 0px;
    @media all and (max-width: 640px) {
        margin-top: 20px;
    }
`;
const ContentBox = styled.div`
    margin: 0 auto;
    text-align: center;

    h1 {
        font-family: gordita_medium;
        font-size: 35px;
        color: rgb(255, 255, 255);
        font-family: goridita_medium;
        margin-bottom: 25px;
        @media all and (max-width: 768px) {
            font-size: 26px;
        }
        @media all and (max-width: 640px) {
            font-size: 23px;
        }
        @media all and (max-width: 480px) {
            font-size: 15px;
        }
    }

    span {
        font-size: 35px;
        color: rgb(78, 175, 124);
        @media all and (max-width: 480px) {
            font-size: 30px;
        }
    }
    small {
        font-size: 35px;
        position: relative;
        @media all and (max-width: 480px) {
            font-size: 30px;
        }
        &::after {
            content: "";
            position: absolute;
            width: 106px;
            height: 12px;
            bottom: -6px;
            left: 0px;
            display: block;
            background: url(https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/20-04-2022/line.svg)
                0% 0% / contain no-repeat;
        }
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    max-width: 1325px;
`;
const Button = styled.div`
    margin: 35px auto 0px;
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
