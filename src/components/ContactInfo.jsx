import contactData
 from "../data/contact";
import { Phone, Mail, Calendar, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useState } from "react";
import { styles } from "../styles";


export const ContactInfo = () => {
  const getSocialIcon = (iconName) => {
    switch(iconName) {
      case 'Facebook': return <Facebook className="w-5 h-5 text-white" />;
      case 'Linkedin': return <Linkedin className="w-5 h-5 text-white" />;
      case 'Twitter': return <Twitter className="w-5 h-5 text-white" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className={`${styles.heroHeadText} font-bold text-gray-900 mb-6`}>
          {contactData.title}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          {contactData.description}
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {contactData.subtitle}
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">{contactData.phone}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">{contactData.email}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">
          {contactData.socialMediaTitle}
        </h4>
        
        <div className="flex space-x-4">
          {contactData.socialLinks.map((social, index) => (
            <div 
              key={index}
              className={`w-10 h-10 ${social.bgColor} rounded-full flex items-center justify-center ${social.hoverColor} transition-colors cursor-pointer`}
            >
              {getSocialIcon(social.icon)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;