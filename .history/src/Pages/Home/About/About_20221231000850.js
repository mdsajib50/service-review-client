import React from 'react';
import img from '../../../assets/image/beautiful-female.jpg';
import ListGroup from 'react-bootstrap/ListGroup';
import useTitle from '../'

const About = () => {
    useTitle('a')
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h3 className="text-xl">WELCOME TEXT</h3>
                <h1 className="text-5xl font-bold">Psy.D. Helen Pirren</h1>
                
                    <ListGroup variant="flush">
                    <ListGroup.Item>Anxiety and Depression</ListGroup.Item>
                    <ListGroup.Item>Trauma/Abuse/PTSD</ListGroup.Item>
                    <ListGroup.Item>Relationships Issues</ListGroup.Item>
                    <ListGroup.Item>Relationships Substance Abuse</ListGroup.Item>
                    </ListGroup>
                <button className="btn btn-primary m-4">1-3456768-7677</button>
                </div>
            </div>
        </div>
    );
};

export default About;