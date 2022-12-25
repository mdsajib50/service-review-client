import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ServiceCard = ({service}) => {
    console.log(service)
    const {img, title, description} = service
    return (
            <Row xs={1} md={2} lg={3} className="g-4">
              
                <Col  >
                  <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                       {`${description.substring(0,99)}...`}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
    );
}

export default ServiceCard;