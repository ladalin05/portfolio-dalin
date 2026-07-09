import { ArrowLeft, ArrowRight } from "lucide-react";
import { useObserver } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";

interface GitUrl {
  title: string;
  url: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  overview?: string;
  desc: string;
  role: string;
  year: string;
  gitUrl: GitUrl[];
  highlights: string[];
  techs: string[];
  imgs: string[];
  featured?: boolean;
}

export const ProjectDetail = ({ project, index = 1 }: { project: Project; index?: number }) => {
  const animated = useObserver("project-detail", 200);
  const num = String(index).padStart(2, "0");
  const navigation = useNavigate()

  const onPrev = () => {
    if (index > 1) navigation(`/projects/${index - 1}`);
  }
  const onNext = () => {
    if (index < 4) navigation(`/projects/${index + 1}`);
  }

  return (
    <section
      id="project-detail"
      className="relative overflow-hidden min-h-screen py-12 transition-colors duration-700 bg-slate-50 dark:bg-slate-950 px-12"
    >
      <div className="flex items-center text-gray-400">
        <span className="border-1 border-slate-900 rounded-full w-10 h-10 flex items-center justify-center"><ArrowLeft className="w-6 h-6"/></span>
        <span className="ms-3 text-lg uppercase">Back to Projects</span>
      </div>
      <div className="flex items-center mt-8 gap-3.5 uppercase tracking-[0.22em] font-mono text-md text-cyan-400">
        <span>{project?.category}</span>
        <span className="w-[5px] h-[5px] rounded-full bg-cyan-400"></span>
        { project?.subcategory !== null && (
            <>
              <span>{project?.subcategory}</span>
              <span className="w-[5px] h-[5px] rounded-full bg-cyan-400"></span>
            </>
          )
        }
        <span>{project?.year}</span>
      </div>
      <div className={`mb-2 transition-all duration-500 mt-12 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">{ project?.title }</h2>
      </div>
      <div className="flex items-end justify-between">
        <h1 className="text-5xl font-bold text-blue-600 italic">{ num }.</h1>
        <p className="flex items-center text-blue-600 ">
          <a href="https://github.com/ladalin05" className="text-sm flex items-center uppercase">Source Code <ArrowRight className="h-4 w-4 ms-4"/></a>
        </p>
      </div>
      <div className="relative w-full h-auto grid grid-cols-2 gap-4 mt-6">
        <div className="col-span-2 h-auto rounded-3xl bg-gradient-to-br from-blue-200 to-transparent dark:from-blue-600/20 dark:to-transparent">
          <div className="relative flex items-center justify-center duration-700 py-12">
            <img src={project.imgs[0]} alt="" className="w-5/6 h-auto z-50" />
          </div>
        </div>

        {project?.imgs?.slice(1).map((img, index) => (
          <div key={index} className="h-auto rounded-3xl bg-gradient-to-br from-blue-200 to-transparent dark:from-blue-600/20 dark:to-transparent">
            <div className={`relative flex items-center duration-700 p-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
              <img src={img} alt="project image" className="w-5/6 h-auto z-50" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full h-auto flex flex-wrap mt-12">
        <div className="w-4/6">
          <div className="w-full mt-2 rounded-4xl p-5 bg-slate-100 dark:bg-[#091020] border border-slate-200 dark:border-slate-800">
            <h6 className="text-md text-blue-500 uppercase tracking-widest">Overview</h6>
            <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">
              { project.overview}
            </p>
          </div>
          <div className="w-full mt-4 rounded-4xl p-5 bg-slate-100 dark:bg-[#091020] border border-slate-200 dark:border-slate-800">
            <h6 className="text-md text-blue-500 uppercase tracking-widest">Key Highlights</h6>
            <ul className="flex flex-col gap-3 mt-4">
              {project?.highlights?.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 min-w-[32px] rounded-[10px] bg-slate-200 dark:bg-[#0f1d35] border border-slate-200 dark:border-slate-800 flex items-center justify-center mt-0.5 text-sm">
                  </div>
                  <p className="text-xl  text-gray-600 dark:text-gray-400 leading-relaxed">
                    {highlight}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/6 ps-4">
          <div className="w-full mt-2 rounded-4xl px-10 py-7 bg-slate-100 dark:bg-[#091020] border border-slate-200 dark:border-slate-800">
            <h6 className="text-md text-blue-500 uppercase tracking-widest">Project Info</h6>
            <div className="text-xl text-gray-400 mb-6">
              <p className="text-lg mt-3 text-gray-500 dark:text-gray-400">Role <br /><span className="text-xl text-gray-900 dark:text-white">{project.role}</span></p>
              <p className="text-lg mt-3 text-gray-500 dark:text-gray-400">Year <br /><span className="text-xl text-gray-900 dark:text-white">{project.year}</span></p>
              <p className="text-lg mt-3 text-gray-500 dark:text-gray-400">Category <br /><span className="text-xl text-gray-900 dark:text-white">{project.category}</span></p>
            </div>
            <div className="w-full h-px bg-slate-200 dark:bg-gray-800" />
            <div className="mt-4">
              <h6 className="text-md text-gray-500 dark:text-gray-400 uppercase">Tech Stack</h6>
              <p className="flex flex-wrap mt-5 gap-3">
                {(project.techs).map((tech, i) => (
                  <span key={i} className="uppercase rounded-xl text-lg p-1 px-2 bg-slate-200 dark:bg-[#020817] text-gray-500 dark:text-gray-700 hover:text-blue-500 dark:hover:text-[#93c5fd]">
                    {tech}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="w-full mt-4 rounded-4xl p-5 bg-slate-100 dark:bg-[#091020] border border-slate-200 dark:border-slate-800">
              <h6 className="text-md text-blue-500 uppercase tracking-widest">Links</h6>
              <div className="flex flex-col gap-2.5">
                {project?.gitUrl?.map((url, index) => (
                  <a key={index}
                    href={url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 mt-1 rounded-2xl border border-slate-200 dark:border-slate-800 text-gray-500 dark:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 hover:text-gray-800 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#0c1728] transition-all duration-200 group"
                  >
                    <span className="text-xs uppercase tracking-widest font-semibold">
                      {url.title}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-semibold truncate max-w-[200px]">
                      {url.url}
                    </span>
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>
      <div className="w-full inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gray-800 mt-12" />
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center">
          <button type="button" className="rounded-full w-18 h-18 border-1 border-slate-900 flex items-center justify-center" onClick={() => onPrev()}><ArrowLeft className="text-gray-800 w-13 h-13"/></button>
          <p className="text-2xl uppercase ms-3 text-gray-700">Prev Project</p>
        </div>
        <a href="/projects" className="text-xl uppercase ms-3 text-gray-700">All Projects</a>
        <div className="flex items-center">
          <p className="text-2xl uppercase me-3 text-gray-700">Next Project</p>
          <button type="button" className="rounded-full w-18 h-18 border-1 border-slate-900 flex items-center justify-center" onClick={() => onNext()}><ArrowRight className="text-gray-800 w-13 h-13"/></button>
        </div>
      </div>

    </section>
  );
};