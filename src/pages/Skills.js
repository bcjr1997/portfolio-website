import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevIcon from "devicon-react-svg";

const SkillsContainer = styled(Container)`
    padding-top: 5%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 48px;
`;

const ItemsContainer = styled(DevIcon)`
    Font-size: 2rem;
    color: palevioletred;
`;

const Description = styled.h5`
    color: purple;
    font-size: 32px;
    text-align: center;
`;

const Skills = () =>{
    return(
        <React.Fragment>
            <SkillsContainer>
                <Row>
                    <Col>
                        <Description>
                            Programming Languages & Tools
                        </Description>
                        <ItemsContainer>
                            <Row>
                                <Col lg = {2}>
                                    <DevIcon icon = "java"/>
                                </Col>
                                <Col lg = {2}>
                                    <DevIcon icon = "python"/>
                                </Col>
                                <Col lg = {2}>
                                    <DevIcon icon = "javascript"/>
                                </Col>
                                <Col lg = {2}>
                                    <DevIcon icon = "git"/>
                                </Col>
                                <Col lg = {2}>
                                    <DevIcon icon = "github_alt"/>
                                </Col>
                            </Row>
                        </ItemsContainer>
                    </Col>
                </Row>
            </SkillsContainer>
        </React.Fragment>
    );
}

export default Skills;