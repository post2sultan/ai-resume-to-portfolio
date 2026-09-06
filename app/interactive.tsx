'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUp, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export type ResultStory = {
  company: string;
  role: string;
  headline: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: Array<{ value: string; label: string }>;
  charts: Array<{ title: string; src: string; width: number; height: number }>;
};

export type PersonalityProfile = {
  title: string;
  score: string;
  axes: Array<[string, string, number]>;
};

export function RevealManager() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.1 },
    );
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);
  return null;
}

export function SiteHeader({ profileUrl, personName, logoSrc, ctaLabel }: { profileUrl: string; personName: string; logoSrc: string; ctaLabel: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['Experience', '#record'],
    ['Results', '#impact'],
    ['Leadership Style', '#personality'],
    ['Skills', '#perspective'],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand-symbol" href={profileUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${personName} on LinkedIn`}>
        <Image src={logoSrc} alt="" width={96} height={120} priority sizes="48px" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <div className="nav-sections">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <a className="nav-cta" href="#contact">{ctaLabel}</a>
      </nav>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
        <span>{menuOpen ? 'Close' : 'Menu'}</span>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="mobile-menu" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {links.map(([label, href], index) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>{ctaLabel}</a>
      </nav>
    </header>
  );
}

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const page = document.documentElement;
      const available = Math.max(1, page.scrollHeight - window.innerHeight);
      setProgress(Math.min(100, (window.scrollY / available) * 100));
      setVisible(window.scrollY > Math.min(700, window.innerHeight * 0.75));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`to-top ${visible ? 'is-visible' : ''}`}
      type="button"
      aria-label={`Back to top. ${Math.round(progress)}% of page viewed`}
      style={{ '--page-progress': `${progress * 3.6}deg` } as React.CSSProperties}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span><ArrowUp aria-hidden="true" /></span>
    </button>
  );
}

export function ResultsShowcase({ stories }: { stories: ResultStory[] }) {
  const [activeStory, setActiveStory] = useState(0);
  const [activeChart, setActiveChart] = useState(0);
  const [paused, setPaused] = useState(false);
  const story = stories[activeStory];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActiveChart((value) => (value + 1) % story.charts.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused, story.charts.length, activeStory]);

  const moveChart = (direction: -1 | 1) => setActiveChart((value) => (value + direction + story.charts.length) % story.charts.length);

  return (
    <div className="results-shell">
      <nav className="role-selector" aria-label="Select a leadership role">
        <p>Select a role</p>
        {stories.map((item, index) => (
          <button key={item.company} type="button" className={activeStory === index ? 'is-active' : ''} aria-pressed={activeStory === index} aria-controls="result-panel" onClick={() => { setActiveStory(index); setActiveChart(0); }}>
            <span>0{index + 1}</span><span><small>{item.role}</small><strong>{item.company}</strong></span><i aria-hidden="true">View</i>
          </button>
        ))}
      </nav>

      <article className="result-panel" id="result-panel" key={story.company} aria-live="polite">
        <div className="result-copy">
          <header className="result-heading"><p>{story.role} · {story.company}</p><h3>{story.headline}</h3></header>
          <dl className="case-study-grid">
            <div><dt>Challenge</dt><dd>{story.challenge}</dd></div>
            <div><dt>Approach</dt><dd>{story.approach}</dd></div>
            <div><dt>Result</dt><dd>{story.result}</dd></div>
          </dl>
          <div className="metric-glass">
            <p>Measured outcome</p>
            <div>{story.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
          </div>
          <p className="result-disclaimer">Public-safe, banded figures are shown for directional context. Results reflect the stated role, market context, and measurement period, including cross-functional and partner contributions.</p>
        </div>

        <div className="chart-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
          <div className="chart-toolbar">
            <div><span>Visual evidence</span><strong>{story.charts[activeChart].title}</strong></div>
            <div className="chart-controls">
              <button type="button" onClick={() => moveChart(-1)} aria-label="Previous chart"><ArrowLeft aria-hidden="true" /></button>
              <button type="button" onClick={() => moveChart(1)} aria-label="Next chart"><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
          <div className="chart-viewport">
            <div className="chart-track" style={{ transform: `translateX(-${activeChart * 100}%)` }}>
              {story.charts.map((chart) => <figure key={chart.src}><Image src={chart.src} alt={`${story.company}: ${chart.title} visual evidence`} width={chart.width} height={chart.height} sizes="(max-width: 767px) 92vw, (max-width: 1100px) 86vw, 70vw" loading="lazy" /><figcaption>{chart.title}</figcaption></figure>)}
            </div>
          </div>
          <div className="chart-dots" aria-label="Choose chart">
            {story.charts.map((chart, index) => <button key={chart.src} type="button" className={activeChart === index ? 'is-active' : ''} aria-label={`Show ${chart.title}`} aria-pressed={activeChart === index} onClick={() => setActiveChart(index)} />)}
            <span>{String(activeChart + 1).padStart(2, '0')} / {String(story.charts.length).padStart(2, '0')}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

function ProfileCard({ profile, index }: { profile: PersonalityProfile; index: number }) {
  return (
    <article className={`profile-card profile-card-${index + 1}`} data-reveal>
      <header><div><p>Predictive Index</p><h3>{profile.title}</h3></div><span>{profile.score}</span></header>
      <div className="profile-scale"><span>-3σ</span><span>-2σ</span><span>-1σ</span><span>0</span><span>+1σ</span><span>+2σ</span><span>+3σ</span></div>
      <div className="profile-axes">
        {profile.axes.map(([left, right, position], axisIndex) => (
          <div className="profile-axis" key={`${left}-${right}`}>
            <div className="axis-labels"><span className={position < 50 ? 'is-emphasis' : ''}>{left}</span><span className={position >= 50 ? 'is-emphasis' : ''}>{right}</span></div>
            <div className="axis-track"><i /><b className={`dot-${axisIndex + 1}`} style={{ left: `${position}%`, transitionDelay: `${axisIndex * 110}ms` }}><span>{String.fromCharCode(65 + axisIndex)}</span></b></div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function PersonalityExperience({ profiles }: { profiles: PersonalityProfile[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(index, profiles.length - 1));
    setActive(next);
    const track = trackRef.current;
    const card = track?.children[next] as HTMLElement | undefined;
    if (track && card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  };

  const syncActiveCard = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const next = cards.reduce((best, card, index) => Math.abs(card.offsetLeft - track.scrollLeft) < Math.abs(cards[best].offsetLeft - track.scrollLeft) ? index : best, 0);
    setActive(next);
  };

  return (
    <div className="personality-experience">
      <div className="profile-column">
        <div className="personality-toolbar">
          <div><span>Profile view</span><strong>{profiles[active].title}</strong></div>
          <div><button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous profile"><ArrowLeft aria-hidden="true" /></button><button type="button" onClick={() => goTo(active + 1)} disabled={active === profiles.length - 1} aria-label="Next profile"><ArrowRight aria-hidden="true" /></button></div>
        </div>
        <div className="profile-track" ref={trackRef} onScroll={syncActiveCard}>{profiles.map((profile, index) => <ProfileCard key={profile.title} profile={profile} index={index} />)}</div>
        <div className="profile-pagination">{profiles.map((profile, index) => <button key={profile.title} className={active === index ? 'is-active' : ''} type="button" aria-label={`Show ${profile.title}`} onClick={() => goTo(index)} />)}</div>
        <p className="pi-disclaimer">As per the assessment done by © Predictive Index, LLC 1955–2025.</p>
      </div>
      <div className="dna-column" data-reveal>
        <p>Leadership DNA · The Controller</p>
        <div className="profile-visual"><Image src="/personality-profile.webp" alt="Controller behavioural profile showing precision, operational efficiency, risk mitigation, detail orientation, analytical judgement, and quality-focused leadership" width={552} height={492} sizes="(max-width: 767px) 92vw, (max-width: 1100px) 72vw, 44vw" loading="lazy" /></div>
      </div>
    </div>
  );
}
