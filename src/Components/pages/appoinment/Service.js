import React from 'react';
import Button from '../../shared_pages/Button';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-[20px] text-secondary">{name}</h2>
                <small className='text-[#939393]'>Available Slots: {slots.length}</small>
                <p>{slots[0]}</p>
                <div className="card-actions justify-center">
                    <Button>Book Appoinment</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;