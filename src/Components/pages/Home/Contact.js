import React from 'react';
import background from '../../../resources/images/appointment.png'
import Button from '../../shared_pages/Button';

const Contact = () => {
    return (
        <section style={{background:`url(${background})`}} className='mt-40 py-16'>
            <h4 className='text-center text-secondary text-[20px]'>Contact Us</h4>
            <h2 className='text-center text-[36px] text-white'>Stay connected with us</h2>

            <form className='text-center mt-5 flex grid-rows-1 items-center justify-center flex-col gap-2'>
                <input type="text" placeholder="Email Address" className="input w-full max-w-xs input-secondary h-[48px]" />

                <input type="text" placeholder="Subject" className="input w-full max-w-xs input-secondary h-[48px]" />

                <textarea className="w-full textarea textarea-secondary  max-w-xs" placeholder="Messages..."></textarea>
                <Button>Submit</Button>
            </form>
        </section>

    );
};

export default Contact;