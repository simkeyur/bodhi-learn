import { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import { MAX_GRADE, MIN_GRADE, PREP_MIN_GRADE } from '../../../firebase/schema';
import { ParentGateModal } from '../../../components/parent/ParentGateModal';
import { DISCLAIMER, OFFICIAL_PRACTICE_URL } from '../../app/brand';
import { learner, useLearner } from '../../learner/store';
import '../screens.css';

const GRADES = Array.from({ length: MAX_GRADE - MIN_GRADE + 1 }, (_, i) => MIN_GRADE + i);

// Name and grade live in the Bodhi Learn profile; age, sign-in and sounds are in Bodhi's settings panel
export function Settings() {
  const { kidName, setKidName, grade, setGrade, cloud } = useApp();
  const { skills } = useLearner();
  const [name, setName] = useState(kidName);
  const [saved, setSaved] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const practiced = Object.keys(skills).length;

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setKidName(name.trim().slice(0, 40));
    setSaved(true);
  };

  const pickGrade = (g: number) => {
    if (g < PREP_MIN_GRADE && !window.confirm(`Grade ${g} uses the Bodhi games instead of test prep. Switch?`)) return;
    setGrade(g);
  };

  return (
    <div className="page settings">
      <div className="page-head"><h1>Settings</h1></div>

      <form className="card card-pad settings-section" onSubmit={save}>
        <h2>Profile</h2>
        <div className="field">
          <label htmlFor="name">First name</label>
          <input id="name" className="input" value={name} maxLength={40} onChange={(e) => { setName(e.target.value); setSaved(false); }} />
        </div>
        <div className="settings-actions">
          <button type="submit" className="btn btn-primary" disabled={!name.trim() || name.trim() === kidName}>Save name</button>
          {saved && <span role="status" className="field-hint">Saved.</span>}
        </div>
        <fieldset className="field grade-field">
          <legend className="field-label">Grade</legend>
          <div className="grade-row">
            {GRADES.map((g) => (
              <button key={g} type="button" className={`btn btn-sm ${grade === g ? 'btn-primary' : 'btn-secondary'}`} aria-pressed={grade === g} onClick={() => pickGrade(g)}>
                {g}
              </button>
            ))}
          </div>
          <span className="field-hint">Test prep is for grade {PREP_MIN_GRADE} and up. Grade 3 and younger use the Bodhi games.</span>
        </fieldset>
      </form>

      <section className="card card-pad settings-section">
        <h2>Account, age and sounds</h2>
        <p className="page-sub">
          {cloud.user ? `Signed in as ${cloud.user.email || cloud.user.name || 'your Google account'}.` : 'Sign in with Google to keep Bodhi Learn progress on every device.'}
        </p>
        <div className="settings-actions">
          <button type="button" className="btn btn-secondary" onClick={() => setPanelOpen(true)}>Open Bodhi settings</button>
        </div>
      </section>

      <section className="card card-pad settings-section">
        <h2>Test prep progress</h2>
        <p className="page-sub">Test prep progress is saved in this browser for now.</p>
        <div className="settings-actions">
          <button className="btn btn-danger" disabled={!practiced} onClick={() => {
            if (window.confirm('Reset test prep progress? Mastery and streak start over.')) learner.resetProgress();
          }}>Reset test prep progress</button>
        </div>
      </section>

      <section className="card card-pad settings-section">
        <h2>About</h2>
        <p className="page-sub">{DISCLAIMER}</p>
        <p className="page-sub">Real released tests are free on <a href={OFFICIAL_PRACTICE_URL} target="_blank" rel="noreferrer">TEA's practice site</a>.</p>
      </section>

      <ParentGateModal isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
    </div>
  );
}
