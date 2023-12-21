import React from "react";
import {projectData} from "../data/ProjectData";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

function ProjectsMore() {
  return (
    <section className="my-14 sm:my-12 md:my-24 px-5 sm:px-10 xl:px-0">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <h2 className="text-xl font-semibold md:text-3xl text-center text-[#FF5C00]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white overflow-hidden rounded shadow-md hover:shadow-xl duration-200 border group"
            >
              <img
                src={project.projectImg}
                alt={project.projectAlt}
                className="object-contain"
              />
              <div className="flex items-center justify-between p-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">
                    {project.projectTitle}
                  </h2>
                  <h3>{project.projectDesc}</h3>
                </div>

                <a
                  href={project.projectLink}
                  target="_blank"
                  className="group-hover:text-[#FF5C00]"
                >
                  <ArrowTopRightOnSquareIcon className="w-7 h-7" />
                </a>
              </div>
            </div>
          ))}

          <div className="bg-white overflow-hidden rounded shadow-md hover:shadow-xl duration-200 border h-40 flex items-center justify-center">
            <h2 className="text-lg">Coming Soon</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsMore;
