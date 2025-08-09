// PlanCard.jsx
import React from 'react';
import { Check } from 'lucide-react';

const PlanCard = ({ 
  plan, 
  customTheme = null, 
  onPlanSelect = () => {}, 
  className = "",
  showBorder = true 
}) => {
  // Use custom theme if provided, otherwise use plan's theme
  const theme = customTheme || plan.theme;
  
  // Handle plan selection
  const handlePlanSelect = () => {
    onPlanSelect(plan);
  };

  return (
    <div 
      className={`
        ${theme.bgColor} 
        ${showBorder ? `border ${theme.border}` : ''} 
        rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300
        ${plan.featured ? 'ring-2 ring-blue-300 scale-105' : ''}
        ${className}
      `}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className={`text-xl font-semibold ${theme.textColor} mb-3`}>
          {plan.title}
        </h3>
        <p className={`text-sm ${theme.descriptionColor} leading-relaxed`}>
          {plan.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className={`text-3xl font-bold ${theme.textColor}`}>
            {plan.currency}{plan.price}
          </span>
          <span className={`text-lg ${theme.descriptionColor} ml-1`}>
            /{plan.period}
          </span>
        </div>
      </div>

      {/* Subtitle (if exists) */}
      {plan.subtitle && (
        <div className="mb-4">
          <p className={`text-sm font-medium ${theme.textColor}`}>
            {plan.subtitle}
          </p>
        </div>
      )}

      {/* Features */}
      <div className="mb-8">
        <h4 className={`text-sm font-medium ${theme.textColor} mb-4`}>
          {plan.subtitle ? plan.subtitle : "Includes"}
        </h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className={`
                w-5 h-5 rounded-full ${theme.checkmarkBg} 
                flex items-center justify-center mr-3 flex-shrink-0
              `}>
                <Check className={`w-3 h-3 ${theme.checkmarkIcon}`} />
              </div>
              <span className={`text-sm ${theme.descriptionColor}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        onClick={handlePlanSelect}
        className={`
          w-full py-3 px-4 rounded-lg font-medium text-sm
          ${theme.buttonBg} ${theme.buttonText} ${theme.buttonHover}
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        `}
      >
        {plan.buttonText}
      </button>

      {/* Featured badge (optional) */}
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Most Popular
          </span>
        </div>
      )}
    </div>
  );
};

export default PlanCard;