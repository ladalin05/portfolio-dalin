import { useNavigate } from "react-router-dom";
import { useObserver } from "../../../utils/helper"
interface Project  {
  id: number;
  title: string;
  category: string;
  subcategory?: string;
  desc: string;
  techs: string[];
  mainImage?: string;
  featured?: boolean;
}

export const Projects = ({ projects }: { projects: Project[]}) => {
    const animated = useObserver("projects", 400)
    const navigation = useNavigate();

    const [featured, ...rest] = projects

    const toProjectDetail = (id: number) => {
        navigation(`/projects/${id}`);
    }

    return (
        <section id="projects" className="relative overflow-hidden py-22 transition-colors duration-700 bg-slate-50 dark:bg-slate-950">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-20 transition-all duration-1000 ease-out ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="reveal">
                        <h2 className="text-5xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
                            Work &<em className="text-transparent italic bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500"> Projects.</em>
                        </h2>
                    </div>
                    <a href="projects" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all mt-8 md:mt-0">
                        Explore Archive
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all shadow-sm">
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </a>
                </div>

                <div className="space-y-8">
                    <div className={`group relative rounded-[32px] border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)] ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="grid lg:grid-cols-12" onClick={() => toProjectDetail(featured.id)}>
                            <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden bg-slate-100 dark:bg-slate-900 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 dark:from-blue-600/20 to-transparent z-10 opacity-10 group-hover:opacity-30 dark:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center ">
                                    <img src={featured.mainImage} alt={featured.title} className="w-5/6 h-auto" />
                                </div>
                            </div>
                            <div className="lg:col-span-7 p-8 md:p-14 lg:p-16">
                                <div className="flex items-center gap-3 mb-6 font-mono text-[10px] text-blue-600/60 dark:text-blue-400/60 uppercase tracking-[0.2em]">
                                    <span className="font-bold">{featured.category}</span>
                                    {featured.subcategory && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                            <span>{featured.subcategory}</span>
                                        </>
                                    )}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors">
                                    {featured.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-light text-lg leading-relaxed mb-10 max-w-xl">
                                    {featured.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {featured.techs.map((tech, index) => (
                                        <span key={index} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 text-[11px] font-mono uppercase tracking-wider group-hover:border-blue-500/20 dark:group-hover:text-blue-200 transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-8">
                                    <a href="https://bird2d.com" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all group/link">
                                        View Live Demo
                                        <svg className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                    <a href="https://github.com/ladalin05" className="text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Source Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Rest as grid (index 1+) ── */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {rest.map((project, index) => (
                            <div key={index} className={`group relative p-8 rounded-[32px] border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-slate-900/60 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                                <div className="flex justify-center items-start mb-10">
                                    <div className="w-full h-36 flex justify-center font-black text-slate-200 dark:text-blue-500/10 group-hover:text-blue-600/10 dark:group-hover:text-blue-500/20 transition-colors duration-500 font-display select-none">
                                        <img src={project.mainImage}  alt={project.title} className="w-5/6 h-auto" />
                                    </div>
                                    <button onClick={() => toProjectDetail(project.id)}  className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-100 dark:border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-slate-400 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="mb-8">
                                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-500/60 mb-2 block">{project.category}</span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-100 transition-colors mb-4">{project.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">{project.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
                                    {project.techs.map((tag, idx) => (
                                        <span key={idx} className="text-[9px] font-mono uppercase tracking-tighter px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-white/5 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:border-blue-500/20 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}