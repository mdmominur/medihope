import React from 'react';
import '../Contact/Contact.css';
const Doctor = ({doctor}) => {
    const {name, image} = doctor; 
    return (
        <div className="col-md-4">
            <div className="shadow-lg rounded text-center pb-4">
                <div>
                    <img className="img-fluid" src={image} alt="" /> 
                </div>
                <div className="p-4">
                    <h4>{name}</h4>
                    <p className="text-brand fw-bold">Doctor</p>
                    <div className="social-icons">
                            <a href="http://facebook.com"><i className="fab fa-facebook"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-twitter"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-instagram-square"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-linkedin"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-dribbble-square"></i></a>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Doctor;