import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Services = () => {
    const [services,  setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>setServices(data))
        .catch(e => console.error(e))
    },[])
    return (
       
        <div><h1>Service</h1></div>
        <div>
            <Row className="g-4">
              
              <Col xs='12' md='2' lg='4'></Col>
                  {
                      services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                  }
              <Col/>
          <Row/>
        </div>
       
   
    );
}

export default Services;