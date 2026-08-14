import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Save, 
  RotateCcw, 
  User, 
  Briefcase, 
  Globe, 
  Check, 
  Sliders,
  Languages
} from 'lucide-react';
import { PortfolioData, Profile } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CustomizeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSaveData: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  isOpen,
  onClose,
  data,
  onSaveData,
  onReset
}) => {
  const { language, t, isAmharic } = useLanguage();
  const [profile, setProfile] = useState<Profile>(data.profile);
  const [roleTagsString, setRoleTagsString] = useState(data.profile.roleTags.join(', '));
  const [roleTagsAmString, setRoleTagsAmString] = useState((data.profile.roleTagsAm || []).join(', '));
  const [activeTab, setActiveTab] = useState<'profile' | 'amharic' | 'metrics' | 'socials'>('profile');
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedRoleTags = roleTagsString
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const updatedRoleTagsAm = roleTagsAmString
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const updatedProfile: Profile = {
      ...profile,
      roleTags: updatedRoleTags.length > 0 ? updatedRoleTags : [profile.title],
      roleTagsAm: updatedRoleTagsAm.length > 0 ? updatedRoleTagsAm : (profile.roleTagsAm || [])
    };

    onSaveData({
      ...data,
      profile: updatedProfile
    });

    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Sidebar Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-xl h-full bg-[#0c0c0e]/95 border-l border-white/10 shadow-2xl flex flex-col z-10 text-left overflow-hidden backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0c0c0e]/90 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-zinc-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                {isAmharic ? 'የስቱዲዮ መረጃዎችን ማስተካከያ' : 'Studio Details Customizer'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-white/5 bg-black/40 px-6 pt-2 gap-2 text-xs font-semibold overflow-x-auto">
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-2.5 px-2.5 border-b-2 transition-colors flex items-center gap-1.5 shrink-0 ${
                activeTab === 'profile'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>English Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('amharic')}
              className={`pb-2.5 px-2.5 border-b-2 transition-colors flex items-center gap-1.5 shrink-0 ${
                activeTab === 'amharic'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>የአማርኛ መረጃዎች (Amharic)</span>
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`pb-2.5 px-2.5 border-b-2 transition-colors flex items-center gap-1.5 shrink-0 ${
                activeTab === 'metrics'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Metrics & Contact</span>
            </button>
            <button
              onClick={() => setActiveTab('socials')}
              className={`pb-2.5 px-2.5 border-b-2 transition-colors flex items-center gap-1.5 shrink-0 ${
                activeTab === 'socials'
                  ? 'border-white text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Socials</span>
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5">
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Studio / Brand Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Professional Headline / Services</label>
                  <input
                    type="text"
                    value={profile.title}
                    onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">
                    Rotating Role Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={roleTagsString}
                    onChange={(e) => setRoleTagsString(e.target.value)}
                    placeholder="Websites & Apps, Video Editing & Motion, Posters & Graphic Design"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Short Bio</label>
                  <textarea
                    rows={2}
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Location</label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Availability Status Text</label>
                  <input
                    type="text"
                    value={profile.availabilityText}
                    onChange={(e) => setProfile({ ...profile, availabilityText: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>
            )}

            {activeTab === 'amharic' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300">
                  እነዚህ መረጃዎች ቋንቋውን ወደ <strong>አማርኛ</strong> ሲቀይሩ በፖርትፎሊዮው ላይ ይታያሉ።
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">የስቱዲዮ / ብራንድ ስም (በአማርኛ)</label>
                  <input
                    type="text"
                    value={profile.nameAm || ''}
                    onChange={(e) => setProfile({ ...profile, nameAm: e.target.value })}
                    placeholder="ቨርቴክስ ዲጂታል"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">ዋና ሙያ / አርእስት (በአማርኛ)</label>
                  <input
                    type="text"
                    value={profile.titleAm || ''}
                    onChange={(e) => setProfile({ ...profile, titleAm: e.target.value })}
                    placeholder="ድረ-ገጾች • ቪዲዮ ኤዲቲንግ • ፖስተሮች እና ግራፊክ ዲዛይን"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">
                    የሚሽከረከሩ የስራ ዘርፎች (በኮማ የተከፋፈሉ)
                  </label>
                  <input
                    type="text"
                    value={roleTagsAmString}
                    onChange={(e) => setRoleTagsAmString(e.target.value)}
                    placeholder="የድረ-ገጽ ዝግጅት እና ልማት, ሲኒማቲክ ቪዲዮ ኤዲቲንግ, ማራኪ የፖስተር እና ግራፊክስ ዲዛይን"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">አጭር የስቱዲዮ መግለጫ (በአማርኛ)</label>
                  <textarea
                    rows={3}
                    value={profile.bioAm || ''}
                    onChange={(e) => setProfile({ ...profile, bioAm: e.target.value })}
                    placeholder="ቨርቴክስ ዲጂታል - ፈጣን ድረ-ገጾችን፣ ሲኒማቲክ ቪዲዮዎችን እና ማራኪ ፖስተሮችን በጥራት እና በአጭር ጊዜ የሚያቀርብ የፈጠራ ስቱዲዮ።"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">የስራ ዝግጁነት ሁኔታ (በአማርኛ)</label>
                  <input
                    type="text"
                    value={profile.availabilityTextAm || ''}
                    onChange={(e) => setProfile({ ...profile, availabilityTextAm: e.target.value })}
                    placeholder="ለአዳዲስ ድረ-ገጾች፣ ቪዲዮ እና ፖስተር ስራዎች ዝግጁ ነን"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Years Experience</label>
                    <input
                      type="number"
                      value={profile.yearsOfExperience}
                      onChange={(e) => setProfile({ ...profile, yearsOfExperience: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Projects Shipped</label>
                    <input
                      type="number"
                      value={profile.projectsCompleted}
                      onChange={(e) => setProfile({ ...profile, projectsCompleted: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-medium text-zinc-300">Primary Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Phone Number (Optional)</label>
                  <input
                    type="text"
                    value={profile.phone || ''}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    placeholder="+251 900 000 000"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>
            )}

            {activeTab === 'socials' && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">GitHub / Code URL</label>
                  <input
                    type="text"
                    value={profile.socials.github || ''}
                    onChange={(e) => setProfile({
                      ...profile,
                      socials: { ...profile.socials, github: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">LinkedIn Profile URL</label>
                  <input
                    type="text"
                    value={profile.socials.linkedin || ''}
                    onChange={(e) => setProfile({
                      ...profile,
                      socials: { ...profile.socials, linkedin: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Telegram / Twitter URL</label>
                  <input
                    type="text"
                    value={profile.socials.twitter || ''}
                    onChange={(e) => setProfile({
                      ...profile,
                      socials: { ...profile.socials, twitter: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>
            )}
          </form>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/5 bg-[#0c0c0e]/90 backdrop-blur-md flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-medium border border-white/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isAmharic ? 'ወደ ቀድሞው መልስ' : 'Reset to Defaults'}</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold shadow-lg transition-all active:scale-95"
            >
              {saveToast ? <Check className="w-4 h-4 text-emerald-600" /> : <Save className="w-4 h-4" />}
              <span>{saveToast ? (isAmharic ? 'ተቀምጧል!' : 'Saved!') : (isAmharic ? 'ለውጦችን ተግብር' : 'Apply Changes')}</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
