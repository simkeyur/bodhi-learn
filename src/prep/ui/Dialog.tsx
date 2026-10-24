import { useEffect, useRef } from 'react';
import type { ConfirmOptions } from './useConfirm';

export interface Pending extends ConfirmOptions {
  resolve: (ok: boolean) => void;
}

// The dialog itself; screens use it through useConfirm
export function ConfirmDialog({ p, onClose }: { p: Pending; onClose: (ok: boolean) => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-body"
      onCancel={(e) => { e.preventDefault(); onClose(false); }}
      onClick={(e) => { if (e.target === ref.current) onClose(false); }}
    >
      <form method="dialog" className="dialog-inner" onSubmit={(e) => { e.preventDefault(); onClose(true); }}>
        <h2 id="dialog-title">{p.title}</h2>
        <p id="dialog-body" className="dialog-body">{p.body}</p>
        <div className="dialog-actions">
          <button type="button" className="btn btn-ghost" onClick={() => onClose(false)} autoFocus>Cancel</button>
          <button type="submit" className={`btn ${p.danger ? 'btn-danger-solid' : 'btn-primary'}`}>{p.action}</button>
        </div>
      </form>
    </dialog>
  );
}
