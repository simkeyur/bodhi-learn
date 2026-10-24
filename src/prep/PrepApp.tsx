import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import './ui/tokens.css';
import './ui/base.css';
import './ui/components.css';
import { router } from './app/router';

// Test prep for grade 4 and up, shown by App.tsx instead of the Bodhi games.
// Loaded on demand, so younger children never download it.
export default function PrepApp() {
  // The games turn pinch-zoom off (it fights tracing); prep is laptop-first and needs zoom, like the real test
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
    if (!meta) return;
    const before = meta.content;
    meta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
    return () => { meta.content = before; };
  }, []);

  return (
    <div className="prep">
      <RouterProvider router={router} />
    </div>
  );
}
