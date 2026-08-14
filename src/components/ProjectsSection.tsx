import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  SlidersHorizontal,
  X,
  Palette,
  Image as ImageIcon,
  Globe,
  Maximize2
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsSectionProps {
  projects: Project[];
  activeSkillFilter?: string | null;
  onClearSkillFilter?: () => void;
}

const CATEGORIES: { key: ProjectCategory; en: string; am: string; icon: any }[] = [
  { key: 'All', en: 'All Works', am: 'ሁሉም ስራዎች', icon: FolderGit2 },
  { key: 'Websites', en: 'Websites & Apps', am: 'ድረ-ገጾች', icon: Globe },
  { key: 'Posters & Graphics', en: 'Posters & Graphics', am: 'ፖስተሮች እና ግራፊክስ', icon: ImageIcon },
  { key: 'Branding', en: 'Branding', am: 'ብራንዲንግ', icon: Palette }
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  activeSkillFilter,
  onClearSkillFilter
}) => {
  const { t, isAmharic } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  // Filter projects by category, search query, and external skill filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category check
      if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }
      // External skill filter check
      if (activeSkillFilter) {
        const matchesSkill = 
          project.techStack.some(t => t.toLowerCase().includes(activeSkillFilter.toLowerCase())) ||
          project.tags.some(t => t.toLowerCase().includes(activeSkillFilter.toLowerCase()));
        if (!matchesSkill) return false;
      }
      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery = 
          project.title.toLowerCase().includes(q) ||
          (project.titleAm && project.titleAm.toLowerCase().includes(q)) ||
          project.subtitle.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          project.techStack.some(t => t.toLowerCase().includes(q)) ||
          project.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }
      return true;
    });
  }, [projects, selectedCategory, searchQuery, activeSkillFilter]);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-zinc-400 font-mono">
              <FolderGit2 className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.projectsBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {t.projectsTitle}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-light leading-relaxed">
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="projects-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAmharic ? 'ስራዎችን፣ ፖስተሮችን ወይም ቴክኖሎጂ ይፈልጉ...' : 'Search posters, branding, websites...'}
              className="w-full pl-10 pr-9 py-2.5 bg-zinc-900/60 border border-white/10 focus:border-white/40 rounded-full text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs & Active Skill Filter Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-4 border-b border-white/5">
          
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  id={`cat-filter-${cat.key.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isSelected
                      ? 'bg-white text-black shadow-lg scale-100'
                      : 'text-zinc-400 hover:text-white bg-zinc-900/40 hover:bg-zinc-800/80 border border-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{isAmharic ? cat.am : cat.en}</span>
                </button>
              );
            })}
          </div>

          {/* Active Skill Filter Indicator */}
          {activeSkillFilter && (
            <div className="flex items-center gap-2 px-3.5 py-1 bg-white/10 border border-white/20 text-zinc-200 rounded-full text-xs font-mono">
              <span>Filtering by skill: <strong>{activeSkillFilter}</strong></span>
              <button
                onClick={onClearSkillFilter}
                className="p-0.5 hover:bg-white/20 rounded-full transition-colors"
                title="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => {
              const displayTitle = isAmharic && project.titleAm ? project.titleAm : project.title;
              const displayDesc = isAmharic && project.descriptionAm ? project.descriptionAm : project.description;
              const isPoster = project.category === 'Posters & Graphics';
              const isBranding = project.category === 'Branding';

              return (
                <motion.article
                  key={project.id}
                  id={`project-card-${project.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group flex flex-col rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all duration-500 overflow-hidden text-left relative shadow-xl cursor-pointer"
                  onClick={() => setSelectedProjectForModal(project)}
                >
                  {/* Atmospheric Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Thumbnail Image Container */}
                  <div className={`relative ${isPoster ? 'aspect-[3/4]' : 'aspect-[16/10]'} w-full overflow-hidden bg-black/80 flex items-center justify-center`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-[#020203]/20 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold font-mono bg-[#020203]/85 backdrop-blur-md text-zinc-300 border border-white/10 flex items-center gap-1.5">
                        {isPoster && <ImageIcon className="w-3 h-3 text-zinc-400" />}
                        {isBranding && <Palette className="w-3 h-3 text-zinc-400" />}
                        {!isPoster && !isBranding && <Globe className="w-3 h-3 text-zinc-400" />}
                        <span>{project.category}</span>
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
                          <Sparkles className="w-3 h-3 text-zinc-200" />
                          {t.featuredBadge}
                        </span>
                      )}
                    </div>

                    {/* Quick Preview Icon hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs z-10">
                      <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold flex items-center gap-1.5 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isPoster ? t.viewPoster : t.viewDetails}</span>
                      </span>
                    </div>

                    {/* Metric Chip on bottom of thumbnail */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="absolute bottom-3.5 left-3.5 flex gap-2 z-10">
                        <div className="px-3 py-1 rounded-full bg-[#020203]/90 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-200">
                          <span className="text-zinc-500 mr-1.5">{project.metrics[0].label}:</span>
                          <span className="text-white font-bold">{project.metrics[0].value}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between space-y-4 relative z-10">
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-zinc-100 transition-colors flex items-center justify-between">
                        <span>{displayTitle}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-white flex-shrink-0 ml-2" />
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed font-light">
                        {displayDesc}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-3 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-black/60 text-zinc-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-black/60 text-zinc-500 border border-white/5">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Card Action Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
                        <button
                          type="button"
                          className="font-bold text-[11px] uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                          <span>{t.viewDetails}</span>
                          <span className="font-mono text-zinc-500">→</span>
                        </button>

                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                              title="Source code"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                              title="Live demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="p-12 text-center rounded-3xl bg-zinc-900/30 border border-white/5 space-y-3">
            <SlidersHorizontal className="w-8 h-8 text-zinc-600 mx-auto" />
            <h3 className="text-base font-semibold text-zinc-200">
              {isAmharic ? 'ምንም የተገኘ ስራ የለም' : 'No matching creative works found'}
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              {isAmharic ? 'እባክዎ የተለየ ቃል ይፈልጉ ወይም ፊልተሩን ያጥፉ።' : 'Try modifying your search query or reset category filter.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                if (onClearSkillFilter) onClearSkillFilter();
              }}
              className="mt-2 px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors"
            >
              {isAmharic ? 'ፊልተሮችን መልስ' : 'Reset All Filters'}
            </button>
          </div>
        )}

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />
    </section>
  );
};
