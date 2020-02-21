import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: palevioletred;
    }
    .navbar-brand, .navbar-nav, .nav-link .nav-item{
        color: white;
        &:hover{
            color: black;
        }
    }
`;


const NavBar = () =>{
    return(
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">BCJR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/experience">Experience</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}

export default NavBar;