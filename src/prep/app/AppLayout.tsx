import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router';
import { useApp } from '../../context/AppContext';
import { APP_NAME, DISCLAIMER } from './brand';
import { ModeSwitch } from '../../components/layout/ModeSwitch';
import { AppBar, BrandMark, ProfileMark } from '../../components/layout/AppBar';
import './app.css';

// Every prep screen: header with navigation, the screen, and the footer notice.
export function AppLayout() {
  const { kidName, grade } = useApp();

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <AppBar
        brand={<Link to="/" className="bh-brand" aria-label={`${APP_NAME} home`}><BrandMark app="Prep" /></Link>}
        nav={
          <nav className="bh-nav" aria-label="Main">
            <NavLink to="/" end>Today</NavLink>
            <NavLink to="/math">Math</NavLink>
            <span className="bh-soon" aria-disabled="true" title="Reading is coming next">Reading <small>Soon</small></span>
          </nav>
        }
      >
        <span className="bh-wide"><ModeSwitch /></span>
        <span className="bh-compact"><ModeSwitch compact /></span>
        <Link to="/settings" className="bh-who" aria-label={`Settings for ${kidName}`}>
          <ProfileMark name={kidName} detail={`Grade ${grade}`} />
        </Link>
      </AppBar>
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
