import React from 'react';

const Addservice = () => {
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
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Addservice;