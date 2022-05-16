import React from 'react';
import Service from './Service';
import fluoride from '../../../resources/images/fluoride.png';
import cavity from '../../../resources/images/cavity.png';
import whitening from '../../../resources/images/whitening.png';

const Sevices = () => {
    return (
        <div>
            <h1 className='text-center text-secondary font-bold text-xl mt-[120px] px-6'>OUR SERVICES</h1>
            <h3 className='text-[36px] text-center'>Services We Provide</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-center items-center mt-20'>
                <Service serviceTitle={'Fluoride Treatment'} img={fluoride}></Service>
                <Service serviceTitle={'Cavity Filling'} img={cavity}></Service>
                <Service serviceTitle={'Teeth Whitening'} img={whitening}></Service>
            </div>
        </div>
    );
};

export default Sevices;