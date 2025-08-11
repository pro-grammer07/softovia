import ContactInfo from "../components/contactInfo";
import ContactForm from "../components/ContactForm";
import SectionWrapper from "../hoc";

// Contact.jsx Main Component
const Contact = () => {
  return (
    <div className="bg-white py-16 px-4 rounded-3xl shadow-lg">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");