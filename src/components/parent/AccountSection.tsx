import React, { useEffect, useState } from 'react';
import { Cloud, CloudOff, Loader2, Check, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { sound } from '../../utils/sound';
import type { SyncStatus } from '../../firebase/useCloudSync';

const GoogleLogo: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
    <path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z" />
    <path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.3441 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z" />
    <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z" />
    <path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z" />
  </svg>
);

const STATUS_LABEL: Record<SyncStatus, { text: string; color: string; icon: React.ReactNode }> = {
  guest: { text: '', color: '#64748B', icon: null },
  connecting: { text: 'Connecting…', color: '#64748B', icon: <Loader2 size={16} className="spin" /> },
  saving: { text: 'Saving…', color: '#0284C7', icon: <Loader2 size={16} className="spin" /> },
  saved: { text: 'Saved to your account', color: '#16A34A', icon: <Check size={16} /> },
  offline: { text: 'Offline. Will sync when back online', color: '#B45309', icon: <CloudOff size={16} /> },
  error: { text: "Couldn't save", color: '#DC2626', icon: <AlertTriangle size={16} /> },
};

const sectionStyle: React.CSSProperties = {
  background: '#F0F9FF',
  border: '2px solid #BAE6FD',
  borderRadius: 14,
  padding: 14,
  marginBottom: 20,
};

export const AccountSection: React.FC = () => {
  const { cloud } = useApp();
  const { user, authReady, status, error, preload, signIn, signOut, deleteAccount } = cloud;
  const [busy, setBusy] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Load the sign-in code now so the Google popup opens straight from the tap
  useEffect(() => {
    preload();
  }, [preload]);

  if (!authReady) {
    return (
      <div style={{ ...sectionStyle, display: 'flex', alignItems: 'center', gap: 8, color: '#64748B', fontWeight: 600 }}>
        <Loader2 size={18} className="spin" /> Checking account…
      </div>
    );
  }

  if (!user) {
    return (
      <div style={sectionStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: '#0C4A6E', marginBottom: 6 }}>
          <Cloud size={20} /> Save progress to the cloud
        </div>
        <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.45, marginBottom: 12 }}>
          Sign in with Google to keep stars and stickers safe and use them on any device. Progress on this device is
          saved to your account. If the account already has saved progress, that is used instead.
        </p>
        <button
          onClick={async () => { sound.playPop(); setBusy(true); await signIn(); setBusy(false); }}
          disabled={busy}
          className="kid-btn btn-white"
          style={{ width: '100%', fontSize: '1rem', border: '2px solid #CBD5E1' }}
        >
          {busy ? <Loader2 size={20} className="spin" /> : <GoogleLogo />} Sign in with Google
        </button>
        {error && <div role="alert" style={{ color: '#DC2626', fontWeight: 600, fontSize: '0.9rem', marginTop: 10 }}>{error}</div>}
      </div>
    );
  }

  const label = STATUS_LABEL[status];

  return (
    <div style={sectionStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        {user.photoURL ? (
          <img src={user.photoURL} alt="" width={44} height={44} referrerPolicy="no-referrer" style={{ borderRadius: '50%', flexShrink: 0 }} />
        ) : (
          <div style={{
            width: 44, height: 44, borderRadius: '50%', background: '#38BDF8', color: '#FFFFFF', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.2rem',
          }}>
            {(user.name || user.email || '?').charAt(0).toUpperCase()}
          </div>
        )}
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, color: '#0F172A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {user.name || 'Signed in'}
          </div>
          <div style={{ fontSize: '0.85rem', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {user.email}
          </div>
        </div>
      </div>

      <div
        aria-live="polite"
        style={{ display: 'flex', alignItems: 'center', gap: 6, color: label.color, fontWeight: 700, fontSize: '0.9rem', marginBottom: 12 }}
      >
        {label.icon} {label.text}
      </div>
      {error && <div role="alert" style={{ color: '#DC2626', fontWeight: 600, fontSize: '0.9rem', marginBottom: 10 }}>{error}</div>}

      {!confirmDelete ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button
            onClick={async () => { sound.playPop(); setBusy(true); await signOut(); setBusy(false); }}
            disabled={busy}
            className="kid-btn btn-white"
            style={{ flex: '1 1 140px', fontSize: '0.95rem', border: '2px solid #CBD5E1' }}
          >
            Sign out
          </button>
          <button
            onClick={() => setConfirmDelete(true)}
            className="kid-btn btn-white"
            style={{ flex: '1 1 140px', fontSize: '0.95rem', color: '#DC2626', border: '2px solid #FECACA' }}
          >
            Delete account
          </button>
          <p style={{ flexBasis: '100%', fontSize: '0.8rem', color: '#64748B', lineHeight: 1.4 }}>
            Signing out keeps everything in your account and clears this device, so the next family starts fresh.
          </p>
        </div>
      ) : (
        <div style={{ background: '#FEF2F2', border: '2px solid #FECACA', borderRadius: 12, padding: 12 }}>
          <div style={{ fontWeight: 700, color: '#991B1B', marginBottom: 6 }}>Delete everything?</div>
          <p style={{ fontSize: '0.88rem', color: '#7F1D1D', lineHeight: 1.45, marginBottom: 10 }}>
            This permanently removes your account and all saved stars, stickers and settings. It can't be undone.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setConfirmDelete(false)} className="kid-btn btn-white" style={{ flex: 1, fontSize: '0.95rem' }}>
              Keep it
            </button>
            <button
              onClick={async () => {
                setBusy(true);
                const ok = await deleteAccount();
                setBusy(false);
                if (ok) setConfirmDelete(false);
              }}
              disabled={busy}
              className="kid-btn btn-coral"
              style={{ flex: 1, fontSize: '0.95rem' }}
            >
              {busy ? <Loader2 size={18} className="spin" /> : 'Delete forever'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
