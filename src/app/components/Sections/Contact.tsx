import { Link } from "react-router-dom"
import { useObserver } from "../../../utils/helper"
import { useState } from "react"
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const animated = useObserver("contact", 400)
    const EMAILEJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILEJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILEJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("Form submitted", form);
        e.preventDefault();
        if (!form) return;

        await emailjs.send(
            EMAILEJS_SERVICE_ID,
            EMAILEJS_TEMPLATE_ID,
            {
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
            },
            EMAILEJS_PUBLIC_KEY
        ).then(() => {

            },
            (error) => {
                console.error("Error sending email:", error);
            }
        );
    }
    
    const contacts = [
        { label:'System Email', value:'lin280454@gmail.com', href:'mailto:lin280454@gmail.com', icon:'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { label:'Base Station', value:'Phnom Penh, Cambodia', href:'#', icon:'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    ]

    return (
        <section id="contact" className="py-22 transition-colors duration-700 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
            <div className="absolute top-30 left-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`mb-20 transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <h2 className="text-5xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
                        Contact <span className="text-transparent italic bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Me. </span>
                    </h2>
                </div>
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className={`lg:col-span-5 space-y-8 transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                        <div className="p-8 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01] backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's build something great.</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light italic">
                                Open to full-stack development, performance optimization, and product consulting.{' '}
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">Ready to bring your next idea to life.</span>
                            </p>
                        </div>
                        <div className="grid gap-4">
                            {
                                contacts.map((contact, index) => (
                                    <Link
                                        key={index}
                                        to={contact.href}
                                        target="_blank"
                                        className="group flex items-center gap-6 p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] transition-all duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-blue-600 dark:text-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={contact.icon} />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">{ contact.label }</p>
                                            <p className="text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-medium">{ contact.value }</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-slate-200 via-transparent to-slate-200 dark:from-white/10 dark:to-white/5">
                            <div  className={`bg-white dark:bg-[#0B0F1A] rounded-[2.3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none transition-all duration-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                                <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="relative group">
                                            <input type="text" id="name" placeholder=" " required value={form.name} onChange={handleChange} name="name"
                                                className="peer w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all duration-500"/>
                                            <label htmlFor="name" className="absolute left-0 top-3 font-mono text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 pointer-events-none transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-8">
                                                Full Name
                                            </label>
                                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-500 group-focus-within:w-full transition-all duration-700 shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                                        </div>

                                        <div className="relative group">
                                            <input type="email" id="email" placeholder=" " required value={form.email} onChange={handleChange} name="email"
                                                className="peer w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all duration-500"/>
                                            <label htmlFor="email" className="absolute left-0 top-3 font-mono text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 pointer-events-none transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-8">
                                                Email Address
                                            </label>
                                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-500 group-focus-within:w-full transition-all duration-700 shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input type="text" id="subject" placeholder=" " value={form.subject} onChange={handleChange} name="subject"
                                            className="peer w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all duration-500"/>
                                        <label htmlFor="subject" className="absolute left-0 top-3 font-mono text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 pointer-events-none transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-8">
                                            Project Subject
                                        </label>
                                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-500 group-focus-within:w-full transition-all duration-700 shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                                    </div>

                                    <div className="relative group">
                                        <textarea id="message" rows={4} placeholder=" " required value={form.message} onChange={handleChange} name="message"
                                            className="peer w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all duration-500 resize-none"
                                        ></textarea>
                                        <label htmlFor="message" className="absolute left-0 top-3 font-mono text-[11px] uppercase tracking-widest text-slate-400 dark:text-slate-500 pointer-events-none transition-all duration-300 peer-focus:-translate-y-8 peer-focus:text-blue-600 dark:peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-8">
                                            Message Details
                                        </label>
                                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-500 group-focus-within:w-full transition-all duration-700 shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="relative w-full group overflow-hidden bg-slate-900 dark:bg-blue-600 rounded-2xl py-5 active:scale-[0.98] transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <span className="relative z-10 flex items-center justify-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-white">
                                            Execute Transmission
                                            <svg className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}