import React from 'react';

function LoginPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
