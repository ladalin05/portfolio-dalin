import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { User, Sun, Moon, Menu, X } from 'lucide-react';


const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem('theme') !== null ? localStorage.getItem('theme') === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.theme = darkMode ? 'dark' : 'light';
    }, [darkMode]);


    const menu = [
        { path: '/about', label: 'About' },
        { path: '/skills', label: 'Skills' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`w-full fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out px-4 ${isScrolled ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/50' : 'py-5 bg-transparent border-transparent'}`}>
            <div className="w-full mx-auto flex justify-around gab2 group">
                <Link to={'/'} className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-linear-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold shadow-blue-500/20 shadow-lg group-hover:scale-105 transition-transform">
                        <User className="w-6 h-6 text-foreground" />
                    </div>
                    <span className="text-xl font-bold dark:text-white text-slate-900 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                        Portfolio
                    </span>
                </Link>
                <nav className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                    {
                        menu.map((item, index) => (
                            <NavLink to={item.path} key={index} className="px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-slate-700 shadow-none hover:shadow-sm">
                                {item.label}
                            </NavLink>
                        ))
                    }
                </nav>
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-colors">
                        {
                            darkMode ? (
                                <Sun className="w-6 h-6 text-foreground text-amber-300" />
                            ) : (
                                <Moon className="w-6 h-6 text-foreground" />
                            )
                        }
                    </button>
                    <button 
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {
                            isMobileOpen ? (
                                <X className="w-6 h-6 text-foreground" />
                            ) : (
                                <Menu className="w-6 h-6 text-foreground" />
                            )
                        }
                    </button>
                </div>
            </div>
            {isMobileOpen && (
                <div className={`absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl md:hidden transition-all duration-200 ease-out ${isMobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <ul className="flex flex-col gap-2">
                        {
                            menu.map((item, index) => (
                                <NavLink to={item.path} key={index} className="w-full text-left px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">
                                    {item.label}
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>
            )} 
        </header>
    )
}

export default Navigation;