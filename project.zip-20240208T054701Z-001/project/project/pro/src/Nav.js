import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MdLiveTv,MdCardMembership} from "react-icons/md";
import {BiRun} from "react-icons/bi"
import {GrMoreVertical} from "react-icons/gr"
const Navi = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><MdLiveTv size={'1.5em'}/>Live</Nav.Link>
                        <Nav.Link href="#features"><MdCardMembership size={'1.5em'}/>Memberships</Nav.Link>
                        <Nav.Link href="#pricing"><BiRun size={'1.5em'}/>Plane</Nav.Link>
                        <Nav.Link href="#pricing"><GrMoreVertical size={'1.5em'}/>More</Nav.Link>
                        
                    
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Navi
