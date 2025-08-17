import React from 'react'
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/services';
import SectionWrapper from '../hoc';
import { styles } from '../styles';


const Services = () => {

  return (
    <div className="mt-[30px]">

    <h1 className={styles.heroHeadText}>Our Services</h1>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-[48px]">
      {servicesData.map((item) => (
        <ServiceCard key={item.id} service={item} />
      ))}
    </div>
    </div>
  );
};


export default SectionWrapper(Services, "Services");