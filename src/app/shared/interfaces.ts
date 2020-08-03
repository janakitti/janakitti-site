export interface LinkItem {
  name: string;
  color: string;
  link: string;
}

export interface ProgressItems {
  name: string;
  percentage: number;
  color1: string;
  color2: string;
}

export interface SkillItem {
  name: string;
}

export interface FeaturedItem {
  title: string;
  description: string;
  image: string;
  color1: string;
  color2: string;
  progress: number;
}

export interface ResumeProject {
  title: string;
  date: string;
  tech: string[];
  description: string[];
  link: string;
  image: string;
}

export interface ResumeExperience {
  organization: string;
  position: string;
  date: string;
  location: string;
  description: string[];
}

export interface ResumeAchievement {
  title: string;
  date: string;
  description: string;
}

export interface ResumePortfolio {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  link: string;
  image: string;
}

export interface Resume {
  projects: ResumeProject[];
  experiences: ResumeExperience[];
  achievements: ResumeAchievement[];
  portfolios: ResumePortfolio[];
}

export interface Achievement {
  title: string;
  date: string;
}
