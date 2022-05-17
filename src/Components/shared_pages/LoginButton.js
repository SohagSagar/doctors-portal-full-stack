import React from 'react';

const LoginButton = ({children}) => {
    return (
        <div className=' mt-3 text-center'>
            <button type='submit' className="btn btn-sm w-full texe-white">{children}</button>
        </div>
    );
};

export default LoginButton;