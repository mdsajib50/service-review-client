import React from 'react';
import img from '../../../assets/beautiful-female.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h3 className="text-xl">WELCOME TEXT</h3>
                <h1 className="text-5xl font-bold">Psy.D. Helen Pirren</h1>
                


                    <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                <button className="btn btn-primary">1-3456768-7677</button>
                </div>
            </div>
        </div>
    );
};

export default About;