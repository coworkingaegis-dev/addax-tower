import { useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { testimonials, faqs, images, BUSINESS } from '../data/content'
import { PhoneLink } from './Navbar'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')

// Shuffling card deck: the top review flies off and slides to the back
export function Reviews() {
  const [order, setOrder] = useState(testimonials.map((_, i) => i))
  const [flying, setFlying] = useState(false)
  const next = () => {
    if (flying) return
    setFlying(true)
    setTimeout(() => { setOrder((o) => [...o.slice(1), o[0]]); setFlying(false) }, 480)
  }
  return (
    <section className="reviews sec" id="reviews" aria-labelledby="rev-title">
      <div className="wrap rev-grid">
        <div className="rev-copy">
          <p className="kicker">Reviews</p>
          <h2 id="rev-title">What members say about the coworking space Addax Tower hosts</h2>
          <p>Two of our member reviews — <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">read more on Google</a>. Tap the card to shuffle.</p>
          <button type="button" className="btn btn-plum" onClick={next}>Next review <Icon name="arrow" size={16} /></button>
          <p className="rev-count" aria-live="polite">{String(order[0] + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</p>
        </div>
        <ul className="deck" onClick={next}>
          {testimonials.map((t, i) => {
            const pos = order.indexOf(i)
            return (
              <li key={t.name} className={`deck-card ${pos === 0 && flying ? 'fly' : ''}`} style={{ '--pos': pos, zIndex: testimonials.length - pos }} aria-hidden={pos !== 0}>
                <figure>
                  <span className="deck-q" aria-hidden="true">“</span>
                  <blockquote><p>{t.quote}</p></blockquote>
                  <figcaption>
                    <span className="deck-av" aria-hidden="true">{initials(t.name)}</span>
                    <span><b>{t.name}</b><small>{t.role}</small></span>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}


export function FAQ() {
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-wrap">
        <div className="head head-center">
          <p className="kicker">FAQ</p>
          <h2 id="faq-title">Addax Tower office rent, answered</h2>
          <p>Still curious? We usually reply on WhatsApp within the hour during business hours.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0 ? true : undefined}>
              <summary><span className="fq-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><h3>{f.q}</h3><span className="fq-ic" aria-hidden="true" /></summary>
              <div className="fq-body">
                <p>{f.a}</p>
                {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
              </div>
            </details>
          ))}
        </div>
        <div className="faq-cta"><a className="btn btn-sage" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a></div>
      </div>
    </section>
  )
}

export function Location() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="location sec" id="location" aria-labelledby="loc-title">
      <div className="wrap loc-grid">
        <div className="map">
          {mapOn ? (
            <iframe title="Map of Aegis Coworking, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)}>
              <img src={images.receptionImg} alt="" width="900" height="675" loading="lazy" decoding="async" />
              <span className="map-pin" aria-hidden="true"><Icon name="pin" size={22} strokeWidth={1.8} /></span>
              <span className="map-tag"><b>Addax Tower, Office 3812</b><small>Al Reem Island, ADGM</small></span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
        <div>
          <p className="kicker">Visit us</p>
          <h2 id="loc-title">Find Aegis in Addax Tower</h2>
          <p className="loc-sub">
            Whether you are comparing office rental Abu Dhabi options, an office for rent Abu Dhabi teams can share or a
            serviced office Abu Dhabi founders can register, the Addax Tower office rent at Aegis covers furnished
            office Addax Tower suites, a furnished office ADGM licence holders use, private office ADGM rooms and a
            business centre Addax Tower clients visit. It is office space for rent in ADGM with an ADGM office lease
            ready for your office for ADGM licence application — our case for the best coworking in Abu Dhabi
            Global Market for the price.
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><PhoneLink>{BUSINESS.phoneDisplay}</PhoneLink></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Tours</dt><dd>Monday–Friday, 9 AM–6 PM · 24/7 access for members</dd></div>
          </dl>
          <a className="btn btn-plum" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap">
        <Reveal className="final-card" variant="clip">
          <div className="final-orbs" aria-hidden="true"><i /><i /><i /></div>
          <p className="kicker kicker-light">ADGM office for rent</p>
          <h2 id="final-title">Your office on Level 38 is waiting</h2>
          <p>Tour Addax Tower this week, or get a video walkthrough on WhatsApp today.</p>
          <div className="final-actions">
            <a className="btn btn-sage" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a tour of Addax Tower.')}`} target="_blank" rel="noopener noreferrer">Book a tour</a>
            <PhoneLink className="btn btn-coral"><Icon name="phone" size={16} />{BUSINESS.phoneDisplay}</PhoneLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
