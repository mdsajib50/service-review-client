import React, { useEffect, useState } from 'react';


const Services = () => {
    const [services,  setServices] = useState([]);
    useEffect(()=>{
        fetch('https://service-review-server-ebon.vercel.app/services')
        .then(res => res.json())
        .then(data =>setServices(data))
        .catch(e => console.error(e))
    },[])
    return (
    <div>
        <h1>Service</h1>
        {
            services.map()
        }
    </div>
    );
};

export default Services;