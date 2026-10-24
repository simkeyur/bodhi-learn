import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './ui/tokens.css';
import './ui/base.css';
import './ui/components.css';
import { routes } from './app/router';

// Test prep for grade 4 and up, shown by App.tsx instead of the Bodhi games.
// Loaded on demand, so younger children never download it.
export default function PrepApp() {
  // A new router per visit: one kept from an earlier visit would still show the page from before the switch.
  // (Not disposed on unmount: React's strict mode unmounts and remounts once in development, and a switch
  // between Learn and Prep is rare enough that an idle router left behind costs nothing.)
  const [router] = useState(() => createBrowserRouter(routes));
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
