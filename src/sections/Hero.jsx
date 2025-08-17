import React from "react";
import { Check } from "lucide-react";
import { Button } from "../components/Button";
import SectionWrapper from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { heroData } from "../data/hero";

const Hero = () => {
  return (
    <div>
      <main className="w-full px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-600 text-sm lg:text-base">
                {heroData.subtitle}
              </p>
              <h1 className={styles.heroHeadText}>{heroData.title}</h1>
              <p className="text-gray-600 text-lg lg:text-xl">
                {heroData.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {heroData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {heroData.buttons.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.variant}
                  className={`${btn.width} h-12`}
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="flex justify-center"
          >
            <img
              src={heroData.image}
              alt="Hero"
              className="w-110 h-100 ml-10"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");
