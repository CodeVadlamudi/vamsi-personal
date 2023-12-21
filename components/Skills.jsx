import React from "react";
import {Brands} from "../data/SkillsData";

function Skills() {
  return (
    <section
      id="skill"
      className="py-12 sm:py-16 md:py-24 lg:py-40 bg-zinc-100"
    >
      <div className="max-w-screen-lg mx-auto px-10 space-y-10">
        <div className="text-center">
          <h2 className="text-[#FF5C00] text-3xl font-semibold">Skills</h2>
        </div>

        <div className="flex items-center flex-wrap justify-center w-full gap-5">
          {Brands.map((brand) => (
            <div
              key={brand.id}
              className="shadow-md border p-5 sm:p-8 md:p-10 h-24 w-24 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center rounded-lg cursor-pointer bg-white relative group overflow-hidden"
            >
              <img
                src={brand.name}
                alt="brand-img"
                className="w-full h-full object-contain"
              />
              <h3 className="opacity-0 group-hover:opacity-100 absolute w-full h-full flex items-center justify-center group-hover:bg-black/80 text-2xl sm:text-3xl text-white font-semibold duration-500">
                {brand.grade}
              </h3>
            </div>
          ))}

          <div className="shadow-md border p-5 sm:p-8 md:p-10 h-24 w-24 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center rounded-lg cursor-pointer bg-white text-center group overflow-hidden">
            <h2>Coming Soon</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
