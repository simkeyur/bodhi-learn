import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="page">
      <div className="card card-pad" style={{ maxWidth: 520 }}>
        <h1 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--s2)' }}>That page isn't here</h1>
        <p className="page-sub" style={{ marginBottom: 'var(--s4)' }}>The link may be old or mistyped.</p>
        <Link to="/" className="btn btn-primary">Go to Today</Link>
      </div>
    </div>
  );
}
