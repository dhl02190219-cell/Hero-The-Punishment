import React from 'react';
import { WorldSection } from '../types';
import { Map, BookOpen } from 'lucide-react';

interface WorldSectionCardProps {
  data: WorldSection;
  index: number;
}

const WorldSectionCard: React.FC<WorldSectionCardProps> = ({ data, index }) => {
  const isRight = index % 2 !== 0;

  return (
    <div className={`flex flex-col md:flex-row gap-6 items-center p-6 bg-slate-800/30 border border-slate-700 rounded-lg mb-8 hover:bg-slate-800/50 transition-colors ${isRight ? 'md:flex-row-reverse' : ''}`}>
      <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border border-gold-600/30 text-gold-500 shadow-lg">
        {data.type === 'realm' ? <Map size={28} /> : <BookOpen size={28} />}
      </div>
      <div className={`flex-1 text-center ${isRight ? 'md:text-right' : 'md:text-left'}`}>
        <h3 className="text-xl font-serif font-bold text-slate-100 mb-3 border-b border-slate-700 pb-2 inline-block">
          {data.title}
        </h3>
        <ul className="space-y-2">
          {data.content.map((line, idx) => (
            <li key={idx} className="text-slate-400 text-sm leading-relaxed">
              {line.startsWith('[') ? (
                 <span className="font-semibold text-slate-300">{line}</span>
              ) : (
                line
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorldSectionCard;