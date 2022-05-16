import React from 'react';
import quatation from '../../../resources/icons/quote.svg'
import TestimonialCard from './TestimonialCard';
import people1 from '../../../resources/images/people1.png';
import people2 from '../../../resources/images/people2.png';
import people3 from '../../../resources/images/people3.png';

const Testimonials = () => {
    const review = 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content';
    return (
        <section className='mt-36 px-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-secondary text-[20px] leading-3'>Testimonial</h4>
                    <h2 className='text-[36px]'>What Our Patients Says</h2>
                </div>

                <div>
                    <img className='w-[192px]' src={quatation} alt="" />
                </div>
            </div>

            <div className='flex flex-wrap gap-5 mt-10 justify-center'>
                <TestimonialCard location={'California'} name={'Winson Herry'} review={review} img={people1}></TestimonialCard>
                <TestimonialCard location={'California'} name={'Winson Herry'} review={review} img={people1}></TestimonialCard>
                <TestimonialCard location={'California'} name={'Winson Herry'} review={review} img={people2}></TestimonialCard>
            </div>

        </section>
    );
};

export default Testimonials;