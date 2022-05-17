import React from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineError } from 'react-icons/md';
import Button from '../../shared_pages/Button';
import LoginButton from '../../shared_pages/LoginButton';

const PasswordResetModal = ({setResetModalStatus}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        setResetModalStatus(false)
    } 
    return (
        <div>

            <input type="checkbox" id="password-reset-modal" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <div className='flex justify-center items-start'>
                        <label htmlFor="password-reset-modal" className="btn btn-sm btn-circle absolute right-2 top-2 mt-3">✕</label>
                        <h3 className="font-bold text-lg">Reset Password</h3><hr />
                    </div>
                    <hr className='w-40 mt-2 text-center mx-auto' />

                    <div className='text-center mt-5'>

                        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 '>

                            {/* patient_email */}
                            <div className="form-control w-full max-w-xs text-center mx-auto">
                                <label className="label pb-1 pl-0">
                                    <span className="label-text ">Enter your registered Email</span>
                                </label>
                                <input {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Invalid email'
                                    }
                                })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500 text-left"><MdOutlineError className='inline' />{errors?.email?.message}</span>
                                }
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500 text-left"><MdOutlineError className='inline' />{errors?.email?.message}</span>
                                }
                            </div>

                            <button type='submit' className="btn mt-4">Reset Password</button>

                        </form>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default PasswordResetModal;