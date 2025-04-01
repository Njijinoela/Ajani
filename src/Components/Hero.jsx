import React from "react";

const Hero = () => {
  return (
    <div className="bg-cyan-900 text-center py-12">
      <img
        src="/images/logo.jpeg"
        alt="Ajani Center Logo"
        className="mx-auto w-32 h-32 rounded-full mb-6"
      />
      <section className="heading">
        <h1 className="text-4xl font-bold mb-4 text-stone-50">
          AJANI CENTER FOR RIGHTS & CARE
        </h1>
        <q className="text-xl text-orange-200 italic">JUSTICE & CARE</q>
      </section>
    </div>
  );
};

export default Hero;
