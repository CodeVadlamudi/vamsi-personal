import React from "react";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

const projectData = [
  {
    id: 1,
    projectImg: "./images/project1.png",
    projectAlt: "Protfolio Images",
    projectTitle: "Portfolio",
    projectDesc: "NextJs, Tailwindcss, React-Simple-Typewriter, Heroicons",
  },

  {
    id: 2,
    projectImg: "./images/project2.png",
    projectAlt: "Starbuck Images",
    projectTitle: "Starbuck Clone",
    projectDesc: "Vite + React, Tailwindcss, Heroicons",
  },

  {
    id: 3,
    projectImg: "./images/project3.png",
    projectAlt: "Nutritionist Image",
    projectTitle: "Nutritionist",
    projectDesc: "Vite + React, Tailwindcss, Heroicons",
  },
];

function Projects() {
  return (
    <section id="project" className="my-12 sm:my-16 md:my-28 lg:my-40 px-10">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-[#FF5C00] text-3xl font-semibold mb-10 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-white overflow-hidden rounded shadow-md cursor-pointer hover:shadow-xl duration-200 border"
              >
                <img
                  src={project.projectImg}
                  alt={project.projectAlt}
                  className="object-contain"
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">
                    {project.projectTitle}
                  </h2>
                  <h3>{project.projectDesc}</h3>
                </div>
              </div>
            ))}
          </div>

          <a
            href="project"
            className="border-2 border-[#FF5C00] w-60
              h-14 text-lg hover:bg-[#FF5C00] hover:text-white duration-200 rounded-sm flex items-center justify-center mx-auto mt-10"
          >
            More <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
