import { useObserver } from "../../../utils/helper"

export const Experience = () => {
    const animated = useObserver("experience", 400)

    const experience = [
        {
            role: 'Freelance Full-Stack Developer',
            company: 'Self-employed · Remote',
            period: '2026 – Present',
            type: 'Freelance',
            desc: 'Delivered full-stack web applications for clients, handling backend systems with Laravel REST APIs and building responsive frontends using Nuxt.js and React.js. Managed the full project lifecycle from requirement gathering to deployment.',
            tech: ['Nuxt.js', 'React.js', 'Tailwind CSS', 'Laravel', 'MySQL'],
        },
        {
            role: 'Web Development Intern',
            company: 'WINTECH SOFTWARE DEVELOPMENT (Cambodia) Co., Ltd',
            period: '2024 – 2025',
            type: 'Internship',
            desc: 'Contributed to real-world software projects under senior developer mentorship. Built and maintained internal tools and client-facing web applications using Laravel and MySQL. Gained hands-on experience with MVC architecture, database design, and agile team workflows.',
            tech: ['Laravel', 'MySQL', 'PHP', 'JavaScript'],
        },
    ]
    const education = [
        { degree: 'SoftWare Engineering', school: 'BELTEI International University', year: '2023 – 2026' },
    ]
    const services = [
        { title: 'Web Apps', desc: 'Building full-stack web applications', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>' },
        { title: 'API Integration', desc: 'Connecting frontend with RESTful APIs', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>' },
        { title: 'Database', desc: 'Designing schemas with MySQL', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7"/></svg>' },
        { title: 'Problem Solving', desc: 'Debugging and improving code quality', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' },
    ]

    return (
        <section id="experience" className="py-22 transition-colors duration-700 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
            <div className="absolute top-28 -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-28 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="flex items-center gap-6 mb-24">
                    <div className={`flex flex-col ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                        <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Experience<span className="text-blue-600 dark:text-blue-500">.</span></h2>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        <div className="relative space-y-8">
                            <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-gradient-to-b from-blue-600 via-blue-200 dark:via-blue-500/20 to-transparent"></div>
                            {
                                experience.map((job, index) => (
                                    <div key={index} className={`relative pl-10 group ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} transition-all duration-500`}>
                                        {/* FIX: dot is now a standalone sibling, not wrapping the card */}
                                        <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-slate-50 dark:border-slate-950 transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] ${index === 0 ? 'bg-blue-600 dark:bg-blue-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                                        <div className="p-8 rounded-[24px] border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 backdrop-blur-xl shadow-sm transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/5 dark:group-hover:bg-slate-900/60">
                                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{ job.role }</h3>
                                                    <p className="text-blue-600 dark:text-blue-500 font-semibold tracking-wide mt-1 text-sm">{ job.company }</p>
                                                </div>
                                                <span className="text-[10px] font-mono py-1.5 px-3 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 font-bold">
                                                    { job.period }
                                                </span>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light text-sm md:text-base">
                                                { job.desc }
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {job.tech.map((t, i) => (
                                                    <span key={i} className="text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-all">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-5 space-y-16">
                        <div className={`${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500"></span>
                                Education
                            </h3>
                            <div className="space-y-4">
                                { 
                                    education.map((edu, index) => (
                                        <div key={index} className="group p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm hover:border-blue-500/30 hover:shadow-lg transition-all">
                                            <div className="flex gap-4">
                                                <div className="p-3 h-fit rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors">{ edu.degree }</h4>
                                                    <p className="text-blue-600 dark:text-blue-500 text-sm font-medium">{ edu.school }</p>
                                                    <p className="text-slate-400 dark:text-slate-500 text-[10px] mt-1 font-mono uppercase tracking-tighter">{ edu.year }</p>
                                                </div>
                                            </div>
                                        </div> 
                                    ))
                                }
                            </div>
                        </div>

                        <div className={`${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-500"></span>
                                Expertise
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {
                                    services.map((service, index) => (
                                        <div key={index} className="p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 shadow-sm hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
                                            <div className="mb-4 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform origin-left" dangerouslySetInnerHTML={{ __html: service.icon }} />
                                            <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">{ service.title }</div>
                                            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-light leading-relaxed">{ service.desc }</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}