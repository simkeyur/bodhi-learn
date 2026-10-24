import { useCallback, useState } from 'react';
import { ConfirmDialog, type Pending } from './Dialog';

// In-app confirm dialog, built on <dialog> (focus stays inside, Escape cancels).
//   const [dialog, confirm] = useConfirm();
//   if (await confirm({ title, body, action: 'Reset' })) ...

export interface ConfirmOptions {
  title: string;
  body: string;
  action: string; // the confirm button's label
  danger?: boolean;
}

export function useConfirm(): [React.ReactNode, (o: ConfirmOptions) => Promise<boolean>] {
  const [pending, setPending] = useState<Pending | null>(null);

  const confirm = useCallback((o: ConfirmOptions) => new Promise<boolean>((resolve) => {
    setPending({ ...o, resolve });
  }), []);

  const close = (ok: boolean) => {
    pending?.resolve(ok);
    setPending(null);
  };

  return [pending ? <ConfirmDialog key={pending.title} p={pending} onClose={close} /> : null, confirm];
}
