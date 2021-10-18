import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, icon, title, description} = service;
    return (
        <Col>
            <div className="shadow p-4 rounded service">
                <div className="text-brand text-center">
                    <i className={icon}></i>
                </div>
                <div className="mt-4">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <Link to={`/service/${id}`}>
                        <button className="btn-brand">SEE MORE</button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;