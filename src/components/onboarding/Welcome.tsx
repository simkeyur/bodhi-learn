import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MAX_AGE, MIN_AGE } from '../../firebase/schema';
import { sound } from '../../utils/sound';
import './welcome.css';

// Ages from this one up are offered a sign-in so progress is kept in the cloud from the first launch.
// Younger children go straight in as a guest; a parent can still sign in later from Parent Settings.
const SIGN_IN_FROM_AGE = 8;

type Step = 'age' | 'account' | 'name';

const AGE_COLORS = ['#FB7185', '#F59E0B', '#4ADE80', '#38BDF8', '#C084FC', '#14B8A6', '#F97316', '#818CF8', '#EC4899', '#0EA5E9', '#10B981'];

const firstName = (full: string | undefined) => (full ?? '').trim().split(/\s+/)[0] ?? '';

// Shown to a new visitor before anything else: nothing about the child is assumed.
export const Welcome: React.FC = () => {
  const { age, setAge, completeOnboarding, cloud } = useApp();
  const [picked, setPicked] = useState<number | null>(null);
  const [step, setStep] = useState<Step>('age');
  const [typedName, setTypedName] = useState<string | null>(null);

  // Load the sign-in SDK ahead of the tap so the Google popup opens inside the click
  useEffect(() => {
    if (step === 'account') cloud.preload();
  }, [step, cloud]);

  // Signed in to a brand-new account: carry on to the name. (An account with saved progress
  // makes the app skip this screen entirely.)
  const settled = !!cloud.user && cloud.status === 'saved' && !cloud.restored;
  const shownStep: Step = step === 'account' && settled ? 'name' : step;
  const waiting = step === 'account' && !!cloud.user && !settled;

  const chooseAge = (a: number) => {
    sound.playPop();
    setPicked(a);
    setAge(a);
    setStep(a >= SIGN_IN_FROM_AGE && !cloud.user ? 'account' : 'name');
  };

  const name = typedName ?? firstName(cloud.user?.name);

  return (
    <div className="welcome">
      <div className="welcome-card">
        <div className="welcome-buddy animate-bob" aria-hidden>🐻</div>

        {shownStep === 'age' && (
          <>
            <h1>Hi! I'm Buddy.</h1>
            <p className="welcome-q">How old are you?</p>
            <div className="welcome-ages" role="group" aria-label="Choose your age">
              {Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => MIN_AGE + i).map((a, i) => (
                <button
                  key={a}
                  className="welcome-age"
                  style={{ '--c': AGE_COLORS[i % AGE_COLORS.length] } as React.CSSProperties}
                  onClick={() => chooseAge(a)}
                  aria-label={`${a} years old`}
                >
                  {a}
                </button>
              ))}
            </div>
            <p className="welcome-note">This picks the right activities and questions for you.</p>
          </>
        )}

        {shownStep === 'account' && (
          <>
            <h1>Save your progress?</h1>
            <p className="welcome-sub">
              Sign in with Google and your stars, stickers and levels follow you to every device.
            </p>
            <button
              className="welcome-primary"
              onClick={() => { sound.playPop(); void cloud.signIn(); }}
              disabled={waiting}
            >
              {waiting ? 'Setting up your account…' : 'Continue with Google'}
            </button>
            <button className="welcome-secondary" onClick={() => { sound.playPop(); setStep('name'); }} disabled={waiting}>
              Play as guest
            </button>
            <p className="welcome-note">As a guest, progress stays on this device. You can sign in later from Parent Settings.</p>
            {cloud.error && <p className="welcome-error" role="alert">{cloud.error}</p>}
          </>
        )}

        {shownStep === 'name' && (
          <>
            <h1>What should I call you?</h1>
            <form
              className="welcome-form"
              onSubmit={(e) => {
                e.preventDefault();
                sound.playSuccess();
                completeOnboarding(name);
              }}
            >
              <input
                className="welcome-input"
                value={name}
                onChange={(e) => setTypedName(e.target.value)}
                maxLength={40}
                placeholder="Your name"
                aria-label="Your name"
                autoFocus
                autoComplete="given-name"
              />
              <button className="welcome-primary" type="submit">Let's go! 🚀</button>
              <button className="welcome-secondary" type="button" onClick={() => completeOnboarding('')}>Skip</button>
            </form>
          </>
        )}

        {shownStep !== 'age' && !waiting && (
          <button className="welcome-back" onClick={() => { sound.playPop(); setStep('age'); }} aria-label="Change age">
            <ArrowLeft size={16} /> Age {picked ?? age}
          </button>
        )}
      </div>
    </div>
  );
};
