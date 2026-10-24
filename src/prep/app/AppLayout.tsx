import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router';
import { useApp } from '../../context/AppContext';
import { APP_NAME, DISCLAIMER } from './brand';
import { ModeSwitch } from '../../components/layout/ModeSwitch';
import './app.css';

// Every prep screen: header with navigation, the screen, and the footer notice.
export function AppLayout() {
  const { kidName, grade } = useApp();

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="app-header">
        <div className="app-header-inner">
          <Link to="/" className="brand" aria-label={`${APP_NAME} home`}>
            <span className="brand-logo"><img src="/logo.png" alt="" width={40} height={40} /></span>
            <span className="brand-name">Bodhi <b>Prep</b></span>
          </Link>
          <nav className="nav" aria-label="Main">
            <NavLink to="/" end>Today</NavLink>
            <NavLink to="/math">Math</NavLink>
            <span className="nav-soon" aria-disabled="true" title="Reading is coming next">Reading <small>Soon</small></span>
          </nav>
          <span className="mode-switch-wide"><ModeSwitch /></span>
          <span className="mode-switch-compact"><ModeSwitch compact /></span>
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
      {/* Remember scroll per page address. The default (per history entry) gives every freshly loaded page the
          same key, so a reload could open one page at another page's scroll position. */}
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
}
