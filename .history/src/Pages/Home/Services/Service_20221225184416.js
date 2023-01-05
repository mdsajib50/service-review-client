import React, { useEffect, useState } from 'react';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://service-review-server-ebon.vercel.app/service')
        .then(res => res.json())
        .th
    },[])
    return (
        <div>
            <h1>Service</h1>

        </div>
    );
};

export default Service;
