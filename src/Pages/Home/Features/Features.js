import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {
    const [features, setFeatures] = useState([]);
    useEffect(()=>{
        fetch('/features.json')
        .then(res => res.json())
        .then(result => setFeatures(result));
    }, []);
    
    return (
        <div className="container mt-5 py-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex align-items-center mb-4 h-100">
                        <div>
                            <h1 className="display-1">Our Latest Features</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            <button className="btn-brand">View More</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-7 offset-md-1">
                    <div className="row g-4">

                        {
                            features.map(feat => <Feature feature={feat} key={feat.title}></Feature>)
                        }
                        
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;