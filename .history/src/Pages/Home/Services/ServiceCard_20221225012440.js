import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ServiceCard = ({service}) => {
    console.log(service)
    const {img, title, description} = service
    return (
            
                  <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                       {`${description.substring(0,99)}...`}
                      </Card.Text>
                    </Card.Body>
                  </Card>
    );
}

export default ServiceCard;