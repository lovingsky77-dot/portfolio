export interface ProjectCase {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  company: string;
  badge: string;
  problem: string;
  cause: string;
  aiApproach: string;
  execution: string[];
  tools: string[];
  outputs: string[];
  quantitativeOutcome: string;
  qualitativeOutcome: string;
  myContribution: string;
  learnings: string;
  scalability: string;
}

export interface CapabilityCard {
  id: string;
  title: string;
  titleEn: string;
  step: 'Problem Def' | 'Structure' | 'AI & Automation' | 'Validation & Scale';
  description: string;
  context: string;
  relatedCaseId?: string;
  iconName: string;
}

export interface CareerItem {
  company: string;
  companyEn: string;
  role: string;
  period: string;
  duration: string;
  companyMeta: string;
  keyResponsibilities: string[];
  problemSolved: string;
  changeCreated: string;
  capabilitiesGained: string;
  nextStepConnection: string;
}

export interface SkillCategory {
  category: string;
  categoryEn: string;
  items: {
    name: string;
    description: string;
  }[];
}

export interface BeforeAfterItem {
  category: string;
  before: string;
  after: string;
  benefit: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  status: 'Ready' | 'Coming Soon';
  tags: string[];
}
