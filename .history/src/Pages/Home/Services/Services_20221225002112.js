import React, { useEffect, useState } from 'react';


const Services = () => {
    const [services,  setServices] = useState([]);
    useEffect(()=>{
        fetch('https://service-review-server-ebon.vercel.app/services')
    },[])
    return (
    <div>
        <h1>Service</h1>
        {

        }
    </div>
    );
};

export default Services;