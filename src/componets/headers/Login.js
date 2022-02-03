import React from 'react';

const Login = () => {
  return <div className='container col-md-5 my-5 py-5 bg-light border border-1'>
      <form className='card my-5 p-4 border  border-dark'>
          <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" style={{ width: "100%" }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                  
          </div>
          <div class="mb-2">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" style={{ width: "100%" }} id="exampleInputPassword1" />
          </div>
          
          <button type="submit" style={{width: "20%"}} class="btn btn-sm btn-success my-2">Submit</button>
      </form>
  </div>;
};

export default Login;
