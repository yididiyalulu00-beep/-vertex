import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowDown, 
  FileText, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  Code2, 
  Award,
  Layers,
  Palette,
  Image as ImageIcon,
  Globe,
  Clock
} from 'lucide-react';
import { Profile } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  profile: Profile;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResume }) => {
  const { t, isAmharic } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  const activeRoleTags = isAmharic && profile.roleTagsAm && profile.roleTagsAm.length > 0 
    ? profile.roleTagsAm 
    : profile.roleTags;

  useEffect(() => {
    if (!activeRoleTags || activeRoleTags.length <= 1) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % activeRoleTags.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [activeRoleTags]);

  const metrics = [
    { label: t.heroYearsExp, value: `${profile.yearsOfExperience}+`, icon: Briefcase },
    { label: t.heroProjectsDone, value: `${profile.projectsCompleted}+`, icon: Code2 },
    { label: t.heroTurnaround, value: `24-48h`, icon: Clock },
    { label: t.heroClientSat, value: `${profile.clientSatisfaction}%`, icon: Award },
  ];

  return (
    <section id="about" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Immersive Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left / Main Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider">
                {isAmharic && profile.availabilityTextAm ? profile.availabilityTextAm : profile.availabilityText}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm uppercase tracking-widest font-mono text-zinc-400 font-bold block">
                {t.heroStudioBadge}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
                {t.heroHeadline1}{' '}
                <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent underline decoration-white/20 underline-offset-8">
                  {t.heroHeadlineHighlight}
                </span>{' '}
                {t.heroHeadline2}
              </h1>

              {/* Dynamic Role Ticker */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${isAmharic ? 'am' : 'en'}-${roleIndex}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="flex items-center gap-2.5 text-lg sm:text-2xl md:text-3xl font-bold text-zinc-200 tracking-tight"
                  >
                    <span className="text-zinc-500 font-mono">✧</span>
                    <span>{activeRoleTags[roleIndex] || profile.title}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed font-light">
              {isAmharic && profile.bioAm ? profile.bioAm : profile.bio}
            </p>

            {/* Core Specialties Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-300 font-medium">
                <Globe className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="truncate">{t.heroWebDev}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-300 font-medium">
                <ImageIcon className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="truncate">{t.heroPosterDesign}</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-zinc-300 font-medium">
                <Palette className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="truncate">{t.heroBrandDesign}</span>
              </div>
            </div>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400 font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>{isAmharic && profile.locationAm ? profile.locationAm : profile.location}</span>
              </div>
              <span className="text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-zinc-500" />
                <a href={`mailto:${profile.email}`} className="text-zinc-300 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-sm shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.heroViewProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-get-in-touch-btn"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>{t.heroGetInTouch}</span>
              </a>

              <button
                id="hero-view-cv-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-zinc-400 hover:text-white text-sm font-medium hover:bg-white/5 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>{t.heroDownloadResume}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Immersive Showcase Preview Bento */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              
              {/* Ambient Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-emerald-500/10 blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

              <div className="bg-zinc-900/60 border border-white/10 group-hover:border-white/20 rounded-3xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-2xl relative overflow-hidden transition-all duration-500 shadow-2xl space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 bg-black flex items-center justify-center shadow-md">
                      <img 
                        src="/src/assets/images/vertex_official_logo_1786667457174.jpg" 
                        alt="Vertex Digital" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-white tracking-tight">Vertex Digital</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold bg-white/5 px-2.5 py-1 rounded-full border border-white/5 font-mono">
                    Creative Studio
                  </span>
                </div>

                {/* Poster showcase mini gallery */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 group/poster bg-black">
                    <img 
                      src="/src/assets/images/luxury_watch_poster_1786664988875.jpg" 
                      alt="THEPROTECH Luxury Watch Poster" 
                      className="w-full h-full object-cover group-hover/poster:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <span className="text-[10px] font-bold text-amber-200 block truncate">THEPROTECH Gold Watch</span>
                      <span className="text-[9px] text-zinc-400 font-mono">Product Poster</span>
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 group/poster bg-black">
                    <img 
                      src="/src/assets/images/coffee_ad_poster_1786665000132.jpg" 
                      alt="Coffee Time Mornings Poster" 
                      className="w-full h-full object-cover group-hover/poster:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <span className="text-[10px] font-bold text-orange-200 block truncate">Coffee Time Mornings</span>
                      <span className="text-[9px] text-zinc-400 font-mono">Commercial Ad</span>
                    </div>
                  </div>
                </div>

                {/* Website & Poster Highlights strip */}
                <div className="p-3 rounded-2xl bg-black/60 border border-white/5 space-y-1.5 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono text-[11px]">Core Services</span>
                    <span className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Ready
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 flex items-center justify-between">
                    <span>Websites • Commercial Posters • Branding</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar with Immersive Card Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * idx }}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/15 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-mono">{metric.label}</span>
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight relative z-10">
                  {metric.value}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
