export type ProjectCategory = 'all' | 'reels' | 'saas' | 'blender' | 'youtube';

export interface Project {
  id: string;
  title: string;
  category: 'reels' | 'saas' | 'blender' | 'youtube';
  categoryLabel: string;
  client: string;
  clientType: 'Бренд' | 'Блогер' | 'SaaS Стартап' | 'Бизнес';
  aspectRatio: '9:16' | '16:9';
  duration: string;
  viewsMetric?: string;
  description: string;
  highlights: string[];
  software: ('After Effects' | 'Premiere Pro' | 'Blender')[];
  thumbnailUrl: string;
  videoUrl?: string; // Direct video, embed or simulation
  driveUrl?: string; // Original video file on Google Drive
  driveFileId?: string;
  sizeMb?: number;
  soundDesignIncluded: boolean;
  hasColorGradeComparison?: boolean;
  colorGradeBefore?: string;
  colorGradeAfter?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stats: string;
  text: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  points: string[];
  software: ('After Effects' | 'Premiere Pro' | 'Blender')[];
  timeline: string;
  recommendedFor: string;
}
