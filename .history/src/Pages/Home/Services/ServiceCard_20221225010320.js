import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ServiceCard = ({service}) => {
    console.log(service)
    const {img, title, description} = service
    return (
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                       {`${desc}`}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
    );
}

export default ServiceCard;