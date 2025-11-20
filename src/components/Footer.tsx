const Footer = () => {
  return (
    <div className="bg-white border-t border-slate-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
      <p>&copy; 2025 Nexus System Inc. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-indigo-600 transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-indigo-600 transition-colors">
          Terms of Service
        </a>
        <a href="#" className="hover:text-indigo-600 transition-colors">
          Help Center
        </a>
      </div>
    </div>
  );
};

export default Footer;
