import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutTitle = styled.h4`
    color: palevioletred;
    font-size: 50px;
    text-align: left;
`;

const LeftCol = styled(Col)`
    border-style : solid;
    border-color : pink;
`;

const RightCol = styled(Col)`
    border-style : dotted;
    border-color : pink;
`;

const ListItem = styled.li`
    color: purple;
    font-size: 18px;
`;

const AboutContainer = styled(Container)`
    padding-top: 10%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const About = () =>{
    return(
        <React.Fragment>
            <AboutContainer>
                <Row>
                    <LeftCol md = {4}>
                        <AboutTitle> About Me</AboutTitle>
                    </LeftCol>
                    <RightCol md ={{span: 7, offset: 1}}>
                        <ul>
                            <ListItem>
                                Received my Bachelors of Science in Computer Science at the University of Nebraska - Lincoln on December 2019.
                            </ListItem>
                            <ListItem>
                                Worked as a Summer Undergraduate Research Assistant under UCARE UNL, 
                                Undergraduate Teaching Assistant for Software Engineering and Data Structures and Algorithms.
                            </ListItem>
                            <ListItem>
                                Interested in Software Engineering, Artificial Intelligence, and anything that is challenging in the Computer Science field.
                            </ListItem>
                        </ul>
                    </RightCol>
                </Row>
            </AboutContainer>
        </React.Fragment>
    );
}

export default About;