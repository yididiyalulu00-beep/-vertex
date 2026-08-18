import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  Sparkles,
  ExternalLink,
  Upload,
  CheckCircle2,
  Layers,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface VideoPlayerModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onViewDetails?: (project: Project) => void;
  onUploadCustomVideo?: (projectId: string, videoUrl: string, fileName: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  project,
  isOpen,
  onClose,
  onViewDetails,
  onUploadCustomVideo
}) => {
  const { isAmharic } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'features' | 'architecture'>('video');
  const [uploadedVideoBlob, setUploadedVideoBlob] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync uploaded video from project if present
  useEffect(() => {
    if (project) {
      setProgress(0);
      setIsPlaying(true);
      if (project.videoUrl && project.videoUrl.startsWith('blob:')) {
        setUploadedVideoBlob(project.videoUrl);
      } else {
        setUploadedVideoBlob(null);
        setUploadedFileName(null);
      }
    }
  }, [project]);

  // Handle progress timer simulation if no native HTML5 video file
  useEffect(() => {
    if (!isOpen || !isPlaying || uploadedVideoBlob) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // loop
        }
        return prev + 1 * playbackSpeed;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying, playbackSpeed, uploadedVideoBlob]);

  // Handle native HTML5 video time updates
  const handleVideoTimeUpdate = () => {
    if (videoElementRef.current) {
      const current = videoElementRef.current.currentTime;
      const duration = videoElementRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);

    if (videoElementRef.current && videoElementRef.current.duration) {
      videoElementRef.current.currentTime = (newProgress / 100) * videoElementRef.current.duration;
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setUploadedVideoBlob(blobUrl);
      setUploadedFileName(file.name);
      if (project && onUploadCustomVideo) {
        onUploadCustomVideo(project.id, blobUrl, file.name);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!isOpen || !project) return null;

  const currentSeconds = Math.floor((progress / 100) * 90);
  const currentMinutes = Math.floor(currentSeconds / 60);
  const formattedSeconds = String(currentSeconds % 60).padStart(2, '0');
  const formattedTime = `0${currentMinutes}:${formattedSeconds}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#0a0a0c] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="h-4 w-[1px] bg-white/10 mx-1" />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Screen Recording Demo
                  </span>
                  {uploadedFileName && (
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 truncate max-w-[150px]">
                      {uploadedFileName}
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                  {isAmharic && project.titleAm ? project.titleAm : project.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Upload Screen Recording Button */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
                title="Upload or replace with a local screen recording video file (.mp4, .webm, .mov)"
              >
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                <span>Upload Video</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              {/* View Project Details Button */}
              {onViewDetails && (
                <button
                  onClick={() => onViewDetails(project)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">View Project</span>
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Video Viewport */}
          <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] md:min-h-[480px]">
            {/* Device Mode Wrapper Frame */}
            <div
              className={`w-full transition-all duration-300 flex items-center justify-center p-2 sm:p-4 ${
                deviceMode === 'mobile'
                  ? 'max-w-[360px]'
                  : deviceMode === 'tablet'
                  ? 'max-w-[680px]'
                  : 'max-w-full h-full'
              }`}
            >
              <div
                className={`relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl flex flex-col justify-between ${
                  deviceMode === 'mobile' ? 'aspect-[9/16]' : deviceMode === 'tablet' ? 'aspect-[4/3]' : 'aspect-video'
                }`}
              >
                {/* Real Video or Simulated Screen Walkthrough */}
                {uploadedVideoBlob ? (
                  <video
                    ref={videoElementRef}
                    src={uploadedVideoBlob}
                    autoPlay
                    loop
                    muted={isMuted}
                    onTimeUpdate={handleVideoTimeUpdate}
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <div className="relative w-full h-full overflow-hidden group">
                    {/* Simulated Screen Recording Walkthrough with parallax scrolling and dynamic UI highlights */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                        isPlaying ? 'scale-110 translate-y-[-4%]' : 'scale-100'
                      }`}
                    />

                    {/* Scanline & Studio Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Live Screen Watermark & Status */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[10px] font-mono text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>REC • 1080p 60FPS</span>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-md text-[10px] font-mono text-cyan-300">
                        Vertex Digital Studio
                      </div>
                    </div>

                    {/* Center Pause Indicator Overlay */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-20">
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
                        >
                          <Play className="w-8 h-8 fill-black translate-x-0.5" />
                        </button>
                      </div>
                    )}

                    {/* Interactive Highlights floating card inside video */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 z-20 hidden sm:flex items-center justify-between"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-xs font-bold text-white">
                            {isAmharic && project.subtitleAm ? project.subtitleAm : project.subtitle}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 line-clamp-1 max-w-xl">
                          {isAmharic && project.descriptionAm ? project.descriptionAm : project.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-300 whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Player Controller Bar */}
          <div className="px-4 sm:px-6 py-3.5 bg-zinc-950 border-t border-white/10 flex flex-col gap-3">
            {/* Scrubber Timeline Bar */}
            <div
              onClick={handleSeek}
              className="relative w-full h-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer overflow-hidden transition-all group/bar"
            >
              <div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-0 bottom-0 w-3 bg-white rounded-full shadow-md transform -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-300 font-mono">
              {/* Left: Play/Pause, Rewind, Timer, Volume */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    if (uploadedVideoBlob && videoElementRef.current) {
                      if (isPlaying) videoElementRef.current.pause();
                      else videoElementRef.current.play();
                    }
                    setIsPlaying(!isPlaying);
                  }}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={() => {
                    setProgress(0);
                    if (videoElementRef.current) videoElementRef.current.currentTime = 0;
                  }}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
                  title="Restart Demo"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <div className="text-zinc-400 font-mono text-[11px] px-1">
                  <span className="text-white font-bold">{formattedTime}</span> / 01:30
                </div>

                <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

                {/* Volume Toggle */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors hidden sm:block"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Center: Device Viewport Switcher */}
              <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    deviceMode === 'desktop' ? 'bg-white/20 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                  title="Desktop View (1920x1080)"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('tablet')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    deviceMode === 'tablet' ? 'bg-white/20 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                  title="Tablet View (768x1024)"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    deviceMode === 'mobile' ? 'bg-white/20 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                  title="Mobile Responsive (375x812)"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right: Playback Speed & Fullscreen */}
              <div className="flex items-center gap-2">
                {/* Speed selector */}
                <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-xl border border-white/10 text-[10px]">
                  {[1, 1.5, 2].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => {
                        setPlaybackSpeed(spd);
                        if (videoElementRef.current) videoElementRef.current.playbackRate = spd;
                      }}
                      className={`px-1.5 py-0.5 rounded ${
                        playbackSpeed === spd ? 'bg-white/20 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
                  title="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
