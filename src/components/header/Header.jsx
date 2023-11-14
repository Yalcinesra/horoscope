import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


import resim from "../../image/logo.png"

const Header = () => {
  return (
    <header className='header'>
    <Navbar >
    <Container>
    <img  src={resim} alt="" width="100px" />
      
      <Nav
            className="ms-auto my-2 my-lg-0">
        <Nav.Link  href="#home">HOROSCOPE</Nav.Link>
        <Nav.Link href="#home">DAILY</Nav.Link>
        <Nav.Link href="#features">TAROT</Nav.Link>
        <Nav.Link href="#pricing">ARTICLE</Nav.Link>
        <Nav.Link href="#pricing">CONTACT</Nav.Link>
      </Nav>
    </Container>
  </Navbar></header>
      
  )
}

export default Header