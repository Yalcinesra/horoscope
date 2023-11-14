import React, { useState } from 'react'
import { Card } from "react-bootstrap";

const Card1 = ({title,date,desc,image}) => {

  const [showImage,setShow]=useState(true)
   
  return (
    <Card className="rounded-2 m-auto player-kart" role="button" onClick={() => setShow(!showImage)}>
      {showImage ? (
        <Card.Img variant="top" src={image}  className="player-logo"/>
        
        
      ) : ( <p>{desc}</p>)}

      <Card.Footer>
        <Card.Title> <h6>{title}</h6>
        </Card.Title>
        <h6>{date}</h6>
      </Card.Footer>
    </Card>
    
  );
}

export default Card1;