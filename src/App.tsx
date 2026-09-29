import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { HomeHub } from './components/home/HomeHub';
import { PhonicsWorld } from './components/reading/PhonicsWorld';
import { SightWordsWorld } from './components/reading/SightWordsWorld';
import { StoriesWorld } from './components/reading/StoriesWorld';
import { CountingWorld } from './components/math/CountingWorld';
import { VisualMathWorld } from './components/math/VisualMathWorld';
import { StickerBook } from './components/gamification/StickerBook';
import { ParentGateModal } from './components/parent/ParentGateModal';
import { AbcTracingJourney } from './components/tracing/AbcTracingJourney';
import { WordTracingWorld } from './components/tracing/WordTracingWorld';

export const BodhiApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isParentGateOpen, setIsParentGateOpen] = useState<boolean>(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'tracing-abc':
        return (
          <AbcTracingJourney
            onBack={() => setCurrentView('home')}
            onGoToWordTracing={() => setCurrentView('tracing-words')}
          />
        );
      case 'tracing-words':
        return (
          <WordTracingWorld
            onBack={() => setCurrentView('home')}
            onGoToAbcJourney={() => setCurrentView('tracing-abc')}
          />
        );
      case 'phonics':
        return <PhonicsWorld onBack={() => setCurrentView('home')} />;
      case 'sight-words':
        return <SightWordsWorld onBack={() => setCurrentView('home')} />;
      case 'stories':
        return <StoriesWorld onBack={() => setCurrentView('home')} />;
      case 'counting':
        return <CountingWorld onBack={() => setCurrentView('home')} />;
      case 'math':
        return <VisualMathWorld onBack={() => setCurrentView('home')} />;
      case 'stickers':
        return <StickerBook onBack={() => setCurrentView('home')} />;
      case 'reading':
        return <PhonicsWorld onBack={() => setCurrentView('home')} />;
      case 'home':
      default:
        return <HomeHub onSelectView={setCurrentView} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Animated Clouds */}
      <div className="ambient-bg">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>

      {/* Main App Bar */}
      <Header
        currentView={currentView}
        onSelectView={setCurrentView}
        onOpenParentGate={() => setIsParentGateOpen(true)}
      />

      {/* Main Learning Canvas */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1, paddingBottom: 40 }}>
        {renderCurrentView()}
      </main>

      {/* Parent Settings Modal */}
      <ParentGateModal
        isOpen={isParentGateOpen}
        onClose={() => setIsParentGateOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <BodhiApp />
    </AppProvider>
  );
}
