import './ui/tokens.css';
import './ui/base.css';
import './ui/components.css';
import { Settings } from './features/settings/Settings';

// Bodhi Play's Settings page: the same page as Bodhi Prep's, in Prep's styles. Loaded on demand.
export default function PlaySettings({ onDone }: { onDone: () => void }) {
  return (
    // Inside Bodhi Play's page, under its header: no full-screen height or background of its own
    <div className="prep prep-embedded">
      <Settings app="play" onDone={onDone} />
    </div>
  );
}
