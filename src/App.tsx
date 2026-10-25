import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { OrderItWorld } from './components/puzzles/OrderItWorld';
import { CipherWorld } from './components/puzzles/CipherWorld';
import { LogicGatesWorld } from './components/puzzles/LogicGatesWorld';
import { HanoiWorld } from './components/puzzles/HanoiWorld';
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
import { AbcTracingJourney } from './components/tracing/AbcTracingJourney';
import { WordTracingWorld } from './components/tracing/WordTracingWorld';
import { speech } from './utils/speech';
import { Loader2 } from 'lucide-react';

// Grade 4 and up get Bodhi Prep (Texas test prep) instead of the games; loaded only for them
const PrepApp = lazy(() => import('./prep/PrepApp'));
// The Settings page is shared with Bodhi Prep (and styled like it), so it loads on demand too
const PlaySettings = lazy(() => import('./prep/PlaySettings'));

// Shown while Bodhi Prep downloads (it is a separate file, fetched only for grade 4 and up). It fades in after
// a moment, so a quick load (the usual case once cached) shows no flash at all.
const PrepLoading: React.FC = () => (
  <div role="status" aria-live="polite" className="prep-loading" style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', background: '#F0F9FF' }}>
    <div style={{ display: 'grid', justifyItems: 'center', gap: 14, color: '#3E4560', fontFamily: 'system-ui, sans-serif', fontWeight: 700 }}>
      <Loader2 size={36} className="spin" color="#0284C7" aria-hidden />
      Loading Bodhi Prep…
    </div>
  </div>
);

// The games have no addresses of their own, so each one opened gets a history entry (same address, with the
// game in `history.state`). The browser or phone back button then goes back to the home screen instead of
// leaving the app, and the in-app Home buttons rewind those entries so Back never walks through old games.
interface ViewState { bodhiView: string; depth: number }
const viewState = (): ViewState | null => {
  const s = window.history.state as Partial<ViewState> | null;
  return s && typeof s.bodhiView === 'string' && typeof s.depth === 'number' ? (s as ViewState) : null;
};

export const BodhiApp: React.FC = () => {
  // A reload while in a game comes back to that game
  const [currentView, setCurrentViewState] = useState<string>(() => viewState()?.bodhiView ?? 'home');
  const { ageBand, onboarded, isPrep } = useApp();

  // Lets the CSS give each age band its own look
  useEffect(() => {
    document.documentElement.dataset.band = ageBand;
  }, [ageBand]);

  // Bodhi Prep has its own addresses (/math, /practice/...). The games don't, so leaving Bodhi Prep (a grade
  // changed to 3, say) goes back to the plain address instead of keeping a Bodhi Prep one.
  useEffect(() => {
    if (!isPrep && window.location.pathname !== '/') window.history.replaceState(null, '', '/');
  }, [isPrep]);

  // Back / forward (browser, phone, or the rewinds below) shows whatever game that history entry holds.
  // Only while the games are showing: Bodhi Prep has its own router and scroll handling.
  useEffect(() => {
    if (isPrep) return;
    const onPop = () => {
      // An entry left over from Bodhi Prep (/math, /settings...) is shown as the games' home, at the plain address
      if (window.location.pathname !== '/') window.history.replaceState(null, '', '/');
      speech.stop();
      setCurrentViewState(viewState()?.bodhiView ?? 'home');
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [isPrep]);

  const backHome = () => {
    speech.stop();
    const depth = viewState()?.depth ?? 0;
    if (depth > 0) {
      window.history.go(-depth); // popstate then shows home
    } else {
      setCurrentViewState('home');
      window.scrollTo({ top: 0 });
    }
  };

  const setCurrentView = (view: string) => {
    if (view === 'home') { backHome(); return; }
    speech.stop();
    window.history.pushState({ bodhiView: view, depth: (viewState()?.depth ?? 0) + 1 } satisfies ViewState, '', '/');
    setCurrentViewState(view);
    window.scrollTo({ top: 0 });
  };

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
      case 'order-it':
        return <OrderItWorld onBack={backHome} />;
      case 'cipher-desk':
        return <CipherWorld onBack={backHome} />;
      case 'logic-gates':
        return <LogicGatesWorld onBack={backHome} />;
      case 'hanoi':
        return <HanoiWorld onBack={backHome} />;
      case 'reading':
        return <PhonicsWorld onBack={backHome} />;
      case 'settings':
        return <Suspense fallback={null}><PlaySettings onDone={backHome} /></Suspense>;
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

  if (isPrep) {
    return (
      <Suspense fallback={<PrepLoading />}>
        <PrepApp />
      </Suspense>
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
        onOpenSettings={() => { if (currentView !== 'settings') setCurrentView('settings'); }}
      />

      {/* Main Learning Canvas */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1, paddingBottom: 40 }}>
        {renderCurrentView()}
      </main>
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
