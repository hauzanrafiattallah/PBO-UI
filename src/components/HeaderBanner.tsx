import { Bell, Search } from "lucide-react";

const HeaderBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white shadow-lg h-full flex flex-col justify-center p-5 md:p-6 lg:p-8 group">
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
      <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

      <div className="relative z-10 flex justify-between items-center md:flex-row flex-col gap-4">
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200 truncate">
            Selamat Datang, Admin!
          </h2>

          <p className="text-slate-300 max-w-xl text-xs md:text-sm lg:text-base leading-relaxed">
            Sistem berjalan optimal. Ada 4 notifikasi baru untuk Anda tinjau.
          </p>
        </div>

        <div className="flex gap-2 md:gap-3 shrink-0 items-center">
          <button className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all border border-white/10">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all border border-white/10 relative">
            <Bell className="w-4 h-4 md:w-5 md:h-5" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full border border-slate-900"></span>
          </button>

          <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white/20 flex items-center justify-center shadow-md">
            <span className="font-bold text-xs md:text-sm">AD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
