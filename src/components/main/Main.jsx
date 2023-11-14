import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card1 from './Card1'
import {data} from "../../helper/data"

const Main = () => {
  console.log(data);
  return (
    <div>
      <Container className="rounded-4 my-4 p-3">
        <Row className="justify-content-center g-3">
         
          {data.map((item) => (
            <Col md={6} lg={4} xl={3} key={item.id}>
            
              <Card1 {...item} />
            </Col>
          ))}
          
        </Row>
      </Container>
    </div>
  )
}

export default Main