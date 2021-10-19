import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Login = () => {
    const {
        handleSetEmail,
        handleSetPassword,
        handleEmailLogin,
        handleGoogleSignIn,
        setError,
        error
    } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';

    // sign in using Google
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
        .then(res => {
            history.push(redirect_uri);
        });
    }

    // Sign in using Email
    const signInUsingEmail = (e) => {

        if(handleEmailLogin(e)){
            handleEmailLogin(e)
            .then(res => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                    const errorCode = error.code;
                    setError(errorCode);
                  });
        }
    }
   
    return (
        <div className="d-flex justify-content-center mt-5 min-vh-100">
            <div className="col-10 col-lg-4">
                <div className="shadow rounded p-4 p-md-5">
                    <h4 className="text-brand">Please Login</h4>
                    <span className="text-danger fw-bold">{error}</span>
                    <form onSubmit={signInUsingEmail}>
                        <input type="email" className="form-control mt-4" placeholder="Your Email" onBlur={handleSetEmail} />
                        <input type="password" className="form-control mt-3" placeholder="Your Password" onBlur={handleSetPassword} /><br />
                        <span>Don't have an account? <Link to="/register" className="text-brand">Register</Link></span><br />
                        <button type="submit" className="btn-brand mt-3">Login</button>
                    </form>
                    <br />
                    <hr />
                    <button className="btn-brand" onClick={signInUsingGoogle}><i className="fab fa-google"></i> Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;