import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold h-12 w-32 border-0">{children}</button>
        </div>
    );
};

export default Button;