import React from 'react';
import doctor from '../../../resources/images/doctor-small.png';
import background from '../../../resources/images/appointment.png'
import Button from '../../shared_pages/Button';

const MakeApoinment = () => {
    return (
        <section style={{background:`url(${background})`}} className='flex items-center justify-around'>
            <div className='flex-1'>
                <img className='w-[600px] mt-[-100px] hidden lg:block' src={doctor} alt="" />
            </div>

            <div className='flex-1 px-12'>
                <h4 className='font-bold text-[20px] mb-5 text-secondary'>Appointment</h4>
                <h2 className='font-semibold text-white text-4xl mb-5'>Make an appointment Today</h2>
                <p className='text-base text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Appointment</Button>
            </div>
        </section>
    );
};

export default MakeApoinment;