import { Navigate, type RouteObject } from 'react-router';
import { AppLayout } from './AppLayout';
import { Home } from '../features/home/Home';
import { SkillMap } from '../features/skills/SkillMap';
import { Practice } from '../features/practice/Practice';
import { Settings } from '../features/settings/Settings';
import { Learn } from '../features/learn/Learn';
import { Read } from '../features/reading/Read';
import { Write } from '../features/reading/Write';
import { NotFound } from './NotFound';

// The router itself is created by PrepApp each time Bodhi Prep opens, so it starts from the current address
export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'math', element: <SkillMap key="math" subject="math" /> },
      { path: 'reading', element: <SkillMap key="rla" subject="rla" /> },
      { path: 'read/:id', element: <Read /> },
      { path: 'write/:id', element: <Write /> },
      { path: 'learn/:code', element: <Learn /> },
      { path: 'practice/:code', element: <Practice /> },
      { path: 'settings', element: <Settings app="prep" /> },
      { path: 'home', element: <Navigate to="/" replace /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
