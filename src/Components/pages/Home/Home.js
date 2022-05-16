import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Treatment from './Treatment';
import Sevices from './Sevices';
import MakeApoinment from './MakeApoinment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../../shared_pages/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Sevices/>
            <Treatment/>
            <MakeApoinment/>
            <Testimonials/>
            <Contact/>
            <Footer/>


        </div>
    );
};

export default Home;