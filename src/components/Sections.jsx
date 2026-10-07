import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { sections, spaces, towerFacts, leaseSteps, why, images, MAIN_SITE, BUSINESS } from '../data/content'

const aed = (n) => `AED ${n.toLocaleString('en-US')}`
const wa = (t) => `${BUSINESS.whatsapp}?text=${encodeURIComponent(t)}`

// Writes the section's scroll progress (0 → 1) to a CSS variable, without re-rendering
function useScrollVar(name = '--p') {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.setProperty(name, 1); return }
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height * 0.8)))
      el.style.setProperty(name, p.toFixed(3))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [name])
  return ref
}

export function Intro() {
  return (
    <section className="intro sec" aria-labelledby="intro-title">
      <div className="wrap intro-grid">
        <Reveal variant="clip">
          <p className="kicker">In short</p>
          <h2 id="intro-title">Why rent office space in Addax Tower?</h2>
          <p className="answer">
            Addax Tower is on Al Reem Island inside the Abu Dhabi Global Market jurisdiction, so office space in
            Addax Tower gives your company a genuine ADGM business address. At Aegis Coworking on Level 38 you can
            rent a serviced private office from AED 4,500 a month or a desk from AED 1,000, with an ADGM-compliant
            lease registered on AccessRP.
          </p>
          <p>
            It is office space in ADGM without the fit-out — an office for rent in ADGM where the ADGM office rent
            covers furniture and services, an affordable office space ADGM alternative to a traditional commercial
            lease, run by Aegis Coworking.
          </p>
        </Reveal>
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>{sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`}><i>{String(i + 1).padStart(2, '0')}</i>{s.label}</a></li>)}</ol>
        </nav>
      </div>
    </section>
  )
}

export function Spaces() {
  const [tab, setTab] = useState('private')
  const [annual, setAnnual] = useState(false)
  const idx = spaces.findIndex((s) => s.id === tab)

  const price = (s) => {
    if (!s.monthly) return <><b>Hourly</b><span>book when you need it</span></>
    const v = annual ? s.monthly * 12 : s.monthly
    return <><b>{s.from ? 'From ' : ''}{aed(v)}</b><span>{annual ? '/ year (12 months)' : '/ month'}</span></>
  }

  return (
    <section className="spaces sec" id="spaces" aria-labelledby="spaces-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="kicker">Spaces &amp; prices</p>
          <h2 id="spaces-title">Office space for rent in Addax Tower, your way</h2>
          <p>Every office for rent Addax Tower hosts at Aegis is on Level 38 — from a flexi desk to a serviced office Addax Tower teams lock at night — so upgrading never means changing buildings.</p>
        </div>

        <div className="sp-controls">
          <div className="sp-tabs" role="tablist" aria-label="Space type" style={{ '--i': idx, '--n': spaces.length }}>
            <span className="sp-pill" aria-hidden="true" />
            {spaces.map((s) => (
              <button key={s.id} type="button" role="tab" id={`tab-${s.id}`} aria-selected={tab === s.id} aria-controls={`panel-${s.id}`}
                tabIndex={tab === s.id ? 0 : -1} className={tab === s.id ? 'on' : ''} onClick={() => setTab(s.id)}>{s.tab}</button>
            ))}
          </div>
          <label className="sp-toggle">
            <span className={!annual ? 'on' : ''}>Monthly</span>
            <input type="checkbox" checked={annual} onChange={(e) => setAnnual(e.target.checked)} aria-label="Show yearly totals" />
            <i aria-hidden="true" />
            <span className={annual ? 'on' : ''}>Yearly</span>
          </label>
        </div>

        <div className="sp-stage">
          {spaces.map((s) => (
            <article key={s.id} id={`panel-${s.id}`} role="tabpanel" aria-labelledby={`tab-${s.id}`} hidden={tab !== s.id} className="sp-panel">
              <figure className="sp-img">
                <img src={images[s.img]} alt={`${s.title} for rent in Addax Tower at Aegis Coworking, ADGM`} width={s.w} height={s.h} loading="lazy" decoding="async" />
                <span className="sp-size">{s.size}</span>
              </figure>
              <div className="sp-body">
                <h3>{s.title}</h3>
                <p className="sp-price" key={annual ? 'y' : 'm'}>{price(s)}</p>
                <p className="sp-text">{s.text}</p>
                <ul className="sp-perks">{s.perks.map((p) => <li key={p}><Icon name="check" size={15} strokeWidth={2.4} />{p}</li>)}</ul>
                <div className="sp-ctas">
                  <a className="btn btn-plum" href={wa(`Hi Aegis, I'm interested in a ${s.tab.toLowerCase()} in Addax Tower.`)} target="_blank" rel="noopener noreferrer">Ask about this space</a>
                  <a className="link-u" href={s.link}>More details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="fine center">Yearly figures are 12 × the monthly rent; ADGM government fees are separate. Ask us on WhatsApp for current offers.</p>
      </div>
    </section>
  )
}

export function Tower() {
  const ref = useScrollVar('--p')
  return (
    <section className="tower sec" id="tower" aria-labelledby="tower-title" ref={ref}>
      <div className="wrap tower-grid">
        <div className="tower-art" aria-hidden="true">
          <svg viewBox="0 0 220 520" className="tw-svg">
            <defs>
              <linearGradient id="tw-glass" x1="0" x2="1">
                <stop offset="0" stopColor="#8a6a7e" /><stop offset=".55" stopColor="#6b4e61" /><stop offset="1" stopColor="#4f3647" />
              </linearGradient>
            </defs>
            <path d="M70 510V70l40-50 40 50v440z" fill="url(#tw-glass)" />
            <path d="M110 20v490" stroke="rgba(255,255,255,.18)" />
            {Array.from({ length: 30 }).map((_, i) => (
              <path key={i} d={`M74 ${90 + i * 14}h72`} stroke="rgba(255,255,255,.12)" />
            ))}
            <rect x="66" y="196" width="88" height="16" rx="3" className="tw-band" />
            <path d="M20 510h180" stroke="#c9b49a" strokeWidth="2" />
          </svg>
          <span className="tw-lift" />
          <span className="tw-tag"><b>Level 38</b><small>Aegis Coworking</small></span>
        </div>

        <div className="tower-copy">
          <p className="kicker">Addax Tower, Al Reem Island</p>
          <h2 id="tower-title">An ADGM address with a view: office space Al Reem Island companies choose</h2>
          <p>
            Addax Tower rises over Al Reem Island, inside the ADGM jurisdiction — an office near ADGM's financial centre at
            business-centre prices. Aegis Coworking runs
            a serviced office Al Reem Island business centre on Level 38, with an office for rent Al Reem Island
            founders can register a company in.
          </p>
          <dl className="tw-facts">
            {towerFacts.map((f, i) => (
              <Reveal key={f.k} variant="slide" delay={i * 90}>
                <dt>{f.k}</dt><dd>{f.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export function Lease() {
  const ref = useScrollVar('--lp')
  return (
    <section className="lease sec" id="lease" aria-labelledby="lease-title" ref={ref}>
      <div className="wrap">
        <div className="head head-center">
          <p className="kicker kicker-light">ADGM office lease</p>
          <h2 id="lease-title">Your ADGM-compliant lease, in five calm steps</h2>
          <p>As an ADGM compliant lease agreement space provider, we prepare the paperwork and register your lease on AccessRP — you just choose the space.</p>
        </div>
        <div className="tl-wrap">
        <span className="tl-line" aria-hidden="true"><span /></span>
        <ol className="tl">
          {leaseSteps.map((s, i) => (
            <Reveal as="li" key={s.title} variant="pop" delay={i * 120} style={{ '--k': i }}>
              <span className="tl-dot" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}

// 3D tilt on hover for the "why" tiles
function TiltCard({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const move = (e) => {
    const el = ref.current
    if (!el || !window.matchMedia('(hover: hover)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--tx', `${(y * -10).toFixed(2)}deg`)
    el.style.setProperty('--ty', `${(x * 12).toFixed(2)}deg`)
    el.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(0)}%`)
    el.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(0)}%`)
  }
  const leave = () => { const el = ref.current; if (el) { el.style.setProperty('--tx', '0deg'); el.style.setProperty('--ty', '0deg') } }
  return (
    <Reveal as="li" variant="pop" delay={delay} className={className}>
      <div className="tilt" ref={ref} onPointerMove={move} onPointerLeave={leave}>{children}</div>
    </Reveal>
  )
}

export function Why() {
  return (
    <section className="why sec" aria-labelledby="why-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="kicker">Business centre ADGM</p>
            <h2 id="why-title">Why Aegis is the space provider in Abu Dhabi Global Market teams pick</h2>
          </div>
          <p>A serviced office ADGM companies can move into on day one — commercial office space ADGM licences accept, without the shell-and-core lease.</p>
        </div>
        <ul className="why-grid">
          {why.map((w, i) => (
            <TiltCard key={w.title} delay={(i % 3) * 90} className={`w${i}`}>
              <span className="why-ic"><Icon name={w.icon} size={22} strokeWidth={1.6} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </TiltCard>
          ))}
          <TiltCard className="why-photo" delay={180}>
            <img src={images.execImg} alt="Executive private office ADGM with skyline views at Aegis Coworking, Addax Tower" width="512" height="512" loading="lazy" decoding="async" />
          </TiltCard>
        </ul>
      </div>
    </section>
  )
}
