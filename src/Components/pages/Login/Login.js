import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../../shared_pages/LoginButton';
import { useForm } from "react-hook-form";
import { MdOutlineError } from 'react-icons/md';
import PasswordResetModal from './PasswordResetModal';
import auth from '../../firebase/firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loadding from '../../shared_pages/Loadding';

const Login = () => {
    const [resetModalStatus, setResetModalStatus] = useState(true)
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');


    const resetPasswordModalStatus = () => {
        setResetModalStatus(true);
    }

    //signIn with email and password

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //getting form data
    const onSubmit = data =>{
        signInWithEmailAndPassword(data?.email, data?.password);
        reset();
    } 
    // signin with google //
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    console.log(error);

    useEffect(() => {
        if (googleUser || user) {
            toast.success("Login Successful !", {
                position: toast.POSITION.TOP_RIGHT
            });
            setErrorMessage('')
        }
        
    }, [googleUser,user]);

    //handle all errors//
    useEffect(()=>{
        if(error || googleError){
            const message = googleError?.code.split('/')[1] || error?.code.split('/')[1];
            setErrorMessage(message)
        }else{
            setErrorMessage('')
        }
    },[error,googleError])


    if (googleLoading || loading) {
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
                        <div class="alert shadow-lg h-10 text-center mt-5">
                            <div className='flex justify-center mx-auto'>
                                <small className='text-red-500 text-center uppercase'>{errorMessage}</small>
                            </div>
                        </div>
                    }



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
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-sm uppercase">Continue with google</button>

                </div>
            </div>
            {
                resetModalStatus && <PasswordResetModal setResetModalStatus={setResetModalStatus}></PasswordResetModal>
            }

        </div>
    );
};

export default Login;