import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


const TeamCard = ({ member }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", member.id * 0.5, 0.75)} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-110 ">
      <div className="mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          {member.position}
        </p>
        
        <h3 className="text-xl font-bold text-gray-900">
          {member.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamCard;