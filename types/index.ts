export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  clientProblem: string;
  solution: string;
  liveUrl?: string;
  isExternal: boolean;
  deliverables: string[];
  theme: 'light' | 'dark';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  scope: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  deliverables: string;
}

export interface StudioPrinciple {
  number: string;
  title: string;
  explanation: string;
}
