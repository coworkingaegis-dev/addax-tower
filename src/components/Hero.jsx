import { useCallback, useEffect, useRef, useState } from 'react'
import heroSmall from '../assets/addax-tower-private-office-640.webp'
import Icon from './Icon'
import { images, slides, BUSINESS } from '../data/content'

const N = slides.length

// Shortest circular distance from the active slide (-2 … 2)
const offsetOf = (i, active) => {
  let d = i - active
  if (d > N / 2) d -= N
  if (d < -N / 2) d += N
  return d
}

function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const heroRef = useRef(null)
  const drag = useRef(null)

  const go = useCallback((d) => setActive((a) => (a + d + N) % N), [])

  // Auto-advance (paused on hover / focus / reduced motion)
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => go(1), 4200)
    return () => clearInterval(t)
  }, [paused, go])

  // Cursor spotlight
  useEffect(() => {
    const el = heroRef.current
    if (!el || !window.matchMedia('(hover: hover)').matches) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('pointermove', move)
    return () => el.removeEventListener('pointermove', move)
  }, [])

  const onDown = (e) => { drag.current = e.clientX }
  const onUp = (e) => {
    if (drag.current == null) return
    const dx = e.clientX - drag.current
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    drag.current = null
  }

  return (
    <section className="hero" id="top" aria-labelledby="hero-title" ref={heroRef}>
      <div className="hero-spot" aria-hidden="true" />
      <div className="hero-petals" aria-hidden="true"><i /><i /><i /><i /><i /></div>

      <div className="wrap hero-head">
        <p className="hero-over hl" style={{ '--d': 0 }}>Level 38 · Al Reem Island · Abu Dhabi Global Market</p>
        <h1 id="hero-title" className="hero-title hl" style={{ '--d': 1 }}>
          Addax Tower office space,<br /><em>your guide to Level 38</em>
        </h1>
        <p className="hero-lead hl" style={{ '--d': 2 }}>
          Your guide to working in Addax Tower on Al Reem Island: where Aegis sits (Level 38, Office 3812), how to
          book a visit, and the serviced offices, desks and coworking space in the tower — with an ADGM-compliant
          lease and one all-in monthly rent from AED 1,000.
        </p>
        <div className="hero-ctas hl" style={{ '--d': 3 }}>
          <a className="btn btn-sage" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to see office space in Addax Tower.')}`} target="_blank" rel="noopener noreferrer">Book a tour</a>
          <a className="btn btn-coral" href="#spaces">View spaces &amp; prices</a>
        </div>
      </div>

      {/* 3D coverflow of the spaces */}
      <div className="flow hl" style={{ '--d': 4 }}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
        onPointerDown={onDown} onPointerUp={onUp}
        role="region" aria-roledescription="carousel" aria-label="Spaces at Aegis Coworking, Addax Tower">
        <button type="button" className="flow-btn flow-prev" onClick={() => go(-1)} aria-label="Previous space"><Icon name="arrow" size={18} /></button>
        <div className="flow-stage">
          {slides.map((s, i) => {
            const o = offsetOf(i, active)
            return (
              <figure key={s.title} className={`flow-card ${o === 0 ? 'is-active' : ''}`} style={{ '--o': o, '--a': Math.abs(o) }}
                aria-hidden={o !== 0} onClick={() => o !== 0 && setActive(i)}>
                <img src={images[s.img]} alt={s.alt} width={s.w} height={s.h} draggable="false"
                  {...(i === 0 ? { srcSet: `${heroSmall} 640w, ${images[s.img]} 1200w`, sizes: '(max-width: 600px) 78vw, 560px', fetchPriority: 'high' } : { loading: 'lazy' })}
                  decoding="async" />
                <figcaption><b>{s.title}</b><span>{s.note}</span></figcaption>
              </figure>
            )
          })}
        </div>
        <button type="button" className="flow-btn flow-next" onClick={() => go(1)} aria-label="Next space"><Icon name="arrow" size={18} /></button>
        <div className="flow-dots">
          {slides.map((s, i) => (
            <button key={s.title} type="button" className={i === active ? 'on' : ''} onClick={() => setActive(i)} aria-label={`Show ${s.title}`} aria-current={i === active} />
          ))}
        </div>
      </div>

      <div className="wrap hero-trust hl" style={{ '--d': 5 }}>
        <p>
          A business centre Addax Tower companies rely on and a space provider in Abu Dhabi Global Market: office
          space Al Reem Island founders can register, flexible office space ADGM teams can grow in — worth a visit if
          you are searching for the best coworking space in Abu Dhabi.
        </p>
      </div>
    </section>
  )
}

export default Hero
