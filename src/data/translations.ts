import { Language } from '../types';

export interface TranslationDict {
  // Nav
  navAbout: string;
  navProjects: string;
  navSkills: string;
  navExperience: string;
  navResume: string;
  navContact: string;
  navCustomize: string;
  navAvailable: string;
  navBusy: string;

  // Hero
  heroStudioBadge: string;
  heroGreeting: string;
  heroHeadline1: string;
  heroHeadlineHighlight: string;
  heroHeadline2: string;
  heroSubheadline: string;
  heroViewProjects: string;
  heroGetInTouch: string;
  heroDownloadResume: string;
  heroYearsExp: string;
  heroProjectsDone: string;
  heroClientSat: string;
  heroTurnaround: string;
  heroCoreDisciplines: string;
  heroWebDev: string;
  heroBrandDesign: string;
  heroPosterDesign: string;

  // Projects
  projectsBadge: string;
  projectsTitle: string;
  projectsSubtitle: string;
  filterAll: string;
  filterWebsites: string;
  filterPosters: string;
  filterBranding: string;
  filterVideo: string;
  viewDetails: string;
  watchDemo: string;
  launchDemo: string;
  viewPoster: string;
  sourceCode: string;
  keyCapabilities: string;
  technicalChallenges: string;
  architectureFlow: string;
  technologiesUsed: string;
  featuredBadge: string;

  // Skills
  skillsBadge: string;
  skillsTitle: string;
  skillsSubtitle: string;
  skillCategoryAll: string;
  skillProficiency: string;
  skillExperience: string;
  skillsCreativeSuite: string;

  // Experience
  experienceBadge: string;
  experienceTitle: string;
  experienceSubtitle: string;
  tabWork: string;
  tabEducation: string;
  workTrack: string;
  educationTrack: string;
  currentRole: string;
  milestonesImpact: string;
  honors: string;

  // Testimonials
  testimonialsBadge: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  verifiedClient: string;

  // Contact
  contactBadge: string;
  contactTitle: string;
  contactSubtitle: string;
  directEmail: string;
  contactEmail: string;
  responseTime: string;
  contactResponse: string;
  responseTimeVal: string;
  locationTz: string;
  contactLocation: string;
  inquiryTopic: string;
  contactSelectService: string;
  yourName: string;
  contactName: string;
  yourEmail: string;
  contactEmailField: string;
  yourMessage: string;
  contactMessage: string;
  messagePlaceholder: string;
  sendMessage: string;
  contactSend: string;
  messageSent: string;
  contactSentSuccess: string;
  messageSentDesc: string;
  sendAnother: string;
  preferEmailClient: string;
  copied: string;
  copy: string;

  // Resume Modal
  resumeTitle: string;
  resumeDownload: string;
  resumeCopyMd: string;
  resumePrint: string;
  resumeSummary: string;
  resumeSkills: string;
  resumeExperience: string;
  resumeEducation: string;

  // Customizer
  customizerTitle: string;
  tabProfile: string;
  tabStats: string;
  tabSocials: string;
  fullName: string;
  headlineTitle: string;
  bioLabel: string;
  locationLabel: string;
  resetDefaults: string;
  applyChanges: string;

  // Workflow Steps
  workflowBadge: string;
  workflowTitle: string;
  workflowStep1Title: string;
  workflowStep1Desc: string;
  workflowStep2Title: string;
  workflowStep2Desc: string;
  workflowStep3Title: string;
  workflowStep3Desc: string;

  // Footer
  footerRights: string;
  footerCrafted: string;
  backToTop: string;
  languageSelect: string;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    // Nav
    navAbout: 'About',
    navProjects: 'Portfolio & Works',
    navSkills: 'Skills & Tools',
    navExperience: 'Experience',
    navResume: 'Resume',
    navContact: 'Contact',
    navCustomize: 'Customize',
    navAvailable: 'Available for New Projects',
    navBusy: 'Booked',

    // Hero
    heroStudioBadge: 'Vertex Digital Creative Studio',
    heroGreeting: 'Hello, we are',
    heroHeadline1: 'We Build Digital Experiences',
    heroHeadlineHighlight: 'That Help Businesses',
    heroHeadline2: 'Grow.',
    heroSubheadline:
      'Vertex Digital creates modern websites, professional branding, creative designs, and digital solutions for businesses.',
    heroViewProjects: 'View Our Work',
    heroGetInTouch: 'Start a Project',
    heroDownloadResume: 'View CV',
    heroYearsExp: 'Years Exp.',
    heroProjectsDone: 'Projects Shipped',
    heroClientSat: 'Client Satisfaction',
    heroTurnaround: 'Rapid Turnaround',
    heroCoreDisciplines: 'Core Creative Disciplines',
    heroWebDev: 'Website Design & Development',
    heroBrandDesign: 'Branding & Identity',
    heroPosterDesign: 'Poster & Graphic Design',

    // Projects
    projectsBadge: 'Portfolio & Works',
    projectsTitle: 'OUR RECENT PROJECTS',
    projectsSubtitle:
      'Explore responsive web platforms, commercial product posters, and video screen walkthroughs engineered for real client growth.',
    filterAll: 'All Projects',
    filterWebsites: 'Websites',
    filterBranding: 'Branding',
    filterPosters: 'Graphic Design',
    filterVideo: 'Video',
    viewDetails: 'View Project',
    watchDemo: 'Watch Demo',
    launchDemo: 'Launch Website',
    viewPoster: 'View Full Size',
    sourceCode: 'Source Code',
    keyCapabilities: 'Key Deliverables & Highlights',
    technicalChallenges: 'Creative & Technical Execution',
    architectureFlow: 'Workflow & Production Pipeline',
    technologiesUsed: 'Creative Tools & Software',
    featuredBadge: 'Featured Showcase',

    // Skills
    skillsBadge: 'Technical & Creative Arsenal',
    skillsTitle: 'SKILLS, SUITES & TOOLKIT',
    skillsSubtitle:
      'Mastery across web frontend frameworks, Adobe Photoshop, Illustrator, Figma, and high-resolution CMYK print typography.',
    skillCategoryAll: 'All Disciplines',
    skillProficiency: 'Proficiency Level',
    skillExperience: 'Experience',
    skillsCreativeSuite: 'Creative & Engineering Stack',

    // Experience
    experienceBadge: 'Track Record',
    experienceTitle: 'EXPERIENCE & JOURNEY',
    experienceSubtitle:
      'Delivering web solutions, commercial brand campaigns, product posters, and dynamic visual graphics for global clients and fast-growing brands.',
    tabWork: 'Production & Career Track',
    tabEducation: 'Education & Certifications',
    workTrack: 'Production & Career Track',
    educationTrack: 'Education & Certifications',
    currentRole: 'Active Studio Lead',
    milestonesImpact: 'Key Outcomes & Impact',
    honors: 'Recognitions & Honors',

    // Testimonials
    testimonialsBadge: 'Client Endorsements',
    testimonialsTitle: 'WHAT CLIENTS & PARTNERS SAY',
    testimonialsSubtitle:
      'Feedback from business owners, marketing directors, gym academies, and coffee roasters who trust Vertex Digital.',
    verifiedClient: 'Verified Client',

    // Contact
    contactBadge: 'Initiate Collaboration',
    contactTitle: "LET'S BUILD SOMETHING EXTRAORDINARY",
    contactSubtitle:
      'Need a bespoke website, e-commerce storefront, or striking commercial poster series for your business? Reach out directly.',
    directEmail: 'Studio Email',
    contactEmail: 'Direct Studio Email',
    responseTime: 'Response Guarantee',
    contactResponse: 'Response Window',
    responseTimeVal: 'Within 12 to 24 Hours',
    locationTz: 'Location & Availability',
    contactLocation: 'Location & Availability',
    inquiryTopic: 'Project Category / Inquiry Type:',
    contactSelectService: 'Select Required Service:',
    yourName: 'Your Name',
    contactName: 'Your Full Name',
    yourEmail: 'Your Email Address',
    contactEmailField: 'Your Email Address',
    yourMessage: 'Project Details & Scope',
    contactMessage: 'Project Details & Scope',
    messagePlaceholder: 'Tell us about your brand, website goals, or commercial poster requirements...',
    sendMessage: 'Dispatch Inquiry',
    contactSend: 'Send Project Inquiry',
    messageSent: 'Inquiry Dispatched Successfully!',
    contactSentSuccess: 'Inquiry Dispatched Successfully!',
    messageSentDesc: 'Thank you for contacting Vertex Digital. We will review your project brief and get back to you shortly.',
    sendAnother: 'Send Another Inquiry',
    preferEmailClient: 'Prefer direct email? Click here to compose',
    copied: 'Copied!',
    copy: 'Copy',

    // Resume Modal
    resumeTitle: 'Vertex Digital — Creative & Technical CV',
    resumeDownload: 'Download PDF',
    resumeCopyMd: 'Copy Markdown',
    resumePrint: 'Print CV',
    resumeSummary: 'Executive Overview',
    resumeSkills: 'Core Technical & Creative Competencies',
    resumeExperience: 'Professional Production History',
    resumeEducation: 'Education & Creative Training',

    // Customizer
    customizerTitle: 'Live Portfolio Customizer',
    tabProfile: 'Studio Profile',
    tabStats: 'Metrics & Data',
    tabSocials: 'Social Links',
    fullName: 'Studio / Creator Name',
    headlineTitle: 'Headline / Subtitle',
    bioLabel: 'Bio & Mission Statement',
    locationLabel: 'Location & Timezone',
    resetDefaults: 'Reset to Vertex Digital Defaults',
    applyChanges: 'Apply Live Changes',

    // Workflow Steps
    workflowBadge: 'Simple Client Process',
    workflowTitle: 'View Demos → Choose a Design → Request Your Website',
    workflowStep1Title: 'View Demos',
    workflowStep1Desc: 'Explore live client websites, interactive menu systems, and luxury showroom platforms.',
    workflowStep2Title: 'Choose a Design',
    workflowStep2Desc: 'Select your preferred visual aesthetic, bespoke layout, typography, and functional features.',
    workflowStep3Title: 'Request Your Website',
    workflowStep3Desc: 'Submit your requirements via our instant direct form or connect immediately on Telegram.',

    // Footer
    footerRights: 'All rights reserved.',
    footerCrafted: 'Crafted with precision for Vertex Digital',
    backToTop: 'Back to top',
    languageSelect: 'Language',
  },
  am: {
    // Nav
    navAbout: 'ስለ እኛ',
    navProjects: 'ስራዎችና ፖስተሮች',
    navSkills: 'ክህሎቶችና መሣሪያዎች',
    navExperience: 'የስራ ልምድ',
    navResume: 'ሬዙሜ',
    navContact: 'ያግኙን',
    navCustomize: 'አብጅ',
    navAvailable: 'ለአዳዲስ ፕሮጀክቶች ዝግጁ ነን',
    navBusy: 'በስራ ላይ',

    // Hero
    heroStudioBadge: 'Vertex Digital Creative Studio',
    heroGreeting: 'ሰላም፣ እኛ',
    heroHeadline1: 'ለንግድዎ እድገት የሚረዱ',
    heroHeadlineHighlight: 'ዲጂታል ተሞክሮዎችን',
    heroHeadline2: 'እንገነባለን።',
    heroSubheadline:
      'ቬርቴክስ ዲጂታል (Vertex Digital) ለንግድ ድርጅቶች ዘመናዊ ድረ-ገጾችን፣ ፕሮፌሽናል ብራንዲንግን፣ ፈጠራ የታከለባቸውን ዲዛይኖች እና ዲጂታል መፍትሄዎችን ያዘጋጃል።',
    heroViewProjects: 'የተሰሩ ስራዎችን ይመልከቱ',
    heroGetInTouch: 'ፕሮጀክት ይጀምሩ',
    heroDownloadResume: 'ሬዙሜ ይመልከቱ',
    heroYearsExp: 'የልምድ ዓመታት',
    heroProjectsDone: 'የተጠናቀቁ ስራዎች',
    heroClientSat: 'የደንበኞች እርካታ',
    heroTurnaround: 'ፈጣን ርክክብ',
    heroCoreDisciplines: 'ዋና ዋና የፈጠራ ዘርፎች',
    heroWebDev: 'የድረ-ገጽ ዲዛይን እና ልማት',
    heroBrandDesign: 'የብራንድ መለያ እና ሎጎ',
    heroPosterDesign: 'የፖስተር እና ግራፊክ ዲዛይን',

    // Projects
    projectsBadge: 'የተመረጡ ስራዎች',
    projectsTitle: 'የቅርብ ጊዜ ፕሮጀክቶች',
    projectsSubtitle:
      'ለደንበኞቻችን የሰራናቸውን ድረ-ገጾች፣ የንግድ ማስታወቂያ ፖስተሮች እና የቪዲዮ ማሳያዎችን ይመልከቱ።',
    filterAll: 'ሁሉም ስራዎች',
    filterWebsites: 'ድረ-ገጾች (Websites)',
    filterBranding: 'ብራንዲንግ (Branding)',
    filterPosters: 'ግራፊክ ዲዛይን (Graphic Design)',
    filterVideo: 'ቪዲዮ (Video)',
    viewDetails: 'ፕሮጀክቱን እይ',
    watchDemo: 'ቪዲዮ ማሳያ ይመልከቱ',
    launchDemo: 'ድረ-ገጹን ክፈት',
    viewPoster: 'ሙሉ ፖስተሩን እይ',
    sourceCode: 'የኮድ መረጃ',
    keyCapabilities: 'ዋና ዋና ገጽታዎች',
    technicalChallenges: 'የአሰራር ጥበብ እና ቴክኒካል መፍትሔ',
    architectureFlow: 'የምርት እና የአሰራር ሂደት',
    technologiesUsed: 'ጥቅም ላይ የዋሉ ሶፍትዌሮች',
    featuredBadge: 'ተመራጭ ስራ',

    // Skills
    skillsBadge: 'የቴክኒክ እና የፈጠራ ችሎታዎች',
    skillsTitle: 'ክህሎቶች፣ ሶፍትዌሮች እና መሣሪያዎች',
    skillsSubtitle:
      'በድረ-ገጽ ግንባታ (React, TypeScript, Tailwind) እና በግራፊክስ ዲዛይን (Photoshop, Illustrator, Figma) ከፍተኛ ብቃት።',
    skillCategoryAll: 'ሁሉም ዘርፎች',
    skillProficiency: 'የብቃት ደረጃ',
    skillExperience: 'ልምድ',
    skillsCreativeSuite: 'የሶፍትዌር እና የቴክኖሎጂ ዝርዝር',

    // Experience
    experienceBadge: 'የስራ ታሪክ',
    experienceTitle: 'የስራ ልምድ እና ጉዞ',
    experienceSubtitle:
      'ከተለያዩ ድርጅቶች፣ የንግድ ድርጅቶች፣ ጂሞች እና ካፌዎች ጋር በድረ-ገጽ እና በንግድ ፖስተር ስራዎች ላይ የተገኘ የረጅም ጊዜ ልምድ።',
    tabWork: 'የስራ ልምዶች',
    tabEducation: 'ትምህርት እና ስልጠና',
    workTrack: 'የስራ ልምዶች',
    educationTrack: 'ትምህርት እና ስልጠና',
    currentRole: 'ዋና ዲሬክተር / ስቱዲዮ መሪ',
    milestonesImpact: 'የተመዘገቡ ውጤቶች',
    honors: 'ሽልማቶች እና እውቅናዎች',

    // Testimonials
    testimonialsBadge: 'የደንበኞች ምስክርነት',
    testimonialsTitle: 'ደንበኞቻችን ምን ይላሉ?',
    testimonialsSubtitle:
      'ከቨርቴክስ ዲጂታል ጋር አብረው የሰሩ የንግድ ባለቤቶች፣ የቦክስ አካዳሚዎች እና የካፌ አስተዳዳሪዎች የተናገሩት።',
    verifiedClient: 'የተረጋገጠ ደንበኛ',

    // Contact
    contactBadge: 'ቀጥታ ግንኙነት',
    contactTitle: 'አብረን ድንቅ ስራዎችን እንስራ',
    contactSubtitle:
      'ለድርጅትዎ ድረ-ገጽ ወይም የንግድ ምርት ማስታወቂያ ፖስተር ማሰራት ይፈልጋሉ? አሁኑኑ ያነጋግሩን።',
    directEmail: 'የስቱዲዮ ኢሜይል',
    contactEmail: 'የስቱዲዮ ቀጥታ ኢሜይል',
    responseTime: 'የምላሽ ፍጥነት',
    contactResponse: 'የምላሽ ፍጥነት',
    responseTimeVal: 'በ12 እስከ 24 ሰዓት ውስጥ',
    locationTz: 'አድራሻ እና የስራ ሰዓት',
    contactLocation: 'አድራሻ እና የስራ ሰዓት',
    inquiryTopic: 'የአገልግሎት ዓይነት ይምረጡ:',
    contactSelectService: 'የሚፈልጉትን አገልግሎት ይምረጡ:',
    yourName: 'ሙሉ ስምዎ',
    contactName: 'ሙሉ ስምዎ',
    yourEmail: 'የኢሜይል አድራሻዎ',
    contactEmailField: 'የኢሜይል አድራሻዎ',
    yourMessage: 'የስራው ዝርዝር እና ፍላጎትዎ',
    contactMessage: 'የስራው ዝርዝር እና ፍላጎትዎ',
    messagePlaceholder: 'ስለ ድረ-ገጽዎ ወይም ስለሚፈልጉት የንግድ ፖስተር ዲዛይን ይንገሩን...',
    sendMessage: 'መልእክት ላክ',
    contactSend: 'የፕሮጀክት መልእክት ላክ',
    messageSent: 'መልእክትዎ በሚገባ ተልኳል!',
    contactSentSuccess: 'መልእክትዎ በሚገባ ተልኳል!',
    messageSentDesc: 'ቨርቴክስ ዲጂታልን ስለመረጡ እናመሰግናለን። ጥያቄዎን ተመልክተን ፈጣን ምላሽ እንሰጥዎታለን።',
    sendAnother: 'ሌላ መልእክት ለመላክ',
    preferEmailClient: 'በቀጥታ በኢሜይል መላክ ይፈልጋሉ? እዚህ ይጫኑ',
    copied: 'ተቀድቷል!',
    copy: 'ቅዳ',

    // Resume Modal
    resumeTitle: 'ቨርቴክስ ዲጂታል — ፕሮፌሽናል ሲቪ / ሬዙሜ',
    resumeDownload: 'PDF አውርድ',
    resumeCopyMd: 'Markdown ቅዳ',
    resumePrint: 'አትም (Print)',
    resumeSummary: 'የስራ አጠቃላይ መግለጫ',
    resumeSkills: 'ዋና ዋና የሙያ ዘርፎች',
    resumeExperience: 'የስራ ልምዶች',
    resumeEducation: 'ትምህርት እና ስልጠና',

    // Customizer
    customizerTitle: 'የፖርትፎሊዮ ማስተካከያ',
    tabProfile: 'የስቱዲዮ መረጃ',
    tabStats: 'ስታቲስቲክስ',
    tabSocials: 'ማህበራዊ ሚዲያ',
    fullName: 'የስቱዲዮ / የባለሙያ ስም',
    headlineTitle: 'ዋና ርዕስ',
    bioLabel: 'አጭር መግለጫ',
    locationLabel: 'አድራሻ',
    resetDefaults: 'ወደ መጀመሪያው መልስ',
    applyChanges: 'ለውጦችን አረጋግጥ',

    // Workflow Steps
    workflowBadge: 'ቀላል የ 3 ደረጃ አሰራር',
    workflowTitle: 'ዲሞዎችን ይመልከቱ → ዲዛይን ይምረጡ → የራስዎን ድረ-ገጽ ይጠይቁ',
    workflowStep1Title: 'ዲሞዎችን ይመልከቱ',
    workflowStep1Desc: 'የተሰሩ የቀጥታ ድረ-ገጾችን (ስማሽ በርገርስ፣ ደሉክስ ፈርኒቸር) እና የተሟሉ ዲሞዎችን ይመልከቱ።',
    workflowStep2Title: 'ዲዛይን ይምረጡ',
    workflowStep2Desc: 'ለስራዎ ወይም ለንግድዎ የሚስማማውን ዘመናዊ ዲዛይን፣ ቅርጽ እና የገጽታ ዝርዝር ይምረጡ።',
    workflowStep3Title: 'የራስዎን ድረ-ገጽ ይጠይቁ',
    workflowStep3Desc: 'ፍላጎትዎን በቅጹ ይላኩ ወይም በቴሌግራም (@vertexdigital00) በቀጥታ በማናገር ስራ ይጀምሩ።',

    // Footer
    footerRights: 'መብቱ በህግ የተጠበቀ ነው።',
    footerCrafted: 'ለቨርቴክስ ዲጂታል (Vertex Digital) በጥራት የተዘጋጀ',
    backToTop: 'ወደ ላይ ተመለስ',
    languageSelect: 'ቋንቋ',
  },
};
