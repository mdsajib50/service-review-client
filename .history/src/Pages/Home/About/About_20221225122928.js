import React from 'react';
import img from '../../../assets/beautiful-female.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <button className="btn btn-primary">1-3456768-7677</button>
                <div>
                    <h3 className="text-xl>WELCOME TEXT</h3>
                <h1 className="text-5xl font-bold">Psy.D. Helen Pirren</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default About;