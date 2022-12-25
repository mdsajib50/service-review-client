import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">About us</a> 
  </div> 
    <a className="link link-hover">Contact</a> 
  <div>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
    );
};

export default Footer;