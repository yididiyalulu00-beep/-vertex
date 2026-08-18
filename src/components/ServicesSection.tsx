import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Sparkles,
  Layers,
  Palette,
  Video,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Code2,
  Smartphone,
  Eye,
  PenTool,
  Film,
  Zap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  tag: string;
  tagAm: string;
  color: string;
  gradient: string;
  deliverables: string[];
  deliverablesAm: string[];
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Website Design & Development',
    titleAm: 'የድረ-ገጽ ዲዛይን እና ልማት',
    description:
      'High-performance, ultra-responsive modern websites and custom web applications tailored to elevate your business credibility and sales.',
    descriptionAm:
      'ለድርጅትዎ ስም እና ሽያጭ እድገት የሚረዱ ፈጣን፣ በስልክ እና በኮምፒውተር የሚሰሩ ዘመናዊ ድረ-ገጾች እና የንግድ ፖርታሎች።',
    tag: 'Web & Mobile',
    tagAm: 'ዌብ እና ሞባይል',
    color: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400',
    gradient: 'from-blue-600 to-cyan-500',
    deliverables: [
      'Responsive UI/UX Design',
      'React & Next.js Development',
      'E-Commerce & Online Menus',
      'SEO & High-Speed Performance'
    ],
    deliverablesAm: [
      'ለስልክና ኮምፒውተር ተስማሚ ዲዛይን',
      'ፈጣን የሪአክትና ዌብ ልማት',
      'የኦንላይን ሽያጭና የሜኑ ሲስተሞች',
      'የፍለጋ ሞተር (SEO) ማሻሻያ'
    ]
  },
  {
    id: 'logo-design',
    icon: PenTool,
    title: 'Logo Design',
    titleAm: 'የሎጎ ዲዛይን',
    description:
      'Iconic, memorable, and timeless vector logos that define your brand identity and set your business apart from competitors.',
    descriptionAm:
      'ድርጅትዎን በገበያ ላይ ለይተው የሚያሳዩ፣ በህሊና ውስጥ የሚቀሩ እና በማንኛውም ሚዲያ ላይ የሚሰሩ ድንቅ የሎጎ ዲዛይኖች።',
    tag: 'Identity & Vectors',
    tagAm: 'መለያ እና ቬክተር',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    deliverables: [
      'Vector Master Files (AI, SVG, PNG)',
      'Multiple Creative Concepts',
      'Brand Color Palette & Typography',
      'Social Media Avatar Suite'
    ],
    deliverablesAm: [
      'ከፍተኛ ጥራት ያላቸው ቬክተር ፋይሎች',
      'የተለያዩ የዲዛይን አማራጮች',
      'የቀለማትና የፊደል ቅንብር መመሪያ',
      'የማህበራዊ ሚዲያ ፕሮፋይል ፓኬጅ'
    ]
  },
  {
    id: 'branding',
    icon: Layers,
    title: 'Branding',
    titleAm: 'የብራንዲንግ እና መለያ ስርዓት',
    description:
      'End-to-end brand guidelines, typography hierarchies, stationery, and comprehensive visual systems that build lasting client trust.',
    descriptionAm:
      'የድርጅትዎን እሴትና ጥራት የሚያንጸባርቁ የተሟሉ የብራንድ መመሪያዎች፣ የቢዝነስ ካርዶች እና የህትመት እቃዎች ዲዛይን።',
    tag: 'Brand Systems',
    tagAm: 'የብራንድ ስርዓት',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
    gradient: 'from-purple-600 to-pink-500',
    deliverables: [
      'Comprehensive Brand Guidelines',
      'Business Cards & Stationery Kit',
      'Social Media Brand Assets',
      'Corporate Presentation Decks'
    ],
    deliverablesAm: [
      'የተሟላ የብራንድ አጠቃቀም መመሪያ',
      'የቢዝነስ ካርድና የህትመት ዲዛይኖች',
      'የማህበራዊ ሚዲያ ብራንድ እቃዎች',
      'የድርጅት ገለጻ ስላይዶች (Pitch Decks)'
    ]
  },
  {
    id: 'poster-design',
    icon: Palette,
    title: 'Poster & Graphic Design',
    titleAm: 'የፖስተር እና ግራፊክ ዲዛይን',
    description:
      'Striking commercial advertising posters, social media banners, event flyers, and 300 DPI high-resolution print graphics.',
    descriptionAm:
      'ደንበኞችን የሚስቡ የንግድ ማስታወቂያ ፖስተሮች፣ የማህበራዊ ሚዲያ ባነሮች፣ የዝግጅት ፍላየሮች እና የህትመት ውጤቶች።',
    tag: 'Commercial & Print',
    tagAm: 'ማስታወቂያ እና ህትመት',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    gradient: 'from-emerald-500 to-teal-500',
    deliverables: [
      'Commercial Product Advertising',
      'Social Media Promotional Banners',
      'Event & Nightlife Flyers',
      'CMYK 300 DPI Print-Ready Masters'
    ],
    deliverablesAm: [
      'የምርቶችና አገልግሎቶች ማስታወቂያ',
      'የማህበራዊ ሚዲያ የሽያጭ ባነሮች',
      'የዝግጅት እና የክለብ ፖስተሮች',
      'ለህትመት የተዘጋጁ 300 DPI ፋይሎች'
    ]
  },
  {
    id: 'video-editing',
    icon: Video,
    title: 'Video Editing',
    titleAm: 'የቪዲዮ ኤዲቲንግ እና ሞሽን',
    description:
      'Dynamic video editing, commercial reels, motion graphics, website screen walkthrough demonstrations, and high-impact social clips.',
    descriptionAm:
      'ማራኪ የቪዲዮ ኤዲቲንግ፣ የማህበራዊ ሚዲያ ሪልስ፣ የድርጅት ቪዲዮዎች፣ የድረ-ገጽ ማሳያ ቪዲዮዎች እና የድምጽ ቅንብር።',
    tag: 'Motion & Reels',
    tagAm: 'ቪዲዮ እና ሞሽን',
    color: 'from-rose-500/20 to-red-500/20 border-rose-500/30 text-rose-400',
    gradient: 'from-rose-600 to-red-500',
    deliverables: [
      'Commercial Ads & TikTok/Reels',
      'Website Walkthrough Video Demos',
      'Motion Graphics & Subtitles',
      'Color Grading & Audio Mastering'
    ],
    deliverablesAm: [
      'የማስታወቂያ ቪዲዮዎች እና ሪልስ',
      'የድረ-ገጽ አሰራር ማሳያ ቪዲዮዎች',
      'ሞሽን ግራፊክስ እና የትርጉም ጽሑፍ',
      'የቀለምና የድምጽ ማስተካከያ'
    ]
  },
  {
    id: 'digital-solutions',
    icon: Cpu,
    title: 'Digital Solutions',
    titleAm: 'ዲጂታል መፍትሄዎች እና ሲስተሞች',
    description:
      'Custom business automation, interactive QR digital menus, live maps locators, e-commerce integrations, and full digital transformation.',
    descriptionAm:
      'የንግድ አሰራርን የሚያቀላጥፉ አውቶሜሽኖች፣ የ QR ዲጂታል ሜኑ፣ የቀጥታ ካርታዎች፣ እና የተሟሉ የዲጂታል ቴክኖሎጂ መፍትሄዎች።',
    tag: 'Automation & Systems',
    tagAm: 'አውቶሜሽን እና ሲስተም',
    color: 'from-blue-500/20 to-indigo-500/20 border-indigo-500/30 text-indigo-400',
    gradient: 'from-blue-600 to-indigo-600',
    deliverables: [
      'Interactive QR Code Menu Systems',
      'Live Google Maps Store Locators',
      'Telegram & WhatsApp Lead Bots',
      'Payment & Ordering Automations'
    ],
    deliverablesAm: [
      'የ QR ኮድ ዲጂታል ሜኑ ሲስተሞች',
      'የቀጥታ ጉግል ካርታ መፈለጊያዎች',
      'የቴሌግራም እና ዋትሳፕ አውቶሜሽን',
      'የኦንላይን ክፍያና ትዕዛዝ ሲስተም'
    ]
  }
];

export const ServicesSection: React.FC = () => {
  const { isAmharic } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
      {/* Glow background accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-widest font-bold text-blue-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAmharic ? 'የምንሰጣቸው አገልግሎቶች' : 'OUR EXPERTISE & SERVICES'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {isAmharic ? 'ለንግድዎ እድገት የተሟሉ ዲጂታል መፍትሄዎች' : 'Services Crafted to Elevate Your Brand'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            {isAmharic
              ? 'ቬርቴክስ ዲጂታል ከድረ-ገጽ ልማት እስከ ማራኪ የፖስተር ዲዛይን እና ቪዲዮ ኤዲቲንግ ድረስ ሁሉንም ዲጂታል ፍላጎቶችዎን በጥራት ያሟላል።'
              : 'From bespoke responsive websites to viral commercial posters and motion video editing, Vertex Digital delivers end-to-end digital mastery.'}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`group relative rounded-3xl p-6 sm:p-8 bg-[#09090b]/80 border transition-all duration-300 flex flex-col justify-between backdrop-blur-xl ${
                  isHovered
                    ? 'border-white/30 bg-[#0d0d12] shadow-2xl shadow-blue-500/10 -translate-y-1.5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Subtle top corner gradient glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 rounded-tr-3xl blur-2xl transition-opacity duration-500 pointer-events-none`}
                />

                <div className="space-y-6 relative z-10">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white transition-colors">
                      {isAmharic ? service.tagAm : service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {isAmharic ? service.titleAm : service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {isAmharic ? service.descriptionAm : service.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-white/5 space-y-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      {isAmharic ? 'ዋና ዋና ውጤቶች:' : 'Key Deliverables:'}
                    </span>
                    <ul className="space-y-1.5">
                      {(isAmharic ? service.deliverablesAm : service.deliverables).map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-white group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-mono"
                  >
                    <span>{isAmharic ? 'ይህንን አገልግሎት ይጠይቁ' : 'Inquire This Service'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[10px] font-mono text-zinc-400">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
