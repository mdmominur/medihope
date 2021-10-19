import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="text-center">
                <h1 className="display-1 text-brand fw-bold">404</h1>
                <p className="display-6 text-brand">Oops! Page Not Found</p>
                <p>The page you were looking for could not be found.</p>
                <Link to="/home">
                    <button className="btn-brand">Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;