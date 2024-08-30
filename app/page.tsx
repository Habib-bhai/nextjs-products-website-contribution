"use client"
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { log } from "console";
import { title } from "process";




export default function Home() {
  return (

    <div className="min-h-screen">
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <Sidebar></Sidebar>
    </div>
    
    
  );
};
