import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AiTwotoneMail} from 'react-icons/ai';

const Description = styled.h5`
    font-size: 50px;
    text-align: center;
`;

const MailIcon = styled(AiTwotoneMail)`
    font-size: 200px;
    text-align: center;
`;

const ContactContainer = styled(Container)`
    padding-top: 10%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const DescriptionBox = styled(Container)`
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Contact = () =>{
    return(
        <React.Fragment>
            <ContactContainer>
                <Row>
                    <Col>
                        <MailIcon/>
                    </Col>
                </Row>
            </ContactContainer>
            <DescriptionBox>
                <Description>
                    If interested, shoot me an email at brian.cjr2323@gmail.com
                </Description>
            </DescriptionBox>
        </React.Fragment>
    );
}

export default Contact;
