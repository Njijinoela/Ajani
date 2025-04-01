import React from "react";

const About = () => {
  return (
    <div className="bg-cyan-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-200 mb-8">
            WHO ARE WE?
          </h2>
          <img
            src="/images/team.jpeg"
            alt="Team"
            className="mx-auto rounded-lg shadow-lg w-full max-w-3xl h-80 object-contain mb-6"
          />
        </div>

        <div className="space-y-6 text-lg text-stone-50 leading-relaxed text-center">
          <p>
            Ajani Centre for Rights and Care is a registered Community-Based
            Organization in Kajiado, Kenya, dedicated to alleviating the pain
            and suffering of survivors of sexual and gender-based violence.
          </p>
          <p>
            Our vision is to raise empowered individuals by providing holistic
            support to survivors and other vulnerable members of society.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-orange-200 mb-6 text-center">
            LEGAL SUPPORT SERVICES
          </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <img
              src="/images/legalandpsyteam.jpeg"
              alt="Legal Support"
              className="w-full md:w-1/2 h-64 rounded-lg shadow-lg object-contain mb-4 md:mb-0"
            />
            <div className="text-stone-50 space-y-4 text-lg leading-relaxed md:w-1/2">
              <p>
                We provide legal advice and representation for survivors of
                sexual and gender-based violence on a pro bono basis. This
                includes follow-ups with law enforcement and court attendances.
              </p>
              <p>
                Additionally, we conduct awareness campaigns, legal research,
                and stakeholder training for community leaders and law
                enforcement.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-orange-200 mb-6 text-center">
            PSYCHOSOCIAL SUPPORT SERVICES
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-6">
            <img
              src="/images/psy.jpeg"
              alt="Counseling"
              className="w-full md:w-1/2 h-64 rounded-lg shadow-lg object-contain mb-4 md:mb-0"
            />
            <div className="text-stone-50 space-y-4 text-lg leading-relaxed md:w-1/2">
              <p>
                Our counseling department consists of trained professionals who
                provide emotional and psychological support to survivors.
              </p>
              <p>
                We offer individual and group therapy, mentorship programs, and
                psycho-education to help survivors rebuild their lives.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
