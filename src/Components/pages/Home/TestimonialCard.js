import React from 'react';

const TestimonialCard = ({ name, location, review, img }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl pb-3">
            <div class="card-body items-center ">

                <p>{review}</p>
            </div>

            <div className='flex items-center'>
                <div class="avatar pl-8">
                    <div class=" w-[75px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='pl-3'>
                    <h3>{name}</h3>
                    <h4><small>{location}</small></h4>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;