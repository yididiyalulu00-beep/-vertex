import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award
} from 'lucide-react';
import { ExperienceItem, EducationItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  educations: EducationItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, educations }) => {
  const { t, isAmharic } = useLanguage();
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-zinc-400 font-mono">
              <Briefcase className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.experienceBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {t.experienceTitle}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-light leading-relaxed">
              {t.experienceSubtitle}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md self-start sm:self-auto">
            <button
              id="tab-work-experience"
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.workTrack} ({experiences.length})</span>
            </button>
            <button
              id="tab-education"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.educationTrack} ({educations.length})</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'work' ? (
          /* Work Timeline */
          <div className="relative border-l border-white/10 ml-3 sm:ml-4 space-y-10 text-left">
            {experiences.map((exp, index) => {
              const role = isAmharic && exp.roleAm ? exp.roleAm : exp.role;
              const company = isAmharic && exp.companyAm ? exp.companyAm : exp.company;
              const period = isAmharic && exp.periodAm ? exp.periodAm : exp.period;
              const location = isAmharic && exp.locationAm ? exp.locationAm : exp.location;
              const summary = isAmharic && exp.summaryAm ? exp.summaryAm : exp.summary;
              const achievements = isAmharic && exp.achievementsAm && exp.achievementsAm.length > 0 
                ? exp.achievementsAm 
                : exp.achievements;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  className="relative pl-6 sm:pl-8 group"
                >
                  {/* Timeline Dot Indicator */}
                  <div className={`absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    exp.current
                      ? 'bg-white border-black ring-4 ring-white/20'
                      : 'bg-[#020203] border-zinc-600 group-hover:border-white'
                  }`} />

                  {/* Experience Card */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all duration-300 space-y-4 shadow-xl relative overflow-hidden">
                    
                    {/* Subtle hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Top Bar: Role, Company, Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {role}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 font-mono">
                              {isAmharic ? 'የአሁኑ ስራ' : 'Current Studio Role'}
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-300 mt-1">
                          {company}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{period}</span>
                        </div>
                        <span className="text-zinc-700">•</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light relative z-10">
                      {summary}
                    </p>

                    {/* Key Achievements */}
                    {achievements && achievements.length > 0 && (
                      <div className="space-y-2 pt-1 relative z-10">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                          {isAmharic ? 'ዋና ዋና ስኬቶች' : 'Key Milestones & Deliverables'}
                        </div>
                        <ul className="space-y-2">
                          {achievements.map((ach, i) => (
                            <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 font-light">
                              <span className="text-zinc-500 font-mono font-bold mt-0.5">✧</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Used */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 relative z-10">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-black/60 text-zinc-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Education & Honors */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {educations.map((edu, index) => {
              const degree = isAmharic && edu.degreeAm ? edu.degreeAm : edu.degree;
              const school = isAmharic && edu.schoolAm ? edu.schoolAm : edu.school;
              const period = isAmharic && edu.periodAm ? edu.periodAm : edu.period;
              const details = isAmharic && edu.detailsAm ? edu.detailsAm : edu.details;
              const honors = isAmharic && edu.honorsAm ? edu.honorsAm : edu.honors;

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl space-y-4 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {degree}
                      </h3>
                      <div className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-300">
                        {school}
                      </div>
                      <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 pt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                        <span>{period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                    {details}
                  </p>

                  {honors && (
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200">
                      <Award className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                      <span>{honors}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
