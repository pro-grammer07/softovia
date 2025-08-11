import React from 'react'
import { Check } from "lucide-react";
import hero_image from "../assets/Hero.png"; // Assuming you have a hero image
import { Button } from '../components/Button';
import SectionWrapper from '../hoc';
import { styles } from '../styles';

const Hero = () => {
  return (
    <div>
        {/* Main Content */}
      <main className="w-full mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-600 text-sm lg:text-base">Low-Code Development Agency</p>
              <h1 className={styles.heroHeadText}>
                Start no-code, grow with code.
              </h1>
              <p className="text-gray-600 text-lg lg:text-xl">
                We will build your start-up MVP in weeks, not in months.
              </p>
            </div>
            
            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Fast delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Low price</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">High quality</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="default" className="w-50 sm:w-60 h-12">
                Let's Work Together
              </Button>

              <Button variant="outline" className="w-40 sm:w-50 h-12">
                See Our Work
              </Button>
              
            </div>
          </div>
          
        <div>
            <img src={hero_image} alt="Hero Image" className='w-110 h-100 ml-10' />
        </div>
        </div>
      </main>

    </div>
  )
}

export default SectionWrapper(Hero, "hero");