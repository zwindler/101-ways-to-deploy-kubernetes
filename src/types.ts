/** Shape of a single solution entry from data/solutions.yaml */
export interface Solution {
  name: string;
  category: string;
  url: string;
  icon_url?: string;
  icon_background_color?: 'light' | 'dark';
  publisher?: string;
  description?: string;
  license?: string;
  open_source?: boolean;
  based_on?: string[];
  tags?: string[];
  cloud_providers?: string[];
  abandoned?: boolean;
  production_ready?: boolean;
  stars?: number;
  references?: Reference[];
}

export interface Reference {
  title: string;
  description?: string;
  language: string;
  url: string;
  type: string;
}
