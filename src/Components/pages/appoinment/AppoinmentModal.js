import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../shared_pages/Button';
import { MdOutlineError } from 'react-icons/md';
import { format } from 'date-fns';

const AppoinmentModal = ({ date, treatment, setTreatment }) => {
    const { slots } = treatment;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const slot= event.target.slot.value
    const onSubmit = data => {
        
        // console.log(data);
        const bookingInfo = {
            ...data,
           
            treatmentName: treatment?.name,
            appoinmentDate: date,
            // slot:slot.value
            
            
        }

        console.log(bookingInfo);


        //to close the modal
        setTreatment(null);
    }


    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex justify-center items-start'>
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 mt-3">✕</label>
                        <h3 className="font-bold text-lg">Booking Details</h3><hr />
                    </div>
                    <hr className='w-40 mt-2 text-center mx-auto' />

                    <div className='text-center mt-5'>
                        <h2 className='text-secondary text-xl'>Treatment: {treatment?.name}</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 '>

                            {/* patient_name */}
                            <div className="form-control w-full max-w-xs text-center mx-auto">
                                <label className="label pb-1 pl-0">
                                    <span className="label-text ">Patient Name</span>
                                </label>
                                <input {...register('patientName')} type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            </div>

                            {/* patient_email */}
                            <div className="form-control w-full max-w-xs text-center mx-auto">
                                <label className="label pb-1 pl-0">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input {...register('email')} type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            </div>

                            {/* Appoinment_date */}
                            <div className="form-control w-full max-w-xs text-center mx-auto">
                                <label className="label pb-1 pl-0">
                                    <span className="label-text ">Appoinment Date</span>
                                </label>
                                <input {...register('appoinmentDate')} disabled type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs " defaultValue={date} />
                            </div>

                            {/* treatment_time_slot */}
                            <div className="form-control w-full max-w-xs mx-auto">
                                <label className="label pb-1 pl-0">
                                    <span className="label-text">Select Stot</span>
                                </label>
                                <select {...register('slot', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    }
                                })} className="select select-bordered select-sm">
                                    {
                                        slots.map((slot, index) => <option
                                            key={index}
                                            value={slot}
                                        >{slot}</option>)
                                    }
                                </select>
                                <label className="label pt-1 pl-0">
                                    {errors.slot?.type === 'required' &&
                                        <span className="label-text-alt">{errors?.slot}</span>
                                    }
                                </label>
                            </div>

                            {/* patient_mobile_no */}
                            <div className="form-control w-full max-w-xs text-center mx-auto">
                                <label className="label pb-1 pl-0">
                                    <span className="label-text ">Phone No</span>
                                </label>
                                <input {...register('mobileNo', {
                                    required: {
                                        value: true,
                                        message: 'Field is required'
                                    },
                                    pattern: {
                                        value: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                                        message: 'Invalid mobile number'
                                    }
                                })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                                <label className="label pt-1 pl-0">
                                    {errors.mobileNo?.type === 'required' &&
                                        <span className="label-text-alt text-red-500"><MdOutlineError className='inline' />{errors?.mobileNo?.message}</span>
                                    }
                                    {errors.mobileNo?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500"><MdOutlineError className='inline' />{errors?.mobileNo?.message}</span>
                                    }
                                </label>
                            </div>

                            <Button>Submit</Button>




                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default AppoinmentModal;