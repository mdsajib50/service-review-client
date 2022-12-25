import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

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
        <div className='mt-12 grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
           
                  {
                      services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                  }
            
        </div>
    </div>
    );
}

export default Services;