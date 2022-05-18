import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../../shared_pages/LoginButton';
import { MdOutlineError } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import Loadding from '../../shared_pages/Loadding';
import { toast } from 'react-toastify';



const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('')

    //update user info in firebase
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // create user using emmail and password in firebase 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //getting form data//
    const onSubmit = async (data) => {
        console.log(data.email);
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ displayName: data?.name })
    }

    //handle errors while creating an new user
    useEffect(() => {
        if (error || updateError) {
            const message = error.code.split('/')[1] || updateError.code.split('/')[1];
            setErrorMessage(message);
        }
    }, [error, updateError]);

    console.log(user);
    useEffect(() => {
        if (user) {
            toast.success("User Created Successfully !", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }, [user]);

    if (updating || loading) {
        return <Loadding />
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-12">
                <div className="card-body">
                    <h2 className="text-center text-xl">Login</h2>

                    {/* errors alert message */}

                    {
                        errorMessage &&
                        <div className="alert shadow-lg h-10 text-center ">
                            <div className='flex justify-center mx-auto'>
                                <small className='text-red-500 text-center uppercase'>{errorMessage}</small>
                            </div>
                        </div>
                    }


                    <form onSubmit={handleSubmit(onSubmit)} className='mt-4 '>

                        {/* user_name */}
                        <div className="form-control w-full max-w-xs text-center mx-auto">
                            <label className="label pb-1 pl-0">
                                <span className="label-text ">Your Name</span>
                            </label>
                            <input {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            {
                                errors.name?.type === 'required' &&
                                <span className="label-text-alt text-red-500 text-left mt-1 "><MdOutlineError className='inline' />{errors?.name?.message}</span>
                            }
                            {
                                errors.name?.type === 'pattern' &&
                                <span className="label-text-alt text-red-500 text-left mt-1 "><MdOutlineError className='inline' />{errors?.name?.message}</span>
                            }
                        </div>

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
                                <span className="label-text-alt text-red-500 text-left mt-1"><MdOutlineError className='inline' />{errors?.email?.message}</span>
                            }
                            {
                                errors.email?.type === 'pattern' &&
                                <span className="label-text-alt text-red-500 text-left mt-1"><MdOutlineError className='inline' />{errors?.email?.message}</span>
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
                                <span className="label-text-alt text-red-500 text-left mt-1"><MdOutlineError className='inline' />{errors?.password?.message}</span>
                            }
                            {
                                errors.password?.type === 'minLength' &&
                                <span className="label-text-alt text-red-500 text-left mt-1"><MdOutlineError className='inline' />{errors?.password?.message}</span>
                            }


                        </div>

                        <LoginButton className="uppercase">Sign up</LoginButton>
                    </form>

                    <p className='text-center'><small>Aready have an account? <Link className='text-secondary' to={'/login'}>Login Now</Link></small></p>


                </div>
            </div>


        </div>
    );
};

export default Signup;