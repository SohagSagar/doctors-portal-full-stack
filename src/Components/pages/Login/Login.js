import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../../shared_pages/LoginButton';
import { useForm } from "react-hook-form";
import { MdOutlineError } from 'react-icons/md';
import PasswordResetModal from './PasswordResetModal';

const Login = () => {
    const [resetModalStatus,setResetModalStatus]=useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const resetPasswordModalStatus =()=>{
        setResetModalStatus(true);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-12">
                <div className="card-body">
                    <h2 className="text-center text-xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='mt-4 '>

                        {/* user_email */}
                        <div className="form-control w-full max-w-xs text-center mx-auto">
                            <label className="label pb-1 pl-0">
                                <span className="label-text ">Email</span>
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
                            })} type="email" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            {
                                errors.email?.type === 'required' &&
                                <span className="label-text-alt text-red-500 text-left"><MdOutlineError className='inline' />{errors?.email?.message}</span>
                            }
                            {
                                errors.email?.type === 'pattern' &&
                                <span className="label-text-alt text-red-500 text-left"><MdOutlineError className='inline' />{errors?.email?.message}</span>
                            }
                        </div>

                        {/* user_password */}
                        <div className="form-control w-full max-w-xs text-center mx-auto">
                            <label className="label pb-1 pl-0">
                                <span className="label-text ">Password</span>
                            </label>
                            <input {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Minimum six characters required'
                                }
                            })}
                                autoComplete='off' type="password" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            {
                                errors.password?.type === 'required' &&
                                <span className="label-text-alt text-red-500 text-left"><MdOutlineError className='inline' />{errors?.password?.message}</span>
                            }
                            {
                                errors.password?.type === 'minLength' &&
                                <span className="label-text-alt text-red-500 text-left"><MdOutlineError className='inline' />{errors?.password?.message}</span>
                            }

                            {/* reset password modal */}
                            <div className='flex justify-start'>
                                <label onClick={resetPasswordModalStatus} htmlFor="password-reset-modal" className="text-black cursor-pointer"><small className='text-left'>Forgot password?</small></label>
                            </div>
                        </div>

                        <LoginButton>Login</LoginButton>
                    </form>

                    <p className='text-center'><small>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create New Account</Link></small></p>

                    <div className="divider mt-2">OR</div>
                    <button className="btn btn-outline btn-sm uppercase">Continue with google</button>

                </div>
            </div>
            {
                resetModalStatus && <PasswordResetModal setResetModalStatus={setResetModalStatus}></PasswordResetModal>
            }
            
        </div>
    );
};

export default Login;