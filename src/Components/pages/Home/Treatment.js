import React from 'react';
import operation from '../../../resources/images/treatment.png'
import Button from '../../shared_pages/Button';

const Treatment = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl flex items-center justify-evenly mt-[120px] mb-36 pb-12 px-6 shadow-none">

            <figure><img className='w-[450px] rounded-md' src={operation} alt="Movie"/></figure>
            <div class=" w-[450px]">
                <h2 class="card-title text-5xl mb-[28px]">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div class="card-actions justify-start mt-[28px]">
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;