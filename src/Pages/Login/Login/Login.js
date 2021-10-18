import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Login = () => {
    const {handleGoogleSignIn} = useAuth();
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="col-10 col-lg-4">
                <div className="shadow rounded p-4 p-md-5">
                    <h4 className="text-brand">Please Login</h4>
                    <form action="">
                        <input type="email" className="form-control mt-4" placeholder="Your Email" />
                        <input type="password" className="form-control mt-3" placeholder="Your Password" /><br />
                        <span>Don't have an account? <Link to="/register" className="text-brand">Register</Link></span><br />
                        <button type="button" className="btn-brand mt-3">Login</button>
                    </form>
                    <br />
                    <hr />
                    <button className="btn-brand" onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;