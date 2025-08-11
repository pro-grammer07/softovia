// Plans.jsx
import React from 'react';
import PlanCard from '../components/PlanCard';
import { plansData, themePresets, createCustomTheme } from '../data/plans'; 
import SectionWrapper from '../hoc';
import { styles } from '../styles';

const Plans = ({ 
  plans = plansData,
  title = "Choose Your Plan",
  subtitle = "Select the perfect plan for your needs",
  showTitle = false,
  globalTheme = null,
  onPlanSelect = null,
  containerClassName = "",
  cardClassName = "",
  gridCols = "lg:grid-cols-3"
}) => {
  
  // Handle plan selection
  const handlePlanSelection = (selectedPlan) => {
    if (onPlanSelect) {
      onPlanSelect(selectedPlan);
    } else {
      console.log('Selected plan:', selectedPlan);
    }
  };

  return (
    <div className="mt-[200px]">
<h1 className={styles.heroHeadText}>Project Plans</h1>
    <section className={`py-12 px-2 mt-[48px] ${containerClassName}`}>
      <div className="max-w-8xl mx-auto">
        {/* Section Header (Optional) */}
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Plans Grid */}
        <div className={`
          grid grid-cols-1 md:grid-cols-2 ${gridCols} 
          gap-2 items-start relative
        `}>
          {plans.map((plan, index) => (
            <div key={plan.id || index} className="relative">
              <PlanCard
                plan={plan}
                customTheme={globalTheme}
                onPlanSelect={handlePlanSelection}
                className={cardClassName}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
  );
};

// Export additional utilities for advanced usage
export { themePresets, createCustomTheme };
export default SectionWrapper(Plans, "plans");