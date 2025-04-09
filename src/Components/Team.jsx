import React, { useState } from "react";
import teamData from "../data/team.json";

const Team = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sections = ["Legal Team", "Counselling Team", "Support Team"];
  const teams = [
    teamData.legalTeam,
    teamData.counsellingTeam,
    teamData.supportTeam,
  ];

  return (
    <div className="bg-cyan-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-orange-200 mb-12">
          MEET THE TEAM
        </h1>

        <div className="flex justify-center mb-6">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`mx-2 px-6 py-2 rounded-lg font-semibold transition ${
                currentPage === index
                  ? "bg-orange-400 text-white"
                  : "bg-orange-200 text-gray-900 hover:bg-orange-300"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teams[currentPage].map((member, index) => (
            <div
              key={index}
              className="bg-orange-200 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="w-full h-64 object-contain p-6"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {member.name}
                </h3>
                <div className="space-y-2 text-gray-700">
                  {member.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
