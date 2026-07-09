import { useObserver } from "../../../utils/helper"

export const Skills = () => {
    const animated = useObserver("skills", 400)

    const skills = [
        { 
            name: 'Programming Foundations', 
            description: 'Core languages for systems and application development.',
            tools: ['C', 'C++'] 
        },
        { 
            name: 'Frontend Core', 
            description: 'Creating high-performance, reactive interfaces.',
            tools: ['Vue 3', 'Nuxt.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5'] 
        },
        { 
            name: 'Backend & Systems', 
            description: 'Building robust APIs and server-side logic.',
            tools: ['Laravel', 'PHP', 'Node.js', 'RESTful APIs'] 
        },
        { 
            name: 'Database & Storage', 
            description: 'Managing data integrity and scalable storage.',
            tools: ['MySQL', 'PostgreSQL'] 
        },
        { 
            name: 'Tools & DevOps', 
            description: 'Workflow optimization and deployment.',
            tools: ['Docker', 'Git', 'GitHub', 'Postman'] 
        },
    ]

    return (
        <section id="skills" className="relative overflow-hidden py-22 transition-colors duration-700 bg-slate-50 dark:bg-slate-950">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/[0.08] dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className={`flex flex-col mb-20 transition-all duration-1000 ease-out ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-5xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight">
                        Technical <span className="italic bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-300 dark:to-blue-600 bg-clip-text text-transparent">stack.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl font-light text-lg leading-relaxed">
                        I specialize in full-stack development, moving from clean UI architecture to scalable backend systems. Here is my current ecosystem.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {
                        skills.map((skill, index) => (
                            <div key={index} className={`group relative p-8 md:p-10 rounded-[32px] border border-slate-200 dark:border-white/5 bg-white dark:bg-blue-500/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-blue-500/40 dark:hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:bg-blue-500/[0.06]  ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/5 dark:bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-all duration-300">
                                            <span className="font-mono text-sm font-bold">0{index + 1}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">{skill.name}</h3>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-500 text-sm font-light mb-8 max-w-xs leading-relaxed">{skill.description}</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {
                                            skill.tools.map((tool, index) => (
                                                <div key={index} className="px-4 py-2 text-xs font-mono tracking-wide bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 rounded-xl
                                                                            group-hover:border-blue-300 dark:group-hover:border-blue-500/30 group-hover:text-blue-700 dark:group-hover:text-blue-100 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/5 
                                                                            transition-all duration-300 cursor-default">
                                                    {tool}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={`mt-20 flex justify-center transition-all duration-1000 delay-700 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 dark:border-blue-500/10 bg-white/50 dark:bg-blue-500/5 backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                        </span>
                        <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 dark:text-blue-300/80 font-bold">Constantly evolving my workflow</span>
                    </div>
                </div>
            </div>
        </section>
    )
}