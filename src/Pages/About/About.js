import React from 'react';
import aboutImg from '../../images/About/aboutUs.png';
const About = () => {
    return (
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-5">
                    <div className="h-100 h-100 d-flex align-items-center">
                        <img src={aboutImg} className="img-fluid rounded" alt="" />
                    </div>
                </div>
                <div className="col-md-6 offset-md-1">
                    <div className="h-100 d-flex align-items-center mt-4 mt-md-0">
                        <div>
                            <h1 className="display-1 fw-bolder text-brand">ABOUT US</h1>
                            <p>Health care (also health-care or healthcare) is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields. Medicine, dentistry, pharmacy, midwifery, nursing, optometry, audiology, psychology, occupational therapy, physical therapy, athletic training, and other health professions are all part of health care. It includes work done in providing primary care, secondary care, and tertiary care, as well as in public health.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;