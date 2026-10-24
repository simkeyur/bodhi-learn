import { createBrowserRouter, Navigate } from 'react-router';
import { AppLayout } from './AppLayout';
import { Home } from '../features/home/Home';
import { SkillMap } from '../features/skills/SkillMap';
import { Practice } from '../features/practice/Practice';
import { Settings } from '../features/settings/Settings';
import { Learn } from '../features/learn/Learn';
import { NotFound } from './NotFound';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'math', element: <SkillMap /> },
      { path: 'learn/:code', element: <Learn /> },
      { path: 'practice/:code', element: <Practice /> },
      { path: 'settings', element: <Settings /> },
      { path: 'home', element: <Navigate to="/" replace /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
