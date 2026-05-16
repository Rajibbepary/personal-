export default function Header() {
    
    return (
     <div id="about" className="w-full px-[2%] py-10 scroll-mt-20">
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                       
                    </ul>
                </div>
                <div className="max-w-max mx-auto relative">
                    <img src='/assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />
                </div>
            </div>
        </div>
    )
}