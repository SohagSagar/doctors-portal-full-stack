import { format, set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableServices = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    if(services.length<1){
        return;
    }
    return (
        <section>
            <div className='text-center text-[22px]'>
                <h1 className='text-secondary '>Available Services on {format(date,'PP')}</h1>
                <p className='text-[#939393]'>Please select a service </p>
            </div>

            <div className='flex flex-wrap gap-5 justify-center mt-12 mb-12'>
                {
                    services.map(service => <Service
                        key={service?._id}
                        service={service}
                    >
                    </Service>)
                }
            </div>


        </section>
    );
};

export default AvailableServices;