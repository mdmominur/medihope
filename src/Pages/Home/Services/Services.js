import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(result => setServices(result));
    }, []);
    return (
        <div className="container-fluid mt-5 py-5" id="service">
            <div className="container">
                <h1 className="brand-heading text-brand"><span>Our Services</span></h1>
                <Row xs={1} md={3} className="g-5 mt-4">
                    
                            {
                                services.map(ser => <Service key={ser.id} service={ser}></Service>)
                            }
                            
                    
                    </Row>

            </div>
        </div>
    );
};

export default Services;