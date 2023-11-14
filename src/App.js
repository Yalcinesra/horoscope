import React from 'react'
import Header from './components/header/Header'


import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

import Main from './components/main/Main';



const App = () => {
  return (
    <Container className="text-center mt-4">
    <Header/>
    <Main/>
   
  </Container>
  )
}

export default App