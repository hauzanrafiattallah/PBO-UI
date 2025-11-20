import {
  ChevronRight,
  LayoutDashboard,
  Newspaper,
  Settings,
  Users,
} from "lucide-react";
import React from "react";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

const SidebarNav = () => {
  const navItems: NavItem[] = [
    {
      label: "Dashboard Utama",
      icon: <LayoutDashboard className="w-5 h-5" />,
      active: true,
    },
    { label: "Berita & Artikel", icon: <Newspaper className="w-5 h-5" /> },
    { label: "Manajemen User", icon: <Users className="w-5 h-5" /> },
    { label: "Pengaturan Sistem", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 h-full p-4 lg:p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 lg:mb-4 px-2">
          Menu Navigasi
        </h3>
        <ul className="space-y-1 lg:space-y-2">
          {" "}
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className={`flex items-center justify-between px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl transition-all duration-200 group ${
                  item.active
                    ? "bg-indigo-50 text-indigo-700 font-semibold shadow-sm border border-indigo-100"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium"
                }`}
              >
                <div className="flex items-center gap-2.5 lg:gap-3 min-w-0">
                  <span
                    className={`${
                      item.active
                        ? "text-indigo-600"
                        : "text-slate-400 group-hover:text-slate-600"
                    } shrink-0`}
                  >
                    {item.icon}
                  </span>

                  <span className="text-sm truncate leading-none pt-0.5">
                    {item.label}
                  </span>
                </div>

                {item.active && (
                  <ChevronRight
                    size={16}
                    className="hidden lg:block text-indigo-400"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 lg:mt-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-3 lg:p-4 text-white text-center">
        <p className="text-sm font-medium mb-1 lg:mb-2">Upgrade Pro</p>
        <p className="text-[10px] lg:text-xs text-indigo-100 mb-2 lg:mb-3 opacity-80 leading-tight">
          Dapatkan fitur lengkap sekarang.
        </p>
        <button className="text-xs bg-white text-indigo-700 py-1.5 lg:py-2 px-3 lg:px-4 rounded-lg w-full font-bold hover:shadow-lg transition-shadow">
          Lihat Paket
        </button>
      </div>
    </div>
  );
};

export default SidebarNav;
