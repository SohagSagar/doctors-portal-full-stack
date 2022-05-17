import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared_pages/Button';
import LoginButton from '../../shared_pages/LoginButton';

const Login = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-12">
                <div className="card-body">
                    <h2 className="text-center text-xl">Login</h2>

                    <form className='mt-4 '>

                        {/* user_email */}
                        <div className="form-control w-full max-w-xs text-center mx-auto">
                            <label className="label pb-1 pl-0">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <label className="label pt-1 pl-0">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>

                        {/* user_password */}
                        <div className="form-control w-full max-w-xs text-center mx-auto">
                            <label className="label pb-1 pl-0">
                                <span className="label-text ">Password</span>
                            </label>
                            <input autoComplete='off' type="password" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                            <label className="label pt-1 pl-0">
                                <span className="label-text-alt">Alt label</span>
                            </label>
                        </div>

                        <LoginButton>Login</LoginButton>
                    </form>

                    <p className='text-center'><small>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create New Account</Link></small></p>

                    <div className="divider mt-2">OR</div>
                    <button className="btn btn-outline btn-sm uppercase">Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;