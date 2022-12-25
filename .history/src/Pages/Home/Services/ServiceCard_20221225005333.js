import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ServiceCard = ({service}) => {
    console.log(service)
    const {img, title, description} = service
    return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{ti}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
}

export default ServiceCard;