import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/image/steyp-logo.svg";
import MenuImg from "../../assets/image/sidebar-menu.svg";
import LoginPage from "./LoginPage";
import DashBoard from "./Modal/DashBoard";
import $ from "jquery";

function Header() {
    const [isActive, setActive] = useState(false);
    const [isDash, setDash] = useState(false);
    useEffect(() => {
        if (isDash) {
            $("html").addClass("modal-enabled");
        } else {
            $("html").removeClass("modal-enabled");
        }
    }, [isDash]);

    console.log(isActive, "actkj");

    return (
        <>
            <Cover>
                <Wrapper className="wrapper">
                    <Left>
                        <h1>
                            <a href="">
                                <Logo src={LogoImg} alt="logo" />
                            </a>
                        </h1>
                    </Left>
                    <Right>
                        <RightDashboard onClick={() => setActive(!isActive)}>
                            <Title>Go to dashboard</Title>
                        </RightDashboard>
                        <Menubar onClick={() => setDash(!isDash)}>
                            <Menu src={MenuImg} alt="menubar" />
                        </Menubar>
                        <Login type={isActive}>
                            <LoginPage
                                setActive={setActive}
                                isActive={isActive}
                            />
                        </Login>
                    </Right>
                </Wrapper>
                <DashBoard setDash={setDash} isDash={isDash} />
            </Cover>
        </>
    );
}
export default Header;
const Cover = styled.div`
    height: 100px;
    background-color: rgb(255, 255, 255);
    position: fixed;
    width: 100%;
    z-index: 100;
`;
const Logo = styled.img`
    width: 100%;
    display: block;
`;
const Wrapper = styled.div`
    width: 85%;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 1325px;
`;
const Left = styled.div`
    width: 120px;
    h1 {
        @media all and (max-width: 980px) {
            width: 100px;
        }

        @media all and (max-width: 768px) {
            width: 90px;
        }
        @media all and (max-width: 640px) {
            width: 85px;
        }
        @media all and (max-width: 480px) {
            width: 80px;
        }
        @media all and (max-width: 360px) {
            width: 70px;
        }
    }
`;
const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
const RightDashboard = styled.div``;
const Login = styled.div`
    position: absolute;
    transition: 0.6s ease;
    top: 0;
    position: fixed;
    right: ${({ type }) => (type ? "0" : "-721px")};
`;
const Title = styled.h1`
    color: rgb(78, 175, 124);
    font-size: 16px;
    border: 2px solid rgb(78, 175, 124);
    width: 200px;
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    @media all and (max-width: 640px) {
        width: 150px;
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Menu = styled.img`
    width: 100%;
    display: block;
`;

const Menubar = styled.span`
    width: 30px;
    margin-left: 30px;
`;
