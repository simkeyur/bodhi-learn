import React, { useEffect, useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Home } from './components/home/Home';
import { SubjectPage } from './components/home/SubjectPage';
import { QuizWorld } from './components/quiz/QuizWorld';
import { SUBJECT_ORDER, subjectOfView } from './data/subjects';
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
  const { ageBand } = useApp();

  // Lets the CSS give each age band its own look
  useEffect(() => {
    document.documentElement.dataset.band = ageBand;
  }, [ageBand]);

  const setCurrentView = (view: string) => {
    speech.stop();
    setCurrentViewState(view);
    window.scrollTo({ top: 0 });
  };

  // Games go back to the subject they belong to; everything else goes home
  const backFor = (view: string) => {
    const subject = subjectOfView(view);
    return () => setCurrentView(subject && view !== `subject:${subject}` ? `subject:${subject}` : 'home');
  };

  const renderCurrentView = () => {
    const [kind, id] = currentView.split(':');
    if ((kind === 'subject' || kind === 'quiz') && SUBJECT_ORDER.includes(id as never)) {
      return kind === 'subject'
        ? <SubjectPage subject={id as never} onSelectView={setCurrentView} onBack={backFor(currentView)} />
        : <QuizWorld subject={id as never} onBack={backFor(currentView)} />;
    }
    switch (currentView) {
      case 'tracing-abc':
        return (
          <AbcTracingJourney
            onBack={backFor(currentView)}
            onGoToWordTracing={() => setCurrentView('tracing-words')}
          />
        );
      case 'tracing-words':
        return (
          <WordTracingWorld
            onBack={backFor(currentView)}
            onGoToAbcJourney={() => setCurrentView('tracing-abc')}
          />
        );
      case 'phonics':
        return <PhonicsWorld onBack={backFor(currentView)} />;
      case 'sight-words':
        return <SightWordsWorld onBack={backFor(currentView)} />;
      case 'code-bot':
        return <CodeBotWorld onBack={backFor(currentView)} />;
      case 'patterns':
        return <PatternWorld onBack={backFor(currentView)} />;
      case 'machine':
        return <MachineWorld onBack={backFor(currentView)} />;
      case 'slide-read':
        return <SlideReadWorld onBack={backFor(currentView)} />;
      case 'stories':
        return <StoriesWorld onBack={backFor(currentView)} />;
      case 'counting':
        return <CountingWorld onBack={backFor(currentView)} />;
      case 'math':
        return <VisualMathWorld onBack={backFor(currentView)} />;
      case 'stickers':
        return <StickerBook onBack={backFor(currentView)} />;
      case 'reading':
        return <PhonicsWorld onBack={backFor(currentView)} />;
      case 'home':
      default:
        return <Home onSelectView={setCurrentView} />;
    }
  };

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
