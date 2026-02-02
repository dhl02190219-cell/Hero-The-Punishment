import React from 'react';
import { Character } from '../types';
import { Sparkles, Skull, Shield, Sword, User } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const isGoddess = character.role.includes('여신');
  const isKnight = character.role.includes('기사단장');
  
  // Dynamic border color based on role
  let borderColor = 'border-slate-700';
  let badgeColor = 'bg-slate-700 text-slate-300';
  let Icon = Skull;

  if (isGoddess) {
    borderColor = 'border-gold-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]';
    badgeColor = 'bg-gold-500/20 text-gold-400 border border-gold-500/50';
    Icon = Sparkles;
  } else if (isKnight) {
    borderColor = 'border-blue-800';
    badgeColor = 'bg-blue-900/40 text-blue-300 border border-blue-700/50';
    Icon = Shield;
  } else if (character.miracle === '없음 (공병)') {
      Icon = User;
  } else {
      Icon = Sword;
  }

  return (
    <div className={`relative group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border ${borderColor} transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800`}>
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
        <img 
          src={character.imageUrl} 
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
            {character.name}
            {character.mbti && <span className="text-xs font-sans font-normal opacity-60 bg-black/50 px-1.5 py-0.5 rounded">{character.mbti}</span>}
          </h3>
          <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full mt-1 ${badgeColor}`}>
            <Icon size={12} />
            {character.role}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-0.5">Miracle / Ability</p>
          <p className="text-gold-400 font-serif">{character.miracle}</p>
        </div>

        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Traits</p>
          <div className="flex flex-wrap gap-1.5">
            {character.features.map((feature, idx) => (
              <span key={idx} className="text-xs bg-slate-900/80 text-slate-300 px-2 py-1 rounded border border-slate-700/50">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-700/50">
          <p className="text-sm text-slate-400 leading-relaxed break-keep">
            {character.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;