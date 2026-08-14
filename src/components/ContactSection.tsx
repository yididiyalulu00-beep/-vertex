import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  Globe,
  Palette,
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';
import { Profile } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  profile: Profile;
}

const TOPICS = [
  { en: "Websites & Web Applications", am: "የድረ-ገጽ ዝግጅት እና ልማት", icon: Globe },
  { en: "Posters & Commercial Graphics", am: "የፖስተር እና ንግድ ማስታወቂያ ዲዛይን", icon: ImageIcon },
  { en: "Brand Identity & Visual System", am: "የብራንድ መለያ እና ምስላዊ ስርዓት", icon: Palette },
  { en: "Full Digital Growth Package", am: "የተሟላ የዲጂታል እድገት ጥቅል", icon: Sparkles }
];

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const { t, isAmharic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topicIndex: 0,
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    }, 600);
  };

  const selectedTopic = TOPICS[formData.topicIndex] || TOPICS[0];
  const topicTitle = isAmharic ? selectedTopic.am : selectedTopic.en;

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Direct Info & Studio Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-zinc-400 font-mono">
                <Mail className="w-3.5 h-3.5 text-zinc-300" />
                <span>{t.contactBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {t.contactTitle}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {t.contactSubtitle}
              </p>
            </div>

            {/* Quick Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email Copy Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold font-mono text-zinc-500">{t.contactEmail}</div>
                    <div className="text-sm font-bold text-white mt-0.5">{profile.email}</div>
                  </div>
                </div>

                <button
                  id="copy-direct-email-btn"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-xs font-medium text-zinc-200 border border-white/10 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? (isAmharic ? 'ተቀድቷል' : 'Copied') : (isAmharic ? 'ኮፒ' : 'Copy')}</span>
                </button>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center gap-3 shadow-lg">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold font-mono text-zinc-500">{t.contactResponse}</div>
                  <div className="text-sm font-semibold text-zinc-200 mt-0.5">
                    {isAmharic ? 'ከ24 ሰዓት ባነሰ ጊዜ ውስጥ (ሰኞ — አርብ)' : 'Under 24 hours (Mon — Fri)'}
                  </div>
                </div>
              </div>

              {/* Location & Remote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex items-center gap-3 shadow-lg">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold font-mono text-zinc-500">{t.contactLocation}</div>
                  <div className="text-sm font-semibold text-zinc-200 mt-0.5">
                    {isAmharic && profile.locationAm ? profile.locationAm : profile.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Mailto link alternative */}
            <div className="pt-2">
              <a
                href={`mailto:${profile.email}?subject=Project%20Inquiry%20for%20Vertex%20Digital`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                <span>{isAmharic ? 'በቀጥታ በኢሜይል መተግበሪያዎ ለመጻፍ ይጫኑ' : 'Prefer your default email app? Click here to compose'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl shadow-2xl">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white">{t.contactSentSuccess}</h3>
                      <p className="text-sm text-zinc-300 max-w-md mx-auto font-light">
                        {isAmharic
                          ? `እናመሰግናለን ${formData.name}። መልእክትዎ ደርሶናል፣ ስለ "${topicTitle}" ወደ ${formData.email} በአጭር ጊዜ መልስ እንሰጣለን።`
                          : `Thank you for reaching out, ${formData.name}. We received your inquiry regarding "${topicTitle}" and will reply to ${formData.email} shortly.`}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          topicIndex: 0,
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-lg"
                    >
                      {isAmharic ? 'ሌላ መልእክት ላክ' : 'Send Another Message'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="text-[10px] uppercase tracking-widest font-bold font-mono text-zinc-500 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-zinc-400" />
                      <span>{isAmharic ? 'የስራ ወይም የፕሮጀክት መልእክት ይላኩ' : 'Send a Project Inquiry'}</span>
                    </div>

                    {/* Topic Selection Pills */}
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-300">
                        {t.contactSelectService}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {TOPICS.map((topic, idx) => {
                          const isSelected = formData.topicIndex === idx;
                          const Icon = topic.icon;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setFormData({ ...formData, topicIndex: idx })}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                                isSelected
                                  ? 'bg-white text-black font-semibold shadow-md'
                                  : 'bg-black/50 text-zinc-400 hover:text-white border border-white/5 hover:border-white/15'
                              }`}
                            >
                              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-zinc-400'}`} />
                              <span className="truncate">{isAmharic ? topic.am : topic.en}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-zinc-300">
                          {t.contactName} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isAmharic ? 'ስምዎ...' : 'e.g. Alex Morgan'}
                          className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-white/40 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-zinc-300">
                          {t.contactEmailField} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={isAmharic ? 'የኢሜይል አድራሻ...' : 'alex@company.com'}
                          className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-white/40 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">
                        {t.contactMessage} *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={isAmharic ? 'ስለሚፈልጉት ድረ-ገጽ፣ ፖስተር ወይም የቪዲዮ ስራ ዝርዝር ይንገሩን...' : 'Describe your website requirements, video editing goals, poster deliverables, or target timeline...'}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-white/40 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.contactSend}</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
