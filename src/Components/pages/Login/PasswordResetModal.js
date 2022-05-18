import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { MdOutlineError } from 'react-icons/md';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import Loadding from '../../shared_pages/Loadding';


const PasswordResetModal = ({ setResetModalStatus }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = data => {
        sendPasswordResetEmail(data?.email);
        
    }

    useEffect(() => {
        if (error) {
            const message = error?.code.split('/')[1];
            setErrorMessage(message);
            return;
        }
        else if(!error && sending){
            setErrorMessage('');
            toast.success("Reset link sent to your email.", {
                position: toast.POSITION.TOP_RIGHT
            });
            setResetModalStatus(false);
        }

    }, [error]);




    console.log(sending);

    
    
    


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

                    {/* errors alert message */}

                    {
                        errorMessage &&
                        <div className="alert shadow-lg h-10 text-center mt-5 w-[250px] mx-auto">
                            <div className='flex justify-center mx-auto'>
                                <small className='text-red-500 text-center uppercase'>{errorMessage}</small>
                            </div>
                        </div>
                    }

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