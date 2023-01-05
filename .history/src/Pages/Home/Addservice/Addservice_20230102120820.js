import React from 'react';

const Addservice = () => {

  const handelService = e =>{
      e.preventDefault()
      const form = e.target;
      

      const service = {
          
      }

      fetch('',{

          method: 'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(service)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          if (data.acknowledged) {
              alert('Service Add Successfully')
              form.reset()
          }
      })
      .catch(err => console.error(err))
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form action="" method="post"></form>
      </div>
</div>
    );
};

export default Addservice;