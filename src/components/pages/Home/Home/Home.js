import React from 'react';
import Footer from '../../../Shared/Footer';
import Nevigation from '../../../Shared/Nevigation';
import HomeContent from '../HomeContent/HomeContent';

const Home = () => {
    return (
        <div>
            <Nevigation></Nevigation>
            <HomeContent></HomeContent>
            <Footer></Footer>
        </div>
    );
};

export default Home;