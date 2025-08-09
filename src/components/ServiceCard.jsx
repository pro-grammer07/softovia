import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md shadow-gray-300 hover:shadow-lg  duration-300 items-center justify-center w-80 h-full hover:scale-105 transition-all">
      {/* Image Container */}
      <div className={`w-full h-60 rounded-2xl flex items-center justify-center mb-6 overflow-hidden`}>
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-80 object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard