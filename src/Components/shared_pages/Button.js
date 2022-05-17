import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button type='submit' className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold h-[48px]  border-0">{children}</button>
        </div>
    );
};

export default Button;