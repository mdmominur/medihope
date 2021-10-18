import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../Home/Service/Service.css';

const SingleService = () => {
    const {id} = useParams();
    const [service, setService] = useState({});
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(result =>{
           const foundService = result.find(ser => ser.id === parseInt(id));
           setService(foundService);
        });
    }, []);

    return (
        <div className="mt-5 d-flex justify-content-center">
             <div className="shadow p-4 rounded service col-md-3">
                <div className="text-brand text-center">
                    <i className={service?.icon}></i>
                </div>
                <div className="mt-4">
                    <h4>{service?.title}</h4>
                    <p>{service?.description}</p>
                    <div className="text-center">
                        <Link to={`/home`}>
                            <button className="btn-brand">Back To Home</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;