import { useEffect, useState } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import "./App.css";

const AMOUNTS = [
  { value: 500, impact: "provides a child with nutritious school meals for a month" },
  { value: 1000, impact: "funds essential school books, supplies & learning kit" },
  { value: 2500, impact: "covers healthcare, check-ups & vaccinations for 3 children" },
  { value: 5000, impact: "supports complete monthly care, shelter & education for a child" },
];

const PROGRAMS = [
  { number: "01", icon: "✳", title: "Everyday nutrition", text: "Wholesome daily meals, vitamins and growth tracking for healthy development." },
  { number: "02", icon: "◒", title: "Quality education", text: "School enrolment, books, learning supplies and dedicated after-school tutoring." },
  { number: "03", icon: "♡", title: "Safe spaces & play", text: "Nurturing environments, creative play, sports and expression for every child." },
  { number: "04", icon: "⌂", title: "Family & care", text: "Mentorship, emotional guidance and a loving circle of support that lasts." },
];

const JOURNEY = [
  { step: "01", title: "You choose a gift", text: "Pick a monthly contribution or give once, in an amount that feels right." },
  { step: "02", title: "Care reaches a child", text: "Our local care team directs support directly to food, schooling and health." },
  { step: "03", title: "You see their growth", text: "We share heartening updates on the progress and smiles your generosity makes possible." },
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
  const activeImpact = custom ? "Your gift will help provide reliable, child-centred care." : AMOUNTS.find((item) => item.value === selected)?.impact;

  return (
    <div className={`page theme-${theme}`}>
      <div className="announcement"><span className="announcement-dot" /> Care, warmth & education for every child <a href="#story">Meet Aarav <span aria-hidden="true">↗</span></a></div>
      <header className="nav">
        <a href="#top" className="logo" aria-label="Thunai Child Care home"><span className="logo-mark"><Icon name="heart" /></span><span className="logo-name">thunai<span>.</span><small>CHILD CARE</small></span></a>
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
            <div className="eyebrow"><span /> A happy childhood for every child</div>
            <h1>Every child deserves a <em>bright start and a loving future.</em></h1>
            <p className="hero-lede">We bring nourishing food, quality education, healthcare and safe nurturing spaces to vulnerable children who need us most.</p>
            <div className="hero-actions"><a href="#donate" className="btn btn-coral btn-lg">Be there for a child <Icon name="arrow" /></a><a href="#programs" className="text-link">Discover our care <span>↓</span></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>A</span><span>S</span><span>M</span><b>+</b></div><p><strong>Small acts. Lasting smiles.</strong><br />Made possible by people like you.</p></div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame"><img src={img1} alt="A happy young child smiling warmly outdoors in a garden" /><div className="photo-shade" /></div>
            <div className="photo-stamp"><span>CARE,</span><span>WITH</span><span>HEART <b>✳</b></span></div>
            <div className="quote-card"><div className="quote-mark">“</div><p>Having daily meals and books changed my whole life.</p><span>Aarav · Thunai Child Care family member</span></div>
            <div className="hero-note"><span className="note-icon">✳</span><span>Here for their<br /><strong>everyday growth</strong></span></div>
          </div>
          <div className="hero-side-label">EDUCATION · NUTRITION · CARE</div>
        </section>

        <section className="trust-strip" aria-label="Our care commitments">
          <div><span className="trust-icon">✳</span><p><strong>Locally rooted</strong><small>Care teams close to home</small></p></div>
          <div><span className="trust-icon">♡</span><p><strong>Child-first, always</strong><small>Every child seen, heard and loved</small></p></div>
          <div><span className="trust-icon">⌂</span><p><strong>Care you can follow</strong><small>Updates on what your gift makes possible</small></p></div>
          <a href="#journey" className="trust-link">How your gift gets there <span>↗</span></a>
        </section>

        <section className="section programs-section" id="programs">
          <div className="section-kicker">WHAT CARE LOOKS LIKE</div>
          <div className="section-heading-row"><div><h2>Nurturing young lives, in ways<br /><em>that matter every day.</em></h2></div><p className="section-intro">Every child's journey is unique. We listen first, then build a supportive circle of care around each child's health, learning and dreams.</p></div>
          <div className="program-grid">{PROGRAMS.map((program) => <article key={program.title} className="program"><div className="program-top"><span className="program-number">{program.number}</span><span className="program-icon">{program.icon}</span></div><h3>{program.title}</h3><p>{program.text}</p><a href="#donate" aria-label={`Support ${program.title}`}>Support this care <span>↗</span></a></article>)}</div>
        </section>

        <section className="story" id="story">
          <div className="story-image"><img src={img2} alt="Aarav smiling proudly in a learning environment" /><span className="story-image-label">A THUNAI STORY <b>✳</b></span><div className="story-image-note">A bright smile<br />can change a future.</div></div>
          <div className="story-text"><div className="section-kicker">THE POWER OF SHOWING UP</div><h2>“I used to miss school.<br /><em>Now I save a new story for class.”</em></h2><p>When our care team met Aarav, he was struggling with nutrition and missed school regularly. Today, with daily balanced meals, learning supplies, and dedicated tutoring, he is thriving in class with big dreams for the future.</p><p className="story-attribution"><strong>Aarav</strong><span>Part of the Thunai Child Care family since 2023</span></p><a href="#donate" className="text-link text-link-dark">Help write the next success story <span>→</span></a></div>
        </section>

        <section className="impact-band" id="impact"><div className="impact-heading"><div className="section-kicker">CARE, MADE POSSIBLE TOGETHER</div><h2>Every contribution<br />brings care <em>closer.</em></h2></div><div className="impact-stats"><div><strong>5,400<span>+</span></strong><small>children reached with care</small></div><div><strong>42</strong><small>community child care hubs</small></div><div><strong>15</strong><small>years of nurturing futures</small></div></div><div className="impact-footnote"><Icon name="shield" /><span>We are committed to clear, thoughtful stewardship of every gift for children.</span></div></section>

        <section className="journey section" id="journey"><div className="section-kicker">SIMPLE, PERSONAL, MEANINGFUL</div><div className="section-heading-row"><h2>Your kindness finds<br /><em>its way to a child.</em></h2><p className="section-intro">From your first gift to the care it supports, we keep the journey human and easy to follow.</p></div><div className="journey-steps">{JOURNEY.map((item) => <article key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>

        <section className="donate-wrap" id="donate"><div className="donate-intro"><div className="section-kicker">MAKE ROOM FOR MORE BRIGHT DAYS</div><h2>Be a child's<br /><em>reason to smile.</em></h2><p>A monthly gift helps care feel dependable. A one-time gift can meet an urgent learning or health need. Both begin with showing up.</p><div className="donor-note"><span>✳</span><p><strong>Your generosity, thoughtfully used.</strong><br />Every contribution helps make practical, child-centred care possible.</p></div></div>
          <div className="donate-card"><div className="donate-card-heading"><div><span className="section-kicker">CHOOSE YOUR GIFT</span><h3>Make a difference today</h3></div><span className="donate-heart"><Icon name="heart" /></span></div><div className="toggle" role="tablist" aria-label="Gift frequency"><button role="tab" aria-selected={mode === "monthly"} className={mode === "monthly" ? "on" : ""} onClick={() => setMode("monthly")}>Monthly <span>Most sustaining</span></button><button role="tab" aria-selected={mode === "once"} className={mode === "once" ? "on" : ""} onClick={() => setMode("once")}>One time</button></div>
            <div className="amounts" aria-label="Choose donation amount">{AMOUNTS.map((item) => <button key={item.value} aria-pressed={!custom && selected === item.value} className={`amount ${!custom && selected === item.value ? "on" : ""}`} onClick={() => { setSelected(item.value); setCustom(""); }}>{formatRupees(item.value)}</button>)}</div>
            <label className="custom"><span>Choose another amount</span><div><b>₹</b><input type="number" min="100" step="100" placeholder="Enter amount" value={custom} onChange={(event) => setCustom(event.target.value)} /></div></label>
            <p className="impact"><span>✳</span><span><strong>{custom ? "Your gift in action" : `${formatRupees(selected)} can`}</strong><br />{activeImpact}</span></p>
            <button className="btn btn-coral btn-lg btn-block" disabled={!amount || amount < 100} onClick={() => window.alert(`Thank you for choosing to give ${formatRupees(amount)} ${mode === "monthly" ? "monthly" : "once"}.`)}>Continue with {formatRupees(amount || 0)} <Icon name="arrow" /></button>
            <p className="secure"><Icon name="shield" /> Secure giving · UPI, cards and net banking</p>
          </div>
        </section>

        <section className="closing-cta"><span className="closing-flower">✳</span><div className="section-kicker">A MORE CARING WORLD STARTS CLOSE BY</div><h2>Let's make sure no child<br />has to grow up <em>without care.</em></h2><a href="#donate" className="btn btn-dark btn-lg">Be there for a child <Icon name="arrow" /></a><span className="closing-flower closing-flower-right">✳</span></section>
      </main>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><a href="#top" className="logo"><span className="logo-mark"><Icon name="heart" /></span><span className="logo-name">thunai<span>.</span><small>CHILD CARE</small></span></a><p>Care that nurtures the future.<br />Rooted in dignity, delivered with heart for every child.</p></div><div><h4>Explore</h4><a href="#programs">Our care</a><a href="#journey">How it works</a><a href="#story">Stories</a></div><div><h4>Get in touch</h4><a href="mailto:hello@thunaicare.org">hello@thunaicare.org</a><a href="tel:+919876543210">+91 98765 43210</a><span>Monday – Saturday, 9am – 6pm</span></div><div className="footer-news"><h4>A note from Thunai</h4><p>Stories of care and small ways to help, every now and then.</p><a href="mailto:hello@thunaicare.org?subject=Keep%20me%20connected" className="footer-signup">Keep me connected <span>→</span></a></div></div><div className="footer-bottom"><span>© 2026 Thunai Child Care Foundation</span><span>Nurturing every child's potential.</span><span className="footer-credit">Nithyasree · 2312128 · <a href="tel:+919176222005">9176222005</a></span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
