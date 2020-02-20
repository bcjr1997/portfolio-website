import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaLinkedinIn, FaGithubAlt} from 'react-icons/fa';
import {TiDocumentText} from 'react-icons/ti';

const Title = styled.h1`
    color: palevioletred;
    font-size: 96px;
    text-align: center;
`;

const Description = styled.h5`
    color: purple;
    font-size: 32px;
    text-align: center;
`;

const ButtonBar = styled(Container)`
    margin: auto;
    width: 50%;
`;

const HomePageContainer = styled(Container)`
    padding-top: 20%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const StyledButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1.0em;
    padding: 0.25em 1em;
    background-color:transparent;
    border-radius: 50%;
    height: 60px;
    width: 60px;
`;

const Home = () =>{
    return(
        <HomePageContainer>
            <Row>
                <Col>
                    <Title> Brian Chong Jun Rong </Title>
                    <Description>Aspiring Software Engineer | Computer Science Graduate </Description>
                    <ButtonBar>
                        <Row>
                            <Col md={3}>
                                <StyledButton>
                                    <FaGithubAlt/>
                                </StyledButton>
                            </Col>
                            <Col md={3}>
                                <StyledButton>
                                    <FaLinkedinIn/>
                                </StyledButton>
                            </Col>
                            <Col md={3}>
                                <StyledButton>
                                    <TiDocumentText/>
                                </StyledButton>
                            </Col>
                            <Col md={3}>
                                <StyledButton>
                                    <TiDocumentText/>
                                </StyledButton>
                            </Col>
                        </Row>
                    </ButtonBar>
                </Col>
            </Row>
        </HomePageContainer>
    );
}

export default Home;