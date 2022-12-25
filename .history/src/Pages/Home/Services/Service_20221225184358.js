import React, { useEffect, useState } from 'react';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res =>)
    },[])
    return (
        <div>
            <h1>Service</h1>

        </div>
    );
};

export default Service;
