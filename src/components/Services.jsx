import React from 'react'
import ServiceCard from './ServiceCard';
import { services } from '../data'; // Assuming you have a service data file
import SectionWrapper from '../hoc';
import { styles } from '../styles';


const Services = () => {

  return (
    <>

    <h1 className={styles.heroHeadText}>Our Services</h1>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      {services.map((item) => (
        <ServiceCard key={item.id} service={item} />
      ))}
    </div>
    </>
  );
};


export default SectionWrapper(Services, "Services");