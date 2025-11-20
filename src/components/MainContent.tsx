import { ArrowRight, ChevronRight, LayoutDashboard } from "lucide-react";

const MainContent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 h-full p-8 flex flex-col">
      <div className="mb-6 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-indigo-600 mb-1">
          <span className="text-xs font-bold bg-indigo-50 px-2 py-1 rounded uppercase tracking-wide">
            Highlight
          </span>
          <span className="text-xs text-slate-400">Updated 20 Nov 2025</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          Laporan Performa & Analisis Data Kuartal 4
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 h-full">
        <div className="flex-1 space-y-4 text-slate-600 leading-relaxed">
          <p>
            Berdasarkan data terbaru yang dikumpulkan dari berbagai titik kontak
            pengguna, kita melihat peningkatan signifikan dalam keterlibatan
            pengguna sebesar <strong className="text-slate-800">24%</strong>{" "}
            dibandingkan bulan sebelumnya. Ini menunjukkan bahwa strategi UI
            baru bekerja dengan efektif.
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 my-4">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Poin Penting
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-indigo-400 shrink-0" />
                Optimasi loading time berkurang 1.2 detik.
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-indigo-400 shrink-0" />
                Retensi user mobile meningkat drastis.
              </li>
              <li className="flex gap-2">
                <ChevronRight size={16} className="text-indigo-400 shrink-0" />
                Konversi penjualan naik di sektor enterprise.
              </li>
            </ul>
          </div>

          <p>
            Tim pengembangan telah merilis patch v2.4 yang memperbaiki bug pada
            layout responsif. Langkah selanjutnya adalah mengintegrasikan AI
            untuk prediksi churn rate pelanggan di masa mendatang.
          </p>

          <div className="pt-4">
            <button className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group">
              Baca Selengkapnya
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 shrink-0">
          <div className="bg-slate-800 rounded-2xl p-6 text-white h-full min-h-[250px] flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

            <div className="relative z-10 mt-auto">
              <div className="inline-block p-2 bg-indigo-500 rounded-lg mb-3 shadow-lg">
                <LayoutDashboard size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1">Statistik Visual</h3>
              <p className="text-slate-400 text-sm mb-4">
                Lihat grafik pertumbuhan data secara real-time.
              </p>

              <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                <div className="bg-indigo-500 h-2 rounded-full w-3/4"></div>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Progress</span>
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
