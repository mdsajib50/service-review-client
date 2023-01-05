import React from 'react';

const Addservice = () => {
  const {_id, title, price}= useLoaderData();
  const {user} = useContext(AuthContext)

  const handelOrder = e =>{
      e.preventDefault()
      const form = e.target;
      const name = `${form.fname.value} ${form.lname.value}`
      const email = user?.email || 'unregistered'
      const phone = form.phone.value;
      const message = form.message.value;

      const order = {
          service: _id,
          serviceName: title,
          price,
          customer: name,
          email,
          phone,
          message
      }

      fetch('',{

          method: 'POST',
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(order)
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
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Service name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea className="textarea" placeholder="Bio"></textarea>
          </div>
          <div className="form-control">
          <label className="label">
          <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" className="input input-bordered" />
          <label className="label">
            <span className="label-text">Upload Image</span>
        </label>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Service</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Addservice;