"use client";

import Footer from "@/components/Footer";
import HeaderBanner from "@/components/HeaderBanner";
import LogoSection from "@/components/LogoSection";
import MainContent from "@/components/MainContent";
import SidebarNav from "@/components/SidebarNav";
import { Hexagon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 font-sans">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        <div className="md:col-span-3 hidden md:block h-32">
          <LogoSection />
        </div>

        <div className="md:col-span-9 h-32 hidden md:block">
          <HeaderBanner />
        </div>

        <div className="md:hidden col-span-1 flex justify-between items-center bg-indigo-600 p-4 rounded-xl text-white mb-4 mt-2">
          <div className="flex items-center gap-2 font-bold">
            <Hexagon size={24} /> NEXUS
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`md:col-span-3 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block h-full min-h-[500px]`}
        >
          <SidebarNav />
        </div>

        <div className="md:col-span-9 min-h-[500px]">
          <MainContent />
        </div>

        <div className="col-span-1 md:col-span-12 mt-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
