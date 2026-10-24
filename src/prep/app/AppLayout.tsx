import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router';
import { useApp } from '../../context/AppContext';
import { APP_NAME, DISCLAIMER, SECTION_NAME } from './brand';
import './app.css';

// Every prep screen: header with navigation, the screen, and the footer notice.
export function AppLayout() {
  const { kidName, grade } = useApp();

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="app-header">
        <div className="app-header-inner">
          <Link to="/" className="brand" aria-label={`${APP_NAME} ${SECTION_NAME} home`}>
            <img src="/icon-192.png" alt="" width={32} height={32} className="brand-logo" />
            <span>{APP_NAME}</span>
            <span className="brand-section">{SECTION_NAME}</span>
          </Link>
          <nav className="nav" aria-label="Main">
            <NavLink to="/" end>Today</NavLink>
            <NavLink to="/math">Math</NavLink>
            <span className="nav-soon" aria-disabled="true" title="Reading is coming next">Reading <small>Soon</small></span>
          </nav>
          <Link to="/settings" className="who" aria-label={`Settings for ${kidName}`}>
            <span className="who-avatar" aria-hidden>{kidName.slice(0, 1).toUpperCase()}</span>
            <span className="who-text"><b>{kidName}</b><span>Grade {grade}</span></span>
          </Link>
        </div>
      </header>
      <main id="main" className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>{DISCLAIMER}</p>
      </footer>
      <ScrollRestoration />
    </div>
  );
}
