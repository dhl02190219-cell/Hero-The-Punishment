import React, { useState } from 'react';
import { WorldSection } from '../types';
import { Trees, Globe, Flame, Shield, X } from 'lucide-react';

interface WorldDiagramProps {
  realms: WorldSection[];
}

const WorldDiagram: React.FC<WorldDiagramProps> = ({ realms }) => {
  const [showFortressInfo, setShowFortressInfo] = useState(false);

  // Mapping based on index in constants.ts
  const humanRealm = realms[0];
  const middleRealm = realms[1];
  const demonRealm = realms[2];
  const fortress = realms[3];

  return (
    <div className="w-full py-8">
      {/* Desktop Diagram Container */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-0 relative">
        
        {/* Human Realm (Left Circle) */}
        <div className="relative z-10 w-full max-w-sm shrink-0">
          <div className="aspect-square rounded-full border-4 border-blue-900/50 bg-slate-900 shadow-[0_0_50px_rgba(30,58,138,0.2)] flex flex-col items-center justify-center text-center p-8 hover:border-blue-500 transition-colors duration-500 group">
            <Globe className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-2xl font-display font-bold text-blue-100 mb-4">{humanRealm.title.split('(')[0]}</h3>
            <ul className="text-sm text-slate-400 space-y-1">
              <li className="line-clamp-2">{humanRealm.content[0]}</li>
              <li className="text-xs text-slate-500">{humanRealm.content[1]}</li>
            </ul>
          </div>
        </div>

        {/* Connector - Middle Realm (The Bridge) */}
        <div className="relative flex-1 w-full xl:h-32 xl:-mx-8 my-4 xl:my-0 flex flex-col xl:flex-row items-center justify-center">
          
          {/* Vertical Line for Mobile / Horizontal for Desktop */}
          <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-blue-900/20 via-emerald-900/40 to-red-900/20 rounded-full border border-slate-800 xl:border-x-0 hidden xl:block"></div>
          
          {/* Mobile Connector */}
          <div className="h-16 w-1 bg-slate-700 block xl:hidden"></div>

          {/* Fortress Node (Clickable Shield) */}
          <div className="relative z-20 xl:absolute xl:left-[10%] xl:top-1/2 xl:-translate-y-1/2">
            <button 
              onClick={() => setShowFortressInfo(true)}
              className="bg-slate-900 border-2 border-gold-600 rounded-full p-4 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:bg-gold-600 hover:text-slate-900 text-gold-500 transition-all hover:scale-110 active:scale-95 group relative"
              aria-label="View Fortress Info"
            >
               <Shield size={28} />
               <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                 신탁의 요새
               </span>
            </button>

            {/* Fortress Info Modal/Popover */}
            {showFortressInfo && (
              <>
                <div 
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden" 
                  onClick={() => setShowFortressInfo(false)}
                />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 md:w-80 bg-slate-900/95 border border-gold-500/50 rounded-xl p-5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-gold-500">
                      <Shield size={18} />
                      <h4 className="font-display font-bold text-slate-100">{fortress.title.split('(')[0]}</h4>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); setShowFortressInfo(false); }} className="text-slate-500 hover:text-white">
                      <X size={16} />
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {fortress.content.map((line, idx) => (
                      <li key={idx} className="text-sm text-slate-300 leading-relaxed text-left">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

           {/* Mobile Connector */}
           <div className="h-16 w-1 bg-slate-700 block xl:hidden"></div>

          {/* Middle Realm Label/Area */}
          <div className="relative z-10 bg-emerald-950/80 border border-emerald-800/50 rounded-lg p-4 px-8 text-center backdrop-blur-sm max-w-xs mx-auto xl:mx-0 xl:translate-x-8">
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
               <Trees size={20} />
               <h4 className="font-display font-bold">중간계</h4>
            </div>
            <p className="text-xs text-emerald-200/70">
              {middleRealm.content[1]}
            </p>
          </div>

           {/* Mobile Connector */}
           <div className="h-16 w-1 bg-slate-700 block xl:hidden"></div>

        </div>

        {/* Demon Realm (Right Circle) */}
        <div className="relative z-10 w-full max-w-sm shrink-0">
          <div className="aspect-square rounded-full border-4 border-red-900/50 bg-slate-900 shadow-[0_0_50px_rgba(153,27,27,0.2)] flex flex-col items-center justify-center text-center p-8 hover:border-red-600 transition-colors duration-500 group">
            <Flame className="text-red-500 mb-6 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-2xl font-display font-bold text-red-100 mb-4">{demonRealm.title.split('(')[0]}</h3>
             <ul className="text-sm text-slate-400 space-y-1">
              <li className="line-clamp-2">{demonRealm.content[0]}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorldDiagram;