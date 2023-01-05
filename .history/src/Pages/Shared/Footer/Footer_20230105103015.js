import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover" href='/home'>Home</a> 
            <a className="link link-hover" href='/service'>Service</a> 
            <a className="link link-hover" href='/about'>About</a> 
            <a className="link link-hover" href='/blog'>Blog</a> 
          </div> 
          <div>
            <p>Copyright © 2022 - All right reserved by Therapy</p>
          </div>
        </footer>
    );
};

export default Footer;