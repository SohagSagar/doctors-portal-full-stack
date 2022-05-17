import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableServices from './AvailableServices';
import Footer from '../../shared_pages/Footer'

const Appionment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}/>
            <AvailableServices date={date}/>
            <Footer/>
        </div>
    );
};

export default Appionment;