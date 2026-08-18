export type Language = 'en' | 'am';

export type ProjectCategory = 'All' | 'Websites' | 'Branding' | 'Graphic Design' | 'Video';

export type SkillCategory = 'Web Development' | 'Graphic Design' | 'Design & Tools' | 'Brand & Strategy' | 'Video Editing' | 'Digital Solutions';

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  telegram?: string;
  instagram?: string;
  youtube?: string;
  whatsapp?: string;
  discord?: string;
  blog?: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  nameAm?: string;
  pronouns?: string;
  title: string;
  titleAm?: string;
  roleTags: string[];
  roleTagsAm?: string[];
  bio: string;
  bioAm?: string;
  aboutLong: string;
  aboutLongAm?: string;
  location: string;
  locationAm?: string;
  availableForHire: boolean;
  availabilityText: string;
  availabilityTextAm?: string;
  avatarUrl: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  codeCommits: number;
  clientSatisfaction: number;
  email: string;
  phone?: string;
  whatsapp?: string;
  socials: SocialLinks;
}

export interface Project {
  id: string;
  title: string;
  titleAm?: string;
  subtitle: string;
  subtitleAm?: string;
  description: string;
  descriptionAm?: string;
  detailedOverview?: string;
  detailedOverviewAm?: string;
  category: 'Websites' | 'Branding' | 'Graphic Design' | 'Video';
  tags: string[];
  techStack: string[];
  image: string;
  videoUrl?: string;
  videoDuration?: string;
  videoPoster?: string;
  isScreenRecording?: boolean;
  isUploadedVideo?: boolean;
  gallery?: string[];
  metrics?: Metric[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures?: string[];
  keyFeaturesAm?: string[];
  challengesSolved?: string[];
  challengesSolvedAm?: string[];
  architecture?: string;
  architectureAm?: string;
}

export interface Skill {
  name: string;
  nameAm?: string;
  level: number; // 0 to 100
  category: SkillCategory;
  experienceYears: string;
  experienceYearsAm?: string;
  highlighted?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleAm?: string;
  company: string;
  companyAm?: string;
  location: string;
  locationAm?: string;
  period: string;
  periodAm?: string;
  current?: boolean;
  summary: string;
  summaryAm?: string;
  achievements: string[];
  achievementsAm?: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeAm?: string;
  school: string;
  schoolAm?: string;
  period: string;
  details: string;
  detailsAm?: string;
  honors?: string;
  honorsAm?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameAm?: string;
  role: string;
  roleAm?: string;
  company: string;
  avatar: string;
  quote: string;
  quoteAm?: string;
  rating: number;
  relationship: string;
  relationshipAm?: string;
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  skills: Skill[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
  testimonials: Testimonial[];
}

export type PersonaPresetKey = 'fullstack' | 'ai_engineer' | 'product_designer' | 'mobile_cloud';

export interface PersonaPreset {
  id: PersonaPresetKey;
  label: string;
  description: string;
  icon: string;
  data: PortfolioData;
}
