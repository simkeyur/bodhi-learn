import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';
import { speech } from '../utils/speech';

export interface PlacedSticker {
  id: string;
  stickerId: string;
  x: number;
  y: number;
}

export type AgeBracket = 'pre-k' | 'kindergarten' | 'grade1';

interface AppContextType {
  stars: number;
  addStars: (count: number) => void;
  unlockedStickers: string[];
  unlockSticker: (stickerId: string, cost: number) => boolean;
  placedStickers: PlacedSticker[];
  placeSticker: (stickerId: string, x: number, y: number) => void;
  removePlacedSticker: (id: string) => void;
  ageBracket: AgeBracket;
  setAgeBracket: (level: AgeBracket) => void;
  kidName: string;
  setKidName: (name: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  speechEnabled: boolean;
  setSpeechEnabled: (enabled: boolean) => void;
  voiceSpeed: number;
  setVoiceSpeed: (speed: number) => void;
  triggerCelebration: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stars, setStars] = useState<number>(() => {
    const saved = localStorage.getItem('bodhi_stars');
    return saved ? parseInt(saved, 10) : 5; // Start with 5 welcome stars!
  });

  const [unlockedStickers, setUnlockedStickers] = useState<string[]>(() => {
    const saved = localStorage.getItem('bodhi_stickers');
    return saved ? JSON.parse(saved) : ['st1']; // Start with Super Star unlocked
  });

  const [placedStickers, setPlacedStickers] = useState<PlacedSticker[]>(() => {
    const saved = localStorage.getItem('bodhi_placed_stickers');
    return saved ? JSON.parse(saved) : [{ id: 'init-1', stickerId: 'st1', x: 50, y: 50 }];
  });

  const [ageBracket, setAgeBracketState] = useState<AgeBracket>(() => {
    const saved = localStorage.getItem('bodhi_age') as AgeBracket;
    return saved || 'kindergarten';
  });

  const [kidName, setKidNameState] = useState<string>(() => {
    return localStorage.getItem('bodhi_kid_name') || 'Bodhi';
  });

  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    const saved = localStorage.getItem('bodhi_sound');
    return saved !== null ? saved === 'true' : true;
  });

  const [speechEnabled, setSpeechEnabledState] = useState<boolean>(() => {
    const saved = localStorage.getItem('bodhi_speech');
    return saved !== null ? saved === 'true' : true;
  });

  const [voiceSpeed, setVoiceSpeedState] = useState<number>(() => {
    const saved = localStorage.getItem('bodhi_voice_speed');
    const parsed = saved ? parseFloat(saved) : 0.82;
    speech.speechRate = parsed;
    return parsed;
  });

  useEffect(() => {
    localStorage.setItem('bodhi_stars', stars.toString());
  }, [stars]);

  useEffect(() => {
    localStorage.setItem('bodhi_stickers', JSON.stringify(unlockedStickers));
  }, [unlockedStickers]);

  useEffect(() => {
    localStorage.setItem('bodhi_placed_stickers', JSON.stringify(placedStickers));
  }, [placedStickers]);

  useEffect(() => {
    localStorage.setItem('bodhi_age', ageBracket);
  }, [ageBracket]);

  useEffect(() => {
    localStorage.setItem('bodhi_kid_name', kidName);
  }, [kidName]);

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    sound.soundEnabled = enabled;
    localStorage.setItem('bodhi_sound', String(enabled));
  };

  const setSpeechEnabled = (enabled: boolean) => {
    setSpeechEnabledState(enabled);
    speech.speechEnabled = enabled;
    localStorage.setItem('bodhi_speech', String(enabled));
  };

  const setVoiceSpeed = (speed: number) => {
    setVoiceSpeedState(speed);
    speech.speechRate = speed;
    localStorage.setItem('bodhi_voice_speed', String(speed));
  };

  const setAgeBracket = (level: AgeBracket) => {
    setAgeBracketState(level);
  };

  const setKidName = (name: string) => {
    setKidNameState(name);
  };

  const triggerCelebration = () => {
    sound.playStarFanfare();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#FBBF24', '#4ADE80', '#FB7185', '#C084FC'],
    });
  };

  const addStars = (count: number) => {
    setStars((prev) => prev + count);
    triggerCelebration();
  };

  const unlockSticker = (stickerId: string, cost: number): boolean => {
    if (stars < cost || unlockedStickers.includes(stickerId)) {
      return false;
    }
    setStars((prev) => prev - cost);
    setUnlockedStickers((prev) => [...prev, stickerId]);
    sound.playSuccess();
    return true;
  };

  const placeSticker = (stickerId: string, x: number, y: number) => {
    const newPlaced: PlacedSticker = {
      id: 'pl-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      stickerId,
      x,
      y,
    };
    setPlacedStickers((prev) => [...prev, newPlaced]);
    sound.playPop(650);
  };

  const removePlacedSticker = (id: string) => {
    setPlacedStickers((prev) => prev.filter((p) => p.id !== id));
    sound.playPop(400);
  };

  return (
    <AppContext.Provider
      value={{
        stars,
        addStars,
        unlockedStickers,
        unlockSticker,
        placedStickers,
        placeSticker,
        removePlacedSticker,
        ageBracket,
        setAgeBracket,
        kidName,
        setKidName,
        soundEnabled,
        setSoundEnabled,
        speechEnabled,
        setSpeechEnabled,
        voiceSpeed,
        setVoiceSpeed,
        triggerCelebration,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
