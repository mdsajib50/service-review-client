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
       <div>
            <div><h1>Service</h1></div>
        <div>
           
                  {
                      services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                  }
              </Col>
          </Row>
        </div>
    </div>
    );
}

export default Services;