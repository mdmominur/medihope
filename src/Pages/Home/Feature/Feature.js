import React from 'react';

const Feature = ({feature}) => {
    const {icon, title, description} = feature;
    return (
        <div className="col-md-6">
            <div className="shadow-lg p-4 rounded">
                <i style={{ "font-size": "50px", "color": '#00DBC3' }} className={icon}></i>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Feature;