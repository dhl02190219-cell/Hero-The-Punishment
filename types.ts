export interface Character {
  id: string;
  name: string;
  role: string; // Identity or Crime
  miracle: string; // Miracle or Ability
  mbti?: string;
  gender: string;
  features: string[];
  description: string;
  imageUrl: string;
  isSpecial?: boolean; // For the Goddess or special NPCs
}

export interface WorldSection {
  title: string;
  content: string[];
  type: 'realm' | 'system';
}