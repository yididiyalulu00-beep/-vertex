import React from 'react';
import { motion } from 'motion/react';
import { 
  Eye, 
  Palette, 
  Send, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  MousePointerClick
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WorkflowStepsProps {
  onStepClick?: (stepIndex: number) => void;
}

export const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ onStepClick }) => {
  const { t, isAmharic } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t.workflowStep1Title,
      subtitle: isAmharic ? 'የቀጥታ ማሳያዎች' : 'Live Showcases',
      description: t.workflowStep1Desc,
      icon: Eye,
      accentColor: 'from-blue-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-400',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      targetHref: '#projects',
      actionText: isAmharic ? 'ዲሞዎችን ክፈት' : 'View Demos'
    },
    {
      number: '02',
      title: t.workflowStep2Title,
      subtitle: isAmharic ? 'ቅጥ እና ገጽታ' : 'Aesthetic & Style',
      description: t.workflowStep2Desc,
      icon: Palette,
      accentColor: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      targetHref: '#projects',
      actionText: isAmharic ? 'ዲዛይኖችን ምረጥ' : 'Choose Design'
    },
    {
      number: '03',
      title: t.workflowStep3Title,
      subtitle: isAmharic ? 'ፈጣን ጅምር' : 'Instant Kickoff',
      description: t.workflowStep3Desc,
      icon: Send,
      accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      targetHref: '#contact',
      actionText: isAmharic ? 'ድረ-ገጽ ይጠይቁ' : 'Request Website'
    }
  ];

  const handleStepClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, idx: number) => {
    e.preventDefault();
    if (onStepClick) {
      onStepClick(idx);
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="workflow-process" className="py-12 sm:py-16 relative border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-zinc-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.workflowBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            <span className="text-zinc-100">View Demos</span>
            <span className="text-zinc-600 font-mono">→</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Choose a Design</span>
            <span className="text-zinc-600 font-mono">→</span>
            <span className="text-emerald-400">Request Your Website</span>
          </h2>

          {isAmharic && (
            <p className="text-sm font-medium text-zinc-400 pt-1 font-sans">
              {t.workflowTitle}
            </p>
          )}
        </div>

        {/* 3 Interactive Cards in Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col"
              >
                <a
                  href={step.targetHref}
                  id={`workflow-step-${step.number}`}
                  onClick={(e) => handleStepClick(e, step.targetHref, idx)}
                  className="group flex-1 p-6 sm:p-7 rounded-3xl bg-zinc-900/40 hover:bg-zinc-800/60 border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle Accent Glow */}
                  <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${step.accentColor} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />

                  {/* Card Top: Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        {step.number}
                      </span>
                      <div className={`p-3 rounded-2xl bg-white/5 border ${step.accentColor} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <div className="space-y-1.5 mb-3 text-left">
                      <div className={`inline-block text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded-md border ${step.badgeColor} mb-1`}>
                        Step {step.number}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                    <span className="flex items-center gap-1.5 font-mono text-[11px]">
                      <MousePointerClick className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
                      <span>{step.actionText}</span>
                    </span>
                    <span className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Connecting Arrow for Desktop (between 1-2 and 2-3) */}
                {idx < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-zinc-900 border border-white/20 items-center justify-center text-zinc-400 shadow-lg pointer-events-none">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
