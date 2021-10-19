import React from 'react';
import Achivements from '../Achivements/Achivements';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <Achivements></Achivements>
        </>
    );
};

export default Home;