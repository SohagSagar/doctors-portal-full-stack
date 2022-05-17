import React from 'react';

const InfoCard = ({img,cardTitle,cardDescriptions,bgColor}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor} text-white h-32 `}>
            <figure><img className='lg:pl-5 sm:mt-5 w-16' src={img} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDescriptions}</p>
            </div>
        </div>
    );
};

export default InfoCard;