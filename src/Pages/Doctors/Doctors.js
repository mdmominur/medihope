import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
   const [doctors, setDoctors] = useState([]);
   useEffect(()=>{
       fetch('/doctors.json')
       .then(res => res.json())
       .then(result => setDoctors(result));
   }, []);
    return (
        <div className="container py-5 my-5">
            <h1 className="brand-heading text-brand"><span>Our Doctors</span></h1>
            <div className="row mt-5 g-4">
                {
                    doctors.map(doc => <Doctor key={doc.name} doctor={doc}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;