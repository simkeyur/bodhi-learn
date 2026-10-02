import React, { useEffect, useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Welcome } from './components/onboarding/Welcome';
import { Home } from './components/home/Home';
import { QuizWorld } from './components/quiz/QuizWorld';
import { gameById } from './data/quizGames';
import { useApp } from './context/AppContext';
import { PhonicsWorld } from './components/reading/PhonicsWorld';
import { SightWordsWorld } from './components/reading/SightWordsWorld';
import { StoriesWorld } from './components/reading/StoriesWorld';
import { SlideReadWorld } from './components/reading/SlideReadWorld';
import { CodeBotWorld } from './components/logic/CodeBotWorld';
import { PatternWorld } from './components/logic/PatternWorld';
import { MachineWorld } from './components/logic/MachineWorld';
import { CountingWorld } from './components/math/CountingWorld';
import { VisualMathWorld } from './components/math/VisualMathWorld';
import { StickerBook } from './components/gamification/StickerBook';
import { ParentGateModal } from './components/parent/ParentGateModal';
import { AbcTracingJourney } from './components/tracing/AbcTracingJourney';
import { WordTracingWorld } from './components/tracing/WordTracingWorld';
import { speech } from './utils/speech';

export const BodhiApp: React.FC = () => {
  const [currentView, setCurrentViewState] = useState<string>('home');
  const [isParentGateOpen, setIsParentGateOpen] = useState<boolean>(false);
  const { ageBand, onboarded } = useApp();

  // Lets the CSS give each age band its own look
  useEffect(() => {
    document.documentElement.dataset.band = ageBand;
  }, [ageBand]);

  const setCurrentView = (view: string) => {
    speech.stop();
    setCurrentViewState(view);
    window.scrollTo({ top: 0 });
  };

  const backHome = () => setCurrentView('home');

  const renderCurrentView = () => {
    const [kind, id] = currentView.split(':');
    const quizGame = kind === 'play' ? gameById(id) : undefined;
    if (quizGame) {
      // key: moving between games must start a fresh game, not reuse the previous one's state
      return <QuizWorld key={quizGame.id} game={quizGame} onBack={backHome} />;
    }
    switch (currentView) {
      case 'tracing-abc':
        return (
          <AbcTracingJourney
            onBack={backHome}
            onGoToWordTracing={() => setCurrentView('tracing-words')}
          />
        );
      case 'tracing-words':
        return (
          <WordTracingWorld
            onBack={backHome}
            onGoToAbcJourney={() => setCurrentView('tracing-abc')}
          />
        );
      case 'phonics':
        return <PhonicsWorld onBack={backHome} />;
      case 'sight-words':
        return <SightWordsWorld onBack={backHome} />;
      case 'code-bot':
        return <CodeBotWorld onBack={backHome} />;
      case 'patterns':
        return <PatternWorld onBack={backHome} />;
      case 'machine':
        return <MachineWorld onBack={backHome} />;
      case 'slide-read':
        return <SlideReadWorld onBack={backHome} />;
      case 'stories':
        return <StoriesWorld onBack={backHome} />;
      case 'counting':
        return <CountingWorld onBack={backHome} />;
      case 'math':
        return <VisualMathWorld onBack={backHome} />;
      case 'stickers':
        return <StickerBook onBack={backHome} />;
      case 'reading':
        return <PhonicsWorld onBack={backHome} />;
      case 'home':
      default:
        return <Home onSelectView={setCurrentView} />;
    }
  };

  // A new visitor is asked their age (and name) before anything else is shown
  if (!onboarded) {
    return (
      <>
        <div className="ambient-bg">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
        </div>
        <Welcome />
      </>
    );
  }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Animated Clouds */}
      <div className="ambient-bg">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>

      {/* Main App Bar */}
      <Header
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
