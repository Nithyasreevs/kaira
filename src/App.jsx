import { useEffect, useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import "./App.css";

const AMOUNTS = [
  { value: 500, impact: "covers a week of essential medicines" },
  { value: 1000, impact: "provides nourishing meals for a month" },
  { value: 2500, impact: "funds a health check and follow-up care" },
  { value: 5000, impact: "supports a month of dependable care" },
];

const PROGRAMS = [
  { number: "01", icon: "✳", title: "Everyday health", text: "Routine check-ups, timely medicines and care at home, delivered with patience." },
  { number: "02", icon: "◒", title: "Good food, daily", text: "Fresh, balanced meals that make it easier to stay strong and independent." },
  { number: "03", icon: "♡", title: "A familiar face", text: "Regular visits, shared stories and the comfort of knowing someone will return." },
  { number: "04", icon: "⌂", title: "A safe place", text: "Welcoming community spaces where every person is treated with dignity." },
];

const JOURNEY = [
  { step: "01", title: "You choose a gift", text: "Pick a monthly contribution or give once, in an amount that feels right." },
  { step: "02", title: "Care reaches someone", text: "Our local care team directs support to meals, medicine and companionship." },
  { step: "03", title: "You see the difference", text: "We share thoughtful updates on the care your generosity makes possible." },
];

const formatRupees = (value) => `₹${Number(value).toLocaleString("en-IN")}`;

function Icon({ name, className = "" }) {
  const paths = {
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function App() {
  const [mode, setMode] = useState("monthly");
  const [selected, setSelected] = useState(1000);
  const [custom, setCustom] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("thunai-theme") || "light");

  useEffect(() => {
    localStorage.setItem("thunai-theme", theme);
  }, [theme]);

  const amount = custom ? Number(custom) : selected;
  const activeImpact = custom ? "Your gift will help provide reliable, person-centred care." : AMOUNTS.find((item) => item.value === selected)?.impact;

  return (
    <div className={`page theme-${theme}`}>
      <div className="announcement"><span className="announcement-dot" /> Care that feels like family, in every season of life <a href="#story">Meet Kamala <span aria-hidden="true">↗</span></a></div>
      <header className="nav">
        <a href="#top" className="logo" aria-label="Thunai Elder Care home"><span className="logo-mark"><Icon name="heart" /></span><span className="logo-name">thunai<span>.</span><small>ELDER CARE</small></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu" /></button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Our care</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Stories</a>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} aria-pressed={theme === "dark"} onClick={() => setTheme(theme === "light" ? "dark" : "light")}><span className="theme-toggle-icon">{theme === "light" ? "☾" : "☀"}</span><span>{theme === "light" ? "Dark mode" : "Light mode"}</span></button>
          <a href="#donate" className="btn btn-dark nav-donate" onClick={() => setMenuOpen(false)}>Give with care <Icon name="arrow" /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span /> A little care goes a long way</div>
            <h1>Growing older should never mean <em>growing lonely.</em></h1>
            <p className="hero-lede">We bring nourishing food, dependable healthcare and the simple joy of a familiar face to elders who need us.</p>
            <div className="hero-actions"><a href="#donate" className="btn btn-coral btn-lg">Be there for someone <Icon name="arrow" /></a><a href="#programs" className="text-link">Discover our care <span>↓</span></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>R</span><span>K</span><span>M</span><b>+</b></div><p><strong>Small acts. Lasting comfort.</strong><br />Made possible by people like you.</p></div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame"><img src={img1} alt="An older woman sharing a warm moment with a caregiver" /><div className="photo-shade" /></div>
            <div className="photo-stamp"><span>CARE,</span><span>WITH</span><span>HEART <b>✳</b></span></div>
            <div className="quote-card"><div className="quote-mark">“</div><p>Somebody remembering my name changed my whole week.</p><span>Kamala Amma · Thunai community member</span></div>
            <div className="hero-note"><span className="note-icon">✳</span><span>Here for the<br /><strong>everyday moments</strong></span></div>
          </div>
          <div className="hero-side-label">DIGNITY · COMPANY · CARE</div>
        </section>

        <section className="trust-strip" aria-label="Our care commitments">
          <div><span className="trust-icon">✳</span><p><strong>Locally rooted</strong><small>Care teams close to home</small></p></div>
          <div><span className="trust-icon">♡</span><p><strong>Human, always</strong><small>Every person seen and heard</small></p></div>
          <div><span className="trust-icon">⌂</span><p><strong>Care you can follow</strong><small>Updates on what your gift makes possible</small></p></div>
          <a href="#journey" className="trust-link">How your gift gets there <span>↗</span></a>
        </section>

        <section className="section programs-section" id="programs">
          <div className="section-kicker">WHAT CARE LOOKS LIKE</div>
          <div className="section-heading-row"><div><h2>Being there, in the ways<br /><em>that matter every day.</em></h2></div><p className="section-intro">Growing older is different for everyone. We listen first, then build a circle of care around each person's needs, routines and wishes.</p></div>
          <div className="program-grid">{PROGRAMS.map((program) => <article key={program.title} className="program"><div className="program-top"><span className="program-number">{program.number}</span><span className="program-icon">{program.icon}</span></div><h3>{program.title}</h3><p>{program.text}</p><a href="#donate" aria-label={`Support ${program.title}`}>Support this care <span>↗</span></a></article>)}</div>
        </section>

        <section className="story" id="story">
          <div className="story-image"><img src={img2} alt="Kamala Amma smiling" /><span className="story-image-label">A THUNAI STORY <b>✳</b></span><div className="story-image-note">A familiar face<br />can change a day.</div></div>
          <div className="story-text"><div className="section-kicker">THE POWER OF SHOWING UP</div><h2>“I used to eat alone.<br /><em>Now I save a story for them.”</em></h2><p>When our care team met Kamala Amma, she was missing meals and stretching her medicines. Now there is a warm lunch at her door, a nurse who knows her name, and someone to laugh with over tea.</p><p className="story-attribution"><strong>Kamala Amma</strong><span>Part of the Thunai community since 2022</span></p><a href="#donate" className="text-link text-link-dark">Help write the next story <span>→</span></a></div>
        </section>

        <section className="impact-band" id="impact"><div className="impact-heading"><div className="section-kicker">CARE, MADE POSSIBLE TOGETHER</div><h2>Every contribution<br />brings care <em>closer.</em></h2></div><div className="impact-stats"><div><strong>3,200<span>+</span></strong><small>elders reached with care</small></div><div><strong>42</strong><small>community care centres</small></div><div><strong>15</strong><small>years of showing up</small></div></div><div className="impact-footnote"><Icon name="shield" /><span>We are committed to clear, thoughtful stewardship of every gift.</span></div></section>

        <section className="journey section" id="journey"><div className="section-kicker">SIMPLE, PERSONAL, MEANINGFUL</div><div className="section-heading-row"><h2>Your kindness finds<br /><em>its way home.</em></h2><p className="section-intro">From your first gift to the care it supports, we keep the journey human and easy to follow.</p></div><div className="journey-steps">{JOURNEY.map((item) => <article key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>

        <section className="donate-wrap" id="donate"><div className="donate-intro"><div className="section-kicker">MAKE ROOM FOR MORE GOOD DAYS</div><h2>Be someone's<br /><em>reason to smile.</em></h2><p>A monthly gift helps care feel dependable. A one-time gift can meet an urgent need. Both begin with showing up.</p><div className="donor-note"><span>✳</span><p><strong>Your generosity, thoughtfully used.</strong><br />Every contribution helps make practical, person-centred care possible.</p></div></div>
          <div className="donate-card"><div className="donate-card-heading"><div><span className="section-kicker">CHOOSE YOUR GIFT</span><h3>Make a difference today</h3></div><span className="donate-heart"><Icon name="heart" /></span></div><div className="toggle" role="tablist" aria-label="Gift frequency"><button role="tab" aria-selected={mode === "monthly"} className={mode === "monthly" ? "on" : ""} onClick={() => setMode("monthly")}>Monthly <span>Most sustaining</span></button><button role="tab" aria-selected={mode === "once"} className={mode === "once" ? "on" : ""} onClick={() => setMode("once")}>One time</button></div>
            <div className="amounts" aria-label="Choose donation amount">{AMOUNTS.map((item) => <button key={item.value} aria-pressed={!custom && selected === item.value} className={`amount ${!custom && selected === item.value ? "on" : ""}`} onClick={() => { setSelected(item.value); setCustom(""); }}>{formatRupees(item.value)}</button>)}</div>
            <label className="custom"><span>Choose another amount</span><div><b>₹</b><input type="number" min="100" step="100" placeholder="Enter amount" value={custom} onChange={(event) => setCustom(event.target.value)} /></div></label>
            <p className="impact"><span>✳</span><span><strong>{custom ? "Your gift in action" : `${formatRupees(selected)} can`}</strong><br />{activeImpact}</span></p>
            <button className="btn btn-coral btn-lg btn-block" disabled={!amount || amount < 100} onClick={() => window.alert(`Thank you for choosing to give ${formatRupees(amount)} ${mode === "monthly" ? "monthly" : "once"}.`)}>Continue with {formatRupees(amount || 0)} <Icon name="arrow" /></button>
            <p className="secure"><Icon name="shield" /> Secure giving · UPI, cards and net banking</p>
          </div>
        </section>

        <section className="closing-cta"><span className="closing-flower">✳</span><div className="section-kicker">A MORE CARING WORLD STARTS CLOSE BY</div><h2>Let's make sure no one<br />has to grow old <em>alone.</em></h2><a href="#donate" className="btn btn-dark btn-lg">Be there for someone <Icon name="arrow" /></a><span className="closing-flower closing-flower-right">✳</span></section>
      </main>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><a href="#top" className="logo"><span className="logo-mark"><Icon name="heart" /></span><span className="logo-name">thunai<span>.</span><small>ELDER CARE</small></span></a><p>Care that keeps us connected.<br />Rooted in dignity, delivered with heart.</p></div><div><h4>Explore</h4><a href="#programs">Our care</a><a href="#journey">How it works</a><a href="#story">Stories</a></div><div><h4>Get in touch</h4><a href="mailto:hello@thunaicare.org">hello@thunaicare.org</a><a href="tel:+919876543210">+91 98765 43210</a><span>Monday – Saturday, 9am – 6pm</span></div><div className="footer-news"><h4>A note from Thunai</h4><p>Stories of care and small ways to help, every now and then.</p><a href="mailto:hello@thunaicare.org?subject=Keep%20me%20connected" className="footer-signup">Keep me connected <span>→</span></a></div></div><div className="footer-bottom"><span>© 2026 Thunai Elder Care Foundation</span><span>Care with dignity. Always.</span><span className="footer-credit">Nithyasree · 2312128 · <a href="tel:+919176222005">9176222005</a></span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
