export interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string; // Contextual, e.g., "Internal Marketing Dept"
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: 'cpu' | 'code' | 'barChart';
}
