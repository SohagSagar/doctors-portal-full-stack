import React from 'react';
import Button from '../../shared_pages/Button';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-[20px] text-secondary">{name}</h2>
                <small className='text-[#939393]'>Available Slots: {slots.length}</small>
                <p>{slots[0]}</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setTreatment(service)} className='btn bg-gradient-to-r from-secondary to-primary text-white font-bold h-[48px]  border-0' htmlFor="booking-modal">Book Appoinment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;