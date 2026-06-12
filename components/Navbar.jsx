'use client'
import Image from 'next/image';
import { useEffect, useRef} from 'react'
import { Link } from "react-scroll";
export default function Navbar() {
   // const [active, setActive] = useState("/");
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
                {/* <img src="/assets/header-bg-color.png" alt="" className="w-full" /> */}
                <Image src="/assets/header-bg-color.png"
                    alt="Headr"
                    className='w-full'
                    width={3276}
                    height={2496}
                    />
            </div>

            <nav ref={navRef} className="w-full border-b-[1px solid] shadow-sm fixed px-5 lg:px-8 xl:px-[2%] py-4 flex items-center justify-between z-50">

               <div className='flex items-center gap-2'>
                <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold">
                    R
                </div>

                <h2 className='text-xl font-bold'>Rajib</h2>
                </div>

                <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 bg-opacity-50 font-Ovo dark:bg-transparent ">

            <Link to="home" spy={true} smooth={true} offset={-80} duration={500}
            activeClass="text-orange-500 after:w-full"
            className="cursor-pointer hover:text-orange-500 relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-orange-500
                after:transition-all
                after:duration-500
            "> Home</Link>
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500}
            activeClass="text-orange-500 after:w-full"
            className="cursor-pointer hover:text-orange-500 relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-orange-500
                after:transition-all
                after:duration-500
            "> About</Link>
              <Link to="skills" spy={true} smooth={true} offset={-80} duration={500}
            activeClass="text-orange-500 after:w-full"
            className="cursor-pointer hover:text-orange-500 relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-orange-500
                after:transition-all
                after:duration-500
            "> Skills</Link>

             <Link to="Services" spy={true} smooth={true} offset={-80} duration={500}
            activeClass="text-orange-500 after:w-full"
            className="cursor-pointer hover:text-orange-500 relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-orange-500
                after:transition-all
                after:duration-500
            "> Services</Link>                 

             <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}
            activeClass="text-orange-500 after:w-full"
            className="cursor-pointer hover:text-orange-500 relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-orange-500
                after:transition-all
                after:duration-500
            "> Projects</Link>                 
             <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}
            activeClass="text-orange-500 after:w-full"
            className="cursor-pointer hover:text-orange-500 relative
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
            after:bg-orange-500
                after:transition-all
                after:duration-500
            "> Contact</Link>                 
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme}>
                          <Image src="/assets/moon_icon.png"
                            alt="Moon"
                            className='w-5 dark:hidden'
                            width={58}
                            height={58}/>
                            <Image src="/assets/sun_icon.png"
                            alt="Sun"
                            className='w-5 hidden dark:block'
                            width={58}
                            height={58}/>
                    </button>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Image src="/assets/menu-black.png"
                    alt="Menu"
                    className='dark:hidden w-6'
                    width={24}
                    height={24}/>
                        <Image src="/assets/menu-white.png"
                    alt="Menu"
                    className='hidden w-6 dark:block'
                    width={24}
                    height={24}/>
                    </button>

                </div>
                {/* -- ----- mobile menu ------  -- */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white">

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        {/* <img src="/assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" /> */}
                        <Image alt='close-black' src="/assets/close-black.png" className='w-5 cursor-pointer dark:hidden' width={29} height={29}/>
                        <Image alt='close-white' src="/assets/close-white.png" className='w-5 cursor-pointer dark:hidden' width={29} height={29}/>
                        {/* <img src="/assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" /> */}
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