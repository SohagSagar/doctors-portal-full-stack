import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Treatment from './Treatment';
import Sevices from './Sevices';
import MakeApoinment from './MakeApoinment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Sevices/>
            <Treatment/>
            <MakeApoinment/>
        </div>
    );
};

export default Home;