import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Register = () => {
    const {
        handleSetName,
        handleSetEmail,
        handleSetPassword,
        handleSetConfirmPassword,
        handleEmailRegister,
        error,
       
    } = useAuth();

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-10 col-lg-4">
                <div className="shadow rounded p-4 p-md-5">
                    <h4 className="text-brand">Please Register</h4>
                    <span className="text-danger fw-bold">{error}</span>
                    <form onSubmit={handleEmailRegister}>
                        <input type="text" onBlur={handleSetName} className="form-control mt-4" placeholder="Your Name" />
                        <input type="text" onBlur={handleSetEmail} className="form-control mt-4" placeholder="Your Email" />
                        <input type="password" onBlur={handleSetPassword} className="form-control mt-3" placeholder="Password" />
                        <input type="password" onBlur={handleSetConfirmPassword} className="form-control mt-3" placeholder="Password Confirm" /><br />
                        <span>Already have an account? <Link to="/login" className="text-brand">Login</Link></span><br />
                        <button type="submit" className="btn-brand mt-3">Register</button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;