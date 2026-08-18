import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Layout,
  Cpu,
  Award,
  Smartphone,
  Lightbulb,
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface WhyUsItem {
  id: string;
  icon: React.ElementType;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  number: string;
  gradient: string;
}

export const WHY_US_LIST: WhyUsItem[] = [
  {
    id: 'modern-design',
    icon: Layout,
    title: 'Modern Design',
    titleAm: 'ዘመናዊ ዲዛይን (Modern Design)',
    description:
      'We craft cutting-edge, high-aesthetic interfaces and visuals that reflect global design trends and make your business look world-class.',
    descriptionAm:
      'የአለም አቀፍ የዲዛይን ደረጃዎችን የጠበቁ ውብ፣ ማራኪ እና ድርጅትዎን ከፍ የሚያደርጉ ዘመናዊ ዲዛይኖችን እናዘጋጃለን።',
    number: '01',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'custom-solutions',
    icon: Cpu,
    title: 'Custom Solutions',
    titleAm: 'ለእርስዎ ብቻ የተበጁ መፍትሄዎች (Custom Solutions)',
    description:
      'No cookie-cutter templates. Every website, logo, and marketing asset is custom-built from scratch to match your exact business model.',
    descriptionAm:
      'የተለመዱ አብነቶችን (templates) አንጠቀምም። እያንዳንዱ ድረ-ገጽ እና ፖስተር ለእርስዎ የንግድ አላማ ብቻ የተለየ ሆኖ ይሰራል የታሰበ ነው።',
    number: '02',
    gradient: 'from-purple-500 to-indigo-400'
  },
  {
    id: 'professional-quality',
    icon: Award,
    title: 'Professional Quality',
    titleAm: 'የተረጋገጠ የላቀ ጥራት (Professional Quality)',
    description:
      'Strict quality control across clean semantic code, 300 DPI high-resolution graphics, responsive layouts, and bug-free performance.',
    descriptionAm:
      'ከፍተኛ ጥራት ያላቸው 300 DPI የህትመት ፖስተሮች እና እንከን የለሽ የድረ-ገጽ ኮድ አሰራርን እናረጋግጣለን።',
    number: '03',
    gradient: 'from-amber-500 to-yellow-400'
  },
  {
    id: 'mobile-responsive',
    icon: Smartphone,
    title: 'Mobile Responsive Websites',
    titleAm: 'በሞባይል ፈጣን እና ምቹ (Mobile Responsive)',
    description:
      'Over 80% of traffic comes from smartphones. All our websites are optimized for lightning loading, fluid touch controls, and all screen sizes.',
    descriptionAm:
      'አብዛኛው ደንበኛ ድረ-ገጽን የሚጎበኘው በስልክ ስለሆነ ድረ-ገጾቻችን በሁሉም የስልክ አይነቶች ላይ በፍጥነትና በጥራት ይሰራሉ።',
    number: '04',
    gradient: 'from-emerald-500 to-teal-400'
  },
  {
    id: 'creative-approach',
    icon: Lightbulb,
    title: 'Creative Approach',
    titleAm: 'የፈጠራ አቀራረብ (Creative Approach)',
    description:
      'Bold visual storytelling, distinctive typography, and compelling marketing hooks that capture attention within the first 3 seconds.',
    descriptionAm:
      'ደንበኞችን ወዲያውኑ የሚስቡ ልዩ የቀለማት፣ የፊደላት እና የቪዲዮ ፈጠራዎችን በስራዎቻችን ላይ እንጠቀማለን።',
    number: '05',
    gradient: 'from-rose-500 to-pink-400'
  },
  {
    id: 'client-focused-service',
    icon: HeartHandshake,
    title: 'Client-Focused Service',
    titleAm: 'ለደንበኛ ቅድሚያ መስጠት (Client-Focused Service)',
    description:
      'Direct, friendly communication, fast turnaround times, transparent pricing, and comprehensive post-launch support.',
    descriptionAm:
      'ቀጥተኛና ፈጣን ተግባቦት፣ ግልጽ ዋጋ እና ስራው ከተጠናቀቀም በኋላ የሚቀጥል የቴክኒክ ድጋፍ እናቀርባለን።',
    number: '06',
    gradient: 'from-cyan-500 to-blue-600'
  }
];

export const WhyUsSection: React.FC = () => {
  const { isAmharic } = useLanguage();

  return (
    <section id="why-us" className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] uppercase tracking-widest font-bold text-indigo-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAmharic ? 'ለምን ቬርቴክስ ዲጂታል?' : 'WHY WORK WITH US'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {isAmharic ? 'ከእኛ ጋር ሲሰሩ የሚያገኟቸው 6 ዋና ጥቅሞች' : 'Built for Impact, Driven by Quality'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            {isAmharic
              ? 'እያንዳንዱን ፕሮጀክት በከፍተኛ ጥንቃቄ፣ በፈጣን ጊዜ እና ንግድዎ ላይ ተጨባጭ ውጤት በሚያመጣ መልኩ እንሰራለን።'
              : 'Discover why ambitious brands, restaurants, luxury showrooms, and service businesses choose Vertex Digital as their digital partner.'}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_LIST.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group relative rounded-3xl p-6 sm:p-8 bg-[#09090b]/70 border border-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-5">
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {isAmharic ? item.titleAm : item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {isAmharic ? item.descriptionAm : item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom feature tick */}
                <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Guaranteed by Vertex Digital</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-2 text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              {isAmharic ? 'የእርስዎን ፕሮጀክት አብረን እንጀምር?' : 'Ready to Transform Your Digital Presence?'}
            </h4>
            <p className="text-sm text-zinc-300">
              {isAmharic
                ? 'ዛሬውኑ ያነጋግሩን — በ 24 ሰዓት ውስጥ ሙሉ የፕሮጀክት እቅድ እና ዋጋ እንልክልዎታለን።'
                : 'Get in touch with Vertex Digital today for a free project consultation and fast proposal.'}
            </p>
          </div>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-white text-black hover:bg-zinc-200 font-bold text-sm transition-all flex-shrink-0 flex items-center gap-2 shadow-xl hover:scale-105 font-mono"
          >
            <span>{isAmharic ? 'ፕሮጀክት ይጀምሩ' : 'Start a Project'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
