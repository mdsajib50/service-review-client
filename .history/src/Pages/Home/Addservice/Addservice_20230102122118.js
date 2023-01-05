import React from 'react';

const Addservice = () => {

  const handelService = e =>{
      e.preventDefault()
      const form = e.target;
      const serviceName= form.serviceName.value
      const description = form.description.value
      const price = form.price.value
      const image = fro

      const service = {
          serviceName,
          description,
          price,
          image
      }

      fetch('http://localhost:3000/service',{

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
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input type="text" name='serviceName' placeholder="Service name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="textarea" name='description' placeholder="Bio"></textarea>
              </div>
              <div className="form-control">
              <label className="label">
              <span className="label-text">Price</span>
              </label>
              <input type="number" name='price' placeholder="Price" className="input input-bordered" />
              <label className="label">
                <span className="label-text">Upload Image</span>
            </label>
            <input type="file" name='image' className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Service</button>
            </div>
          </div>
          </form>
        </div>
      </div>
</div>
    );
};

export default Addservice;