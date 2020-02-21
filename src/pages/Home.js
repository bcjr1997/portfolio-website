import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaLinkedinIn, FaGithubAlt} from 'react-icons/fa';
import {TiDocumentText} from 'react-icons/ti';
import Resume from '../assets/JunRongBrianChong.pdf';
import Transcript from '../assets/Transcript.pdf';

const Title = styled.h1`
    font-size: 96px;
    text-align: center;
`;

const Description = styled.h5`
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
                                <a rel="noopener noreferrer" href="https://www.github.com/bcjr1997" target="_blank">
                                    <StyledButton>
                                        <FaGithubAlt/>
                                    </StyledButton>
                                </a>
                            </Col>
                            <Col md={3}>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/bcjr1997/" target="_blank">
                                    <StyledButton>
                                        <FaLinkedinIn/>
                                    </StyledButton>
                                </a>
                            </Col>
                            <Col md={3}>
                                <a rel="noopener noreferrer" href={Resume} target="_blank">
                                    <StyledButton>
                                        <TiDocumentText/>
                                    </StyledButton>
                                </a>
                            </Col>
                            <Col md={3}>
                                <a rel="noopener noreferrer" href={Transcript} target="_blank">
                                    <StyledButton>
                                        <TiDocumentText/>
                                    </StyledButton>
                                </a>
                            </Col>
                        </Row>
                    </ButtonBar>
                </Col>
            </Row>
        </HomePageContainer>
    );
}

export default Home;