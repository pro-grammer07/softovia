import React from 'react'
import { Star } from 'lucide-react';

const Stats = () => {
  return (
    <section className="bg-blue-600 text-white py-12 lg:py-16 mt-16 lg:mt-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold">100% Success Rate</h3>
              <div className="flex items-center justify-center space-x-1 mt-2 ml-3">
                <span className="text-sm">5.0</span>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-white">(150+)</span>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold">5+ Years</h3>
              <p className="text-sm text-white">Experience</p>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold">100+</h3>
              <p className="text-blue-100 text-sm lg:text-base">Clients</p>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold">80+</h3>
              <p className="text-blue-100 text-sm lg:text-base">Products Created</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Stats