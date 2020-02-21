import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

const Title = styled.h1`
    color: palevioletred;
    font-size: 30px;
    padding-top: 5%;
    text-align: center;
`;

const CustomCard = styled(Card)`
    width: 20rem;
`;

const ProjectsContainer = styled(Container)`
    padding-top: 2%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Projects = () =>{
    return(
        <React.Fragment>
            <Title>Projects</Title>
            <ProjectsContainer>
                <Row>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>Portfolio Website V2</CustomCard.Title>
                                <CustomCard.Subtitle>This Website!</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Tools Used:- <br/> <strong>JavaScript, ReactJS, Styled-Components, Git, CSS3, HTML5, React-Router, React-Bootstrap</strong></ListGroupItem>
                                <ListGroupItem> Purpose:- <br/> Developed for Job Hunting and showcasing portfolios.</ListGroupItem>
                                <ListGroupItem> Developed the front-end of the website using <strong>JavaScript</strong> and <strong>ReactJS</strong></ListGroupItem>
                                <ListGroupItem> Styled the website using <strong>Styled-Components, CSS3, HTML5, and React-Bootstrap </strong> and used <strong>GitHub</strong> as version control</ListGroupItem>
                                <ListGroupItem> Used <strong>React-Router</strong> to handle page routing in ReactJS</ListGroupItem>
                            </ListGroup>
                            <Button href="https://github.com/bcjr1997/portfolio-website">
                                GitHub Link
                            </Button>
                        </CustomCard>
                    </Col>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>PDFSense</CustomCard.Title>
                                <CustomCard.Subtitle>Design Studio Project (Senior Capstone Project)</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Tools Used:- <br/> <strong>Python 3, Git, ImageMagick, Travis-CI, PyTest</strong></ListGroupItem>
                                <ListGroupItem> Purpose:- <br/> Senior Capstone project from Design Studio</ListGroupItem>
                                <ListGroupItem> Developed a program in <strong>Python 3 </strong>that helps to detect incorrect information on PDF billings with a 92% validation accuracy using <strong>Computer Vision.</strong></ListGroupItem>
                                <ListGroupItem> Programmed unit tests with <strong>Pytest</strong> to detect bugs in the program.</ListGroupItem>
                                <ListGroupItem> Maintained code in <strong>PEP-8</strong> standard for easy readability and <strong>GitHub</strong> for version control.</ListGroupItem>
                            </ListGroup>
                        </CustomCard>
                    </Col>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>DopplerTwitter: Twitter Clone</CustomCard.Title>
                                <CustomCard.Subtitle>Class Project for Internet Systems and Programming (CSCE 464)</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Tools Used:- <br/> <strong>JavaScript, AngularJS, NodeJS, Express, MongoDB, Bootstrap 4, CSS3, HTML5</strong></ListGroupItem>
                                <ListGroupItem> Purpose:- <br/>Replicating Twitter using <strong>MEAN</strong>stack</ListGroupItem>
                                <ListGroupItem> Developed a Twitter clone in a Single Page Application that uses <strong>MongoDB, Express, AngularJS,
                                NodeJS and Bootstrap.</strong></ListGroupItem>
                                <ListGroupItem> Programmed the front-end of the Web application using <strong>AngularJS and Bootstrap 4</strong></ListGroupItem>
                                <ListGroupItem> Programmed the back-end of the Web application using <strong>MongoDB</strong> for storage</ListGroupItem>
                            </ListGroup>
                            <Button href="https://github.com/bcjr1997/DopplerTwitter">
                                GitHub Link
                            </Button>
                        </CustomCard>
                    </Col>
                </Row>
            </ProjectsContainer>
            <ProjectsContainer>
                <Row>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>Concert Ticket Website: TicketMaster Clone</CustomCard.Title>
                                <CustomCard.Subtitle>Class Project for Internet Systems and Programming (CSCE 464)</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Tools Used:- <br/> <strong>Java, J2EE, MySQL, Apache Tomcat, Bootstrap 4, CSS3, HTML5</strong></ListGroupItem>
                                <ListGroupItem> Purpose:- <br/>Replicating TicketMaster using <strong>Java</strong>stack</ListGroupItem>
                                <ListGroupItem> Developed a TicketMaster clone that sells tickets using <strong> Java, JSP, J2EE, Servlets, and Bootstrap.</strong></ListGroupItem>
                                <ListGroupItem> Programmed the front-end of the Web application using <strong>CSS3 and Bootstrap 4</strong></ListGroupItem>
                                <ListGroupItem> Programmed the back-end of the Web application using <strong>MySQL</strong> for storage</ListGroupItem>
                            </ListGroup>
                            <Button href="https://github.com/bcjr1997/ConcertWebAppUsingAJAX">
                                GitHub Link
                            </Button>
                        </CustomCard>
                    </Col>
                    <Col className= "p-4">
                        <CustomCard>
                            <CustomCard.Body>
                                <CustomCard.Title>Sentree: Violence Detecting System Concept</CustomCard.Title>
                                <CustomCard.Subtitle>CornHacks 2019 (Hackathon)</CustomCard.Subtitle>
                            </CustomCard.Body>
                            <ListGroup>
                                <ListGroupItem> Tools Used:- <br/> <strong>JavaScript, TensorFlow, Python, CSS3, HTML5</strong></ListGroupItem>
                                <ListGroupItem> Purpose:- <br/>Build a proof of concept that detects bullying</ListGroupItem>
                                <ListGroupItem> Collaborated with a team of 4 members to develop a proof of concept in a Web Application with
                                Computer Vision that detects violence in a team of four members.</ListGroupItem>
                                <ListGroupItem> Programmed Machine Learning code that classify violence based on the given images and labels using
                                <strong> Python and TensorFlow</strong></ListGroupItem>
                            </ListGroup>
                        </CustomCard>
                    </Col>
                </Row>
            </ProjectsContainer>
        </React.Fragment>
    );
}

export default Projects;