import React from 'react';
import './appbar.css';

// The one header both apps use: Bodhi Play (the games) and Bodhi Prep. Callers pass the parts that differ
// (the brand and profile as a link or a button, page links, extra buttons), so it works with and without a router.

export function AppBar({ brand, nav, children }: { brand: React.ReactNode; nav?: React.ReactNode; children: React.ReactNode }) {
  return (
    <header className="bh-bar">
      <div className="bh-inner">
        {brand}
        {nav}
        <div className="bh-right">{children}</div>
      </div>
    </header>
  );
}

// Logo tile and wordmark: "Bodhi Play" or "Bodhi Prep". Goes inside a link or button with className "bh-brand".
export function BrandMark({ app }: { app: 'Play' | 'Prep' }) {
  return (
    <>
      <span className="bh-logo"><img src="/logo.png" alt="" width={40} height={40} /></span>
      <span className="bh-name">Bodhi <b>{app}</b></span>
    </>
  );
}

// Name chip: tapping it opens settings. Goes inside a link or button with className "bh-who".
export function ProfileMark({ name, detail }: { name: string; detail: string }) {
  return (
    <>
      <span className="bh-avatar" aria-hidden>{(name.trim()[0] ?? '?').toUpperCase()}</span>
      <span className="bh-who-text"><b>{name}</b><span>{detail}</span></span>
    </>
  );
}
