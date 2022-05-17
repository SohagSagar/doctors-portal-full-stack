import { format, getTime } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../resources/images/chair.png';


const AppoinmentBanner = ({date,setDate}) => {
    
    const textDay = parseInt(format(new Date(), 'd')) + 9;
    return (
        <section className='px-12 '>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-[590px]' src={chair} alt="" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            fromDate={new Date()}
                            toDate={new Date(2022, 4, textDay)}
                            onSelect={setDate}
                        />
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default AppoinmentBanner;