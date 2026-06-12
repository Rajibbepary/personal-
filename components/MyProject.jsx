import React from 'react';

const MyProject = () => {
    return (
        <div>
             <div className="flex justify-center mb-12">
      <div className="relative flex items-center justify-center gap-2 flex-wrap p-2 rounded-2xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5">
        
        <button className="relative px-6 py-2 text-sm font-semibold rounded-xl text-white">
          <span className="relative z-20">All</span>

          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_8px_25px_rgba(249,115,22,0.35)]"
            style={{
              transform: "none",
              transformOrigin: "50% 50% 0px",
            }}
          />
        </button>

        <button className="relative px-6 py-2 text-sm font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:text-orange-500 hover:bg-white/40 dark:hover:bg-white/5">
          <span className="relative z-20">Next.Js</span>
        </button>

        <button className="relative px-6 py-2 text-sm font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:text-orange-500 hover:bg-white/40 dark:hover:bg-white/5">
          <span className="relative z-20">React</span>
        </button>

        <button className="relative px-6 py-2 text-sm font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:text-orange-500 hover:bg-white/40 dark:hover:bg-white/5">
          <span className="relative z-20">Vanilla JS</span>
        </button>

        <button className="relative px-6 py-2 text-sm font-semibold rounded-xl text-slate-600 dark:text-slate-300 hover:text-orange-500 hover:bg-white/40 dark:hover:bg-white/5">
          <span className="relative z-20">Html & Css</span>
        </button>

      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

    </div>
        </div>
    );
};

export default MyProject;