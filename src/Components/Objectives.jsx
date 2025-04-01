import { Heading2Icon } from "lucide-react";
import React from "react";

const Objectives = () => {
  const objectives = [
    "Provide legal representation and advice to victims of sexual and gender based violence.",
    "Provide counselling for the victims of sexual and gender based violence and other vulnerable members of the society.",
    "Provide support: financially and through trainings to help victims of sexual and gender based violence and vulnerable members of society gain financial independence.",
    "Provide a safe haven for victims of such violence who may be endagered because of their involvement in the prosecution of perpetrators of sexual and gender based violence.",
    "Carry out sensitization campaigns to create awareness on the rights of the vulnerable in society especially women and children and how they can enforce them",
    "Conduct research and advocate for policy changes with regard to sexual and gender based violence.",
    "Promote de-stigmaitation of gender and domestic violence and empower survivors.",
    "Follow up on the personal and holistic development of both adults and children assisted by the organisation.",
  ];

  return (
    <div id="objectives" className="bg-cyan-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl mb-8 text-stone-50">
          Our objective is to offer wholesome support to victims of sexual and
          gender based violence and other vulnerable members of the society.
        </p>
        <p className="text-lg mb-6 text-stone-50">
          To achieve this objective the Organisation shall carry out the
          following missions:
        </p>
        <ol id="ol" className="list-decimal pl-6 space-y-3">
          {objectives.map((objective, index) => (
            <li key={index} className="text-stone-50">
              {objective}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Objectives;
