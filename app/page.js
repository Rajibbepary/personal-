"use client";
import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Journey from "@/components/Journey";
import dynamic from "next/dynamic";
import Projects from "@/components/Projects";
import Home from "@/components/Home";

 const Skills = dynamic(
  () => import("@/components/Skills"),
  {
    ssr: false,
  }
);

export default function Page() {

   
    return (
        <>
            <LenisScroll />
            <Navbar /> 
            <Home/>
             <Header /> 
             <Journey/> 
            <Skills/>
            <Services /> 
            <Projects/>
            <Contact />
            <Footer />
        </>
    )
};