import React, { useState } from 'react';
import { CHARACTERS, WORLD_REALMS, WORLD_SYSTEMS } from './constants';
import CharacterCard from './components/CharacterCard';
import WorldDiagram from './components/WorldDiagram';
import WorldSectionCard from './components/WorldSectionCard';
import { Scroll, Sword, Users, Info, Cross } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'world' | 'characters'>('world');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Cross className="text-gold-500" size={24} />
              <span className="font-display font-bold text-xl tracking-wider text-slate-100">Hero, The Punishment</span>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveTab('world')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'world' ? 'text-gold-400 bg-slate-900' : 'text-slate-400 hover:text-white'}`}
              >
                세계관 (World)
              </button>
              <button 
                onClick={() => setActiveTab('characters')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'characters' ? 'text-gold-400 bg-slate-900' : 'text-slate-400 hover:text-white'}`}
              >
                인물 (Characters)
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 lg:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/fortress/1920/1080')] bg-cover bg-center opacity-20 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold-500 tracking-[0.3em] text-sm uppercase mb-4 font-semibold">Hero is Punishment</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            징벌용사 생존기
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-serif leading-relaxed">
            죽음마저 초월해 끝없이 싸우는 형벌, 용사형에 처해지다
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        
        {activeTab === 'world' && (
          <div className="animate-fade-in space-y-16">
            
            {/* Realms - Diagram View */}
            <section>
              <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-4">
                <Scroll className="text-gold-500" />
                <h2 className="text-3xl font-display font-bold text-slate-100">세계 구조</h2>
              </div>
              
              <WorldDiagram realms={WORLD_REALMS} />
              
            </section>

            {/* Systems */}
            <section>
              <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                <Info className="text-gold-500" />
                <h2 className="text-3xl font-display font-bold text-slate-100">시스템</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {WORLD_SYSTEMS.map((section, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-gold-600/30 transition-colors">
                    <h3 className="text-xl font-serif font-bold text-gold-500 mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((line, liIdx) => (
                        <li key={liIdx} className="text-sm text-slate-400 leading-relaxed list-disc list-inside marker:text-slate-600">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'characters' && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between gap-3 mb-8 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <Users className="text-gold-500" />
                <h2 className="text-3xl font-display font-bold text-slate-100">주요 인물</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {CHARACTERS.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Sword className="mx-auto text-slate-700 mb-4" size={32} />
          <p className="text-slate-500 text-sm font-serif">
            &copy; 2024 Punishment Hero Survival Archives. All records are confidential to the Order.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-slate-600">
             <span>교단 승인 완료</span>
             <span>•</span>
             <span>기밀 등급: 1급</span>
             <span>•</span>
             <span>열람자: {`{User}`}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;