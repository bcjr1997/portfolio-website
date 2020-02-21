import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const ExperienceContainer = styled(Container)`
    padding-top: 2%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const CustomCard = styled(Card)`
    width: 20rem;
`;

const Title = styled.h1`
    color: palevioletred;
    font-size: 96px;
    text-align: center;
    padding-top: 2%;
`;

const Experience = () =>{
    return(
        <React.Fragment>
            <Title>Experience</Title>
            <ExperienceContainer>
                <Row>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>Summer Undergraduate Research Assistant</CustomCard.Title>
                                <CustomCard.Subtitle>June 2019 ~ August 2019</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Researched on images of animals using Machine Learning techniques to determine animal behaviors with TensorFlow and Python.</ListGroupItem>
                                <ListGroupItem> Developed code that augment images with high contrast and horizontally flips them to balance the dataset.</ListGroupItem>
                                <ListGroupItem> Automated the conversion of a dataset to a TFRecord format for better memory performance.</ListGroupItem>
                            </ListGroup>
                        </CustomCard>
                    </Col>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>Undergraduate Teaching Assistant (Software Engineering, CSCE 361)</CustomCard.Title>
                                <CustomCard.Subtitle>August 2018 ~ May 2019</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Helped students with their problems by helping them to recall and revise their Software Engineering concepts</ListGroupItem>
                                <ListGroupItem> Graded their projects and assignments as well as providing them feedback for future improvements </ListGroupItem>
                                <ListGroupItem> Helped the lecturer to improve the course by providing critical feedback</ListGroupItem>
                            </ListGroup>
                        </CustomCard>
                    </Col>
                    <Col className= "p-4">
                        <CustomCard >
                            <CustomCard.Body>
                                <CustomCard.Title>Senior Capstone Software Developer</CustomCard.Title>
                                <CustomCard.Subtitle>August 2018 ~ May 2019</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Developed a program in Python 3 that helps to detect incorrect information on PDF billings with a 92% validation accuracy using Computer Vision.</ListGroupItem>
                                <ListGroupItem> Programmed unit tests with Pytest to detect bugs in the program.</ListGroupItem>
                                <ListGroupItem> Maintained code in PEP-8 standard for easy readability and GitHub for version control.</ListGroupItem>
                            </ListGroup>
                        </CustomCard>
                    </Col>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>Undergraduate Teaching Assistant (Data Structures and Algorithms, CSCE 310)</CustomCard.Title>
                                <CustomCard.Subtitle>Jan 2018 ~ May 2018</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Helped students with their problems by helping them to recall and revise their Data Structures and Algorithms concepts</ListGroupItem>
                                <ListGroupItem> Taught students basic C++ syntax for their assignments</ListGroupItem>
                            </ListGroup>
                        </CustomCard>
                    </Col>
                </Row>
            </ExperienceContainer>
        </React.Fragment>
    );
}

export default Experience;