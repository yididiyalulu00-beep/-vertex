import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Cpu, 
  Flame, 
  Image as ImageIcon,
  Palette,
  Globe,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, isAmharic } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  const isPoster = project.category === 'Posters & Graphics';
  const isBranding = project.category === 'Branding';

  const displayTitle = isAmharic && project.titleAm ? project.titleAm : project.title;
  const displayOverview = isAmharic && project.detailedOverviewAm 
    ? project.detailedOverviewAm 
    : (isAmharic && project.descriptionAm ? project.descriptionAm : project.detailedOverview || project.description);
  
  const displayFeatures = isAmharic && project.keyFeaturesAm && project.keyFeaturesAm.length > 0 
    ? project.keyFeaturesAm 
    : project.keyFeatures;

  const displayChallenges = isAmharic && project.challengesSolvedAm && project.challengesSolvedAm.length > 0 
    ? project.challengesSolvedAm 
    : project.challengesSolved;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0e]/95 border border-white/10 rounded-3xl shadow-2xl overflow-y-auto flex flex-col z-10 my-auto backdrop-blur-2xl"
        >
          {/* Top Bar Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c0c0e]/90 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest font-mono bg-white/5 text-white border border-white/10 flex items-center gap-1.5">
                {isPoster && <ImageIcon className="w-3 h-3 text-zinc-400" />}
                {isBranding && <Palette className="w-3 h-3 text-zinc-400" />}
                {!isPoster && !isBranding && <Globe className="w-3 h-3 text-zinc-400" />}
                <span>{project.category}</span>
              </span>
              <h2 className="text-base sm:text-lg font-black text-white tracking-tight truncate max-w-xs sm:max-w-md">
                {displayTitle}
              </h2>
            </div>
            
            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full border border-transparent hover:border-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 text-left">
            
            {/* Image Showcase Container */}
            <div className="space-y-3">
              <div className={`relative w-full ${isPoster ? 'max-w-md mx-auto aspect-[3/4]' : 'aspect-video'} rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center`}>
                <img
                  src={images[activeImageIndex] || project.image}
                  alt={project.title}
                  className="w-full h-full object-contain sm:object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 justify-center">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative w-20 aspect-video rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImageIndex === i 
                          ? 'border-white ring-2 ring-white/20' 
                          : 'border-white/5 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Metrics Ribbon */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-5 rounded-2xl bg-white/5 border border-white/5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono font-bold">{m.label}</span>
                    <div className="text-xl font-bold font-mono text-white">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Description */}
            <div className="space-y-2">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                {isAmharic ? 'የስራው ዝርዝር መግለጫ እና ዓላማ' : 'Project Architecture & Goals'}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {displayOverview}
              </p>
            </div>

            {/* Key Features & Challenges Solved Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Key Features */}
              {displayFeatures && displayFeatures.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                    <span>{isAmharic ? 'ዋና ዋና ባህሪያት' : 'Key Capabilities'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {displayFeatures.map((feat, i) => (
                      <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 font-light">
                        <span className="text-zinc-500 font-mono font-bold mt-0.5">✧</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Challenges */}
              {displayChallenges && displayChallenges.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-zinc-300" />
                    <span>{isAmharic ? 'የተፈቱ ቴክኒካዊ እና የዲዛይን ፈተናዎች' : 'Design & Technical Solutions'}</span>
                  </h4>
                  <ul className="space-y-2">
                    {displayChallenges.map((chal, i) => (
                      <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 font-light">
                        <span className="text-zinc-500 font-mono font-bold mt-0.5">✧</span>
                        <span>{chal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2.5 pt-2 border-t border-white/5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono">
                {isAmharic ? 'ጥቅም ላይ የዋሉ ሶፍትዌሮች እና ቴክኖሎጂዎች' : 'Tools & Technologies Used'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-zinc-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#0c0c0e]/90 backdrop-blur-md border-t border-white/5">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all shadow-md active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isAmharic ? 'ስራውን በቀጥታ ይመልከቱ' : 'View Live Production'}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-all active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{isAmharic ? 'የኮድ ማከማቻ' : 'Source / Assets'}</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white text-xs font-medium transition-colors"
            >
              {isAmharic ? 'ዝጋ' : 'Dismiss'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
