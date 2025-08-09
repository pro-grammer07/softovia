import ContactInfo from "./contactInfo";
import ContactForm from "./ContactForm";

// Contact.jsx Main Component
const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <ContactInfo />
          
          {/* Right Side - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;