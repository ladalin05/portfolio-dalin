import { useObserver } from "../../../utils/helper"

const CERT_IMAGE_URL = "https://www.beltei.edu.kh/storage/upload/certificate/university/3/58/beltei/5223.jpg"
const VERIFY_URL = "https://verify.gov.kh/verify/uRmM3f74rr5Jz2LmYplVB4zSBYSRR01N?key=416697faf88aa6d032e8b08362d0e819205e865ebc0a7e03827bfbd48bce2563"

export const Education = () => {
    const animated = useObserver("education", 400)

    return (
        <section id="education" className="relative overflow-hidden bg-slate-50 py-22 transition-colors duration-500 dark:bg-slate-950 md:py-40">
            <div className="mx-auto max-w-7xl px-8 relative z-10">
                <h2 className={`mb-16 text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-all duration-1000 ease-out ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    Education <span className="text-transparent italic bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">&amp; Certificate.</span>
                </h2>

                <div className={`grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-blue-500/40 dark:border-white/5 dark:bg-blue-500/[0.02] md:grid-cols-2 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <div>
                        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">2023 – 2026</div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Bachelor of Software Engineering</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">BELTEI International University</p>

                        <a href={VERIFY_URL} target="_blank" rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                            Verify certificate
                        </a>
                    </div>

                    <a href={CERT_IMAGE_URL} target="_blank" rel="noreferrer" className="block">
                        <img src={CERT_IMAGE_URL} alt="Bachelor of Software Engineering certificate" referrerPolicy="no-referrer" loading="lazy"
                            className="w-full max-w-sm rounded-xl border border-slate-200 shadow-sm transition-transform duration-300 hover:scale-[1.02] dark:border-white/10"/>
                        <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400">View full size</span>
                    </a>
                </div>
            </div>
        </section>
    )
}