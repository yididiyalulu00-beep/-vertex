import { PortfolioData } from '../types';

export const defaultPortfolio: PortfolioData = {
  profile: {
    name: 'Vertex Digital',
    nameAm: 'ቨርቴክስ ዲጂታል (Vertex Digital)',
    pronouns: 'Studio / Agency',
    title: 'Websites • Commercial Posters • Graphic Design',
    titleAm: 'ድረ-ገጾች • የንግድ ፖስተሮች • ግራፊክ ዲዛይን',
    roleTags: [
      'Website Developer',
      'Commercial Poster Designer',
      'Visual Print Artist',
      'Brand Identity',
      'UI/UX Specialist'
    ],
    roleTagsAm: [
      'የድረ-ገጽ ገንቢ',
      'የንግድ ፖስተር ዲዛይነር',
      'የህትመትና ማስታወቂያ ባለሙያ',
      'የብራንድ ዲዛይን',
      'የዩአይ/ዩኤክስ ባለሙያ'
    ],
    bio: 'Vertex Digital is a specialized creative digital studio engineering high-performance modern websites and high-impact commercial posters.',
    bioAm: 'ቨርቴክስ ዲጂታል (Vertex Digital) ፈጠራ የታከለባቸውን ዘመናዊ ድረ-ገጾች እና ዓይን የሚስቡ የንግድ ፖስተሮችን በልዩ ጥራት የሚያቀርብ የዲጂታል ስቱዲዮ ነው።',
    aboutLong:
      'Vertex Digital brings ideas to life across digital and high-resolution print mediums. From responsive, blazing-fast modern websites and interactive web applications to striking, print-ready commercial poster designs (Product Advertisements, Luxury Timepieces, Coffee Roasters, Fitness Academies, Brands) — we craft visuals that demand attention and convert audiences.',
    aboutLongAm:
      'ቨርቴክስ ዲጂታል ድንቅ የፈጠራ ስራዎችን በድረ-ገጾች እና በህትመት ፖስተሮች ያቀርባል። ዘመናዊ ድረ-ገጾች፣ ለምርት ማስታወቂያዎች፣ ለሰዓት፣ ለካፌዎች እና ለስፖርት ክለቦች የሚሆኑ ማራኪ የንግድ ፖስተሮችን እንሰራለን።',
    location: 'Addis Ababa, Ethiopia / Global Remote',
    locationAm: 'አዲስ አበባ፣ ኢትዮጵያ / አለም አቀፍ',
    availableForHire: true,
    availabilityText: 'Accepting New Website & Poster Projects',
    availabilityTextAm: 'ለአዳዲስ ድረ-ገጽ እና ፖስተር ስራዎች ክፍት ነን',
    avatarUrl: '/src/assets/images/vertex_official_logo_1786667457174.jpg',
    yearsOfExperience: 5,
    projectsCompleted: 120,
    codeCommits: 850,
    clientSatisfaction: 99,
    email: 'yididiyalulu00@gmail.com',
    phone: '+251 900 000 000',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      telegram: 'https://t.me',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
      email: 'yididiyalulu00@gmail.com'
    }
  },

  projects: [
    {
      id: 'luxury-watch-poster',
      title: 'THEPROTECH: Gold Luxury Watch Commercial Poster',
      titleAm: 'የ "THEPROTECH" የወርቅ ሰዓት የንግድ ማስታወቂያ ፖስተር',
      subtitle: 'Commercial Product Poster & Spec Sheet Design',
      subtitleAm: 'የምርት ማስታወቂያ እና ዝርዝር መግለጫ ፖስተር ዲዛይን',
      description:
        'High-end luxury product advertisement poster engineered for THEPROTECH gold timepiece, highlighting gold steel construction, high gloss finish, quartz movement, long-lasting battery, and instant order call-to-action.',
      descriptionAm:
        'ለTHEPROTECH የወርቅ ሰዓት የተሰራ የቅንጦት ማስታወቂያ ፖስተር። የወርቅ ብረቱን ጥራት፣ የኳርትዝ እንቅስቃሴውን እና ዝርዝር መረጃዎችን በጥቁር ጀርባ ላይ በሚያምር ሁኔታ የሚያሳይ።',
      detailedOverview:
        'Created a high-conversion luxury timepiece advertisement for print and digital ecommerce campaigns. Composed around a photorealistic gold steel chronograph on a dark wooden studio stage with dramatic theatrical curtain drapery. Integrated technical specification callout pointers (Gold Steel, Quatz Movement, High Gloss, Long Lasting, High Power) with clean geometric typography and an "ORDER NOW" CTA button.',
      detailedOverviewAm:
        'ለሰዓት አምራች እና መሸጫ ድርጅት የተሰራ የቅንጦት ማስታወቂያ ፖስተር። በጥቁር ስቱዲዮ መድረክ ላይ የተቀመጠ የሚያብረቀርቅ የወርቅ ሰዓት፣ የቴክኒክ ዝርዝሮችን የሚያሳዩ መስመሮች እና የቀጥታ ግዢ ቁልፍን ያካተተ ነው።',
      category: 'Posters & Graphics',
      tags: ['Poster Design', 'Commercial Ad', 'Luxury Watch', 'Photoshop', 'Product Photography', 'Print Ready'],
      techStack: ['Adobe Photoshop', 'Product Retouching', 'Lighting Compositing', 'Vector Callouts', 'CMYK Master'],
      image: '/src/assets/images/luxury_watch_poster_1786664988875.jpg',
      featured: true,
      metrics: [
        { label: 'E-commerce CTR', value: '+38%' },
        { label: 'Print Resolution', value: '300 DPI' },
        { label: 'Ad Conversion', value: '+52%' }
      ],
      keyFeatures: [
        'Gleaming polished gold steel watch centerpiece on dark wooden stage',
        'Structured specification callout lines: Gold Steel, High Gloss, Quatz Movement, Long Lasting',
        'Minimalist premium typography: "THEPROTECH LUXURY WATCH"',
        'Direct conversion "ORDER NOW" pill button with URL footer'
      ],
      keyFeaturesAm: [
        'በጥቁር ስቱዲዮ መድረክ ላይ የተቀመጠ የሚያብረቀርቅ የወርቅ ሰዓት ማሳያ',
        'የሰዓቱን ዝርዝር ጥራቶች (Gold Steel, High Gloss, Quatz Movement) የሚያሳዩ መስመሮች',
        'ጉልህና የቅንጦት "THEPROTECH LUXURY WATCH" የጽሑፍ ዲዛይን',
        'ቀጥታ ማዘዣ ቁልፍ (ORDER NOW) እና የድረ-ገጽ አድራሻ'
      ],
      challengesSolved: [
        'Mastered metallic reflections and studio rim lighting to preserve the gold luster against dark textured drapes.',
        'Balanced precise technical product callout labels with high-end luxury editorial aesthetics.'
      ],
      challengesSolvedAm: [
        'የወርቁ ብርሃንና ነጸብራቅ በጥቁሩ ጀርባ ላይ ጎልቶ እንዲታይ የብርሃን ቅንብር ተሰርቷል።',
        'የቴክኒክ መግለጫዎቹ የፖስተሩን ውበት ሳይቀንሱ በግልጽ እንዲነበቡ ተደርጓል።'
      ],
      architecture: 'Product Render -> Studio Scene Backdrop -> Gold Rim Lighting -> Callout Vectors -> Typographic Hierarchy -> Final Master'
    },
    {
      id: 'coffee-time-mornings-poster',
      title: 'Coffee Time: "You Are The Coffee Of Our Mornings"',
      titleAm: 'የካፌና ቡና መሸጫ "Coffee of Our Mornings" ማስታወቂያ ፖስተር',
      subtitle: 'Artisan Cafe & Roastery Commercial Poster',
      subtitleAm: 'የቡና ሱቅ እና ካፌ ማስታወቂያ ፖስተር ዲዛይን',
      description:
        'Signature cafe advertising poster featuring dense roasted whole coffee beans framing a dark chalkboard background, circular "Coffee Time Since 1998" vintage badge stamp, and flowing caramel liquid typography.',
      descriptionAm:
        'የተጠበሱ ጥቁር የቡና ፍሬዎች፣ የካፌው ክብ ማህተም እና "hey you! you are the coffee of our mornings" የሚል ማራኪ የፈሳሽ ቡና ጽሑፍ ዲዛይን የያዘ ፖስተር።',
      detailedOverview:
        'Designed an emotionally resonant commercial poster for artisanal coffee houses and roasteries. Featuring a rich top frame of freshly roasted Arabica beans, a vintage circular emblem badge "COFFEE TIME SINCE 1998 COFFEE SHOP", and a warm caramel organic swirl badge declaring "hey you! you are the coffee of our mornings" alongside campaign hashtags and social handles.',
      detailedOverviewAm:
        'ለቡና መሸጫዎች፣ ለካፌዎች እና ለሮስተሪዎች የተዘጋጀ ደንበኞችን የሚስብ ልዩ ማስታወቂያ ፖስተር። ጥቁር የተጠበሱ የቡና ፍሬዎች፣ አንጋፋ የካፌ ማህተም እና ማራኪ የቡና ቀለም ያላቸው ጽሑፎች ተካተውበታል።',
      category: 'Posters & Graphics',
      tags: ['Poster Design', 'Cafe Advertising', 'Coffee Roastery', 'Chalkboard Slate', 'Vintage Stamp', 'Typography'],
      techStack: ['Adobe Photoshop', 'Illustrator', 'Organic Masking', 'Texture Compositing', 'CMYK 300 DPI'],
      image: '/src/assets/images/coffee_ad_poster_1786665000132.jpg',
      featured: true,
      metrics: [
        { label: 'Social Shares', value: '12K+' },
        { label: 'Foot Traffic', value: '+45%' },
        { label: 'Print Quality', value: '4K CMYK' }
      ],
      keyFeatures: [
        'Top dense roasted whole coffee beans framing the slate textured background',
        'Vintage circular emblem: "COFFEE TIME SINCE 1998 COFFEE SHOP"',
        'Caramel organic fluid shape with script "hey you! you are the coffee of our mornings"',
        'Integrated social media handles (@coffee) and domain url'
      ],
      keyFeaturesAm: [
        'በላይኛው ክፍል የተደረደሩ ጥቁር የተጠበሱ የቡና ፍሬዎች ማሳያ',
        'ክብ የቡና ሱቅ ማህተም (COFFEE TIME SINCE 1998)',
        'ማራኪ የፈሳሽ ቡና ቅርፅና ውብ የእንግሊዝኛ የጽሑፍ ዲዛይን',
        'የማህበራዊ ሚዲያ ገጾች (@coffee) እና የድረ-ገጽ አድራሻ'
      ],
      challengesSolved: [
        'Achieved photorealistic organic fluid caramel styling that blends naturally with the chalkboard grain texture.'
      ],
      challengesSolvedAm: [
        'የፈሳሽ ቡናው ቀለም እና የጽሑፉ አቀማመጥ ከጥቁሩ የሰሌዳ ጀርባ ጋር በሚገባ እንዲዋሃድ ተደርጓል።'
      ],
      architecture: 'Bean Border Photography -> Chalkboard Canvas -> Stamp Vectorization -> Caramel Badge Mask -> Social Icons -> Print Export'
    },
    {
      id: 'boxing-academy-poster',
      title: 'Pro Boxing Academy: "Unleash Your Beast"',
      titleAm: 'የፕሮ ቦክሲንግ አካዳሚ ማስታወቂያ ፖስተር',
      subtitle: 'Commercial Athletic Poster & Print Design',
      subtitleAm: 'የስፖርት እና የቦክስ ማስታወቂያ ፖስተር ዲዛይን',
      description:
        'High-intensity commercial sports poster designed for Pro Boxing Academy featuring dramatic blue boxing gloves, textured smoke atmospheric effects, bold athletic typography, and structured program callouts.',
      descriptionAm:
        'ለፕሮ ቦክሲንግ አካዳሚ የተዘጋጀ ዓይን የሚስብ ሰማያዊ የቦክስ ጓንት፣ የጢስ ውጤት እና ጠንካራ የስፖርት ጽሑፎችን የያዘ ማስታወቂያ ፖስተር።',
      detailedOverview:
        'Created a high-impact advertising poster tailored for both digital social campaigns and high-resolution print display (300 DPI CMYK). Utilized custom photographic compositing, neon ambient rim lighting on the gloves, and balanced typographic hierarchy to drive academy enrollments.',
      detailedOverviewAm:
        'ለቦክስ አካዳሚው አዳዲስ ሰልጣኞችን ለመሳብ የተዘጋጀ ማራኪ ፖስተር። በፎቶሾፕ የተሰሩ ልዩ የብርሃን እና የጥላ ውጤቶች እንዲሁም ለህትመት እና ለማህበራዊ ሚዲያ በሚስማማ መልኩ የተሰራ።',
      category: 'Posters & Graphics',
      tags: ['Poster Design', 'Photoshop', 'Typography', 'Commercial Ad', 'Sports Branding'],
      techStack: ['Adobe Photoshop', 'Typography Layout', 'Compositing', 'CMYK Print Ready', 'Lighting FX'],
      image: '/src/assets/images/boxing_poster_1786663710516.jpg',
      featured: true,
      metrics: [
        { label: 'Gym Signups', value: '+450%' },
        { label: 'Print Resolution', value: '300 DPI' },
        { label: 'Visual Impact', value: '10/10' }
      ],
      keyFeatures: [
        'Dramatic neon blue illumination on glossy boxing gloves',
        'Bold typography: "UNLEASH YOUR BEAST" & "TRAIN AND BE THE CHAMP!"',
        'Structured program bullet points (Strength, Speed, Group Training)',
        'Vibrant "SIGN UP NOW!" call-to-action brush banner'
      ],
      keyFeaturesAm: [
        'በሰማያዊ የቦክስ ጓንቶች ላይ የተሰራ ድንቅ የብርሃን ውጤት',
        'ጉልህ እና አነቃቂ የስፖርት ጽሑፍ አቀማመጥ',
        'የስልጠና ዘርፎችን የሚያሳዩ ግልጽ ነጥቦች',
        'አሁኑኑ ይመዝገቡ የሚል ማራኪ የጥሪ ባነር'
      ],
      challengesSolved: [
        'Balanced dark moody background with high-contrast text legibility across all distances.',
        'Engineered multi-layered depth using subtle background text watermarks and mist particles.'
      ],
      challengesSolvedAm: [
        'ጥቁር የጀርባ ቀለም ላይ ጽሑፎች በግልጽ እንዲነበቡ ከፍተኛ ንፅፅር ተጠቅመናል።',
        'በስተጀርባ ያሉ ስስ ጽሑፎች እና የጭጋግ ውጤቶች የፖስተሩን ጥልቀት አሳድገውታል።'
      ],
      architecture: 'Adobe Creative Cloud Workflow: RAW Asset Layering -> Lighting Compositing -> Vector Typography -> Color Grading -> Print Master'
    },
    {
      id: 'artisanal-coffee-poster',
      title: 'Artisanal "Coffee Time" Commercial Poster',
      titleAm: 'የቡና መሸጫና ካፌ "Coffee Time" ማስታወቂያ ፖስተር',
      subtitle: 'Luxury Food & Beverage Advertising Design',
      subtitleAm: 'የቡና እና የካፌ ልዩ ማስታወቂያ ዲዛይን',
      description:
        'Aesthetic commercial advertisement for an artisanal coffee roastery, framing an overhead view of latte art in a black ceramic cup resting on textured dark marble, enveloped by freshly roasted coffee beans and glowing typography.',
      descriptionAm:
        'ለቡና መሸጫና ካፌ የተዘጋጀ ማራኪ የቡና አረፋ ጥበብ፣ የተጠበሱ የቡና ፍሬዎች በጥቁር እብነበረድ ላይ እና የሚያብረቀርቅ የጽሑፍ ዲዛይን።',
      detailedOverview:
        'Crafted to evoke the warm aroma and premium craftsmanship of specialty coffee. Combining top-down composition, radiant neon outer glow typography ("Coffee Time"), and scattered roasted coffee beans for rich tactile depth.',
      detailedOverviewAm:
        'የቡናን መአዛና ውበት በሚገባ የሚያሳይ የፖስተር ዲዛይን። በጥቁር እብነበረድ ላይ የተቀመጠ ማራኪ የቡና ስኒ እና የሚያበሩ ጽሑፎች ተካተውበታል።',
      category: 'Posters & Graphics',
      tags: ['Poster Design', 'Graphic Design', 'Food & Beverage', 'Marble Texture', 'Glow Typography'],
      techStack: ['Adobe Illustrator', 'Photoshop', 'Shadow Mapping', 'Typography', 'Color Theory'],
      image: '/src/assets/images/coffee_poster_1786663721583.jpg',
      featured: true,
      metrics: [
        { label: 'Social Engagement', value: '+320%' },
        { label: 'Menu Conversion', value: '+42%' },
        { label: 'Quality', value: '4K Ultra' }
      ],
      keyFeatures: [
        'Crisp leaf latte art centerpiece inside a matte black ceramic cup',
        'Warm radiant glow typography for "Coffee Time"',
        'Scattered whole roasted coffee beans creating dynamic foreground depth',
        'Dark marble texture backdrop with subtle coffee steam accents'
      ],
      keyFeaturesAm: [
        'በጥቁር ስኒ ውስጥ የተሰራ ውብ የቡና አረፋ ጥበብ',
        'የሚያበራ "Coffee Time" የተሰኘ የጽሑፍ ዲዛይን',
        'በእብነበረዱ ላይ የተበተኑ የቡና ፍሬዎች',
        'ጥቁር የእብነበረድ ጀርባ ከቡና ትነት ጋር'
      ],
      challengesSolved: [
        'Calibrated warm ambient glow values so they accentuate the coffee without overpowering the dark marble texture.'
      ],
      challengesSolvedAm: [
        'የጽሑፉ ብርሃን ከቡናውና ከእብነበረዱ ጋር ፍጹም ስምምነት እንዲኖረው ተደርጎ ተስተካክሏል።'
      ],
      architecture: 'Composition -> Depth of Field Masking -> Glow Layer Styles -> Typographic Alignment -> High-Res Export'
    },
    {
      id: 'vertex-digital-web-platform',
      title: 'Vertex Digital Studio Web Experience',
      titleAm: 'የቨርቴክስ ዲጂታል ዘመናዊ ድረ-ገጽ',
      subtitle: 'Responsive Bilingual Digital Studio Showcase',
      subtitleAm: 'ሁለት ቋንቋዎችን የሚደግፍ ፈጣን ድረ-ገጽ',
      description:
        'Custom-engineered web application showcasing Vertex Digital’s creative portfolio with fluid micro-interactions, dark aesthetic design, live customizer drawer, and bilingual English & Amharic switching.',
      descriptionAm:
        'በእንግሊዝኛ እና በአማርኛ ቋንቋዎች የሚሰራ፣ ዘመናዊ ዲዛይን እና ፈጣን አሰራር ያለው ድረ-ገጽ።',
      detailedOverview:
        'Built with React 19, TypeScript, and Tailwind CSS. Designed to provide instant portfolio browsing, full responsiveness across all screen sizes, accessible semantic structure, and native-feeling bilingual typography support.',
      detailedOverviewAm:
        'በዘመናዊ የድረ-ገጽ ቴክኖሎጂዎች የተገነባ፣ በስልክም ሆነ በኮምፒውተር ላይ በፍጥነት የሚሰራ እና በእንግሊዝኛና በአማርኛ መረጃዎችን የሚያቀርብ ድረ-ገጽ።',
      category: 'Websites',
      tags: ['Web Development', 'React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Bilingual'],
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: '/src/assets/images/website_design_showcase_1786663805095.jpg',
      featured: true,
      metrics: [
        { label: 'Performance', value: '100%' },
        { label: 'Load Speed', value: '0.3s' },
        { label: 'Languages', value: 'EN & AM' }
      ],
      keyFeatures: [
        'One-click instant toggle between English and Amharic languages',
        'Responsive layout optimized for smartphones, tablets, and 4K displays',
        'Interactive live customizer drawer for client previews',
        'Integrated contact form and printable PDF/Markdown CV generator'
      ],
      keyFeaturesAm: [
        'በአንድ ጠቅታ በእንግሊዝኛ እና በአማርኛ ቋንቋዎች መካከል መቀያየር',
        'በስልክ፣ በታብሌት እና በኮምፒውተር ላይ ተስማምቶ የሚሰራ',
        'ቀጥታ መልእክት መላኪያ እና የስራ ዝርዝር ማሳያ',
        'የስራ ልምድ (CV) የማውረድ እና የማተም አገልግሎት'
      ],
      challengesSolved: [
        'Implemented full bidirectional bilingual state without layout distortion or font clipping.'
      ],
      challengesSolvedAm: [
        'የአማርኛ ጽሑፎች በድረ-ገጹ ላይ በሚያምር ሁኔታ እንዲቀመጡና እንዲነበቡ ተደርጓል።'
      ],
      architecture: 'React 19 App -> State Management -> Localized i18n Dictionary -> Tailwind Layer -> Vite Bundler'
    },
    {
      id: 'brand-identity-visual-suite',
      title: 'OmniBrand Complete Identity Suite',
      titleAm: 'ሙሉ የብራንድ መለያ እና የግራፊክስ ስራዎች',
      subtitle: 'Logos, Social Kits & Advertising Collateral',
      subtitleAm: 'ሎጎ፣ የማህበራዊ ሚዲያ ማስታወቂያዎች እና ብራንዲንግ',
      description:
        'Comprehensive brand identity system encompassing logo marks, color harmony guidelines, typography pairings, social media ad templates, and physical signage.',
      descriptionAm:
        'የድርጅት መለያ ሎጎ፣ የማህበራዊ ሚዲያ ከቨሮች፣ ማስታወቂያዎች እና የተሟላ የብራንድ ዲዛይን።',
      detailedOverview:
        'Delivered complete vector branding guidelines that establish consistency across all touchpoints from digital screens to print billboards.',
      detailedOverviewAm:
        'ለድርጅቶች በሁሉም ቦታዎች ወጥ የሆነ ማራኪ ገጽታ እንዲኖራቸው የሚያስችል የተሟላ የዲዛይን ስራ።',
      category: 'Branding',
      tags: ['Branding', 'Logo Design', 'Social Media', 'Illustrator', 'Style Guide'],
      techStack: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Vector Assets'],
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
      featured: false,
      metrics: [
        { label: 'Asset Count', value: '50+ Files' },
        { label: 'Brand Recall', value: '+85%' },
        { label: 'Vector Purity', value: '100%' }
      ],
      keyFeatures: [
        'Primary, secondary, and badge logo variants',
        'Full typography hierarchy and color swatches',
        'Ready-to-post Instagram, YouTube, and Facebook promotional templates'
      ],
      keyFeaturesAm: [
        'ዋና እና ተጨማሪ የሎጎ አማራጮች',
        'የቀለምና የጽሑፍ መመሪያዎች',
        'ለፌስቡክ፣ ኢንስታግራም እና ዩቲዩብ የተዘጋጁ የማስታወቂያ ቴምፕሌቶች'
      ]
    }
  ],

  skills: [
    // Web Development
    { name: 'Custom Website Development', nameAm: 'ዘመናዊ ድረ-ገጽ ግንባታ', level: 96, category: 'Web Development', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት', highlighted: true },
    { name: 'React & TypeScript', nameAm: 'ሪአክት እና ታይፕስክሪፕት', level: 94, category: 'Web Development', experienceYears: '4+ Years', experienceYearsAm: '4+ ዓመታት', highlighted: true },
    { name: 'Tailwind CSS & Responsive UI', nameAm: 'ቴልዊንድ እና ስልክ ተስማሚ ዩአይ', level: 98, category: 'Web Development', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት', highlighted: true },
    { name: 'Next.js & Web Architecture', nameAm: 'ኔክስት ጄኤስ እና ዌብ አርክቴክቸር', level: 90, category: 'Web Development', experienceYears: '4 Years', experienceYearsAm: '4 ዓመታት' },
    { name: 'UI/UX Interactive Design', nameAm: 'የዩአይ/ዩኤክስ ዲዛይን', level: 92, category: 'Web Development', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት' },

    // Poster & Graphics
    { name: 'Adobe Photoshop (Poster Art)', nameAm: 'አዶቢ ፎቶሾፕ (የፖስተር ጥበብ)', level: 99, category: 'Poster & Graphics', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት', highlighted: true },
    { name: 'Adobe Illustrator (Vector & Logos)', nameAm: 'አዶቢ ኢለስትሬተር (ቬክተርና ሎጎ)', level: 94, category: 'Poster & Graphics', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት', highlighted: true },
    { name: 'Commercial Advertising Layouts', nameAm: 'የንግድ ማስታወቂያ አቀማመጥ', level: 96, category: 'Poster & Graphics', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት', highlighted: true },
    { name: 'High-Res CMYK Print Preparation', nameAm: 'ለህትመት የተዘጋጀ ከፍተኛ ጥራት', level: 95, category: 'Poster & Graphics', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት', highlighted: true },
    { name: 'Lighting & Shadow Compositing', nameAm: 'የብርሃንና የጥላ ውጤቶች ቅንብር', level: 96, category: 'Poster & Graphics', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት' },

    // Design & Tools
    { name: 'Figma & Prototyping', nameAm: 'ፊግማ እና ፕሮቶታይፕ', level: 92, category: 'Design & Tools', experienceYears: '4 Years', experienceYearsAm: '4 ዓመታት' },
    { name: 'Typography Mastery', nameAm: 'የፊደላትና የጽሑፍ ጥበብ (Typography)', level: 97, category: 'Design & Tools', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት' },
    { name: 'Color Theory & Visual Balance', nameAm: 'የቀለማት ስምምነትና ሚዛን', level: 95, category: 'Design & Tools', experienceYears: '5 Years', experienceYearsAm: '5 ዓመታት' },

    // Brand & Strategy
    { name: 'Brand Strategy & Identity Systems', nameAm: 'የብራንድ ስትራቴጂና መለያ ስርዓት', level: 92, category: 'Brand & Strategy', experienceYears: '4 Years', experienceYearsAm: '4 ዓመታት', highlighted: true },
    { name: 'Packaging & Print Collateral', nameAm: 'የማሸጊያና የህትመት ዲዛይን', level: 90, category: 'Brand & Strategy', experienceYears: '4 Years', experienceYearsAm: '4 ዓመታት' }
  ],

  experiences: [
    {
      id: 'exp-vertex-lead',
      role: 'Lead Digital Creator & Studio Director',
      roleAm: 'ዋና የዲጂታል ፈጣሪ እና የስቱዲዮ መሪ',
      company: 'Vertex Digital Studio',
      companyAm: 'ቨርቴክስ ዲጂታል ስቱዲዮ',
      location: 'Addis Ababa / Remote',
      locationAm: 'አዲስ አበባ / አለም አቀፍ',
      period: '2022 — Present',
      periodAm: '2022 — አሁን',
      current: true,
      summary:
        'Directing all creative operations across custom website development, responsive web applications, and commercial advertising posters for local and international brands.',
      summaryAm:
        'በድረ-ገጽ ግንባታ እና በንግድ ፖስተሮች ላይ የተሰማራውን የቨርቴክስ ዲጂታል ስቱዲዮን በበላይነት መምራት።',
      achievements: [
        'Shipped 120+ successful digital assets spanning interactive web portals, e-commerce stores, and high-impact commercial posters.',
        'Engineered high-converting print and digital posters for luxury timepieces, fitness academies, roasteries, and corporate brands.',
        'Maintained a 99% client satisfaction rate across all design and development deliverables.'
      ],
      achievementsAm: [
        'ከ120 በላይ ድረ-ገጾችን እና የንግድ ማስታወቂያ ፖስተሮችን በተሳካ ሁኔታ አጠናቀናል።',
        'ለሰዓት አምራቾች፣ ለስፖርት አካዳሚዎች እና ለካፌዎች ውጤታማ ፖስተሮችን ገንብተናል።',
        '99% የደንበኞች እርካታን አስመዝግበናል።'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind', 'Photoshop', 'Illustrator', 'Figma']
    },
    {
      id: 'exp-creative-designer',
      role: 'Senior Digital Designer & Web Specialist',
      roleAm: 'ከፍተኛ ዲጂታል ዲዛይነር እና የድረ-ገጽ ባለሙያ',
      company: 'Impact Media & Visuals',
      companyAm: 'ኢምፓክት ሚዲያ',
      location: 'Remote',
      locationAm: 'የርቀት ስራ',
      period: '2020 — 2022',
      periodAm: '2020 — 2022',
      summary:
        'Led visual identity design and web frontend interfaces for enterprise clients, commercial brands, and startup product launches.',
      summaryAm:
        'ለተለያዩ ድርጅቶች እና አዳዲስ ምርቶች ማራኪ የድረ-ገጽ ዩአይ እና የግራፊክስ ስራዎችን ማዘጋጀት።',
      achievements: [
        'Designed and delivered 80+ commercial poster campaigns and web layouts with 99.4% on-time delivery.',
        'Standardized typographic styleguides and high-resolution print workflows.'
      ],
      achievementsAm: [
        'ከ80 በላይ የማስታወቂያ ፖስተሮችንና ድረ-ገጾችን በከፍተኛ ጥራት አዘጋጅተን አስረክበናል።',
        'የህትመት እና የዲዛይን ሂደቶችን አዘምነናል።'
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'HTML/CSS', 'JavaScript']
    }
  ],

  educations: [
    {
      id: 'edu-multimedia',
      degree: 'B.Sc. in Computer Science & Digital Media Engineering',
      degreeAm: 'የኮምፒውተር ሳይንስ እና ዲጂታል ሚዲያ ኢንጂነሪንግ ዲግሪ',
      school: 'University of Technology & Applied Arts',
      schoolAm: 'የቴክኖሎጂ እና አፕላይድ አርትስ ዩኒቨርሲቲ',
      period: '2016 — 2020',
      details:
        'Comprehensive coursework in Web Architecture, Human-Computer Interaction, Digital Imaging, Graphic Design, and Visual Communication.',
      detailsAm:
        'በድረ-ገጽ ግንባታ፣ በዲጂታል ምስል ዝግጅት፣ በግራፊክስ ዲዛይን እና በመረጃ ኮሙዩኒኬሽን ላይ የተጠናከረ ትምህርት።',
      honors: 'First Class Honors with Excellence in Visual Systems'
    }
  ],

  testimonials: [
    {
      id: 'test-boxing',
      name: 'Marcus Vance',
      nameAm: 'ማርከስ ቫንስ',
      role: 'Head Coach & Founder',
      roleAm: 'ዋና አሰልጣኝ እና መስራች',
      company: 'Pro Boxing Academy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      quote:
        'The "Unleash Your Beast" poster Vertex Digital designed for our academy was an absolute showstopper! It completely revolutionized our gym admissions and gave us an elite, professional image.',
      quoteAm:
        'ቨርቴክስ ዲጂታል ለቦክስ አካዳሚያችን የሰራው "Unleash Your Beast" ፖስተር እጅግ በጣም አስደናቂ ነበር! አዳዲስ ሰልጣኞችን በመሳብ በኩል ትልቅ አስተዋፅኦ አድርጎልናል።',
      rating: 5,
      relationship: 'Client for Boxing Poster & Social Graphics',
      relationshipAm: 'የፖስተር እና የማስታወቂያ ደንበኛ'
    },
    {
      id: 'test-coffee',
      name: 'Elena Rostova',
      nameAm: 'ኤሌና ሮስቶቫ',
      role: 'Creative Director',
      roleAm: 'የፈጠራ ዳይሬክተር',
      company: 'Artisan Coffee Roasters',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      quote:
        'Vertex Digital captured the soul of our coffee bar in their poster design. The marble textures, glowing typography, and composition were flawless.',
      quoteAm:
        'የቡና መሸጫችንን ውበት በፖስተሩ ላይ በሚገባ አንፀባርቀውልናል። ጥራቱና የዲዛይን ውበቱ ወደር የለውም።',
      rating: 5,
      relationship: 'Client for Coffee Posters & Brand Graphics',
      relationshipAm: 'የፖስተርና የብራንድ ዲዛይን ደንበኛ'
    },
    {
      id: 'test-startup',
      name: 'Dawit Mengistu',
      nameAm: 'ዳዊት መንግስቱ',
      role: 'Co-Founder & CEO',
      roleAm: 'መስራች እና ስራ አስኪያጅ',
      company: 'Addis Digital Ventures',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote:
        'Vertex Digital built our custom website from scratch and designed our brand collateral. Fast delivery, pristine quality, and flawless English/Amharic bilingual execution!',
      quoteAm:
        'ድረ-ገጻችንን ሰርተውልናል እንዲሁም የብራንድ ዲዛይናችንን አዘጋጅተዋል። ፈጣን አሰራርና በእንግሊዝኛም በአማርኛም ድንቅ አቀራረብ አላቸው!',
      rating: 5,
      relationship: 'Client for Website & Brand Identity',
      relationshipAm: 'የድረ-ገጽና የብራንድ ዲዛይን ደንበኛ'
    }
  ]
};

export const vertexDigitalData = defaultPortfolio;
export const fullstackData = defaultPortfolio;

export const personaPresets: { id: 'fullstack'; label: string; description: string; icon: string; data: PortfolioData }[] = [
  {
    id: 'fullstack',
    label: 'Vertex Digital Studio',
    description: 'Websites • Commercial Posters • Graphic Design',
    icon: 'Layers',
    data: defaultPortfolio
  }
];
