import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Award,
  Globe2,
  Laptop,
  Layers,
  Zap,
  Target,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { isAmharic } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Precision & Performance',
      titleAm: 'ጥራት እና ፍጥነት',
      desc: 'Clean, lightning-fast code and razor-sharp graphics engineered for maximum business ROI.',
      descAm: 'ለፈጣን ጭነትና ለከፍተኛ የንግድ ውጤት የተዘጋጁ ጥራት ያላቸው ኮዶችና ዲዛይኖች።'
    },
    {
      icon: ShieldCheck,
      title: 'Obsessive Craftsmanship',
      titleAm: 'የተሟላ ጥንቃቄ',
      desc: 'Pixel-perfect typography, balanced negative space, and mathematical layout hierarchy in every asset.',
      descAm: 'በእያንዳንዱ ዲዛይን ውስጥ ፍጹም የቀለማትና የፊደላት ውህደት።'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused Strategy',
      titleAm: 'የእድገት ስትራቴጂ',
      desc: 'We do not just build pretty visuals — we craft conversion engines that attract clients and build authority.',
      descAm: 'ቆንጆ መልክ ብቻ ሳይሆን ደንበኞችን የሚስቡ እና ገቢ የሚያሳድጉ ዲጂታል ሲስተሞች።'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Impact */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] uppercase tracking-widest font-bold text-cyan-400 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAmharic ? 'ስለ ቬርቴክስ ዲጂታል' : 'ABOUT VERTEX DIGITAL'}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {isAmharic ? (
                  <>
                    የንግድዎን ዲጂታል ገጽታ ወደ <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">ቀጣዩ ደረጃ</span> እናደርሳለን
                  </>
                ) : (
                  <>
                    Empowering Businesses With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Unmatched Digital Presence</span>
                  </>
                )}
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
                {isAmharic
                  ? 'ቬርቴክስ ዲጂታል (Vertex Digital) ድርጅቶች በዲጂታል አለም ጎልተው እንዲታዩ የሚያግዝ ዘመናዊ የዲጂታል ኤጀንሲ ነው። ዘመናዊ ድረ-ገጾችን፣ ፕሮፌሽናል የብራንዲንግ መለያዎችን፣ ማራኪ የፖስተር ዲዛይኖችን እና የቪዲዮ ስራዎችን በጥራት እንሰራለን።'
                  : 'Vertex Digital is a modern digital agency dedicated to helping businesses dramatically improve and scale their digital footprint. We engineer high-converting websites, distinctive brand identities, viral commercial poster designs, and cinematic video editing tailored to elevate businesses into market leaders.'}
              </p>
            </div>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2.5 backdrop-blur-md hover:border-white/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {isAmharic ? v.titleAm : v.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {isAmharic ? v.descAm : v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-bold text-sm transition-all flex items-center gap-2 shadow-lg"
              >
                <span>{isAmharic ? 'የሰራናቸውን ስራዎች ይመልከቱ' : 'Explore Portfolio'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#why-us"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 transition-all"
              >
                {isAmharic ? 'ለምን ከእኛ ጋር ይሰራሉ?' : 'Why Work With Us'}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Studio Stats Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-zinc-900/90 to-black border border-white/15 shadow-2xl backdrop-blur-2xl space-y-6">
              
              {/* Studio Emblem Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-black flex items-center justify-center shadow-xl">
                  <img
                    src="/src/assets/images/vertex_official_logo_1786667457174.jpg"
                    alt="Vertex Digital Agency Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white tracking-tight">Vertex Digital</h3>
                  <p className="text-xs text-cyan-400 font-mono">Modern Digital Agency • Addis Ababa</p>
                </div>
              </div>

              {/* Stat Numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-3xl font-black text-white block">100%</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {isAmharic ? 'የደንበኞች እርካታ' : 'Client Satisfaction'}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-3xl font-black text-cyan-400 block">4.9/5</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {isAmharic ? 'አማካይ ደረጃ' : 'Average Rating'}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-3xl font-black text-emerald-400 block">&lt; 48h</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {isAmharic ? 'ፈጣን ማድረስ' : 'Fast Delivery'}
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-3xl font-black text-purple-400 block">24/7</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {isAmharic ? 'ቀጣይ ድጋፍ' : 'Direct Support'}
                  </span>
                </div>
              </div>

              {/* Guarantee Pill */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <p className="text-xs text-zinc-200 leading-snug">
                  {isAmharic
                    ? 'እያንዳንዱ ፕሮጀክት በከፍተኛ ጥራት እና ለደንበኛ ተደራሽ በሆነ መልኩ በውል ይከናወናል።'
                    : 'Every website, poster, and branding package includes full source code, vector masters, and deployment support.'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
