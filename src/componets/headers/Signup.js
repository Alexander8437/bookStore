
import React from 'react';

const Signup = () => {
  return <div className='container  col-md-6 my-5 py-5'>
    <form className='card my-5 p-4 border  border-dark'>
      <div class="mb-2">
        <label for="fullName" class="form-label">Name</label>
        <input type="text" class="form-control" style={{ width: "100%" }} id="fullName"  />
      </div>
      <div class="mb-2">
        <label for="phone" class="form-label">Number</label>
        <input type="phone" class="form-control" style={{ width: "100%" }} id="phone" />
      </div>
      <div class="mb-2">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" style={{ width: "100%" }} id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-2">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" style={{ width: "100%" }} id="exampleInputPassword1" />
      </div>

      <button type="submit" style={{ width: "20%" }} class="btn btn-sm btn-success my-2">Submit</button>
    </form>
  </div>;
};

export default Signup;
