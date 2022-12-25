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
        <h1>Service</h1>
        {
            services.map(service => <ServiceCard key></ServiceCard>)
        }
    </div>
    );
};

export default Services;