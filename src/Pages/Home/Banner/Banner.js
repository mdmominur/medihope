import React from 'react';
import bannerImage from '../../../images/Banner/bannerImage.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="h-100 d-flex align-items-center text-center">
                        <div>
                            <h1 className="display-3 text-brand fw-bold">WE CARE</h1>
                            <h2 className="text-brand fw-normal"> ABOUT YOUR HEALTH</h2>
                            <h2 className="text-brand fw-bold">HEALTH</h2>
                            <p className="bg-brand-2 text-light info-top mt-3">OPEN <span className="fw-bold">24 HRS</span> </p>
                            <p className="banner-pragraph bg-brand p-4 text-light">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="px-4 text-center text-md-end">
                    <img className="w-75" src={bannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;