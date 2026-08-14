import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  MapPin, 
  Mail, 
  Phone, 
  FileText,
  Languages
} from 'lucide-react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  const [copied, setCopied] = useState(false);
  const { language, setLanguage, t, isAmharic } = useLanguage();
  const { profile, skills, experiences, educations, projects } = data;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const name = isAmharic && profile.nameAm ? profile.nameAm : profile.name;
  const title = isAmharic && profile.titleAm ? profile.titleAm : profile.title;
  const bio = isAmharic && profile.aboutLongAm ? profile.aboutLongAm : (isAmharic && profile.bioAm ? profile.bioAm : profile.aboutLong || profile.bio);
  const location = isAmharic && profile.locationAm ? profile.locationAm : profile.location;

  const handleCopyMarkdown = () => {
    const md = `# ${name}
**${title}**
Location: ${location} | Email: ${profile.email} ${profile.phone ? `| Phone: ${profile.phone}` : ''}

## ${isAmharic ? 'የስቱዲዮ ማጠቃለያ' : 'Studio & Professional Profile'}
${bio}

## ${isAmharic ? 'የክህሎት ማትሪክስ' : 'Specialized Skills & Capabilities'}
${skills.map(s => `- **${isAmharic && s.nameAm ? s.nameAm : s.name}** (${s.category}): ${s.level}% proficiency, ${s.experienceYears}`).join('\n')}

## ${isAmharic ? 'የስራ ልምድ እና ፕሮጀክቶች' : 'Professional Milestones'}
${experiences.map(exp => `### ${isAmharic && exp.roleAm ? exp.roleAm : exp.role} — ${isAmharic && exp.companyAm ? exp.companyAm : exp.company}
*${isAmharic && exp.periodAm ? exp.periodAm : exp.period} | ${isAmharic && exp.locationAm ? exp.locationAm : exp.location}*
${isAmharic && exp.summaryAm ? exp.summaryAm : exp.summary}
${(isAmharic && exp.achievementsAm ? exp.achievementsAm : exp.achievements).map(a => `- ${a}`).join('\n')}
**Tools & Stack:** ${exp.technologies.join(', ')}
`).join('\n')}

## ${isAmharic ? 'ትምህርት እና ስልጠና' : 'Education & Credentials'}
${educations.map(edu => `### ${isAmharic && edu.degreeAm ? edu.degreeAm : edu.degree} — ${isAmharic && edu.schoolAm ? edu.schoolAm : edu.school}
*${isAmharic && edu.periodAm ? edu.periodAm : edu.period}*
${isAmharic && edu.detailsAm ? edu.detailsAm : edu.details}
`).join('\n')}

## ${isAmharic ? 'ቁልፍ ስራዎች' : 'Featured Works'}
${projects.map(p => `### ${isAmharic && p.titleAm ? p.titleAm : p.title} (${p.category})
${isAmharic && p.descriptionAm ? p.descriptionAm : p.description}
Stack: ${p.techStack.join(', ')}
`).join('\n')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0c0e]/95 border border-white/10 rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10 my-auto text-left backdrop-blur-2xl"
        >
          {/* Header Action Toolbar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c0c0e]/90 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-2 text-sm font-bold text-white tracking-tight">
              <FileText className="w-4 h-4 text-zinc-400" />
              <span>{isAmharic ? 'የስራ ልምድ ማጠቃለያ (CV)' : 'Studio Portfolio & Curriculum Vitae'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                className="flex items-center gap-1 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-xs text-zinc-300 hover:text-white rounded-full border border-white/10"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'አማርኛ' : 'English'}</span>
              </button>

              <button
                id="copy-markdown-resume-btn"
                onClick={handleCopyMarkdown}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-full border border-white/10 transition-colors"
                title="Copy formatted markdown version of resume"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAmharic ? 'ተቀድቷል!' : 'Copied!') : (isAmharic ? 'ኮፒ ማድረጊያ' : 'Copy Markdown')}</span>
              </button>

              <button
                id="print-resume-btn"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-white hover:bg-zinc-200 text-black text-xs font-bold rounded-full transition-colors shadow-md active:scale-95"
                title="Print or export as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{isAmharic ? 'ፕሪንት / PDF' : 'Print / PDF'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors ml-1"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Document Paper View */}
          <div id="printable-resume" className="p-6 sm:p-10 bg-[#020203] space-y-8 font-sans">
            
            {/* Resume Header */}
            <div className="border-b border-white/10 pb-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-black flex items-center justify-center shrink-0 shadow-md">
                    {profile.avatarUrl ? (
                      <img 
                        src={profile.avatarUrl} 
                        alt={name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-5 h-5 bg-white rotate-45" />
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {name}
                  </h1>
                </div>
                <span className="text-xs sm:text-sm font-mono text-zinc-300 font-bold uppercase tracking-wider">
                  {title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-zinc-400 font-mono pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{location}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{profile.email}</span>
                </div>
                {profile.phone && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{profile.phone}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest font-mono text-zinc-400 border-b border-white/10 pb-1">
                {isAmharic ? 'የስቱዲዮ ማጠቃለያ እና ራዕይ' : 'Professional Summary'}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {bio}
              </p>
            </div>

            {/* Core Skills Matrix */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest font-mono text-zinc-400 border-b border-white/10 pb-1">
                {isAmharic ? 'የሙያ እና የዲዛይን ክህሎቶች' : 'Specialized Capabilities & Tools'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-medium text-zinc-200">
                      {isAmharic && skill.nameAm ? skill.nameAm : skill.name}
                    </span>
                    <span className="font-mono text-zinc-400 text-[11px]">{skill.experienceYears}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest font-mono text-zinc-400 border-b border-white/10 pb-1">
                {isAmharic ? 'የስራ ልምድ እና የደንበኞች ፕሮጀክቶች' : 'Work Track & Client Deployments'}
              </h2>
              <div className="space-y-6">
                {experiences.map((exp) => {
                  const expRole = isAmharic && exp.roleAm ? exp.roleAm : exp.role;
                  const expCompany = isAmharic && exp.companyAm ? exp.companyAm : exp.company;
                  const expPeriod = isAmharic && exp.periodAm ? exp.periodAm : exp.period;
                  const expLocation = isAmharic && exp.locationAm ? exp.locationAm : exp.location;
                  const expSummary = isAmharic && exp.summaryAm ? exp.summaryAm : exp.summary;
                  const expAchievements = isAmharic && exp.achievementsAm ? exp.achievementsAm : exp.achievements;

                  return (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="text-sm font-bold text-white">
                          {expRole} <span className="text-zinc-400 font-mono font-medium text-xs uppercase tracking-wider">@ {expCompany}</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-500">
                          {expPeriod} | {expLocation}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 font-light">{expSummary}</p>
                      <ul className="space-y-1">
                        {expAchievements.map((ach, i) => (
                          <li key={i} className="text-xs text-zinc-300 flex items-start gap-2 font-light">
                            <span className="text-zinc-500 font-mono font-bold mt-0.5">✧</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-[11px] font-mono text-zinc-400 pt-0.5">
                        <strong className="text-zinc-300">{isAmharic ? 'ቴክኖሎጂ:' : 'Tools:'}</strong> {exp.technologies.join(', ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest font-mono text-zinc-400 border-b border-white/10 pb-1">
                {isAmharic ? 'ትምህርት እና የምስክር ወረቀቶች' : 'Education & Credentials'}
              </h2>
              <div className="space-y-4">
                {educations.map((edu) => (
                  <div key={edu.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <span className="text-sm font-bold text-white">
                        {isAmharic && edu.degreeAm ? edu.degreeAm : edu.degree}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">{isAmharic && edu.periodAm ? edu.periodAm : edu.period}</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-400">{isAmharic && edu.schoolAm ? edu.schoolAm : edu.school}</div>
                    <p className="text-xs text-zinc-300 font-light">{isAmharic && edu.detailsAm ? edu.detailsAm : edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
