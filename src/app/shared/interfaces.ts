export interface ProgressItems {
  name: string;
  percentage: number;
  color1: string;
  color2: string;
}

export interface SkillItem {
  name: string;
  color: string;
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
}

export interface ResumeExperience {
  organization: string;
  position: string;
  date: string;
  location: string;
  description: string[];
}

export interface Resume {
  projects: ResumeProject[];
  experiences: ResumeExperience[];
}

export interface Achievement {
  title: string;
  date: string;
}
