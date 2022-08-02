import React from "react";
import { Link } from "react-router-dom";

//packages
import styled from "styled-components";

function LearningDashboard() {
    return (
        <Container>
            {/* <Wrapper className="wrapper"> */}
            <h3>tech schooling</h3>
            <Box>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/learning">Learning</Link>
                <Link to="/practises">Practices</Link>
                <Link to="/Workshops">Workshops</Link>
                <Link to="/Assessments">Assessments</Link>
                <Link to="/Skills">New Content</Link>
                <Link to="/Certification">Certification</Link>
            </Box>
            {/* </Wrapper> */}
        </Container>
    );
}

export default LearningDashboard;
const Container = styled.div`
    padding-left: 255px;
    margin-top: 85px;
    @media all and (max-width: 1280px) {
        padding-left: 25px;
        margin-top: 80px;
    }
    h3 {
        text-transform: capitalize;
        font-family: goridita_medium;
        font-size: 24px;
        margin-bottom: 19px;
    }
`;
const Box = styled.div`
    display: flex;
    margin-bottom: 35px;
    border-bottom: 1px solid rgb(232, 232, 232);
    @media all and (max-width: 768px) {
        overflow-x: scroll;
    }
    a {
        color: rgb(113, 113, 113);
        font-size: 15px;
        margin-right: 32px;
        font-family: goridita_regular;
        min-width: fit-content;
        @media all and (max-width: 980px) {
            margin-right: 20px;
        }

        &:hover {
            color: rgb(95, 209, 138);
            border-bottom: 3px solid rgb(95, 209, 138);
        }
        @media all and (max-width: 768px) {
            margin-bottom: 23px;
        }
    }
`;
const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    margin-top: 70px;
    max-width: 1325px;
    margin-right: -23px;
`;
