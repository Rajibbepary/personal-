import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";


export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <Journey/>
            <Skills/>
            <Services />
            <Work />
            <Contact />
            <Footer />
        </>
    )
};