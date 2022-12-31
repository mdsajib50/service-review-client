import React, { useEffect, useState, } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';
import Spinner from 'react-bootstrap/Spinner';
const Service = () => {
    const {loading} = useContext(AuthContext)
    const [services, setServices] = useState([])
    if (loading) {
        return <Spinner animation="border" />;
    }
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data =>setServices(data))
        .catch(err => console.error(err))
    },[])
    return (
        <div>
            <h1>All Service</h1>
            <div className='mt-12 ml-16 grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
           
                  {
                      services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                  }
            
            </div>
        </div>
    );
};

export default Service;
