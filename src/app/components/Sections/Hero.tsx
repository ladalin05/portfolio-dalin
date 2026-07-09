import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export  const Hero = () => {
    const navigator = useNavigate();
    const [visible, setVisible ] = useState(false);

    const stats = [ 
        { value: '4+', label: 'Projects' }, 
        { value: '17+', label: 'Tech Stack' }
    ]

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, [])

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden py-22 transition-colors duration-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200">
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]" 
                    style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] dark:opacity-[0.02]">
                <span className="font-black text-[35vw] leading-none tracking-tighter text-blue-600 dark:text-blue-500">LD</span>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#020617_100%)]"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-blue-200 dark:border-blue-500/20 bg-white dark:bg-blue-500/5 shadow-sm transition-all duration-1000 opacity-100 translate-x-0">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                            </span>
                            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-blue-700 dark:text-blue-400 font-bold">Available for hire</span>
                        </div>
                        <h1 className={`font-display mb-8 transition-all duration-1000 delay-300 ${ visible ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="block text-7xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
                                LA DALIN
                            </span>
                            <span className="block text-5xl md:text-7xl font-bold tracking-tight mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 dark:from-blue-500 dark:via-blue-300 dark:to-slate-400">
                                Full-Stack Developer.
                            </span>
                        </h1>
                        <p className={`text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl text-slate-600 dark:text-slate-400 transition-all duration-1000 delay-500 ${ visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            I'm a <span className="text-slate-900 dark:text-white font-medium underline decoration-blue-500/30">junior web developer</span> seeking 
                            an internship or entry-level role, building with Laravel and React.js. 
                            Eager to grow while creating clean, scalable, and visually appealing digital products from 
                            <span className="italic text-blue-600 dark:text-blue-400 font-medium"> Phnom Penh.</span>
                        </p>
                        <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
                            <button onClick={() => navigator('/projects')} className="group relative px-10 py-5 bg-blue-600 rounded-full overflow-hidden transition-all hover:bg-blue-700 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative z-10 font-mono text-xs font-bold tracking-widest text-white uppercase">View Projects</span>                                
                            </button>
                            <button onClick={() => navigator('/contact')} className="group px-10 py-5 border border-slate-300 dark:border-slate-800 rounded-full hover:border-blue-600 dark:hover:border-blue-500 transition-all bg-white dark:bg-transparent">
                                <span className="font-mono text-xs font-bold tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-white uppercase transition-colors">Get in touch</span>
                            </button>
                        </div>
                        <div className={`flex flex-wrap gap-12 md:gap-20 mt-20 transition-all duration-1000 delay-1000  ${visible ? 'opacity-100' : 'opacity-0'}`}>
                            {stats.map((stat, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -left-4 top-0 w-[2px] h-0 group-hover:h-full bg-blue-600 dark:bg-blue-500 transition-all duration-500"></div>
                                <div className="font-black text-4xl text-slate-900 dark:text-white tracking-tighter">{stat.value}</div>
                                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-500 mt-1">{stat.label}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block lg:col-span-4 relative">
                        <div className={`relative w-full aspect-square transition-all duration-[2000ms] ${visible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'}`}>
                            <div className="absolute inset-0 rounded-[40px] border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-transparent backdrop-blur-2xl shadow-2xl animate-float">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                                    <svg className="w-20 h-20 text-blue-600/40 dark:text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                    </svg>
                                </div>
                                <div className="absolute top-8 left-8 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                                </div>
                            </div>
                            <div className="absolute -inset-4 border border-blue-400/10 dark:border-blue-500/20 rounded-[50px] animate-[spin_30s_linear_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-1000 delay-[1200ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 dark:from-blue-500 to-transparent"></div>
                <span className="font-mono text-[9px] tracking-[0.5em] uppercase text-slate-400 -rotate-90 origin-left translate-x-1">Scroll</span>
            </div>
        </section>
    )
}