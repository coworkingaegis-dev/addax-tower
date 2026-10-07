import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Intro, Spaces, Tower, Lease, Why } from '../components/Sections'
import { Reviews, FAQ, Location, FinalCTA, WhatsAppFab } from '../components/More'
import {
  SITE_URL, MAIN_SITE, PAGE_TITLE, PAGE_DESCRIPTION, DATE_PUBLISHED, DATE_MODIFIED,
  BUSINESS, faqs, guides, keywords, spaces,
} from '../data/content'

const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const BUSINESS_ID = `${MAIN_SITE}/#business`
const priceValidUntil = `${new Date().getFullYear()}-12-31`

const offer = (name, url, description, price) => ({
  '@type': 'Offer', name, url, description,
  ...(price ? {
    price, priceCurrency: 'AED', priceValidUntil,
    priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'AED', unitText: 'MONTH', unitCode: 'MON' },
  } : {}),
  availability: 'https://schema.org/InStock',
  seller: { '@id': BUSINESS_ID },
  itemOffered: { '@type': 'Service', name },
})

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`,
      name: 'Addax Tower Office Space — Aegis Coworking', inLanguage: 'en-AE',
      publisher: { '@id': `${MAIN_SITE}/#organization` },
    },
    {
      '@type': 'WebPage', '@id': `${SITE_URL}/#webpage`, url: `${SITE_URL}/`,
      name: PAGE_TITLE, description: PAGE_DESCRIPTION, inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': BUSINESS_ID },
      mainEntity: { '@id': `${SITE_URL}/#office-space` },
      primaryImageOfPage: OG_IMAGE, datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED,
      breadcrumb: { '@id': `${SITE_URL}/#breadcrumb` },
      keywords: keywords.join(', '),
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-title', '.answer'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Aegis Coworking', item: `${MAIN_SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Addax Tower Business Centre', item: `${MAIN_SITE}/addax-tower-al-reem-island` },
        { '@type': 'ListItem', position: 3, name: 'Addax Tower Office Space', item: `${SITE_URL}/` },
      ],
    },
    {
      '@type': 'Organization', '@id': `${MAIN_SITE}/#organization`, name: BUSINESS.name,
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'LocalBusiness', '@id': BUSINESS_ID, name: BUSINESS.name, alternateName: 'Aegis Coworking',
      description: 'Business centre and office space provider in ADGM at Addax Tower, Al Reem Island — private offices, dedicated desks, flexi desks, virtual offices and meeting rooms.',
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, image: [OG_IMAGE], telephone: '+971503926316',
      email: BUSINESS.email, priceRange: 'AED 100 – AED 4,500', currenciesAccepted: 'AED',
      address: { '@type': 'PostalAddress', streetAddress: BUSINESS.street, addressLocality: 'Abu Dhabi', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
      geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
      hasMap: BUSINESS.mapsUrl,
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
      areaServed: [{ '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM)' }, { '@type': 'Place', name: 'Al Reem Island' }, { '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'Country', name: 'United Arab Emirates' }],
      sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'Place', '@id': `${SITE_URL}/#addax-tower`, name: 'Addax Tower',
      address: { '@type': 'PostalAddress', streetAddress: 'Addax Tower, Al Reem Island', addressLocality: 'Abu Dhabi', addressCountry: 'AE' },
      geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
      containedInPlace: { '@type': 'Place', name: 'Al Reem Island, Abu Dhabi Global Market (ADGM)' },
    },
    {
      '@type': 'Service', '@id': `${SITE_URL}/#office-space`, name: 'Office Space in Addax Tower',
      alternateName: ['Addax Tower office space', 'Office for rent Addax Tower', 'Serviced office Addax Tower', 'Coworking space Addax Tower', 'Business centre Addax Tower'],
      serviceType: 'Serviced office / coworking space', provider: { '@id': BUSINESS_ID },
      areaServed: { '@id': `${SITE_URL}/#addax-tower` },
      description: 'Serviced private offices for 1–20+ people, dedicated desks, flexi desks, virtual offices and meeting rooms on Level 38 of Addax Tower, Al Reem Island, with ADGM-compliant leases registered on AccessRP.',
      offers: offer('Private office', `${SITE_URL}/#spaces`, 'Serviced, furnished private office in Addax Tower.', 4500),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Office space for rent in Addax Tower',
        itemListElement: spaces.map((s) => offer(s.title, `${SITE_URL}/#spaces`, s.text, s.monthly || undefined)),
      },
    },
    {
      '@type': 'FAQPage', '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
}

function AddaxTowerPage() {
  return (
    <>
      <Helmet>
        <html lang="en-AE" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-ae" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta name="geo.region" content="AE-AZ" />
        <meta name="geo.placename" content="Al Reem Island, Abu Dhabi" />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aegis Coworking" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Office space in Addax Tower at Aegis Coworking, Al Reem Island, ADGM" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Spaces />
        <Tower />
        <Lease />
        <Why />
        <Reviews />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default AddaxTowerPage
