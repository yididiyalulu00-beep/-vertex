import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Languages } from 'lucide-react';
import { Profile } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  profile: Profile;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const { language, setLanguage, t, isAmharic } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <footer className="border-t border-white/5 bg-[#020203] text-zinc-400 text-left py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Left Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 bg-black flex items-center justify-center shadow-md">
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
              <span className="font-bold text-white text-sm tracking-tight">
                {isAmharic && profile.nameAm ? profile.nameAm : profile.name}
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm font-light text-[11px] pt-1">
              {isAmharic && profile.titleAm ? profile.titleAm : profile.title}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">{t.navAbout}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.navProjects}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t.navSkills}</a>
            <button onClick={onOpenResume} className="hover:text-white transition-colors">{t.navResume}</button>
            <a href="#contact" className="hover:text-white transition-colors">{t.navContact}</a>
          </div>

          {/* Language Switch & Back to Top */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'አማርኛ (AM)' : 'English (EN)'}</span>
            </button>

            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {profile.socials.twitter && (
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors ml-2 shadow-md"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-zinc-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Vertex Digital. {isAmharic ? 'መብቱ በህግ የተጠበቀ ነው።' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500">
            <span>{isAmharic ? 'በፈጠራ የተገነባ የዲጂታል ስቱዲዮ ፖርትፎሊዮ' : 'Crafted for Websites, Commercial Posters & Branding'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
