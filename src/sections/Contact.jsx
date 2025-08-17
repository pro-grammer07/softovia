import ContactInfo from "../components/contactInfo";
import ContactForm from "../components/ContactForm";
import SectionWrapper from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

// Contact.jsx Main Component
const Contact = () => {
  return (
    <div className="py-16 px-4 rounded-3xl">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Contact Information */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          
          {/* Right Side - Contact Form */}
          <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="lg:col-span-7">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");