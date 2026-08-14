import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote, Star, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const { t, isAmharic } = useLanguage();

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-zinc-400 font-mono">
            <MessageSquareQuote className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.testimonialsBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {t.testimonialsTitle}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-light leading-relaxed">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((test, idx) => {
            const name = isAmharic && test.nameAm ? test.nameAm : test.name;
            const role = isAmharic && test.roleAm ? test.roleAm : test.role;
            const company = isAmharic && test.companyAm ? test.companyAm : test.company;
            const quote = isAmharic && test.quoteAm ? test.quoteAm : test.quote;
            const relationship = isAmharic && test.relationshipAm ? test.relationshipAm : test.relationship;

            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 backdrop-blur-xl transition-all duration-300 space-y-6 relative group shadow-xl overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* 5-Star Rating & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(test.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
                      <span>{isAmharic ? 'የተረጋገጠ ምስክርነት' : 'Verified Client'}</span>
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light italic">
                    "{quote}"
                  </p>
                </div>

                {/* Author Info Footer */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5 relative z-10">
                  <img
                    src={test.avatar}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-white truncate">
                      {name}
                    </h3>
                    <div className="text-[11px] text-zinc-400 truncate">
                      {role} • <span className="text-zinc-200 font-medium">{company}</span>
                    </div>
                    {relationship && (
                      <div className="text-[10px] text-zinc-500 font-mono">
                        {relationship}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
