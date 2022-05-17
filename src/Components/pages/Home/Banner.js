import React from 'react';
import chair from '../../../resources/images/chair.png';
import backgroundImage from '../../../resources/images/bg.png'
import Button from '../../shared_pages/Button';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-white px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-[594px]" />
                <div className='lg:w-[655px]'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br></br> Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;