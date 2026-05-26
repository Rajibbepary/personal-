


const Nav = () => {
    return (
        <>
           <nav class="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
           <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" class="flex items-center gap-2">
                <div class="w-10 h-10 bg-linear-to-tr from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold">M</div>
                <span class="text-xl font-bold">Muhammed <span class="text-orange-500">Codex</span></span></a>
                <div class="hidden md:flex items-center gap-8">
                    <a class="relative text-sm font-semibold transition-colors text-orange-500" href="#home">Home<div class="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500" style="opacity: 1;"></div></a><a class="relative text-sm font-semibold transition-colors text-slate-700 dark:text-slate-200 hover:text-orange-500" href="#about">About</a><a class="relative text-sm font-semibold transition-colors text-slate-700 dark:text-slate-200 hover:text-orange-500" href="#skills">Skills</a><a class="relative text-sm font-semibold transition-colors text-slate-700 dark:text-slate-200 hover:text-orange-500" href="#services">Services</a><a class="relative text-sm font-semibold transition-colors text-slate-700 dark:text-slate-200 hover:text-orange-500" href="#projects">Projects</a><a class="relative text-sm font-semibold transition-colors text-slate-700 dark:text-slate-200 hover:text-orange-500" href="#contact">Contact</a></div><div class="flex items-center gap-3"><button class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></button><div class="md:hidden"><button class="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_r_0_" data-state="closed" data-slot="sheet-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div></div></div></nav> 
        </>
    );
};

export default Nav;