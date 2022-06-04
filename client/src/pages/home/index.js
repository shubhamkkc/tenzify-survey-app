import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
    return (
        <Container>
            Home
            <div className="title">this is title</div>
        </Container>
    );
}

const Container = styled.div`
    background: blue;
    height: 100vh;
    .title {
        background: black;
    }
`;

export default Home;
