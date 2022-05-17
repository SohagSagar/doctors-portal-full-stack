import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableServices from './AvailableServices';
import Footer from '../../shared_pages/Footer'
import { format } from 'date-fns';

const Appionment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={format(date,'PP')} setDate={setDate}/>
            <AvailableServices date={format(date,'PP')}/>
            <Footer/>
        </div>
    );
};

export default Appionment;