import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <h1 className="display-6 fw-bold text-brand">Connect With Us</h1>
                        <h4 className="text-brand-2">Information</h4>
                        <div className="row">
                            <div className="col-md-1">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="col-md-11">
                            (+064)-342-68382
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                            <i className="far fa-envelope"></i>
                            </div>
                            <div className="col-md-11">
                            info@automation-logistics.com
                            </div>
                        </div>

                        <h4 className="text-brand mt-4">Social links</h4>
                        <div className="social-icons">
                            <a href="http://facebook.com"><i className="fab fa-facebook"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-twitter"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-instagram-square"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-linkedin"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-dribbble-square"></i></a>
                            <a href="http://facebook.com"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h4 className="mb-4 text-brand mt-5 mt-md-0">Send us message</h4>
                    <form action="">
                        <input type="text" className="form-control" placeholder="Your Name" /> <br />
                        <input type="email" className="form-control" placeholder="Your Email" /> <br />
                        <textarea className="form-control" placeholder="Your Message" cols="30" rows="10"></textarea>
                        <button type="button" className="btn-brand mt-4">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;