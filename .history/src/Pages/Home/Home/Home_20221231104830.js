import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import useTitle from ''
const Home = () => {
    useTitle('home')
    return (
        <div>
           
           <Services></Services>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;