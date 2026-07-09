import { Image } from "../General"
import profile from '../../../assets/profile-image.jpg'
import { useObserver } from "../../../utils/helper"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const About = () => {
    const animated = useObserver("about", 400)

    const facts = [
        { label: 'Location', value: 'Phnom Penh, Cambodia' },
        { label: 'Availability', value: 'Internship / Junior' },
        { label: 'Specialization', value: 'Web Development' },
        { label: 'Skills', value: 'Laravel, React, Vue' },
    ]


    return (
        <section id="about" className="relative overflow-hidden bg-slate-50 py-22 transition-colors duration-500 dark:bg-slate-950 md:py-48">
            <div className="absolute top-14 left-14 z-50 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none dark:bg-blue-500/10"></div>
            <div className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none dark:bg-blue-600/5"></div>
            <div className="mx-auto max-w-7xl px-8 relative z-10">
                <div className="flex items-center gap-6 mb-24">
                    <div className={`flex flex-col transition-all duration-1000 ease-out ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} `}>
                        <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white">About <span className="text-transparent italic bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Me.</span></h2>
                    </div>
                </div>
                <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
                    <div className={`relative lg:col-span-5 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 dark:border-white/10 dark:bg-slate-900/50">
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/5 via-transparent to-slate-200/80 dark:to-slate-950/80">
                                    <div className="text-center transition-transform duration-700 group-hover:scale-110">
                                        <div className="mx-auto mb-6 flex h-auto w-40 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl dark:border-blue-500/30">
                                            <Image  src={profile} alt="Profile" className="w-full h-full object-cover object-center rounded-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-scan"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl border border-slate-200 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 dark:border-blue-500/10"></div>
                            <div className="absolute -top-4 -left-4 font-display text-8xl font-black text-slate-900/[0.03] select-none dark:text-blue-500/[0.03]">BIO</div>
                        </div>
                    </div>
                    <div className={`reveal lg:col-span-7 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                        <h2 className="font-display mb-8 text-5xl font-bold tracking-tighter text-slate-900 transition-colors dark:text-white md:text-7xl">
                            Learning with<br />
                            <span className="text-blue-600 italic dark:text-blue-500">purpose.</span>
                        </h2>
                        
                        <div className="mb-12 space-y-6 text-lg font-light leading-relaxed text-slate-600 dark:text-slate-400">
                            <p>
                                I am a <span className="text-slate-900 font-medium dark:text-white">Junior Web Developer</span> looking for an internship or entry-level opportunity to grow my skills. Based in Phnom Penh, I enjoy building digital products that are clean, functional, and thoughtfully designed.
                            </p>
                            <p>
                                I've been learning and building with <span className="text-blue-600 dark:text-blue-400">Laravel</span>, <span className="text-blue-600 dark:text-blue-400">Vue.js</span>, and <span className="text-blue-600 dark:text-blue-400">React</span>, and I'm eager to apply these skills on a real team and keep growing as a developer.
                            </p>
                        </div>
                        <div className="mb-12 grid grid-cols-2 gap-4">
                            {
                                facts.map((fact, index) => (
                                    <div key={index} className={`group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-50 dark:border-white/5 dark:bg-blue-500/[0.02] dark:hover:bg-blue-500/[0.05] ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                                        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{fact.label}</div>
                                        <div className="text-sm font-medium text-slate-900 dark:text-slate-200">{fact.value}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`flex items-center gap-8 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                            <a href="/LA-DALIN.pdf" download className={`group relative inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] dark:hover:bg-blue-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
                                <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                                Download CV
                            </a>
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 dark:bg-blue-500"></span>
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Open to Internships</span>
                            </div>
                            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer"
                                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition">
                                <FaGithub size={16} />
                            </a>

                            <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer"
                                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition">
                                <FaLinkedin size={16} />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}