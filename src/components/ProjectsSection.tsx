import React, { useState, useMemo, useRef } from 'react';
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
  Maximize2,
  Play,
  Video as VideoIcon,
  Upload,
  Clock,
  Film,
  Monitor
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { VideoPlayerModal } from './VideoPlayerModal';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsSectionProps {
  projects: Project[];
  activeSkillFilter?: string | null;
  onClearSkillFilter?: () => void;
  onUpdateProjectVideo?: (projectId: string, videoUrl: string, fileName: string) => void;
}

const CATEGORIES: { key: ProjectCategory; en: string; am: string; icon: React.ElementType }[] = [
  { key: 'All', en: 'All Works', am: 'ሁሉም ስራዎች', icon: FolderGit2 },
  { key: 'Websites', en: 'Websites', am: 'ድረ-ገጾች', icon: Globe },
  { key: 'Graphic Design', en: 'Graphic Design & Posters', am: 'ግራፊክ ዲዛይን እና ፖስተሮች', icon: ImageIcon },
  { key: 'Branding', en: 'Branding', am: 'ብራንዲንግ', icon: Palette },
  { key: 'Video', en: 'Video & Demos', am: 'ቪዲዮ ማሳያዎች', icon: VideoIcon }
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  activeSkillFilter,
  onClearSkillFilter,
  onUpdateProjectVideo
}) => {
  const { t, isAmharic } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedPosterSub, setSelectedPosterSub] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);
  const [selectedProjectForVideo, setSelectedProjectForVideo] = useState<Project | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [dragOverProjectId, setDragOverProjectId] = useState<string | null>(null);

  const hiddenFileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTargetProjectId, setUploadTargetProjectId] = useState<string | null>(null);

  const posterSubcategories = [
    { key: 'All', en: 'All Posters (11)', am: 'ሁሉም ፖስተሮች (11)' },
    { key: 'Food', en: 'Food & Dining (5)', am: 'ምግብ እና ሬስቶራንት (5)' },
    { key: 'Nightlife', en: 'Nightlife & Events (1)', am: 'ክለብ እና ዝግጅቶች (1)' },
    { key: 'Sports', en: 'Sports & Combat (2)', am: 'ስፖርት እና ቦክስ (2)' },
    { key: 'Products', en: 'Luxury & Retail (3)', am: 'ቅንጦት እና ምርቶች (3)' },
  ];

  // Helper to check subcategory
  const matchesPosterSub = (project: Project, sub: string) => {
    if (sub === 'All') return true;
    const combined = (project.tags.join(' ') + ' ' + project.title + ' ' + project.id).toLowerCase();
    if (sub === 'Food') return combined.includes('food') || combined.includes('dessert') || combined.includes('taco') || combined.includes('chicken') || combined.includes('biryani') || combined.includes('coffee');
    if (sub === 'Nightlife') return combined.includes('party') || combined.includes('club') || combined.includes('nightlife') || combined.includes('dj');
    if (sub === 'Sports') return combined.includes('fight') || combined.includes('boxing') || combined.includes('combat');
    if (sub === 'Products') return combined.includes('watch') || combined.includes('energy') || combined.includes('drink') || combined.includes('sneaker') || combined.includes('sale');
    return true;
  };

  // Filter projects by category, search query, poster subcategory, and external skill filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category check
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Video') {
          if (!project.videoUrl && !project.isScreenRecording) return false;
        } else if (project.category !== selectedCategory) {
          return false;
        }
      }

      // Poster subcategory check
      if (selectedCategory === 'Graphic Design' && selectedPosterSub !== 'All') {
        if (!matchesPosterSub(project, selectedPosterSub)) return false;
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
  }, [projects, selectedCategory, selectedPosterSub, searchQuery, activeSkillFilter]);

  const handleOpenVideo = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    setSelectedProjectForVideo(project);
    setIsVideoModalOpen(true);
  };

  const handleFileDrop = (e: React.DragEvent, projectId: string) => {
    e.preventDefault();
    setDragOverProjectId(null);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('video/')) {
        const videoUrl = URL.createObjectURL(file);
        if (onUpdateProjectVideo) {
          onUpdateProjectVideo(projectId, videoUrl, file.name);
        }
        // Auto open video
        const target = projects.find(p => p.id === projectId);
        if (target) {
          setSelectedProjectForVideo({ ...target, videoUrl, isScreenRecording: true });
          setIsVideoModalOpen(true);
        }
      }
    }
  };

  const handleManualFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && uploadTargetProjectId) {
      const file = files[0];
      const videoUrl = URL.createObjectURL(file);
      if (onUpdateProjectVideo) {
        onUpdateProjectVideo(uploadTargetProjectId, videoUrl, file.name);
      }
      const target = projects.find(p => p.id === uploadTargetProjectId);
      if (target) {
        setSelectedProjectForVideo({ ...target, videoUrl, isScreenRecording: true });
        setIsVideoModalOpen(true);
      }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] uppercase tracking-widest font-bold text-cyan-300 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Step 01 & 02 • {t.workflowStep1Title} → {t.workflowStep2Title}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-zinc-400 font-mono">
                <FolderGit2 className="w-3.5 h-3.5 text-zinc-300" />
                <span>{t.projectsBadge}</span>
              </div>
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
        <div className="space-y-4 mb-10 pb-4 border-b border-white/5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                const Icon = cat.icon;
                const count = cat.key === 'All' 
                  ? projects.length 
                  : cat.key === 'Video'
                    ? projects.filter(p => p.videoUrl || p.isScreenRecording).length
                    : projects.filter(p => p.category === cat.key).length;

                return (
                  <button
                    key={cat.key}
                    id={`cat-filter-${cat.key.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => {
                      setSelectedCategory(cat.key);
                      if (cat.key !== 'Graphic Design') {
                        setSelectedPosterSub('All');
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      isSelected
                        ? 'bg-white text-black shadow-lg scale-100'
                        : 'text-zinc-400 hover:text-white bg-zinc-900/40 hover:bg-zinc-800/80 border border-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{isAmharic ? cat.am : cat.en}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-zinc-400'
                    }`}>
                      {count}
                    </span>
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

          {/* Subcategory Pills for Graphic Design / Posters */}
          {(selectedCategory === 'Graphic Design' || selectedCategory === 'All') && (
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-[11px] font-mono text-zinc-400 mr-1.5 uppercase tracking-wider flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-cyan-400" />
                {isAmharic ? 'የፖስተር አይነቶች:' : 'Poster Themes:'}
              </span>
              {posterSubcategories.map((sub) => {
                const isSubSelected = selectedPosterSub === sub.key;
                return (
                  <button
                    key={sub.key}
                    onClick={() => {
                      setSelectedPosterSub(sub.key);
                      if (selectedCategory !== 'Graphic Design') {
                        setSelectedCategory('Graphic Design');
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium font-mono transition-all ${
                      isSubSelected && selectedCategory === 'Graphic Design'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 border border-white/5'
                    }`}
                  >
                    {isAmharic ? sub.am : sub.en}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => {
              const displayTitle = isAmharic && project.titleAm ? project.titleAm : project.title;
              const displayDesc = isAmharic && project.descriptionAm ? project.descriptionAm : project.description;
              const isGraphicDesign = project.category === 'Graphic Design';
              const isBranding = project.category === 'Branding';
              const isWebsite = project.category === 'Websites';
              const isLandscapeBanner = 
                project.tags.includes('Social Media Banner') || 
                project.tags.includes('Restaurant Banner') || 
                project.id.includes('banner');
              const hasVideo = Boolean(project.videoUrl || project.isScreenRecording);
              const isDragTarget = dragOverProjectId === project.id;

              return (
                <motion.article
                  key={project.id}
                  id={`project-card-${project.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOverProjectId(project.id);
                  }}
                  onDragLeave={() => setDragOverProjectId(null)}
                  onDrop={(e) => handleFileDrop(e, project.id)}
                  className={`group flex flex-col rounded-3xl bg-zinc-900/40 border ${
                    isDragTarget 
                      ? 'border-cyan-400 ring-2 ring-cyan-400/40' 
                      : 'border-white/5 hover:border-white/20'
                  } backdrop-blur-xl transition-all duration-500 overflow-hidden text-left relative shadow-xl cursor-pointer`}
                  onClick={() => setSelectedProjectForModal(project)}
                >
                  {/* Atmospheric Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Thumbnail Image Container */}
                  <div className={`relative ${
                    isLandscapeBanner 
                      ? 'aspect-[16/9]' 
                      : isGraphicDesign 
                        ? 'aspect-[3/4]' 
                        : 'aspect-[16/10]'
                  } w-full overflow-hidden bg-black/90 flex items-center justify-center`}>
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
                        {isGraphicDesign && <ImageIcon className="w-3 h-3 text-zinc-400" />}
                        {isBranding && <Palette className="w-3 h-3 text-zinc-400" />}
                        {isWebsite && <Globe className="w-3 h-3 text-cyan-400" />}
                        <span>{project.category}</span>
                      </span>
                      
                      <div className="flex items-center gap-1.5">
                        {hasVideo && (
                          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30 backdrop-blur-md animate-pulse">
                            <Film className="w-3 h-3 text-red-400" />
                            <span>{project.videoDuration || 'DEMO'}</span>
                          </span>
                        )}
                        {project.featured && (
                          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
                            <Sparkles className="w-3 h-3 text-zinc-200" />
                            {t.featuredBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quick Action overlay buttons on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs z-10 px-4">
                      {hasVideo && (
                        <button
                          type="button"
                          onClick={(e) => handleOpenVideo(e, project)}
                          className="px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-all active:scale-95"
                          title="Watch screen recording demo"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{isAmharic ? 'ቪዲዮ እይ' : 'Watch Demo'}</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProjectForModal(project);
                        }}
                        className="px-4 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold flex items-center gap-1.5 shadow-2xl scale-95 group-hover:scale-100 transition-all active:scale-95"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{isGraphicDesign ? t.viewPoster : t.viewDetails}</span>
                      </button>
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
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
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
                        <div className="flex items-center gap-2">
                          {hasVideo && (
                            <button
                              type="button"
                              onClick={(e) => handleOpenVideo(e, project)}
                              className="font-bold text-[11px] uppercase tracking-wider text-red-400 hover:text-red-300 flex items-center gap-1.5 transition-colors"
                            >
                              <Play className="w-3 h-3 fill-current" />
                              <span>{isAmharic ? 'ቪዲዮ' : 'Watch Demo'}</span>
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProjectForModal(project);
                            }}
                            className="font-bold text-[11px] uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                          >
                            <span>{t.viewDetails}</span>
                            <span className="font-mono text-zinc-500">→</span>
                          </button>
                        </div>

                        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                          {/* Upload video trigger button */}
                          <button
                            type="button"
                            onClick={() => {
                              setUploadTargetProjectId(project.id);
                              hiddenFileInputRef.current?.click();
                            }}
                            className="p-1.5 text-zinc-500 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-colors"
                            title={isAmharic ? 'የስክሪን ቪዲዮ ይጫኑ' : 'Upload custom video recording for this project'}
                          >
                            <Upload className="w-3.5 h-3.5" />
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                              title="Source code"
                            >
                              <Github className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                              title="Live demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
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

      {/* Hidden file input for uploading custom video */}
      <input
        type="file"
        ref={hiddenFileInputRef}
        onChange={handleManualFileUpload}
        accept="video/mp4,video/webm,video/quicktime"
        className="hidden"
      />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />

      {/* Video Demonstration Modal */}
      <VideoPlayerModal
        project={selectedProjectForVideo}
        isOpen={isVideoModalOpen}
        onClose={() => {
          setIsVideoModalOpen(false);
          setSelectedProjectForVideo(null);
        }}
        onViewDetails={(proj) => {
          setIsVideoModalOpen(false);
          setSelectedProjectForModal(proj);
        }}
        onUploadCustomVideo={(projectId, videoUrl, fileName) => {
          if (onUpdateProjectVideo) {
            onUpdateProjectVideo(projectId, videoUrl, fileName);
          }
        }}
      />
    </section>
  );
};
