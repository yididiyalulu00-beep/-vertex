import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Sparkles, 
  Layers, 
  Palette, 
  Edit3, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  Languages,
  Video,
  Image as ImageIcon
} from 'lucide-react';
import { Profile } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  profile: Profile;
  onOpenCustomizer: () => void;
  onOpenResume: () => void;
  onResetToDefault: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenCustomizer,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isAmharic } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  const navLinks = [
    { label: isAmharic ? 'አገልግሎቶች' : 'Services', href: "#services" },
    { label: t.navProjects, href: "#projects" },
    { label: isAmharic ? 'ለምን እኛ?' : 'Why Us', href: "#why-us" },
    { label: t.navAbout, href: "#about" },
    { label: t.navSkills, href: "#skills" },
    { label: t.navContact, href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#020203]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <a 
            href="#about" 
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/20 bg-black flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-cyan-500/50 transition-all">
              {profile.avatarUrl ? (
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-4 h-4 bg-white rotate-45" />
              )}
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-white tracking-tight group-hover:text-cyan-400 text-base sm:text-lg transition-colors">
                  {isAmharic && profile.nameAm ? profile.nameAm : profile.name}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title={t.navAvailable} />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium font-mono hidden sm:inline-block">
                {isAmharic && profile.titleAm ? profile.titleAm : profile.title}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Toggle Button (English <-> Amharic) */}
            <button
              id="language-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all active:scale-95 shadow-sm"
              title={language === 'en' ? 'ወደ አማርኛ ቀይር (Switch to Amharic)' : 'Switch to English'}
              aria-label="Toggle Language English / Amharic"
            >
              <Languages className="w-3.5 h-3.5 text-zinc-300" />
              <span className="tracking-wide">
                {language === 'en' ? 'አማርኛ (AM)' : 'English (EN)'}
              </span>
            </button>

            {/* Live Customizer Trigger */}
            <button
              id="open-customizer-button"
              onClick={onOpenCustomizer}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-900/60 hover:bg-zinc-800/80 border border-white/5 hover:border-white/15 rounded-full transition-all"
              title="Customize portfolio content"
            >
              <Edit3 className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.navCustomize}</span>
            </button>

            {/* Resume Button */}
            <button
              id="view-resume-button"
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/40 hover:bg-zinc-800/80 border border-white/5 hover:border-white/15 rounded-full transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>{t.navResume}</span>
            </button>

            {/* Hire / Contact Action */}
            <a
              href="#contact"
              id="nav-contact-cta"
              className="px-4 sm:px-5 py-2 bg-white text-black text-xs sm:text-sm font-bold rounded-full hover:bg-zinc-200 transition-all shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.navContact}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/10 bg-[#020203]/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-4"
          >
            {/* Language switch on mobile */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-xs text-zinc-300 font-medium">{t.languageSelect}:</span>
              <button
                onClick={() => {
                  toggleLanguage();
                }}
                className="flex items-center gap-1.5 px-3 py-1 bg-white text-black text-xs font-bold rounded-full shadow"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'አማርኛ (AM)' : 'English (EN)'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl text-center border border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  onOpenCustomizer();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-900/80 text-zinc-200 border border-white/10 rounded-full text-xs font-semibold"
              >
                <Edit3 className="w-4 h-4 text-zinc-400" />
                {t.navCustomize}
              </button>
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-zinc-900/80 text-zinc-200 border border-white/10 rounded-full text-xs font-semibold"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                {t.navResume}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
