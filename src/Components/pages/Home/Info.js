import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../../resources/icons/clock.svg';
import marker from '../../../resources/icons/marker.svg';
import phone from '../../../resources/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 justify-center items-center px-6'>
            <InfoCard bgColor={'bg-gradient-to-r from-secondary to-primary'} cardDescriptions={'Lorem Ipsum is simply dummy text of the pri'} cardTitle={'Opening Hours'} img={Clock}/>
            <InfoCard bgColor={'bg-accent'} cardDescriptions={'Brooklyn, NY 10036, United States'} cardTitle={'Visit our location'} img={marker}/>
            <InfoCard bgColor={'bg-gradient-to-r from-secondary to-primary'} cardDescriptions={'+000 123 456789'} cardTitle={'Contact us now'} img={phone}/>
        </div>
    );
};

export default Info;