import TeamCard from "../components/TeamCard";
import teamData from "../data/team";
import SectionWrapper from "../hoc";

const Team = () => {
  return (
    <div className="py-0 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-lg mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Lorem ipsum dolor sit amet
          </h2>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Team, "team");