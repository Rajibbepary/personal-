'use client'
import { useEffect, useRef } from 'react'

export default function Navbar() {

    const sideMenuRef = useRef();
    const navRef = useRef();
    const navLinkRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    const toggleTheme = () => {

        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add( 'bg-opacity-50', 'backdrop-blur-lg', 'dark:bg-darkTheme');
                navLinkRef.current.classList.remove( 'bg-opacity-50',  "dark:bg-transparent");
            } else {
                navRef.current.classList.remove( 'bg-opacity-50', 'backdrop-blur-lg', 'dark:bg-darkTheme');
                navLinkRef.current.classList.add( 'bg-opacity-50', "dark:bg-transparent");
            }
        })

        // -------- light mode and dark mode -----------

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="/assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav ref={navRef} className="w-full border-b-[1px solid] shadow-sm fixed px-5 lg:px-8 xl:px-[2%] py-4 flex items-center justify-between z-50">

                <div className='flex items-center gap-2'>
                     <button type="button" className="px-4 py-2 active:scale-95 transition bg-[#F85100] rounded-2xl text-white text-xl font-bold">R</button>
                     <h2 className='text-2xl font-semibold'>Rajib</h2>
                </div>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 bg-opacity-50 font-Ovo dark:bg-transparent ">

                    {/* <li><a className='hover:text-gray-500 dark:hover:text-gray-300 transition' href="#contact">Contact me</a></li>  */}
                    <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 hover:text-[#F85100] ">Home</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 hover:text-[#F85100]">Home</span></a>        
                    <a href="#about" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 hover:text-[#F85100]">About</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 hover:text-[#F85100]">About</span></a>        
                    <a href="#skills" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 hover:text-[#F85100]">Skills</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 hover:text-[#F85100]">Skills</span></a>        
                    <a href="#Services" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 hover:text-[#F85100]">Services</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 hover:text-[#F85100]">Services</span></a>        
                    <a href="#work" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 hover:text-[#F85100]">My Work</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 hover:text-[#F85100]">My Work</span></a>        
                    <a href="#contact" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 hover:text-[#F85100]">Contact</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 hover:text-[#F85100]">Contact</span></a>        
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme}>
                        <img src="/assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="/assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="/assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="/assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="/assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="/assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                     <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About me</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact me</a></li> 
                     
                </ul>
            </nav>
        </>
    )
}