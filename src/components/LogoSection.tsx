import { Hexagon } from "lucide-react";

const LogoSection = () => {
  return (
    <div className="flex items-center gap-2 lg:gap-3 p-4 lg:p-6 bg-indigo-600 text-white rounded-2xl shadow-lg h-full justify-center md:justify-start transition-transform hover:scale-[1.02] duration-300 cursor-pointer overflow-hidden">
      <div className="bg-white/20 p-1.5 lg:p-2 rounded-lg backdrop-blur-sm shrink-0">
        <Hexagon className="w-6 h-6 lg:w-8 lg:h-8 animate-pulse" />
      </div>

      <div className="min-w-0">
        {" "}
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight truncate">
          NEXUS
        </h1>
        <p className="text-[10px] lg:text-xs text-indigo-200 font-medium tracking-widest truncate">
          DASHBOARD UI
        </p>
      </div>
    </div>
  );
};

export default LogoSection;
