import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-10 col-lg-4">
                <div className="shadow rounded p-4 p-md-5">
                    <h4 className="text-brand">Please Register</h4>
                    <form action="">
                        <input type="text" className="form-control mt-4" placeholder="Your Name" />
                        <input type="text" className="form-control mt-4" placeholder="Your Email" />
                        <input type="password" className="form-control mt-3" placeholder="Password" />
                        <input type="password" className="form-control mt-3" placeholder="Password Confirm" /><br />
                        <span>Already have an account? <Link to="/login" className="text-brand">Login</Link></span><br />
                        <button type="button" className="btn-brand mt-3">Register</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;