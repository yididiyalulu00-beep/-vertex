import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Palette, 
  Cpu, 
  Zap,
  Terminal,
  Image as ImageIcon,
  Layout,
  ArrowUpRight
} from 'lucide-react';
import { Skill, SkillCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SkillsSectionProps {
  skills: Skill[];
  onSelectSkillForFilter: (skillName: string) => void;
}

const CATEGORY_TABS: { key: 'All' | SkillCategory; en: string; am: string }[] = [
  { key: 'All', en: 'All Disciplines', am: 'ሁሉም ዘርፎች' },
  { key: 'Graphic Design', en: 'Graphic Design & Posters', am: 'የፖስተር እና ግራፊክ ዲዛይን' },
  { key: 'Web Development', en: 'Web Development', am: 'የድረ-ገጽ ዝግጅት' },
  { key: 'Design & Tools', en: 'Design & Tools', am: 'የዲዛይን ሶፍትዌሮች' },
  { key: 'Brand & Strategy', en: 'Brand & Strategy', am: 'ብራንዲንግ እና ስትራቴጂ' }
];

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onSelectSkillForFilter }) => {
  const { t, isAmharic } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'All' | SkillCategory>('All');

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'All') return true;
    return skill.category === activeCategory;
  });

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'Graphic Design':
        return <ImageIcon className="w-4 h-4 text-emerald-400" />;
      case 'Web Development':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Design & Tools':
        return <Palette className="w-4 h-4 text-amber-400" />;
      case 'Brand & Strategy':
        return <Layout className="w-4 h-4 text-rose-400" />;
      default:
        return <Cpu className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-zinc-400 font-mono">
            <Zap className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.skillsBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.skillsTitle}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl font-light leading-relaxed">
            {t.skillsSubtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isSelected = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-white text-black shadow-lg scale-[1.02]'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                <span>{isAmharic ? tab.am : tab.en}</span>
                {tab.key !== 'All' && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black text-white' : 'bg-white/10 text-zinc-400'
                  }`}>
                    {skills.filter(s => s.category === tab.key).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left">
          {filteredSkills.map((skill, index) => {
            const skillName = isAmharic && skill.nameAm ? skill.nameAm : skill.name;
            const experienceYears = isAmharic && skill.experienceYearsAm ? skill.experienceYearsAm : skill.experienceYears;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                onClick={() => onSelectSkillForFilter(skill.name)}
                className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all duration-300 group cursor-pointer space-y-3 relative overflow-hidden shadow-lg"
              >
                {/* Highlight Glow for top skills */}
                {skill.highlighted && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none" />
                )}

                {/* Top Info */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-zinc-100 transition-colors flex items-center gap-1.5">
                        <span>{skillName}</span>
                        {skill.highlighted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        )}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
                </div>

                {/* Progress Level Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-400">{experienceYears}</span>
                    <span className="text-white font-bold">{skill.level}%</span>
                  </div>

                  {/* Meter Track */}
                  <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner: Philosophy */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-zinc-400" />
              <span>{isAmharic ? 'የስቱዲዮ የፈጠራ እና የአሰራር ፍልስፍና' : 'Vertex Digital Creative Standard'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              {isAmharic
                ? 'በድረ-ገጽ ዝግጅት እና በንግድ ፖስተር ስራዎቻችን ሁሉ ፈጣን አሰራርን፣ ከፍተኛ ጥራትን እና ለዓይን ማራኪ የሆነ አቀራረብን ሁልጊዜ እናስቀድማለን።'
                : 'Every website, e-commerce platform, and commercial poster design is crafted to be lightweight, striking, responsive, and primed for maximum conversion and visual engagement.'}
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold whitespace-nowrap transition-colors shadow-lg active:scale-95 self-start md:self-auto"
          >
            {isAmharic ? 'አብረን እንስራ' : 'Request a Custom Project'}
          </a>
        </div>

      </div>
    </section>
  );
};
