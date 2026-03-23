import { useState, useEffect, useRef } from 'react';
import { modules } from './data/reviewerData';

// ─── Header ──────────────────────────────────────────────────────────

function Header({ activeModule, onScrollTo }) {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handlePillClick = (id) => {
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header className={`header ${compact ? 'header--compact' : ''}`} ref={navRef}>
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__mono">{'</>'}</span>
          <span className="header__name">WebDev Reviewer</span>
        </div>

        {/* Desktop pills */}
        <nav className="header__nav header__nav--desktop">
          {modules.map((m) => (
            <button
              key={m.id}
              className={`pill ${activeModule === m.id ? 'pill--active' : ''}`}
              style={{ '--c': m.accentColor, '--r': m.accentRgb }}
              onClick={() => handlePillClick(m.id)}
            >
              <span className="pill__num">{m.num.replace('Module ', 'M')}</span>
              <span className="pill__dot">·</span>
              <span className="pill__title">{m.shortTitle}</span>
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav className={`header__nav header__nav--mobile ${menuOpen ? 'header__nav--open' : ''}`}>
        {modules.map((m) => (
          <button
            key={m.id}
            className={`pill pill--mobile ${activeModule === m.id ? 'pill--active' : ''}`}
            style={{ '--c': m.accentColor, '--r': m.accentRgb }}
            onClick={() => handlePillClick(m.id)}
          >
            <span className="pill__num">{m.num}</span>
            <span className="pill__dot">·</span>
            <span className="pill__title">{m.shortTitle}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}

// ─── TermCard ────────────────────────────────────────────────────────

function TermCard({ term, def, accentColor }) {
  return (
    <div className="term-card" style={{ '--c': accentColor }}>
      <div className="term-card__bullet" />
      <div className="term-card__name">{term}</div>
      <div className="term-card__def">{def}</div>
    </div>
  );
}

// ─── CodeBlock ───────────────────────────────────────────────────────

function CodeBlock({ example }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(example.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const langClass = {
    GIT: 'lang--git',
    HTML: 'lang--html',
    CSS: 'lang--css',
    JS: 'lang--js',
  }[example.lang] || 'lang--git';

  return (
    <div className="code-block">
      <div className="code-block__header">
        <div className="code-block__meta">
          <span className={`code-lang ${langClass}`}>{example.lang}</span>
          <span className="code-block__desc">{example.desc}</span>
        </div>
        <button className={`copy-btn ${copied ? 'copy-btn--done' : ''}`} onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="code-block__body"><code>{example.code}</code></pre>
    </div>
  );
}

// ─── ModuleSection ───────────────────────────────────────────────────

function ModuleSection({ module }) {
  return (
    <section
      id={module.id}
      className="module"
      style={{ '--c': module.accentColor, '--r': module.accentRgb }}
    >
      {/* Section header */}
      <div className="module__header">
        <span className="module__badge">{module.num}</span>
        <h2 className="module__title">{module.title}</h2>
      </div>

      {/* Terms */}
      <div className="section-label">Terms &amp; Definitions</div>
      <div className="terms-grid">
        {module.terms.map((t, i) => (
          <TermCard key={i} {...t} accentColor={module.accentColor} />
        ))}
      </div>

      {/* Code Examples */}
      <div className="section-label">Code Examples</div>
      <div className="code-list">
        {module.codeExamples.map((ex, i) => (
          <CodeBlock key={i} example={ex} />
        ))}
      </div>

      {/* Best Practices */}
      <div className="section-label">Best Practices</div>
      <ul className="bp-list">
        {module.bestPractices.map((bp, i) => (
          <li key={i} className="bp-item">{bp}</li>
        ))}
      </ul>
    </section>
  );
}

// ─── BackToTop ────────────────────────────────────────────────────────

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`back-top ${visible ? 'back-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

// ─── ProgressBar ─────────────────────────────────────────────────────

function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="progress-bar" style={{ width: `${width}%` }} />;
}

// ─── App ─────────────────────────────────────────────────────────────

export default function App() {
  const [activeModule, setActiveModule] = useState('m1');
  const HEADER_H = 72;

  const scrollToModule = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // Intersection observer — update active pill on scroll
  useEffect(() => {
    const observers = [];
    modules.forEach((m) => {
      const el = document.getElementById(m.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveModule(m.id); },
        { rootMargin: '-15% 0px -75% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="app">
      <ProgressBar />
      <Header activeModule={activeModule} onScrollTo={scrollToModule} />

      {/* Hero */}
      <div className="hero">
        <p className="hero__tag">{'// Study Reviewer'}</p>
        <h1 className="hero__title">
          Web Development<br />
          <span className="hero__gradient">Quick Reference</span>
        </h1>
        <p className="hero__sub">
          Terms, definitions, and code examples across all four modules.
        </p>
        <div className="hero__pills">
          {modules.map((m) => (
            <button
              key={m.id}
              className="hero-pill"
              style={{ '--c': m.accentColor, '--r': m.accentRgb }}
              onClick={() => scrollToModule(m.id)}
            >
              {m.num} · {m.shortTitle}
            </button>
          ))}
        </div>
      </div>

      <main className="main">
        {modules.map((m) => (
          <ModuleSection key={m.id} module={m} />
        ))}
      </main>

      <footer className="footer">
        <p>Web Dev Reviewer · Modules 1–4</p>
        <p className="footer__sub">Git &amp; GitHub · HTML · CSS · JavaScript</p>
      </footer>

      <BackToTop />
    </div>
  );
}
