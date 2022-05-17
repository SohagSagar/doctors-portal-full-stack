import { format, set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import AppoinmentModal from './AppoinmentModal';

const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    if (services.length < 1) {
        return;
    }
    return (
        <section>
            <div className='text-center text-[22px]'>
                <h1 className='text-secondary '>Available Services on {date}</h1>
                <p className='text-[#939393]'>Please select a service </p>
            </div>

            <div className='flex flex-wrap gap-5 justify-center mt-12 mb-12'>
                {
                    services.map(service => <Service
                        key={service?._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </Service>)
                }
            </div>

            {treatment && <AppoinmentModal setTreatment={setTreatment} slots={services.slots} date={date} treatment={treatment}></AppoinmentModal>}
            
        </section>
    );
};

export default AvailableServices;