export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  techStack: string[];
  github?: string;
  demo?: string;
}
