import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useApp } from '../../../context/AppContext';
import { hasPrep, MAX_AGE, MAX_GRADE, MIN_AGE, MIN_GRADE, PREP_MIN_GRADE, PREP_START_GRADE } from '../../../firebase/schema';
import { learner, useLearner } from '../../learner/store';
import { useConfirm } from '../../ui/useConfirm';
import '../screens.css';

const GRADES = Array.from({ length: MAX_GRADE - MIN_GRADE + 1 }, (_, i) => MIN_GRADE + i);
const AGES = Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => MIN_AGE + i);
const SPEEDS = [
  { speed: 0.75, label: 'Slow' },
  { speed: 0.85, label: 'Gentle' },
  { speed: 1.0, label: 'Brisk' },
];

const SYNC_TEXT: Record<string, string> = {
  connecting: 'Connecting…',
  saving: 'Saving…',
  saved: 'Saved to your account.',
  offline: 'Offline. Changes will sync when you are back online.',
  error: "Couldn't save to your account.",
};

// The one Settings page, for Bodhi Prep (its /settings route) and Bodhi Play (shown as a page, see PlaySettings).
// Name, age and grade are the shared profile. Two columns on laptops so it fits on one screen.
export function Settings({ app, onDone }: { app: 'play' | 'prep'; onDone?: () => void }) {
  const { kidName, setKidName, age, setAge, grade, setGrade, setMode, canPrep, speechEnabled, setSpeechEnabled, voiceSpeed, setVoiceSpeed, cloud } = useApp();
  const { skills } = useLearner();
  const [dialog, confirm] = useConfirm();
  const [name, setName] = useState(kidName);
  const [busy, setBusy] = useState(false);
  const practiced = Object.keys(skills).length;

  // Load the sign-in code now so the Google popup opens straight from the click
  const { preload } = cloud;
  useEffect(() => { preload(); }, [preload]);

  // The name saves as you leave the box or press Enter: no separate Save button
  const saveName = () => {
    const next = name.trim().slice(0, 40);
    if (next && next !== kidName) setKidName(next);
    else setName(kidName);
  };

  // In Bodhi Prep, a change that takes Prep away (kindergarten age) asks first, and any other change stays in
  // Prep, even for grades 1–3, which would otherwise open in Bodhi Play
  const change = async (nextAge: number, nextGrade: number, apply: () => void) => {
    if (app === 'play') { apply(); return; }
    const stays = hasPrep(nextAge, nextGrade);
    if (!stays && !(await confirm({
      title: 'Switch to Bodhi Play?',
      body: `Bodhi Prep is for grade ${PREP_MIN_GRADE} and up. With this change, the app shows Bodhi Play instead. Bodhi Prep progress is kept.`,
      action: 'Switch',
    }))) return;
    apply();
    if (stays) setMode('prep');
  };

  const pickGrade = (g: number) => change(age, g, () => setGrade(g));
  const pickAge = (a: number) => change(a, grade ?? 0, () => setAge(a));

  const signOut = async () => {
    const ok = await confirm({
      title: 'Sign out?',
      body: 'This device forgets the profile and progress. Everything saved to the account comes back when you sign in again. Bodhi Prep progress on this device is not saved to the account yet, so it is cleared.',
      action: 'Sign out',
    });
    if (ok) await cloud.signOut();
  };

  const deleteAccount = async () => {
    const ok = await confirm({
      title: 'Delete the account?',
      body: 'This permanently deletes the account and everything saved to it. It cannot be undone.',
      action: 'Delete account', danger: true,
    });
    if (ok) await cloud.deleteAccount();
  };

  return (
    <div className="page settings">
      <div className="page-head">
        <h1>Settings</h1>
        {onDone && <button type="button" className="btn btn-primary" onClick={() => { saveName(); onDone(); }}>Done</button>}
      </div>

      <div className="settings-grid">
        <section className="card card-pad settings-section" aria-labelledby="profile-title">
          <h2 id="profile-title">Profile</h2>
          <div className="field">
            <label htmlFor="name">First name</label>
            <input
              id="name" className="input" value={name} maxLength={40} autoComplete="given-name"
              onChange={(e) => setName(e.target.value)}
              onBlur={saveName}
              onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
            />
          </div>
          <fieldset className="field choice-field">
            <legend className="field-label">Age</legend>
            <div className="pick-row">
              {AGES.map((a) => (
                <button key={a} type="button" className={`btn btn-sm ${age === a ? 'btn-primary' : 'btn-secondary'}`} aria-pressed={age === a} onClick={() => void pickAge(a)}>
                  {a}
                </button>
              ))}
            </div>
          </fieldset>
          {grade !== null && (
            <fieldset className="field choice-field">
              <legend className="field-label">Grade</legend>
              <div className="pick-row">
                {GRADES.map((g) => (
                  <button key={g} type="button" className={`btn btn-sm ${grade === g ? 'btn-primary' : 'btn-secondary'}`} aria-pressed={grade === g} onClick={() => void pickGrade(g)}>
                    {g}
                  </button>
                ))}
              </div>
              <span className="field-hint">
                Bodhi Prep (Texas test practice) is for grade {PREP_MIN_GRADE} and up. From grade {PREP_START_GRADE} the app opens in Prep.
              </span>
            </fieldset>
          )}
        </section>

        <div className="settings-col">
          <section className="card card-pad settings-section" aria-labelledby="account-title">
            <h2 id="account-title">Account</h2>
            {!cloud.authReady && <p className="page-sub"><Loader2 size={16} className="spin" aria-hidden /> Checking the account…</p>}
            {cloud.authReady && !cloud.user && (
              <>
                <p className="page-sub">Sign in with Google to keep progress safe on every device.</p>
                <div className="settings-actions">
                  <button type="button" className="btn btn-secondary" disabled={busy} onClick={async () => { setBusy(true); await cloud.signIn(); setBusy(false); }}>
                    {busy && <Loader2 size={16} className="spin" aria-hidden />} Sign in with Google
                  </button>
                </div>
              </>
            )}
            {cloud.authReady && cloud.user && (
              <>
                <p>Signed in as <b>{cloud.user.email || cloud.user.name}</b>.</p>
                {SYNC_TEXT[cloud.status] && <p className="field-hint" role="status">{SYNC_TEXT[cloud.status]}</p>}
                <div className="settings-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => void signOut()}>Sign out</button>
                  <button type="button" className="btn btn-danger" onClick={() => void deleteAccount()}>Delete account</button>
                </div>
              </>
            )}
            {cloud.error && <p role="alert" className="field-error">{cloud.error}</p>}
            {canPrep && (
              <div className="settings-sub">
                <span className="field-hint">Bodhi Prep progress is saved in this browser for now.</span>
                <button type="button" className="btn btn-sm btn-danger" disabled={!practiced} onClick={async () => {
                  if (await confirm({ title: 'Reset Bodhi Prep progress?', body: 'Mastery for every skill and the streak start over. This cannot be undone.', action: 'Reset progress', danger: true })) learner.resetProgress();
                }}>Reset Prep progress</button>
              </div>
            )}
          </section>

          {app === 'play' && (
            <section className="card card-pad settings-section" aria-labelledby="voice-title">
              <h2 id="voice-title">Voice</h2>
              <label className="settings-toggle">
                <input type="checkbox" checked={speechEnabled} onChange={(e) => setSpeechEnabled(e.target.checked)} />
                <span>Read words and questions aloud</span>
              </label>
              <fieldset className="field choice-field" disabled={!speechEnabled}>
                <legend className="field-label">Speed</legend>
                <div className="pick-row">
                  {SPEEDS.map((s) => {
                    const on = Math.abs(voiceSpeed - s.speed) < 0.05;
                    return (
                      <button key={s.speed} type="button" className={`btn btn-sm ${on ? 'btn-primary' : 'btn-secondary'}`} aria-pressed={on} onClick={() => setVoiceSpeed(s.speed)}>
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </section>
          )}

        </div>
      </div>


      {dialog}
    </div>
  );
}
