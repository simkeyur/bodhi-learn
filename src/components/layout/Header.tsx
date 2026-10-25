import React from 'react';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import { hasStickers } from '../../data/subjects';
import { AppBar, BrandMark, ProfileMark } from './AppBar';
import { ModeSwitch } from './ModeSwitch';

interface HeaderProps {
  onSelectView: (view: string) => void;
  onOpenSettings: () => void;
}

// Bodhi Play's header: the shared bar with stars and the sound button. Tapping the name opens Settings.
export const Header: React.FC<HeaderProps> = ({ onSelectView, onOpenSettings }) => {
  const { stars, soundEnabled, setSoundEnabled, age, grade, kidName } = useApp();

  const go = (view: string) => {
    sound.playPop();
    onSelectView(view);
  };

  const starsLabel = `${stars} stars`;

  return (
    <AppBar brand={<button type="button" className="bh-brand" onClick={() => go('home')} aria-label="Bodhi Play home"><BrandMark app="Play" /></button>}>
      <span className="bh-wide"><ModeSwitch /></span>
      <span className="bh-compact"><ModeSwitch compact /></span>

      {/* Only the youngest children have a sticker book to open; for everyone else stars are just a score */}
      {hasStickers(age) ? (
        <button type="button" className="bh-pill" onClick={() => go('stickers')} aria-label={`${starsLabel}. Open sticker book`}>
          <Sparkles size={18} color="#D97706" aria-hidden /> {stars}
        </button>
      ) : (
        <span className="bh-pill" role="img" aria-label={starsLabel}><Sparkles size={18} color="#D97706" aria-hidden /> {stars}</span>
      )}

      <button
        type="button"
        className="bh-icon-btn"
        onClick={() => {
          const next = !soundEnabled;
          setSoundEnabled(next);
          if (next) sound.playPop(700);
        }}
        aria-label={soundEnabled ? 'Turn sound off' : 'Turn sound on'}
        aria-pressed={!soundEnabled}
      >
        {soundEnabled ? <Volume2 size={20} aria-hidden /> : <VolumeX size={20} aria-hidden />}
      </button>

      <button type="button" className="bh-who" onClick={() => { sound.playPop(); onOpenSettings(); }} aria-label={`Settings for ${kidName}`}>
        <ProfileMark name={kidName} detail={grade !== null ? `Grade ${grade}` : `Age ${age}`} />
      </button>
    </AppBar>
  );
};
